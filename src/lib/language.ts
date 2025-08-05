/**
 * Language utilities for URL path-based language management
 */

import { languages, defaultLanguage } from "@/config";
import type { Language } from "@/types";

/**
 * Cookie name for storing user's preferred language
 */
const LANGUAGE_COOKIE = "preferred-language";

/**
 * Get current language from URL path
 * Path format: /en/... or /es/... or /ca/...
 * Default language (en) has no prefix: /...
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

    const pathSegments = currentPath.split("/").filter(Boolean);

    // Check if first segment is a language code
    const firstSegment = pathSegments[0];
    if (firstSegment && languages.includes(firstSegment as Language)) {
        return firstSegment as Language;
    }

    return defaultLanguage;
}

/**
 * Get language from cookies
 */
export function getLanguageFromCookie(): Language | null {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === LANGUAGE_COOKIE) {
            const lang = decodeURIComponent(value) as Language;
            return languages.includes(lang) ? lang : null;
        }
    }
    return null;
}

/**
 * Set language in cookies
 */
export function setLanguageCookie(language: Language): void {
    if (typeof document === "undefined") return;

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // 1 year expiry

    document.cookie = `${LANGUAGE_COOKIE}=${encodeURIComponent(
        language
    )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Build URL path for a given language
 * Default language: /path
 * Other languages: /lang/path
 */
export function buildLanguagePath(
    language: Language,
    path: string = ""
): string {
    // Remove leading slash from path
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    if (language === defaultLanguage) {
        return `/${cleanPath}`;
    } else {
        return `/${language}/${cleanPath}`;
    }
}

/**
 * Navigate to a different language version of the current page
 */
export function navigateToLanguage(language: Language): void {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;
    const currentLanguage = getCurrentLanguageFromPath();

    let newPath: string;

    if (currentLanguage === defaultLanguage) {
        // Currently on default language path
        if (language === defaultLanguage) {
            return; // No change needed
        } else {
            // Add language prefix
            newPath = `/${language}${currentPath}`;
        }
    } else {
        // Currently on non-default language path
        const pathWithoutLang = currentPath.replace(`/${currentLanguage}`, "");

        if (language === defaultLanguage) {
            // Remove language prefix
            newPath = pathWithoutLang || "/";
        } else {
            // Replace language prefix
            newPath = `/${language}${pathWithoutLang}`;
        }
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

/**
 * Get the current language with fallback priority:
 * 1. URL path language
 * 2. Cookie language
 * 3. Default language
 */
export function getCurrentLanguage(): Language {
    const pathLanguage = getCurrentLanguageFromPath();

    // If URL has a language, use it
    if (pathLanguage !== defaultLanguage) {
        return pathLanguage;
    }

    // Check cookie for preference
    const cookieLanguage = getLanguageFromCookie();
    if (cookieLanguage && cookieLanguage !== defaultLanguage) {
        // If cookie has non-default language, redirect to that path
        navigateToLanguage(cookieLanguage);
        return cookieLanguage;
    }

    return defaultLanguage;
}
