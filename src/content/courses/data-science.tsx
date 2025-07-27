import type { Course } from "@/types";
import MatplotlibIcon from "@/icons/matplotlib.svg?react";
import SqlIcon from "@/icons/sql.svg?react";

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
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
            >
                <defs>
                    <linearGradient
                        id="vscodeIconsFileTypePython0"
                        x1={-133.268}
                        x2={-133.198}
                        y1={-202.91}
                        y2={-202.84}
                        gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#387eb8"></stop>
                        <stop offset={1} stopColor="#366994"></stop>
                    </linearGradient>
                    <linearGradient
                        id="vscodeIconsFileTypePython1"
                        x1={-133.575}
                        x2={-133.495}
                        y1={-203.203}
                        y2={-203.133}
                        gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#ffe052"></stop>
                        <stop offset={1} stopColor="#ffc331"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#vscodeIconsFileTypePython0)"
                    d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
                ></path>
                <path
                    fill="url(#vscodeIconsFileTypePython1)"
                    d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214z"
                ></path>
            </svg>
        ),
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
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Analytics-Graph-Lines--Streamline-Ultimate"
            >
                <desc>
                    Analytics Graph Lines Streamline Icon:
                    https://streamlinehq.com
                </desc>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1 11.7322V1.23914"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffef5e"
                    d="M23 2.19568v7.64261l-6.3609 2.62091c-1.179 0.4452 -2.423 0.694 -3.6826 0.7365h-2.3913c-1.24679 0.0461 -2.46816 0.3661 -3.57737 0.9374L1 17.5v-5.7678l6.93478 -3.82609c1.08654 -0.52564 2.32642 -0.64113 3.49132 -0.32521l3.5487 1.18608c0.5403 0.14722 1.1102 0.14678 1.6502 -0.00128 0.5401 -0.14805 1.0305 -0.4383 1.4202 -0.84046L23 2.19568Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ff808c"
                    d="M23 9.83826V15.587l-6.2557 1.473c-1.2418 0.258 -2.5117 0.3545 -3.7782 0.287l-2.4009 -0.1818c-1.22804 -0.0303 -2.43821 0.2988 -3.48172 0.947L1 22.3113V17.5l5.98783 -3.367c1.10921 -0.5712 2.33058 -0.8912 3.57737 -0.9374h2.3913c1.2596 -0.0424 2.5036 -0.2912 3.6826 -0.7365L23 9.83826Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#66e1ff"
                    d="M23 15.587v6.6956c0 0.0628 -0.0124 0.125 -0.0364 0.183 -0.024 0.0581 -0.0593 0.1108 -0.1037 0.1552 -0.0444 0.0444 -0.0971 0.0796 -0.1551 0.1037 -0.0581 0.024 -0.1203 0.0364 -0.1831 0.0364H1.47826c-0.12136 -0.002 -0.23761 -0.0492 -0.32605 -0.1323 -0.08844 -0.0832 -0.14271 -0.1963 -0.15221 -0.3173l6.08348 -4.1991c1.04351 -0.6482 2.25368 -0.9773 3.48172 -0.947l2.4009 0.1818c1.2665 0.0675 2.5364 -0.029 3.7782 -0.287L23 15.587Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#fff9bf"
                    d="M18.0452 7.92524c-0.3897 0.40216 -0.8801 0.69241 -1.4202 0.84046 -0.54 0.14806 -1.1099 0.1485 -1.6502 0.00128L11.4261 7.5809c-1.1649 -0.31592 -2.40478 -0.20043 -3.49132 0.32521L1 11.7322v1.913l6.93478 -3.82604c1.08654 -0.52565 2.32642 -0.64114 3.49132 -0.32522l3.5487 1.18516c0.5402 0.1477 1.1103 0.1475 1.6504 -0.0006 0.5402 -0.148 1.0306 -0.4386 1.42 -0.84117L23 4.10872V2.19568l-4.9548 5.72956Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffbfc5"
                    d="M16.6391 12.4591c-1.179 0.4453 -2.423 0.6941 -3.6826 0.7365h-2.3913c-1.24679 0.0461 -2.46816 0.3662 -3.57737 0.9374L1 17.5v1.913l5.98783 -3.3679c1.10945 -0.5705 2.33072 -0.8901 3.57737 -0.9364h2.3913c1.2596 -0.0432 2.5036 -0.2924 3.6826 -0.7375L23 11.7503V9.83728l-6.3609 2.62182Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#c2f3ff"
                    d="M16.7443 17.06c-1.2418 0.258 -2.5117 0.3545 -3.7782 0.287l-2.4009 -0.1818c-1.22804 -0.0303 -2.43821 0.2988 -3.48172 0.947L1 22.3113c0.0095 0.121 0.06377 0.2341 0.15221 0.3173 0.08844 0.0831 0.20469 0.1303 0.32605 0.1323h1.64139l3.96383 -2.7357c1.04356 -0.648 2.25369 -0.9772 3.48172 -0.9469l2.4009 0.1827c1.2665 0.0675 2.5364 -0.029 3.7782 -0.287L23 17.5v-1.913l-6.2557 1.473Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M23 2.19568v7.64261l-6.3609 2.62091c-1.179 0.4452 -2.423 0.694 -3.6826 0.7365h-2.3913c-1.24679 0.0461 -2.46816 0.3661 -3.57737 0.9374L1 17.5v-5.7678l6.93478 -3.82609c1.08654 -0.52564 2.32642 -0.64113 3.49132 -0.32521l3.5487 1.18608c0.5403 0.14722 1.1102 0.14678 1.6502 -0.00128 0.5401 -0.14805 1.0305 -0.4383 1.4202 -0.84046L23 2.19568Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M23 9.83826V15.587l-6.2557 1.473c-1.2418 0.258 -2.5117 0.3545 -3.7782 0.287l-2.4009 -0.1818c-1.22804 -0.0303 -2.43821 0.2988 -3.48172 0.947L1 22.3113V17.5l5.98783 -3.367c1.10921 -0.5712 2.33058 -0.8912 3.57737 -0.9374h2.3913c1.2596 -0.0424 2.5036 -0.2912 3.6826 -0.7365L23 9.83826Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M23 15.587v6.6956c0 0.0628 -0.0124 0.125 -0.0364 0.183 -0.024 0.0581 -0.0593 0.1108 -0.1037 0.1552 -0.0444 0.0444 -0.0971 0.0796 -0.1551 0.1037 -0.0581 0.024 -0.1203 0.0364 -0.1831 0.0364H1.47826c-0.12136 -0.002 -0.23761 -0.0492 -0.32605 -0.1323 -0.08844 -0.0832 -0.14271 -0.1963 -0.15221 -0.3173l6.08348 -4.1991c1.04351 -0.6482 2.25368 -0.9773 3.48172 -0.947l2.4009 0.1818c1.2665 0.0675 2.5364 -0.029 3.7782 -0.287L23 15.587Z"
                    stroke-width="1"
                ></path>
            </svg>
        ),
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
        icon: <MatplotlibIcon />,
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
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
            >
                <path
                    fill="currentColor"
                    d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"
                ></path>
            </svg>
        ),
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
        icon: <SqlIcon />,
        category: "data-science",
    },
];

export default courses;
