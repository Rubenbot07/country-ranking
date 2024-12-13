import { Search } from "./Search";

export const Header = () => {
    return (
        <div className="header-container">
            <h3 className="found-countries-container">Found 234 countries</h3>
            <Search />
        </div>
    )
}