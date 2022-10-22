import { useContext } from 'react';
import AnswersButton from '../components/AnswersButton';
import CountriesData from '../context/CountriesData';
import useSortCountries from '../hooks/useSortCountries';
import '../styles/glowButton.css';
import '../styles/flagAlignment.css';
import { v4 as uuid } from 'uuid';

const FlagsGame = () => {
  const { allCountriesData } = useContext(CountriesData);
  const { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer } =
    useSortCountries(allCountriesData);

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      {!gameNotStarted && (
        <div className=' bg-white w-full max-w-md rounded-3xl  shadow-main-shadow'>
          <div className=' h-14 w-20 mt-8 flagAlignment '>
            <img
              className=' w-full object-cover rounded-sm flagBorder'
              src={correctAnswer.flags.png}
              alt='country flag'
            />
          </div>
          <p className=' flagAlignment text-titles-blue font-bold text-2xl'>Which country does this flag belong to? </p>
          <div>
            {gameUIPattern.map((choice) => {
              return <AnswersButton key={uuid()} text={choice.name.common} correctAnswer={correctAnswer} />;
            })}
          </div>
          <button
            onClick={reset}
            className=' NEXTbuttonAlignment w-20 h-10 text-white font-normal bg-main-yellow rounded-lg mb-4'
          >
            Next
          </button>
        </div>
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

export default FlagsGame;
