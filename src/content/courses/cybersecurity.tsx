import type { Course } from "@/types";

const courses: Course[] = [
  {
    id: "ethical-hacking-basics",
    title: {
      en: "Ethical Hacking Basics",
      es: "Fundamentos de Hacking Ético",
      ca: "Fonaments de Hacking Ètic",
    },
    description: {
      en: "Learn penetration testing and vulnerability assessment techniques",
      es: "Aprende técnicas de pruebas de penetración y evaluación de vulnerabilidades",
      ca: "Aprèn tècniques de proves de penetració i avaluació de vulnerabilitats",
    },
    date: "01/07/2013",
    duration: "8",
    iconUrl: "/icons/target.svg",
    category: "cybersecurity",
  },
  {
    id: "network-security",
    title: {
      en: "Network Security Fundamentals",
      es: "Fundamentos de Seguridad de Redes",
      ca: "Fonaments de Seguretat de Xarxes",
    },
    description: {
      en: "Secure network infrastructure and prevent cyber attacks",
      es: "Asegura infraestructura de red y previene ataques cibernéticos",
      ca: "Assegura infraestructura de xarxa i prevé atacs cibernètics",
    },
    date: "16/03/2018",
    duration: "6",
    iconUrl: "/icons/shield-globe.svg",
    category: "cybersecurity",
  },
  {
    id: "web-application-security",
    title: {
      en: "Web Application Security",
      es: "Seguridad de Aplicaciones Web",
      ca: "Seguretat d'Aplicacions Web",
    },
    description: {
      en: "Identify and fix web application vulnerabilities and threats",
      es: "Identifica y corrige vulnerabilidades y amenazas de aplicaciones web",
      ca: "Identifica i corregeix vulnerabilitats i amenaces d'aplicacions web",
    },
    date: "10/11/2020",
    duration: "7",
    iconUrl: "/icons/shield-monitor.svg",
    category: "cybersecurity",
  },
  {
    id: "cryptography-basics",
    title: {
      en: "Cryptography & Encryption",
      es: "Criptografía y Cifrado",
      ca: "Criptografia i Xifrat",
    },
    description: {
      en: "Understand encryption algorithms and cryptographic protocols",
      es: "Comprende algoritmos de cifrado y protocolos criptográficos",
      ca: "Comprèn algoritmes de xifrat i protocols criptogràfics",
    },
    date: "23/01/2012",
    duration: "5",
    iconUrl: "/icons/lock-and-key.svg",
    category: "cybersecurity",
  },
  {
    id: "incident-response",
    title: {
      en: "Incident Response & Forensics",
      es: "Respuesta a Incidentes y Forense",
      ca: "Resposta a Incidents i Forense",
    },
    description: {
      en: "Handle security incidents and perform digital forensics",
      es: "Maneja incidentes de seguridad y realiza análisis forense digital",
      ca: "Gestiona incidents de seguretat i realitza anàlisi forense digital",
    },
    date: "08/09/2022",
    duration: "6",
    iconUrl: "/icons/detective.svg",
    category: "cybersecurity",
  },
];

export default courses;
