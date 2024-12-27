import { Filters } from "../components/Filters/Filters"
import { Header } from "../components/Header"
import { Hero } from "../Hero"
import { CountryContainer } from "../components/CountryContainer"
export const Home = () => {
    return (
        <>
            <Hero />
            <section className="home-page">
                <div className="home-content">
                    <Header />
                    <main>
                        <Filters />
                        <CountryContainer />
                    </main>
                </div>
            </section>
        </>
    )
}
