import type { Course } from "@/types";

const courses: Course[] = [
  {
    id: "unity-game-development",
    title: {
      en: "Unity Game Development",
      es: "Desarrollo de Juegos con Unity",
      ca: "Desenvolupament de Jocs amb Unity",
    },
    description: {
      en: "Create 2D and 3D games using Unity engine and C#",
      es: "Crea juegos 2D y 3D usando el motor Unity y C#",
      ca: "Crea jocs 2D i 3D usant el motor Unity i C#",
    },
    date: "11/04/2017",
    duration: "12",
    iconUrl: "/icons/unity.svg",
    category: "game-development",
  },
  {
    id: "unreal-engine-blueprints",
    title: {
      en: "Unreal Engine & Blueprints",
      es: "Unreal Engine y Blueprints",
      ca: "Unreal Engine i Blueprints",
    },
    description: {
      en: "Build AAA-quality games using Unreal Engine visual scripting",
      es: "Construye juegos de calidad AAA usando scripting visual de Unreal Engine",
      ca: "Construeix jocs de qualitat AAA usant scripting visual d'Unreal Engine",
    },
    date: "02/10/2021",
    duration: "14",
    iconUrl: "/icons/unreal-engine.svg",
    category: "game-development",
  },
  {
    id: "game-design-fundamentals",
    title: {
      en: "Game Design Fundamentals",
      es: "Fundamentos de Diseño de Juegos",
      ca: "Fonaments de Disseny de Jocs",
    },
    description: {
      en: "Learn game mechanics, level design, and player psychology",
      es: "Aprende mecánicas de juego, diseño de niveles y psicología del jugador",
      ca: "Aprèn mecàniques de joc, disseny de nivells i psicologia del jugador",
    },
    date: "28/06/2014",
    duration: "6",
    iconUrl: "/icons/joystick.svg",
    category: "game-development",
  },
  {
    id: "mobile-game-development",
    title: {
      en: "Mobile Game Development",
      es: "Desarrollo de Juegos Móviles",
      ca: "Desenvolupament de Jocs Mòbils",
    },
    description: {
      en: "Develop mobile games for iOS and Android platforms",
      es: "Desarrolla juegos móviles para plataformas iOS y Android",
      ca: "Desenvolupa jocs mòbils per plataformes iOS i Android",
    },
    date: "05/12/2019",
    duration: "8",
    iconUrl: "/icons/mobile-game.svg",
    category: "game-development",
  },
  {
    id: "multiplayer-networking",
    title: {
      en: "Multiplayer Game Networking",
      es: "Redes para Juegos Multijugador",
      ca: "Xarxes per Jocs Multijugador",
    },
    description: {
      en: "Implement multiplayer features and network programming",
      es: "Implementa características multijugador y programación de redes",
      ca: "Implementa característiques multijugador i programació de xarxes",
    },
    date: "13/08/2023",
    duration: "7",
    iconUrl: "/icons/multiplayer.svg",
    category: "game-development",
  },
];

export default courses;
