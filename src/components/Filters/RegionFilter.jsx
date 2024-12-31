import { useContext } from "react"
import CountryContext from "../../context/CountryContext"
export const RegionFilter = () => {
    const { regionFilter, setRegionFilter } = useContext(CountryContext);
    const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']; 
    
    return (
        <div className="region-filter">
            <p className="region-title">Region</p>
            <ul className="regions-container">
                {regions.map((region, index) => {
                    return (
                        <li key={index} className={`regions-item ${regionFilter.includes(region) ? 'regions-item-active' : ''}`} onClick={() => {
                            if(regionFilter.includes(region)) {
                                setRegionFilter(regionFilter.filter(item => item !== region));
                            } else {
                                setRegionFilter([...regionFilter, region]);
                            }
                        }}>{region}</li>
                    )
                })}
            </ul>
        </div>
    )
}