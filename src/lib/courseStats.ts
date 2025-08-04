import type { Course } from "@/types";

export interface CourseStatistics {
    totalCourses: number;
    totalHours: number;
    firstYear: number;
    averageHours: number;
    categories: string[];
    coursesByYear: Record<number, number>;
}

/**
 * Calculate comprehensive statistics from a list of courses
 */
export function calculateCourseStats(courses: Course[]): CourseStatistics {
    if (courses.length === 0) {
        return {
            totalCourses: 0,
            totalHours: 0,
            firstYear: new Date().getFullYear(),
            averageHours: 0,
            categories: [],
            coursesByYear: {},
        };
    }

    // Extract years from course dates
    const years = courses.map((course) => {
        const [day, month, year] = course.date.split("/");
        return parseInt(year);
    });

    // Calculate total hours
    const totalHours = courses.reduce((sum, course) => {
        return sum + parseInt(course.duration);
    }, 0);

    // Get unique categories
    const categories = [...new Set(courses.map((course) => course.category))];

    // Group courses by year
    const coursesByYear = years.reduce(
        (acc, year) => {
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        },
        {} as Record<number, number>
    );

    return {
        totalCourses: courses.length,
        totalHours,
        firstYear: Math.min(...years),
        averageHours: Math.round(totalHours / courses.length),
        categories,
        coursesByYear,
    };
}

/**
 * Get basic statistics for Hero component display
 */
export function getHeroStats(courses: Course[]) {
    const stats = calculateCourseStats(courses);
    return {
        totalCourses: stats.totalCourses,
        totalHours: stats.totalHours,
        firstYear: stats.firstYear,
    };
}
