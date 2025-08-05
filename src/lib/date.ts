import { format, parse } from "date-fns";
import { es, ca, enUS } from "date-fns/locale";
import type { Language } from "@/types";

/**
 * Map language codes to date-fns locales
 */
const localeMap = {
    en: enUS,
    es: es,
    ca: ca,
} as const;

/**
 * Formats a date string from DD/MM/YYYY format to localized "MMM yyyy" format
 * @param dateString - Date string in DD/MM/YYYY format
 * @param language - Language code for localization
 * @returns Formatted date string (e.g., "Jan 2024", "ene 2024", "gen. 2024")
 */
export function formatCourseDate(
    dateString: string,
    language: Language
): string {
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
    return format(parsedDate, "MMM yyyy", {
        locale: localeMap[language],
    });
}

/**
 * Get the appropriate date-fns locale for a given language
 * @param language - Language code
 * @returns Corresponding date-fns locale object
 */
export function getDateLocale(language: Language) {
    return localeMap[language];
}
