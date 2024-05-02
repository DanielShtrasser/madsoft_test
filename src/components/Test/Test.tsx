import { useEffect, useState } from "react";
import Progressbar from "../Progressbar";
import Timer from "../Timer";
import Questions from "../Questions";
import { UserAnswer, Question } from "../../types";
import styles from "./Test.module.css";
import { TestProvider } from "../../contexts/testContext";

interface TestProps {
  data: Question[];
  timer?: { hours: number; minutes: number };
}

export default function Test({ data, timer }: TestProps) {
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [timeIsOut, setTimeIsOut] = useState<boolean>(false);
  const [finish, setFinish] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const questionsFromLocalS = localStorage.getItem("questions");
    if (questionsFromLocalS) {
      setQuestions(JSON.parse(questionsFromLocalS));
    } else {
      setQuestions(data);
      localStorage.setItem("questions", JSON.stringify(data));
    }
    if (timer) {
      localStorage.setItem("hours", String(timer.hours));
      localStorage.setItem("minutes", String(timer.minutes));
    }
  }, []);

  // async function fetchAnswers() {
  //   try {
  //     const res = await fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userAnswers),
  //     });
  //     if (!res.ok) throw new Error("Ответ сети был не ok.");
  //   } catch (error: any) {
  //     console.log("Возникла проблема с вашим fetch запросом: ", error.message);
  //   }
  // }

  useEffect(() => {
    const userAnswersFromLS = localStorage.getItem("userAnswers");
    const currentQuestionFromLS = localStorage.getItem("currentQuestion");

    if (userAnswersFromLS && userAnswersFromLS !== "[]") {
      setUserAnswers(JSON.parse(userAnswersFromLS));
    } else {
      localStorage.setItem("userAnswers", "[]");
    }

    if (currentQuestionFromLS && currentQuestionFromLS !== "0") {
      setCurrentQuestion(JSON.parse(currentQuestionFromLS));
    } else {
      localStorage.setItem("currentQuestion", "0");
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
    localStorage.clear();
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
            <Timer
              hours={timer.hours}
              minutes={timer.minutes}
              setTimeIsOut={setTimeIsOut}
              finish={finish}
            />
          )}
        </div>
        <Progressbar questions={questions} progress={userAnswers.length} />
        {finish ? (
          <div>Тест окончен</div>
        ) : timeIsOut ? (
          <div style={{ width: "90%" }}>Время вышло!</div>
        ) : questions.length ? (
          <Questions questions={questions} />
        ) : (
          <div>Вопросы загружаются</div>
        )}
      </div>
    </TestProvider>
  );
}
