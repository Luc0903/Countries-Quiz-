import { useContext } from 'react';
import CountriesData from '../context/CountriesData';
import useSortCountries from '../hooks/useSortCountries';
import AnswersButton from '../components/AnswersButton';
import MainImage from '../assets/undraw_adventure_4hum 1.svg';
import '../styles/glowButton.css';
import '../styles/flagAlignment.css';
import { v4 as uuid } from 'uuid';

const ProvincesGame = () => {
  const { allCountriesData } = useContext(CountriesData);
  const { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer } =
    useSortCountries(allCountriesData);

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <p className=' text-quiz-title font-bold text-3xl countryQuizAlignment'>COUNTRY QUIZ</p>
      {!gameNotStarted && (
        <main className=' bg-white w-full max-w-md rounded-3xl shadow-main-shadow relative'>
          <div className=' absolute w-36 h-36 -top-14 right-7'>
            <img src={MainImage} alt='A man standing next to a globe' />
          </div>
          <p className=' flagAlignment font-bold text-2xl text-dark-blue mt-14 mb-6'>
            {correctAnswer.capital[0]} is the capital of
          </p>
          <div>
            {gameUIPattern.map((choice) => {
              return <AnswersButton key={uuid()} text={choice.name.common} correctAnswer={correctAnswer} />;
            })}
          </div>
          <button
            onClick={reset}
            className=' NEXTbuttonAlignment w-20 h-10 text-white font-normal bg-main-yellow rounded-lg mb-4 glow'
          >
            Next
          </button>
        </main>
      )}
      {gameNotStarted && (
        <button
          className='bg-main-yellow text-white rounded-xl h-10 flex items-center w-64 justify-center mx-auto mb-4 shadow-main-shadow transition ease-in-out delay-75 glow'
          onClick={() => {
            setGameStart(false);
            createNewPattern();
          }}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default ProvincesGame;
