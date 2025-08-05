import { PagefindSearch } from "@/components/CourseCatalog/CourseFilterPanel/PagefindSearch";
import { CategorySelect } from "@/components/CourseCatalog/CourseFilterPanel/CategorySelect";
import { SortToggle } from "@/components/CourseCatalog/CourseFilterPanel/SortToggle";
import { YearRangePicker } from "@/components/CourseCatalog/CourseFilterPanel/YearRangePicker";
import { YearFilterToggle } from "@/components/CourseCatalog/CourseFilterPanel/YearFilterToggle";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { getYearRange } from "@/lib/courseStats";

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
                "flex flex-col mt-2 gap-2 text-black dark:text-white",
                className
            )}
        >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <CategorySelect className="w-full sm:w-60 sm:flex-shrink-0" />
                <PagefindSearch className="w-full sm:flex-1" />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-end min-h-14">
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
                        className="sm:hidden flex flex-col gap-2"
                        minYear={minYear}
                        maxYear={maxYear}
                    />
                )}
            </div>
        </div>
    );
}
