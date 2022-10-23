import MainImage from '../assets/undraw_adventure_4hum 1.svg';
import HomeBtn from '../components/HomeBtn';

const Home = () => {
  return (
    <div className='App h-screen w-screen flex flex-col justify-center items-center'>
      <div className=' bg-white w-full max-w-md rounded-3xl text-center shadow-main-shadow'>
        <figure className=' mx-auto w-40 my-7'>
          <img src={MainImage} className='mx-auto' alt='Main Image' />
        </figure>
        <p className=' font-bold text-dark-blue text-lg'>Welcome to my Quiz!</p>
        <p className=' font-semibold text-violet-text text-sm my-3 w-64 mx-auto'>
          You'll get the chance to guess flags or provinces. Be sure to pick one once you press the button.
        </p>
        <p className=' text-sm text-yellow-400 font-semibold mb-3'>Have Fun!</p>
        <HomeBtn />
      </div>
    </div>
  );
};

export default Home;
