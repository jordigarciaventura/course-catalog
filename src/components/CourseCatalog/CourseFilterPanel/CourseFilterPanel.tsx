import { CourseFilters } from "@/components/CourseCatalog/CourseFilterPanel/CourseFilters";

export function CourseFilterPanel() {
  return (
    <div className="bg-background/98 border-border sticky top-0 left-0 z-50 w-full border-b text-black shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-4">
        <CourseFilters />
      </div>
    </div>
  );
}
