import { createContext, useContext } from "react";
import { UserAnswer, Question } from "../types";

interface TestContext {
    userAnswers: UserAnswer[]
    setUserAnswers:  (state: UserAnswer[]) => void;
    currentQuestion: number; 
    setCurrentQuestion: (num: number) => void;
    questions: Question[]
}

const TestContext = createContext<TestContext | null>(null)

export const TestProvider = TestContext.Provider;

export const useTestContext = () => {
    const data = useContext(TestContext)

    if(!data) throw new Error('can not "useTestContext" outside of the "TestProvider"');
    return data;
}
