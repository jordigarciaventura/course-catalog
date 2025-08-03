import { PagefindSearch } from "./PagefindSearch";
import { CategorySelect } from "./CategorySelect";
import { SortToggle, type SortOrder } from "./SortToggle";
import { YearRangePicker, type YearRange } from "./YearRangePicker";
import { YearFilterToggle } from "./YearFilterToggle";
import { useTranslation } from "@/i18n/useTranslation";
import type { Course, Language } from "@/types";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface Props {
    courses: Course[];
    currentLanguage: Language;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    sortOrder: SortOrder;
    onSortChange: (order: SortOrder) => void;
    yearRange: YearRange;
    onYearRangeChange: (range: YearRange) => void;
    onSearchResults: (results: Course[]) => void;
    onToggleYearFilter: (show: boolean) => void;
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
    onToggleYearFilter,
    className,
}: Props) {
    const t = useTranslation(currentLanguage);
    const [showYearFilter, setShowYearFilter] = useState(false);

    const handleToggleYearFilter = () => {
        setShowYearFilter((prev) => !prev);
        onToggleYearFilter(!showYearFilter);
    };

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {/* Top row: Category Select + Search (large screens) or stacked (small screens) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <CategorySelect
                    currentLanguage={currentLanguage}
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    className="w-full sm:w-60 sm:flex-shrink-0"
                />
                <PagefindSearch
                    currentLanguage={currentLanguage}
                    courses={courses}
                    onSearchResults={onSearchResults}
                    className="w-full sm:flex-1"
                />
            </div>

            {/* Bottom row: Sort + Year Range (large screens) or stacked with toggle (small screens) */}
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-end min-h-14">
                    <SortToggle
                        currentLanguage={currentLanguage}
                        sortOrder={sortOrder}
                        onSortChange={onSortChange}
                        className="flex flex-1 px-4 sm:max-w-fit"
                    />

                    {/* Year filter toggle for small screens */}
                    <YearFilterToggle
                        currentLanguage={currentLanguage}
                        showYearFilter={showYearFilter}
                        onToggle={handleToggleYearFilter}
                        className="flex flex-1 px-4 sm:max-w-fit"
                    />

                    {/* Year filter for large screens - always visible */}
                    {showYearFilter && (
                        <YearRangePicker
                            currentLanguage={currentLanguage}
                            yearRange={yearRange}
                            onYearRangeChange={onYearRangeChange}
                            className="hidden sm:flex sm:flex-1"
                        />
                    )}
                </div>

                {/* Year filter for small screens - toggleable */}
                {showYearFilter && (
                    <YearRangePicker
                        currentLanguage={currentLanguage}
                        yearRange={yearRange}
                        onYearRangeChange={onYearRangeChange}
                        className="sm:hidden flex flex-col gap-2"
                    />
                )}
            </div>
        </div>
    );
}
