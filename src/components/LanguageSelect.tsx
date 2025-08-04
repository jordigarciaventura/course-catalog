import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { languages, languageLabels } from "@/config";
import type { Language } from "@/types";
import { getCurrentLanguageFromPath, navigateToLanguage } from "@/lib/language";

interface Props {
    className?: string;
}

export function LanguageSelect({ className = "w-48" }: Props) {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(() =>
        getCurrentLanguageFromPath()
    );

    const handleValueChange = (value: string) => {
        const language = value as Language;
        if (languages.includes(language) && language !== currentLanguage) {
            navigateToLanguage(language);
        }
    };

    // Listen for popstate events (back/forward navigation)
    useEffect(() => {
        const handlePopstate = () => {
            const newLanguage = getCurrentLanguageFromPath();
            setCurrentLanguage(newLanguage);
        };

        window.addEventListener("popstate", handlePopstate);
        return () => window.removeEventListener("popstate", handlePopstate);
    }, []);

    // Update current language when path changes
    useEffect(() => {
        const newLanguage = getCurrentLanguageFromPath();
        if (newLanguage !== currentLanguage) {
            setCurrentLanguage(newLanguage);
        }
    }, [currentLanguage]);

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
