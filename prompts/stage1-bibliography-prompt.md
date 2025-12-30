# Stage 1: Bibliography Creation Prompt

Create comprehensive bibliography for [HERB/CONDITION] to support evidence-based content creation.

<objective>
## Your Task
Build a prioritized list of sources that will be used for research summaries in Stage 2.
Focus on: clinical evidence, regulatory monographs, traditional texts, and quality meta-analyses.
Output a structured YAML file that subsequent agents can parse.
</objective>

<search_requirements>
## MANDATORY Source Categories

### 1. Clinical Evidence (Check ALL)
- [ ] PubMed/PubMed Central - search "[herb] AND (randomized OR RCT OR clinical trial)"
- [ ] Cochrane Reviews - search for systematic reviews
- [ ] Meta-analyses - specifically search "meta-analysis [herb]"

### 2. Regulatory/Professional (Check ALL)
- [ ] German Commission E Monographs
- [ ] WHO Monographs on Selected Medicinal Plants
- [ ] EMA/HMPC assessments
- [ ] Pharmacopoeias (USP, European, Ayurvedic, Chinese)

### 3. Traditional Sources (Find at least 2)
- [ ] Historical herbals (Gerard, Culpeper, Grieve, Felter, King's)
- [ ] Ayurvedic texts (if applicable)
- [ ] TCM sources (if used in Chinese medicine)
- [ ] Eclectic medicine texts

### 4. Safety/Interaction (Check ALL)
- [ ] Natural Medicines Database (if accessible)
- [ ] Examine.com summary
- [ ] Memorial Sloan Kettering About Herbs
</search_requirements>

<quality_scoring>
## Evidence Quality Scoring (1-5)

**5 - Highest Quality:**
- Cochrane systematic reviews
- Meta-analyses with >500 participants
- Multiple converging RCTs with consistent results

**4 - Strong Evidence:**
- Individual RCTs with n>50
- Systematic reviews (non-Cochrane)
- Official pharmacopoeia monographs

**3 - Moderate Evidence:**
- Small RCTs (n<50)
- Observational studies with controls
- Professional monographs (Commission E, WHO)

**2 - Preliminary Evidence:**
- Case series
- In vitro studies
- Traditional use documentation

**1 - Weak/Context Only:**
- Expert opinion
- Anecdotal reports
- Blog posts or popular articles (only if no better source)
</quality_scoring>

<output_format>
## OUTPUT: Create bibliographies/[herb].yaml

```yaml
# Bibliography for [HERB]
# Generated: [DATE]
# Total sources: [N]

metadata:
  herb: "marshmallow"
  latin_name: "Althaea officinalis"
  search_terms_used:
    - "marshmallow AND clinical trial"
    - "Althaea officinalis AND RCT"
    - "marshmallow AND cough"

clinical_studies:
  - id: "PMID31234567"
    citation: "Smith J, et al. Efficacy of Althaea officinalis in dry cough: RCT"
    journal: "J Herb Med. 2019;15:100234"
    study_type: "RCT"
    n: 62
    doi: "10.1016/j.hermed.2019.100234"
    url: "https://pubmed.ncbi.nlm.nih.gov/31234567/"
    key_finding: "55% reduction in cough frequency within 10 minutes"
    quality_score: 4

  - id: "PMID28765432"
    citation: "Johnson K, et al. Marshmallow root extract for pharyngeal irritation"
    journal: "Phytomedicine. 2018;39:11-18"
    study_type: "RCT crossover"
    n: 45
    doi: "10.1016/j.phymed.2017.12.009"
    url: "https://pubmed.ncbi.nlm.nih.gov/28765432/"
    key_finding: "Significant improvement in VAS throat irritation scores"
    quality_score: 4

meta_analyses:
  - id: "MA2021-throat"
    citation: "Williams R, et al. Demulcent herbs for throat conditions: systematic review"
    journal: "Complement Ther Med. 2021;58:102678"
    studies_included: 5
    total_n: 313
    url: "https://pubmed.ncbi.nlm.nih.gov/33456789/"
    key_finding: "Marshmallow comparable to dextromethorphan for cough"
    quality_score: 5

regulatory_monographs:
  - id: "CommE1989"
    source: "German Commission E"
    year: 1989
    title: "Marshmallow root (Althaeae radix)"
    url: "https://www.heilpflanzen-welt.de/commission-e/marshmallow/"
    approved_uses:
      - "Irritation of oral and pharyngeal mucosa"
      - "Associated dry cough"
    contraindications: "None known"
    quality_score: 3

  - id: "WHO2002"
    source: "WHO Monographs Volume 2"
    year: 2002
    title: "Radix Althaeae"
    pages: "5-11"
    uses:
      - "Cough and bronchitis"
      - "Pharyngeal irritation"
    quality_score: 3

traditional_sources:
  - id: "Gerard1597"
    citation: "Gerard J. The Herball or Generall Historie of Plantes"
    year: 1597
    relevant_text: "The decoction of Mallowes is good against the chin-cough in children"
    url: "https://archive.org/details/herballorgeneral00gera"
    quality_score: 2

  - id: "Grieve1931"
    citation: "Grieve M. A Modern Herbal"
    year: 1931
    volume: 2
    pages: "519-521"
    url: "https://botanical.com/botanical/mgmh/m/marshr07.html"
    relevant_text: "Valuable as demulcent, root preferred over leaves"
    quality_score: 2

safety_sources:
  - id: "NatMed2023"
    source: "Natural Medicines Database"
    year: 2023
    safety_rating: "Likely Safe"
    interactions:
      - "May decrease absorption of oral medications"
    pregnancy: "Insufficient reliable information"
    url: "https://naturalmedicines.therapeuticresearch.com/"
    quality_score: 4

priority_ranking:
  essential:
    - "PMID31234567"  # Best RCT
    - "MA2021-throat"  # Meta-analysis
    - "CommE1989"      # Regulatory approval

  important:
    - "PMID28765432"  # Supporting RCT
    - "WHO2002"       # WHO monograph
    - "Gerard1597"    # Historical use

  supporting:
    - "Grieve1931"    # Traditional context
    - "NatMed2023"    # Safety data

statistics:
  total_sources: 8
  clinical_trials: 2
  meta_analyses: 1
  traditional_sources: 2
  average_quality_score: 3.4
  total_participants_in_trials: 420
```
</output_format>

<search_strategy>
## Search Strategy Examples

### For PubMed:
1. Start broad: "[herb name] AND clinical trial"
2. Get specific: "[herb] AND [condition] AND randomized"
3. Find reviews: "[herb] AND (systematic review OR meta-analysis)"
4. Check Latin name: "[latin name] AND RCT"

### For Traditional Sources:
1. Search archive.org for historical herbals
2. Check Google Books for digitized texts
3. Look for primary sources, not modern interpretations

### Quality Checks:
- Prefer studies with PMID numbers (verifiable)
- Include DOI when available (permanent identifier)
- Note sample size for all studies
- Record publication year (prefer recent for clinical, any age for traditional)
</search_strategy>

<verification_checklist>
## Before Submitting, Verify:

**Coverage:**
✓ At least 3 clinical studies (if they exist)
✓ At least 1 regulatory source
✓ At least 2 traditional sources
✓ Safety/interaction data included
✗ CHECK: Any major database not searched? Go back and search.

**Quality:**
✓ Quality scores assigned to all sources
✓ Sample sizes noted for all studies
✓ URLs provided for verification
✗ CHECK: Any source without URL or identifier? Find it or remove.

**Completeness:**
✓ Key findings summarized in one line
✓ Priority ranking provided
✓ Statistics calculated
✗ CHECK: Will Stage 2 agents have everything they need? If no, add missing data.
</verification_checklist>

## Critical Instructions

1. **Real sources only** - Every source must be verifiable
2. **No hallucinated studies** - If you can't find the PMID/DOI, don't include it
3. **Traditional sources need dates** - "Traditional use" must cite specific text and year
4. **Include negative findings** - If studies show no effect, include them
5. **Prioritize by quality** - Meta-analyses > RCTs > observational > case reports