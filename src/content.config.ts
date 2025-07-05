import { defineCollection, z } from "astro:content";
import { courseCategories } from "@/config";

const multilingualTextSchema = z.object({
    en: z.string(),
    es: z.string(),
    ca: z.string(),
});

const courseSchema = z.object({
    id: z.string(),
    title: multilingualTextSchema,
    description: multilingualTextSchema,
    date: z.string(),
    duration: z.string(),
    category: z.enum(courseCategories),
});

const coursesCollection = defineCollection({
    type: "data",
    schema: z.array(courseSchema),
});

export const collections = {
    courses: coursesCollection,
};
