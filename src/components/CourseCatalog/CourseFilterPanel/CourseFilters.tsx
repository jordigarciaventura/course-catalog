import { CategorySelect } from "@/components/CourseCatalog/CourseFilterPanel/CategorySelect";
import { PagefindSearch } from "@/components/CourseCatalog/CourseFilterPanel/PagefindSearch";
import { YearRangePicker } from "@/components/CourseCatalog/CourseFilterPanel/YearRangePicker";

export function CourseFilters() {
  return (
    <div className="flex flex-wrap items-end gap-4 text-black dark:text-white">
      <CategorySelect />
      <PagefindSearch className="mr-4 min-w-42 flex-1" />
      <YearRangePicker />
    </div>
  );
}
