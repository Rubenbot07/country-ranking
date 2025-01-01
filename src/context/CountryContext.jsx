import  { createContext, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCountries from '../customHooks/useFetchContries';
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const { countries, loading, error } = useFetchCountries();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [sortFilter, setSortFilter] = useState('population');
  const [ONUMember, setONUMember] = useState(false);
  const [independent, setIndependent] = useState(false);
  const [regionFilter, setRegionFilter] = useState(['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']);
  const [searchInput, setSearchInput] = useState('')
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    let updatedCountries = [...countries];

    if (sortFilter === 'population') {
      updatedCountries.sort((a, b) => b.population - a.population);
    } else if (sortFilter === 'area') {
      updatedCountries.sort((a, b) => b.area - a.area);
    } else if (sortFilter === 'alphabetical') {
      updatedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    if (ONUMember) {
      updatedCountries = updatedCountries.filter((country) => country.unMember);
    }

    if (independent) {
      updatedCountries = updatedCountries.filter((country) => country.independent);
    }

    if (regionFilter.length > 0) {
      updatedCountries = updatedCountries.filter((country) => regionFilter.includes(country.region));
    }

    if (searchInput !== '') {
      updatedCountries = updatedCountries.filter((country) => country.name.common.toLowerCase().startsWith(searchInput.toLowerCase()));
    }

    setFilteredCountries(updatedCountries);
  }, [sortFilter, countries, ONUMember, independent, regionFilter, searchInput]);

  useEffect(() => {
    if (isHomePage) {
      setFilteredCountries(countries.sort((a, b) => b.population - a.population));
    }
  }, [isHomePage, countries]);




  return (
    <CountryContext.Provider value={
      {
        filteredCountries,
        countries,
        loading,
        error,
        sortFilter,
        setSortFilter,
        setONUMember,
        setIndependent,
        ONUMember,
        independent,
        regionFilter,
        setRegionFilter,
        searchInput,
        setSearchInput,
        setIsHomePage
      }
     }>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;