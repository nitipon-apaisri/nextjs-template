import { Link } from "@/i18n/routing";

import SwitchTheme from "@components/button/SwitchThemeButton";
import SwitchLocaleButton from "./button/SwitchLocaleButton";
export default function Header() {
    return (
        <header>
            <div>
                <div className="logo"></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
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
