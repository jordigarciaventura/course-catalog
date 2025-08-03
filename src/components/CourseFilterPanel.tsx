import { PagefindSearch } from "./PagefindSearch";
import { CategorySelect } from "./CategorySelect";
import { SortToggle, type SortOrder } from "./SortToggle";
import { YearRangePicker, type YearRange } from "./YearRangePicker";
import { Button } from "./ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import type { Course, Language } from "@/types";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { useState } from "react";

interface CourseFilterPanelProps {
    courses: Course[];
    currentLanguage: Language;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
    yearRange: YearRange;
    onYearRangeChange: (range: YearRange) => void;
    onSearchResults: (results: Course[]) => void;
    className?: string;
}

export function CourseFilterPanel({
    courses,
    currentLanguage,
    selectedCategory,
    onCategoryChange,
    sortOrder,
    onSortChange,
    yearRange,
    onYearRangeChange,
    onSearchResults,
    className,
}: CourseFilterPanelProps) {
    const t = useTranslation(currentLanguage);
    const [showYearFilter, setShowYearFilter] = useState(true);

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <PagefindSearch
                currentLanguage={currentLanguage}
                courses={courses}
                onSearchResults={onSearchResults}
                className="w-full"
            />

            <CategorySelect
                currentLanguage={currentLanguage}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
                className="w-full"
            />

            <div className="flex gap-2 w-full">
                <SortToggle
                    currentLanguage={currentLanguage}
                    sortOrder={sortOrder}
                    onSortChange={onSortChange}
                    className="flex-1"
                />

                {/* Button to toggle year filter visibility */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        const newShowState = !showYearFilter;
                        setShowYearFilter(newShowState);
                        // Clear year range when hiding the filter
                        if (!newShowState) {
                            onYearRangeChange({
                                from: undefined,
                                to: undefined,
                            });
                        }
                    }}
                    title={
                        showYearFilter
                            ? t("index.hideYearFilter")
                            : t("index.showYearFilter")
                    }
                    className={cn(
                        "transition-colors flex-1",
                        showYearFilter && "bg-accent text-accent-foreground"
                    )}
                >
                    <Calendar className="h-4 w-4" />
                    {t("index.filterByYear")}
                </Button>
            </div>
            {showYearFilter && (
                <div className="flex gap-2">
                    <YearRangePicker
                        currentLanguage={currentLanguage}
                        yearRange={yearRange}
                        onYearRangeChange={onYearRangeChange}
                        className="w-full"
                    />
                </div>
            )}
        </div>
    );
}
