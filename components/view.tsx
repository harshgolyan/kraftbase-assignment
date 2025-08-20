"use client";

import { useState } from "react";
import { IconColumns3, IconList } from "@tabler/icons-react";


export default function Views () {
    const [view, setView] = useState("board");
    return (
        <>
            <div className="xl:flex xl:flex-row hidden items-center text-subheading border font-medium border-border rounded-lg divide-x divide-border">
                <div className={`flex items-center gap-2 py-1 px-1 rounded-l-lg cursor-pointer ${view === "board" ? "bg-blue-accent text-blue" : "text-primary"}`} onClick={() => setView("board")}>
                    <IconColumns3 size={20} />
                    Board
                </div>
                <div className={`flex items-center gap-2 py-1 px-1 rounded-r-lg cursor-pointer ${view === "list" ? "bg-blue-accent text-blue" : "text-primary"}`} onClick={() => setView("list")}>
                    <IconList size={20}/>
                    List
                </div>
            </div>
        </>
    )
}