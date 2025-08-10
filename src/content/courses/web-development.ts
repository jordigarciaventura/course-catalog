import type { Course } from "@/types";

const courses: Course[] = [
  {
    id: "html-css-fundamentals",
    title: {
      en: "HTML & CSS Fundamentals",
      es: "Fundamentos de HTML y CSS",
      ca: "Fonaments d'HTML i CSS",
    },
    description: {
      en: "Build responsive websites with modern HTML5 and CSS3 techniques",
      es: "Construye sitios web responsivos con técnicas modernas de HTML5 y CSS3",
      ca: "Construeix llocs web responsius amb tècniques modernes d'HTML5 i CSS3",
    },
    date: "26/08/2012",
    duration: "5h",
    iconUrl: "/icons/broswer-layout.svg",
    category: "web-development",
  },
  {
    id: "react-fundamentals",
    title: {
      en: "React Fundamentals",
      es: "Fundamentos de React",
      ca: "Fonaments de React",
    },
    description: {
      en: "Learn React.js for building interactive user interfaces",
      es: "Aprende React.js para construir interfaces de usuario interactivas",
      ca: "Aprèn React.js per construir interfícies d'usuari interactives",
    },
    date: "14/05/2023",
    duration: "7h",
    iconUrl: "/icons/react.svg",
    category: "web-development",
  },
  {
    id: "nodejs-backend",
    title: {
      en: "Node.js Backend Development",
      es: "Desarrollo Backend con Node.js",
      ca: "Desenvolupament Backend amb Node.js",
    },
    description: {
      en: "Build scalable backend applications using Node.js and Express",
      es: "Construye aplicaciones backend escalables usando Node.js y Express",
      ca: "Construeix aplicacions backend escalables usant Node.js i Express",
    },
    date: "11/10/2018",
    duration: "8h",
    iconUrl: "/icons/nodejs.svg",
    category: "web-development",
  },
  {
    id: "fullstack-development",
    title: {
      en: "Full-Stack Web Development",
      es: "Desarrollo Web Full-Stack",
      ca: "Desenvolupament Web Full-Stack",
    },
    description: {
      en: "Complete web development from frontend to backend integration",
      es: "Desarrollo web completo desde frontend hasta integración backend",
      ca: "Desenvolupament web complet des de frontend fins integració backend",
    },
    date: "08/01/2020",
    duration: "12h",
    iconUrl: "/icons/stack.svg",
    category: "web-development",
  },
  {
    id: "web-performance",
    title: {
      en: "Web Performance Optimization",
      es: "Optimización de Rendimiento Web",
      ca: "Optimització de Rendiment Web",
    },
    description: {
      en: "Optimize website performance and improve user experience",
      es: "Optimiza el rendimiento del sitio web y mejora la experiencia del usuario",
      ca: "Optimitza el rendiment del lloc web i millora l'experiència de l'usuari",
    },
    date: "27/06/2024",
    duration: "4h",
    iconUrl: "/icons/gauge.svg",
    category: "web-development",
  },
];

export default courses;
