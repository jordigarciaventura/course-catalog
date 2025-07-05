/**
 * Example usage of the useTranslation hook demonstrating type safety
 */
import { useTranslation } from "./useTranslation";
import type { Language } from "@/types";

// Example function showing how to use the translation hook
function exampleUsage() {
    const currentLanguage: Language = "en";
    const t = useTranslation(currentLanguage);

    // ✅ Valid keys - these will work and provide autocomplete
    const title = t("index.title"); // "Courses"
    const subtitle = t("index.subtitle"); // "Explore our course catalog"
    const loading = t("common.loading"); // "Loading..."
    const error = t("common.error"); // "Error occurred"

    // ❌ Invalid keys - these will cause TypeScript errors
    // const invalid1 = t('index.titles');      // Error: 'titles' doesn't exist
    // const invalid2 = t('index.title.foo');   // Error: 'title.foo' is not a valid path
    // const invalid3 = t('nonexistent');       // Error: 'nonexistent' is not a valid key
    // const invalid4 = t('common.missing');    // Error: 'missing' doesn't exist in 'common'

    return {
        title,
        subtitle,
        loading,
        error,
    };
}

export { exampleUsage };
