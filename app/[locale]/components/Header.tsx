import SwitchTheme from "@components/button/SwitchThemeButton";
export default function Header() {
    return (
        <header className="flex justify-between items-center p-10">
            <div className="min-w-60">
                <div className="w-12 aspect-square bg-gray-500 dark:bg-gray-50 rounded-lg"></div>
            </div>
            <SwitchTheme />
        </header>
    );
}
