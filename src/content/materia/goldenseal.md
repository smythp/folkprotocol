---
name: "Goldenseal"
latinName: "Hydrastis canadensis"
commonNames:
  - eye root
  - yellow root
  - Indian dye
  - ground raspberry
summary: "North American woodland herb with centuries of traditional use for mucosal conditions—but no therapeutic RCTs have ever been run. All human clinical evidence concerns drug metabolism: goldenseal inhibits CYP3A4 by 40–62% and CYP2D6 by ~40–50% in multiple human trials, affecting dozens of common medications. Short-term traditional use by healthy, drug-free adults is the only reasonably supported context."

uses:
  - antimicrobial
  - mucosal
  - digestive
  - wound healing

traditional:
  traditions:
    - Native American (Cherokee, Iroquois, Crow, Delaware, Micmac, Ojibwe)
    - Eclectic medicine
    - American homeopathy
  convergent: true
  attributions:
    - source: "Cherokee (pre-contact through 19th century)"
      text: "Root decoctions for mouth sores, sore throats, inflamed mucous membranes, eye infections, wounds, nausea, and liver complaints. Vivid yellow rhizome used as dye—origin of 'Indian dye' and 'yellow root.' Eye wash use gave rise to the name 'eye root.'"
    - source: "Iroquois, Crow Nation, Delaware, Micmac, Ojibwe"
      text: "Eye washes, bitter digestive tonic, liver support, skin conditions, general infections, fever. Multiple independent nations arrived at overlapping uses documented by 19th-century ethnobotanists."
    - source: "Eclectic medicine (1850–1930)"
      text: "Primary botanical for 'catarrhal states of all mucous surfaces'—respiratory, GI, urinary, ophthalmic. Felter & Lloyd's King's American Dispensatory (1898) described it as specific for atonic mucosal states. Listed in the US Pharmacopeia from 1831 to 1936. Explicitly noted that pregnancy was a contraindication due to uterotonic effects."

evidence:
  summary: "No RCTs have ever tested goldenseal for any therapeutic indication. NCCIH: 'not enough evidence to determine whether goldenseal is useful for any health condition.' Commission E issued a negative monograph (1991). All human clinical trials test pharmacokinetic endpoints. What is documented: goldenseal significantly inhibits intestinal CYP3A4 (40–62%) via hydrastine time-dependent inhibition, CYP2D6 (~40–50%), and reduces metformin exposure ~23%. A 2-year NTP carcinogenesis study found clear evidence of hepatocarcinogenicity in rats."
  keyStudies:
    - title: "Gurley et al. 2008 — CYP3A Inhibition (n=16, crossover RCT)"
      finding: "14-day goldenseal supplementation increased midazolam AUC 62% (107.9 → 175.3 ng·h/mL); half-life extended 2.01 → 3.15 hours. Kava kava had no significant effect on CYP3A."
      year: 2008
    - title: "Nguyen et al. 2023 — Hydrastine TDI Mechanism (n=16 chronic, n=8 acute)"
      finding: "Identified hydrastine's time-dependent inhibition of intestinal CYP3A as the primary driver. Single 3g dose produced greater inhibition (AUC GMR 1.57) than chronic 1g TID × 6 days (GMR 1.39). PBPK model predicted clinical observations within 1.2-fold."
      year: 2023
    - title: "Nguyen et al. 2021 — Probe Cocktail (n=16, NaPDI Center)"
      finding: "Midazolam AUC GMR 1.43 (43% increase); inhibition is primarily intestinal CYP3A, not hepatic. Metformin exposure reduced 23% (GMR 0.77). No effect on rosuvastatin or furosemide."
      year: 2021
    - title: "Gurley et al. 2008 — CYP2D6 Six-Herb Comparison (n=54)"
      finding: "~50% CYP2D6 inhibition after 14 days. Only goldenseal produced significant CYP2D6 inhibition among six herbs. Milk thistle, black cohosh, kava, St. John's wort, and echinacea showed no effect."
      year: 2008
    - title: "NTP Technical Report 562 — 2-Year Carcinogenesis (rats and mice)"
      finding: "Clear evidence of hepatocarcinogenic activity in male and female rats; some evidence in male mice. Mechanism: berberine inhibits topoisomerase II → DNA double-strand breaks in human hepatic cells (Chen et al. 2013, FDA/NCTR)."
      year: 2010

