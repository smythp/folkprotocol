import { defineCollection, z } from 'astro:content';

/**
 * Problem domains - organized by health concern
 * e.g., "sleep", "cold-symptoms", "persistent-cough"
 */
const domains = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().max(200),

    // What are we trying to address?
    symptoms: z.array(z.string()).optional(),

    // Evidence tier for the domain overall
    // (how well-studied is this area for herbal interventions?)
    researchDepth: z.enum(['well-studied', 'moderate', 'sparse', 'traditional-only']),

    // Related domains for cross-linking
    related: z.array(z.string()).optional(),

    // Status
    draft: z.boolean().default(true),
    lastUpdated: z.date().optional(),
  }),
});

/**
 * Herbs - individual plant monographs
 */
const herbs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    latinName: z.string().optional(),
    commonNames: z.array(z.string()).optional(),

    // Brief description
    summary: z.string().max(300),

    // What domains does this herb address?
    domains: z.array(z.string()),

    // Evidence assessment per domain
    // e.g., { "sleep": "moderate", "anxiety": "traditional" }
    evidenceByDomain: z.record(z.enum([
      'strong',      // Multiple consistent RCTs
      'moderate',    // Some human trials, mostly positive
      'preliminary', // Animal/in-vitro or small human studies
      'traditional', // Traditional use, convergent sources
      'weak',        // Conflicting or negative evidence
    ])).optional(),

    // Traditional use notes
    traditionalUse: z.object({
      traditions: z.array(z.string()).optional(), // e.g., ["Ayurveda", "TCM", "Western herbalism"]
      convergent: z.boolean().optional(), // Do multiple traditions agree?
      notes: z.string().optional(),
    }).optional(),

    // Preparation info
    preparations: z.array(z.object({
      method: z.enum(['tincture', 'tea', 'decoction', 'capsule', 'powder', 'extract', 'fresh', 'dried', 'topical', 'other']),
      notes: z.string().optional(),
      dosing: z.string().optional(),
    })).optional(),

    // Safety
    safety: z.object({
      generally: z.enum(['safe', 'caution', 'professional-guidance']).optional(),
      contraindications: z.array(z.string()).optional(),
      interactions: z.array(z.string()).optional(),
      notes: z.string().optional(),
    }).optional(),

    // Sources
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url().optional(),
      type: z.enum(['study', 'review', 'book', 'traditional', 'other']).optional(),
    })).optional(),

    // Status
    draft: z.boolean().default(true),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = { domains, herbs };
