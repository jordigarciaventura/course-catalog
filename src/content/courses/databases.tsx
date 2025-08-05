import type { Course } from "@/types";

const courses: Course[] = [
    {
        id: "sql-fundamentals",
        title: {
            en: "SQL Fundamentals",
            es: "Fundamentos de SQL",
            ca: "Fonaments de SQL",
        },
        description: {
            en: "Master SQL queries, joins, and database design principles",
            es: "Domina consultas SQL, joins y principios de diseño de bases de datos",
            ca: "Domina consultes SQL, joins i principis de disseny de bases de dades",
        },
        date: "30/01/2017",
        duration: "5",
        iconUrl: "/icons/sql.svg",
        category: "databases",
    },
    {
        id: "mysql-administration",
        title: {
            en: "MySQL Database Administration",
            es: "Administración de Base de Datos MySQL",
            ca: "Administració de Base de Dades MySQL",
        },
        description: {
            en: "Learn MySQL setup, configuration, and performance optimization",
            es: "Aprende configuración, instalación y optimización de rendimiento de MySQL",
            ca: "Aprèn configuració, instal·lació i optimització de rendiment de MySQL",
        },
        date: "12/06/2015",
        duration: "6",
        iconUrl: "/icons/mysql.svg",
        category: "databases",
    },
    {
        id: "postgresql-advanced",
        title: {
            en: "Advanced PostgreSQL",
            es: "PostgreSQL Avanzado",
            ca: "PostgreSQL Avançat",
        },
        description: {
            en: "Advanced PostgreSQL features including indexing and query optimization",
            es: "Características avanzadas de PostgreSQL incluyendo indexación y optimización de consultas",
            ca: "Característiques avançades de PostgreSQL incloent indexació i optimització de consultes",
        },
        date: "28/09/2020",
        duration: "7",
        iconUrl: "/icons/postgresql.svg",
        category: "databases",
    },
    {
        id: "mongodb-nosql",
        title: {
            en: "MongoDB & NoSQL Databases",
            es: "MongoDB y Bases de Datos NoSQL",
            ca: "MongoDB i Bases de Dades NoSQL",
        },
        description: {
            en: "Work with document databases and modern NoSQL solutions",
            es: "Trabaja con bases de datos de documentos y soluciones NoSQL modernas",
            ca: "Treballa amb bases de dades de documents i solucions NoSQL modernes",
        },
        date: "16/11/2018",
        duration: "5",
        iconUrl: "/icons/mongodb.svg",
        category: "databases",
    },
    {
        id: "database-design",
        title: {
            en: "Database Design & Modeling",
            es: "Diseño y Modelado de Bases de Datos",
            ca: "Disseny i Modelatge de Bases de Dades",
        },
        description: {
            en: "Learn database normalization, ERD design, and data modeling",
            es: "Aprende normalización de bases de datos, diseño ERD y modelado de datos",
            ca: "Aprèn normalització de bases de dades, disseny ERD i modelatge de dades",
        },
        date: "19/04/2022",
        duration: "6",
        iconUrl: "/icons/databases.svg",
        category: "databases",
    },
];

export default courses;
