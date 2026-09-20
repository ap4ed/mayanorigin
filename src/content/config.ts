import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['culture', 'recipes', 'brew-guides', 'origin']),
    keywords: z.array(z.string()).default([]),
    relatedProduct: z.string().optional(),
  }),
});

export const collections = { blog };
