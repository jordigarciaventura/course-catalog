import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import categories from "@/content/categories";
import { useTranslation } from "@/i18n/utils";
import type { CourseCategoryFilter } from "@/types";
import { cn } from "@/lib/utils";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useGlobalStore } from "@/state";
import { useState, useEffect } from "react";

interface Props {
    className?: string;
}

export function CategorySelect({ className }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const setCategoryFilter = useGlobalStore(
        (state) => state.setCategoryFilter
    );
    const categoryFilter = useGlobalStore((state) => state.categoryFilter);

    // Handle initial loading state
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Skeleton className={cn("h-9 w-[200px]", className)} />;
    }

    return (
        <Select
            value={categoryFilter}
            onValueChange={(value) =>
                setCategoryFilter(value as CourseCategoryFilter)
            }
        >
            <SelectTrigger
                className={cn("w-[200px] cursor-pointer", className)}
            >
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all" className="cursor-pointer">
                    {t("index.allCategories")}
                </SelectItem>
                {categories.map((category) => (
                    <SelectItem
                        key={category.id}
                        value={category.id}
                        className="cursor-pointer"
                    >
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
