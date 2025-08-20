import Filters from "./filters";
import Searchbar from "./search-bar";
import Views from "./view";

export default function Toolbar() {
    return (
        <>
            <div className="flex items-center justify-between my-6">
                <div className="flex items-center gap-2">
                    {/* Search bar */}
                    <Searchbar />
                    {/* Filter options */}
                    <Filters />
                </div>
                {/* view type */}
                <Views />
            </div>
        </>
    );
}
