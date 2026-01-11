---
name: "Valerian"
latinName: "Valeriana officinalis"
commonNames:
  - garden valerian
  - all-heal
summary: "Ancient European sleep remedy with moderate evidence for sleep improvement and anxiety reduction. Generally well-tolerated with extensive safety data, though effectiveness varies between individuals due to differences in how bodies process the herb and extract quality differences."

uses:
  - sleep
  - insomnia
  - anxiety
  - nervous tension
  - stress

relatedProtocols:
  - "[[protocols/sleep-support]]"
  - "[[protocols/insomnia]]"
  - "[[protocols/anxiety]]"

traditional:
  traditions:
    - European folk medicine
    - Traditional Western herbalism
  convergent: true
  attributions:
    - source: "European folk medicine (centuries of use)"
      text: "Traditionally used as sedative and nervine for sleep disorders, nervous tension, and restlessness. Name possibly derived from Latin 'valere' (to be strong/healthy). Long history of use across multiple European countries, codified in German Commission E and adopted into global pharmacopoeias."
    - source: "Regulatory recognition (WHO 1999, EMA, Commission E)"
      text: "Dried root/rhizome 2-3g for sleep; tincture (1:5, 45% ethanol) 1-3ml before bedtime. Traditional dosing incorporated into modern regulatory standards across WHO, European Medicines Agency, and multiple national pharmacopoeias."

evidence:
  summary: "Valerian has moderate evidence for sleep quality improvement, with meta-analyses showing approximately 80% increased likelihood of improved sleep [1]. However, objective sleep measurements (sleep studies) show minimal changes [2]. Anxiety reduction also supported by multiple studies with measurable brain activity changes [3]. Critical limitation: high variability in extract quality and how individual bodies process the herb affect outcomes significantly."
  keyStudies:
    - title: "Meta-analysis: Sleep Quality Improvement (Bent 2006)"
      link: "https://pubmed.ncbi.nlm.nih.gov/17145239"
      finding: "Participants were 80% more likely to report improved sleep across 16 studies (n=1,093), though most studies had methodological weaknesses"
      year: 2006
    - title: "Subjective vs Objective Sleep Parameters (Fernández-San-Martín 2010)"
      link: "https://pubmed.ncbi.nlm.nih.gov/20347389"
      finding: "Subjective quality improved by 37%, but no significant objective improvement in time to fall asleep (less than 1 minute difference) across 18 clinical trials"
      year: 2010
    - title: "Comprehensive Systematic Review (Shinjyo 2020)"
      link: "https://pubmed.ncbi.nlm.nih.gov/33086877"
      finding: "60 studies, n=6,894, no severe adverse events aged 7-80 years. Whole root/rhizome preparations showed more reliable effects than isolated extracts"
      year: 2020
    - title: "8-Week Sleep Quality RCT (Shekhar 2024)"
      link: "https://pubmed.ncbi.nlm.nih.gov/37899385"
      finding: "Significant PSQI improvements by day 14 (p<0.05), reduced sleep latency, improved efficiency, decreased anxiety, enhanced morning refreshment. No adverse events"
      year: 2024
    - title: "Neurophysiological Anxiety Effects (Roh 2019)"
      link: "https://pubmed.ncbi.nlm.nih.gov/30632220"
      finding: "100mg TID for 4 weeks: significant increases in frontal alpha coherence and decreases in theta coherence on EEG, correlated with anxiety reduction"
      year: 2019

preparations:
  - method: capsule
    dosing: "[[preparations/valerian-standardized-extract|Standardized extract]]: 400-600mg for sleep (once daily, 30min-2h before bed) | 100mg TID (300mg/day total) for anxiety"
    notes: "Most studied preparation. Choose products standardized to valerenic acid content and meeting pharmacopoeial standards (USP, EP, BP). Peak blood levels at 1-2 hours support 30min-2h pre-bedtime timing [4]."
  - method: tincture
    dosing: "[[preparations/valerian-tincture|1:5 ratio in 45% alcohol]]: 1-3ml before bedtime"
    notes: "Traditional European preparation codified in European Pharmacopoeia and Commission E. Alcohol content consideration for specific populations."
  - method: tea
    dosing: "2-3g dried root/rhizome steeped 10-15 minutes"
    notes: "Traditional preparation. Cover while steeping to preserve volatile compounds. Whole root preparations may provide more consistent effects than isolated extracts [1]. Characteristic earthy, musty aroma."
  - method: extract
    dosing: "400-900mg"
    notes: "Alcohol-free option. Extensively studied for safety with excellent toxicology profile (NOAEL ≥14 g/kg in rats) [5]."

