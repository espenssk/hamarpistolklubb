import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const nyheter = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/nyheter" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
  }),
});

const terminliste = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/terminliste" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
  }),
});

export const collections = { nyheter, terminliste };
