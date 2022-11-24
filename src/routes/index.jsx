import { createBrowserRouter } from 'react-router-dom';
import FinalResult from '../pages/FinalResult';
import FlagsGame from '../pages/FlagsGame';
import GameMode from '../pages/GameMode';
import Home from '../pages/Home';
import ProvincesGame from '../pages/ProvincesGame';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gamemode',
    element: <GameMode />,
  },
  {
    path: '/flags',
    element: <FlagsGame />,
  },
  {
    path: '/provinces',
    element: <ProvincesGame />,
  },
  {
    path: '/results',
    element: <FinalResult />,
  },
]);
