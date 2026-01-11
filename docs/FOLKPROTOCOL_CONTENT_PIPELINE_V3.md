# Folk Protocol Content Pipeline v3
*Updated 2025-12-30 with citation linking and tone calibration improvements*

## Purpose
Create high-quality, citation-rich herbalism content that balances traditional knowledge with modern evidence. This pipeline produces Wikipedia-accessible content (not PubMed academic, not WebMD dumbed-down) with working citation links.

## Recent Improvements
- **Citation Linking:** Automatic remark plugin makes `[1]` clickable → jumps to `#ref-1`
- **Tone Calibration:** Comprehensive guidelines for accessible scientific writing
- **Anti-Pattern First:** Prompts start with what NOT to do (prevents drift)
- **Two-Pass Synthesis:** Citation inventory before writing preserves references

## The 4-Stage Pipeline

### Stage 1: Bibliography Creation
**Goal:** Build comprehensive source list with quality scoring

**Prompt:** `/home/patrick/projects/folkprotocol/prompts/stage1-bibliography-prompt.md`

**Launch:**
```python
spin("Create rhodiola bibliography from primary sources",
     permission="shard", model="sonnet",
     working_dir="/home/patrick/projects/folkprotocol")
```

**Output:** `bibliographies/rhodiola.yaml`

**Quality Checks:**
- At least 3 clinical studies
- At least 1 regulatory source
- Quality scores assigned (1-5)
- Mixed evidence levels

### Stage 2: Research Summary Creation
**Goal:** Extract ALL numbers and data from sources

**Prompt:** `/home/patrick/projects/folkprotocol/prompts/stage2-research-summary-prompt.md`

**Launch:**
```python
spin("Transform rhodiola bibliography into detailed research summaries",
     permission="shard", model="sonnet")
```

**Output:** `research/studies/[study_id].md`

**Critical Requirements:**
- EVERY number preserved exactly
- Sample sizes (n=X)
- Effect sizes with CI/p-values
- Dosages in mg/day
- Duration in weeks/months

### Stage 3: Synthesis with Citations
**Goal:** Create accessible content WITH citation preservation

**Prompt:** `/home/patrick/projects/folkprotocol/prompts/stage3-synthesis-improved.md`

**Key Features:**
- Anti-patterns at TOP of prompt
- Citation inventory BEFORE writing
- Two-pass workflow (outline → prose)
- Tone transformation rules embedded

**Launch:**
```python
spin("Synthesize rhodiola research into protocol page using improved prompt",
     permission="shard", model="sonnet")
```

**Tone Transformations Applied:**
| Academic | Accessible |
|----------|------------|
| RCTs (n=899) | clinical trials with 899 participants |
| MD -1.05, 95% CI -1.48 to -0.62 | reduced by about one episode per day |
| mineralocorticoid-like effects | affects hormones that control blood pressure |
| laryngopharyngeal | throat |
| contraindicated in | not recommended for people with |
| infusion | tea |

### Stage 4: Quality Control Edit
**Goal:** Final gatekeeper for citations, tone, accuracy

**Prompt:** `/home/patrick/projects/folkprotocol/prompts/stage4-qc-edit-prompt.md`

**New in v3:**
- Step 2.5: Readability & Accessibility Check
- Statistical language checklist
- Medical terminology checklist
- "Educated dinner guest" test

**Launch:**
```python
spin("QC edit rhodiola page: verify tone accessibility and citations",
     permission="shard", model="sonnet")
```

## Citation Linking System

**Automatic Processing:**
- Plugin: `plugins/remark-citations.mjs`
- Transforms `[1]` → `<a href="#ref-1">[1]</a>`
- Adds anchors: `<span id="ref-1">[1]</span>` to references
- Handles multiple: `[1,2,3]` → each individually clickable
- Zero configuration needed

**Format in Markdown:**
```markdown
Honey reduced cough frequency [1]. Studies show benefits [2,3].

## References
[1] Author et al. Title. Journal. 2024.
[2] Another study...
```

## Tone Guidelines

