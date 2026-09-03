---
slug: hangover-v1
pass: 133-audit-triage
inputDigest: fad6e8ed912112d469c1404f294d839f853ab1b13cf85cd0ebac61614791a309
---

# Audit triage

## Completion and currency

All required completion markers are present:

- `00-commission.md`: `COMMISSION COMPLETE`
- `70-practice-strains.md`: `STRAIN FIELD COMPLETE — 10 broad strains, 4 unclustered directions`
- `80-practice-assessment.md`: `ASSESSMENT COMPLETE — 6 protocol directions`
- `90-protocol-dossiers.md`: `DOSSIERS COMPLETE — 6 directions, 14 direct sources`
- `100-factual-draft.md`: `FACTUAL DRAFT COMPLETE — 60 references`
- `110-tone-brief.md`: `TONE BRIEF COMPLETE`
- `120-tone-draft.md`: `TONE DRAFT COMPLETE — 67 references`
- `130-citation-audit.md`: `CITATION AUDIT COMPLETE`
- `131-content-audit.md`: `CONTENT AUDIT COMPLETE`
- `132-tone-audit.md`: `FINAL TONE AUDIT COMPLETE`

Each audit is current against its exact documented inputs:

- `130-citation-audit.md`: recorded and recomputed digest `58257a8afac7be55543740bdc1db8964c3b2a8f7810b223b191a7c4b2573ed14`
- `131-content-audit.md`: recorded and recomputed digest `c9b539cf7895b32bbe275d99e618181dc9aa3c7311a0768d09dea8e5830b8f87`
- `132-tone-audit.md`: recorded and recomputed digest `ab9b6943c350bd20029c99cda29e9fbb8af7ce248a9f52810a61539664f7ee73`

## Citation-audit findings

`130-citation-audit.md` reports `CLEAN` and contains no findings to classify.

## Content-audit findings

`131-content-audit.md` reports `CLEAN` and contains no findings to classify.

## Tone-audit findings

### Remaining source-method narration

**accept** — “The symptom scales used to measure hangovers do not even group the syndrome identically.”

This describes measurement machinery in the opening definition. It can be dropped or replaced by a direct statement that hangovers do not have one fixed symptom set without changing any later practice, effect size, population, or qualification. The phrase remains in `120-tone-draft.md`, so the finding is unresolved.

**accept** — “The cited UK guidance gives no water volume or clock interval.”

“Cited” is report voice. A repair such as “UK guidance recommends water between drinks but sets no amount or timing” preserves the exact [P2] boundary and the scoped negative. The phrase remains in `120-tone-draft.md`, so the finding is unresolved.

**reject** — “One trial tested a specific protein-and-fiber bar.”

Dossier 1 in `90-protocol-dossiers.md` says the controlled absorption result comes from one open-label crossover of one proprietary 70 g formulation and does not validate meals generally. Naming the single trial is a necessary evidence boundary, not dispensable report voice.

**reject** — “Bourbon produced worse hangover symptoms than vodka at the same alcohol dose in one trial.”

Dossier 2 limits this claim to one randomized bourbon–vodka comparison and explicitly rejects a general dark-versus-clear hierarchy. Removing “in one trial” would turn that bounded comparison into a general beverage claim.

**reject** — “Thirty-six of 43 bourbon participants correctly identified their beverage, leaving expectation as a possible contributor.”

Dossier 2 records the 36-of-43 result as the blinding limit on the congener interpretation. Dropping the count would remove a useful effect size; replacing it with “people could taste the difference” would weaken the factual qualification.

**accept** — “This was a freeze-dried tomato-and-alanine powder made for the trial.”

The next sentences give the exact preparation, and the paragraph later preserves its non-reproducibility and tested population. The introductory source-method clause can therefore be removed or made into a direct description without losing those limits. The phrase remains in `120-tone-draft.md`, so the finding is unresolved.

