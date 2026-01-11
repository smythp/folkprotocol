# Stage 3: Synthesis Agent Prompt - IMPROVED

Write [HERB] materia page by synthesizing research from Stages 1-2.

<anti_patterns>
## ⛔ FORBIDDEN PATTERNS - DO NOT USE

**Blog voice:**
❌ "Can't make fresh infusions while traveling? Try these..."
❌ "Bottom line: Marshmallow will help most coughs"
❌ "Herbs work, but they're not magic"
❌ ANY question directed at reader
❌ ANY imperative commands (Try this!, Remember that!)

**Medical advice:**
❌ "When to seek professional help"
❌ "See a doctor if fever >101°F"
❌ ANY diagnostic criteria
❌ ANY emergency guidance
❌ ANY "if you have X condition" statements

**Condescending language:**
❌ "Be patient—chronic cough is exhausting"
❌ "REALITY CHECK: Sometimes it just takes time"
❌ "DO/DON'T lists for partners or caregivers"
❌ ANY lifestyle coaching

**Vague traditional claims:**
❌ "Used for centuries in traditional medicine"
❌ "Ancient cultures have long known..."
✅ INSTEAD: "Gerard's Herbal (1597) recommends marshmallow for 'chin-cough' [4]"

**Wellness/lifestyle content:**
❌ "Partner tips for supporting someone with..."
❌ "Self-care during chronic cough"
❌ ANY content not directly about herbal preparation/use

## ✅ TARGET TONE

Encyclopedic, specific, citation-dense:
✅ "Marshmallow (Althaea officinalis) reduces cough frequency by 55% in clinical trials [2]"
✅ "Traditional preparation: 1-2 tsp dried root per cup cold water, steep 4-8 hours [3]"
✅ "Contraindications: May slow absorption of oral medications due to mucilage coating [5]"
</anti_patterns>

<banned_phrases>
## Never Use These Phrases (or variations):
- "Try these alternatives"
- "Bottom line"
- "Here's the deal"
- "Reality check"
- "Can't [do X]? Try [Y]"
- "When to seek help"
- "See a doctor if"
- "Be patient"
- "Tips for partners"
- "DO: [X] DON'T: [Y]"
- "Used for centuries"
- "Has been used traditionally" (without source)
- "What to have on hand"
- Any rhetorical question
</banned_phrases>

<workflow>
## MANDATORY TWO-PASS SYNTHESIS WORKFLOW

### Pass 1: Citation Inventory (DO THIS FIRST - CRITICAL)

Before writing ANYTHING, create this citation map from Stage 2 summaries:

1. List EVERY factual claim from Stage 2 research
2. Note its citation number [n]
3. Plan where it goes in your synthesis

Example citation inventory:
```
From Stage 2 Research:
- "Marshmallow reduces cough frequency by 55%" → [2] → Will use in Evidence section
- "Contains 5-10% mucilage polysaccharides" → [7] → Will use in Overview
- "Gerard 1597 recommends for chin-cough" → [9] → Will use in Traditional Context
- "Cold infusion preserves mucilage better than hot" → [3] → Will use in Preparations
- "Study n=62 adults with dry cough" → [2] → Will use in Evidence section
```

CHECK: Did you map EVERY claim from Stage 2? If no, add missing items.

### Pass 2: Create Outline with Citations

Write your outline WITH citation numbers already placed:

```
I. Overview
   - Marshmallow contains mucilage [7]
   - Primary use for throat irritation [1]

II. Evidence
   - 55% reduction in cough frequency, n=62 [2]
   - Onset within 10 minutes [2]
   - Comparable to dextromethorphan [4]

III. Traditional Context
   - Gerard 1597 chin-cough [9]
   - Dioscorides 70 CE [10]

IV. Preparations
   - Cold infusion method [3]
   - Dosing 1-2 tsp [3]
```

CHECK: Does outline include ALL citations from inventory? If no, add sections.

### Pass 3: Write Full Prose

Now expand outline into prose, preserving ALL citation numbers.
</workflow>

<citation_format>
## Citation Format Rules

**Correct formats:**
✅ "Marshmallow reduces cough frequency by 55% [2]"
✅ "A trial of 62 adults found significant improvement [2]"
✅ "Traditional dose is 1-2 tsp per cup [3]"
✅ "Gerard's Herbal (1597) recommends for 'chin-cough' [4]"

**Incorrect formats:**
❌ "Marshmallow reduces cough frequency." (no citation)
❌ "Studies show marshmallow works [2]" (too vague - what specifically?)
❌ "[2] shows marshmallow is effective" (citation at beginning)
❌ "Research suggests..." (which research? be specific)
</citation_format>

## STRUCTURE: Follow Exactly

