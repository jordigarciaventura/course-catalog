import * as React from "react";
import { CourseCard } from "./CourseCard";
import { CourseFilterPanel } from "./CourseFilterPanel";
import { type SortOrder } from "./SortToggle";
import { type YearRange } from "./YearRangePicker";
import type { Course, Language } from "@/types";
import { ui } from "@/i18n/translations";

interface CourseGridProps {
    courses: Course[];
    currentLanguage: Language;
}

export function CourseGrid({ courses, currentLanguage }: CourseGridProps) {
    const [selectedCategory, setSelectedCategory] =
        React.useState<string>("all");
    const [sortOrder, setSortOrder] = React.useState<SortOrder>("desc");
    const [yearRange, setYearRange] = React.useState<YearRange>({
        from: undefined,
        to: undefined,
    });
    const [searchResults, setSearchResults] = React.useState<Course[]>(courses);

    // Utility function to extract year from DD/MM/YYYY format
    const getCourseYear = (dateString: string): number => {
        const [day, month, year] = dateString.split("/");

        // Validate the date parts
        if (!day || !month || !year) {
            console.warn(
                `Invalid date format: ${dateString}. Expected DD/MM/YYYY.`
            );
            return 0; // Return 0 as fallback
        }

        const yearNum = parseInt(year, 10);

        // Validate that the year is valid
        if (isNaN(yearNum)) {
            console.warn(`Invalid year in date: ${dateString}`);
            return 0; // Return 0 as fallback
        }

        return yearNum;
    };

    // Update search results when courses change
    React.useEffect(() => {
        setSearchResults(courses);
    }, [courses]);

    // Filter and sort courses based on selected category, year range, and sort order
    const filteredAndSortedCourses = React.useMemo(() => {
        let filtered = searchResults;

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = filtered.filter(
                (course) => course.category === selectedCategory
            );
        }

        // Filter by year range
        if (yearRange.from || yearRange.to) {
            filtered = filtered.filter((course) => {
                // Extract year from course date (DD/MM/YYYY format) using utility function
                const courseYear = getCourseYear(course.date);

                // Check if course year is within the selected range
                if (yearRange.from && yearRange.to) {
                    return (
                        courseYear >= yearRange.from &&
                        courseYear <= yearRange.to
                    );
                } else if (yearRange.from) {
                    return courseYear >= yearRange.from;
                } else if (yearRange.to) {
                    return courseYear <= yearRange.to;
                }

                return true;
            });
        }

        // Sort by date (DD/MM/YYYY format) - still using full date for precision
        const sorted = [...filtered].sort((a, b) => {
            // Parse dates for precise sorting
            const [dayA, monthA, yearA] = a.date.split("/");
            const [dayB, monthB, yearB] = b.date.split("/");

            const dateA = new Date(
                parseInt(yearA),
                parseInt(monthA) - 1,
                parseInt(dayA)
            );
            const dateB = new Date(
                parseInt(yearB),
                parseInt(monthB) - 1,
                parseInt(dayB)
            );

            if (sortOrder === "asc") {
                return dateA.getTime() - dateB.getTime(); // Older first
            } else {
                return dateB.getTime() - dateA.getTime(); // Newer first
            }
        });

        return sorted;
    }, [
        searchResults,
        selectedCategory,
        sortOrder,
        yearRange,
        currentLanguage,
    ]);

    return (
        <div className="flex flex-col gap-6">
            <CourseFilterPanel
                courses={courses}
                currentLanguage={currentLanguage}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
                yearRange={yearRange}
                onYearRangeChange={setYearRange}
                onSearchResults={setSearchResults}
            />
            {filteredAndSortedCourses.length > 0 && (
                <div className="text-sm text-muted-foreground">
                    {ui.index.searchResults[currentLanguage](
                        filteredAndSortedCourses.length
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
                                    currentLanguage={currentLanguage}
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
