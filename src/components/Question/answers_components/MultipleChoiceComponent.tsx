import { Question } from "../../../types";
// import { useTestContext } from "../../../contexts/testContext";
import CheckBoxGroup from "../../CheckBoxGroup";

// import styles from "../Questions.module.css";

interface QuestionTypeProps {
  question: Question;
}

export default function MultipleChoiceQuestionType({
  question,
}: QuestionTypeProps) {
  const { answersVariants } = question;
  // const { userAnswers, setUserAnswers, currentQuestion, setCurrentQuestion } =
  // useTestContext();

  // function answerHandler(e: React.FormEvent) {
  //   e.preventDefault();
  //   const form = e.currentTarget as HTMLFormElement;
  //   const formData = new FormData(form);

  //   if (formData.has("answer")) {
  //     const userAnswerTxt = formData.getAll("answer").join();
  //     const newUserAnswers = [
  //       ...userAnswers,
  //       { questionId: id, userAnswerTxt: userAnswerTxt },
  //     ];
  //     setUserAnswers(newUserAnswers);
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // }

  return <CheckBoxGroup answersVariants={answersVariants} />;
}
