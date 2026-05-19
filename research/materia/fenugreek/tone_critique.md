# Fenugreek Tone Critique

**Compared against**: ashwagandha.md (gold standard)
**Draft location**: worktrees/ba95ad26-20260330-001/src/content/materia/fenugreek.md
**Date**: 2026-03-29

---

## 1. OVERALL ASSESSMENT: 6/10

The fenugreek page is structurally competent and the evidence handling is mostly sound, but it's **too chatty, too repetitive, and too eager to editorialize**. The ashwagandha page trusts the reader and the data. The fenugreek page keeps nudging you in the ribs — "this is where it gets interesting," "let's be honest," "worth knowing about." It reads like a blog post trying to be a reference page.

The biggest structural sin: the culinary-vs-extract distinction is made **four separate times** (summary, traditional use, the spectrum table, and the bottom line). The maple syrup smell appears **three times**. The "modest but real" testosterone framing is stated, restated, then restated again. The ashwagandha page says things once, says them well, and moves on.

---

## 2. SPECIFIC PASSAGES TO FIX

### Lines that need killing or rewriting:

**"This is where it gets interesting."** (line 159)
Editorializing. The data is interesting on its own. The ashwagandha page never tells you what to find interesting — it presents the evidence and lets you react. Cut this entirely. Start the paragraph with the Testofen trial results.

**"This doesn't get talked about enough."** (line 163)
Meta-commentary about the discourse around fenugreek. This is a materia page, not a podcast. The data speaks for itself. Cut.

**"let's be honest"** (line 157)
Faux-intimate register that the ashwagandha page never uses. Ashwagandha says "Critical nuance discovered" — direct, clinical. Fenugreek says "let's be honest" — conversational, hedging. Rewrite as a direct statement: "The effect is modest."

