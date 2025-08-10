import type { Language } from "@/types";
import { format, parse } from "date-fns";
import { ca, enUS, es } from "date-fns/locale";
import humanizeDurationLib from "humanize-duration";
import parseDuration from "parse-duration";

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
  language: Language,
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

export function humanizeDuration(duration: string, language: Language): string {
  // duration is simple format (e.g., "8h", "1d", "2w", "30m", "45s")
  // language is in ISO 639-1 format (e.g., "en", "es", "ca")

  // Parse duration string using parse-duration library (no regex needed)
  const milliseconds = parseDuration(duration);

  if (milliseconds === null || milliseconds === undefined) {
    return duration; // Return original if parsing fails
  }

  if (milliseconds === 0) {
    return "0s";
  }

  // Use humanize-duration library with language support
  // Let the library handle all language-specific formatting naturally
  return humanizeDurationLib(milliseconds, {
    language: language,
    round: true,
    largest: 1, // Only show the largest unit
    delimiter: "",
    units: ["y", "mo", "w", "d", "h", "m", "s"],
    maxDecimalPoints: 0,
  });
}