**reject** — “Indexed snippets describe five sips of generic ‘pickle juice’ after waking and after two large cups of water, or half a cup followed by water. They do not identify the liquid as the naturally fermented Polish brine above, so those quantities cannot be assigned to it. Because the thread itself was inaccessible, these are partial examples rather than a standard dose.”

Dossier 4 requires all of these boundaries: two exact first-person amounts, water sequence, generic-brine mismatch, search-index-only access, and lack of a standard dose. “A few sips or up to half a cup alongside water” would remove exact community amounts and the source-access boundary and would imply transfer to the selected fermented brine.

**reject** — “In one 353-comment AskReddit thread, people described running, cycling, hard cardio, or simply staying in motion.”

`70-practice-strains.md`, `80-practice-assessment.md`, and dossier 6 all say this direction rests on one 353-comment capture with no corroborating map. “People report” would erase the narrow community and single-source boundary.

**reject** — “In a naturalistic observational study, 299 people walked the 15.8 km Samaria Gorge.”

Dossier 6 requires the naturalistic observational design because everyone walked and the study cannot establish a treatment effect. Removing that design language risks turning an association into causation; the population and distance also must remain exact.

**reject** — “One commenter called it a cheat code; another said DHM had no human safety or efficacy data.”

`80-practice-assessment.md` distinguishes an isolated tech-community notice from a separate forum rebuttal. “Some” and “others” would unsupportedly pluralize two single records and obscure that the latter reports the status of human evidence rather than supplying a population-level view.

**reject** — “The human trial instead tested 2,460 mg of a hot-water *Hovenia dulcis* fruit extract.”

Dossier 5 makes this human-trial contrast central: the relevant crossover tested a quercetin-standardized whole-fruit extract in 26 young men with heterozygous ALDH2, not isolated DHM. The source kind and “instead” preserve the preparation mismatch and population limit.

**reject** — “A 2026 systematic review found only two small human trials, both using fruit extracts.”

Dossier 5 attributes this bounded search result to the 2026 review [P8]. “Only two small human trials exist” would turn one review’s finding into an unqualified universal claim and remove its date and search boundary.

**reject** — “The available human trials used fruit extracts rather than pure DHM.”

Dossier 5 uses this scoped sentence to prevent transfer from two fruit-extract trials to isolated DHM. “Both trials used” makes no substantive tone improvement, while “human trials” is necessary evidence-kind language under the triage instructions.

**reject** — “Korean *haejang-guk* has a history in food and manners records.”

`70-practice-strains.md` says [20:TR2] documents the history through a language-teaching text, poetry, and genre painting rather than a formal medical canon. The record kind is a material historical boundary; “appears in historical food and manners records” merely restates it.

**reject** — “Versions of the same-substance remedy appear in a Bronze Age Ugaritic dog-hair salve, the later European phrase, an independent Ayurvedic passage, and modern alcohol redosing.”

`70-practice-strains.md` and `80-practice-assessment.md` require separate Ugaritic/European and independent Ayurvedic attestations. Calling this one “long history” would imply a single lineage and blur that independence.

**reject** — “one bartender found a prairie oyster extremely unpleasant.”

`80-practice-assessment.md` requires retention of the unpleasant prairie-oyster result from one skeptical first-person account [60:PF2]. “A prairie oyster is extremely unpleasant” would universalize that report; “one person described” is substantively the same attribution.

**reject** — “One drinker's observations include much better mornings after drinking earlier; a substantial whole-milk meal that strongly changed the felt alcohol trajectory”

`00-commission.md` identifies these as commissioner-supplied personal observations offered as leads, not established findings. The singular attribution is necessary to keep them non-authoritative; “one person noticed” makes no substantive repair.

**reject** — “One IV user reported a $220 negative result”

`70-practice-strains.md` and `80-practice-assessment.md` identify this as one poster’s concrete outcome [10:RF10]. “One IV treatment cost $220 and didn’t work” would recast a first-person report as an unqualified fact about a treatment.

