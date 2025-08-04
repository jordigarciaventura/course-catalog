import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/i18n/useTranslation";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { useGlobalStore } from "@/state";

interface SearchInputProps {
    className?: string;
}

export function SearchInput({ className }: SearchInputProps) {
    const currentLanguage = useCurrentLanguage();
    const t = useTranslation(currentLanguage);

    const searchQuery = useGlobalStore((state) => state.searchQuery);
    const setSearchQuery = useGlobalStore((state) => state.setSearchQuery);

    return (
        <div className={`relative ${className}`}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="text"
                placeholder={t("index.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
            />
        </div>
    );
}