preparations:
  - method: capsule
    dosing: "500–1000 mg dried root, 2–3 times daily (1–3 g/day)"
    notes: "Most practical preparation. Use products labeled 'goldenseal root'—they average 4× more alkaloid content than 'goldenseal herb' products. Standardized products should specify ≥2.0% hydrastine and ≥2.5% berberine."
  - method: tincture
    dosing: "2–4 mL, 2–3 times daily"
    notes: "1:10 in 60% ethanol (traditional Eclectic preparation). Quality tinctures have ~4,000–5,000 μg/mL per alkaloid and stain intensely yellow-orange. If the liquid is tan or nearly clear, quality is suspect."
    taste: "Intensely bitter, astringent, sharp. Should stain tongue and fingers yellow-orange on contact."
  - method: decoction
    dosing: "1–2 tsp dried root simmered in 2 cups water for 15–20 minutes, strained"
    notes: "Traditional Native American and Eclectic preparation. No established therapeutic dose. Deep canary yellow color from alkaloids."
  - method: topical
    dosing: "¼ tsp dried root powder dissolved in 1 cup boiled, cooled water; strain through cloth"
    notes: "Traditional wound wash. Lower systemic exposure than oral use means reduced drug interaction risk. Eye washes exist historically but achieving adequate sterility at home is difficult—safer alternatives exist for eye conditions."

trying:
  duration: "7–14 days maximum for acute conditions. Traditional use was situational and short-term, not daily maintenance. Do not use long-term."
  whatToNotice:
    - Baseline severity of target symptom; track daily change
    - GI tolerance (nausea is dose-dependent; reduce dose if it appears)
    - Unusual changes in any medication effects (could indicate CYP interactions altering drug levels)
  notes: "Before starting, review all medications against CYP2D6 and CYP3A4 substrate lists—the drug interaction is not subtle and occurs at commercially available doses after ~14 days. Start at the lower end (500mg capsule or 2mL tincture twice daily with food). If on metformin or any psychiatric, cardiac, or immunosuppressant medication, do not use goldenseal. Topical use (wounds, skin) carries far less systemic risk than oral use and follows the best-supported traditional pattern."

safety:
  generally: caution
  contraindications:
    - "Pregnancy — ABSOLUTE: berberine crosses the placenta, displaces fetal bilirubin from albumin (kernicterus risk), and has documented uterotonic effects. Eclectic physicians explicitly noted this."
    - "Neonates and infants — ABSOLUTE: berberine displaces bilirubin from albumin → kernicterus (irreversible brain damage or death)"
    - "Breastfeeding — ABSOLUTE: berberine transfers to breast milk; neonatal kernicterus risk"
    - "CYP3A4 substrates: benzodiazepines, calcium channel blockers, immunosuppressants, simvastatin/lovastatin, opioids, HIV protease inhibitors, some chemotherapy — 40–62% AUC increase documented"
    - "CYP2D6 substrates: antidepressants (TCAs, SSRIs), antipsychotics, beta-blockers, codeine, tramadol, tamoxifen — ~40–50% inhibition documented"
    - "Metformin users — goldenseal reduces metformin exposure ~23% (GMR 0.77); may impair glycemic control in type 2 diabetes"
    - "Liver disease — rodent hepatocarcinogenicity data and berberine-mediated hepatic DNA damage"
    - "Long-term use — 2-year NTP carcinogenesis study found clear evidence of hepatocarcinogenesis in male and female rats"
  pregnancyNursing: "Absolutely contraindicated in pregnancy (berberine crosses placenta, uterotonic effects, bilirubin displacement) and breastfeeding (neonatal kernicterus risk). No safe dose established."
  notes: "The primary clinical concern is drug interactions. CYP3A4 inhibition (40–62%) has an irreversible component—recovery requires new enzyme synthesis and takes 2–4 weeks after stopping. CYP2D6 inhibition (~40–50%) affects antidepressants, antipsychotics, beta-blockers, opioids, and tamoxifen (which requires CYP2D6 conversion to its active form). Discontinue at least 2–4 weeks before surgery or procedures requiring CYP-metabolized anesthetics. Drug test masking: goldenseal does not mask THC or other drug metabolites in urinalysis—this myth originates from a 1900 novel and has been definitively disproven."

combinedWith:
  - herb: "echinacea"
    why: "Commonly marketed together for immune support. Echinacea has modest evidence for cold duration; goldenseal adds drug interaction risk without demonstrated efficacy. No clinical evidence for the combination as a pair."
  - herb: "oregon grape"
    why: "Also contains berberine from Mahonia aquifolium root. Sometimes used as a more ecologically sustainable alternative—wild goldenseal is CITES Appendix II listed. Similar in vitro antimicrobial activity; less characterized for CYP drug interactions than goldenseal."

