import type { Course } from "@/types";

/**
 * Get basic statistics for Hero component display
 */
export function getHeroStats(courses: Course[]) {
  // Extract years from course dates
  const years = courses.map((course) => {
    const [, , year] = course.date.split("/");
    return parseInt(year);
  });

  // Calculate total hours
  const totalHours = courses.reduce((sum, course) => {
    return sum + parseInt(course.duration);
  }, 0);

  return {
    totalCourses: courses.length,
    totalHours,
    firstYear: Math.min(...years),
  };
}

/**
 * Get the year range (min and max years) from a list of courses
 */
export function getYearRange(courses: Course[]) {
  if (courses.length === 0) {
    return {
      minYear: undefined,
      maxYear: undefined,
    };
  }

  // Extract years from course dates
  const years = courses.map((course) => {
    const [, , year] = course.date.split("/");
    return parseInt(year);
  });

  return {
    minYear: Math.min(...years),
    maxYear: Math.max(...years),
  };
}
