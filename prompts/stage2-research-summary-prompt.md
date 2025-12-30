# Stage 2: Research Summary Creation Prompt

Transform bibliography entries into detailed research summaries with ALL numerical data preserved.

<critical_task>
## YOUR CRITICAL TASK
Extract EVERY number, percentage, dosage, and timeline from studies.
These summaries are the ONLY source for Stage 3 synthesis.
If you don't extract it here, it will be lost forever.
</critical_task>

<data_to_extract>
## MANDATORY Data Points to Extract

For EVERY study, extract:

**Numbers:**
- [ ] Sample size (n=X)
- [ ] Duration (days, weeks, months)
- [ ] Dosage (exact mg, g, ml)
- [ ] Percentage improvements
- [ ] P-values (if emphasized in paper)
- [ ] Confidence intervals
- [ ] Effect sizes
- [ ] Timeline to effect (when benefits appear)

**Details:**
- [ ] Population description (age, condition)
- [ ] Preparation type (extract name, standardization)
- [ ] Control/placebo used
- [ ] Dropout rate
- [ ] Adverse events
- [ ] Funding source
</data_to_extract>

<output_format>
## OUTPUT: Create research/studies/[PMID].md

```markdown
---
pmid: "31234567"
title: "Efficacy of Althaea officinalis in dry cough: randomized controlled trial"
authors: "Smith J, Jones K, Williams R"
year: 2019
journal: "Journal of Herbal Medicine"
volume: 15
pages: "100234"
doi: "10.1016/j.hermed.2019.100234"
study_type: "RCT"
quality_score: 4
---

## Study Design

**Type:** Double-blind, randomized, placebo-controlled trial
**Duration:** 7 days
**Setting:** Outpatient clinic in Manchester, UK
**Registration:** ClinicalTrials.gov NCT03456789

## Population

**Total enrolled:** n=62
**Completed:** n=58 (93.5% completion rate)
**Treatment group:** n=31 (20 female, 11 male, mean age 42.3 ± 12.1 years)
**Placebo group:** n=31 (19 female, 12 male, mean age 43.7 ± 11.8 years)

**Inclusion criteria:**
- Dry cough >2 weeks duration
- Age 18-65
- VAS cough severity >40mm

**Exclusion:**
- Productive cough
- ACE inhibitor use
- Current respiratory infection

## Intervention

**Treatment:** Marshmallow root extract (Althaea officinalis)
- **Preparation:** Aqueous extract standardized to 5% mucilage polysaccharides
- **Manufacturer:** Phytopharm GmbH, Germany
- **Dose:** 500mg three times daily (1500mg total daily dose)
- **Delivery:** Capsules taken with water 30 minutes before meals

**Control:** Placebo (maltodextrin in identical capsules)

**Duration:** 7 days treatment

## Outcomes

### Primary Outcome
**Cough frequency (coughs per hour):**
- Baseline: Treatment 18.2 ± 4.3, Placebo 17.9 ± 4.1
- Day 3: Treatment 10.3 ± 3.8, Placebo 15.2 ± 3.9
- Day 7: Treatment 8.1 ± 3.2, Placebo 13.4 ± 3.7
- **Reduction:** 55.5% treatment vs 25.1% placebo (p<0.001)

### Secondary Outcomes

**VAS throat irritation (0-100mm):**
- Baseline: Treatment 68.3 ± 12.1, Placebo 67.9 ± 11.8
- Day 7: Treatment 23.4 ± 8.7, Placebo 48.2 ± 10.3
- **Change:** -44.9mm treatment vs -19.7mm placebo (p<0.001)

**Time to first relief:**
- Treatment: 10 minutes (8-15 min range)
- Placebo: No acute relief reported

**Duration of effect:**
- Treatment: 4.2 ± 0.8 hours per dose
- Placebo: Not applicable

**Leicester Cough Questionnaire scores:**
- Physical domain: +2.3 points treatment vs +0.8 placebo (p=0.003)
- Psychological: +2.1 points treatment vs +0.7 placebo (p=0.007)
- Social: +1.9 points treatment vs +0.6 placebo (p=0.011)

## Safety

**Adverse events:**
- Treatment group: 3/31 (9.7%)
  - Mild nausea: 2
  - Loose stools: 1
- Placebo group: 2/31 (6.5%)
  - Headache: 1
  - Nausea: 1

**Serious adverse events:** None

**Dropouts:**
- Treatment: 2 (lost to follow-up)
- Placebo: 2 (1 withdrew consent, 1 started antibiotics)

## Additional Findings

**Subgroup analysis:**
- Post-viral cough (n=34): 61% improvement treatment vs 22% placebo
- GERD-related (n=18): 48% improvement treatment vs 28% placebo
- Idiopathic (n=10): 52% improvement treatment vs 25% placebo

**Mechanism notes:**
- Authors hypothesize mucilage coating effect
- Anti-inflammatory activity suggested by cytokine data (IL-6 reduced 32%)

## Limitations

1. Small sample size
2. Short duration (7 days)
3. Single center
4. No active comparator (e.g., dextromethorphan)
5. Industry funding (manufacturer provided extract)

## Practice Relevance

- **Effective dose:** 1500mg/day of standardized extract
- **Onset:** Relief within 10 minutes
- **Duration:** Effects last ~4 hours, requires TID dosing
- **Best for:** Post-viral cough shows strongest response
- **Safety:** Well-tolerated, minimal side effects
- **Clinical significance:** 55% reduction exceeds minimal clinically important difference (30%)

## Key Numbers for Synthesis

PRESERVE THESE EXACT NUMBERS:
- Sample: n=62 (58 completed)
- Dose: 500mg TID (1500mg/day)
- Cough reduction: 55.5% vs 25.1% placebo
- Onset: 10 minutes
- Duration: 4.2 hours per dose
- VAS improvement: -44.9mm vs -19.7mm
- Completion rate: 93.5%
- Adverse events: 9.7% mild only
```
</output_format>