**The "Educated Dinner Guest" Test:**
Write as if explaining to an intelligent friend over dinner - interested but not a specialist.

**Quick Reference Transformations:**
```
❌ "utilized" → ✅ "used"
❌ "demonstrates efficacy" → ✅ "works" or "is effective"
❌ "exhibits" → ✅ "shows"
❌ "5mg b.i.d." → ✅ "5mg twice daily"
❌ "p.o. administration" → ✅ "taken by mouth"
```

**Full Guidelines:** `prompts/tone-guidelines-accessible-wikipedia.md`

## Mill Chain Integration

**Chain File:** `/home/patrick/projects/speakbot/mill/chains/folkprotocol-content-pipeline.yaml`

**Execute Single Herb:**
```bash
mill crank folkprotocol-content-pipeline --topic rhodiola --content-type materia
```

**Batch Processing:**
```bash
mill crank folkprotocol-content-pipeline --batch herbs.txt --parallel 3
```

## Quality Metrics

**Citation Success:**
- Target: >80% of claims cited
- Check: Count [n] references vs. claims

**Tone Success:**
- Zero instances of banned phrases
- 8th grade reading level
- Passes "educated dinner guest" test

**Data Preservation:**
- 100% of Stage 2 numbers in final
- All dosages preserved
- Effect sizes maintained

## Common Issues & Solutions

### Issue: Citations Lost
**Solution:** Citation inventory step BEFORE writing (now in Stage 3 prompt)

### Issue: Too Academic
**Solution:** Apply tone transformations from TONE-README.md

### Issue: Blog Voice Creeps In
**Solution:** Anti-patterns at TOP of prompt (now standard)

### Issue: Medical Advice Appears
**Solution:** Explicit ban list in Stage 4 QC

## Batch Processing Strategy

**For 5 herbs (rhodiola, elderberry, passionflower, ginger, echinacea):**

```python
herbs = ["rhodiola", "elderberry", "passionflower", "ginger", "echinacea"]

# Stage 1: Parallel bibliographies
bib_ids = []
for herb in herbs:
    id = spin(f"Create {herb} bibliography", permission="shard", model="sonnet")
    bib_ids.append(id)

# Wait for all
spin_wait(",".join(bib_ids))

# Stage 2-4: Can run each herb through remaining stages
for herb in herbs:
    spin(f"Complete {herb} content pipeline stages 2-4", permission="shard")
```

## Testing Protocol

**Before Merge:**
1. Verify citations are clickable
2. Check tone passes "dinner guest" test
3. Confirm all numbers preserved
4. Test cross-references work
5. Build site locally to verify

**Commands:**
```bash
# Test build
npm run build

# Check citations
grep -c '\[1\]' src/content/protocols/tickly-cough.md

# Verify links
grep -o '\[\[[^]]*\]\]' src/content/protocols/*.md | sort | uniq
```

## Key Learnings Embedded

1. **Fewer agents = better fidelity** (4 stages not 10)
2. **Examples beat instructions** (show don't tell)
3. **Anti-patterns first** (leverages recency bias)
4. **Citation inventory** (preserve before prose)
5. **Tone transformation** (academic → accessible systematically)
6. **Chain-of-thought** improves accuracy 15-30%
7. **Negative checks** catch 40% more errors
8. **Instructions at beginning AND end** improve compliance ~20%

## Files & Resources

**Prompts:**
- `prompts/stage1-bibliography-prompt.md`
- `prompts/stage2-research-summary-prompt.md`
- `prompts/stage3-synthesis-improved.md`
- `prompts/stage4-qc-edit-prompt.md`

**Tone Resources:**
- `prompts/tone-guidelines-accessible-wikipedia.md`
- `prompts/TONE-README.md`
- `prompts/tone-transformation-test.md`

**Citation System:**
- `plugins/remark-citations.mjs`
- `docs/citations.md`

**Mill Chain:**
- `/home/patrick/projects/speakbot/mill/chains/folkprotocol-content-pipeline.yaml`

---

This is the production-ready pipeline with all improvements integrated. The tickly-cough.md protocol serves as the reference implementation showing citations, tone, and structure working together.