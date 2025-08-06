import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { getCategory } from "@/lib/category";
import { cn } from "@/lib/utils";
import type { Category, CategoryColor, CourseCategory } from "@/types";

// Color mapping with theme-aware classes for better light/dark theme support
const colorMap: Record<CategoryColor, string> = {
  emerald:
    "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20",
  sky: "bg-sky-500/10 text-sky-700 border-sky-500/20 dark:bg-sky-400/10 dark:text-sky-300 dark:border-sky-400/20",
  violet:
    "bg-violet-500/10 text-violet-700 border-violet-500/20 dark:bg-violet-400/10 dark:text-violet-300 dark:border-violet-400/20",
  blue: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-400/20",
  purple:
    "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:bg-purple-400/10 dark:text-purple-300 dark:border-purple-400/20",
  orange:
    "bg-orange-500/10 text-orange-700 border-orange-500/20 dark:bg-orange-400/10 dark:text-orange-300 dark:border-orange-400/20",
  pink: "bg-pink-500/10 text-pink-700 border-pink-500/20 dark:bg-pink-400/10 dark:text-pink-300 dark:border-pink-400/20",
  red: "bg-red-500/10 text-red-700 border-red-500/20 dark:bg-red-400/10 dark:text-red-300 dark:border-red-400/20",
  yellow:
    "bg-yellow-500/10 text-yellow-700 border-yellow-500/20 dark:bg-yellow-400/10 dark:text-yellow-300 dark:border-yellow-400/20",
  slate:
    "bg-slate-500/10 text-slate-700 border-slate-500/20 dark:bg-slate-400/10 dark:text-slate-300 dark:border-slate-400/20",
};

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
