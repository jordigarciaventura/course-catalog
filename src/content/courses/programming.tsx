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
        date: "10/01/2025",
        duration: "8",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={256}
                height={255}
                viewBox="0 0 256 255"
            >
                <defs>
                    <linearGradient
                        id="logosPython0"
                        x1="12.959%"
                        x2="79.639%"
                        y1="12.039%"
                        y2="78.201%"
                    >
                        <stop offset="0%" stopColor="#387eb8"></stop>
                        <stop offset="100%" stopColor="#366994"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosPython1"
                        x1="19.128%"
                        x2="90.742%"
                        y1="20.579%"
                        y2="88.429%"
                    >
                        <stop offset="0%" stopColor="#ffe052"></stop>
                        <stop offset="100%" stopColor="#ffc331"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#logosPython0)"
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"
                ></path>
                <path
                    fill="url(#logosPython1)"
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"
                ></path>
            </svg>
        ),
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
        date: "17/01/2025",
        duration: "6",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={128}
                height={128}
                viewBox="0 0 128 128"
            >
                <path
                    fill="#f0db4f"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
                ></path>
            </svg>
        ),
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
        date: "24/01/2025",
        duration: "10",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
            >
                <path
                    fill="#5382a1"
                    d="M12.7 23.56s-1.07.622.761.833a16 16 0 0 0 5.8-.246a10 10 0 0 0 1.539.753c-5.481 2.349-12.405-.136-8.1-1.339m-.674-3.067s-1.2.888.633 1.078a22.6 22.6 0 0 0 7.481-.359a3.3 3.3 0 0 0 1.152.7c-6.627 1.938-14.009.153-9.266-1.421"
                ></path>
                <path
                    fill="#e76f00"
                    d="M17.673 15.294a2.05 2.05 0 0 1-.355 2.954s3.429-1.77 1.854-3.987c-1.471-2.067-2.6-3.095 3.508-6.636c0 0-9.586 2.394-5.007 7.669"
                ></path>
                <path
                    fill="#5382a1"
                    d="M24.922 25.827s.792.652-.872 1.157c-3.164.958-13.168 1.248-15.948.038c-1-.435.874-1.038 1.464-1.164a3.8 3.8 0 0 1 .966-.108c-1.111-.783-7.181 1.537-3.083 2.2c11.176 1.812 20.372-.816 17.473-2.124m-11.711-8.508s-5.089 1.209-1.8 1.648a38 38 0 0 0 6.731-.072a53 53 0 0 0 4.221-.555a9 9 0 0 0-1.28.685c-5.17 1.358-15.153.726-12.283-.665a9.6 9.6 0 0 1 4.407-1.042m9.133 5.104c5.253-2.73 2.824-5.353 1.129-5a4 4 0 0 0-.6.161a.96.96 0 0 1 .449-.346c3.354-1.179 5.933 3.478-1.083 5.322a.5.5 0 0 0 .106-.138"
                ></path>
                <path
                    fill="#e76f00"
                    d="M19.172 1.906s2.909 2.91-2.759 7.386c-4.546 3.59-1.037 5.637 0 7.975c-2.653-2.394-4.6-4.5-3.294-6.463c1.917-2.879 7.229-4.275 6.056-8.9"
                ></path>
                <path
                    fill="#5382a1"
                    d="M13.727 29.818c5.042.323 12.786-.179 12.969-2.565c0 0-.353.9-4.167 1.623a41.5 41.5 0 0 1-12.76.2s.645.533 3.959.746"
                ></path>
            </svg>
        ),
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
        date: "31/01/2025",
        duration: "7",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={128}
                height={128}
                viewBox="0 0 128 128"
            >
                <path
                    fill="#9b4f96"
                    d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7"
                ></path>
                <path
                    fill="#68217a"
                    d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z"
                ></path>
                <path
                    fill="#fff"
                    d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z"
                ></path>
            </svg>
        ),
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
        date: "07/02/2025",
        duration: "9",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Hierarchy-5--Streamline-Ultimate"
            >
                <desc>
                    Hierarchy 5 Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                    fill="#ffef5e"
                    d="M5.26228 17.3909h-2.695c-0.4961 0 -0.89833 0.4022 -0.89833 0.8984v2.695c0 0.4961 0.40223 0.8983 0.89833 0.8983h2.695c0.4961 0 0.89833 -0.4022 0.89833 -0.8983v-2.695c0 -0.4962 -0.40223 -0.8984 -0.89833 -0.8984Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#fff7ae"
                    d="M6.16061 19.1876v-0.8983c0 -0.2383 -0.0946 -0.4668 -0.26308 -0.6353 -0.16848 -0.1684 -0.39701 -0.2631 -0.63525 -0.2631h-2.695c-0.23824 0 -0.46677 0.0947 -0.63525 0.2631 -0.16839 0.1685 -0.26308 0.397 -0.26308 0.6353v0.8983h4.49166Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffef5e"
                    d="M13.3477 17.3909h-2.695c-0.4961 0 -0.89831 0.4022 -0.89831 0.8984v2.695c0 0.4961 0.40221 0.8983 0.89831 0.8983h2.695c0.4962 0 0.8984 -0.4022 0.8984 -0.8983v-2.695c0 -0.4962 -0.4022 -0.8984 -0.8984 -0.8984Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#fff7ae"
                    d="M14.2461 19.1876v-0.8983c0 -0.2383 -0.0947 -0.4668 -0.2631 -0.6353 -0.1684 -0.1685 -0.397 -0.2631 -0.6353 -0.2631h-2.695c-0.2382 0 -0.4667 0.0947 -0.6352 0.2631 -0.16841 0.1685 -0.26311 0.397 -0.26311 0.6353v0.8983h4.49171Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffef5e"
                    d="M21.4327 17.3909h-2.695c-0.4962 0 -0.8983 0.4022 -0.8983 0.8984v2.695c0 0.4961 0.4021 0.8983 0.8983 0.8983h2.695c0.4962 0 0.8983 -0.4022 0.8983 -0.8983v-2.695c0 -0.4962 -0.4021 -0.8984 -0.8983 -0.8984Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#fff7ae"
                    d="M22.331 19.1876v-0.8983c0 -0.2383 -0.0947 -0.4668 -0.2631 -0.6353 -0.1684 -0.1685 -0.397 -0.2631 -0.6352 -0.2631h-2.695c-0.2383 0 -0.4668 0.0947 -0.6353 0.2631 -0.1684 0.1684 -0.263 0.397 -0.263 0.6353v0.8983h4.4916Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 5.71167V17.39"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ff808c"
                    d="M17.8394 2.11835H6.16103c-0.4961 0 -0.89833 0.40223 -0.89833 0.89833v1.79667c0 0.4961 0.40223 0.89833 0.89833 0.89833H17.8394c0.4962 0 0.8983 -0.40223 0.8983 -0.89833V3.01668c0 -0.4961 -0.4021 -0.89833 -0.8983 -0.89833Z"
                    stroke-width="1"
                ></path>
                <path
                    fill="#ffbfc5"
                    d="M5.2627 3.46676V3.0176c0 -0.23825 0.09469 -0.46677 0.26308 -0.63525 0.16848 -0.16849 0.39701 -0.26309 0.63525 -0.26309H17.8394c0.2382 0 0.4667 0.0946 0.6352 0.26309 0.1684 0.16848 0.2631 0.397 0.2631 0.63525v0.44916H5.2627Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.8394 2.11835H6.16103c-0.4961 0 -0.89833 0.40223 -0.89833 0.89833v1.79667c0 0.4961 0.40223 0.89833 0.89833 0.89833H17.8394c0.4962 0 0.8983 -0.40223 0.8983 -0.89833V3.01668c0 -0.4961 -0.4021 -0.89833 -0.8983 -0.89833Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.3477 17.39h-2.695c-0.4961 0 -0.89831 0.4022 -0.89831 0.8983v2.695c0 0.4962 0.40221 0.8984 0.89831 0.8984h2.695c0.4962 0 0.8984 -0.4022 0.8984 -0.8984v-2.695c0 -0.4961 -0.4022 -0.8983 -0.8984 -0.8983Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.26228 17.39h-2.695c-0.4961 0 -0.89833 0.4022 -0.89833 0.8983v2.695c0 0.4962 0.40223 0.8984 0.89833 0.8984h2.695c0.4961 0 0.89833 -0.4022 0.89833 -0.8984v-2.695c0 -0.4961 -0.40223 -0.8983 -0.89833 -0.8983Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.4327 17.39h-2.695c-0.4962 0 -0.8983 0.4022 -0.8983 0.8983v2.695c0 0.4962 0.4021 0.8984 0.8983 0.8984h2.695c0.4962 0 0.8983 -0.4022 0.8983 -0.8984v-2.695c0 -0.4961 -0.4021 -0.8983 -0.8983 -0.8983Z"
                    stroke-width="1"
                ></path>
                <path
                    stroke="#191919"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.6359 17.3909v-4.4917c0 -0.2382 -0.0947 -0.4667 -0.2631 -0.6352 -0.1684 -0.1685 -0.397 -0.2631 -0.6352 -0.2631H5.26259c-0.23824 0 -0.46677 0.0947 -0.63525 0.2631 -0.16839 0.1685 -0.26308 0.397 -0.26308 0.6352v4.4917"
                    stroke-width="1"
                ></path>
            </svg>
        ),
        category: "programming",
    },
];

export default courses;
