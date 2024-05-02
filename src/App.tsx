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
  {
    type: "A",
    id: 5,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      {
        text: "Et consequat Lorem irure anim dolor eiusmod culpa ea occaecat ut irure ut aliqua.",
        id: "1",
      },
      {
        text: "Elit exercitation do consequat aliquip adipisicing voluptate deserunt ipsum ullamco dolore in quis non sint.",
        id: "2",
      },
      {
        text: "Esse est eiusmod do et voluptate id duis proident in ex ex.",
        id: "3",
      },
    ],
    correctAnswer: ["4"],
  },
  {
    type: "A",
    id: 6,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      {
        text: "Duis mollit magna ipsum est commodo ut laboris nisi ut est excepteur duis est.",
        id: "1",
      },
      { text: "Dolore excepteur elit et officia.", id: "2" },
      { text: "Ullamco reprehenderit quis commodo id duis ea.", id: "3" },
      { text: "Duis dolor Lorem nisi commodo aliquip duis.", id: "4" },
    ],
    correctAnswer: ["4"],
  },
  {
    type: "A",
    id: 7,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      {
        text: "Aute officia duis laboris ipsum ex dolor mollit ipsum.",
        id: "1",
      },
      {
        text: "In commodo voluptate est aute fugiat occaecat do irure sunt excepteur.",
        id: "2",
      },
      { text: "Consectetur ullamco irure commodo commodo.", id: "3" },
      {
        text: "Duis nulla adipisicing sit magna sint irure deserunt occaecat deserunt est pariatur sint.",
        id: "4",
      },
    ],
    correctAnswer: ["4"],
  },
  {
    type: "A",
    id: 8,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      { text: "In Lorem consectetur duis sit amet magna.", id: "1" },
      {
        text: "Laborum mollit et nulla magna laboris duis cupidatat aute commodo eiusmod aute.",
        id: "2",
      },
      { text: "Ipsum consectetur do esse culpa minim.", id: "3" },
      { text: "Fugiat enim et mollit sint.", id: "4" },
    ],
    correctAnswer: ["4"],
  },
  {
    type: "A",
    id: 9,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      {
        text: "Voluptate sunt et dolor consequat qui duis eiusmod velit consectetur dolore non est ut.",
        id: "1",
      },
      {
        text: "Est duis adipisicing enim sunt anim in proident fugiat ut cillum fugiat deserunt.",
        id: "2",
      },
      {
        text: "Eu ut et culpa irure cupidatat amet adipisicing occaecat aliqua esse.",
        id: "3",
      },
    ],
    correctAnswer: ["4"],
  },
  {
    type: "A",
    id: 10,
    questionTxt:
      "Ipsum pariatur veniam qui ex quis irure ut commodo id ut excepteur tempor.",
    answersVariants: [
      { text: "Culpa nulla irure cillum voluptate commodo nisi.", id: "1" },
      {
        text: "Occaecat adipisicing elit elit esse commodo qui culpa eu ex officia voluptate.",
        id: "2",
      },
      { text: "Ipsum incididunt commodo excepteur fugiat.", id: "3" },
      {
        text: "Laborum incididunt velit ullamco amet sunt laboris qui proident pariatur magna.",
        id: "4",
      },
      {
        text: "Laborum irure elit exercitation ut anim tempor ullamco.",
        id: "5",
      },
    ],
    correctAnswer: ["4"],
  },
];

export default function App() {
  return <Test data={data} timer={{ hours: 0, minutes: 10 }} />;
}
