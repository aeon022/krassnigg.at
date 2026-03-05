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

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    summary: z.string(),
    category: z.enum(["berufserfahrung", "werdegang"]).optional(),
    order: z.number().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    degree: z.string(),
    institution: z.string(),
    institutionUrl: z.string().url().optional(),
    details: z.string().optional(),
    order: z.number().optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

const profileSections = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile-sections" }),
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    content: z.string(),
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
    introStatement: z.string().optional(),
    focusItems: z.array(z.string()).optional(),
    discoverLabel: z.string().optional(),
    // Dieser Helper validiert den Pfad relativ zur Inhaltsdatei
    heroImage: image().optional(), 
    contactEmail: z.string(),
    location: z.string(),
    socialLinks: z
      .object({
        linkedin: z.string().url().optional(),
        facebook: z.string().url().optional(),
        instagram: z.string().url().optional(),
        x: z.string().url().optional(),
        bluesky: z.string().url().optional(),
        youtube: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  expertise,
  experience,
  education,
  certifications,
  profileSections,
  settings,
};
