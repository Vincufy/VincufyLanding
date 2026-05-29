import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizProgressBar from "../components/quiz/QuizProgressBar";
import QuizQuestion from "../components/quiz/QuizQuestion";
import { eventosFunnel } from "../funnels/eventos/config";
import { computeSegment } from "../lib/segments";
import { analyticEvent, analyticPageview } from "../lib/posthog";
import styles from "./QuizLander.module.css";

const STORAGE_KEY = "vincufy_quiz_state";
const CRAFTED_DELAY_MS = 240;

const QuizLander = () => {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questionStartedAt, setQuestionStartedAt] = useState(Date.now());
  const [direction, setDirection] = useState("forward");
  const [selectedValue, setSelectedValue] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  // ref to latest stepIndex for use inside the delayed callback
  const stepIndexRef = useRef(stepIndex);
  stepIndexRef.current = stepIndex;

  const questions = eventosFunnel.questions;
  const currentQuestion = questions[stepIndex];

  useEffect(() => {
    analyticPageview("/q/eventos");
    analyticEvent("landing_viewed", { funnel_slug: "eventos" });
    // Restore state if user refreshed mid-quiz
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.stepIndex < questions.length) {
          setStepIndex(saved.stepIndex);
          setAnswers(saved.answers || {});
        }
      }
    } catch { /* ignore sessionStorage errors */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setQuestionStartedAt(Date.now());
    setSelectedValue(null);
    analyticEvent("quiz_question_viewed", {
      step_number: stepIndex + 1,
      question_id: currentQuestion.id,
    });
  }, [stepIndex, currentQuestion.id]);

  const persist = (next) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch { /* ignore sessionStorage errors */ }
  };

  const handleAnswer = (value, label) => {
    if (transitioning) return;

    if (stepIndex === 0 && Object.keys(answers).length === 0) {
      analyticEvent("quiz_started", {});
    }
    const timeOnQuestion = Date.now() - questionStartedAt;

    // Fire analytic immediately (no delay)
    analyticEvent("quiz_answer_selected", {
      step_number: stepIndex + 1,
      question_id: currentQuestion.id,
      answer_value: value,
      answer_label: label,
      time_on_question_ms: timeOnQuestion,
    });

    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);

    // Labor-illusion: show selection fill for 240ms, then navigate
    setSelectedValue(value);
    setTransitioning(true);

    setTimeout(() => {
      const currentStepIndex = stepIndexRef.current;
      setSelectedValue(null);
      setTransitioning(false);

      if (currentStepIndex < questions.length - 1) {
        const nextStep = currentStepIndex + 1;
        setDirection("forward");
        setStepIndex(nextStep);
        persist({ stepIndex: nextStep, answers: nextAnswers });
      } else {
        const segment = computeSegment(nextAnswers);
        analyticEvent("quiz_completed", {
          answers: nextAnswers,
          assigned_segment: segment,
        });
        sessionStorage.removeItem(STORAGE_KEY);
        navigate(`/q/eventos/r/${segment}`, {
          state: { answers: nextAnswers, segment },
        });
      }
    }, CRAFTED_DELAY_MS);
  };

  const handleBack = () => {
    if (stepIndex === 0 || transitioning) return;
    setDirection("back");
    setStepIndex(stepIndex - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.content}>
        {stepIndex > 0 && (
          <button
            type="button"
            className={styles.backButton}
            onClick={handleBack}
            aria-label="Volver a la pregunta anterior"
          >
            ← Atrás
          </button>
        )}
        <QuizProgressBar
          totalSteps={questions.length}
          currentStep={stepIndex + 1}
        />
        <QuizQuestion
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
          direction={direction}
          selectedValue={selectedValue}
        />
      </div>
    </div>
  );
};

export default QuizLander;
