import { basePath, defaultLanguage, languages } from "@/config";
import type { Language } from "@/types";
import { ui } from "./translations";

// Extract the structure type from the ui object
type UIStructure = typeof ui;

// Helper type to get nested values from the ui object
type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends { en: string; es: string; ca: string }
          ? K
          : T[K] extends object
            ? `${K}.${DeepKeys<T[K]>}`
            : never
        : never;
    }[keyof T]
  : never;

// Type for all possible translation keys
type TranslationKey = DeepKeys<UIStructure>;

/**
 * Get a nested value from an object using dot notation
 */
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

/**
 * Hook to get translated text for UI elements
 * @param language - The language to get translations for
 * @returns Function to get translated text by key
 */
export function useTranslation(language: Language) {
  return function t(key: TranslationKey): string {
    const translation = getNestedValue(ui, key);

    if (!translation || typeof translation !== "object") {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }

    if (language in translation) {
      return translation[language];
    }

    // Fallback to English if the requested language is not available
    return translation.en || key;
  };
}

// Export the translation key type for use in components
export type { TranslationKey };

export function getLangFromUrl(url: URL) {
  let pathname = url.pathname;

  // Remove the configured base path if present
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length);
  }

  // Ensure path starts with /
  if (!pathname.startsWith("/")) {
    pathname = "/" + pathname;
  }

  const [, lang] = pathname.split("/");
  if (languages.includes(lang as Language)) return lang as Language;
  return defaultLanguage;
}
