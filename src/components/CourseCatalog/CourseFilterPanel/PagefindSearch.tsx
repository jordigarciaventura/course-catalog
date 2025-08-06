import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentLanguage } from "@/hooks/useLanguage";
import { ui } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/state";
import { Search, X } from "lucide-react";
import * as React from "react";

interface Props {
  className?: string;
}

export function PagefindSearch({ className }: Props) {
  const currentLanguage = useCurrentLanguage();

  const searchQuery = useGlobalStore((state) => state.searchQuery);
  const setSearchQuery = useGlobalStore((state) => state.setSearchQuery);

  const [componentMounted, setComponentMounted] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const courses = useGlobalStore((state) => state.allCourses);
  const setSearchResults = useGlobalStore((state) => state.setSearchResults);

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
      // If query is empty, reset to show all courses
      if (!debouncedQuery.trim()) {
        setSearchResults(courses);
        setIsLoading(false);
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
              foundCourseIds.has(course.id),
            );

            setSearchResults(filteredCourses);
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
          error,
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
        const description = course.description[currentLanguage].toLowerCase();
        return title.includes(query) || description.includes(query);
      });
      setSearchResults(filtered);
    };

    performSearch();
  }, [debouncedQuery, currentLanguage, courses, setSearchResults]);

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
              (window as any).pagefind = await (window as any).pagefind.init();
            }
            setComponentMounted(true);
          };
          document.head.appendChild(script);
        } catch (error) {
          console.warn("Could not load Pagefind:", error);
          setComponentMounted(true);
        }
      } else {
        setComponentMounted(true);
      }
    };

    loadPagefind();
  }, []);

  const placeholder = ui.index.searchPlaceholder[currentLanguage];

  if (!componentMounted) {
    return <Skeleton className={cn("h-9", className)} />;
  }

  return (
    <div className={`relative ${className}`}>
      <Search
        className={`text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 ${
          isLoading ? "animate-pulse" : ""
        }`}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-10 pl-9"
        disabled={isLoading}
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSearchQuery("")}
          className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 p-0"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