<traditional_source_format>
## For Traditional/Historical Sources

```markdown
---
source_id: "Gerard1597"
title: "The Herball or Generall Historie of Plantes"
author: "John Gerard"
year: 1597
source_type: "historical_herbal"
quality_score: 2
---

## Historical Context

**Period:** Elizabethan England
**Author credentials:** Surgeon, herbalist to James I
**Significance:** One of most influential English herbals

## Marshmallow References

### Page 933 - "Of the Marsh Mallow"

**Names given:**
- English: "Marsh Mallow"
- Latin: "Althaea Ibiscus"
- Other: "Moorish Mallow, White Mallow"

**Description:**
"The leaves be soft, white, and cottonlike, and the flowers of a light incarnate or flesh colour."

### Medicinal Uses Described

**For cough (Page 934):**
"The decoction of Mallowes is good against the chin-cough in children, if they drink it often in small quantity."

**Preparation methods:**
- Decoction: "Boile the roots in wine or water"
- Syrup: "The juice boiled with sugar"
- Plaster: "Stamped with hogs grease"

**Dosing mentioned:**
- Decoction: "Drink often in small quantity"
- Syrup: "A spoonful at a time"

### Other conditions mentioned:
- "Stone and gravel" (kidney stones)
- "Bloody flux" (dysentery)
- "Wounds and apostumes" (abscesses)
- "Swellings of the throat"

## Key Quotes for Attribution

"The decoction of Mallowes is good against the chin-cough in children" - Gerard 1597, p.934

"The roots boiled in wine and water helpeth the bloody flix" - Gerard 1597, p.934

## Relevance to Modern Use

- Confirms 400+ year use for cough in children
- Decoction (water extraction) aligns with modern understanding of mucilage extraction
- Multiple preparation methods show sophisticated understanding
```
</traditional_source_format>

<meta_analysis_format>
## For Meta-Analyses/Systematic Reviews

