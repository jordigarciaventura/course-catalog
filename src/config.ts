/**
 * Application configuration file
 * Contains all the core data structures for the course catalog
 */

/**
 * Course categories configuration
 */
export const courseCategories = [
    "data-science",
    "cloud-devops",
    "programming",
    "web-development",
    "ai-ml",
    "databases",
    "mobile-development",
    "game-development",
    "cybersecurity",
    "software-engineering",
] as const;

/**
 * Supported languages configuration
 */
export const languages = ["en", "es", "ca"] as const;

/**
 * Language labels dictionary
 */
export const languageLabels = {
    en: "English",
    es: "Español",
    ca: "Català",
} as const;

/**
 * Default language setting
 */
export const defaultLanguage = "en" as const;
