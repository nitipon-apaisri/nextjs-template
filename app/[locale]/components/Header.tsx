import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import SwitchTheme from "@components/button/SwitchThemeButton";
import SwitchLocaleButton from "./button/SwitchLocaleButton";
export default function Header() {
    const tNavigation = useTranslations("navigation");
    return (
        <header>
            <div>
                <div className="logo"></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">{tNavigation("home")}</Link>
                    </li>
                </ul>
            </nav>
            <div className="justify-self-end">
                <div className="flex items-center gap-4">
                    <SwitchLocaleButton />
                    <SwitchTheme />
                </div>
            </div>
        </header>
    );
}
