export type Question = {
    id: number;
    type: string;
    questionTxt: string;
    answersVariants: { text: string, id: string }[] | [];
    correctAnswer: string[];
  }
  
export type UserAnswer = { questionId: number, userAnswerTxt: FormDataEntryValue | string }
