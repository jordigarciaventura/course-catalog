import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
    currentLanguage: Language;
    showYearFilter: boolean;
    onToggle: (show: boolean) => void;
    className?: string;
}

export function YearFilterToggle({
    currentLanguage,
    showYearFilter,
    onToggle,
    className,
}: Props) {
    const t = useTranslation(currentLanguage);

    const handleToggle = () => {
        const newShowState = !showYearFilter;
        onToggle(newShowState);
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleToggle}
            title={
                showYearFilter
                    ? t("index.hideYearFilter")
                    : t("index.showYearFilter")
            }
            className={cn(
                "transition-colors flex-1",
                showYearFilter && "bg-accent text-accent-foreground",
                className
            )}
        >
            <Calendar className="h-4 w-4" />
            {t("index.filterByYear")}
        </Button>
    );
}
