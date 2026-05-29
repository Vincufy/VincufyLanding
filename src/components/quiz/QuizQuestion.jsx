import styles from "./QuizQuestion.module.css";

const QuizQuestion = ({ question, onAnswer }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{question.text}</h2>
      <div className={styles.options}>
        {question.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={styles.option}
            onClick={() => onAnswer(opt.value, opt.label)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
