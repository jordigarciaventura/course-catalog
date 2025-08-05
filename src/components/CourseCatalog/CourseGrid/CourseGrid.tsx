import { CourseCard } from "./CourseCard";
import { ui } from "@/i18n/translations";
import { useGlobalStore } from "@/state";
import { useCurrentLanguage } from "@/hooks/useLanguage";

export function CourseGrid() {
    const currentLanguage = useCurrentLanguage();

    const filteredAndSortedCourses = useGlobalStore(
        (state) => state.filteredAndSortedCourses
    );

    return (
        <div className="relative bg-background z-10 w-full min-h-screen mx-auto pt-8 pb-48">
            <div className="w-full p-6 flex justify-center items-center flex-col">
                {filteredAndSortedCourses.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">
                            {ui.index.noResults[currentLanguage]}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max max-w-4xl">
                        {filteredAndSortedCourses.map((course) => {
                            const title = course.title[currentLanguage];
                            const description =
                                course.description[currentLanguage];

                            // Determine if title is long (more than 50 characters)
                            const hasLongTitle = title.length > 50;

                            // Determine if description is long (more than 150 characters)
                            const hasLongDescription = description.length > 150;

                            // Build dynamic classes for grid spanning
                            const gridClasses = [
                                hasLongTitle
                                    ? "sm:col-span-2 md:col-span-2"
                                    : "",
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
        </div>
    );
}
