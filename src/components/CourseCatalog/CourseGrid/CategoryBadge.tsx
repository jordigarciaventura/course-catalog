import { colorMap } from "@/config";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { getCategory } from "@/lib/category";
import { cn } from "@/lib/utils";
import type { Category, CourseCategory } from "@/types";

interface Props {
  courseCategory: CourseCategory;
}

export function CategoryBadge({ courseCategory }: Props) {
  const currentLanguage = useCurrentLanguage();
  const t = useTranslation(currentLanguage);

  const category = getCategory(courseCategory) as Category;
  const label = category?.label[currentLanguage] || category?.label.en;
  const icon = category?.icon;

  const colorClasses = colorMap[category.color] || colorMap.slate;

  return (
    <span
      className={cn(
        colorClasses,
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium",
      )}
      aria-label={`${t("common.category")}: ${label}`}
    >
      {icon && (
        <span
          className="mr-2 inline-block size-4 [&>svg]:h-full [&>svg]:w-full"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <span className="sr-only">{t("common.category")}: </span>
      {label}
    </span>
  );
}
