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
        date: "12/01/2025",
        duration: "5",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M2 13h12v9h2V2h-2v9H2z"
                    opacity={0.25}
                ></path>
                <path
                    fill="currentColor"
                    d="M21 22h-5V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1"
                ></path>
                <path
                    fill="currentColor"
                    d="M14 22H3a1 1 0 0 1-1-1v-8h12zm0-11H2V3a1 1 0 0 1 1-1h11z"
                    opacity={0.5}
                ></path>
            </svg>
        ),
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
        date: "19/01/2025",
        duration: "7",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={256}
                height={228}
                viewBox="0 0 256 228"
            >
                <path
                    fill="#00d8ff"
                    d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
                ></path>
            </svg>
        ),
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
        date: "26/01/2025",
        duration: "8",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={512}
                height={314}
                viewBox="0 0 512 314"
            >
                <defs>
                    <linearGradient
                        id="logosNodejs0"
                        x1="68.188%"
                        x2="27.823%"
                        y1="17.487%"
                        y2="89.755%"
                    >
                        <stop offset="0%" stopColor="#41873f"></stop>
                        <stop offset="32.88%" stopColor="#418b3d"></stop>
                        <stop offset="63.52%" stopColor="#419637"></stop>
                        <stop offset="93.19%" stopColor="#3fa92d"></stop>
                        <stop offset="100%" stopColor="#3fae2a"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs1"
                        x1="43.277%"
                        x2="159.245%"
                        y1="55.169%"
                        y2="-18.306%"
                    >
                        <stop offset="13.76%" stopColor="#41873f"></stop>
                        <stop offset="40.32%" stopColor="#54a044"></stop>
                        <stop offset="71.36%" stopColor="#66b848"></stop>
                        <stop offset="90.81%" stopColor="#6cc04a"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs2"
                        x1="-4413.77%"
                        x2="5327.93%"
                        y1="13.43%"
                        y2="13.43%"
                    >
                        <stop offset="9.192%" stopColor="#6cc04a"></stop>
                        <stop offset="28.64%" stopColor="#66b848"></stop>
                        <stop offset="59.68%" stopColor="#54a044"></stop>
                        <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs3"
                        x1="-4.389%"
                        x2="101.499%"
                        y1="49.997%"
                        y2="49.997%"
                    >
                        <stop offset="9.192%" stopColor="#6cc04a"></stop>
                        <stop offset="28.64%" stopColor="#66b848"></stop>
                        <stop offset="59.68%" stopColor="#54a044"></stop>
                        <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs4"
                        x1="-9713.77%"
                        x2="27.93%"
                        y1="36.21%"
                        y2="36.21%"
                    >
                        <stop offset="9.192%" stopColor="#6cc04a"></stop>
                        <stop offset="28.64%" stopColor="#66b848"></stop>
                        <stop offset="59.68%" stopColor="#54a044"></stop>
                        <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs5"
                        x1="-103.861%"
                        x2="100.797%"
                        y1="50.275%"
                        y2="50.275%"
                    >
                        <stop offset="9.192%" stopColor="#6cc04a"></stop>
                        <stop offset="28.64%" stopColor="#66b848"></stop>
                        <stop offset="59.68%" stopColor="#54a044"></stop>
                        <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                        id="logosNodejs6"
                        x1="130.613%"
                        x2="4.393%"
                        y1="-211.069%"
                        y2="201.605%"
                    >
                        <stop offset="0%" stopColor="#41873f"></stop>
                        <stop offset="32.88%" stopColor="#418b3d"></stop>
                        <stop offset="63.52%" stopColor="#419637"></stop>
                        <stop offset="93.19%" stopColor="#3fa92d"></stop>
                        <stop offset="100%" stopColor="#3fae2a"></stop>
                    </linearGradient>
                    <path
                        id="logosNodejs7"
                        d="M57.903 1.85a5.96 5.96 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.96 5.96 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z"
                    ></path>
                </defs>
                <g fill="none">
                    <path
                        fill="#539e43"
                        d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04m14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18q0 .521-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95"
                    ></path>
                    <path
                        fill="#333"
                        d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81s2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543zM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849q-1.04.519-2.08 0l-12.251-7.05a5.96 5.96 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.96 5.96 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.71 1.71 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.71 1.71 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.96 5.96 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543s-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.82 2.82 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0z"
                    ></path>
                    <path
                        fill="#539e43"
                        d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04z"
                    ></path>
                    <g transform="translate(134.068 70.501)">
                        <mask id="logosNodejs8" fill="#fff">
                            <use href="#logosNodejs7"></use>
                        </mask>
                        <use
                            fill="url(#logosNodejs0)"
                            href="#logosNodejs7"
                        ></use>
                        <g mask="url(#logosNodejs8)">
                            <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693m4.739 123.204c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045z"></path>
                            <path
                                fill="url(#logosNodejs1)"
                                d="M106.676 29.934L57.788 1.85a8 8 0 0 0-1.503-.578L1.502 95.12a6.1 6.1 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156"
                            ></path>
                        </g>
                        <g mask="url(#logosNodejs8)">
                            <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.1 5.1 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085q1.734 1.04 3.814.693L3.467 29.818z"></path>
                            <path
                                fill="url(#logosNodejs2)"
                                fillRule="evenodd"
                                d="m50.391.809l-.693.347h.924z"
                                transform="translate(0 -9.246)"
                            ></path>
                            <path
                                fill="url(#logosNodejs3)"
                                fillRule="evenodd"
                                d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z"
                                transform="translate(0 -9.246)"
                            ></path>
                            <path
                                fill="url(#logosNodejs4)"
                                fillRule="evenodd"
                                d="m111.3 104.712l-.347-.578v.809z"
                                transform="translate(0 -9.246)"
                            ></path>
                            <path
                                fill="url(#logosNodejs5)"
                                fillRule="evenodd"
                                d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                                transform="translate(0 -9.246)"
                            ></path>
                            <path
                                fill="url(#logosNodejs6)"
                                fillRule="evenodd"
                                d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                                transform="translate(0 -9.246)"
                            ></path>
                        </g>
                    </g>
                </g>
            </svg>
        ),
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
        date: "02/02/2025",
        duration: "12",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
            >
                <g fill="none">
                    <g clipPath="url(#streamlineUltimateColorLayersStacked0)">
                        <path
                            fill="#ffef5e"
                            d="m17.298 14.817l5.394 2.344a.512.512 0 0 1 0 .939l-10.486 4.562a.5.5 0 0 1-.41 0l-10.488-4.56a.512.512 0 0 1 0-.939l5.394-2.346"
                        ></path>
                        <path
                            fill="#66e1ff"
                            d="m17.298 9.187l5.394 2.344a.512.512 0 0 1 0 .939l-10.486 4.562a.5.5 0 0 1-.41 0l-10.488-4.56a.512.512 0 0 1 0-.939l5.394-2.346"
                        ></path>
                        <path
                            fill="#ff808c"
                            d="M12.206 11.397a.52.52 0 0 1-.41 0L1.309 6.837a.512.512 0 0 1 0-.936l10.487-4.563a.5.5 0 0 1 .41 0l10.487 4.563a.512.512 0 0 1 0 .939z"
                        ></path>
                        <path
                            stroke="#191919"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m17.298 14.817l5.394 2.344a.512.512 0 0 1 0 .939l-10.486 4.562a.5.5 0 0 1-.41 0l-10.488-4.56a.512.512 0 0 1 0-.939l5.394-2.346"
                            strokeWidth={1}
                        ></path>
                        <path
                            stroke="#191919"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m17.298 9.187l5.394 2.344a.512.512 0 0 1 0 .939l-10.486 4.562a.5.5 0 0 1-.41 0l-10.488-4.56a.512.512 0 0 1 0-.939l5.394-2.346"
                            strokeWidth={1}
                        ></path>
                        <path
                            stroke="#191919"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.206 11.397a.52.52 0 0 1-.41 0L1.309 6.837a.512.512 0 0 1 0-.936l10.487-4.563a.5.5 0 0 1 .41 0l10.487 4.563a.512.512 0 0 1 0 .939z"
                            strokeWidth={1}
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="streamlineUltimateColorLayersStacked0">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                    </defs>
                </g>
            </svg>
        ),
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
        date: "09/02/2025",
        duration: "4",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
            >
                <g fill="none">
                    <path
                        fill="#66e1ff"
                        d="M12 4.813c-5.706 0-10.331 4.626-10.331 10.331v3.144c0 .496.402.899.898.899h18.865a.9.9 0 0 0 .899-.899v-3.144c0-5.705-4.626-10.33-10.331-10.33"
                    ></path>
                    <path
                        fill="#c2f3ff"
                        d="M17.987 6.724c-6.48-4.609-15.52-.474-16.272 7.443q-.045.487-.046.977v3.144c0 .496.402.899.898.899h2.958z"
                    ></path>
                    <path
                        stroke="#191919"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.813c-5.706 0-10.331 4.626-10.331 10.331v3.144c0 .496.402.899.898.899h18.865a.9.9 0 0 0 .899-.899v-3.144c0-5.705-4.626-10.33-10.331-10.33"
                        strokeWidth={1}
                    ></path>
                    <path
                        fill="#ff808c"
                        stroke="#191919"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.492a1.348 1.348 0 1 0 0-2.695a1.348 1.348 0 0 0 0 2.695"
                        strokeWidth={1}
                    ></path>
                    <path
                        stroke="#191919"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.952 14.191L17.4 9.745M3.466 15.593h1.796m15.272 0h-1.797m1.147-3.714l-1.66.687M15.265 7.26l-.687 1.66M12 6.61v1.797M8.734 7.26l.688 1.66m-3.456.19l1.268 1.27m-3.118 1.499l1.659.687"
                        strokeWidth={1}
                    ></path>
                </g>
            </svg>
        ),
        category: "web-development",
    },
];

export default courses;
