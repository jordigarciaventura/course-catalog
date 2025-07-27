import type { MultilingualText } from "@/types";

export const ui = {
    index: {
        title: {
            en: "Courses",
            es: "Cursos",
            ca: "Cursos",
        } as MultilingualText,
        subtitle: {
            en: "Explore our course catalog",
            es: "Explora nuestro catálogo de cursos",
            ca: "Explora el nostre catàleg de cursos",
        } as MultilingualText,
        allCategories: {
            en: "All categories",
            es: "Todas las categorías",
            ca: "Totes les categories",
        } as MultilingualText,
    },
    common: {
        loading: {
            en: "Loading...",
            es: "Cargando...",
            ca: "Carregant...",
        } as MultilingualText,
        error: {
            en: "Error occurred",
            es: "Ocurrió un error",
            ca: "S'ha produït un error",
        } as MultilingualText,
    },
} as const;
