# Tone Critique: butterbur.md vs ashwagandha.md

## 1. OVERALL ASSESSMENT

**Verdict: Closer to clinical than conversational. Better than ginger, not yet ashwagandha.**

The draft is well-organized and evidence-accurate. It avoids the worst ginger anti-patterns (no "Patients were more than twice as likely..."). But it still reads primarily as an evidence brief written FOR the reader rather than WITH the reader. The information quality is high; the voice quality is inconsistent. Three structural deficits:

1. **Missing emotional payoff** — The Bottom Line section tells you the clinical outcome but doesn't tell you what it FEELS like when it works
2. **Third-person "candidates" framing** in Who This Is/Isn't For — No "What they report:" personal experience section like ashwagandha has
3. **p-values in narrative prose** — Should be translated or cut from the conversational text (they're fine in YAML keyStudies)

Sections that work well: Traditional Use (good storytelling), Quality Matters (good action-oriented checklists), How To Try It (mostly direct).

---

## 2. SPECIFIC PASSAGES TO FIX

---

**PASSAGE 1**
- **SECTION**: What The Evidence Says — Strong evidence block
- **LINE**: ~152-153
- **CURRENT TEXT**: "75mg twice daily reduced attacks by 48% vs 26% for placebo in 245 patients over 4 months (Lipton 2004, p=0.0012). 68% of patients achieved ≥50% reduction vs 49% placebo. A 60-patient trial found a 45% responder rate vs 15% for placebo even at the lower 50mg/day dose (Diener 2004)."
- **PROBLEM**: Raw p-value notation (`p=0.0012`) and third-person clinical register ("patients achieved"). Good stat translation (48% vs 26%) but then drops into study-listing mode.
- **SUGGESTED DIRECTION**: Drop the p-value. "48% attack reduction vs 26% placebo — a difference that held across two independent trials." Then: "68% of people become what trials call 'strong responders' — their attack rate roughly halves." This makes the reader the subject.

---

**PASSAGE 2**
- **SECTION**: What The Evidence Says — Strong evidence block
- **LINE**: ~153
- **CURRENT TEXT**: "Ze339 leaf extract matched fexofenadine 180mg with no significant difference between them (p=0.37, Schapowal 2005, 330 patients)"
- **PROBLEM**: `p=0.37` in prose. Meaningless to a reader.
- **SUGGESTED DIRECTION**: "Ze339 matched prescription fexofenadine — the two were statistically indistinguishable in a 330-person trial." Drop the p-value entirely.

---

**PASSAGE 3**
- **SECTION**: How To Try It — Migraine section
- **LINE**: ~182
- **CURRENT TEXT**: "The 100mg/day arm did not beat placebo (p=0.127). Use 150mg/day or don't bother."
- **PROBLEM**: `p=0.127` in narrative.
- **SUGGESTED DIRECTION**: "The 100mg/day arm didn't beat placebo. Use 150mg/day or don't bother." Same point, no raw notation needed.

---

**PASSAGE 4**
- **SECTION**: Who This Is/Isn't For
- **LINE**: ~226-239 (entire section)
- **CURRENT TEXT**: Framed as "Strong candidates:" and "Contraindicated or poor candidates:" with bullet lists. No "What they report:" personal voice element.
- **PROBLEM**: Ashwagandha's equivalent section has:
  - "Strong Responders (likely to benefit):" → then "What they report: 'Stress doesn't hit me the same way,' deeper sleep..."
  - "Non-Responders (minimal to no effect):" → then "What they report: 'Didn't do a thing.'"
  Butterbur lists WHO benefits but never says what benefit FEELS like from their perspective.
- **SUGGESTED DIRECTION**: After the strong candidates bullet list, add a "What they report:" subsection: "Attack frequency cuts roughly in half. The change isn't dramatic day-to-day — it's a quieter month: fewer days lost, fewer triptans, fewer cancellations."

---

**PASSAGE 5**
- **SECTION**: The Bottom Line
- **LINE**: ~268-276 (entire section)
- **CURRENT TEXT**: "For migraine: 48% attack reduction vs 26% placebo is a meaningful clinical effect. 68% of patients become strong responders — a figure that compares favorably with conventional prophylactics. If you've had poor tolerability with beta-blockers or anticonvulsants, a 4-month course of verified Petadolex is a reasonable option to assess."
- **PROBLEM**: Entirely clinical framing. "Reasonable option to assess" sounds like a physician recommendation. No emotional description of what success or failure looks like. Compare ashwagandha's Bottom Line: "Life-changing stress resilience, deep sleep, sustained energy, mental clarity, recovery support." Also missing ashwagandha's "When it works / When it doesn't / When it causes problems" structure.
- **SUGGESTED DIRECTION**: Add "When it works:" language — something like: "When it works: fewer migraines is not a subtle outcome. You notice it in your calendar. Fewer days ruined, fewer drugs taken, fewer plans cancelled." Then "When it doesn't: a flat signal at 8 weeks typically stays flat — valuable information. Try conventional prophylaxis or a different mechanism."

---

**PASSAGE 6**
- **SECTION**: What The Evidence Says — Mechanism paragraph
- **LINE**: ~161
- **CURRENT TEXT**: "Petasins block CGRP (calcitonin gene-related peptide) signaling - the same pathway targeted by modern migraine drugs. They also modulate TRP ion channels involved in pain and reduce inflammatory mediators including histamine and leukotrienes (Borlak 2022)."
- **PROBLEM**: Technical mechanism dump. Reads like a pharmacology abstract. Ashwagandha doesn't have a paragraph like this. The CGRP point is valuable; TRP ion channel modulation is jargon that adds little.
- **SUGGESTED DIRECTION**: Keep the CGRP line — it's genuinely useful context ("same pathway as the newest prescription migraine drugs"). Cut or simplify the TRP channels line. One sharp mechanistic point lands better than a list.

---

**PASSAGE 7**
- **SECTION**: What To Track
- **LINE**: ~214
- **CURRENT TEXT**: "The response benchmark from trials: a strong responder has roughly halved their attack rate by month 4. 68% of trial participants reached this threshold."
- **PROBLEM**: "Trial participants" — third-person register when reader-directed voice is needed.
- **SUGGESTED DIRECTION**: "If you're going to be a strong responder — and 68% of people in trials were — your attack rate roughly halves by month 4."

---

**PASSAGE 8**
- **SECTION**: The Bottom Line — closing line
- **LINE**: ~276
- **CURRENT TEXT**: "For those willing to do the work: well-studied, mechanistically understood, with a clinical evidence base that earned the highest designation in its field."
- **PROBLEM**: "For those willing" is third-person. The closing line is a clinical credential list, not an emotional conclusion.
- **SUGGESTED DIRECTION**: Make it personal. "Do the verification work, track honestly, use the right extract. This is one of the best-studied herbs in the pharmacopeia — and for frequent migraineurs, it's often the one that finally works."

---

## 3. STAT NOTATION AUDIT

Instances of clinical notation appearing in NARRATIVE PROSE (not YAML data, where they're acceptable):

| Location | Notation | Issue |
|----------|----------|-------|
| Line ~152 | `p=0.0012` | Remove; context makes significance clear |
| Line ~152 | `p=0.127` | Remove; "didn't beat placebo" is sufficient |
| Line ~153 | `p=0.37` | Remove; "statistically indistinguishable" conveys it |
| Line ~156 | "3-arm RCT" | Acceptable jargon — borderline, consider "three-way comparison" |
| Line ~245 | "RUCAM causality assessment rated only 3 cases 'likely' related" | Deep pharmacovigilance jargon; translate to plain-language conclusion |

**Notes:**
- Stats in the YAML `keyStudies` block are fine — that's structured data for reference, not narrative text
- "SMD," "RR," "MD" with confidence intervals do NOT appear in narrative prose — this is good
- Percentage comparisons (48% vs 26%, 68% vs 49%) are used consistently and well — this is the right approach

---

## 4. VOICE AUDIT

### "You/your" occurrences in narrative prose:
Counted from prose sections (not YAML, not bullet headers):

| Section | "You/your" instances |
|---------|----------------------|
| What The Evidence Says | 0 |
| Traditional Use | 0 |
| How To Try It | ~6 (implied imperative "Use X", "Take with food", plus "you're likely a non-responder") |
| What To Track | 2 ("If you're going to respond", "you're using") |
| Who This Is/Isn't For | 2 ("if you can't verify", "you can't get") |
| Quality Matters | 3 ("If a company's customer service can't tell you...") |
| The Bottom Line | 3 ("If you've had poor tolerability", "if you're not prepared") |

**Total: ~16 instances across 7 sections.** Compare to ashwagandha where nearly every sentence in the prose sections addresses "you" directly. Butterbur's What The Evidence Says section has zero direct address.

### "Participants/patients/users" in narrative prose:
- "245 patients over 4 months" (line ~152)
- "330 patients" (line ~153)
- "108 children ages 6-17" (line ~156)
- "80 participants" (line ~157)
- "68% of trial participants" (line ~214)
- "Strong candidates:" (section header, line ~226)
- "People willing to verify" (line ~232)

Most "patients" usage is appropriate — citing trial sample sizes is legitimate. The issue is the **absence** of "you" in those same paragraphs, not the presence of clinical language per se. The draft never bridges from "here's what happened in the trial" to "here's what that means for you."

### Reader questions:
- **Questions addressed to the reader**: 0
- **Ashwagandha count**: ~3 ("The only way to know is careful, systematic n=1 experimentation..." implies a question; "You may be a strong responder, non-responder, or adverse responder — which are you?")

Butterbur's prose makes declarative statements throughout. Adding 1-2 questions ("Are you a frequent migraineur who's already tried propranolol and found it intolerable? That's the exact profile where this herb has the strongest evidence.") would significantly shift the feel.

---

## 5. SECTIONS NEEDING NARRATIVE

**Priority order for rewriting:**

### HIGH PRIORITY

**"What The Evidence Says"** — Lists bullet points for Strong evidence, Moderate evidence. Reads like an evidence table transcribed to prose. Missing: what these outcomes mean for someone experiencing them. The Lipton 2004 result (48% attack reduction) needs translation: what does a 48% reduction mean in someone's actual life? Halved migraines is not an abstraction — it's the difference between missing 2 days of work a month vs missing 1.

**"The Bottom Line"** — Currently a credentialing paragraph ("earned the highest designation in its field") rather than an emotional synthesis. Needs the "When it works / When it doesn't / When it causes problems" structure from ashwagandha. The "practical constraint" paragraph is good but the payoff sentence before it ("well-studied, mechanistically understood...") is a credential list, not a conclusion.

### MEDIUM PRIORITY

**"Who This Is/Isn't For"** — Well-structured but missing the personal voice. "What they report:" subsection after Strong candidates would transform this from a decision matrix into a story about who this herb is actually for.

**"What The Evidence Says" — Mechanism paragraph** — The CGRP mechanism is genuinely useful and briefly stated. The TRP channel/mediator line is technical filler. Cut or simplify.

### LOW PRIORITY (minor adjustments)

**"How To Try It"** — Generally good, mostly imperative ("Use Petadolex"), but the dose-rationale paragraph could shift from "The 100mg/day arm did not beat placebo (p=0.127)" to plain language. The table for Ze339 is excellent — clear, scannable, actionable.

**"What To Track"** — Structurally solid. Small voice adjustments (see Passage 7) rather than narrative restructuring.
