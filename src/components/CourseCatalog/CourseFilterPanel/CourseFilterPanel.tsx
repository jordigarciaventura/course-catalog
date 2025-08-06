import { CourseFilters } from "@/components/CourseCatalog/CourseFilterPanel/CourseFilters";
import { Button } from "@/components/ui/button";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { ui } from "@/i18n/translations";
import { useGlobalStore } from "@/state";

export function CourseFilterPanel() {
  const currentLanguage = useCurrentLanguage();

  const storeCourses = useGlobalStore((state) => state.allCourses);
  const resetFilters = useGlobalStore((state) => state.resetFilters);
  const filteredAndSortedCourses = useGlobalStore(
    (state) => state.filteredAndSortedCourses,
  );
  const hasAnyFilterActive = useGlobalStore((state) =>
    state.hasAnyActiveFilters(),
  );

  const courses = storeCourses || [];

  return (
    <div className="bg-background/98 border-border sticky top-0 left-0 z-50 w-full border-b text-black shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
        <CourseFilters />
        <div className="flex h-9 items-center justify-between">
          <div className="text-muted-foreground text-sm">
            {ui.index.searchResults[currentLanguage](
              filteredAndSortedCourses.length,
              courses.length,
            )}
          </div>
          {hasAnyFilterActive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => resetFilters()}
              className="cursor-pointer text-xs"
            >
              {ui.index.clearFilters[currentLanguage]}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
