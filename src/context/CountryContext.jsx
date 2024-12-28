import  { createContext } from 'react';
import useFetchCountries from '../customHooks/useFetchContries';
import { useState } from 'react';
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const { countries, loading, error } = useFetchCountries();
  const [sortFilter, setSortFilter] = useState('population');
  if(sortFilter === 'population') {
    countries.sort((a, b) => b.population - a.population)
  } else if(sortFilter === 'area') {
    countries.sort((a, b) => b.area - a.area)
  } else if (sortFilter === 'alphabetical') {
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  }
  return (
    <CountryContext.Provider value={{ countries, loading, error, sortFilter, setSortFilter }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;