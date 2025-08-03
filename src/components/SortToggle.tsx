import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowDown01, ArrowUp01 } from "lucide-react";

export type SortOrder = "asc" | "desc";

interface SortToggleProps {
    currentLanguage: Language;
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
    className?: string;
}

export function SortToggle({
    currentLanguage,
    sortOrder,
    onSortChange,
    className,
}: SortToggleProps) {
    const t = useTranslation(currentLanguage);

    const handleToggle = () => {
        onSortChange(sortOrder === "asc" ? "desc" : "asc");
    };

    const isAscending = sortOrder === "asc";

    return (
        <Button
            variant="outline"
            size="default"
            onClick={handleToggle}
            className={cn("flex items-center gap-2 min-w-[40px]", className)}
            title={
                isAscending
                    ? t("index.sortTooltipAsc")
                    : t("index.sortTooltipDesc")
            }
        >
            {isAscending ? <ArrowDown01 size={16} /> : <ArrowUp01 size={16} />}
            <span className="hidden sm:inline">
                {isAscending
                    ? t("index.sortAscending")
                    : t("index.sortDescending")}
            </span>
        </Button>
    );
}
