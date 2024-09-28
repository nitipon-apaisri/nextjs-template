import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Local = "en" | "th";

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as Local)) notFound();

    return {
        messages: (await import(`../lang/${locale}.json`)).default,
    };
});
