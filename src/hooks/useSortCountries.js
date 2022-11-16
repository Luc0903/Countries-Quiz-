import { useState, useRef, useEffect } from 'react';

const useSortCountries = (countriesInfoArray) => {
  const [gamePattern, setGamePattern] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState({});

  let noRepeatedCountriesPattern = [];
  let temporaryPattern = [];

  const getRandomNumber = () => Math.floor(Math.random() * 250);
  const getRandomCountry = () => countriesInfoArray[getRandomNumber()];

  function createNewPattern() {
    while (noRepeatedCountriesPattern.length < 4) {
      let possibleCountry = getRandomCountry();
      temporaryPattern.push(possibleCountry);
      noRepeatedCountriesPattern = [...new Set(temporaryPattern)];
    }
    setGamePattern(noRepeatedCountriesPattern);
    setCorrectAnswer(noRepeatedCountriesPattern[Math.floor(Math.random() * 4)]);
  }

  useEffect(() => {
    createNewPattern();
  }, []);

  function Reset() {
    noRepeatedCountriesPattern = [];
    temporaryPattern = [];
    createNewPattern();
  }

  return { gamePattern, correctAnswer, Reset };
  // const [gameUIPattern, setUIGamePattern] = useState([]);
  // const [gameNotStarted, setGameStart] = useState(true);
  // const [correctAnswer, setCorrectAnswer] = useState({
  //   name: {
  //     common: 'flag will be here',
  //   },
  //   capital: [],
  //   flags: {},
  // });
  // let gamePattern = [];
  // let temporaryPattern = [];
  // const getRandomNumber = () => Math.floor(Math.random() * 250);
  // const getRandomCountry = () => countriesInfoArray[getRandomNumber()];

  // function createNewPattern() {
  //   while (gamePattern.length < 4) {
  //     let possibleCountry = getRandomCountry();
  //     temporaryPattern.push(possibleCountry);
  //     gamePattern = [...new Set(temporaryPattern)];
  //   }
  //   setUIGamePattern(gamePattern);
  //   setCorrectAnswer(gamePattern[Math.floor(Math.random() * 4)]);
  // }

  // function reset() {
  //   gamePattern = [];
  //   temporaryPattern = [];
  //   createNewPattern();
  // }

  // return { gameUIPattern, gameNotStarted, setGameStart, reset, createNewPattern, correctAnswer };
};

export default useSortCountries;
