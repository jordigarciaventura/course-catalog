import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe } from "lucide-react";
import { languages } from "@/config";
import type { Language } from "@/types";
import { getCurrentLanguageFromPath, navigateToLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export function LanguageSelect({ className }: Props) {
    const [currentLanguage, setCurrentLanguage] = useState<Language | null>(
        null
    );
    const [isLoading, setIsLoading] = useState(true);

    const handleValueChange = (value: string) => {
        const language = value as Language;
        if (languages.includes(language) && language !== currentLanguage) {
            navigateToLanguage(language);
        }
    };

    // Initialize language on mount
    useEffect(() => {
        const language = getCurrentLanguageFromPath();
        setCurrentLanguage(language);
        setIsLoading(false);
    }, []);

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
        if (currentLanguage) {
            const newLanguage = getCurrentLanguageFromPath();
            if (newLanguage !== currentLanguage) {
                setCurrentLanguage(newLanguage);
            }
        }
    }, [currentLanguage]);

    if (isLoading || !currentLanguage) {
        return (
            <Skeleton
                className={cn(
                    "h-9 w-24 backdrop-blur-md bg-white/10 dark:bg-white-800/30 border-none",
                    className
                )}
            />
        );
    }

    return (
        <Select value={currentLanguage} onValueChange={handleValueChange}>
            <SelectTrigger
                className={cn(
                    "w-24 cursor-pointer border-none bg-transparent shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 text-white",
                    className
                )}
            >
                <SelectValue>
                    <span className="flex items-center gap-2 text-white">
                        <Globe className="size-4 text-white" />
                        {currentLanguage.toUpperCase()}
                    </span>
                </SelectValue>
            </SelectTrigger>
            <SelectContent className="border-none backdrop-blur-md bg-white/10 dark:bg-white-800/30">
                {languages.map((language) => (
                    <SelectItem
                        key={language}
                        value={language}
                        className="cursor-pointer hover:bg-white/20 dark:hover:bg-slate-700/40 focus:bg-white/20 dark:focus:bg-slate-700/40 text-white [&_svg]:text-white"
                    >
                        {language.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
