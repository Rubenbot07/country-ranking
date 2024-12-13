export const SortFilter = () => {
    return (
        <div className="sort-filter">
            <p className="sort-title">Sort by</p>
            <select>
                <option value="Population">Population</option>
                <option value="Alphabetical">Alphabetical</option>
                <option value="area">Area (km²)</option>
            </select>
        </div>
    )
}