```yaml
---
name: "Common Name"
latinName: "Species name"
commonNames:
  - alternate name 1
  - alternate name 2
summary: "One sentence. Max 200 chars. State primary use and evidence level."

uses:
  - [[protocols/primary-use]]
  - [[protocols/secondary-use]]

traditional:
  traditions:
    - Ayurveda
    - Western herbalism
  convergent: true
  attributions:
    - source: "Ayurvedic Pharmacopoeia of India (1999)"
      text: "Classified as rasayana, prescribed at 3-6g daily"
    - source: "Gerard's Herbal (1597)"
      text: "Recommended for chin-cough in children"

evidence:
  summary: "State strongest evidence in one sentence. Acknowledge limitations in second."
  keyStudies:
    - title: "RCT dry cough n=62"
      finding: "55% reduction in frequency vs 25% placebo"
      year: 2019
    - title: "Systematic review 5 studies"
      finding: "Consistent improvement in throat irritation scores"
      year: 2021

preparations:
  - method: cold infusion
    dosing: "1-2 tsp root per cup water"
    notes: "Steep 4-8 hours. Cold preserves mucilage."
    taste: "Slightly sweet, slippery texture"
  - method: tincture
    dosing: "2-4ml three times daily"
    notes: "1:5 in 25% alcohol"
    taste: "Sweet, slightly bitter"

trying:
  duration: "Effects within 10 minutes for acute, 2-3 days for improvement"
  whatToNotice:
    - Coating sensation in throat
    - Reduced urge to cough
    - Less throat irritation
  notes: "Cold infusion most effective. Take between meals."

safety:
  generally: safe
  contraindications:
    - "May slow drug absorption (take 1 hour apart) [11]"
    - "Pregnancy: No data, traditional use suggests safe [12]"
  notes: "No known toxicity. Well-tolerated."

combinedWith:
  - herb: "[[materia/licorice]]"
    why: "Enhanced coating and anti-inflammatory"
  - herb: "[[materia/thyme]]"
    why: "Adds antimicrobial action"

sources:
  - title: "Smith et al. RCT marshmallow for dry cough"
    link: "https://pubmed.ncbi.nlm.nih.gov/31234567/"
    type: study
    year: 2019
  # [continue for ALL numbered citations]

draft: false
---
```

## BODY CONTENT STRUCTURE

### Overview (NO CITATIONS NEEDED HERE)
[2-3 sentences introducing the herb generally]

### What the Evidence Says
[Dense with citations, specific numbers]

#### Example GOOD Paragraph:
Marshmallow (Althaea officinalis) root contains 5-10% mucilage polysaccharides that form a protective coating over irritated throat tissues [7]. A randomized controlled trial with 62 adults experiencing dry cough found a 55% reduction in cough frequency within 10 minutes of taking marshmallow root extract, compared to 25% in the placebo group [2]. The effect persisted for 4 hours post-administration [2]. A systematic review of 5 studies (n=313 total) found consistent improvement in throat irritation scores, with marshmallow performing comparably to dextromethorphan [4].

### Traditional Context
[Every claim needs attribution]

Marshmallow appears in Dioscorides' De Materia Medica (70 CE) for throat ailments [10]. Gerard's Herbal (1597) specifically recommends it for "chin-cough" in children, using a syrup preparation [9]. The German Commission E approved marshmallow leaf and root for irritation of oral and pharyngeal mucosa in 1989 [13].

### How to Try It

The traditional cold infusion maximizes mucilage extraction: 1-2 teaspoons dried root in one cup room-temperature water, steeped 4-8 hours [3]. Strain and drink up to 3 cups daily. Effects typically occur within 10 minutes for acute relief [2].

### References

[1] Commission E Monographs. Marshmallow root. 1989. [[research/regulatory/commission-e-marshmallow]]

[2] Smith J, et al. Efficacy of Althaea officinalis in dry cough: randomized controlled trial. J Herb Med. 2019;15:100234. [[research/studies/31234567]]

[Continue for ALL citations...]

<final_verification>
## FINAL VERIFICATION CHECKLIST

**Citations (CRITICAL):**
✓ Every factual claim has [citation number]
✓ Every percentage/number has [citation]
✓ Every herb property has [citation]
✓ Every historical reference has [citation]
✓ Every dosage has [citation]
✗ NEGATIVE CHECK: Read each sentence - any without brackets? Add citation or delete claim.
✗ COMPARE: Check Stage 2 research - any citations missing? Add them.

**Tone:**
✓ Zero questions to reader
✓ Zero commands (Try this, Remember that)
✓ Zero blog phrases from banned list
✗ NEGATIVE CHECK: Read aloud - does it sound like Wikipedia? Good. Like a blog? Rewrite.
✗ SEARCH: Ctrl+F for each banned phrase - found any? Remove.

**Scope:**
✓ Only herbal preparations, evidence, traditional use
✓ No medical advice sections
✓ No lifestyle/partner content
✗ NEGATIVE CHECK: Any non-herbal content? Delete it.

**Data Preservation:**
✓ All numbers from Stage 2 present
✓ All study sizes (n=X) included
✓ All percentages preserved
✗ NEGATIVE CHECK: Compare Stage 2 vs your output - missing any data? Add with citation.

**Structure:**
✓ All preparations in frontmatter (not body)
✓ All cross-references use [[wiki-style]]
✓ References section has full citations
✗ NEGATIVE CHECK: Any preparation details in body text? Move to frontmatter.
</final_verification>

<banned_phrases>
## REMINDER: Never Use These Phrases
- "Try these alternatives"
- "Bottom line"
- "Reality check"
- "Can't [X]? Try [Y]"
- "When to seek help"
- "Tips for partners"
- "Used for centuries"
- Any rhetorical question
</banned_phrases>

## OUTPUT REQUIREMENTS

Your output should be:
1. The complete frontmatter in yaml
2. The body sections with dense citations
3. The references list

Every claim must have a citation. No blog voice. No medical advice. Only herbal information.