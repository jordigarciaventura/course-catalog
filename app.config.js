/**
 * Shared application configuration
 * This file can be imported by both Astro config and application code
 *
 * To change deployment configuration:
 * 1. Update APP_BASE_PATH here
 * 2. Update the corresponding 'base' value in astro.config.mjs
 *
 * Examples:
 * - Root deployment: APP_BASE_PATH = "" and base = "/"
 * - Subdirectory deployment: APP_BASE_PATH = "/course-catalog" and base = "/course-catalog"
 */

/**
 * Base path configuration for the application
 *
 * For root deployment (e.g., https://example.com/):
 * export const APP_BASE_PATH = "";
 *
 * For subdirectory deployment (e.g., https://example.com/course-catalog/):
 * export const APP_BASE_PATH = "/course-catalog";
 */
export const APP_BASE_PATH = "/course-catalog";

/**
 * Site URL configuration
 */
export const APP_SITE_URL = "https://jordigarciaventura.github.io";
