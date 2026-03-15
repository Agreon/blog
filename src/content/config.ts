import { defineCollection, z } from "astro:content";

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

export const collections = {
  pages: defineCollection({
    type: "content",
    schema: pageSchema,
  }),
  projects: defineCollection({
    type: "content",
    schema: projectSchema,
  }),
};
