import { useEffect, useState } from "react";
import Progressbar from "../Progressbar";
import Timer from "../Timer";
import QuestionDisplay from "../Question";
import { UserAnswer, Question } from "../../types";
import styles from "./Test.module.css";
import { TestProvider } from "../../contexts/testContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface TestProps {
  data: Question[];
  timer?: { hours: number; minutes: number };
}

export default function Test({ data, timer }: TestProps) {
  const [userAnswers, setUserAnswers] = useLocalStorage<UserAnswer[]>(
    "userAnswers",
    []
  );
  const [questions] = useLocalStorage("questions", data);
  const [currentQuestion, setCurrentQuestion] = useLocalStorage(
    "currentQuestion",
    0
  );
  const [timeIsOut, setTimeIsOut] = useState<boolean>(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const minutesFromLS = localStorage.getItem("minutes");
    const hoursFromLS = localStorage.getItem("hours");
    if (timer && !minutesFromLS && !hoursFromLS) {
      localStorage.setItem("hours", String(timer.hours));
      localStorage.setItem("minutes", String(timer.minutes));
    }
  }, []);

  useEffect(() => {
    if (userAnswers.length) {
      if (userAnswers.length === questions.length) {
        setFinish(true);
        // fetchAnswers();
        console.log("userAnswers ", userAnswers);
      }
    }
  }, [userAnswers, questions]);

  useEffect(() => {
    if (timeIsOut || finish) localStorage.clear();
  }, [timeIsOut, finish]);

  return (
    <TestProvider
      value={{
        userAnswers,
        setUserAnswers,
        currentQuestion,
        setCurrentQuestion,
        questions,
      }}
    >
      <div className={styles.test}>
        <div className={styles.header}>
          <h3>Тестирование</h3>
          {timer && !timeIsOut && (
            <Timer timer={timer} setTimeIsOut={setTimeIsOut} finish={finish} />
          )}
        </div>
        <Progressbar questions={questions} progress={userAnswers.length} />
        {finish ? (
          <div>Тест окончен</div>
        ) : timeIsOut ? (
          <div style={{ width: "90%" }}>Время вышло!</div>
        ) : questions.length ? (
          questions[currentQuestion] && (
            <QuestionDisplay
              question={questions[currentQuestion] as Question}
            />
          )
        ) : (
          <div>Вопросы загружаются</div>
        )}
      </div>
    </TestProvider>
  );
}
