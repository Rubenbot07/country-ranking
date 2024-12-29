import  { createContext } from 'react';
import useFetchCountries from '../customHooks/useFetchContries';
import { useState, useEffect } from 'react';
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const { countries, loading, error } = useFetchCountries();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [sortFilter, setSortFilter] = useState('population');
  const [ONUMember, setONUMember] = useState(false);
  const [independent, setIndependent] = useState(false);

  if(sortFilter === 'population') {
    countries.sort((a, b) => b.population - a.population)
  } else if(sortFilter === 'area') {
    countries.sort((a, b) => b.area - a.area)
  } else if (sortFilter === 'alphabetical') {
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  }
  useEffect(() => {
    setFilteredCountries(countries);
      if(ONUMember) {
        setFilteredCountries(countries.filter((country) => country.unMember));
      }
      if(independent) {
        setFilteredCountries(countries.filter((country) => !country.unMember));
      }
  }, [sortFilter, countries, ONUMember, independent]);


  return (
    <CountryContext.Provider value={{ filteredCountries, countries, loading, error, sortFilter, setSortFilter, setONUMember, setIndependent, ONUMember, independent }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;