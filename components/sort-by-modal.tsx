"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { AppDispatch } from "@/store/store";
import { setLabel, setSortBy } from "@/store/slices/filterSlice";
import { motion } from "motion/react";

export default function SortByModal({
    setSortByModalOpen,
}: {
    setSortByModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [activeModal, setActiveModal] = useState<"label" | "date" | null>(
        null
    );
    console.log("Active Modal:", activeModal);

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="absolute xl:top-10 xl:left-0 left-57 top-0 bg-white h-19 xl:w-fit w-[8rem] rounded-lg border border-border divide-y divide-secondary text-lg font-medium"
            >
                <div
                    className="px-2 py-1 cursor-pointer hover:bg-secondary rounded-t-md"
                    onClick={() => setActiveModal("label")}
                >
                    Sort by Label
                </div>
                <div
                    className="px-2 py-1 cursor-pointer hover:bg-secondary rounded-b-md"
                    onClick={() => setActiveModal("date")}
                >
                    Sort by Date
                </div>
            </motion.div>

            {activeModal === "label" && (
                <SortByLabelModal
                    setActiveModal={setActiveModal}
                    setSortByModalOpen={setSortByModalOpen}
                />
            )}
            {activeModal === "date" && (
                <SortByDateModal
                    setActiveModal={setActiveModal}
                    setSortByModalOpen={setSortByModalOpen}
                />
            )}
        </>
    );
}

export function SortByLabelModal({
    setActiveModal,
    setSortByModalOpen,
}: {
    setActiveModal: React.Dispatch<
        React.SetStateAction<"label" | "date" | null>
    >;
    setSortByModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const categories = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();

    const handleLabelChange = (label: string) => {
        dispatch(setLabel(label));
        setActiveModal(null);
        setSortByModalOpen(false);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="absolute xl:top-10 xl:left-32 top-0 left-90 bg-white h-auto w-fit rounded-lg border border-border text-lg font-medium"
        >
            <div className="cursor-pointer">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:bg-secondary px-2 py-1 rounded-md flex items-center gap-2"
                        onClick={() => handleLabelChange(category.name)}
                    >
                        <div
                            className={`h-2 w-2 rounded-full ${category.color}`}
                        ></div>
                        {category.name}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export function SortByDateModal({
    setActiveModal,
    setSortByModalOpen,
}: {
    setActiveModal: React.Dispatch<
        React.SetStateAction<"label" | "date" | null>
    >;
    setSortByModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const dispatch = useDispatch<AppDispatch>();
    const handleDateSort = (order: "asc" | "desc") => {
        dispatch(setSortBy(order === "asc" ? "dateAsc" : "dateDesc"));
        setActiveModal(null);
        setSortByModalOpen(false);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="absolute xl:top-10 xl:left-32 top-0 left-90 bg-white h-19 xl:w-fit w-[15rem] rounded-lg border border-border divide-y divide-secondary text-lg font-medium"
        >
            <div
                className="px-2 py-1 cursor-pointer hover:bg-secondary rounded-t-md"
                onClick={() => handleDateSort("asc")}
            >
                Sort in Ascending Order
            </div>
            <div
                className="px-2 py-1 cursor-pointer hover:bg-secondary rounded-b-md"
                onClick={() => handleDateSort("desc")}
            >
                Sort in Descending Order
            </div>
        </motion.div>
    );
}
