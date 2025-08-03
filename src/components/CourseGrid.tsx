import * as React from "react";
import { CourseCard } from "./CourseCard";
import { CategorySelect } from "./CategorySelect";
import { SortToggle, type SortOrder } from "./SortToggle";
import type { Course, Language } from "@/types";

interface CourseGridProps {
    courses: Course[];
    currentLanguage: Language;
}

export function CourseGrid({ courses, currentLanguage }: CourseGridProps) {
    const [selectedCategory, setSelectedCategory] =
        React.useState<string>("all");
    const [sortOrder, setSortOrder] = React.useState<SortOrder>("desc");

    // Filter and sort courses based on selected category and sort order
    const filteredAndSortedCourses = React.useMemo(() => {
        let filtered = courses;

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = courses.filter(
                (course) => course.category === selectedCategory
            );
        }

        // Sort by date (assuming DD/MM/YYYY format)
        const sorted = [...filtered].sort((a, b) => {
            // Parse dates - convert DD/MM/YYYY to YYYY-MM-DD for proper Date parsing
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));

            if (sortOrder === "asc") {
                return dateA.getTime() - dateB.getTime(); // Older first
            } else {
                return dateB.getTime() - dateA.getTime(); // Newer first
            }
        });

        return sorted;
    }, [courses, selectedCategory, sortOrder, currentLanguage]);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <CategorySelect
                    currentLanguage={currentLanguage}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    className="w-full sm:w-[220px]"
                />
                <SortToggle
                    currentLanguage={currentLanguage}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                />
            </div>
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
                                currentLanguage={currentLanguage}
                                className="h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
