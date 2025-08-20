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
        return <p className="text-center mt-20">Redirecting...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="max-w-6xl border-2 border-border rounded-xl mx-auto mt-20 px-4 pt-8 h-[30rem] bg-neutral-100">
                <Heading />
                <Toolbar />
                <Tasks />
            </div>
        </>
    );
}
