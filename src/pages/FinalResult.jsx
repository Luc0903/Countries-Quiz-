import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckerContext from '../context/AnswerChecker';
import '../styles/flagAlignment.css';
import '../styles/glowButton.css';
import WinnersImage from '../assets/undraw_winners_ao2o 2.svg';

const FinalResult = () => {
  const { correctAnswerCount, setCorrectAnswerCount } = useContext(CheckerContext);

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <p className=' text-quiz-title font-bold text-3xl countryQuizAlignment'>COUNTRY QUIZ</p>
      <div className=' bg-white w-full max-w-md flex flex-col items-center rounded-3xl shadow-main-shadow'>
        <figure className=' w-60 h-32 my-14'>
          <img className=' w-full object-cover' src={WinnersImage} alt='Winners' />
        </figure>
        <p className=' text-titles-blue font-bold text-4xl mb-6'>Results</p>
        <p className=' text-violet-text text-xl mb-7'>
          You got <span className=' text-results-green font-bold text-2xl'>{correctAnswerCount}</span> correct answers
        </p>
        <Link
          className=' h-14 flex justify-center items-center my-4 border-2 border-violet-text text-violet-text font-medium rounded-xl w-3/4 mx-auto px-3 glow hover:bg-main-yellow hover:text-white hover:border-main-yellow'
          to='/gamemode'
          onClick={() => setCorrectAnswerCount(0)}
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default FinalResult;
