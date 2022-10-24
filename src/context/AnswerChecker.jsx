import { createContext, useState } from 'react';

const CheckerContext = createContext(null);

function AnswerCheckerProvider({ children }) {
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const counterData = {
    correctAnswerCount,
    setCorrectAnswerCount,
  };

  return <CheckerContext.Provider value={counterData}>{children}</CheckerContext.Provider>;
}

export { AnswerCheckerProvider };
export default CheckerContext;