sources:
  - title: "Gurley et al. 2008 — CYP3A Inhibition: Goldenseal vs. Kava (PMID 17495878)"
    type: study
    year: 2008
  - title: "Nguyen et al. 2023 — Hydrastine TDI as Primary CYP3A Driver (PMID 37541764)"
    type: study
    year: 2023
  - title: "Nguyen et al. 2021 — Probe Cocktail: CYP3A, Metformin, Transporters (PMID 33174626)"
    type: study
    year: 2021
  - title: "Gurley et al. 2005 — Four-Herb CYP Phenotype Comparison (PMID 15900287)"
    type: study
    year: 2005
  - title: "Gurley et al. 2008 — Six-Herb CYP2D6 Comparison, n=54 (PMC2562884)"
    type: study
    year: 2008
  - title: "Gurley et al. 2007 — Digoxin/P-Glycoprotein Study (PMID 17079360)"
    type: study
    year: 2007
  - title: "Gupta et al. 2015 — Hydrastine Pharmacokinetics, n=11 (PMID 25609220)"
    type: study
    year: 2015
  - title: "NTP Technical Report 562 — 2-Year Carcinogenesis Bioassay (PMID 21372858)"
    type: study
    year: 2010
  - title: "Chen et al. 2013 — Berberine Genotoxicity via Topoisomerase II, FDA/NCTR (PMID 23747414)"
    type: study
    year: 2013
  - title: "Oyanna et al. 2023 — Metformin Transporter Inhibition Mechanism (PMID 37562957)"
    type: study
    year: 2023
  - title: "Sandhu et al. 2003 — Indinavir: Intestinal vs. Hepatic CYP3A (PMID 14551183)"
    type: study
    year: 2003
  - title: "Edwards & Draper 2003 — Commercial Goldenseal Quality Survey, n=20 (PMID 12836794)"
    type: study
    year: 2003
  - title: "Felter & Lloyd — King's American Dispensatory (1898)"
    type: traditional-text
    year: 1898
  - title: "Cech et al. 2012 — Goldenseal Antimicrobial Synergy vs MRSA (PMID 22814822)"
    type: study
    year: 2012

draft: false
---

## What The Evidence Says

Something important to understand first: no human clinical trial has ever tested goldenseal for any therapeutic outcome. Not colds. Not UTIs. Not digestive conditions, eye infections, or wound healing. After decades of widespread use, NCCIH's assessment remains: "not enough evidence to determine whether goldenseal is useful for any health condition."

What *has* been documented—in multiple human trials—is how goldenseal changes what happens to other drugs in your body. And the effect is not subtle.

**Your liver enzymes: the main story.**

If you're taking a medication metabolized by the enzyme CYP3A4—and roughly half of all pharmaceuticals are—goldenseal can increase that drug's blood level by 40–62%. One trial found it boosted a test drug's level by 62% and extended the time it stayed in your system from about 2 hours to over 3 [1]. That's the difference between a normal dose and a near-overdose for some medications.

Here's the counterintuitive part: a 2023 study found that a single large dose of goldenseal actually inhibited this enzyme *more* than taking it daily for almost a week [2]. The reason is that goldenseal's key alkaloid, hydrastine, damages the enzyme in a way that's partially irreversible—your body has to build new enzymes to recover, which takes 2–4 weeks. A third trial confirmed the 43% increase and established that the effect happens in your gut wall, not your liver—meaning drugs primarily cleared by the liver (like the HIV drug indinavir [11]) are less affected than drugs with significant gut-wall metabolism [3].

**CYP2D6: goldenseal stands alone.**

Most herbs don't touch the enzyme CYP2D6 at all. In a head-to-head comparison of six popular herbs, goldenseal was the only one that significantly inhibited it—milk thistle, black cohosh, kava, St. John's wort, and echinacea all showed no effect [5]. If you're on antidepressants, beta-blockers, or codeine-based pain medications, this matters: goldenseal halved this enzyme's activity after two weeks. A separate 28-day trial confirmed roughly 40% inhibition of both CYP2D6 and CYP3A4 [4].

**Metformin: reduced effectiveness.**

If you're on metformin for blood sugar control, goldenseal reduced its blood levels by about 23%—enough to meaningfully weaken its effect [3]. A follow-up study traced the cause to goldenseal blocking the intestinal transporters that absorb metformin, and found that neither berberine nor hydrastine alone reproduced the effect—some unidentified component is responsible [10].

**P-glycoprotein: not a concern.**

A 20-person digoxin study found only a 14% increase—goldenseal is not a meaningful modulator of this drug transporter at typical oral doses [6].

**The berberine problem:**

