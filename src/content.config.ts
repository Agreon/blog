import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
});
export type PageProps = z.infer<typeof pageSchema>;

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  website: z.string(),
  repo: z.string(),
  tags: z.array(z.string()),
});
export type ProjectProps = z.infer<typeof projectSchema>;

const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
  tags: z.array(z.string()).default([]),
});
export type BlogProps = z.infer<typeof blogSchema>;

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: pageSchema,
  }),
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: projectSchema,
  }),
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: blogSchema,
  }),
};
