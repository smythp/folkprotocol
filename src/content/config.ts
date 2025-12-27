import { defineCollection, z } from 'astro:content';

/**
 * Protocols - organized by health concern/goal
 */
const protocols = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    symptoms: z.array(z.string()).optional(),
    researchDepth: z.enum(['well-studied', 'moderate', 'sparse', 'traditional-only']),
    related: z.array(z.string()).optional(),
    draft: z.boolean().default(true),
  }),
});

/**
 * Materia - herb/remedy monographs
 */
const materia = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    latinName: z.string().optional(),
    commonNames: z.array(z.string()).optional(),
    summary: z.string().max(300),

    // What protocols does this address?
    uses: z.array(z.string()),

    // Traditional background
    traditional: z.object({
      traditions: z.array(z.string()).optional(),
      convergent: z.boolean().optional(),
      attributions: z.array(z.object({
        source: z.string(),
        text: z.string(),
        link: z.string().url().optional(),
        year: z.string().optional(),
      })).optional(),
    }).optional(),

    // Evidence summary
    evidence: z.object({
      summary: z.string().optional(),
      trialCount: z.number().optional(),
      participantCount: z.number().optional(),
      keyStudies: z.array(z.object({
        title: z.string(),
        link: z.string().url().optional(),
        finding: z.string(),
        year: z.number().optional(),
      })).optional(),
    }).optional(),

    // Preparations with sensory notes
    preparations: z.array(z.object({
      method: z.enum(['tincture', 'tea', 'decoction', 'capsule', 'powder', 'extract', 'fresh', 'topical', 'other']),
      dosing: z.string().optional(),
      notes: z.string().optional(),
      taste: z.string().optional(),
    })).optional(),

    // Trying it - the n=1 guidance
    trying: z.object({
      duration: z.string().optional(),
      whatToNotice: z.array(z.string()).optional(),
      notes: z.string().optional(),
    }).optional(),

    // Safety
    safety: z.object({
      generally: z.enum(['safe', 'caution', 'professional-guidance']).optional(),
      contraindications: z.array(z.string()).optional(),
      pregnancyNursing: z.string().optional(),
      notes: z.string().optional(),
    }).optional(),

    // Combinations
    combinedWith: z.array(z.object({
      herb: z.string(),
      why: z.string().optional(),
    })).optional(),

    // Sources - typed and linked
    sources: z.array(z.object({
      title: z.string(),
      link: z.string().url().optional(),
      type: z.enum(['study', 'meta-analysis', 'book', 'traditional-text', 'practitioner', 'other']).optional(),
      year: z.number().optional(),
    })).optional(),

    draft: z.boolean().default(true),
  }),
});

export const collections = { protocols, materia };
