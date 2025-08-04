import { Button } from "@/components/ui/button";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/useTranslation";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { ArrowDown01, ArrowUp01 } from "lucide-react";

interface Props {
    className?: string;
}

export function SortToggle({ className }: Props) {
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const olderFirst = useGlobalStore((state) => state.olderFirst);
    const setOlderFirst = useGlobalStore((state) => state.setOlderFirst);

    return (
        <Button
            variant="outline"
            size="default"
            onClick={() => {
                setOlderFirst(!olderFirst);
            }}
            className={cn("flex items-center gap-2 min-w-[40px]", className)}
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