If you've seen impressive clinical data on berberine for blood sugar and cholesterol—that research doesn't apply here. In 11 people given a goldenseal dose containing 132mg of berberine, their berberine blood levels came in 200 times lower than hydrastine from the same dose [7]. Berberine barely makes it into your bloodstream from goldenseal. Hydrastine is the dominant alkaloid you actually absorb, and the confirmed driver of CYP3A4 inhibition [2].

**Preclinical signals (untested in humans):**

In lab studies, whole goldenseal leaf extract killed MRSA bacteria at a quarter the concentration needed with berberine alone—leaf flavonoids block the pumps bacteria use to expel antimicrobial compounds, making the whole plant 4× more potent [14]. Most commercial products use root only and miss this synergy.

**A significant safety signal:**

A 2-year National Toxicology Program feeding study found "clear evidence of carcinogenic activity"—the strongest NTP classification—in both male and female rats, producing liver tumors [8]. An FDA follow-up identified the mechanism: berberine damages DNA in human liver cells at doses achievable from commercial products [9]. Human cancer risk isn't formally established, but this substantially changes the calculus for long-term use.

## Traditional Use

Native American traditions are the original source, with Eclectic physicians systematizing and extending these uses across the following century.

**Cherokee:** Root decoctions for mouth sores, sore throats, eye infections ("eye root"), wounds, nausea, and liver complaints. The vivid yellow rhizome dyed baskets, clothing, and was used as war paint—origin of "Indian dye" and "yellow root."

**Iroquois, Crow Nation, Delaware, Micmac, Ojibwe:** Eye washes, digestive tonic, liver support, skin conditions, general infections, fever. Multiple independent nations arrived at overlapping mucosal and wound-care uses documented by 19th-century ethnobotanists.

**Eclectic medicine (1850–1930):**
Felter & Lloyd's *King's American Dispensatory* (1898) [13] described goldenseal as specific for "catarrhal states of all mucous surfaces"—respiratory, GI, urinary, and ophthalmic alike. Listed in the US Pharmacopeia from 1831 to 1936, it was one of the most systematically documented American herbs of its era.

The Eclectic literature explicitly noted "should not be given in full doses during pregnancy"—a caution that modern pharmacology explains through berberine's uterotonic effects, placental crossing, and bilirubin displacement.

**What traditional use actually looked like:**
Short-term, acute, for specific conditions—not daily maintenance supplementation. The modern "immune herb" positioning has no traditional precedent and no clinical evidence behind it.

**The drug test masking myth:**
A persistent folk belief holds that goldenseal will mask drug test results. Multiple controlled studies have disproven this. The myth traces to a fictional 1900 novel by John Uri Lloyd—the same Eclectic physician who championed goldenseal clinically. This fiction has driven considerable commercial sales with zero pharmacological effect on urinalysis results.

## How To Try It

If you're considering goldenseal, the safest path mirrors how it was actually used historically: short-term, for a specific condition, and only if you're not on prescription medications.

**Before anything, check your medications.** CYP3A4 metabolizes roughly half of all pharmaceuticals. CYP2D6 handles antidepressants, antipsychotics, opioids, beta-blockers, and tamoxifen. A 40–62% enzyme inhibition is not a small effect—if you're on any of these, goldenseal is off the table.

**Oral use (7–14 days maximum):**

| Form | Dose | What to look for |
|------|------|-----------------|
| **Dried root capsule** | 500–1000 mg, 2–3× daily | "Goldenseal root" (not "herb"); ≥2.0% hydrastine and ≥2.5% berberine on label |
| **Tincture (1:10)** | 2–4 mL, 2–3× daily | Should stain intensely yellow-orange; if tan or clear, alkaloid content is suspect |
| **Root decoction** | 1–2 tsp simmered 15–20 min | Traditional preparation; bitter and vividly yellow; no established therapeutic dose |

**Topical use (wound wash):**
¼ tsp dried root powder in 1 cup boiled, cooled water; strain through cloth. Lower systemic exposure than oral use—lower drug interaction risk. The traditional eye wash exists historically but sterility is difficult to achieve safely at home.

**Duration: 7–14 days maximum.** Traditional use was short-term and situational. Long-term safety in humans is unknown, and the NTP carcinogenicity data argues against chronic use.

## What To Track

Before starting: note all your medications and supplements, and your baseline symptom severity.

**During your short-term trial:**
- Target symptom: track severity daily
- GI tolerance: nausea is dose-related; reduce dose if it appears
- Watch for unexpected medication changes: increased sedation, shifted blood glucose readings, blood pressure changes—any of these could indicate a drug interaction affecting your medication levels; stop and contact a pharmacist

**After stopping:**
CYP inhibition has an irreversible component—your enzyme activity takes 2–4 weeks to fully recover. Plan accordingly if you're starting any new medications.

