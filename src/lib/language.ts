/**
 * Language utilities for URL path-based language management
 *
 * This module provides utilities for handling internationalization in an Astro application
 * that can work with or without a configurable base path.
 *
 * Supported URL patterns:
 * - With base path: {basePath}/en/..., {basePath}/es/..., {basePath}/ca/...
 * - Without base path: /en/..., /es/..., /ca/...
 * - Default language (en) has no language prefix
 *
 * The base path is configured in app.config.js and can be easily changed for different deployments.
 *
 * Available functions:
 * - getCurrentLanguageFromPath(pathname?): Get language from URL path
 * - navigateToLanguage(language): Navigate to different language version of current page
 * - setLanguageCookie(language): Store language preference in cookies
 */

import { languages, defaultLanguage, basePath } from "@/config";
import type { Language } from "@/types";

/**
 * Cookie name for storing user's preferred language
 */
const LANGUAGE_COOKIE = "preferred-language";

/**
 * Get the base path from the current environment
 * This function detects the base path by looking at the current URL structure
 * and checking for the configured base path
 */
function getBasePath(): string {
    if (typeof window === "undefined") {
        // Server-side: try to get from import.meta.env if available
        try {
            // This will work in Astro SSR context
            const envBase = (import.meta.env?.BASE_URL || "").replace(
                /\/$/,
                ""
            );
            // Don't return "/" as a base path - that's the root, not a subdirectory
            return envBase === "/" ? "" : envBase;
        } catch {
            return "";
        }
    }

    const pathname = window.location.pathname;

    // Check if the path starts with the configured base path
    // Only consider non-root paths as base paths
    if (basePath && basePath !== "/" && pathname.startsWith(basePath)) {
        return basePath;
    }

    return "";
}

/**
 * Get current language from URL path
 * Path format with base: {basePath}/en/... or {basePath}/es/... or {basePath}/ca/...
 * Path format without base: /en/... or /es/... or /ca/...
 * Default language (en) has no prefix: {basePath}/... or /...
 */
export function getCurrentLanguageFromPath(pathname?: string): Language {
    let currentPath: string;

    if (pathname) {
        // Server-side: use provided pathname
        currentPath = pathname;
    } else if (typeof window !== "undefined") {
        // Client-side: use window location
        currentPath = window.location.pathname;
    } else {
        // Fallback to default language
        return defaultLanguage;
    }

    // Remove base path if present
    const basePath = getBasePath();
    if (basePath && currentPath.startsWith(basePath)) {
        currentPath = currentPath.slice(basePath.length);
    }

    // Ensure path starts with /
    if (!currentPath.startsWith("/")) {
        currentPath = "/" + currentPath;
    }

    const pathSegments = currentPath.split("/").filter(Boolean);

    // Check if first segment is a language code
    const firstSegment = pathSegments[0];
    if (firstSegment && languages.includes(firstSegment as Language)) {
        return firstSegment as Language;
    }

    return defaultLanguage;
}

/**
 * Set language in cookies
 */
export function setLanguageCookie(language: Language): void {
    if (typeof document === "undefined") return;

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // 1 year expiry

    // Use the base path for cookie path to ensure it works across the entire app
    const detectedBasePath = getBasePath();
    const cookiePath = detectedBasePath || "/";

    document.cookie = `${LANGUAGE_COOKIE}=${encodeURIComponent(
        language
    )}; expires=${expires.toUTCString()}; path=${cookiePath}; SameSite=Lax`;
}

/**
 * Navigate to a different language version of the current page
 */
export function navigateToLanguage(language: Language): void {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;
    const currentLanguage = getCurrentLanguageFromPath();
    const detectedBasePath = getBasePath();

    let newPath: string;

    // Remove base path from current path for processing
    let workingPath = currentPath;
    if (detectedBasePath && workingPath.startsWith(detectedBasePath)) {
        workingPath = workingPath.slice(detectedBasePath.length);
    }

    // Ensure working path starts with / (handle empty root path)
    if (!workingPath.startsWith("/")) {
        workingPath = "/" + workingPath;
    }

    // Handle the case where workingPath is just "/" (root page)
    const isRootPage = workingPath === "/" || workingPath === "";

    if (currentLanguage === defaultLanguage) {
        // Currently on default language path
        if (language === defaultLanguage) {
            return; // No change needed
        } else {
            // Add language prefix
            if (isRootPage) {
                newPath = `/${language}`;
            } else {
                newPath = `/${language}${workingPath}`;
            }
        }
    } else {
        // Currently on non-default language path
        const pathWithoutLang = workingPath.replace(`/${currentLanguage}`, "");

        if (language === defaultLanguage) {
            // Remove language prefix
            newPath = pathWithoutLang || "/";
        } else {
            // Replace language prefix
            if (pathWithoutLang === "" || pathWithoutLang === "/") {
                newPath = `/${language}`;
            } else {
                newPath = `/${language}${pathWithoutLang}`;
            }
        }
    }

    // Add base path back if it exists
    if (detectedBasePath) {
        newPath = detectedBasePath + newPath;
    }

    // Preserve query parameters and hash
    const queryParams = window.location.search;
    const hash = window.location.hash;
    const fullUrl = newPath + queryParams + hash;

    // Set cookie before navigation
    setLanguageCookie(language);

    // Navigate to new path with preserved query parameters and hash
    window.location.href = fullUrl;
}
