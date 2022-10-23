import '../styles/glowButton.css';

const GameModeButton = ({ text }) => {
  return (
    <div className=' h-14 flex justify-between items-center my-4 border-2 border-violet-text text-violet-text font-medium rounded-xl w-3/4 mx-auto px-3 glow hover:border-main-yellow hover:bg-main-yellow'>
      {text}
    </div>
  );
};

export default GameModeButton;
