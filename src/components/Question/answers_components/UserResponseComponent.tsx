import { Question } from "../../../types";

interface QuestionTypeProps {
  question: Question;
}

export default function UserResponseQuestionType({
  question,
}: QuestionTypeProps) {
  const { answersVariants } = question;

  const questionSplit = answersVariants[0].text.split("______");

  return (
    <div>
      <code>{questionSplit[0]}</code>
      <input name="answer" style={{ width: "50px" }} />
      <code>{questionSplit[1]}</code>
    </div>
  );
}
