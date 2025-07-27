import type { Course } from "@/types";
import DatabaseConnect from "@/icons/database-connect.svg?react";
import Loop from "@/icons/loop.svg?react";
import LabTube from "@/icons/lab-tube.svg?react";
import Shapes from "@/icons/shapes.svg?react";
import CodeReview from "@/icons/code-review.svg?react";

const courses: Course[] = [
    {
        id: "software-architecture",
        title: {
            en: "Software Architecture Principles",
            es: "Principios de Arquitectura de Software",
            ca: "Principis d'Arquitectura de Programari",
        },
        description: {
            en: "Design scalable and maintainable software architectures",
            es: "Diseña arquitecturas de software escalables y mantenibles",
            ca: "Dissenya arquitectures de programari escalables i mantenibles",
        },
        date: "24/01/2025",
        duration: "8",
        icon: <DatabaseConnect />,
        category: "software-engineering",
    },
    {
        id: "agile-scrum-methodology",
        title: {
            en: "Agile & Scrum Methodology",
            es: "Metodología Ágil y Scrum",
            ca: "Metodologia Àgil i Scrum",
        },
        description: {
            en: "Master agile development practices and Scrum framework",
            es: "Domina prácticas de desarrollo ágil y el framework Scrum",
            ca: "Domina pràctiques de desenvolupament àgil i el framework Scrum",
        },
        date: "31/01/2025",
        duration: "4",
        icon: <Loop />,
        category: "software-engineering",
    },
    {
        id: "test-driven-development",
        title: {
            en: "Test-Driven Development",
            es: "Desarrollo Dirigido por Pruebas",
            ca: "Desenvolupament Dirigit per Proves",
        },
        description: {
            en: "Write better code using TDD principles and testing frameworks",
            es: "Escribe mejor código usando principios TDD y frameworks de testing",
            ca: "Escriu millor codi usant principis TDD i frameworks de testing",
        },
        date: "07/02/2025",
        duration: "6",
        icon: <LabTube />,
        category: "software-engineering",
    },
    {
        id: "design-patterns",
        title: {
            en: "Software Design Patterns",
            es: "Patrones de Diseño de Software",
            ca: "Patrons de Disseny de Programari",
        },
        description: {
            en: "Apply proven design patterns to solve common programming problems",
            es: "Aplica patrones de diseño probados para resolver problemas comunes de programación",
            ca: "Aplica patrons de disseny provats per resoldre problemes comuns de programació",
        },
        date: "14/02/2025",
        duration: "7",
        icon: <Shapes />,
        category: "software-engineering",
    },
    {
        id: "code-review-quality",
        title: {
            en: "Code Review & Quality Assurance",
            es: "Revisión de Código y Aseguramiento de Calidad",
            ca: "Revisió de Codi i Assegurament de Qualitat",
        },
        description: {
            en: "Implement effective code review processes and quality standards",
            es: "Implementa procesos efectivos de revisión de código y estándares de calidad",
            ca: "Implementa processos efectius de revisió de codi i estàndards de qualitat",
        },
        date: "21/02/2025",
        duration: "5",
        icon: <CodeReview />,
        category: "software-engineering",
    },
];

export default courses;
