import { getCategory } from "@/lib/category";
import type { CourseCategory, Language } from "@/types";

interface Props {
    courseCategory: CourseCategory;
    currentLanguage: Language;
}

export function CategoryBadge({
    courseCategory,
    currentLanguage: currentLangauge,
}: Props) {
    const category = getCategory(courseCategory);
    const label = category?.label[currentLangauge] || category?.label.en;
    const icon = category?.icon;

    return (
        <div>
            {icon && <div className="inline-block mr-2">{icon}</div>}
            <div>{label}</div>
        </div>
    );
}
