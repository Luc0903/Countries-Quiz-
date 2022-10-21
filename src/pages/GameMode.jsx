import { Link } from 'react-router-dom';
import AnswersButton from '../components/AnswersButton';

const GameMode = () => {
  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <div className='bg-white w-full flex flex-col justify-center max-w-md rounded-3xl shadow-main-shadow h-72'>
        <p className=' text-center'>Choose a game mode!</p>
        <Link to='provinces'>
          <AnswersButton text='Provinces' />
        </Link>
        <Link to='flags'>
          <AnswersButton text='Flags' />
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
