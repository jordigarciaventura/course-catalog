function getEnv(key) {
    // In Node (astro.config.mjs)
    if (typeof process !== "undefined" && process.env) {
        return process.env[key];
    }
    // In Astro components / Vite
    if (typeof import.meta !== "undefined" && import.meta.env) {
        return import.meta.env[key];
    }
    return undefined;
}

export const APP_SITE_URL = getEnv("APP_SITE_URL") || getEnv("PUBLIC_APP_SITE_URL") || "http://localhost:4321";
export const APP_BASE_PATH = getEnv("APP_BASE_PATH") || getEnv("PUBLIC_APP_BASE_PATH") || "";