```markdown
---
review_id: "MA2021throat"
title: "Demulcent herbs for throat conditions: systematic review and meta-analysis"
authors: "Williams R, Brown S, Taylor M"
year: 2021
journal: "Complementary Therapies in Medicine"
doi: "10.1016/j.ctim.2021.102678"
study_type: "systematic_review_meta_analysis"
quality_score: 5
---

## Review Methodology

**Databases searched:** PubMed, EMBASE, CENTRAL, AMED
**Search period:** Inception to December 2020
**Languages:** English, German, French
**PROSPERO registration:** CRD42020156789

## Inclusion Criteria

- RCTs of demulcent herbs for throat conditions
- Adults or children
- Placebo or active control
- Cough frequency or throat irritation as outcome

## Studies Included

**Total studies:** 12
**Studies with marshmallow:** 5
**Total participants:** 523 (313 in marshmallow studies)

### Marshmallow Studies in Review:

1. Smith 2019: n=62, marshmallow vs placebo
2. Johnson 2018: n=45, marshmallow vs placebo
3. Mueller 2017: n=78, marshmallow vs dextromethorphan
4. Patel 2016: n=56, marshmallow+thyme vs placebo
5. Weber 2014: n=82, marshmallow vs placebo

## Meta-Analysis Results

### Cough Frequency (5 studies, n=313)
**Effect size:** SMD -0.82 (95% CI: -1.03 to -0.61)
**Heterogeneity:** I² = 31% (low)
**P-value:** <0.00001
**NNT:** 3.2 (need to treat 3 people for 1 to benefit)

### Throat Irritation VAS (4 studies, n=241)
**Mean difference:** -18.3mm (95% CI: -23.1 to -13.5)
**Heterogeneity:** I² = 28%
**P-value:** <0.00001

### Comparison with Dextromethorphan (2 studies, n=147)
**Difference:** -2.1 points cough score (95% CI: -4.8 to +0.6)
**Interpretation:** Non-inferior to dextromethorphan

## Subgroup Analyses

**By preparation:**
- Aqueous extracts: SMD -0.91
- Dry extracts: SMD -0.74
- Syrups: SMD -0.79

**By duration:**
- <7 days treatment: SMD -0.76
- ≥7 days treatment: SMD -0.89

## Safety Analysis

**Total adverse events:**
- Marshmallow: 18/156 (11.5%)
- Control: 22/157 (14.0%)
- Risk ratio: 0.82 (95% CI: 0.46-1.47)

**Types of adverse events:**
- GI upset: 8 marshmallow, 7 control
- Headache: 4 marshmallow, 6 control
- Allergic reaction: 0 marshmallow, 1 control

## Quality Assessment (GRADE)

**Quality of evidence:** Moderate
**Downgraded for:** Small sample sizes
**Upgraded for:** Consistent effects across studies

## Authors' Conclusions

"Marshmallow root preparations demonstrate clinically meaningful reductions in cough frequency and throat irritation, with effects comparable to dextromethorphan and superior to placebo. The evidence supports traditional use."

## Key Numbers for Synthesis

PRESERVE THESE:
- 5 marshmallow RCTs
- n=313 total participants
- SMD -0.82 for cough frequency
- -18.3mm VAS improvement
- NNT = 3.2
- 11.5% mild adverse events
- Comparable to dextromethorphan
```
</meta_analysis_format>

<extraction_checklist>
## Extraction Verification Checklist

Before submitting EACH summary, verify:

**Numbers captured:**
✓ Sample size with breakdown
✓ Exact dosages with units
✓ All percentages
✓ Timeline data (onset, duration)
✓ Statistical measures (p-values, CI)
✗ CHECK: Read original abstract - any numbers missing? Add them.

**Clinical details:**
✓ Population description
✓ Inclusion/exclusion criteria
✓ Preparation specifics (extract type, standardization)
✓ Manufacturer if mentioned
✗ CHECK: Would a clinician have enough detail to replicate? If no, add detail.

**Context preserved:**
✓ Study limitations listed
✓ Funding source noted
✓ Dropouts and reasons
✓ Adverse events detailed
✗ CHECK: Any red flags missing? Add them.

**For traditional sources:**
✓ Exact quotes with page numbers
✓ Historical context
✓ Preparation methods as described
✗ CHECK: Can Stage 3 cite this properly? If no, add specifics.
</extraction_checklist>

## Critical Reminders

1. **EVERY NUMBER MATTERS** - If it's in the source, extract it
2. **PRESERVE EXACT VALUES** - Don't round, don't approximate
3. **CONTEXT IS CRUCIAL** - 55% reduction in what? Over what time period?
4. **TRADITIONAL SOURCES NEED QUOTES** - Exact words, with page numbers
5. **THIS IS THE ONLY CHANCE** - Stage 3 can't go back to sources