const StartGameButton = ({ setGameStart, createNewPattern }) => {
  return (
    <button
      className='bg-main-yellow text-white rounded-xl h-10 flex items-center w-64 justify-center mx-auto mb-4 shadow-main-shadow transition ease-in-out delay-75 glow'
      onClick={() => {
        setGameStart(false);
        createNewPattern();
      }}
    >
      Start Game
    </button>
  );
};

export default StartGameButton;