trying:
  duration: "Minimum 4 weeks for anxiety, optimal 8 weeks for sleep disorders. Some benefit may appear within 2 weeks, but full effects develop over 4-8 weeks. Pharmacokinetics show peak levels at 1-2 hours, supporting timing 30min-2h before sleep."
  whatToNotice:
    - Sleep onset time (falling asleep faster)
    - Sleep quality and depth (fewer awakenings, more restorative)
    - Feeling of refreshment upon waking
    - Stress response to daily irritations
    - Daytime drowsiness (should decrease, not increase)
    - Any gastrointestinal effects
  notes: "Start with standard dose (400-600mg extract OR 2-3g dried root for sleep; 100mg TID for anxiety) taken with food initially. Effects are primarily subjective rather than measurable on sleep studies - improved 'feeling' of sleep quality is a valid and expected outcome [2]. Individual response varies significantly due to differences in how bodies absorb and process the herb (pharmacokinetic variability) [6]. If no benefit after 8 weeks, consider: different preparation type (try whole root if using extract, or vice versa), different adaptogen, or underlying sleep hygiene/medical issues. Avoid alcohol and sedative medications during trial."

safety:
  generally: safe
  contraindications:
    - "Pregnancy (may stimulate uterus; insufficient human data though animal data reassuring up to 65x human dose) [7]"
    - "Pre-existing liver disease (rare hepatotoxicity documented, likelihood score C) [8]"
    - "Surgery within 2 weeks (discontinue due to potential sedative effects)"
  pregnancyNursing: "Contraindicated in pregnancy due to insufficient human safety data, though animal studies show no reproductive toxicity at high doses [7]. Lactation safety unknown due to lack of data on breast milk excretion."
  notes: "Generally well-tolerated short-term (≤8 weeks). Systematic review of 60 studies (n=6,894) found no severe adverse events in subjects aged 7-80 years [1]. Rare liver toxicity documented (onset 3-12 weeks after starting, typically mild-to-moderate and resolving within 2-4 months after stopping). Most severe cases involved herbal blends containing other potentially liver-toxic herbs [8]. Monitor liver function if using >3 months. Long-term safety data (>6 months) lacking. Short half-life (clears the body in about 1 hour) suggests low risk of accumulation [4,6]. May strengthen effects of sedatives, anxiety medications, or alcohol (additive nervous system depression). High variability in how bodies process valerian means individual responses differ significantly [6]."

combinedWith:
  - herb: "hops"
    why: "Traditional European pairing for sleep support. Complementary sedative effects. Many commercial sleep formulas combine valerian + hops."
  - herb: "passionflower"
    why: "Synergistic anxiolytic and sedative effects. Both GABAergic herbs for sleep and anxiety."
  - herb: "lemon balm"
    why: "Complementary nervine and mild sedative. Traditional combination for nervous tension and restlessness."
  - herb: "chamomile"
    why: "Gentle sedative pairing. Chamomile for initial relaxation, valerian for deeper sleep support."

sources:
  - title: "Shinjyo et al. - Systematic Review and Meta-Analysis"
    link: "https://pubmed.ncbi.nlm.nih.gov/33086877"
    type: meta-analysis
    year: 2020
    citation: "[1]"
  - title: "Fernández-San-Martín et al. - Meta-Analysis of RCTs"
    link: "https://pubmed.ncbi.nlm.nih.gov/20347389"
    type: meta-analysis
    year: 2010
    citation: "[2]"
  - title: "Roh et al. - EEG Functional Connectivity Study"
    link: "https://pubmed.ncbi.nlm.nih.gov/30632220"
    type: study
    year: 2019
    citation: "[3]"
  - title: "Anderson et al. - Valerenic Acid Pharmacokinetics"
    link: "https://pubmed.ncbi.nlm.nih.gov/16220575"
    type: study
    year: 2005
    citation: "[4]"
  - title: "Bao et al. - Comprehensive Safety Evaluation"
    link: "https://pubmed.ncbi.nlm.nih.gov/39128798"
    type: study
    year: 2024
    citation: "[5]"
  - title: "Anderson et al. - PK Variability in Older Women"
    link: "https://pubmed.ncbi.nlm.nih.gov/20878691"
    type: study
    year: 2010
    citation: "[6]"
  - title: "Yao et al. - Developmental Toxicity Screening"
    link: "https://pubmed.ncbi.nlm.nih.gov/17574800"
    type: study
    year: 2007
    citation: "[7]"
  - title: "LiverTox Database - Valerian Hepatotoxicity"
    link: "https://livertox.nih.gov/"
    type: other
    citation: "[8]"
  - title: "Bent et al. - Sleep Meta-Analysis"
    link: "https://pubmed.ncbi.nlm.nih.gov/17145239"
    type: meta-analysis
    year: 2006
  - title: "WHO Monographs on Selected Medicinal Plants, Volume 1"
    type: other
    year: 1999
  - title: "German Commission E Monograph - Valerian"
    link: "http://cms.herbalgram.org/expandedE/Valerianroot.html"
    type: other
  - title: "Shekhar et al. - 8-Week Sleep Quality RCT"
    link: "https://pubmed.ncbi.nlm.nih.gov/37899385"
    type: study
    year: 2024

