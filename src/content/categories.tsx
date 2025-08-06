import type { Category } from "@/types";
import {
  Brain,
  ChartColumnDecreasing,
  Cloud,
  Code,
  Database,
  Gamepad2,
  Globe,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";

const categories: Category[] = [
  {
    id: "data-science",
    label: {
      en: "Data Science",
      es: "Ciencia de Datos",
      ca: "Ciència de Dades",
    },
    icon: <ChartColumnDecreasing />,
    color: "emerald",
  },
  {
    id: "cloud-devops",
    label: {
      en: "Cloud/DevOps",
      es: "Nube/DevOps",
      ca: "Núvol/DevOps",
    },
    icon: <Cloud />,
    color: "sky",
  },
  {
    id: "programming",
    label: {
      en: "Programming",
      es: "Programación",
      ca: "Programació",
    },
    icon: <Code />,
    color: "violet",
  },
  {
    id: "web-development",
    label: {
      en: "Web Development",
      es: "Desarrollo Web",
      ca: "Desenvolupament Web",
    },
    icon: <Globe />,
    color: "blue",
  },
  {
    id: "ai-ml",
    label: {
      en: "AI/ML",
      es: "IA/ML",
      ca: "IA/ML",
    },
    icon: <Brain />,
    color: "purple",
  },
  {
    id: "databases",
    label: {
      en: "Databases",
      es: "Bases de Datos",
      ca: "Bases de Dades",
    },
    icon: <Database />,
    color: "orange",
  },
  {
    id: "mobile-development",
    label: {
      en: "Mobile Development",
      es: "Desarrollo Móvil",
      ca: "Desenvolupament Mòbil",
    },
    icon: <Smartphone />,
    color: "pink",
  },
  {
    id: "game-development",
    label: {
      en: "Game Development",
      es: "Desarrollo de Juegos",
      ca: "Desenvolupament de Jocs",
    },
    icon: <Gamepad2 />,
    color: "red",
  },
  {
    id: "cybersecurity",
    label: {
      en: "Cybersecurity",
      es: "Ciberseguridad",
      ca: "Ciberseguretat",
    },
    icon: <Shield />,
    color: "yellow",
  },
  {
    id: "software-engineering",
    label: {
      en: "Software Engineering",
      es: "Ingeniería de Software",
      ca: "Enginyeria de Programari",
    },
    icon: <Wrench />,
    color: "slate",
  },
];

export default categories;
