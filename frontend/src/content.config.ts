// Dateipfad: frontend/src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const expertise = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/expertise" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "profile.json", base: "./src/content/settings" }),
  // WICHTIG: Nutze die Funktions-Syntax, um den 'image' Helper zu erhalten
  schema: ({ image }) => z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    // Dieser Helper validiert den Pfad relativ zur Inhaltsdatei
    heroImage: image().optional(), 
    contactEmail: z.string(),
    location: z.string(),
  }),
});

export const collections = { expertise, settings };