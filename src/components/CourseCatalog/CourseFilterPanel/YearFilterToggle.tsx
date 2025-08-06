import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export function YearFilterToggle({ className }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const currentLanguage = useCurrentLanguage();
  const t = useTranslation(currentLanguage);

  const filterByYear = useGlobalStore((state) => state.filterByYear);
  const setFilterByYear = useGlobalStore((state) => state.setFilterByYear);

  // Handle initial mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className={cn("h-9 min-w-[150px]", className)} />;
  }

  return (
    <Toggle
      variant="outline"
      size="default"
      pressed={filterByYear}
      onPressedChange={setFilterByYear}
      title={
        filterByYear ? t("index.hideYearFilter") : t("index.showYearFilter")
      }
      className={cn(
        "min-w-[150px] flex-1 cursor-pointer transition-colors",
        className,
      )}
    >
      <Calendar className="h-4 w-4" />
      {t("index.filterByYear")}
    </Toggle>
  );
}
