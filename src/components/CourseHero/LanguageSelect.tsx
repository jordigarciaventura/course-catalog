import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { languages } from "@/config";
import { getCurrentLanguageFromPath, navigateToLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import type { Language } from "@/types";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export function LanguageSelect({ className }: Props) {
  const [currentLanguage, setCurrentLanguage] = useState<Language | null>(null);
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
          "dark:bg-white-800/30 h-9 w-24 border-none bg-white/10 backdrop-blur-md",
          className,
        )}
      />
    );
  }

  return (
    <Select value={currentLanguage} onValueChange={handleValueChange}>
      <SelectTrigger
        className={cn(
          "w-24 cursor-pointer border-none bg-transparent text-white shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0",
          className,
        )}
      >
        <SelectValue>
          <span className="flex items-center gap-2 text-white">
            <Globe className="size-4 text-white" />
            {currentLanguage.toUpperCase()}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="dark:bg-white-800/30 border-none bg-white/10 backdrop-blur-md">
        {languages.map((language) => (
          <SelectItem
            key={language}
            value={language}
            className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20 dark:hover:bg-slate-700/40 dark:focus:bg-slate-700/40 [&_svg]:text-white"
          >
            {language.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
