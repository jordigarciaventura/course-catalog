import type { Course } from "@/types";

/**
 * Dynamically import all course files from the content/courses directory
 * This function uses Vite's import.meta.glob to automatically discover all .tsx files
 */
async function loadAllCourseFiles(): Promise<Course[]> {
    const allCourses: Course[] = [];

    // Use Vite's import.meta.glob to dynamically import all course files
    const courseModules = import.meta.glob("@/content/courses/*.tsx", {
        eager: false,
    });

    try {
        // Load all course modules dynamically
        const modulePromises = Object.values(courseModules).map((importFn) =>
            importFn()
        );
        const modules = await Promise.all(modulePromises);

        // Extract courses from each module
        modules.forEach((module: any) => {
            const courseData = module.default;
            if (courseData && Array.isArray(courseData)) {
                allCourses.push(...courseData);
            }
        });
    } catch (error) {
        console.error("Error loading course files:", error);
    }

    return allCourses;
}

// Cache for loaded courses
let coursesCache: Course[] | null = null;

/**
 * Convert DD/MM/YYYY date string to comparable format YYYYMMDD
 */
function dateToComparable(dateString: string): number {
    const [day, month, year] = dateString.split("/");
    return parseInt(year + month.padStart(2, "0") + day.padStart(2, "0"));
}

/**
 * Get all courses from the .tsx files
 * Uses caching to avoid reloading on every call
 * @param ascSortDate - If true, sort by date ascending (oldest first). If false, sort by date descending (newest first). Default: false
 */
export async function getAllCourses(
    ascSortDate: boolean = false
): Promise<Course[]> {
    if (coursesCache === null) {
        coursesCache = await loadAllCourseFiles();
    }

    // Sort courses by date
    const sortedCourses = [...coursesCache].sort((a, b) => {
        const dateA = dateToComparable(a.date);
        const dateB = dateToComparable(b.date);

        return ascSortDate ? dateA - dateB : dateB - dateA;
    });

    return sortedCourses;
}

/**
 * Get courses by category
 */
export async function getCoursesByCategory(
    category: string
): Promise<Course[]> {
    const allCourses = await getAllCourses();
    return allCourses.filter((course) => course.category === category);
}
