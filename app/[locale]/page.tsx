'use client'

import React, { useContext } from "react";
import { AppContext } from "@contexts/AppContext";

export default function Home() {
    const { message } = useContext(AppContext);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold text-center sm:text-6xl dark:text-white">{message}</h1>
            </main>
        </div>
    );
}
