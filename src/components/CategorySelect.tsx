import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import categories from "@/content/categories";
import { useTranslation } from "@/i18n/useTranslation";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";

interface CategorySelectProps {
    currentLanguage: Language;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    className?: string;
}

export function CategorySelect({
    currentLanguage,
    selectedCategory,
    onCategoryChange,
    className,
}: CategorySelectProps) {
    const t = useTranslation(currentLanguage);

    return (
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
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
