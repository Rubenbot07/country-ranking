import { useContext } from "react"
import CountryContext from "../../context/CountryContext"
export const RegionFilter = () => {
    const { regionFilter, setRegionFilter } = useContext(CountryContext);
    const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']; 
    const handleRegionClick = (region) => {
        if (regionFilter.includes(region)) {
          setRegionFilter(regionFilter.filter((r) => r !== region));
        } else {
          setRegionFilter([...regionFilter, region]);
        }
    };


    return (
        <div className="region-filter">
            <p className="region-title">Region</p>
            <ul className="regions-container">
                {regions.map((region, index) => {
                    return (
                        <li key={index} className={`regions-item ${regionFilter.includes(region) ? 'regions-item-active' : ''}`}
                        onClick={() => handleRegionClick(region)}
                        >{region}</li>
                    )
                })}
            </ul>
        </div>
    )
}