draft: false
---

## What The Evidence Says

Valerian represents an interesting case: **strong traditional use validated by moderate modern evidence**, but with an important caveat about variability. This isn't a slam-dunk herb that works consistently for everyone - individual responses vary significantly.

**Moderate evidence (multiple meta-analyses):**
- **Sleep quality (self-reported)**: People were approximately 80% more likely to report improved sleep across 16 studies [1]. However, this is based on how people felt, not objective sleep study measurements.
- **Objective sleep parameters**: Minimal improvement in measurable time to fall asleep (less than one minute, not clinically significant) [2]. The disconnect between subjective and objective measures is notable.
- **Anxiety reduction**: Measurable neurophysiological changes on EEG (increased frontal alpha coherence, decreased theta coherence) correlating with reduced anxiety [3].
- **Safety profile**: Excellent - no severe adverse events in 6,894 subjects aged 7-80 years across 60 studies [1].

**Critical nuances discovered:**
1. **Extract quality matters profoundly**: Whole root/rhizome preparations show more reliable effects than isolated extracts [1]. This suggests the full spectrum of compounds may be more important than valerenic acid alone.
2. **High variability in how the body processes valerian**: Large differences in absorption and metabolism between individuals (pharmacokinetics) explain inconsistent clinical responses [6]. You may be a strong responder, moderate responder, or non-responder based on your individual biology.
3. **Subjective > Objective**: Valerian improves how you *feel* about your sleep more than measurable sleep architecture. This is valid and clinically meaningful, but manage expectations accordingly.

**Research quality:** Most studies had methodological weaknesses [1]. Evidence of publication bias documented. Only 8 of 18 studies in one meta-analysis met high quality standards (scoring 5 out of 5 on the Jadad quality scale) [2].

## Traditional Use

Valerian has centuries of documented use in European folk medicine, though specific historical citations are limited in modern clinical literature. The herb's traditional use is well-established through regulatory recognition:

**European folk medicine (documented use since at least the medieval period, likely earlier):**
- Primary use: Sleep disorders, insomnia, nervous tension
- Preparation: Dried root as tea, alcoholic tinctures, decoctions
- Timing: Before bedtime for sleep (aligns with modern pharmacokinetic data showing 1-2 hour peak blood levels)
- Etymology: Possibly from Latin *valere* (to be strong/healthy), though origins debated
- Latin name *somnifera* (sleep-inducing) reflects observed traditional effects

**Regulatory validation of traditional use:**
- **WHO** (1999): Comprehensive monograph in Volume 1 of Selected Medicinal Plants
- **German Commission E**: Approved monograph with traditional dosing (2-3g dried root, 1-3ml tincture)
- **European Medicines Agency**: "Traditional use" designation (requires ≥30 years medicinal use, 15 within EU)
- **Multiple pharmacopoeias**: USP, EP, BP, plus Belgium, France, Germany, Italy, Switzerland, Japan

**What this means**: Valerian has sufficient historical precedent to warrant inclusion in global regulatory frameworks. The consistency of traditional indications (sleep, nervous tension) with modern clinical evidence (subjective sleep quality, anxiety reduction) demonstrates validation across time.

**Traditional dosing incorporated into modern standards:**
- Dried root/rhizome: 2-3g multiple times daily or single dose before bedtime
- Tincture (1:5, 45% ethanol): 1-3ml single dose
- Fluid extract: 2-3ml single dose
- Aqueous extract: 400-900mg

The continuity between traditional preparations and modern standardized extracts is notable - both traditional teas (2-3g) and modern capsules (400-600mg concentrated extract) derive from the same root material.

## How To Try It

### Choose Your Preparation

**Standardized extracts (most studied, most convenient):**

