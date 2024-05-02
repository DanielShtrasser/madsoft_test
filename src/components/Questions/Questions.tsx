import { Question } from "../../types";
import QuestionDisplay from "../QuestionDisplay";
import { useTestContext } from "../../contexts/testContext";

interface QuestionsProps<Q> {
  questions: Q[];
}

export default function Questions<Q>({ questions }: QuestionsProps<Q>) {
  const { currentQuestion } = useTestContext();
  return (
    questions[currentQuestion] && (
      <QuestionDisplay question={questions[currentQuestion] as Question} />
    )
  );
}
