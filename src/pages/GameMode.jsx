import { Link } from 'react-router-dom';
import GameModeButton from '../components/GameModeButton';

const GameMode = () => {
  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <div className='bg-white w-full flex flex-col justify-center max-w-md rounded-3xl shadow-main-shadow h-72'>
        <p className=' text-center text-violet-text font-bold text-2xl'>Choose a game mode!</p>
        <GameModeButton text='Provinces' routeName="/provinces" />
        <GameModeButton text='Flags' routeName="/flags" />
      </div>
    </div>
  );
};

export default GameMode;
