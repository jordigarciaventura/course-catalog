import type { CourseCategory } from "@/types";
import categories from "@/content/categories";

export function getCategory(id: CourseCategory) {
    return categories.find(category => category.id === id);
}