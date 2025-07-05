import {
    Cloud,
    Code,
    Globe,
    Brain,
    Database,
    Smartphone,
    Gamepad2,
    Shield,
    Wrench,
    ChartColumnDecreasing,
} from "lucide-react";
import type { Category } from "@/types";

const categories: Category[] = [
    {
        id: "data-science",
        label: {
            en: "Data Science",
            es: "Ciencia de Datos",
            ca: "Ciència de Dades",
        },
        icon: <ChartColumnDecreasing />,
    },
    {
        id: "cloud-devops",
        label: {
            en: "Cloud/DevOps",
            es: "Nube/DevOps",
            ca: "Núvol/DevOps",
        },
        icon: <Cloud />,
    },
    {
        id: "programming",
        label: {
            en: "Programming",
            es: "Programación",
            ca: "Programació",
        },
        icon: <Code />,
    },
    {
        id: "web-development",
        label: {
            en: "Web Development",
            es: "Desarrollo Web",
            ca: "Desenvolupament Web",
        },
        icon: <Globe />,
    },
    {
        id: "ai-ml",
        label: {
            en: "AI/ML",
            es: "IA/ML",
            ca: "IA/ML",
        },
        icon: <Brain />,
    },
    {
        id: "databases",
        label: {
            en: "Databases",
            es: "Bases de Datos",
            ca: "Bases de Dades",
        },
        icon: <Database />,
    },
    {
        id: "mobile-development",
        label: {
            en: "Mobile Development",
            es: "Desarrollo Móvil",
            ca: "Desenvolupament Mòbil",
        },
        icon: <Smartphone />,
    },
    {
        id: "game-development",
        label: {
            en: "Game Development",
            es: "Desarrollo de Juegos",
            ca: "Desenvolupament de Jocs",
        },
        icon: <Gamepad2 />,
    },
    {
        id: "cybersecurity",
        label: {
            en: "Cybersecurity",
            es: "Ciberseguridad",
            ca: "Ciberseguretat",
        },
        icon: <Shield />,
    },
    {
        id: "software-engineering",
        label: {
            en: "Software Engineering",
            es: "Ingeniería de Software",
            ca: "Enginyeria de Programari",
        },
        icon: <Wrench />,
    },
];

export default categories;