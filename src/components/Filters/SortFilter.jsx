import { useContext } from "react";
import CountryContext  from "../../context/CountryContext";
export const SortFilter = () => {
    const { setSortFilter } = useContext(CountryContext);
    const changeSort = (event) => {
        setSortFilter(event.target.value);
    }

    return (
        <div className="sort-filter">
            <p className="sort-title">Sort by</p>
            <select onChange={changeSort}>
                <option value="population">Population</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="area">Area (km&#178;)</option>
            </select>
        </div>
    )
}