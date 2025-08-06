import type { Course } from "@/types";

const courses: Course[] = [
  {
    id: "ios-swift-development",
    title: {
      en: "iOS Development with Swift",
      es: "Desarrollo iOS con Swift",
      ca: "Desenvolupament iOS amb Swift",
    },
    description: {
      en: "Build native iOS applications using Swift and Xcode",
      es: "Construye aplicaciones iOS nativas usando Swift y Xcode",
      ca: "Construeix aplicacions iOS natives usant Swift i Xcode",
    },
    date: "13/09/2016",
    duration: "10",
    iconUrl: "/icons/swift.svg",
    category: "mobile-development",
  },
  {
    id: "android-kotlin-development",
    title: {
      en: "Android Development with Kotlin",
      es: "Desarrollo Android con Kotlin",
      ca: "Desenvolupament Android amb Kotlin",
    },
    description: {
      en: "Create Android apps using Kotlin and Android Studio",
      es: "Crea aplicaciones Android usando Kotlin y Android Studio",
      ca: "Crea aplicacions Android usant Kotlin i Android Studio",
    },
    date: "05/03/2021",
    duration: "10",
    iconUrl: "/icons/kotlin.svg",
    category: "mobile-development",
  },
  {
    id: "react-native-crossplatform",
    title: {
      en: "React Native Cross-Platform",
      es: "React Native Multiplataforma",
      ca: "React Native Multiplataforma",
    },
    description: {
      en: "Develop cross-platform mobile apps with React Native",
      es: "Desarrolla aplicaciones móviles multiplataforma con React Native",
      ca: "Desenvolupa aplicacions mòbils multiplataforma amb React Native",
    },
    date: "29/12/2019",
    duration: "8",
    iconUrl: "/icons/react-native.svg",
    category: "mobile-development",
  },
  {
    id: "flutter-dart",
    title: {
      en: "Flutter Mobile Development",
      es: "Desarrollo Móvil con Flutter",
      ca: "Desenvolupament Mòbil amb Flutter",
    },
    description: {
      en: "Build beautiful mobile apps using Flutter and Dart",
      es: "Construye aplicaciones móviles hermosas usando Flutter y Dart",
      ca: "Construeix aplicacions mòbils boniques usant Flutter i Dart",
    },
    date: "17/07/2022",
    duration: "9",
    iconUrl: "/icons/flutter.svg",
    category: "mobile-development",
  },
  {
    id: "mobile-ui-ux",
    title: {
      en: "Mobile UI/UX Design",
      es: "Diseño UI/UX Móvil",
      ca: "Disseny UI/UX Mòbil",
    },
    description: {
      en: "Design engaging mobile user interfaces and experiences",
      es: "Diseña interfaces de usuario móviles atractivas y experiencias",
      ca: "Dissenya interfícies d'usuari mòbils atractives i experiències",
    },
    date: "20/04/2011",
    duration: "5",
    iconUrl: "/icons/layout.svg",
    category: "mobile-development",
  },
];

export default courses;
