import { CourseCard } from "./CourseCard";
import { ui } from "@/i18n/translations";
import { useGlobalStore } from "@/state";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { SearchX, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CourseGrid() {
    const currentLanguage = useCurrentLanguage();

    const filteredAndSortedCourses = useGlobalStore(
        (state) => state.filteredAndSortedCourses
    );
    const resetFilters = useGlobalStore((state) => state.resetFilters);
    const hasAnyFilterActive = useGlobalStore((state) =>
        state.hasAnyActiveFilters()
    );

    return (
        <div className="relative bg-background z-10 w-full mx-auto pt-8 items-center flex">
            {filteredAndSortedCourses.length === 0 ? (
                <div
                    className="mx-auto text-center h-full flex flex-col items-center justify-center gap-6 p-8"
                    style={{ minHeight: "calc(100vh - 216px)" }}
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 rounded-full bg-muted/50">
                            <SearchX className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-foreground">
                                {ui.index.noResults[currentLanguage]}
                            </h3>
                            <p className="text-muted-foreground max-w-md">
                                {ui.index.noResultsMessage[currentLanguage]}
                            </p>
                            <p className="text-sm text-muted-foreground">
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
                <div className="mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max max-w-4xl p-6 pb-48">
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
