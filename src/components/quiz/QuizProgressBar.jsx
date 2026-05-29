import styles from "./QuizProgressBar.module.css";

const QuizProgressBar = ({ totalSteps, currentStep }) => {
  return (
    <div className={styles.container} role="progressbar"
         aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNumber = i + 1;
        const isActive = stepNumber === currentStep;
        const isDone = stepNumber < currentStep;
        return (
          <div
            key={stepNumber}
            className={`${styles.dot} ${isActive ? styles.active : ""} ${
              isDone ? styles.done : ""
            }`}
          >
            <span className={styles.label}>
              {stepNumber}/{totalSteps}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default QuizProgressBar;
