import { Question } from "../../types";
import styles from "./QuestionDisplay.module.css";
import { useTestContext } from "../../contexts/testContext";

interface QuestionDisplayProps {
  question: Question;
}

interface RadioBtnProps {
  answersVariants?: { text: string; id: string }[];
}

interface CheckBoxProps {
  answersVariants: { text: string; id: string }[];
}

interface QuestionVariantProps {
  question: Question;
}

function RadioBtn({ answersVariants }: RadioBtnProps) {
  return (
    <div className={styles.radio__buttons}>
      {answersVariants &&
        answersVariants.map(({ text, id }) => {
          return (
            <div key={id} className={styles.radio}>
              <input
                type="radio"
                name="answer"
                value={id}
                id={text}
                className={styles.radio__input}
              />
              <label htmlFor={text} className={styles.radio__label}>
                {text}
              </label>
            </div>
          );
        })}
    </div>
  );
}

function CheckBoxGroup({ answersVariants }: CheckBoxProps) {
  return (
    <div className={styles.radio__buttons}>
      {answersVariants &&
        answersVariants.map(({ text, id }) => (
          <div key={id} className={styles.checkbox}>
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

function QuestionVariantA({ question }: QuestionVariantProps) {
  const { questionTxt, answersVariants, id } = question;
  const { userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion } =
    useTestContext();

  function answerHandler(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const answer = formData.get("answer");

    if (answer) {
      const newUserAnswers = [
        ...userAnswers,
        { questionId: id, userAnswerTxt: answer },
      ];
      setUserAnswers(newUserAnswers);
      localStorage.setItem("userAnswers", JSON.stringify(newUserAnswers));

      setCurrentQuestion(currentQuestion + 1);
      localStorage.setItem(
        "currentQuestion",
        JSON.stringify(currentQuestion + 1)
      );
      const chekedElem: HTMLInputElement | null =
        form.querySelector(":checked");
      if (chekedElem) chekedElem.checked = false;
    }
  }

  return (
    <form onSubmit={answerHandler}>
      <div className={styles.question__display}>
        <h4>{questionTxt}</h4>
        <RadioBtn answersVariants={answersVariants} />
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
}

function QuestionVariantB({ question }: QuestionVariantProps) {
  const { questionTxt, answersVariants, id } = question;
  const { userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion } =
    useTestContext();

  function answerHandler(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if (formData.has("answer")) {
      const userAnswerTxt = formData.getAll("answer").join();
      const newUserAnswers = [
        ...userAnswers,
        { questionId: id, userAnswerTxt: userAnswerTxt },
      ];
      setUserAnswers(newUserAnswers);
      localStorage.setItem("userAnswers", JSON.stringify(newUserAnswers));
      setCurrentQuestion(currentQuestion + 1);
      localStorage.setItem(
        "currentQuestion",
        JSON.stringify(currentQuestion + 1)
      );
      const chekedInputs: NodeListOf<HTMLInputElement> | null =
        form.querySelectorAll(":checked");
      for (let i of chekedInputs) {
        i.checked = false;
      }
    }
  }

  return (
    <form onSubmit={answerHandler}>
      <div className={styles.question__display}>
        <h4>{questionTxt}</h4>
        <CheckBoxGroup answersVariants={answersVariants} />
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
}

function QuestionVariantC({ question }: QuestionVariantProps) {
  const { questionTxt, answersVariants, id } = question;
  const { userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion } =
    useTestContext();

  const questionSplit = answersVariants[0].text.split("______");

  function answerHandler(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const answer = formData.get("answer");

    if (answer) {
      const newUserAnswers = [
        ...userAnswers,
        { questionId: id, userAnswerTxt: answer },
      ];

      setUserAnswers(newUserAnswers);
      localStorage.setItem("userAnswers", JSON.stringify(newUserAnswers));
      setCurrentQuestion(currentQuestion + 1);
      localStorage.setItem(
        "currentQuestion",
        JSON.stringify(currentQuestion + 1)
      );
    }
  }

  return (
    <form onSubmit={answerHandler}>
      <div className={styles.question__display}>
        <h4>{questionTxt}</h4>
        <div>
          <code>{questionSplit[0]}</code>
          <input name="answer" style={{ width: "50px" }} />
          <code>{questionSplit[1]}</code>
        </div>
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
}

export default function QuestionDisplay({ question }: QuestionDisplayProps) {
  function getQuestionComponent() {
    switch (question.type) {
      case "A":
        return <QuestionVariantA question={question} />;
      case "B":
        return <QuestionVariantB question={question} />;
      case "C":
        return <QuestionVariantC question={question} />;
    }
  }

  return <>{getQuestionComponent()}</>;
}
