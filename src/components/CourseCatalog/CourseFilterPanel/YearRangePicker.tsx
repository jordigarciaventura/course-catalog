import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { CalendarIcon } from "lucide-react";

interface Props {
  className?: string;
  minYear?: number;
  maxYear?: number;
}

export function YearRangePicker({ className, minYear, maxYear }: Props) {
  const currentLanguage = useCurrentLanguage();
  const t = useTranslation(currentLanguage);

  const sinceyear = useGlobalStore((state) => state.sinceYear);
  const untilYear = useGlobalStore((state) => state.untilYear);
  const setSinceYear = useGlobalStore((state) => state.setSinceYear);
  const setUntilYear = useGlobalStore((state) => state.setUntilYear);

  // Generate year options - use provided min/max or fallback to default range
  const currentYear = new Date().getFullYear();
  const startYear = minYear || 2022;
  const endYear = maxYear || currentYear + 2;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  const handleFromYearChange = (year: string) => {
    if (year === "none") {
      setSinceYear(null);
      return;
    }

    setSinceYear(parseInt(year));
  };

  const handleToYearChange = (year: string) => {
    if (year === "none") {
      setUntilYear(null);
      return;
    }

    setUntilYear(parseInt(year));
  };

  // Filter available years for "to" select based on "from" selection
  const availableToYears =
    sinceyear != null ? years.filter((year) => year >= sinceyear!) : years;

  // Filter available years for "from" select based on "to" selection
  const availableFromYears =
    untilYear != null ? years.filter((year) => year <= untilYear!) : years;

  return (
    <fieldset className={cn("space-y-2", className)}>
      <div className="flex flex-1 items-start gap-2">
        {/* From Year Picker */}
        <div className="flex w-full flex-col gap-1">
          <label
            htmlFor="year-from"
            className="text-muted-foreground text-xs font-medium"
          >
            {t("index.startDate")}
          </label>
          <Select
            value={sinceyear?.toString() || "none"}
            onValueChange={handleFromYearChange}
          >
            <SelectTrigger id="year-from" className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue placeholder={t("index.selectStartDate")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">{t("index.selectStartDate")}</SelectItem>
              {availableFromYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To Year Picker */}
        <div className="flex w-full flex-col gap-1">
          <label
            htmlFor="year-to"
            className="text-muted-foreground text-xs font-medium"
          >
            {t("index.endDate")}
          </label>
          <Select
            value={untilYear?.toString() || "none"}
            onValueChange={handleToYearChange}
          >
            <SelectTrigger id="year-to" className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue placeholder={t("index.selectEndDate")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">{t("index.selectEndDate")}</SelectItem>
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
