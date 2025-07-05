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

        // Extract courses from each module
        modules.forEach((module: any) => {
            // Try to get courses from default export first, then named export
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
 * Get all courses from the .tsx files
 * Uses caching to avoid reloading on every call
 */
export async function getAllCourses(): Promise<Course[]> {
    if (coursesCache === null) {
        coursesCache = await loadAllCourseFiles();
    }
    return coursesCache;
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

/**
 * Get a single course by ID
 */
export async function getCourseById(id: string): Promise<Course | undefined> {
    const allCourses = await getAllCourses();
    return allCourses.find((course) => course.id === id);
}

/**
 * Synchronous version that returns an empty array with error handling
 * Use this for initial renders or when async is not available
 */
export function getAllCoursesSync(): Course[] {
    try {
        if (coursesCache !== null) {
            return coursesCache;
        }
        console.warn("Courses not loaded yet, returning empty array");
        return [];
    } catch (error) {
        console.error("Error getting courses sync:", error);
        return [];
    }
}

/**
 * Initialize courses cache - call this early in the application lifecycle
 */
export async function initializeCourses(): Promise<void> {
    try {
        await getAllCourses();
        console.log("Courses initialized successfully");
    } catch (error) {
        console.error("Error initializing courses:", error);
    }
}
