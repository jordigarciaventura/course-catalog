import * as React from "react";
import { CourseCard } from "./CourseCard";
import { CourseFilterPanel } from "./CourseFilterPanel";
import type { Course } from "@/types";
import { ui } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/state";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useEffect } from "react";

interface Props {
    allCourses: Course[];
}

export function CourseGrid({ allCourses }: Props) {
    const currentLanguage = useCurrentLanguage();

    const storeCourses = useGlobalStore((state) => state.allCourses);
    const setCourses = useGlobalStore((state) => state.setAllCourses);
    const courses = storeCourses || allCourses;

    const resetFilters = useGlobalStore((state) => state.resetFilters);
    const filteredAndSortedCourses = useGlobalStore(
        (state) => state.filteredAndSortedCourses
    );
    const hasAnyFilterActive = useGlobalStore((state) =>
        state.hasAnyActiveFilters()
    );

    useEffect(() => setCourses(allCourses), []);

    return (
        <div className="flex flex-col gap-6 max-w-4xl w-full p-4">
            <CourseFilterPanel />
            {filteredAndSortedCourses.length > 0 && (
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        {ui.index.searchResults[currentLanguage](
                            filteredAndSortedCourses.length,
                            courses.length
                        )}
                    </div>
                    {hasAnyFilterActive && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => resetFilters()}
                            className="text-xs"
                        >
                            {ui.index.clearFilters[currentLanguage]}
                        </Button>
                    )}
                </div>
            )}
            {filteredAndSortedCourses.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        {ui.index.noResults[currentLanguage]}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
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
                                <CourseCard
                                    course={course}
                                    className="h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
