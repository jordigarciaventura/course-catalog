import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Language, Course } from "@/types";
import { ui } from "@/i18n/translations";

interface PagefindSearchProps {
    currentLanguage: Language;
    courses: Course[];
    onSearchResults: (results: Course[]) => void;
    className?: string;
}

export function PagefindSearch({
    currentLanguage,
    courses,
    onSearchResults,
    className = "",
}: PagefindSearchProps) {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    // Debounce search to avoid too many API calls
    const [debouncedQuery, setDebouncedQuery] = React.useState<string>("");

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Perform search when debounced query changes
    React.useEffect(() => {
        const performSearch = async () => {
            if (!debouncedQuery.trim()) {
                onSearchResults(courses);
                return;
            }

            setIsLoading(true);

            try {
                // First, try to use Pagefind if available
                if (typeof window !== "undefined" && (window as any).pagefind) {
                    const pagefind = (window as any).pagefind;
                    const search = await pagefind.search(debouncedQuery);

                    if (search && search.results && search.results.length > 0) {
                        // Map Pagefind results back to course objects
                        const foundCourseIds = new Set<string>();

                        for (const result of search.results) {
                            const data = await result.data();
                            // Extract course ID from meta data
                            if (data.meta?.course_id) {
                                foundCourseIds.add(data.meta.course_id);
                            }
                        }

                        const filteredCourses = courses.filter((course) =>
                            foundCourseIds.has(course.id)
                        );

                        onSearchResults(filteredCourses);
                    } else {
                        // If no Pagefind results, fallback to client-side search
                        performClientSideSearch();
                    }
                } else {
                    // Fallback to client-side search if Pagefind is not available
                    performClientSideSearch();
                }
            } catch (error) {
                console.warn(
                    "Pagefind search failed, falling back to client-side search:",
                    error
                );
                performClientSideSearch();
            } finally {
                setIsLoading(false);
            }
        };

        const performClientSideSearch = () => {
            const query = debouncedQuery.toLowerCase().trim();
            const filtered = courses.filter((course) => {
                const title = course.title[currentLanguage].toLowerCase();
                const description =
                    course.description[currentLanguage].toLowerCase();
                return title.includes(query) || description.includes(query);
            });
            onSearchResults(filtered);
        };

        performSearch();
    }, [debouncedQuery, courses, currentLanguage, onSearchResults]);

    // Load Pagefind when component mounts
    React.useEffect(() => {
        const loadPagefind = async () => {
            if (typeof window !== "undefined" && !(window as any).pagefind) {
                try {
                    // Try to load Pagefind dynamically
                    const script = document.createElement("script");
                    script.src = "/pagefind/pagefind.js";
                    script.onload = async () => {
                        if ((window as any).pagefind) {
                            (window as any).pagefind = await (
                                window as any
                            ).pagefind.init();
                        }
                    };
                    document.head.appendChild(script);
                } catch (error) {
                    console.warn("Could not load Pagefind:", error);
                }
            }
        };

        loadPagefind();
    }, []);

    const placeholder = ui.index.searchPlaceholder[currentLanguage];

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className={`relative ${className}`}>
            <Search
                className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${
                    isLoading ? "animate-pulse" : ""
                }`}
            />
            <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-10"
                disabled={isLoading}
            />
            {searchQuery && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
                >
                    <X className="h-3 w-3" />
                </Button>
            )}
        </div>
    );
}
