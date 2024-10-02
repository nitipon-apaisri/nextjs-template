"use client";
import React, { createContext } from "react";
import useSWR from "swr";

interface AppContextType {
    message: string;
}

const AppContext = createContext<AppContextType>({
    message: "",
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const fetcher = async (url: string) => {
        const response = await fetch(url);
        return response.json();
    };

    const { data: resMessage } = useSWR("/api/", fetcher);
    const { message } = resMessage || { message: null };

    return <AppContext.Provider value={{ message }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
