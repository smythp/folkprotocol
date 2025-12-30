# Folkprotocol Tone Guidelines: Quick Reference

**Target:** Accessible Wikipedia-level content (8th-grade reading)
**NOT:** PubMed abstracts OR wellness blogs
**Model:** Wikipedia medical articles

## Core Rule

**Keep all citations, numbers, and scientific accuracy.**
**Simplify the LANGUAGE, not the FACTS.**

---

## Quick Transformations

### Statistics → Plain Language

| Academic | Accessible |
|----------|-----------|
| RCTs (n=899) | clinical trials with 899 participants |
| MD -1.05, 95% CI -1.48 to -0.62 | reduced by about one episode per day |
| SMD -0.36 | small but consistent benefit |
| I²=0% | very consistent results across studies |
| Preclinical studies | animal studies |

### Medical Terms → Common Language

| Academic | Accessible |
|----------|-----------|
| Mucous membranes | throat lining, throat and airways |
| Laryngopharyngeal | throat |
| Tracheobronchial | lung, airway |
| Contraindicated in | not recommended for people with |
| Hypokalemia | low potassium |
| Cardiac arrhythmia | irregular heart rhythm |
| Mineralocorticoid-like effects | affects hormones that control blood pressure |

---

## The Test

**"Would you say this to an educated friend over dinner?"**

- ✅ YES → Good accessible tone
- ❌ NO → Needs simplification

---

## Always Keep

1. All citation numbers [n]
2. All specific numbers (899 participants, 30-78%, 1.5g)
3. All dosages and study sizes
4. Safety warnings (just make accessible)
5. Scientific accuracy

---

## Red Flags to Fix

🚩 "RCT (n=899)" → change to "clinical trial with 899 participants"
🚩 "MD -1.05, 95% CI..." without translation → add plain language
🚩 Undefined medical jargon → define inline
🚩 Latin anatomy without common name → use throat/lung/airways
🚩 Unexplained acronyms → spell out first use

---

## Example Transformation

### Before (Too Academic)
"A Cochrane review of 6 RCTs (n=899) found honey reduced cough frequency more than no treatment (MD -1.05, 95% CI -1.48 to -0.62)"

### After (Accessible)
"A Cochrane review of 6 clinical trials with 899 participants found honey reduced cough frequency by about one episode per day compared to no treatment [1]"

**What changed:** Plain language statistics, spelled out "clinical trials", removed CI notation
**What stayed:** Numbers (6, 899), citation [1], scientific finding

---

## Where to Learn More

- **Full guidelines:** `tone-guidelines-accessible-wikipedia.md`
- **Worked examples:** `tone-transformation-test.md`
- **Integration:** See `stage3-synthesis-improved.md` (tone section) and `stage4-qc-edit-prompt.md` (readability check)

---

## For Stage 3 (Synthesis) Agents

Read the `<tone_guidelines>` section in `stage3-synthesis-improved.md` before writing.

**Remember:** Your draft should be accessible from the start, not require heavy editing in Stage 4.

## For Stage 4 (QC) Agents

Use the readability checklist in `stage4-qc-edit-prompt.md` Step 2.5.

**Key checks:**
- Statistical language translated?
- Medical terminology simplified?
- Inline definitions for technical terms?
- Passes "educated dinner guest" test?

---

**Bottom line (ironic use allowed in meta-documentation):** Make it readable without dumbing it down.
