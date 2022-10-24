import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const CountriesData = createContext(null);

function CountriesDataProvider({ children }) {
  let allCountriesData = JSON.parse(localStorage.getItem('countriesCollection')) || [];

  if (allCountriesData.length == 0) {
    const { countriesCollection } = useFetch();
    localStorage.setItem('countriesCollection', JSON.stringify(countriesCollection));
  }

  const returnedData = {
    allCountriesData,
  };

  return <CountriesData.Provider value={returnedData}>{children}</CountriesData.Provider>;
}

export { CountriesDataProvider };
export default CountriesData;
