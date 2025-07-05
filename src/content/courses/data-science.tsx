import type { Course } from "@/types";
import { LibraryBig } from "lucide-react";

const courses: Course[] = [
    {
        id: "python-data-analysis",
        title: {
            en: "Python for Data Analysis",
            es: "Python para Análisis de Datos",
            ca: "Python per Anàlisi de Dades",
        },
        description: {
            en: "Master data manipulation and analysis using Python, Pandas, and NumPy",
            es: "Domina la manipulación y análisis de datos usando Python, Pandas y NumPy",
            ca: "Domina la manipulació i anàlisi de dades usant Python, Pandas i NumPy",
        },
        date: "08/01/2025",
        duration: "6",
        icon: <LibraryBig />,
        category: "data-science",
    },
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
        date: "15/01/2025",
        duration: "4",
        icon: <LibraryBig />,
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
        date: "22/01/2025",
        duration: "3",
        icon: <LibraryBig />,
        category: "data-science",
    },
    {
        id: "machine-learning-basics",
        title: {
            en: "Machine Learning Basics",
            es: "Fundamentos de Machine Learning",
            ca: "Fonaments de Machine Learning",
        },
        description: {
            en: "Introduction to supervised and unsupervised learning algorithms",
            es: "Introducción a algoritmos de aprendizaje supervisado y no supervisado",
            ca: "Introducció a algoritmes d'aprenentatge supervisat i no supervisat",
        },
        date: "29/01/2025",
        duration: "8",
        icon: <LibraryBig />,
        category: "data-science",
    },
    {
        id: "sql-analytics",
        title: {
            en: "SQL for Data Analytics",
            es: "SQL para Análisis de Datos",
            ca: "SQL per Anàlisi de Dades",
        },
        description: {
            en: "Advanced SQL queries and techniques for data analysis and reporting",
            es: "Consultas SQL avanzadas y técnicas para análisis de datos y reportes",
            ca: "Consultes SQL avançades i tècniques per anàlisi de dades i informes",
        },
        date: "05/02/2025",
        duration: "5",
        icon: <LibraryBig />,
        category: "data-science",
    },
];

export default courses;
