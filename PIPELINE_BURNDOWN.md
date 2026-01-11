# Folk Protocol Pipeline v2 - Burndown List

## Decisions Made
- ✅ Wikipedia-style citations: `[1]` inline with full references at end
- ✅ Cross-references: Generate stubs + track needed content list
- ✅ Evidence style: "A study with 75 participants showed cortisol reduced by 29%"
- ✅ Skip p-values (often hacked/fetishized)
- ✅ Multiple sources cited as "Multiple sources" or list them
- ✅ QC through focused prompts, not heuristic tools (for now)
- ✅ Punt on versioning strategy

## Section Structure (Final)

### Materia (from earlier playbook-20251227-584u)
1. Overview (no citations needed)
2. Uses (links to protocols)
3. Traditional Background (with attributions)
4. Evidence (summary + key studies)
5. Preparations (brief, link to full pages)
6. Trying It (n=1 guide)
7. Safety (contraindications)
8. Combined With (synergies)
9. Sources (numbered references)

### Protocols
1. Overview (what condition is)
2. The Herbal Landscape (evidence tiers)
3. Core Protocol (main approach with herb links)
4. Pattern Variations (by subtype)
5. Expected Timeline (with evidence)
6. Tracking Progress (measurable outcomes)
7. References (linked to summaries + originals)

## Immediate Tasks (Priority Order)

### 1. Create Example-Rich Agent Prompts
- [ ] Write Stage 1 prompt with bibliography examples
- [ ] Write Stage 2 prompt with research summary examples
- [ ] Write Stage 3 prompt with citation examples
- [ ] Write Stage 4 QC prompt with tone examples

**Example for Stage 3 (critical):**
```markdown
BAD: "Ashwagandha significantly reduces cortisol"
BAD: "Studies show ashwagandha helps with stress"
GOOD: "A 60-day trial with 64 stressed adults found ashwagandha reduced cortisol by 27.9% [1]"
GOOD: "Three studies (n=208 total) reported sleep quality improvements of 70-72% [2,3,4]"
```

### 2. Build Cross-Reference System
- [ ] Script to generate stub pages for `[[broken-links]]`
- [ ] Track needed-content.md with reference counts
- [ ] Modify SSG config to handle wiki-style links
- [ ] Create visual indicator for stub vs complete pages

### 3. Implement Research Infrastructure
- [ ] Create `content/research/studies/` directory structure
- [ ] Create `content/research/reviews/` for meta-analyses
- [ ] Create `content/bibliographies/` for source lists
- [ ] Template for research summary pages

### 4. Test Pipeline on Single Herb
- [ ] Choose test herb (rhodiola? simple, well-studied)
- [ ] Run Stage 1: Bibliography creation
- [ ] Run Stage 2: Research summaries
- [ ] Run Stage 3: Synthesis with citations
- [ ] Run Stage 4: QC edit pass
- [ ] Evaluate: citation density, tone, cross-links

### 5. Fix Existing Content
- [ ] Strip fluff from tickly-cough.md
- [ ] Add citations to existing claims
- [ ] Extract preparations to separate files
- [ ] Add numbered references section

## Later Phase Tasks

### 6. Build Automation Helpers
- [ ] Citation counter script
- [ ] Broken link checker
- [ ] Stub page generator
- [ ] Reference formatter (study → citation)

### 7. Scale Testing
- [ ] Run 3-herb batch
- [ ] Evaluate parallelization bottlenecks
- [ ] Refine prompts based on output
- [ ] Document optimal batch sizes

### 8. UI/UX Improvements
- [ ] Style stub pages differently
- [ ] Add "last reviewed" dates
- [ ] Create citation hover cards
- [ ] Build "needed content" dashboard

## Success Metrics
- Citation density >80% of claims
- Zero blog-speak phrases
- All herbs have preparations extracted
- No orphan pages (everything linked)
- Research summaries preserve key numbers

## Anti-Patterns to Avoid
❌ "Herbs work but aren't magic"
❌ "Can't make this while traveling?"
❌ "When to see your doctor"
❌ "Partner support tips"
❌ Uncited traditional claims
❌ Vague effect sizes ("significantly reduced")
❌ Missing sample sizes
❌ Buried preparations in main content

## Next Decision Points
1. SSG plugin for wiki-links - build or find?
2. Citation hover cards - worth the complexity?
3. Auto-generate bibliography from DOIs?
4. Include ongoing trials from ClinicalTrials.gov?