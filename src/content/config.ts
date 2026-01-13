import { defineCollection, z } from 'astro:content';

const a_normal_opinion = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Signore del Circo'),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    audio_url: z.string().optional(),
    youtube_url: z.string().optional(),
  }),
});

export const collections = {
  a_normal_opinion,
};
