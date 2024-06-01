import { Question } from "../../types";
import {
  SelectOneAnswerComponent,
  MultipleChoiceComponent,
  UserResponseComponent,
} from "./answers_components";
import { useTestContext } from "../../contexts/testContext";

import styles from "./Question.module.css";

interface QuestionDisplayProps {
  question: Question;
}

export default function QuestionnDisplay({ question }: QuestionDisplayProps) {
  const { questionTxt, id, type } = question;
  const { userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion } =
    useTestContext();

  function getQuestionComponent() {
    switch (question.type) {
      case "selectOneAnswer":
        return <SelectOneAnswerComponent question={question} />;
      case "multipleChoice":
        return <MultipleChoiceComponent question={question} />;
      case "userResponse":
        return <UserResponseComponent question={question} />;
      default:
        return (
          <div>
            Вопрос не может быть отображен. Проверьте корректность данных.
          </div>
        );
    }
  }

  function getAnswerHandler() {
    switch (type) {
      case "selectOneAnswer":
        return (e: React.FormEvent) => {
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
        };
      case "multipleChoice":
        return (e: React.FormEvent) => {
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
        };
      case "userResponse":
        return (e: React.FormEvent) => {
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
        };
    }
  }

  return (
    <form onSubmit={getAnswerHandler()}>
      <div className={styles.question__display}>
        <h4>{questionTxt}</h4>
        {getQuestionComponent()}
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
}
