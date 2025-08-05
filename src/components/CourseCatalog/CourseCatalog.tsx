import { CourseFilterPanel } from "@/components/CourseCatalog/CourseFilterPanel/CourseFilterPanel";
import { CourseGrid } from "@/components/CourseCatalog/CourseGrid/CourseGrid";
import type { Course } from "@/types";
import { useGlobalStore } from "@/state";
import { useEffect } from "react";

interface Props {
    allCourses: Course[];
}

export function CourseCatalog({ allCourses }: Props) {
    const setCourses = useGlobalStore((state) => state.setAllCourses);

    useEffect(() => setCourses(allCourses), []);

    return (
        <div className="sticky top-0 left-0 z-20">
            <CourseFilterPanel />
            <CourseGrid />
        </div>
    );
}
