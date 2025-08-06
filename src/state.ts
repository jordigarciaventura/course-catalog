import qs from "qs";
import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from "zustand/middleware";
import type { Course, CourseCategoryFilter } from "./types";

const URL_STATE_DEFAULTS = {
  categoryFilter: "all" as CourseCategoryFilter,
  searchQuery: "",
  filterByYear: false,
  sinceYear: null as number | null,
  untilYear: null as number | null,
  olderFirst: false,
};

const queryStorage: StateStorage = {
  getItem: (): string => {
    const searchParams = new URLSearchParams(location.search);

    // If no query parameters, return empty state
    if (searchParams.toString() === "") {
      return JSON.stringify({
        state: {},
        version: 0,
      });
    }

    // Create a state object from the query parameters
    const state: any = {};

    // Map URL parameters back to state structure with proper type conversion
    for (const [paramKey, value] of searchParams) {
      if (paramKey in URL_STATE_DEFAULTS) {
        // Convert values back to their proper types
        if (paramKey === "filterByYear" || paramKey === "olderFirst") {
          state[paramKey] = value === "true";
        } else if (paramKey === "sinceYear" || paramKey === "untilYear") {
          state[paramKey] =
            value === "null" || value === null ? null : Number(value);
        } else {
          // For strings like searchQuery and categoryFilter
          state[paramKey] = value;
        }
      }
    }

    // Return in the format Zustand expects
    return JSON.stringify({
      state,
      version: 0,
    });
  },
  setItem: (_, newValue): void => {
    // Parse the Zustand state
    const parsedValue = JSON.parse(newValue);

    // Extract only the state part and filter out defaults
    const filteredParams: any = {};
    let hasNonDefaultValues = false;

    if (parsedValue.state) {
      for (const [stateKey, value] of Object.entries(parsedValue.state)) {
        const defaultValue =
          URL_STATE_DEFAULTS[stateKey as keyof typeof URL_STATE_DEFAULTS];

        // Only persist values that are different from defaults
        if (value !== defaultValue) {
          filteredParams[stateKey] = value;
          hasNonDefaultValues = true;
        }
      }
    }

    // Update URL with query parameters
    const url = new URL(location.href);

    if (hasNonDefaultValues) {
      // Set query parameters
      url.search = qs.stringify(filteredParams, {
        encode: true,
        arrayFormat: "brackets",
      });
    } else {
      // Clear query parameters
      url.search = "";
    }

    // Update the URL without reloading the page
    history.replaceState(null, "", url.toString());
  },
  removeItem: (): void => {
    const url = new URL(location.href);
    url.search = "";
    history.replaceState(null, "", url.toString());
  },
};

// Fields that will be persisted to URL
interface UrlState {
  categoryFilter: CourseCategoryFilter;
  searchQuery: string;
  filterByYear: boolean;
  sinceYear: number | null;
  untilYear: number | null;
  olderFirst: boolean;
}

// Complete state interface
interface GlobalState extends UrlState {
  allCourses: Course[];
  filteredCourses: Course[];
  filteredAndSortedCourses: Course[];
  searchResults: Course[];
  setAllCourses: (courses: Course[]) => void;
  setFilterByYear: (value: boolean) => void;
  setFilteredCourses: (courses: Course[]) => void;
  setSearchResults: (results: Course[]) => void;
  setCategoryFilter: (category: CourseCategoryFilter) => void;
  setSinceYear: (year: number | null) => void;
  setUntilYear: (year: number | null) => void;
  setOlderFirst: (value: boolean) => void;
  resetFilters: () => void;
  setSearchQuery: (query: string) => void;
  updateFilteredAndSortedCourses: () => void;
  getCourseYear: (dateString: string) => number;
  hasAnyActiveFilters: () => boolean;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      // Non-persisted state (stays in memory only)
      allCourses: [],
      filteredCourses: [],
      filteredAndSortedCourses: [],
      searchResults: [],

      // Persisted state (synced with URL) - will be overridden by URL state if present
      categoryFilter: URL_STATE_DEFAULTS.categoryFilter,
      filterByYear: URL_STATE_DEFAULTS.filterByYear,
      sinceYear: URL_STATE_DEFAULTS.sinceYear,
      untilYear: URL_STATE_DEFAULTS.untilYear,
      olderFirst: URL_STATE_DEFAULTS.olderFirst,
      searchQuery: URL_STATE_DEFAULTS.searchQuery,

      // Utility function to extract year from DD/MM/YYYY format
      getCourseYear: (dateString: string): number => {
        const [day, month, year] = dateString.split("/");

        // Validate the date parts
        if (!day || !month || !year) {
          console.warn(
            `Invalid date format: ${dateString}. Expected DD/MM/YYYY.`,
          );
          return 0; // Return 0 as fallback
        }

        const yearNum = parseInt(year, 10);

        // Validate that the year is valid
        if (isNaN(yearNum)) {
          console.warn(`Invalid year in date: ${dateString}`);
          return 0; // Return 0 as fallback
        }

        return yearNum;
      },

