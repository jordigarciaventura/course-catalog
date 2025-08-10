import { Button } from "@/components/ui/button";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { ui } from "@/i18n/translations";
import { useGlobalStore } from "@/state";

export function ResultsSummary() {
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
    <div className="bg-background w-full">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between p-6 text-sm">
        <p className="text-muted-foreground">
          {ui.index.searchResults[currentLanguage](
            filteredAndSortedCourses.length,
            courses.length,
          )}
        </p>

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
  );
}
