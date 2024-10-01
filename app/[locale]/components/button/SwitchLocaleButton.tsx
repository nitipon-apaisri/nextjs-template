"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "@/i18n/routing";
import { useRouter as useNextRouter } from "next/navigation";

export default function SwitchLocaleButton() {
    const router = useRouter();
    const nextRouter = useNextRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState<string | null>(null);
    const [openDropdown, setOpenDropdown] = useState(false);
    const locale = typeof window !== "undefined" ? localStorage.getItem("locale") : "en";
    const locales = [
        {
            locale: "en",
            flag: "/flags/en.svg",
        },
        {
            locale: "th",
            flag: "/flags/th.svg",
        },
    ];

    const handleOnChange = (locale: string) => {
        localStorage.setItem("locale", locale);
        if (pathname === "/") {
            nextRouter.push(`/${locale}`);
        } else {
            router.push(`/${pathname}`);
        }
        setCurrentLocale(locale);
    };

    const handleOpenDropdown = () => { 
        setOpenDropdown(!openDropdown);
    }

    useEffect(() => {
        setCurrentLocale(locale);
    }, [locale]);

    return (
        <>
            <button className="locale-button">{currentLocale && <Image src={`/flags/${currentLocale}.svg`} width={24} height={24} alt={currentLocale} className="rounded-full" onClick={handleOpenDropdown} />}</button>
            <div className={`locale-dropdown transition-all duration-500 ${openDropdown ? "" : "hidden"}`}>
                <div className="locale-buttons">
                    {locales.map((local) => (
                        <button key={local.locale} onClick={() => handleOnChange(local.locale)}>
                            <Image src={local.flag} width={24} height={24} alt={local.locale} className="rounded-full" />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
