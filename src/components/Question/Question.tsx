import { Question } from "../../types";
import { useTestContext } from "../../contexts/testContext";
import RadioBtn from "../RadioBtnGroup";
import CheckBoxGroup from "../CheckBoxGroup";
import styles from "./Questions.module.css";

interface QuestionDisplayProps {
  question: Question;
}

interface QuestionTypeProps {
  question: Question;
}

function QuestionTypeA({ question }: QuestionTypeProps) {
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
      setCurrentQuestion(currentQuestion + 1);
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

function QuestionTypeB({ question }: QuestionTypeProps) {
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
      setCurrentQuestion(currentQuestion + 1);
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

function QuestionTypeC({ question }: QuestionTypeProps) {
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
      setCurrentQuestion(currentQuestion + 1);
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
        return <QuestionTypeA question={question} />;
      case "B":
        return <QuestionTypeB question={question} />;
      case "C":
        return <QuestionTypeC question={question} />;
      default:
        return (
          <div>
            Вопрос не может быть отображен. Проверьте корректность данных.
          </div>
        );
    }
  }

  return <>{getQuestionComponent()}</>;
}
