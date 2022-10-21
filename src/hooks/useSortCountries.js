import { useState, useRef } from 'react';

const useSortCountries = (countriesInfoArray) => {
  const [gameUIPattern, setUIGamePattern] = useState([]);
  const [gameNotStarted, setGameStart] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState({
    name: {
      common: 'flag will be here',
    },
    capital: [],
    flags: {},
  });
  let gamePattern = [];
  let temporaryPattern = [];
  const getRandomNumber = () => Math.floor(Math.random() * 250);
  const getRandomCountry = () => countriesInfoArray[getRandomNumber()];

  function createNewPattern() {
    while (gamePattern.length < 4) {
      let possibleCountry = getRandomCountry();
      temporaryPattern.push(possibleCountry);
      gamePattern = [...new Set(temporaryPattern)];
    }
    setUIGamePattern(gamePattern);
    setCorrectAnswer(gamePattern[Math.floor(Math.random() * 4)]);
  }

  function reset() {
    gamePattern = [];
    temporaryPattern = [];
    createNewPattern();
  }

  return { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer };
};

export default useSortCountries;
