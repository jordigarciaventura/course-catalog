import { defineCollection, z } from "astro:content";

const coursesCollection = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            title: z.string(),
            duration: z.string(),
            date: z.string(),
        })
    ),
});

export const collections = {
    courses: coursesCollection,
};
