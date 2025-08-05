import type { Course } from "@/types";

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
        date: "09/05/2015",
        duration: "8",
        iconUrl: "/icons/block.svg",
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
        date: "17/09/2020",
        duration: "4",
        iconUrl: "/icons/loop.svg",
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
        date: "22/11/2018",
        duration: "6",
        iconUrl: "/icons/labtube.svg",
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
        date: "04/01/2023",
        duration: "7",
        iconUrl: "/icons/shapes.svg",
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
        date: "31/07/2024",
        duration: "5",
        iconUrl: "/icons/code-check.svg",
        category: "software-engineering",
    },
];

export default courses;
