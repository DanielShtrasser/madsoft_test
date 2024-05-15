import styles from "./RadioBtnGroup.module.css";

interface RadioBtnProps {
  answersVariants?: { text: string; id: string }[];
}

export default function RadioBtn({ answersVariants }: RadioBtnProps) {
  return (
    <div className={styles.radio__buttons}>
      {answersVariants &&
        answersVariants.map(({ text, id }) => {
          return (
            <div key={id + text} className={styles.radio}>
              <input
                type="radio"
                name="answer"
                value={id}
                id={id}
                className={styles.radio__input}
              />
              <label htmlFor={id} className={styles.radio__label}>
                {text}
              </label>
            </div>
          );
        })}
    </div>
  );
}
