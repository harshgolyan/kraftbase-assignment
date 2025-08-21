"use client";

import { useState } from "react";
import { IconArrowsUpDown, IconCirclePlus } from "@tabler/icons-react";
import SortByModal from "./sort-by-modal";

const filters = [
    "Assigned To",
    "Severity",
    "Status",
    "Pentest",
    "Target"
];

export default function Filters() {
    const [isSortByModalOpen, setSortByModalOpen] = useState<boolean>(false);
    return (
        <>
            <div className="xl:flex xl:flex-row hidden items-center relative">
                <button className="flex items-center gap-2 text-primary border px-2 py-1 font-medium border-border rounded-lg cursor-pointer hover:bg-secondary/50" onClick={() => setSortByModalOpen(prev => !prev)}>
                    <IconArrowsUpDown size={20} />
                    Sort by
                </button>
                {
                    filters.map((filter, index) => (
                        <button
                            key={index}
                            className="text-primary border border-dashed px-2 py-1 font-medium border-border rounded-lg ml-2 flex items-center gap-2 cursor-pointer"
                        >
                            <IconCirclePlus size={20} />
                            {filter}
                        </button>
                    ))
                }
                {isSortByModalOpen && <SortByModal setSortByModalOpen={setSortByModalOpen} />}
            </div>
        </>
    )
}