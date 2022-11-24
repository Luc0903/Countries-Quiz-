import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const CountriesData = createContext(null);

function CountriesDataProvider({ children }) {
  const { countriesCollection } = useFetch();
  
  const returnedData = {
    countriesCollection,
  };

  return <CountriesData.Provider value={returnedData}>{children}</CountriesData.Provider>;
}

export { CountriesDataProvider };
export default CountriesData;
