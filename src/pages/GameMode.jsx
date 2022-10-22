import { Link } from 'react-router-dom';
import GameModeButton from '../components/GameModebutton';

const GameMode = () => {
  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <div className='bg-white w-full flex flex-col justify-center max-w-md rounded-3xl shadow-main-shadow h-72'>
        <p className=' text-center text-violet-text font-medium text-lg'>Choose a game mode!</p>
        <Link to='provinces'>
          <GameModeButton text='Provinces' />
        </Link>
        <Link to='flags'>
          <GameModeButton text='Flags' />
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
