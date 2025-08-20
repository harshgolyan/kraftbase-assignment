import { IconArrowsUpDown } from "@tabler/icons-react";

const filters = [
    "Assigned To",
    "Severity",
    "Status",
    "Pentest",
    "Target"
];

export default function Filters() {
    return (
        <>
            <div className="flex items-center">
                <button className="flex items-center gap-2 text-primary border-2 px-2 py-1 font-medium border-border rounded-lg">
                    <IconArrowsUpDown />
                    Sort By
                </button>
                {
                    filters.map((filter, index) => (
                        <button
                            key={index}
                            className="text-subheading border-2 border-dashed px-2 py-1 font-medium border-border rounded-lg ml-2"
                        >
                            {filter}
                        </button>
                    ))
                }
            </div>
        </>
    )
}