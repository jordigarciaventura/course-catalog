/**
 * React hook for language management and translations
 */

import { useState, useEffect } from "react";
import type { Language } from "@/types";
import { getCurrentLanguageFromPath } from "@/lib/language";
import { useTranslation as useTranslationBase } from "@/i18n/utils";

/**
 * Hook to get current language from URL path
 * Updates when the path changes
 */
export function useCurrentLanguage(): Language {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "en";
        return getCurrentLanguageFromPath();
    });

    useEffect(() => {
        const updateLanguage = () => {
            const newLanguage = getCurrentLanguageFromPath();
            setCurrentLanguage(newLanguage);
        };

        // Listen for popstate events (back/forward navigation)
        window.addEventListener("popstate", updateLanguage);

        // Listen for pushstate/replacestate events
        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;

        window.history.pushState = function (...args) {
            originalPushState.apply(window.history, args);
            updateLanguage();
        };

        window.history.replaceState = function (...args) {
            originalReplaceState.apply(window.history, args);
            updateLanguage();
        };

        return () => {
            window.removeEventListener("popstate", updateLanguage);
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
        };
    }, []);

    return currentLanguage;
}

/**
 * Hook that combines current language with translations
 * This is the main hook to use in components
 */
export function useLanguageAndTranslation() {
    const currentLanguage = useCurrentLanguage();
    const t = useTranslationBase(currentLanguage);

    return {
        currentLanguage,
        t,
    };
}
