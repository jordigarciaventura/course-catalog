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
        sortAscending: {
            en: "Older first",
            es: "Más antiguos primero",
            ca: "Més antics primer",
        } as MultilingualText,
        sortDescending: {
            en: "Newer first",
            es: "Más recientes primero",
            ca: "Més recents primer",
        } as MultilingualText,
        sortTooltipAsc: {
            en: "Sort courses from oldest to newest",
            es: "Ordenar cursos de más antiguos a más recientes",
            ca: "Ordenar cursos de més antics a més recents",
        } as MultilingualText,
        sortTooltipDesc: {
            en: "Sort courses from newest to oldest",
            es: "Ordenar cursos de más recientes a más antiguos",
            ca: "Ordenar cursos de més recents a més antics",
        } as MultilingualText,
        startDate: {
            en: "From",
            es: "Desde",
            ca: "Des de",
        } as MultilingualText,
        endDate: {
            en: "To",
            es: "Hasta",
            ca: "Fins a",
        } as MultilingualText,
        selectStartDate: {
            en: "Select year",
            es: "Seleccionar año",
            ca: "Seleccionar any",
        } as MultilingualText,
        selectEndDate: {
            en: "Select year",
            es: "Seleccionar año",
            ca: "Seleccionar any",
        } as MultilingualText,
        clearDates: {
            en: "Clear",
            es: "Limpiar",
            ca: "Netejar",
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
