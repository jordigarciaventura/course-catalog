import type { MultilingualText } from "@/types";

export const ui = {
  index: {
    title: {
      en: "My Learning Journey",
      es: "Mi viaje de aprendizaje",
      ca: "El meu viatge d'aprenentatge",
    } as MultilingualText,
    subtitle: {
      en: "Exploring the frontiers of technology through continuous learning and growth",
      es: "Explorando las fronteras de la tecnología a través del aprendizaje y el crecimiento continuos",
      ca: "Explorant les fronteres de la tecnologia a través de l'aprenentatge i el creixement continus",
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
    searchPlaceholder: {
      en: "Search courses...",
      es: "Buscar cursos...",
      ca: "Cercar cursos...",
    } as MultilingualText,
    searchLabel: {
      en: "Search",
      es: "Buscar",
      ca: "Cercar",
    } as MultilingualText,
    noResults: {
      en: "No courses found",
      es: "No se encontraron cursos",
      ca: "No s'han trobat cursos",
    } as MultilingualText,
    noResultsMessage: {
      en: "We couldn't find any courses matching your criteria",
      es: "No pudimos encontrar cursos que coincidan con tus criterios",
      ca: "No hem pogut trobar cursos que coincideixin amb els teus criteris",
    } as MultilingualText,
    noResultsSuggestion: {
      en: "Try adjusting your filters or search terms",
      es: "Intenta ajustar tus filtros o términos de búsqueda",
      ca: "Prova d'ajustar els teus filtres o termes de cerca",
    } as MultilingualText,
    searchResults: {
      en: (count: number, total: number) =>
        count === 1 && total === 1
          ? "1 course shown"
          : total === count
            ? `${count} courses shown`
            : `${count} of ${total} courses shown`,
      es: (count: number, total: number) =>
        count === 1 && total === 1
          ? "1 curso mostrado"
          : total === count
            ? `${count} cursos mostrados`
            : `${count} de ${total} cursos mostrados`,
      ca: (count: number, total: number) =>
        count === 1 && total === 1
          ? "1 curs mostrat"
          : total === count
            ? `${count} cursos mostrats`
            : `${count} de ${total} cursos mostrats`,
    },
    clearFilters: {
      en: "Clear filters",
      es: "Limpiar filtros",
      ca: "Netejar filtres",
    } as MultilingualText,
    filterByCategory: {
      en: "Filter by category",
      es: "Filtrar por categoría",
      ca: "Filtrar per categoria",
    } as MultilingualText,
    sortBy: {
      en: "Sort by date",
      es: "Ordenar por fecha",
      ca: "Ordenar per data",
    } as MultilingualText,
    toggleYearFilter: {
      en: "Toggle year filter",
      es: "Alternar filtro de año",
      ca: "Alternar filtre d'any",
    } as MultilingualText,
    showYearFilter: {
      en: "Show year filter",
      es: "Mostrar filtro de año",
      ca: "Mostrar filtre d'any",
    } as MultilingualText,
    hideYearFilter: {
      en: "Hide year filter",
      es: "Ocultar filtro de año",
      ca: "Ocultar filtre d'any",
    } as MultilingualText,
    filterByYear: {
      en: "Filter by year",
      es: "Filtrar por año",
      ca: "Filtrar per any",
    } as MultilingualText,
    coursesCompleted: {
      en: "Completed\nCourses",
      es: "Cursos\nCompletados",
      ca: "Cursos\nCompletats",
    } as MultilingualText,
    totalHours: {
      en: "Total\nHours",
      es: "Horas\nTotales",
      ca: "Hores\nTotals",
    } as MultilingualText,
    learningSince: {
      en: "Learning\nSince",
      es: "Aprendiendo\nDesde",
      ca: "Aprenent\nDes De",
    } as MultilingualText,
  },
  head: {
    title: {
      en: "My Learning Journey | Course Catalog",
      es: "Mi Viaje de Aprendizaje | Catálogo de Cursos",
      ca: "El Meu Viatge d'Aprenentatge | Catàleg de Cursos",
    } as MultilingualText,
    description: {
      en: "Explore my continuous learning journey through technology. A comprehensive catalog of courses completed across web development, mobile development, AI/ML, databases, and more.",
      es: "Explora mi viaje continuo de aprendizaje a través de la tecnología. Un catálogo completo de cursos completados en desarrollo web, desarrollo móvil, IA/ML, bases de datos y más.",
      ca: "Explora el meu viatge continu d'aprenentatge a través de la tecnologia. Un catàleg complet de cursos completats en desenvolupament web, desenvolupament mòbil, IA/ML, bases de dades i molt més.",
    } as MultilingualText,
    notFoundTitle: {
      en: "Page Not Found",
      es: "Página No Encontrada",
      ca: "Pàgina No Trobada",
    } as MultilingualText,
    notFoundDescription: {
      en: "404 Error — The page you're looking for doesn't exist",
      es: "Error 404 — La página que buscas no existe",
      ca: "Error 404 — La pàgina que cerques no existeix",
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
    category: {
      en: "Category",
      es: "Categoría",
      ca: "Categoria",
    } as MultilingualText,
  },
} as const;
