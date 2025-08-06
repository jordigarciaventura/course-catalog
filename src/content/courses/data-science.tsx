import type { Course } from "@/types";

const courses: Course[] = [
  {
    id: "statistics-fundamentals",
    title: {
      en: "Statistics Fundamentals",
      es: "Fundamentos de Estadística",
      ca: "Fonaments d'Estadística",
    },
    description: {
      en: "Learn essential statistical concepts for data science and analytics",
      es: "Aprende conceptos estadísticos esenciales para ciencia de datos y análisis",
      ca: "Aprèn conceptes estadístics essencials per ciència de dades i anàlisi",
    },
    date: "24/10/2014",
    duration: "4",
    iconUrl: "/icons/analytics-mountain.svg",
    category: "data-science",
  },
  {
    id: "data-visualization",
    title: {
      en: "Data Visualization with Matplotlib",
      es: "Visualización de Datos con Matplotlib",
      ca: "Visualització de Dades amb Matplotlib",
    },
    description: {
      en: "Create compelling visualizations and dashboards from your data",
      es: "Crea visualizaciones y dashboards convincentes a partir de tus datos",
      ca: "Crea visualitzacions i dashboards convincents a partir de les teves dades",
    },
    date: "06/08/2023",
    duration: "3",
    iconUrl: "/icons/analytics-net.svg",
    category: "data-science",
  },
];

export default courses;
