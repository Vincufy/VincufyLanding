import styles from "./QuizQuestion.module.css";

/**
 * QuizQuestion
 * @param {object} question - { text, options: [{ value, label }] }
 * @param {function} onAnswer - (value, label) => void
 * @param {"forward"|"back"} direction - slide direction for enter animation
 * @param {string|null} selectedValue - value of the option currently "selected" (crafted delay)
 */
const QuizQuestion = ({ question, onAnswer, direction = "forward", selectedValue = null }) => {
  const containerClass = [
    styles.container,
    direction === "back" ? styles.slideBack : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      <h2 className={styles.title}>{question.text}</h2>
      <div className={styles.options}>
        {question.options.map((opt) => {
          const isSelected = selectedValue === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              className={`${styles.option} ${isSelected ? styles.optionSelected : ""}`}
              onClick={() => onAnswer(opt.value, opt.label)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
