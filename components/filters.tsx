"use client";

import { useState } from "react";
import {
    IconArrowsUpDown,
    IconCirclePlus,
    IconMenu2,
    IconX,
} from "@tabler/icons-react";
import SortByModal from "./sort-by-modal";

const filters = ["Assigned To", "Severity", "Status", "Pentest", "Target"];

export default function Filters() {
    const [isSortByModalOpen, setSortByModalOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <div className="xl:flex xl:flex-row hidden items-center relative">
                <button
                    className="flex items-center gap-2 text-primary border px-2 py-1 font-medium border-border rounded-lg cursor-pointer hover:bg-secondary/50"
                    onClick={() => setSortByModalOpen((prev) => !prev)}
                >
                    <IconArrowsUpDown size={20} />
                    Sort by
                </button>
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className="text-primary border border-dashed px-2 py-1 font-medium border-border rounded-lg ml-2 flex items-center gap-2 cursor-pointer"
                    >
                        <IconCirclePlus size={20} />
                        {filter}
                    </button>
                ))}
                {isSortByModalOpen && (
                    <SortByModal setSortByModalOpen={setSortByModalOpen} />
                )}
            </div>
            <div className="xl:hidden relative">
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="text-primary p-2 rounded-lg hover:bg-secondary/50"
                >
                    {isDropdownOpen ? (
                        <IconX size={24} />
                    ) : (
                        <IconMenu2 size={24} />
                    )}
                </button>
                {isDropdownOpen && (
                    <div className="absolute mt-2 left-10 top-0 w-56 bg-white border border-border rounded-lg shadow-lg p-3 z-50">
                        <button
                            className="flex items-center gap-2 w-full text-left text-primary border px-2 py-1 font-medium border-border rounded-lg cursor-pointer hover:bg-secondary/50 mb-2"
                            onClick={() => setSortByModalOpen((prev) => !prev)}
                        >
                            <IconArrowsUpDown size={20} />
                            Sort by
                        </button>
                        <div className="flex flex-col gap-2">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className="flex items-center gap-2 w-full text-left text-primary border border-dashed px-2 py-1 font-medium rounded-lg cursor-pointer hover:bg-secondary/50"
                                >
                                    <IconCirclePlus size={20} />
                                    {filter}
                                </button>
                            ))}
                            {isSortByModalOpen && (
                                <SortByModal
                                    setSortByModalOpen={setSortByModalOpen}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
