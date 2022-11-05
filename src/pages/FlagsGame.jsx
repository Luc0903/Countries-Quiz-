import { useContext } from 'react';
import AnswersButton from '../components/AnswersButton';
import CountriesData from '../context/CountriesData';
import useSortCountries from '../hooks/useSortCountries';
import MainImage from '../assets/undraw_adventure_4hum 1.svg';
import '../styles/glowButton.css';
import '../styles/flagAlignment.css';
import { v4 as uuid } from 'uuid';
import StartGameButton from '../components/StartGameButton';

const FlagsGame = () => {
  const { allCountriesData } = useContext(CountriesData);
  const { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer } =
    useSortCountries(allCountriesData);

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <p className=' text-quiz-title font-bold text-2xl countryQuizAlignment'>COUNTRY QUIZ</p>
      {!gameNotStarted && (
        <div className=' bg-white w-full max-w-md rounded-3xl shadow-main-shadow relative'>
          <figure className=' absolute w-36 h-36 -top-14 right-7'>
            <img src={MainImage} alt='A man standing next to a globe' />
          </figure>
          <figure className=' h-14 w-20 mt-11 flagAlignment mb-1'>
            <img
              className=' w-full object-cover rounded-sm flagBorder'
              src={correctAnswer.flags.png}
              alt='country flag'
            />
          </figure>
          <p className=' flagAlignment text-titles-blue font-bold text-2xl'>Which country does this flag belong to? </p>
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
        </div>
      )}
      {gameNotStarted && <StartGameButton setGameStart={setGameStart} createNewPattern={createNewPattern} />}
    </div>
  );
};

export default FlagsGame;
