import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
    className?: string;
}

export function SortToggle({ className }: Props) {
    const [isMounted, setIsMounted] = useState(false);
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const olderFirst = useGlobalStore((state) => state.olderFirst);
    const setOlderFirst = useGlobalStore((state) => state.setOlderFirst);

    // Handle initial mounting state
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <Skeleton className={cn("h-9 min-w-[150px]", className)} />;
    }

    return (
        <Button
            variant="outline"
            size="default"
            onClick={() => {
                setOlderFirst(!olderFirst);
            }}
            className={cn(
                "flex items-center gap-2 min-w-[150px] cursor-pointer",
                className
            )}
            title={
                olderFirst
                    ? t("index.sortTooltipAsc")
                    : t("index.sortTooltipDesc")
            }
        >
            {olderFirst ? <ArrowDown01 size={16} /> : <ArrowUp01 size={16} />}
            <span>
                {olderFirst
                    ? t("index.sortAscending")
                    : t("index.sortDescending")}
            </span>
        </Button>
    );
}