**Stop immediately if:**
- You discover you might be pregnant
- You develop jaundice, dark urine, or severe fatigue
- Any prescription medication behaves unexpectedly

## Who This Is/Isn't For

### If this might be for you:
- **You're healthy, on no prescription medications, dealing with an acute mucosal condition** (mouth sores, minor skin infections)—and you want to try what five Native American nations independently used for exactly this purpose. 7–14 days only.
- **You want to use it topically for wound care**—lower systemic exposure, lower drug interaction risk, and the strongest traditional support.
- **You've confirmed with a pharmacist** that none of your current medications are CYP2D6 or CYP3A4 substrates.

You're not going to feel a dramatic effect—there's no clinical data confirming goldenseal works for any of these conditions. But this is the context where the herb was actually used, and the sensory profile (that vivid yellow, the sharp bitterness coating your throat) tells you the alkaloids are present and active. Whether they're therapeutically active awaits the trials no one has run.

### If this isn't for you:
- **You're on any CYP3A4 drug** (benzodiazepines, calcium channel blockers, immunosuppressants, many statins, opioids, HIV medications, some chemotherapy)—goldenseal can increase blood levels of these drugs by 40–62% [1][2][3]. This isn't a small interaction.
- **You're on any CYP2D6 drug** (antidepressants, antipsychotics, beta-blockers, codeine, tramadol, tamoxifen)—roughly 40–50% inhibition documented across multiple trials [4][5].
- **You're on metformin**—goldenseal reduces its blood levels by about 23%, which may impair your glycemic control [3][10].
- **You're pregnant or breastfeeding**—absolute contraindication. Berberine crosses the placenta, displaces fetal bilirubin (kernicterus risk), and has uterotonic effects; it transfers to breast milk.
- **You have liver disease**—rodent hepatocarcinogenicity data plus berberine-induced hepatic DNA damage.
- **You're considering long-term supplementation**—no therapeutic evidence supports it; carcinogenicity data argues against it.

## The Yellow Root

Goldenseal has one of the most unmistakable signatures in American herbalism. The rhizome is vivid canary yellow—deep enough to stain skin and cloth immediately. This color is berberine and related alkaloids. A quality tincture should stain your tongue and fingers yellow-orange on contact. If your preparation looks tan or is tasteless, something is wrong: poor-quality root, adulteration (Oregon grape and barberry are common substitutes that also contain berberine), or expired product.

The taste is intensely bitter and astringent—a sharp bitterness distinct from milder bitters. Capsules avoid it. There is no good way to mask it in a decoction, though the Eclectic physicians considered this bitterness part of its tonic signature on mucous membranes.

## Quality Matters

41% of "goldenseal root" products failed proposed USP alkaloid standards in a 2003 survey of 20 commercial products [12]. Some contained zero detectable hydrastine—the alkaloid now identified as the primary pharmacological driver.

**What to verify:**
- Certificate of analysis showing ≥2.0% hydrastine and ≥2.5% berberine (USP draft standards)
- "Goldenseal root," not "goldenseal herb"—root products average 4× higher alkaloid content [12]
- Third-party testing: common adulterants (Coptis/goldthread, Oregon grape, barberry, celandine) all contain berberine but have different alkaloid profiles and lack goldenseal's characteristic hydrastine ratio—HPLC testing distinguishes them
- Cultivated source preferred: goldenseal is listed on CITES Appendix II and classified as at-risk by United Plant Savers; wild populations are ecologically threatened from decades of overharvesting

## The Bottom Line

**If it's appropriate for you**: You're healthy, on no medications, dealing with an acute mucosal condition, and you want to try what multiple Native American nations independently used for exactly this purpose. You'll use it for 7–14 days and stop. The traditional pattern is real—short-term, targeted, for specific conditions.

**If it's a problem for you**: You're on any CYP3A4 or CYP2D6 drug—benzodiazepines, antidepressants, beta-blockers, and many other common medications. This isn't a theoretical concern: 40–62% CYP3A4 inhibition and ~40–50% CYP2D6 inhibition are documented across multiple human trials [1][2][3][4][5], affecting dozens of commonly prescribed medications. If you're on metformin, it reduces blood levels by about 23% [3]. A 2-year rodent study found clear evidence of liver carcinogenicity [8]. If you're pregnant or nursing, do not use it.

**What no one knows**: Whether it actually helps. Modern clinical research has documented extensively *how goldenseal interacts with your drugs*, but no one has ever tested whether it works for the conditions people actually take it for. The traditional use is real; the clinical evidence for efficacy isn't. Whether it actually helps awaits the clinical trials no one has yet run.
