"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

import Heading from "@/components/heading";
import Tasks from "@/components/tasks";
import Toolbar from "@/components/toolbar";
import Navbar from "@/components/navbar";

export default function Board() {
    const router = useRouter();
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    if (!isAuthenticated) {
        router.push("/");
        return <p className="text-center font-medium flex justify-center items-center h-screen text-xl">Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="xl:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-sm border border-border rounded-xl mx-auto mt-20 px-4 pt-8 min-h-[30rem] h-auto bg-white pb-4">
                <Heading />
                <Toolbar />
                <Tasks />
            </div>
        </>
    );
}
