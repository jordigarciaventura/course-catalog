import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { getYearRange } from "@/lib/courseStats";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { ArrowRightLeft, CalendarIcon } from "lucide-react";

interface Props {
  className?: string;
}

export function YearRangePicker({ className }: Props) {
  const currentLanguage = useCurrentLanguage();
  const t = useTranslation(currentLanguage);

  const olderFirst = useGlobalStore((state) => state.olderFirst);
  const setOlderFirst = useGlobalStore((state) => state.setOlderFirst);

  const allCourses = useGlobalStore((state) => state.allCourses);
  const { minYear, maxYear } = getYearRange(allCourses);

  const defaultSinceYear = olderFirst ? minYear : maxYear;
  const sinceYear =
    useGlobalStore((state) => state.sinceYear) || defaultSinceYear;
  const setSinceYear = useGlobalStore((state) => state.setSinceYear);

  const defaultUntilYear = olderFirst ? maxYear : minYear;
  const untilYear =
    useGlobalStore((state) => state.untilYear) || defaultUntilYear;
  const setUntilYear = useGlobalStore((state) => state.setUntilYear);

  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i,
  );

  const availableFromYears = olderFirst
    ? years.filter((year) => year <= untilYear)
    : years.filter((year) => year >= untilYear);
  const availableToYears = olderFirst
    ? years.filter((year) => year >= sinceYear)
    : years.filter((year) => year <= sinceYear);

  return (
    <fieldset className={cn("space-y-2", className)}>
      <div className="flex flex-1 items-end gap-2">
        {/* From Year Picker */}
        <div className="flex min-w-30 flex-col gap-1">
          <label
            htmlFor="year-from"
            className="text-muted-foreground text-xs font-medium"
          >
            {t("index.startDate")}
          </label>
          <Select
            value={sinceYear?.toString() || "none"}
            onValueChange={(year) => setSinceYear(parseInt(year))}
          >
            <SelectTrigger id="year-from" className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue defaultValue={minYear.toString()} />
            </SelectTrigger>
            <SelectContent>
              {availableFromYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="ghost"
          onClick={() => setOlderFirst(!olderFirst)}
          className="cursor-pointer"
        >
          <ArrowRightLeft />
        </Button>

        {/* To Year Picker */}
        <div className="flex min-w-30 flex-col gap-1">
          <label
            htmlFor="year-to"
            className="text-muted-foreground text-xs font-medium"
          >
            {t("index.endDate")}
          </label>
          <Select
            value={untilYear?.toString() || "none"}
            onValueChange={(year) => setUntilYear(parseInt(year))}
          >
            <SelectTrigger id="year-to" className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue defaultValue={maxYear} />
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
      </div>
    </fieldset>
  );
}
