import { APP_BASE_PATH } from "../app.config.js";

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
 * Default language setting
 */
export const defaultLanguage = "en" as const;

/**
 * Base path configuration for the application
 * Set to empty string for root deployment, or to a path like "/course-catalog" for subdirectory deployment
 */
export const basePath = APP_BASE_PATH;

export const creator = "Jordi García Ventura" as const;

/**
 * Utility function to create asset URLs with the correct base path
 * @param assetPath - The asset path relative to public/ (e.g., "/icons/layout.svg")
 * @returns The complete asset URL with base path if needed
 */
export function asset(assetPath: string): string {
    // Remove leading slash if present
    const cleanPath = assetPath.startsWith("/")
        ? assetPath.slice(1)
        : assetPath;

    // Add base path if it exists
    if (basePath) {
        return `${basePath}/${cleanPath}`;
    }

    return `/${cleanPath}`;
}
