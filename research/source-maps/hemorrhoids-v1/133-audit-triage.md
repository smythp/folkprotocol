---
slug: hemorrhoids-v1
stage: audit-triage
inputDigest: 94e3a1bc44bb3ccf28bb64a7b12bf1801e1f8eea3b380baeda18a35fe31b4251
---

# Audit triage

## Preconditions

All required inputs carry their completion markers:

- `00-commission.md`: `COMMISSION COMPLETE`
- `70-practice-strains.md`: `STRAIN FIELD COMPLETE — 10 broad strains, 3 unclustered directions`
- `80-practice-assessment.md`: `ASSESSMENT COMPLETE — 6 pursuit directions`
- `90-protocol-dossiers.md`: `DOSSIERS COMPLETE — 6 directions, 27 direct sources`
- `100-factual-draft.md`: `FACTUAL DRAFT COMPLETE — 43 references`
- `110-tone-brief.md`: `TONE BRIEF COMPLETE`
- `120-tone-draft.md`: `TONE DRAFT COMPLETE — 43 references`
- `130-citation-audit.md`: `CITATION AUDIT COMPLETE`
- `131-content-audit.md`: `CONTENT AUDIT COMPLETE`
- `132-tone-audit.md`: `FINAL TONE AUDIT COMPLETE`

The documented audit digests are current. Recomputing the exact documented command for each audit produced:

- 130: `7e61e694ba88de3206b404c4b1a2d831c070168edeae520b73ae879a41c4f48c`
- 131: `98e8f869ca146082a59b80a9c3ececdb318f0fbac0dbeee11bb501bba9549a43`
- 132: `10107790288435d03d7dfb46d8de064d2b91459f816e590b52083ced39349684`

## 130 citation audit

1. **accept** — “Several paths can coexist: straining raises pressure during defecation, blood volume expands by roughly 30%, progesterone relaxes venous smooth muscle, and the growing uterus raises pressure within the abdomen.” The sentence presents the clinical review's proposed explanation as established physiology. Restore attribution such as “A clinical review proposes”; `90-protocol-dossiers.md` §1 and `100-factual-draft.md` preserve that boundary.

2. **accept** — “Oral phlebotonics act systemically on venous tone, capillary permeability, or lymphatic drainage.” `[P27]` describes proposed class actions and says the precise mechanism is not established. “Propose a systemic effect” preserves the source's status.

3. **accept** — “A positional change is large enough to matter if pressure or pain reliably eases while standing, moving, or lying on the side.” The paragraph cites only `[P1]`, which supports standing or moving; side-lying requires `[P4]` or its separately identified source. Restore the adjacent side-lying citation.

4. **accept** — “the study found a thermosphincteric reflex that relaxed the sphincter temporarily.” The measured pressure and electrical changes were findings, but the reflex was the authors' proposed explanation. Restore “the authors proposed” or equivalent language.

5. **accept** — “The recipe claims cooling, numbing, and less swelling, but the optional ingredients prevent attributing the result to witch hazel alone.” This omits the useful boundary that `[P12]` gives no hemorrhoid-specific contact time or follow-up. Restore that qualification without removing the claimed effects or the exact recipe.

6. **accept** — “Stinging” in “Stinging, irritation, excessive cold, or contact with internal tissue are reasons to stop that format.” `[P11]` and `[P12]` do not support stinging, and the upstream `[10:RF7]` citation is a horse-chestnut thread rather than a witch-hazel report. Remove “Stinging” unless a valid exact source is supplied.

7a. **accept** — “450 mg diosmin and 50 mg hesperidin per tablet.” `[P21]`, as reconstructed in `90-protocol-dossiers.md` and `100-factual-draft.md`, says “450 mg diosmin and 50 mg flavonoids expressed as hesperidin per tablet.” Restore that exact composition.

7b. **accept** — “It advises against use during pregnancy.” The dossier records that the product information “prefers avoiding it during pregnancy” because human data are absent or limited. Restore that narrower wording rather than strengthening it.

## 131 content audit

1. **accept** — “Several paths can coexist: straining raises pressure during defecation...” repeats 130 finding 1. The mechanism still needs attribution to the clinical review.

2. **accept** — “Oral phlebotonics act systemically...” repeats 130 finding 2. The class actions remain proposed, not established.

3. **accept** — “the study found a thermosphincteric reflex” repeats 130 finding 4. The reflex remains an author-proposed explanation.

4. **accept** — “450 mg diosmin and 50 mg hesperidin per tablet” repeats 130 finding 7a. The exact product specification remains misstated.

These four accepted entries require no additional repairs beyond their four citation-audit counterparts.

## 132 tone audit

1. **reject** — “though it does not show which path caused any one person's symptoms.” Cutting this would remove a material causal qualification. `90-protocol-dossiers.md` §1 says the review authors' account makes a non-constipation route plausible but does not show that route in an individual, and `100-factual-draft.md` preserves the same `[P3]` constraint. “Several paths can coexist” does not by itself state that evidentiary limit.

2. **accept** — “The following schedules are product-specific and do not transfer to other strengths, combinations, or routes.” Replace “The following” with “These”; the meaning and all formulation boundaries remain intact.

3. **already repaired** — “The actives target different symptoms: anesthetics for pain, vasoconstrictors for swelling, steroids for itch. The choice follows the symptom.” This lead already names the different jobs immediately before the five bullets, which is one of the audit's proposed repairs. The detailed bullets must remain because their exact strengths, routes, schedules, and reproductive-status limits differ materially.

4. **accept** — “without an established causal link.” Use the audit's precise alternative, “and the study did not establish a causal link,” rather than “without a clear causal link.” This removes the tone tic while preserving the `[P23]` factual limit.

5. **accept** — “The time windows for ordinary use are day-four relief with MPFF (uncontrolled pregnancy report), two to four weeks with rutosides (controlled trial), and two weeks with oral-plus-topical Euphorbia.” Rewrite as the audit proposes—“MPFF showed day-four relief in an uncontrolled pregnancy report, rutosides showed change over two to four weeks in a controlled trial, and Euphorbia with cream showed change after two weeks.”—while retaining the next sentence's pregnancy and breastfeeding limits. Do not cut the sentence: the commission specifically asks about effects noticeable over days.

## Repair count

Eleven distinct accepted findings remain unresolved in `120-tone-draft.md`: eight from the citation audit and three additional tone findings. The four accepted content-audit findings duplicate citation findings and are not counted twice. The rejected tone finding and the already-repaired list-structure finding are not counted.

AUDIT TRIAGE COMPLETE — REPAIR REQUIRED — 11 findings
