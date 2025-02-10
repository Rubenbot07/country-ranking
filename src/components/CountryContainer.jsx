import  CountryContext  from "../context/CountryContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingSkeleton } from "./LoadingSkeleton"

export const CountryContainer = ( ) => {
    const { filteredCountries, loading } = useContext(CountryContext)
    const navigate = useNavigate()
    const handleCountryClick = (country, e) => {
        if(!e || e.key === 'Enter') {
            console.log('enter')
            navigate(`/${country}`)
        }
    }

    return (
        <div className="table-container">
            <table className="country-container">
                <thead className="country-container-header">
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Area (km&#178;)</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading
                        ? <LoadingSkeleton />
                        : filteredCountries.map((country) => (
                            <tr key={country.name.common} onClick={() => 
                                handleCountryClick(country.name.common)} 
                                onKeyDown={(e) => handleCountryClick(country.name.common, e)} 
                                tabIndex={0} 
                                role="row" 
                                aria-label={`Country ${country.name.common}`}
                            >
                                    <td className="country-flag"><img src={country.flags.svg} alt={country.flags.alt || `Flag of ${country.name.common}`} loading="lazy"/></td>
                                    <td>{country.name.common}</td>
                                    <td>{country.population}</td>
                                    <td>{country.area}</td>
                                    <td>{country.region}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}