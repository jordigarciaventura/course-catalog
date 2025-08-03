import * as React from "react";
import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "@/i18n/useTranslation";
import type { Language } from "@/types";

export interface YearRange {
    from?: number;
    to?: number;
}

interface YearRangePickerProps {
    currentLanguage: Language;
    yearRange: YearRange;
    onYearRangeChange: (range: YearRange) => void;
    className?: string;
}

export function YearRangePicker({
    currentLanguage,
    yearRange,
    onYearRangeChange,
    className,
}: YearRangePickerProps) {
    const t = useTranslation(currentLanguage);

    // Generate year options - from 2022 to current year + 2
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 2021 + 2 },
        (_, i) => 2022 + i
    );

    const handleFromYearChange = (year: string) => {
        const yearNum = parseInt(year);
        // If "to" year exists and is less than the new "from" year, clear it
        const newRange: YearRange = {
            from: yearNum,
            to:
                yearRange.to && yearRange.to >= yearNum
                    ? yearRange.to
                    : undefined,
        };
        onYearRangeChange(newRange);
    };

    const handleToYearChange = (year: string) => {
        const yearNum = parseInt(year);
        // If "from" year exists and is greater than the new "to" year, clear it
        const newRange: YearRange = {
            from:
                yearRange.from && yearRange.from <= yearNum
                    ? yearRange.from
                    : undefined,
            to: yearNum,
        };
        onYearRangeChange(newRange);
    };

    const clearYears = () => {
        onYearRangeChange({ from: undefined, to: undefined });
    };

    const hasAnyYear = yearRange.from || yearRange.to;

    // Filter available years for "to" select based on "from" selection
    const availableToYears = yearRange.from
        ? years.filter((year) => year >= yearRange.from!)
        : years;

    // Filter available years for "from" select based on "to" selection
    const availableFromYears = yearRange.to
        ? years.filter((year) => year <= yearRange.to!)
        : years;

    return (
        <div className={cn("flex flex-col sm:flex-row gap-2", className)}>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                {/* From Year Picker */}
                <Select
                    value={yearRange.from?.toString() || ""}
                    onValueChange={handleFromYearChange}
                >
                    <SelectTrigger className="w-full sm:w-auto sm:min-w-[120px]">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <SelectValue placeholder={t("index.selectStartDate")} />
                    </SelectTrigger>
                    <SelectContent>
                        {availableFromYears.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Visual separator */}
                <div className="hidden sm:flex items-center px-2 text-muted-foreground">
                    <span>—</span>
                </div>

                {/* To Year Picker */}
                <Select
                    value={yearRange.to?.toString() || ""}
                    onValueChange={handleToYearChange}
                >
                    <SelectTrigger className="w-full sm:w-auto sm:min-w-[120px]">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <SelectValue placeholder={t("index.selectEndDate")} />
                    </SelectTrigger>
                    <SelectContent>
                        {availableToYears.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Clear Button */}
            {hasAnyYear && (
                <Button
                    variant="outline"
                    size="default"
                    onClick={clearYears}
                    className="w-full sm:w-auto"
                    title={t("index.clearDates")}
                >
                    <X className="h-4 w-4" />
                    <span className="hidden md:inline ml-2">
                        {t("index.clearDates")}
                    </span>
                </Button>
            )}
        </div>
    );
}
