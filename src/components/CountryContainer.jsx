import  CountryContext  from "../context/CountryContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingSkeleton } from "./LoadingSkeleton"

export const CountryContainer = ( ) => {
    const { filteredCountries, loading } = useContext(CountryContext)
    const navigate = useNavigate()
    const handleCountryClick = (country) => {
        navigate(`/${country}`)
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
                            <tr key={country.name.common} onClick={() => handleCountryClick(country.name.common)}>
                                    <td className="country-flag"><img src={country.flags.png} alt={country.name.common} /></td>
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