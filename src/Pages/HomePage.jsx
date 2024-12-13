import { Filters } from "../components/Filters/Filters"
import { Header } from "../components/Header"
export const Home = () => {
    return (
        <section className="home-page">
            <div className="home-content">
                <Header />
                <Filters/>
            </div>
        </section>
    )
}
