import { Filters } from "../components/Filters/Filters"
import { Header } from "../components/Header"
import { CountryContainer } from "../components/CountryContainer"
export const Home = () => {
    return (
        <section className="home-page">
            <div className="home-content">
                <Header />
                <main>
                    <Filters />
                    <CountryContainer />
                </main>
            </div>
        </section>
    )
}
