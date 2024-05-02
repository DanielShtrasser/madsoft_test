import Test from "./components/Test";
import { Question } from "./types";
import "./App.css";

const data: Question[] = [
  {
    type: "A",
    id: 1,
    questionTxt:
      "Что должен знать фронтенд-разработчик? Назовите три ключевых технологии.",
    answersVariants: [
      { text: "HTML, CSS и Javascript", id: "1" },
      { text: "Kotlin, PHP и Javascript", id: "2" },
      { text: "PHP, HTML и CSS", id: "3" },
    ],
    correctAnswer: ["1"],
  },
  {
    type: "B",
    id: 2,
    questionTxt: "Какие из указанных ниже тегов являются строчными?",
    answersVariants: [
      { text: "<address>", id: "1" },
      { text: "<img>", id: "2" },
      { text: "<q>", id: "3" },
      { text: "<pre>", id: "4" },
      { text: "<textarea>", id: "5" },
    ],
    correctAnswer: ["2", "3", "5"],
  },
  {
    type: "C",
    id: 3,
    questionTxt: "Впишите имя функции",
    answersVariants: [
      {
        text: `array1.______((accumulator, currentValue) => accumulator + currentValue, initialValue)`,
        id: "1",
      },
    ],
    correctAnswer: ["reduce"],
  },
  {
    type: "A",
    id: 4,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      { text: "Aliquip quis eiusmod deserunt dolore.", id: "1" },
      { text: "Aliquip quis eiusmod deserunt dolore.", id: "2" },
      { text: "Aliquip quis eiusmod deserunt dolore.", id: "3" },
      { text: "Aliquip quis eiusmod deserunt dolore.", id: "4" },
    ],
    correctAnswer: ["4"],
  },
];

export default function App() {
  return <Test data={data} timer={{ hours: 0, minutes: 10 }} />;
}
