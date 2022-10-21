import { Link } from 'react-router-dom';
import '../styles/glowButton.css';

const HomeBtn = () => {
  return (
    <Link to='gamemode'>
      <div
        className='bg-main-yellow text-white rounded-xl 
      h-10 flex items-center w-64 justify-center mx-auto mb-4 
      shadow-main-shadow transition ease-in-out delay-75 glow'
      >
        Play
      </div>
    </Link>
  );
};

export default HomeBtn;
