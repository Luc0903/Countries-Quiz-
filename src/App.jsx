import { Outlet } from 'react-router-dom';
import './App.css';
import { CountriesDataProvider } from './context/CountriesData';
import { AnswerCheckerProvider } from './context/AnswerChecker';

// FIGMA
// https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1/Country-Quiz?node-id=0%3A1

// HOOK DE KEVIN
// https://github.com/kevin-sg/custom-hooks

function App() {
  return (
    <div>
      <AnswerCheckerProvider>
        <Outlet />
      </AnswerCheckerProvider>
    </div>
  );
}

export default App;
