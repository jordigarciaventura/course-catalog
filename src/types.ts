import { colorMap, courseCategories, languages } from "@/config";
import type { JSX } from "react";

/**
 * Available course categories - extracted from config
 */
export type CourseCategory = (typeof courseCategories)[number];

/**
 * Supported languages in the application - extracted from config
 */
export type Language = (typeof languages)[number];

/**
 * Multilingual text content - dynamically based on supported languages
 */
export type MultilingualText = {
  [K in Language]: string;
};

/**
 * Supported color names for category badges - derived from colorMap
 */
export type CategoryColor = keyof typeof colorMap;

/**
 * Category definition
 */
export interface Category {
  id: CourseCategory;
  label: MultilingualText;
  icon: JSX.Element; // React component for the icon
  color: CategoryColor; // Color name (shade will be applied by theme)
}

/**
 * Course definition
 */
export interface Course {
  id: string;
  title: MultilingualText;
  description: MultilingualText;
  date: string;
  duration: string;
  iconUrl: string;
  category: CourseCategory;
}

export type CourseCategoryFilter = "all" | CourseCategory;

export type FilterPanelState = {
  searchQuery: string;
  selectedCategory: CourseCategoryFilter;
  olderFirst: boolean;
  filterByYear: boolean;
  sinceYear: number | null;
  untilYear: number | null;
};
