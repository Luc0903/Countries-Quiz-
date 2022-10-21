import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes';
import { CountriesDataProvider } from './context/CountriesData';
import { AnswerCheckerProvider } from './context/AnswerChecker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountriesDataProvider>
      <AnswerCheckerProvider>
        <RouterProvider router={router} />
      </AnswerCheckerProvider>
    </CountriesDataProvider>
  </React.StrictMode>,
);
