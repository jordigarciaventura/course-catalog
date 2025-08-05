import { CourseFilters } from "@/components/CourseCatalog/CourseFilterPanel/CourseFilters";
import { ui } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/state";
import { useCurrentLanguage } from "@/hooks/useLanguage";

export function CourseFilterPanel() {
    const currentLanguage = useCurrentLanguage();

    const storeCourses = useGlobalStore((state) => state.allCourses);
    const resetFilters = useGlobalStore((state) => state.resetFilters);
    const filteredAndSortedCourses = useGlobalStore(
        (state) => state.filteredAndSortedCourses
    );
    const hasAnyFilterActive = useGlobalStore((state) =>
        state.hasAnyActiveFilters()
    );

    const courses = storeCourses || [];

    return (
        <div className="sticky top-0 left-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border w-full text-black dark:text-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col gap-6 max-w-4xl w-full mx-auto p-6">
                <CourseFilters />
                <div className="flex items-center justify-between h-9">
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
                            className="text-xs cursor-pointer"
                        >
                            {ui.index.clearFilters[currentLanguage]}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
