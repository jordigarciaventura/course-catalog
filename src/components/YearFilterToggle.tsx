import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { cn } from "@/lib/utils";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useGlobalStore } from "@/state";

interface Props {
    className?: string;
}

export function YearFilterToggle({ className }: Props) {
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const filterByYear = useGlobalStore((state) => state.filterByYear);
    const setFilterByYear = useGlobalStore((state) => state.setFilterByYear);

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setFilterByYear(!filterByYear)}
            title={
                filterByYear
                    ? t("index.hideYearFilter")
                    : t("index.showYearFilter")
            }
            className={cn(
                "transition-colors flex-1",
                filterByYear && "bg-accent text-accent-foreground",
                className
            )}
        >
            <Calendar className="h-4 w-4" />
            {t("index.filterByYear")}
        </Button>
    );
}
