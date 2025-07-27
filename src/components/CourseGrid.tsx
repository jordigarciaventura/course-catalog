import * as React from "react";
import { CourseCard } from "./CourseCard";
import { CategorySelect } from "./CategorySelect";
import type { Course, Language } from "@/types";

interface CourseGridProps {
    courses: Course[];
    currentLanguage: Language;
}

export function CourseGrid({ courses, currentLanguage }: CourseGridProps) {
    const [selectedCategory, setSelectedCategory] =
        React.useState<string>("all");

    // Filter courses based on selected category
    const filteredCourses = React.useMemo(() => {
        if (selectedCategory === "all") {
            return courses;
        }
        return courses.filter((course) => course.category === selectedCategory);
    }, [courses, selectedCategory]);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex">
                <CategorySelect
                    currentLanguage={currentLanguage}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    className="w-[220px]"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
                {filteredCourses.map((course) => {
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
