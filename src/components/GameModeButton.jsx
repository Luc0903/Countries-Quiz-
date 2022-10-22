const GameModeButton = ({ text }) => {
  return (
    <div className=' h-14 flex justify-between items-center my-4 border-2 border-violet-text text-violet-text font-medium rounded-xl w-3/4 mx-auto px-3 md:glow md:hover:bg-main-yellow hover:text-white md:hover:border-main-yellow'>
      {text}
    </div>
  );
};

export default GameModeButton;
