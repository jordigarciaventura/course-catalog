import categories from "@/content/categories";
import type { CourseCategory } from "@/types";

export function getCategory(id: CourseCategory) {
  return categories.find((category) => category.id === id);
}
