import { Question } from "../../../types";
// import { useTestContext } from "../../../contexts/testContext";
import RadioBtn from "../../RadioBtnGroup";
// import styles from "../Questions.module.css";

interface QuestionTypeProps {
  question: Question;
}

export default function SelectOneAnswerQuestionType({
  question,
}: QuestionTypeProps) {
  const { answersVariants } = question;

  return <RadioBtn answersVariants={answersVariants} />;
}
