import { useContext } from 'react';
import AnswersButton from '../components/AnswersButton';
import CountriesData from '../context/CountriesData';
import useSortCountries from '../hooks/useSortCountries';
import '../styles/glowButton.css';
import { v4 as uuid } from 'uuid';

const FlagsGame = () => {
  const { allCountriesData } = useContext(CountriesData);
  const { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer } =
    useSortCountries(allCountriesData);

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      {!gameNotStarted && (
        <div className=' bg-white w-full max-w-md rounded-3xl  shadow-main-shadow'>
          <p>{correctAnswer.name.common}</p>
          <div>
            {gameUIPattern.map((choice) => {
              return <AnswersButton key={uuid()} text={choice.name.common} correctAnswer={correctAnswer} />;
            })}
          </div>
          <button
            onClick={reset}
            className=' normalGlow w-20 h-10 text-white font-normal bg-main-yellow rounded-lg mb-4'
          >
            Next
          </button>
        </div>
      )}

      {gameNotStarted && (
        <button
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

export default FlagsGame;
