import { CategorySelect } from "@/components/CourseCatalog/CourseFilterPanel/CategorySelect";
import { PagefindSearch } from "@/components/CourseCatalog/CourseFilterPanel/PagefindSearch";
import { SortToggle } from "@/components/CourseCatalog/CourseFilterPanel/SortToggle";
import { YearFilterToggle } from "@/components/CourseCatalog/CourseFilterPanel/YearFilterToggle";
import { YearRangePicker } from "@/components/CourseCatalog/CourseFilterPanel/YearRangePicker";
import { getYearRange } from "@/lib/courseStats";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";

interface Props {
  className?: string;
}

export function CourseFilters({ className }: Props) {
  const filterByYear = useGlobalStore((state) => state.filterByYear);
  const allCourses = useGlobalStore((state) => state.allCourses);

  const { minYear, maxYear } = getYearRange(allCourses);

  return (
    <div
      className={cn(
        "mt-2 flex flex-col gap-2 text-black dark:text-white",
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
        <CategorySelect className="w-full sm:w-60 sm:flex-shrink-0" />
        <PagefindSearch className="w-full sm:flex-1" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex min-h-14 items-end gap-4">
          <SortToggle className="flex flex-1 px-4 sm:max-w-fit" />

          <YearFilterToggle className="flex flex-1 px-4 sm:max-w-fit" />

          {filterByYear && (
            <YearRangePicker
              className="hidden sm:flex sm:flex-1"
              minYear={minYear}
              maxYear={maxYear}
            />
          )}
        </div>

        {filterByYear && (
          <YearRangePicker
            className="flex flex-col gap-2 sm:hidden"
            minYear={minYear}
            maxYear={maxYear}
          />
        )}
      </div>
    </div>
  );
}