**"If you're expecting dramatic hormonal changes, calibrate those expectations."** (line 157)
Preachy. The ashwagandha page handles expectation-setting structurally (in the Who This Is/Isn't For section and the timeline), not by wagging its finger in the evidence section. Remove from evidence section; the Who section already handles this.

**"sounds impressive, but without a control group..."** (line 167)
The instinct is correct — flagging weak study design is good practice. But the execution is too conversational. Compare ashwagandha's evidence notes: terse, parenthetical, factual. Rewrite as: "NOTE: Open-label, single-arm design — no placebo control. Weight accordingly." (The frontmatter `finding` field already does this well. The prose section repeats it in a chattier register.)

**"Sprinkling some methi seeds in your dal is not the same as taking 600mg of Testofen."** (line 212)
This is the third time the page makes this point. The table on line 206-210 already made it perfectly. This sentence treats the reader as if they didn't understand the table they just read. Cut.

**"Both are valid uses of the same plant, but they're operating at different levels."** (line 212)
Same problem. Cut.

**"you're halfway there"** (line 257)
Forced casual. The ashwagandha page's Who section uses clean descriptive statements ("Chronically stressed, elevated cortisol") not encouragement. Rewrite.

**The entire bottom line section** (lines 278-283):
Too long, too explanatory. Ashwagandha's bottom line is a three-part structure — works/doesn't/problems — each one punchy, each one memorable. Fenugreek's bottom line is three paragraphs of careful qualification. It ends with "Know which one you're doing and why," which is the fourth time it makes the culinary-vs-clinical point. Restructure to match ashwagandha's pattern.

### Passages that work well (keep these):

- The frontmatter `summary` is tight and good.
- The evidence `keyStudies` entries in the frontmatter are well-written, especially the Furosap caveat.
- The Culinary-to-Clinical Spectrum table (lines 206-210) is a genuinely good idea — ashwagandha's extract comparison table is one of its best features and this follows that pattern well. Just stop explaining it after the table.
- Safety section is clean and direct. Matches ashwagandha's register well.
- The `combinedWith` entries are concise and useful.

---

## 3. STAT NOTATION AUDIT

Ashwagandha is consistent: effect size + p-value + context. Every major claim has numbers behind it.

Fenugreek is **inconsistent**:

| Claim | What's given | What's missing |
|-------|-------------|----------------|
| Blood sugar meta-analysis | Effect sizes (good) | No p-values in prose section |
| Testosterone meta-analysis | Effect size + p-value (good) | Fine |
| Testofen sexual function | p<0.001 (good) | No effect size for sexual function outcomes |
| Libifem | p<0.05 | No effect sizes for desire/arousal scores |
| Muscle performance | "4 of 6 showed significant improvements" | No effect sizes at all — this is the weakest entry |
| Wankhede body fat | "significant body fat reduction" | No numbers. What was the reduction? |

**Fix**: Every claim labeled "significant" in the prose needs an effect size or it's just hand-waving. "Significant improvements in strength" tells the reader nothing. The ashwagandha page gives you "+46kg vs +26kg placebo" — you know exactly what "significant" means. The fenugreek page owes the reader the same.

**The muscle performance paragraph** (line 164-165) is the worst offender. A systematic review summary that says "4 of 6 showed significant improvements in strength, endurance, lean mass, and reduced body fat" is vague to the point of uselessness. Either give the numbers from the best study or cut the section to a bullet point.

---

## 4. VOICE AUDIT

**Ashwagandha's voice**: Authoritative, direct, occasionally vivid ("tastes like dirt"), never chatty. It uses **bold** for emphasis, not conversational asides. It's a knowledgeable friend who respects your intelligence.

**Fenugreek's voice**: Shifts between three registers:
1. **Clinical authority** (good): "Fasting glucose reduced by 0.96 mmol/L" — matches ashwagandha
2. **Blog-post conversational** (bad): "This is where it gets interesting," "let's be honest," "worth knowing about"
3. **Teacherly over-explanation** (bad): "Sprinkling some methi seeds in your dal is not the same as taking 600mg of Testofen. Both are valid uses of the same plant, but they're operating at different levels."

The page needs to commit to register #1. Every instance of #2 and #3 should be cut or rewritten.

**Specific voice problems**:
- 12 instances of hedging phrases ("actually," "arguably," "genuinely," "really") vs. ashwagandha's ~3
- 5 instances of direct reader address that ashwagandha avoids ("you're halfway there," "you'll know it if you cook Indian food," "let's be honest")
- The word "interesting" appears 3 times. The ashwagandha page uses it zero times. Data pages don't tell you what's interesting — they present evidence and let you decide.

---

## 5. SECTIONS NEEDING NARRATIVE REWORK

### Evidence Section
**Problem**: Reads like a study-by-study tour rather than a synthesized assessment. Ashwagandha opens with "remarkable convergence between ancient traditional knowledge and modern clinical evidence" — that's a thesis statement. Fenugreek opens with "it's a kitchen spice you can buy in any grocery store that also has genuine clinical evidence behind it" — that's a hook, not a thesis.

**Fix**: Lead with the synthesis. What is fenugreek's evidence story? It's: *strong for blood sugar, modest for testosterone, surprisingly strong for sexual function, and the gap between those last two is the interesting finding.* That should be the opening frame, not "it's a kitchen spice."

### Traditional Use Section
**Problem**: The culinary digression ("Methi paratha, methi dal, sprouted fenugreek seeds") is charming but breaks the register. Ashwagandha's traditional section stays in historical/pharmacological register throughout. Fenugreek drifts into food writing.

**Fix**: Keep the culinary context but tighten it to one sentence. The point that culinary dose != extract dose belongs here once and then never again.

### How To Try It
**Problem**: Over-structured relative to ashwagandha. Five goal-based subsections (testosterone, women's libido, blood sugar, digestion, lactation) where ashwagandha has three clean preparation types. It's organized by user intent rather than preparation method, which creates repetition (Testofen 600mg appears three times across the page).

**Fix**: Lead with preparation method (like ashwagandha does), then note which goals map to which preparation. The Culinary-to-Clinical Spectrum table already does this well — build around it.

### Bottom Line
**Problem**: Three paragraphs of careful hedging. The ashwagandha bottom line has a memorable structure (works powerfully / doesn't work / causes problems) that you can recall after reading. Fenugreek's is forgettable — a series of reasonable qualifications.

**Fix**: Adopt ashwagandha's three-part structure:
- **When it works**: Blood sugar stabilization, meaningful sexual function improvement, modest testosterone support, lactation.
- **When it doesn't**: You wanted dramatic hormonal transformation. That's not what this herb does.
- **The key thing to understand**: Kitchen spice dose and clinical extract dose are different interventions. Know which one you're doing.

---

## Summary of Required Changes

1. **Cut all editorial commentary** ("interesting," "let's be honest," "worth knowing about," "doesn't get talked about enough")
2. **Eliminate repetition** — culinary-vs-extract said once (in the spectrum table), maple smell said once (in trying/safety)
3. **Add missing effect sizes** to every "significant" claim in the evidence prose
4. **Lock the voice to one register** — authoritative and direct, matching ashwagandha
5. **Restructure the bottom line** to ashwagandha's works/doesn't/problems pattern
6. **Tighten the evidence opening** — lead with synthesis, not with "it's a kitchen spice"
7. **Reduce How To Try It** — organize by preparation, not by goal; let the table do the goal-mapping work
