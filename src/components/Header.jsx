import { Search } from "./Search";
import { useContext } from  "react";
import CountryContext from "../context/CountryContext";

export const Header = () => {
    const { filteredCountries } = useContext(CountryContext);
    return (
        <div className="header-container">
            <h3 className="found-countries-container">Found {filteredCountries.length} countries</h3>
            <Search />
        </div>
    )
}