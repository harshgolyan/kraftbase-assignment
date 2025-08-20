import { IconSearch } from "@tabler/icons-react";


export default function Searchbar() {
    return (
        <>
            <div className="relative">
                <div className="absolute top-2 left-1">
                    <IconSearch size={20} className="text-subheading" />
                </div>
                <input
                    type="text"
                    placeholder="Search by issue name..."
                    className="border border-border text-subheading placeholder:text-subheading rounded-lg pl-8 py-1"
                />
            </div>
        </>
    );
}
