/**
 * Global type definitions for the course catalog application
 */

import { courseCategories, languages, languageLabels } from "@/config";

/**
 * Available course categories - extracted from config
 */
export type CourseCategory = (typeof courseCategories)[number];

/**
 * Supported languages in the application - extracted from config
 */
export type Language = (typeof languages)[number];

/**
 * Language labels type - extracted from config
 */
export type LanguageLabels = typeof languageLabels;

/**
 * Multilingual text content - dynamically based on supported languages
 */
export type MultilingualText = {
    [K in Language]: string;
};

/**
 * Supported color names for category badges
 */
export type CategoryColor =
    | "emerald"
    | "sky"
    | "violet"
    | "blue"
    | "purple"
    | "orange"
    | "pink"
    | "red"
    | "yellow"
    | "slate";

/**
 * Category definition
 */
export interface Category {
    id: CourseCategory;
    label: MultilingualText;
    icon: React.ReactElement;
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
    icon: React.ReactElement;
    category: CourseCategory;
}
