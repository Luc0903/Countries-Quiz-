import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';
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
    path: '/gamemode/flags',
    element: <FlagsGame />,
  },
  {
    path: '/gamemode/provinces',
    element: <ProvincesGame />,
  },
  {
    path: '/results',
    element: <FinalResult />,
  },
]);
