import { SortFilter } from "./SortFilter"
import { RegionFilter } from "./RegionFilter"
import { OnuMember } from "./OnuMember"
export const Filters = () => {
    return (
        <div className="filters">
            <SortFilter />
            <RegionFilter />
            <OnuMember />
        </div>
    )
}