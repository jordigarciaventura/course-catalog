import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Language } from "@/types";
import { ui } from "@/i18n/translations";

interface SearchInputProps {
    currentLanguage: Language;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    className?: string;
}

export function SearchInput({
    currentLanguage,
    searchQuery,
    onSearchChange,
    className = "",
}: SearchInputProps) {
    const placeholder = ui.index.searchPlaceholder[currentLanguage];

    return (
        <div className={`relative ${className}`}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9"
            />
        </div>
    );
}
