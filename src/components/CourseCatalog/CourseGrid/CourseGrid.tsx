import { Button } from "@/components/ui/button";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { ui } from "@/i18n/translations";
import { useGlobalStore } from "@/state";
import { RotateCcw, SearchX } from "lucide-react";
import { CourseCard } from "./CourseCard";

export function CourseGrid() {
  const currentLanguage = useCurrentLanguage();

  const filteredAndSortedCourses = useGlobalStore(
    (state) => state.filteredAndSortedCourses,
  );
  const resetFilters = useGlobalStore((state) => state.resetFilters);
  const hasAnyFilterActive = useGlobalStore((state) =>
    state.hasAnyActiveFilters(),
  );

  return (
    <div className="bg-background relative z-10 mx-auto flex w-full items-center pt-8">
      {filteredAndSortedCourses.length === 0 ? (
        <div
          className="mx-auto flex h-full flex-col items-center justify-center gap-6 p-8 text-center"
          style={{ minHeight: "calc(100vh - 216px)" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="bg-muted/50 rounded-full p-4">
              <SearchX className="text-muted-foreground h-12 w-12" />
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground text-xl font-semibold">
                {ui.index.noResults[currentLanguage]}
              </h3>
              <p className="text-muted-foreground max-w-md">
                {ui.index.noResultsMessage[currentLanguage]}
              </p>
              <p className="text-muted-foreground text-sm">
                {ui.index.noResultsSuggestion[currentLanguage]}
              </p>
            </div>
          </div>
          {hasAnyFilterActive && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => resetFilters()}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              {ui.index.clearFilters[currentLanguage]}
            </Button>
          )}
        </div>
      ) : (
        <div className="xs:grid-cols-2 mx-auto grid min-h-screen max-w-4xl auto-rows-max grid-cols-1 gap-4 p-6 pb-48 lg:grid-cols-3">
          {filteredAndSortedCourses.map((course) => {
            const title = course.title[currentLanguage];
            const description = course.description[currentLanguage];

            // Determine if title is long (more than 50 characters)
            const hasLongTitle = title.length > 50;

            // Determine if description is long (more than 150 characters)
            const hasLongDescription = description.length > 150;

            // Build dynamic classes for grid spanning
            const gridClasses = [
              hasLongTitle ? "sm:col-span-2 md:col-span-2" : "",
              hasLongDescription ? "row-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={course.id} className={gridClasses}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
