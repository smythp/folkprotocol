# Stage 3: Synthesis Agent Prompt Template

Write [HERB] materia page by synthesizing research from Stages 1-2.

## CRITICAL: Citation Requirements

Every factual claim needs a numbered citation [1].

### Citation Examples

❌ **BAD - No citation:**
"Ashwagandha reduces stress"

❌ **BAD - Vague:**
"Studies show ashwagandha helps with anxiety"

❌ **BAD - No context:**
"Cortisol was reduced by 27.9% (p<0.001)"

✅ **GOOD - Specific with context:**
"A 60-day trial with 64 stressed adults found ashwagandha (600mg/day) reduced cortisol by 27.9% [1]"

✅ **GOOD - Multiple studies:**
"Three RCTs (n=208 total) reported sleep improvements in 70-72% of participants taking ashwagandha [2,3,4]"

✅ **GOOD - Traditional use:**
"The Ayurvedic Pharmacopoeia of India classifies ashwagandha as a rasayana (rejuvenator) and prescribes 3-6g daily [5]"

✅ **GOOD - Meta-analysis:**
"A 2022 meta-analysis of 12 studies (n=1,002) found ashwagandha comparable to benzodiazepines for anxiety reduction [6]"

## STRUCTURE: Follow Exactly

```markdown
---
name: "Common Name"
latinName: "Species name"
commonNames:
  - alternate name 1
  - alternate name 2
summary: "One sentence overview. Max 200 chars. Include primary use and key caution if any."

uses:
  - [[protocols/primary-use]]
  - [[protocols/secondary-use]]

traditional:
  traditions:
    - Ayurveda
    - Western herbalism
  convergent: true
  attributions:
    - source: "Ayurvedic Pharmacopoeia of India"
      text: "Used as rasayana for stress, classified as balya (strengthening)"
    - source: "German Commission E"
      text: "Approved for nervous exhaustion and stress-related insomnia"

evidence:
  summary: "Two sentences max. State strongest evidence and acknowledge limitations."
  keyStudies:
    - title: "60-day RCT on stress and cortisol"
      finding: "600mg/day reduced cortisol by 27.9% in 64 adults"
      year: 2012
    - title: "Meta-analysis of anxiety studies"
      finding: "12 RCTs (n=1,002) showed effect size comparable to benzodiazepines"
      year: 2022

preparations:
  - method: capsule
    dosing: "KSM-66: 300-600mg/day"
    notes: "Standardized to 5% withanolides. Most studied extract."
    taste: "Minimal taste in capsule form"
  - method: powder
    dosing: "3-6g (1-2 tsp) daily"
    notes: "Traditional preparation. Mix with warm milk."
    taste: "Bitter, earthy, described as 'dirt-like'"

trying:
  duration: "8 weeks minimum for full effects"
  whatToNotice:
    - Sleep quality changes (week 1-2)
    - Stress response to daily irritants (week 4)
    - Energy levels throughout day
  notes: "Start with 300mg, increase gradually. Effects build over time."

safety:
  generally: safe  # or caution or professional-guidance
  contraindications:
    - "Pregnancy (may stimulate uterus) [7]"
    - "Hyperthyroidism (can increase T3/T4) [8]"
  notes: "Well-tolerated. Rare GI upset at high doses."

combinedWith:
  - herb: "[[materia/rhodiola]]"
    why: "Complementary adaptogens for fatigue"
  - herb: "[[materia/holy-basil]]"
    why: "Enhanced stress resilience"

sources:
  - title: "Chandrasekhar et al. Stress and cortisol RCT"
    link: "https://pubmed.ncbi.nlm.nih.gov/23439798/"
    type: study
    year: 2012
  # ... continue for all citations

draft: false
---

## Overview

[2-3 sentences without citations - general introduction to the herb, its role, what makes it interesting]

## What the Evidence Says

[Synthesize research with specific numbers and citations. Group by indication.]

### Stress and Cortisol
Multiple studies demonstrate measurable stress reduction. The strongest evidence comes from a 60-day trial where 64 adults with chronic stress took 600mg/day of high-concentration root extract, showing a 27.9% reduction in serum cortisol compared to 7.9% in placebo [1].

### Sleep
Three RCTs totaling 208 participants found 70-72% reported improved sleep quality with ashwagandha versus 25-30% with placebo [2,3,4]. Effects typically appear within the first week and strengthen over 6-8 weeks of use.

## Traditional Context

[Explain traditional use WITH SPECIFIC ATTRIBUTIONS]

Ashwagandha has been used in Ayurveda for over 3,000 years, where it's classified as a rasayana (rejuvenator) and prescribed at 3-6g daily for vata imbalance [5]. The name itself means "smell of horse," referring both to its odor and traditional belief that it imparts the strength of a stallion [9].

## How to Try It

[Practical guidance based on evidence and traditional use]

Based on the research, KSM-66 extract at 300-600mg daily appears optimal for stress and sleep. Start with 300mg and increase after 2 weeks if needed. Traditional preparations use 3-6g powder in warm milk, taken 1-2 hours before bed.

Track your response over 8 weeks - this isn't a quick fix but a gradual adaptation.

## References

[1] Chandrasekhar K, et al. A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root. Indian J Psychol Med. 2012;34(3):255-62. [[research/studies/23439798]]

[2] Langade D, et al. Efficacy and safety of ashwagandha root extract in insomnia and anxiety. Cureus. 2019;11(9):e5797. [[research/studies/31728244]]

[Continue for all numbered citations...]
```

## TONE Requirements

✅ **DO:**
- Be specific with numbers and context
- Acknowledge when evidence is mixed
- Include traditional knowledge with attribution
- Cross-link liberally with [[wiki-style]]

❌ **DON'T:**
- Use blog-speak ("Can't sleep? Try this!")
- Give medical advice ("See your doctor if...")
- Be condescending ("Herbs aren't magic")
- Make unsupported claims ("Used for centuries" needs source)
- Hide preparations in body text (use preparations field)

## Final Checklist

Before submitting, verify:
- [ ] Every efficacy claim has [n] citation
- [ ] Sample sizes included where relevant
- [ ] Dosing information specific (mg, not "some")
- [ ] Traditional claims have sources
- [ ] All cross-references use [[wiki-style]]
- [ ] No medical advice sections
- [ ] Preparations extracted to frontmatter
- [ ] References section complete