The clinical trial evidence primarily uses standardized dry extracts, so this is your evidence-based starting point. However, whole root preparations may actually be more reliable [1].

**For sleep:**
- **Dose**: 400-600mg standardized extract (or 530mg as used in post-surgical trial [9])
- **Timing**: 30 minutes to 2 hours before bedtime (based on 1-2 hour peak blood levels [4])
- **Duration**: Start with 8 weeks - significant improvements appear by week 2, but full effects by week 8 [9]

**For anxiety:**
- **Dose**: 100mg three times daily (300mg/day total)
- **Duration**: Minimum 4 weeks for neurophysiological changes [3]
- **Timing**: Divided throughout day (morning, afternoon, evening)

**Traditional preparations (potentially more reliable):**

Research suggests whole root/rhizome preparations may offer more consistent effects than isolated extracts [1]. This is worth considering if standardized extracts don't work for you.

**Tea preparation:**
- 2-3g (approximately 1-1.5 teaspoons) dried, cut valerian root
- 1 cup (150-250ml) hot water
- Steep 10-15 minutes, covered (preserves volatile compounds)
- Strain and drink 30min-2h before bedtime

**Tincture (traditional European preparation):**
- 1-3ml (1/4 to 3/4 teaspoon) before bedtime
- Standard preparation: 1:5 ratio in 45% alcohol
- Faster absorption than capsules
- Alcohol content: consider for pregnancy, children, recovery from alcohol dependence

**Aqueous extract (alcohol-free):**
- 400-900mg
- Extensively studied for safety [5]
- Good option for alcohol-sensitive populations

### What To Expect (And When)

**Timeline:**
- **Immediate (hours)**: Unlikely. Some notice subtle relaxation, most don't feel anything initially.
- **1-2 weeks**: Initial sleep improvements possible. Sense of falling asleep faster or sleeping more deeply.
- **4 weeks**: Anxiety benefits should emerge if you're a responder [3]. Stress reactions feel less intense.
- **8 weeks**: Full sleep benefits solidify [9]. This is the minimum trial period before deciding if it works for you.

**What you'll notice (if you respond):**
- Falling asleep faster (reduced sleep onset time)
- Feeling like sleep is deeper, more restorative
- Waking more refreshed
- Daily stressors feel less impactful
- Reduced nighttime awakenings