      // Actions
      setAllCourses: (courses) => {
        set({
          allCourses: courses,
          filteredCourses: courses,
          searchResults: courses,
        });
        get().updateFilteredAndSortedCourses();
      },
      setFilteredCourses: (filteredCourses) => {
        set({ filteredCourses });
        get().updateFilteredAndSortedCourses();
      },
      setSearchResults: (searchResults) => {
        set({ searchResults });
        get().updateFilteredAndSortedCourses();
      },
      setCategoryFilter: (category) => {
        set({ categoryFilter: category });
        get().updateFilteredAndSortedCourses();
      },
      setFilterByYear: (value) => {
        set({ filterByYear: value });
        get().updateFilteredAndSortedCourses();
      },
      setSinceYear: (year) => {
        set({ sinceYear: year });
        get().updateFilteredAndSortedCourses();
      },
      setUntilYear: (year) => {
        set({ untilYear: year });
        get().updateFilteredAndSortedCourses();
      },
      setOlderFirst: (value) => {
        set({ olderFirst: value });
        get().updateFilteredAndSortedCourses();
      },
      resetFilters: () => {
        const state = get();
        set({
          categoryFilter: URL_STATE_DEFAULTS.categoryFilter,
          filterByYear: URL_STATE_DEFAULTS.filterByYear,
          sinceYear: URL_STATE_DEFAULTS.sinceYear,
          untilYear: URL_STATE_DEFAULTS.untilYear,
          searchResults: state.allCourses,
          searchQuery: URL_STATE_DEFAULTS.searchQuery,
        });
        get().updateFilteredAndSortedCourses();
      },
      hasAnyActiveFilters: () => {
        const state = get();
        return (
          state.categoryFilter !== URL_STATE_DEFAULTS.categoryFilter ||
          (state.filterByYear !== URL_STATE_DEFAULTS.filterByYear &&
            (state.sinceYear !== URL_STATE_DEFAULTS.sinceYear ||
              state.untilYear !== URL_STATE_DEFAULTS.untilYear)) ||
          state.searchQuery !== URL_STATE_DEFAULTS.searchQuery
        );
      },
      setSearchQuery: (query) => set({ searchQuery: query }),

      // Update filtered and sorted courses based on current state
      updateFilteredAndSortedCourses: () => {
        const state = get();
        let filtered = state.searchResults;

        // Filter by category
        if (state.categoryFilter !== "all") {
          filtered = filtered.filter(
            (course) => course.category === state.categoryFilter,
          );
        }

        // Filter by year range
        if (state.filterByYear && (state.sinceYear || state.untilYear)) {
          filtered = filtered.filter((course) => {
            // Extract year from course date (DD/MM/YYYY format) using utility function
            const courseYear = state.getCourseYear(course.date);

            // Check if course year is within the selected range
            if (state.sinceYear && state.untilYear) {
              return (
                courseYear >= state.sinceYear && courseYear <= state.untilYear
              );
            } else if (state.sinceYear) {
              return courseYear >= state.sinceYear;
            } else if (state.untilYear) {
              return courseYear <= state.untilYear;
            }

            return true;
          });
        }

        // Sort by date (DD/MM/YYYY format) - still using full date for precision
        const sorted = [...filtered].sort((a, b) => {
          // Parse dates for precise sorting
          const [dayA, monthA, yearA] = a.date.split("/");
          const [dayB, monthB, yearB] = b.date.split("/");

          const dateA = new Date(
            parseInt(yearA),
            parseInt(monthA) - 1,
            parseInt(dayA),
          );
          const dateB = new Date(
            parseInt(yearB),
            parseInt(monthB) - 1,
            parseInt(dayB),
          );

          if (state.olderFirst) {
            return dateA.getTime() - dateB.getTime(); // Older first
          } else {
            return dateB.getTime() - dateA.getTime(); // Newer first
          }
        });

        set({ filteredAndSortedCourses: sorted });
      },
    }),
    {
      name: "global-state",
      storage: createJSONStorage(() => queryStorage),
      // Only persist URL-relevant fields
      partialize: (state): UrlState => ({
        categoryFilter: state.categoryFilter,
        searchQuery: state.searchQuery,
        filterByYear: state.filterByYear,
        sinceYear: state.sinceYear,
        untilYear: state.untilYear,
        olderFirst: state.olderFirst,
      }),
      // Merge strategy to combine URL state with defaults
      merge: (persistedState, currentState) => {
        const merged = {
          ...currentState,
          ...(persistedState as Partial<GlobalState>),
        };
        return merged;
      },
    },
  ),
);
