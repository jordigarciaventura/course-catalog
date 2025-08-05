import type { Course } from "@/types";

const courses: Course[] = [
    {
        id: "python-fundamentals",
        title: {
            en: "Python Programming Fundamentals",
            es: "Fundamentos de Programación Python",
            ca: "Fonaments de Programació Python",
        },
        description: {
            en: "Learn Python programming from scratch with hands-on exercises",
            es: "Aprende programación Python desde cero con ejercicios prácticos",
            ca: "Aprèn programació Python des de zero amb exercicis pràctics",
        },
        date: "18/04/2013",
        duration: "8",
        iconUrl: "/icons/python.svg",
        category: "programming",
    },
    {
        id: "javascript-essentials",
        title: {
            en: "JavaScript Essentials",
            es: "JavaScript Esencial",
            ca: "JavaScript Essencial",
        },
        description: {
            en: "Master modern JavaScript concepts including ES6+ features",
            es: "Domina conceptos de JavaScript moderno incluyendo características ES6+",
            ca: "Domina conceptes de JavaScript modern incloent característiques ES6+",
        },
        date: "09/11/2019",
        duration: "6",
        iconUrl: "/icons/javascript.svg",
        category: "programming",
    },
    {
        id: "java-object-oriented",
        title: {
            en: "Object-Oriented Programming with Java",
            es: "Programación Orientada a Objetos con Java",
            ca: "Programació Orientada a Objectes amb Java",
        },
        description: {
            en: "Learn OOP principles and Java programming for enterprise applications",
            es: "Aprende principios POO y programación Java para aplicaciones empresariales",
            ca: "Aprèn principis POO i programació Java per aplicacions empresarials",
        },
        date: "22/07/2017",
        duration: "10",
        iconUrl: "/icons/java.svg",
        category: "programming",
    },
    {
        id: "csharp-basics",
        title: {
            en: "C# Programming Basics",
            es: "Fundamentos de Programación C#",
            ca: "Fonaments de Programació C#",
        },
        description: {
            en: "Introduction to C# programming and .NET framework development",
            es: "Introducción a programación C# y desarrollo con framework .NET",
            ca: "Introducció a programació C# i desenvolupament amb framework .NET",
        },
        date: "15/02/2021",
        duration: "7",
        iconUrl: "/icons/csharp.svg",
        category: "programming",
    },
    {
        id: "algorithms-data-structures",
        title: {
            en: "Algorithms and Data Structures",
            es: "Algoritmos y Estructuras de Datos",
            ca: "Algoritmes i Estructures de Dades",
        },
        description: {
            en: "Essential algorithms and data structures for efficient programming",
            es: "Algoritmos y estructuras de datos esenciales para programación eficiente",
            ca: "Algoritmes i estructures de dades essencials per programació eficient",
        },
        date: "03/12/2015",
        duration: "9",
        iconUrl: "/icons/tree.svg",
        category: "programming",
    },
];

export default courses;