**What you WON'T necessarily see:**
- Dramatic changes on sleep trackers or sleep studies [2]
- Sedation or grogginess (shouldn't increase daytime drowsiness)
- Immediate effects (not like taking Ambien or Benadryl)

**Why you might not respond:**
- Body chemistry differences [6] - your body may not absorb or metabolize valerenic acid effectively
- Extract quality issues - try whole root preparation if standardized extract doesn't work
- Wrong dose/timing - experiment with 30min vs 2h before bed
- Individual variation - some people simply don't respond to valerian

### Dosing Strategy

**Start standard, not low:**

Unlike ashwagandha (start low, titrate up), valerian is well-tolerated, so starting at the evidence-based dose makes sense.

**For sleep:**
1. **Week 1-2**: 400-600mg standardized extract (or 2-3g tea) 30min-2h before bed
2. **Week 3-4**: Continue same dose, assess initial response
3. **Week 5-8**: Continue to week 8 for full trial, adjust timing if needed (experiment with 30min vs 1h vs 2h before bed based on your peak sleep latency)

**For anxiety:**
1. **Week 1-4**: 100mg three times daily (breakfast, lunch, dinner) or 300mg once daily
2. **Week 5+**: Continue if beneficial, cycle off after 2-3 months to reassess

**If no effect after 8 weeks:**
- Try different preparation type (whole root tea if you used extract, or vice versa)
- Consider different herb (passionflower, hops, lemon balm)
- Address underlying sleep hygiene, stress, or medical issues

### Cycling and Duration

**Short-term use is well-established (≤8 weeks)**. Long-term safety data (>6 months) is lacking.

**Recommended approach:**
- **8-12 weeks on, 2-4 weeks off** to assess if still needed
- **As-needed use**: Only during high-stress periods or poor sleep phases
- **Monitor liver function** if using >3 months continuously (rare hepatotoxicity documented [8])

**No evidence of physical dependence** - short half-life (1.1 hours [4]) means no accumulation, so withdrawal is unlikely. However, rebound sleep issues possible if underlying stress/sleep hygiene not addressed.

## What To Track

**Baseline (1 week before starting):**
- Sleep onset time (how long to fall asleep)
- Number of nighttime awakenings
- Feeling of sleep quality upon waking (1-10 scale)
- Stress reactivity to daily irritations (1-10)
- Any GI symptoms

**During trial (weeks 1-8):**
- Same metrics, daily or at minimum weekly
- Note: Track how you feel, not just device data (sleep trackers may not show dramatic changes [2])
- Compare baseline vs week 2, week 4, week 8

**Signs it's working:**
- Falling asleep faster (even if sleep tracker doesn't show it)
- Feeling more refreshed despite similar total sleep time
- Stressors feel less overwhelming
- Reduced nighttime rumination

**RED FLAGS - Stop immediately:**
- Jaundice, dark urine, severe fatigue (liver injury signs [8])
- Paradoxical insomnia or agitation
- Severe GI distress
- Signs of allergic reaction

## Who This Is/Isn't For

### Likely to benefit:
- Mild to moderate insomnia (difficulty falling asleep, non-restorative sleep)
- Stress-related sleep disturbances
- Anxiety with nervous tension
- Post-operative sleep recovery [9]
- Those seeking sleep quality improvement based on how they feel (not necessarily changes on sleep study measurements)
- Preference for herbal over synthetic sleep aids

### Non-responders (common):
- Healthy baseline sleep (valerian won't enhance already-optimal sleep)
- Severe insomnia (may need stronger interventions)
- Bodies that don't process valerian effectively (high individual variation [6])

What they report: "Didn't notice any difference," "slept the same as usual."

**Action**: Try different preparation (whole root vs extract), different adaptogen, or focus on sleep hygiene and medical evaluation.

### Contraindicated/use with caution:
- **Pregnancy**: Insufficient human data (animal data reassuring up to 65x human dose [7])
- **Pre-existing liver disease**: Rare but documented hepatotoxicity [8]
- **Surgery within 2 weeks**: Discontinue (potential additive sedative effects with anesthesia)
- **On sedatives/anxiolytics**: Possible additive CNS depression
- **Alcohol dependence**: Traditional tinctures contain 45% alcohol

## The Aroma

Valerian root has a distinctive, polarizing smell: earthy, musty, pungent, sometimes described as "sweaty socks" or "dirty feet." This is normal and due to volatile isovaleric acid compounds. Some find it unpleasant, others neutral. The smell is strongest in whole root preparations and teas.

**If smell is intolerable**: Capsules eliminate the aroma entirely. Clinical evidence supports encapsulated extracts, so no efficacy loss.

**Historical note**: Cats and rats are attracted to valerian's aroma (folklore suggests the Pied Piper used valerian, not a flute). Humans vary in their olfactory response.

## Quality Matters

**The challenge**: Extract quality varies significantly between products, affecting clinical outcomes [1]. Valerenic acid content varies by preparation method, and valepotriate content is unstable.

**What to look for:**
- **Standardization**: Products standardized to valerenic acid content (typical range 0.4-0.8%)
- **Pharmacopoeial compliance**: Look for USP, EP (European Pharmacopoeia), or BP (British Pharmacopoeia) compliance on label
- **Reputable manufacturers**: Third-party testing for heavy metals, microbial contamination
- **Whole root preparations**: May be more reliable than isolated extracts [1]
- **Certificate of Analysis**: Available from manufacturer on request

**European Pharmacopoeia method preferred** for valerenic acid analysis [research database].

**Consider starting with whole root preparations** (tea or powdered root capsules) if you've had inconsistent results with standardized extracts - the full spectrum may matter more than isolated marker compounds.

## The Bottom Line

Valerian is a **well-tolerated, traditionally-validated herb with moderate evidence for subjective sleep quality improvement and anxiety reduction**, but significant individual variability means it works well for some, modestly for others, and not at all for a subset.

**When it works**: Falling asleep faster, feeling like sleep is deeper and more restorative, stress feels less overwhelming, gentle support without sedation.

**When it doesn't**: No noticeable benefit after 8 weeks. Try different preparation (whole root vs extract), consider different herb, or address underlying sleep hygiene/medical issues.

**Safety is excellent short-term** (no severe adverse events in 6,894 subjects [1]), but long-term data (>6 months) lacking. Rare hepatotoxicity documented (mild-to-moderate, self-limiting [8]).

**Key insight**: How you feel is the primary outcome - you may not see dramatic changes on sleep trackers, but if you *feel* like you're sleeping better, that's a valid and meaningful effect [2].

Start with evidence-based dose (400-600mg extract or 2-3g tea 30min-2h before bed), give it a full 8 weeks, track subjectively, and respect the rare but documented contraindications. Individual variation is high - approach as systematic n=1 experimentation.
