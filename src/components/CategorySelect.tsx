import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import categories from "@/content/categories";
import { useTranslation } from "@/i18n/useTranslation";
import type { CourseCategoryFilter } from "@/types";
import { cn } from "@/lib/utils";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useGlobalStore } from "@/state";

interface Props {
    className?: string;
}

export function CategorySelect({ className }: Props) {
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const setCategoryFilter = useGlobalStore(
        (state) => state.setCategoryFilter
    );
    const categoryFilter = useGlobalStore((state) => state.categoryFilter);

    return (
        <Select
            value={categoryFilter}
            onValueChange={(value) =>
                setCategoryFilter(value as CourseCategoryFilter)
            }
        >
            <SelectTrigger className={cn("w-[200px]", className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">{t("index.allCategories")}</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                        <span className="flex items-center gap-2">
                            {category.icon}
                            {category.label[currentLanguage]}
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
