import type { Course } from "@/types";
import Unity from "@/icons/unity.svg?react";

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
        date: "20/01/2025",
        duration: "12",
        icon: <Unity />,
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
        date: "27/01/2025",
        duration: "14",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m0 1.846c5.595.007 10.128 4.545 10.128 10.141c0 5.601-4.54 10.141-10.141 10.141S1.846 17.588 1.846 11.987c0-2.8 1.135-5.335 2.97-7.17a10.12 10.12 0 0 1 7.176-2.97zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23c2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519C8.131 19.1 12 19.385 12 19.385l1.846-1.846l1.846.923c2.914-1.334 4.615-4.19 4.615-4.615a5.53 5.53 0 0 1-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462V8.538c0-.581 1.342-2.354 1.846-3c-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654a5 5 0 0 1-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634s-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"
                ></path>
            </svg>
        ),
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
        date: "03/02/2025",
        duration: "6",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m0 1.846c5.595.007 10.128 4.545 10.128 10.141c0 5.601-4.54 10.141-10.141 10.141S1.846 17.588 1.846 11.987c0-2.8 1.135-5.335 2.97-7.17a10.12 10.12 0 0 1 7.176-2.97zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23c2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519C8.131 19.1 12 19.385 12 19.385l1.846-1.846l1.846.923c2.914-1.334 4.615-4.19 4.615-4.615a5.53 5.53 0 0 1-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462V8.538c0-.581 1.342-2.354 1.846-3c-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654a5 5 0 0 1-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634s-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"
                ></path>
            </svg>
        ),
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
        date: "10/02/2025",
        duration: "8",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="File-Apk--Streamline-Ultimate"
            >
                <desc>File Apk Streamline Icon: https://streamlinehq.com</desc>
                <path
                    fill="#78eb7b"
                    d="M21.087 6.71044V22.0435c0 0.2537 -0.1008 0.497 -0.2802 0.6763 -0.1793 0.1794 -0.4226 0.2802 -0.6763 0.2802H3.86961c-0.25369 0 -0.49698 -0.1008 -0.67637 -0.2802 -0.17938 -0.1793 -0.28015 -0.4226 -0.28015 -0.6763V1.95652c0 -0.25368 0.10077 -0.49698 0.28015 -0.67636C3.37263 1.10078 3.61592 1 3.86961 1H15.3766c0.3108 0 0.6217 0.0287 0.9278 0.08609v3.74c0 0.25368 0.1008 0.49698 0.2801 0.67636 0.1794 0.17938 0.4227 0.28016 0.6764 0.28016h3.74c0.0574 0.30609 0.0861 0.61696 0.0861 0.92783Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#c9f7ca"
                    d="M16.6392 5.55304 2.91309 19.2887V1.95652c0 -0.25368 0.10077 -0.49698 0.28015 -0.67636C3.37263 1.10078 3.61592 1 3.86961 1H15.3766c0.3108 0 0.6217 0.0287 0.9278 0.08609v3.74c0.0018 0.13785 0.0326 0.27378 0.0902 0.399 0.0577 0.12522 0.141 0.23695 0.2446 0.32795Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#e3e3e3"
                    d="M21.0012 5.78261h-3.74c-0.2537 0 -0.497 -0.10077 -0.6764 -0.28016 -0.1793 -0.17938 -0.2801 -0.42267 -0.2801 -0.67636v-3.74c1.1775 0.18891 2.2654 0.74457 3.1087 1.58785 0.8432 0.84328 1.3989 1.93116 1.5878 3.10867Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.1305 23c0.2537 0 0.497 -0.1008 0.6763 -0.2802 0.1794 -0.1793 0.2802 -0.4226 0.2802 -0.6763V6.71809c0.0004 -0.75078 -0.1472 -1.49427 -0.4342 -2.188 -0.2871 -0.69374 -0.708 -1.32412 -1.2387 -1.85513 -0.5308 -0.53101 -1.1609 -0.95224 -1.8545 -1.23964C16.866 1.14792 16.1226 1 15.3718 1H3.86961c-0.25369 0 -0.49698 0.10078 -0.67637 0.28016 -0.17938 0.17938 -0.28015 0.42268 -0.28015 0.67636V22.0435c0 0.2537 0.10077 0.497 0.28015 0.6763 0.17939 0.1794 0.42268 0.2802 0.67637 0.2802H20.1305Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.78271 18.2174V13.913c0 -0.3805 0.15117 -0.7454 0.42024 -1.0145 0.26908 -0.2691 0.63402 -0.4202 1.01455 -0.4202 0.38053 0 0.74547 0.1511 1.01454 0.4202 0.26908 0.2691 0.42024 0.634 0.42024 1.0145v4.3044"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.78271 15.3517h2.86957"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.435 13.913c0 0.3806 -0.1512 0.7455 -0.4202 1.0146 -0.2691 0.2691 -0.6341 0.4202 -1.0146 0.4202h-1.4348v-2.8695h1.4348c0.3805 0 0.7455 0.1511 1.0146 0.4202 0.269 0.2691 0.4202 0.634 0.4202 1.0145Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5654 18.2212v-2.8695"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18.2177 12.4821 -2.8696 2.8696 2.8696 2.8695"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.3481 18.2212v-5.7391"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.4134 2.67774c-0.844 -0.84407 -1.9311 -1.40267 -3.1087 -1.59739v3.74574c0 0.25369 0.1008 0.49698 0.2801 0.67637 0.1794 0.17938 0.4227 0.28015 0.6764 0.28015h3.7496c-0.1959 -1.17615 -0.7544 -2.2617 -1.5974 -3.10487Z"
                    stroke-width="1"
                ></path>
            </svg>
        ),
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
        date: "17/02/2025",
        duration: "7",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Multiple-Users-Network--Streamline-Ultimate"
            >
                <desc>
                    Multiple Users Network Streamline Icon:
                    https://streamlinehq.com
                </desc>
                <path
                    fill="#c2f3ff"
                    d="M18.2181 7.19451c0.0004 0.81911 -0.1606 1.63028 -0.4737 2.38719 -0.3131 0.7569 -0.7723 1.4447 -1.3511 2.0242 -0.579 0.5794 -1.2664 1.0392 -2.023 1.3531 -0.7566 0.3137 -1.5676 0.4755 -2.3868 0.4758 -1.6623 -0.0277 -3.24635 -0.7107 -4.40752 -1.9006 -1.16116 -1.1898 -1.80543 -2.79008 -1.79259 -4.45256 0.00064 -1.58962 0.62386 -3.11578 1.73613 -4.25147 1.11226 -1.13568 2.62508 -1.79056 4.21438 -1.82432 0.0899 -0.00574 0.1788 -0.00574 0.2668 -0.00574 0.816 -0.004803 1.6247 0.15198 2.3797 0.46129 0.7549 0.30932 1.4412 0.76504 2.0193 1.3409 0.578 0.57586 1.0363 1.26045 1.3484 2.0143 0.312 0.75384 0.4718 1.56201 0.47 2.37791Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#66e1ff"
                    d="M11.9835 9.97699c-1.3592 -0.01698 -2.67587 -0.47651 -3.75048 -1.30896 -1.07462 -0.83246 -1.84863 -1.99248 -2.20479 -3.30432 -0.16254 0.55947 -0.24498 1.13913 -0.24487 1.72173 -0.01182 1.66182 0.63289 3.26116 1.79395 4.45006 1.16106 1.1891 2.74449 1.8716 4.40619 1.8993 0.9672 0.0007 1.9213 -0.2239 2.7867 -0.6559 0.8654 -0.432 1.6183 -1.0595 2.1992 -1.8329 0.5808 -0.7733 0.9738 -1.67129 1.1475 -2.62277 0.1737 -0.95149 0.1236 -1.93035 -0.1466 -2.85909 -0.3731 1.29991 -1.159 2.44317 -2.239 3.25724 -1.0799 0.81407 -2.3954 1.25478 -3.7478 1.25561Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.2181 7.19451c0.0004 0.81911 -0.1606 1.63028 -0.4737 2.38719 -0.3131 0.7569 -0.7723 1.4447 -1.3511 2.0242 -0.579 0.5794 -1.2664 1.0392 -2.023 1.3531 -0.7566 0.3137 -1.5676 0.4755 -2.3868 0.4758 -1.6623 -0.0277 -3.24635 -0.7107 -4.40752 -1.9006 -1.16116 -1.1898 -1.80543 -2.79008 -1.79259 -4.45256 0.00064 -1.58962 0.62386 -3.11578 1.73613 -4.25147 1.11226 -1.13568 2.62508 -1.79056 4.21438 -1.82432 0.0899 -0.00574 0.1788 -0.00574 0.2668 -0.00574 0.816 -0.004803 1.6247 0.15198 2.3797 0.46129 0.7549 0.30932 1.4412 0.76504 2.0193 1.3409 0.578 0.57586 1.0363 1.26045 1.3484 2.0143 0.312 0.75384 0.4718 1.56201 0.47 2.37791Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.7322 1.00583c-3.2445 3.51424 -3.2445 8.09883 0 12.42417"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.2725 1.00583c3.2445 3.51424 3.2445 8.09787 0 12.42227"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.80859 10.5652H17.2289"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.69336 3.86966H17.2562"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.7832 7.21744h12.4347"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffdda1"
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.0818 20.3217c1.2415 0 2.2478 -1.0063 2.2478 -2.2478 0 -1.2415 -1.0063 -2.2478 -2.2478 -2.2478 -1.2415 0 -2.24782 1.0063 -2.24782 2.2478 0 1.2415 1.00632 2.2478 2.24782 2.2478Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffdda1"
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.01149 20.3217c1.24143 0 2.24781 -1.0063 2.24781 -2.2478 0 -1.2415 -1.00638 -2.2478 -2.24781 -2.2478 -1.24144 0 -2.24782 1.0063 -2.24782 2.2478 0 1.2415 1.00638 2.2478 2.24782 2.2478Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffdda1"
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.9949 20.3217c1.2414 0 2.2478 -1.0063 2.2478 -2.2478 0 -1.2415 -1.0064 -2.2478 -2.2478 -2.2478 -1.2415 0 -2.2478 1.0063 -2.2478 2.2478 0 1.2415 1.0063 2.2478 2.2478 2.2478Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#66e1ff"
                    d="M1.47852 23c0.41983 -0.5208 0.95099 -0.941 1.55449 -1.2297 0.60349 -0.2887 1.26398 -0.4386 1.93297 -0.4386s1.32947 0.1499 1.93297 0.4386c0.60349 0.2887 1.13465 0.7089 1.55449 1.2297 0.43274 -0.5208 0.97486 -0.9399 1.58786 -1.2275 0.613 -0.2877 1.2818 -0.4369 1.9589 -0.4369s1.3459 0.1492 1.959 0.4369c0.6129 0.2876 1.155 0.7067 1.5878 1.2275 0.4198 -0.5208 0.9509 -0.941 1.5545 -1.2297 0.6035 -0.2887 1.2639 -0.4386 1.9329 -0.4386s1.3295 0.1499 1.933 0.4386c0.6035 0.2887 1.1347 0.7089 1.5545 1.2297"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.47852 23c0.41983 -0.5208 0.95099 -0.941 1.55449 -1.2297 0.60349 -0.2887 1.26398 -0.4386 1.93297 -0.4386s1.32947 0.1499 1.93297 0.4386c0.60349 0.2887 1.13465 0.7089 1.55449 1.2297 0.43274 -0.5208 0.97486 -0.9399 1.58786 -1.2275 0.613 -0.2877 1.2818 -0.4369 1.9589 -0.4369s1.3459 0.1492 1.959 0.4369c0.6129 0.2876 1.155 0.7067 1.5878 1.2275 0.4198 -0.5208 0.9509 -0.941 1.5545 -1.2297 0.6035 -0.2887 1.2639 -0.4386 1.9329 -0.4386s1.3295 0.1499 1.933 0.4386c0.6035 0.2887 1.1347 0.7089 1.5545 1.2297"
                    stroke-width="1"
                ></path>
            </svg>
        ),
        category: "game-development",
    },
];

export default courses;
