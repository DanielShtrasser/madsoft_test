import styles from "./CheckBoxGroup.module.css";

interface CheckBoxProps {
  answersVariants: { text: string; id: string }[];
}

export default function CheckBoxGroup({ answersVariants }: CheckBoxProps) {
  return (
    <div className={styles.radio__buttons}>
      {answersVariants &&
        answersVariants.map(({ text, id }) => (
          <div key={id + text} className={styles.checkbox}>
            <input
              type="checkbox"
              name="answer"
              value={id}
              id={id}
              className={styles.checkbox__input}
            />
            <label htmlFor={id} className={styles.checkbox__label}>
              {text}
            </label>
          </div>
        ))}
    </div>
  );
}
