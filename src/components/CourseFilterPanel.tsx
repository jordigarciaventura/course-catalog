import { PagefindSearch } from "./PagefindSearch";
import { CategorySelect } from "./CategorySelect";
import { SortToggle } from "./SortToggle";
import { YearRangePicker } from "./YearRangePicker";
import { YearFilterToggle } from "./YearFilterToggle";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";

interface Props {
    className?: string;
}

export function CourseFilterPanel({ className }: Props) {
    const filterByYear = useGlobalStore((state) => state.filterByYear);

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
                        <YearRangePicker className="hidden sm:flex sm:flex-1" />
                    )}
                </div>

                {filterByYear && (
                    <YearRangePicker className="sm:hidden flex flex-col gap-2" />
                )}
            </div>
        </div>
    );
}
