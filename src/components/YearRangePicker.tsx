import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
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

interface Props {
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
}: Props) {
    const t = useTranslation(currentLanguage);

    // Generate year options - from 2022 to current year + 2
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 2021 + 2 },
        (_, i) => 2022 + i
    );

    const handleFromYearChange = (year: string) => {
        if (year === "none") {
            const newRange: YearRange = {
                from: undefined,
                to: yearRange.to,
            };
            onYearRangeChange(newRange);
            return;
        }

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
        if (year === "none") {
            const newRange: YearRange = {
                from: yearRange.from,
                to: undefined,
            };
            onYearRangeChange(newRange);
            return;
        }

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

    // Filter available years for "to" select based on "from" selection
    const availableToYears = yearRange.from
        ? years.filter((year) => year >= yearRange.from!)
        : years;

    // Filter available years for "from" select based on "to" selection
    const availableFromYears = yearRange.to
        ? years.filter((year) => year <= yearRange.to!)
        : years;

    return (
        <fieldset className={cn("space-y-2", className)}>
            <div className="flex gap-2 items-start flex-1">
                {/* From Year Picker */}
                <div className="flex flex-col gap-1 w-full">
                    <label
                        htmlFor="year-from"
                        className="text-xs font-medium text-muted-foreground"
                    >
                        {t("index.startDate")}
                    </label>
                    <Select
                        value={yearRange.from?.toString() || "none"}
                        onValueChange={handleFromYearChange}
                    >
                        <SelectTrigger id="year-from" className="w-full">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <SelectValue
                                placeholder={t("index.selectStartDate")}
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">
                                {t("index.selectStartDate")}
                            </SelectItem>
                            {availableFromYears.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* To Year Picker */}
                <div className="flex flex-col gap-1 w-full">
                    <label
                        htmlFor="year-to"
                        className="text-xs font-medium text-muted-foreground"
                    >
                        {t("index.endDate")}
                    </label>
                    <Select
                        value={yearRange.to?.toString() || "none"}
                        onValueChange={handleToYearChange}
                    >
                        <SelectTrigger id="year-to" className="w-full">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <SelectValue
                                placeholder={t("index.selectEndDate")}
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">
                                {t("index.selectEndDate")}
                            </SelectItem>
                            {availableToYears.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </fieldset>
    );
}
