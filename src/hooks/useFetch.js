import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchCountriesInfo } from '../service';

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [allCountriesData, setAllCountriesData] = useState([]);

  const callback = useCallback(() => {
    (async () => {
      setLoading(true);
      const { data } = await fetchCountriesInfo();
      setAllCountriesData(data);
      setLoading(false);
    })();
  }, []);

  const countriesCollection = useMemo(() => {
    return allCountriesData?.map((allData) => ({
      name: allData.name,
      capital: allData.capital,
      flags: allData.flags,
    }));
  }, [allCountriesData]);

  useEffect(() => {
    callback();
    return () => {
      setLoading(false);
    };
  }, []);

  return { countriesCollection };
};
