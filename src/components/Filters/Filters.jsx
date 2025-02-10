import { SortFilter } from "./SortFilter"
import { RegionFilter } from "./RegionFilter"
import { OnuMember } from "./OnuMember"
export const Filters = () => {
    return (
        <aside className="filters">
            <SortFilter />
            <RegionFilter />
            <OnuMember />
        </aside>
    )
}