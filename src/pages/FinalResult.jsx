import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckerContext from '../context/AnswerChecker';

const FinalResult = () => {
  const { correctAnswerCount, setCorrectAnswerCount } = useContext(CheckerContext);

  return (
    <div>
      <div>{correctAnswerCount}</div>
      <Link to='/' onClick={() => setCorrectAnswerCount(0)}>
        Probando
      </Link>
    </div>
  );
};

export default FinalResult;
