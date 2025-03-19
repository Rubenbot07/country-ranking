import { useContext, useEffect } from "react"
import CountryContext from "../context/CountryContext"
import { useParams, useNavigate } from "react-router-dom"
import { Hero } from "../Hero"

export const CountryPage = () => {
    const { countries, loading, error, setIsHomePage } = useContext(CountryContext)
    const { id } = useParams()
    const currentCountry = countries.find(country => country.name.common === id);
    const borderCountries = countries.filter(country => currentCountry.borders.includes(country.cca3))
    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true);
    }, []); // This effect runs once when the component mounts and unmounts, is used to set the isHomePage state and reset the search input and avoid bugs
    const navigate = useNavigate()
    const handleClick = (name) => {
        navigate(`/${name}`)
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    if (!currentCountry) {
        return <div>Country not found</div>;
    }

    return (
        <> 
            <Hero />
                        <section className="country-page">
                            <div className="country-page-content">
                                <main>     
                                    <div className="country-page-header">
                                        <div className="main-flag-container">
                                            <img src={currentCountry.flags.svg} alt={currentCountry.flags.alt} />
                                        </div>                   
                                        <div className="country-names">
                                            <h1>{currentCountry.name.common}</h1>
                                            <p>{currentCountry.name.official}</p>
                                        </div>
                                        <div className="main-info-container">
                                            <p>
                                                <span>Population</span>
                                                <span>{currentCountry.population}</span>
                                            </p>
                                            <p>
                                                <span>Area (km&#178;)</span>
                                                <span>{currentCountry.area}</span>
                                            </p>
                                        </div>
                                    </div>
                                        <div className="aditional-info-container">
                                            <p>
                                                <span>Capital</span>
                                                <span>{currentCountry.capital[0]}</span>
                                            </p>
                                            <p>
                                                <span>Subregion</span>
                                                <span>{currentCountry.subregion}</span>
                                            </p>
                                            <p>
                                                <span>Language</span>
                                                <span>{Object.values(currentCountry.languages).join(' ')}</span>
                                            </p>
                                            <p>
                                                <span>Currencies</span>
                                                <span>{Object.entries(currentCountry.currencies)[0][1].name}</span>
                                            </p>
                                            <p>
                                                <span>Continents</span>
                                                <span>{currentCountry.continents.join(' ')}</span>
                                            </p>
                                        </div>
                                        <div className="neighbouring-countries-container">
                                            <h2>Neighbouring Countries</h2>
                                            <div className="flags-container">
                                                {
                                                    borderCountries.map((border) => (
                                                        <div onClick={() => handleClick(border.name.common)} key={border.name.common} className="neighbouring-country">
                                                            <div className="img-container">
                                                                <img src={border.flags.png} alt={border.name.common} />
                                                            </div>
                                                            <p>{border.name.common}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                </main>
                            </div>
                        </section>
        </>
    )
}