**reject** — “A Shroomery discussion proposed roughly 0.1–0.25 g psilocybin after drinking”

`70-practice-strains.md` and `80-practice-assessment.md` require this to remain a single-thread speculative direction with its exact community amount, LSD variants, and in-thread rejection. Naming the discussion preserves those boundaries; the proposed replacement is substantively identical.

**reject** — “The accessible tertiary source yielded no *Donguibogam* hangover passage, though the search depth remains uncertain.”

`70-practice-strains.md` records a specific search of one tertiary source that found no passage, while `80-practice-assessment.md` calls the passage “unlocated.” “No hangover passage was found” would turn a bounded failed search into evidence of absence and discard the uncertain search depth.

### Scale scores not translated

**accept** — “Severity dropped modestly during the walk—from 4.6/10 beforehand to 3.4 during it—and remained 3.5 afterward.”

The scale values can be translated without losing their effect: severity fell by about a quarter and remained near that level afterward, while participants finished more exhausted. The audit’s alternative that symptoms “came back after” is factually wrong, but a faithful plain-language repair is available. The quoted phrase remains in `120-tone-draft.md`, so the finding is unresolved.

### Assistant tics and meta-commentary

**accept** — “Delivery formats make a different pitch.”

The sentence only announces the comparison. The following patch and IV sentences already state their distinct claims and limitations, so deleting the phrase loses no delivery, evidence, or access boundary. It remains in `120-tone-draft.md`, so the finding is unresolved.

**accept** — “Compounded products combine stories as well as ingredients.”

The phrase is an editorial label. The paragraph can directly group the distinct DHM/NAC, multi-ingredient, patent-ownership, and affiliate-linked claims while retaining every ingredient and commercial qualification. It remains in `120-tone-draft.md`, so the finding is unresolved.

**reject** — “That is no invitation to turn ordinary use into spreadsheets or controlled drinking challenges.”

`00-commission.md` expressly excludes quantified-self regimens, fixed drinking challenges, spreadsheets, and symptom scoring. The preceding sentence says only that self-tracking has not produced a reliable routine; dropping this sentence would remove the commission’s explicit ordinary-use boundary.

### Observations to preserve

**already repaired** — “Dehydration is one aggravating path, not a complete account.”

The audit identifies this as a clean direct claim, and it remains unchanged.

**already repaired** — “No specific water amount or timing—just drink water between drinks. A result large enough to matter would be a noticeably gentler rise in intoxication during the occasion, less urgent thirst, and possibly an easier next morning.”

The audit identifies this as concrete outcome language to preserve, and it remains unchanged.

**already repaired** — “The substitution changed reported symptoms, not measured function.”

The audit identifies this as a clean distinction, and it remains unchanged.

**already repaired** — “The meaningful comparison is comfort, especially headache or global severity; it must not be interpreted as restored attention, coordination, or readiness for consequential tasks.”

The audit identifies this as direct consequential guidance, and it remains unchanged.

**already repaired** — “The smallest faithful ordinary-use test is easy, familiar movement in a cool, low-consequence place, with immediate freedom to stop. A result large enough to matter is a clear improvement in alertness or bodily heaviness during or shortly after movement that persists after stopping. Unsteadiness, faintness, weakness, unusual exhaustion, worsening symptoms, or only momentary distraction counts against the practice”

The audit identifies this as the concrete protocol and failure-signal language to preserve, and it remains unchanged apart from the draft’s following semicolon and citation.

**already repaired** — “Chinese, Ayurvedic, and Persian traditions diagnose different patterns and prescribe accordingly.”

The audit identifies this as a clean direct statement, and it remains unchanged.

**already repaired** — “Re-dosing may change the felt moment by adding alcohol exposure, which is different from resolving the next-day state.”

The audit identifies this as a clean critical observation, and it remains unchanged.

The tone audit’s four summary directions are aggregates of the individually classified findings above and add no separate finding.

AUDIT TRIAGE COMPLETE — REPAIR REQUIRED — 6 findings
