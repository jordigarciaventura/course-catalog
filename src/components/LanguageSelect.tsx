import React, { useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { languages, languageLabels } from "@/config";
import type { Language } from "@/types";

interface LanguageSelectProps {
    currentLanguage: Language;
    onLanguageChange?: (language: Language) => void;
    className?: string;
}

export function LanguageSelect({
    currentLanguage,
    onLanguageChange,
    className = "w-48",
}: LanguageSelectProps) {
    const handleValueChange = (value: string) => {
        const language = value as Language;
        if (languages.includes(language)) {
            // Call the provided callback
            onLanguageChange?.(language);

            // Dispatch a custom event for other parts of the app to listen to
            const event = new CustomEvent("language-change", {
                detail: { language },
                bubbles: true,
            });
            document.dispatchEvent(event);

            // Update URL parameter for persistence
            const url = new URL(window.location.href);
            url.searchParams.set("lang", language);
            window.history.pushState({}, "", url.toString());

            // Store in localStorage for persistence across sessions
            localStorage.setItem("preferred-language", language);
        }
    };

    // Initialize language from URL or localStorage on mount
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get("lang") as Language;
        const storedLang = localStorage.getItem(
            "preferred-language"
        ) as Language;

        // Priority: URL param > localStorage > current prop
        const initialLang =
            urlLang && languages.includes(urlLang)
                ? urlLang
                : storedLang && languages.includes(storedLang)
                ? storedLang
                : currentLanguage;

        if (initialLang !== currentLanguage) {
            handleValueChange(initialLang);
        }
    }, []);

    return (
        <Select value={currentLanguage} onValueChange={handleValueChange}>
            <SelectTrigger className={className}>
                <SelectValue>{languageLabels[currentLanguage]}</SelectValue>
            </SelectTrigger>
            <SelectContent>
                {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                        {languageLabels[language]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
