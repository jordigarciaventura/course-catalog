import type { Course } from "@/types";
import { LibraryBig } from "lucide-react";

const courses: Course[] = [
    {
        id: "intro-artificial-intelligence",
        title: {
            en: "Introduction to Artificial Intelligence",
            es: "Introducción a la Inteligencia Artificial",
            ca: "Introducció a la Intel·ligència Artificial",
        },
        description: {
            en: "Explore AI fundamentals and core concepts in machine intelligence",
            es: "Explora fundamentos de IA y conceptos centrales en inteligencia artificial",
            ca: "Explora fonaments d'IA i conceptes centrals en intel·ligència artificial",
        },
        date: "14/01/2025",
        duration: "6",
        icon: <LibraryBig />,
        category: "ai-ml",
    },
    {
        id: "deep-learning-neural-networks",
        title: {
            en: "Deep Learning & Neural Networks",
            es: "Deep Learning y Redes Neuronales",
            ca: "Deep Learning i Xarxes Neuronals",
        },
        description: {
            en: "Master deep learning techniques using TensorFlow and PyTorch",
            es: "Domina técnicas de deep learning usando TensorFlow y PyTorch",
            ca: "Domina tècniques de deep learning usant TensorFlow i PyTorch",
        },
        date: "21/01/2025",
        duration: "10",
        icon: <LibraryBig />,
        category: "ai-ml",
    },
    {
        id: "natural-language-processing",
        title: {
            en: "Natural Language Processing",
            es: "Procesamiento de Lenguaje Natural",
            ca: "Processament de Llenguatge Natural",
        },
        description: {
            en: "Build NLP applications for text analysis and language understanding",
            es: "Construye aplicaciones NLP para análisis de texto y comprensión del lenguaje",
            ca: "Construeix aplicacions NLP per anàlisi de text i comprensió del llenguatge",
        },
        date: "28/01/2025",
        duration: "8",
        icon: <LibraryBig />,
        category: "ai-ml",
    },
    {
        id: "computer-vision",
        title: {
            en: "Computer Vision with OpenCV",
            es: "Visión por Computadora con OpenCV",
            ca: "Visió per Computador amb OpenCV",
        },
        description: {
            en: "Implement image processing and computer vision algorithms",
            es: "Implementa algoritmos de procesamiento de imágenes y visión por computadora",
            ca: "Implementa algoritmes de processament d'imatges i visió per computador",
        },
        date: "04/02/2025",
        duration: "7",
        icon: <LibraryBig />,
        category: "ai-ml",
    },
    {
        id: "reinforcement-learning",
        title: {
            en: "Reinforcement Learning",
            es: "Aprendizaje por Refuerzo",
            ca: "Aprenentatge per Reforç",
        },
        description: {
            en: "Learn RL algorithms for decision-making and game AI",
            es: "Aprende algoritmos RL para toma de decisiones e IA en juegos",
            ca: "Aprèn algoritmes RL per presa de decisions i IA en jocs",
        },
        date: "11/02/2025",
        duration: "9",
        icon: <LibraryBig />,
        category: "ai-ml",
    },
];

export default courses;
