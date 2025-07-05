import type { Course } from "@/types";
import { LibraryBig } from "lucide-react";

const courses: Course[] = [
    {
        id: "docker-fundamentals",
        title: {
            en: "Docker Fundamentals",
            es: "Fundamentos de Docker",
            ca: "Fonaments de Docker",
        },
        description: {
            en: "Learn containerization with Docker from basics to advanced concepts",
            es: "Aprende contenedorización con Docker desde básico hasta conceptos avanzados",
            ca: "Aprèn contenidorització amb Docker des del bàsic fins a conceptes avançats",
        },
        date: "15/01/2025",
        duration: "4",
        icon: <LibraryBig />,
        category: "cloud-devops",
    },
    {
        id: "kubernetes-essentials",
        title: {
            en: "Kubernetes Essentials",
            es: "Kubernetes Esencial",
            ca: "Kubernetes Essencial",
        },
        description: {
            en: "Master container orchestration with Kubernetes for scalable applications",
            es: "Domina la orquestación de contenedores con Kubernetes para aplicaciones escalables",
            ca: "Domina l'orquestració de contenidors amb Kubernetes per aplicacions escalables",
        },
        date: "22/01/2025",
        duration: "6",
        icon: <LibraryBig />,
        category: "cloud-devops",
    },
    {
        id: "aws-cloud-practitioner",
        title: {
            en: "AWS Cloud Practitioner",
            es: "AWS Cloud Practitioner",
            ca: "AWS Cloud Practitioner",
        },
        description: {
            en: "Get started with Amazon Web Services and cloud computing fundamentals",
            es: "Comienza con Amazon Web Services y fundamentos de computación en la nube",
            ca: "Comença amb Amazon Web Services i fonaments de computació al núvol",
        },
        date: "05/02/2025",
        duration: "3",
        icon: <LibraryBig />,
        category: "cloud-devops",
    },
    {
        id: "terraform-infrastructure",
        title: {
            en: "Terraform Infrastructure as Code",
            es: "Infraestructura como Código con Terraform",
            ca: "Infraestructura com a Codi amb Terraform",
        },
        description: {
            en: "Automate infrastructure provisioning using Terraform and best practices",
            es: "Automatiza el aprovisionamiento de infraestructura usando Terraform y mejores prácticas",
            ca: "Automatitza l'aprovisionament d'infraestructura usant Terraform i millors pràctiques",
        },
        date: "12/02/2025",
        duration: "5",
        icon: <LibraryBig />,
        category: "cloud-devops",
    },
    {
        id: "cicd-pipelines",
        title: {
            en: "CI/CD Pipelines with Jenkins",
            es: "Pipelines CI/CD con Jenkins",
            ca: "Pipelines CI/CD amb Jenkins",
        },
        description: {
            en: "Build robust continuous integration and deployment pipelines",
            es: "Construye pipelines robustos de integración y despliegue continuo",
            ca: "Construeix pipelines robustos d'integració i desplegament continu",
        },
        date: "19/02/2025",
        duration: "4",
        icon: <LibraryBig />,
        category: "cloud-devops",
    },
];

export default courses;
