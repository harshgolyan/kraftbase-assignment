"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "@/components/heading";
import Tasks from "@/components/tasks";
import Toolbar from "@/components/toolbar";
import Navbar from "@/components/navbar";

export default function Board() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated");
        if (auth) {
            setIsAuthenticated(true);
        } else {
            router.push("/");
        }
    }, [router]);

    if (isAuthenticated === null) {
        return <p className="text-center mt-20">Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="max-w-6xl border-2 border-border rounded-xl mx-auto mt-20 px-4 pt-8 h-[30rem]">
                <Heading />
                <Toolbar />
                <Tasks />
            </div>
        </>
    );
}
