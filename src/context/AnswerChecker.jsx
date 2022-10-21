import { createContext, useState } from 'react';

const CheckerContext = createContext(null);

function AnswerCheckerProvider({ children }) {
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const data = {
    correctAnswerCount,
    setCorrectAnswerCount,
  };

  return <CheckerContext.Provider value={data}>{children}</CheckerContext.Provider>;
}

export { AnswerCheckerProvider };
export default CheckerContext;
