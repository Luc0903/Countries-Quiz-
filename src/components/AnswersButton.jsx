import { useContext, useRef, useState } from 'react';
import CheckerContext from '../context/AnswerChecker';
import '../styles/glowButton.css';
import '../styles/answerColours.css';
import { Navigate } from 'react-router-dom';

const AnswersButton = (props) => {
  const { correctAnswerCount, setCorrectAnswerCount } = useContext(CheckerContext);
  const [answerWasWrong, setAnswerWasWrong] = useState(false);

  const optionFromQuiz = useRef(null);

  function isCorrect(e) {
    if (e.target.textContent == props.correctAnswer.name.common) {
      e.target.classList.add('correctAnswer');
      setCorrectAnswerCount(correctAnswerCount + 1);
    } else {
      let allOptions = [...optionFromQuiz.current.parentElement.children];
      allOptions.forEach((option) => {
        if (option.textContent == props.correctAnswer.name.common) {
          option.classList.add('correctAnswer');
          e.target.classList.add('wrongAnswer');
        }
      });
      window.setTimeout(() => {
        setAnswerWasWrong(true);
      }, 500);
    }
  }

  return (
    <div
      ref={optionFromQuiz}
      onClick={(e) => {
        isCorrect(e);
      }}
      className=' h-14 flex justify-between items-center my-4 border-2 border-violet-text text-violet-text font-medium rounded-xl w-3/4 mx-auto px-3 md:glow md:hover:bg-main-yellow hover:text-white md:hover:border-main-yellow'
    >
      {props.text}
      {answerWasWrong && <Navigate to='/results' replace={false} />}
    </div>
  );
};

export default AnswersButton;
