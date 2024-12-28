import  CountryContext  from "../context/CountryContext"
import { useContext } from "react"

export const CountryContainer = ( ) => {
    const { countries, loading } = useContext(CountryContext)

    return (
        <div className="table-container">
            <table className="country-container">
                <thead className="country-container-header">
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Area (km&#178;)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading
                        ? <tr><td>Loading...</td></tr> 
                        : countries.map((country) => (
                            <tr key={country.name.common}>
                                <td className="country-flag"><img src={country.flags.png} alt={country.name.common} /></td>
                                <td>{country.name.common}</td>
                                <td>{country.population}</td>
                                <td>{country.area}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}