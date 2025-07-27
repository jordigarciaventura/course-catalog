import type { Course } from "@/types";
import {
    ChatsTeardropIcon,
    CrownSimpleIcon,
    DotsNineIcon,
    JoystickIcon,
    RobotIcon,
    VisorIcon,
} from "@phosphor-icons/react";

const courses: Course[] = [
    {
        id: "intro-artificial-intelligence",
        title: {
            en: "Introduction to Artificial Intelligence",
            es: "Introducción a la Inteligencia Artificial",
            ca: "Introducció a la Intel·ligència Artificial",
        },
        description: {
            en: "Explore AI fundamentals and core concepts in machine intelligence. This course introduces the history of artificial intelligence, key milestones, and the evolution of the field. You will learn about search algorithms, knowledge representation, reasoning, and the basics of machine learning. Real-world applications and ethical considerations in AI are also discussed, providing a comprehensive foundation for further study.",
            es: "Explora fundamentos de IA y conceptos centrales en inteligencia artificial. Este curso introduce la historia de la inteligencia artificial, los hitos clave y la evolución del campo. Aprenderás sobre algoritmos de búsqueda, representación del conocimiento, razonamiento y los fundamentos del aprendizaje automático. También se discuten aplicaciones reales y consideraciones éticas en IA, proporcionando una base integral para estudios posteriores.",
            ca: "Explora fonaments d'IA i conceptes centrals en intel·ligència artificial. Aquest curs introdueix la història de la intel·ligència artificial, fites clau i l'evolució del camp. Aprendràs sobre algoritmes de cerca, representació del coneixement, raonament i les bases de l'aprenentatge automàtic. També es discuteixen aplicacions reals i consideracions ètiques en IA, proporcionant una base integral per a estudis posteriors.",
        },
        date: "14/01/2025",
        duration: "6",
        icon: <RobotIcon weight="duotone" />,
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
            en: "Master deep learning techniques using TensorFlow and PyTorch. This course covers the architecture and functioning of artificial neural networks, including feedforward, convolutional, and recurrent networks. You will gain hands-on experience building, training, and optimizing deep learning models for tasks such as image recognition, natural language processing, and generative modeling. The course also explores advanced topics like transfer learning, regularization, and deployment of models in production environments.",
            es: "Domina técnicas de deep learning usando TensorFlow y PyTorch. Este curso cubre la arquitectura y funcionamiento de las redes neuronales artificiales, incluyendo redes feedforward, convolucionales y recurrentes. Obtendrás experiencia práctica construyendo, entrenando y optimizando modelos de deep learning para tareas como reconocimiento de imágenes, procesamiento de lenguaje natural y modelado generativo. El curso también explora temas avanzados como aprendizaje por transferencia, regularización y despliegue de modelos en entornos de producción.",
            ca: "Domina tècniques de deep learning usant TensorFlow i PyTorch. Aquest curs cobreix l'arquitectura i funcionament de les xarxes neuronals artificials, incloent xarxes feedforward, convolucionals i recurrents. Obtindràs experiència pràctica construint, entrenant i optimitzant models de deep learning per a tasques com el reconeixement d'imatges, processament de llenguatge natural i modelatge generatiu. El curs també explora temes avançats com l'aprenentatge per transferència, regularització i desplegament de models en entorns de producció.",
        },
        date: "21/01/2025",
        duration: "10",
        icon: <DotsNineIcon weight="duotone" />,
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
            en: "Build NLP applications for text analysis and language understanding. This course delves into the core techniques of natural language processing, including tokenization, part-of-speech tagging, syntactic parsing, and semantic analysis. You will work with modern NLP libraries and frameworks to develop applications such as chatbots, sentiment analysis tools, and machine translation systems. The course also covers recent advances in transformer architectures and large language models, as well as challenges in multilingual and low-resource settings.",
            es: "Construye aplicaciones NLP para análisis de texto y comprensión del lenguaje. Este curso profundiza en las técnicas centrales del procesamiento de lenguaje natural, incluyendo tokenización, etiquetado de partes del discurso, análisis sintáctico y análisis semántico. Trabajarás con bibliotecas y frameworks modernos de NLP para desarrollar aplicaciones como chatbots, herramientas de análisis de sentimiento y sistemas de traducción automática. El curso también cubre avances recientes en arquitecturas de transformadores y grandes modelos de lenguaje, así como desafíos en entornos multilingües y de pocos recursos.",
            ca: "Construeix aplicacions NLP per anàlisi de text i comprensió del llenguatge. Aquest curs aprofundeix en les tècniques centrals del processament de llenguatge natural, incloent tokenització, etiquetatge de parts del discurs, anàlisi sintàctica i anàlisi semàntica. Treballaràs amb biblioteques i frameworks moderns de NLP per desenvolupar aplicacions com chatbots, eines d'anàlisi de sentiment i sistemes de traducció automàtica. El curs també cobreix avenços recents en arquitectures de transformadors i grans models de llenguatge, així com desafiaments en entorns multilingües i de pocs recursos.",
        },
        date: "28/01/2025",
        duration: "8",
        icon: <ChatsTeardropIcon weight="duotone" />,
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
            en: "Implement image processing and computer vision algorithms. This course introduces the principles of computer vision, including image filtering, feature extraction, object detection, and image segmentation. You will use OpenCV and other libraries to build practical applications such as face recognition, motion tracking, and augmented reality. The course also discusses the integration of deep learning models for advanced vision tasks and explores real-world challenges in deploying vision systems.",
            es: "Implementa algoritmos de procesamiento de imágenes y visión por computadora. Este curso introduce los principios de la visión por computadora, incluyendo filtrado de imágenes, extracción de características, detección de objetos y segmentación de imágenes. Utilizarás OpenCV y otras bibliotecas para construir aplicaciones prácticas como reconocimiento facial, seguimiento de movimiento y realidad aumentada. El curso también discute la integración de modelos de deep learning para tareas avanzadas de visión y explora desafíos reales en el despliegue de sistemas de visión.",
            ca: "Implementa algoritmes de processament d'imatges i visió per computador. Aquest curs introdueix els principis de la visió per computador, incloent filtratge d'imatges, extracció de característiques, detecció d'objectes i segmentació d'imatges. Utilitzaràs OpenCV i altres biblioteques per construir aplicacions pràctiques com el reconeixement facial, seguiment de moviment i realitat augmentada. El curs també discuteix la integració de models de deep learning per a tasques avançades de visió i explora desafiaments reals en el desplegament de sistemes de visió.",
        },
        date: "04/02/2025",
        duration: "7",
        icon: <VisorIcon weight="duotone" />,
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
            en: "Learn RL algorithms for decision-making and game AI. This course covers the fundamentals of reinforcement learning, including Markov decision processes, value functions, policy gradients, and Q-learning. You will implement RL agents that learn to solve complex tasks through trial and error, with applications in robotics, game development, and autonomous systems. The course also explores advanced topics such as deep reinforcement learning, exploration strategies, and the challenges of scaling RL to real-world problems.",
            es: "Aprende algoritmos RL para toma de decisiones e IA en juegos. Este curso cubre los fundamentos del aprendizaje por refuerzo, incluyendo procesos de decisión de Markov, funciones de valor, gradientes de política y Q-learning. Implementarás agentes de RL que aprenden a resolver tareas complejas mediante prueba y error, con aplicaciones en robótica, desarrollo de juegos y sistemas autónomos. El curso también explora temas avanzados como deep reinforcement learning, estrategias de exploración y los desafíos de escalar RL a problemas del mundo real.",
            ca: "Aprèn algoritmes RL per presa de decisions i IA en jocs. Aquest curs cobreix els fonaments de l'aprenentatge per reforç, incloent processos de decisió de Markov, funcions de valor, gradients de política i Q-learning. Implementaràs agents de RL que aprenen a resoldre tasques complexes mitjançant prova i error, amb aplicacions en robòtica, desenvolupament de jocs i sistemes autònoms. El curs també explora temes avançats com deep reinforcement learning, estratègies d'exploració i els desafiaments d'escalar RL a problemes del món real.",
        },
        date: "11/02/2025",
        duration: "9",
        icon: <JoystickIcon weight="duotone" />,
        category: "ai-ml",
    },
    {
        id: "advanced-machine-learning-systems-production",
        title: {
            en: "Advanced Machine Learning Systems Architecture and Production-Ready AI Solutions Development",
            es: "Arquitectura Avanzada de Sistemas de Machine Learning y Desarrollo de Soluciones de IA Listas para Producción",
            ca: "Arquitectura Avançada de Sistemes de Machine Learning i Desenvolupament de Solucions d'IA Llestes per a Producció",
        },
        description: {
            en: "Comprehensive course covering the complete lifecycle of machine learning systems from research to production, including advanced topics such as distributed training, model optimization, MLOps best practices, containerization with Docker and Kubernetes, CI/CD pipelines for ML models, monitoring and observability, A/B testing strategies, and scalable infrastructure design for high-performance AI applications in enterprise environments. You will gain hands-on experience architecting robust ML pipelines, automating workflows, and deploying models at scale. The course also addresses security, compliance, and cost optimization in production AI systems, and provides case studies from industry to illustrate best practices and common pitfalls.",
            es: "Curso integral que cubre el ciclo completo de vida de los sistemas de machine learning desde la investigación hasta la producción, incluyendo temas avanzados como entrenamiento distribuido, optimización de modelos, mejores prácticas de MLOps, containerización con Docker y Kubernetes, pipelines de CI/CD para modelos ML, monitoreo y observabilidad, estrategias de pruebas A/B, y diseño de infraestructura escalable para aplicaciones de IA de alto rendimiento en entornos empresariales. Obtendrás experiencia práctica en la arquitectura de pipelines robustos de ML, automatización de flujos de trabajo y despliegue de modelos a escala. El curso también aborda la seguridad, el cumplimiento y la optimización de costes en sistemas de IA en producción, y proporciona estudios de caso de la industria para ilustrar mejores prácticas y errores comunes.",
            ca: "Curs integral que cobreix el cicle complet de vida dels sistemes de machine learning des de la recerca fins a la producció, incloent temes avançats com entrenament distribuït, optimització de models, millors pràctiques de MLOps, containerització amb Docker i Kubernetes, pipelines de CI/CD per a models ML, monitoratge i observabilitat, estratègies de proves A/B, i disseny d'infraestructura escalable per a aplicacions d'IA d'alt rendiment en entorns empresarials. Obtindràs experiència pràctica en l'arquitectura de pipelines robustos de ML, automatització de fluxos de treball i desplegament de models a escala. El curs també aborda la seguretat, el compliment i l'optimització de costos en sistemes d'IA en producció, i proporciona estudis de cas de la indústria per il·lustrar millors pràctiques i errors comuns.",
        },
        date: "18/02/2025",
        duration: "15",
        icon: <CrownSimpleIcon weight="duotone" />,
        category: "ai-ml",
    },
];

export default courses;
