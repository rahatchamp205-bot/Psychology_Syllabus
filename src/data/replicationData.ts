import { ReplicationCase } from '../types';

export const REPLICATION_CASES: ReplicationCase[] = [
  {
    id: 'rep-open-sci',
    originalStudy: 'Estimating the Reproducibility of Psychological Science (100 studies)',
    authors: 'Open Science Collaboration',
    year: 2015,
    originalClaim: '97% of published experimental and correlational psychology papers reported statistically significant findings (p < .05).',
    replicationAttempts: '270 contributing researchers systematically conducted direct replications of 100 articles across JPSP, JEP:LMC, and Psychological Science with high statistical power.',
    verdict: 'Failed',
    currentStatus: 'Only 36% of original effects replicated significantly; average effect size was approximately halved (r = .40 to r = .20). Cognitive psychology replicated at higher rates (50%) than social psychology (25%).',
    lessonsLearned:
      'Demonstrated widespread publication bias, file drawer problems, and pervasive low statistical power. Led directly to widespread institutional adoption of preregistration, larger samples, and Registered Reports.'
  },
  {
    id: 'rep-power-posing',
    originalStudy: 'Power Posing: Brief Nonverbal Displays Affect Neuroendocrine Levels and Risk Tolerance',
    authors: 'Carney, D. R., Cuddy, A. J., & Yap, A. J.',
    year: 2010,
    originalClaim: 'Holding high-power expansive postures for 2 minutes significantly increases testosterone, decreases cortisol, and elevates risk-taking.',
    replicationAttempts: 'Comprehensive direct replications (Ranehill et al., 2015, N=200; Ronay et al., 2017) found zero effect on hormones or objective risk tolerance.',
    verdict: 'Discredited',
    currentStatus: 'First author Dana Carney officially renounced the effect in 2016 ("I do not believe that the power pose effect is real"), detailing researcher degrees of freedom. Only subjective feeling of power is supported.',
    lessonsLearned:
      'Clear demonstration of researcher degrees of freedom producing false-positive physiological claims from small samples (original N = 42). Subjective feelings do not prove endocrine changes.'
  },
  {
    id: 'rep-elderly-priming',
    originalStudy: 'Automaticity of Social Behavior: Direct Effects of Trait Construct and Stereotype Activation on Action',
    authors: 'Bargh, J. A., Chen, M., & Burrows, L.',
    year: 1996,
    originalClaim: 'Priming college students with words related to the elderly stereotype (e.g. "Florida", "bingo") unconsciously caused them to walk slower down a hallway.',
    replicationAttempts: 'Doyen et al. (2012) conducted direct replications with automated infrared sensors alongside manual stopwatches and blinded experimenters.',
    verdict: 'Discredited',
    currentStatus: 'The effect only appeared when experimenters were aware of the hypothesis and holding manual stopwatches. When experimenters were double-blind, walking speed was identical between conditions.',
    lessonsLearned:
      'Highlighting the Rosenthal experimenter expectancy effect and the absolute necessity of automated, blinded behavioral measurements in priming paradigms.'
  },
  {
    id: 'rep-ego-depletion',
    originalStudy: 'Ego Depletion: Is the Active Self a Limited Resource?',
    authors: 'Baumeister, R. F., Bratslavsky, E., Muraven, M., & Tice, D. M.',
    year: 1998,
    originalClaim: 'Self-control is a finite resource governed by a "strength" or glucose model; resisting temptation on Task 1 causes subsequent failure of stamina on Task 2.',
    replicationAttempts: 'A massive Registered Replication Report (Hagger et al., 2016) across 23 laboratories (N = 2,141) found an effect size indistinguishable from zero (d = 0.04).',
    verdict: 'Fragile',
    currentStatus: 'Multi-site replications and trim-and-fill publication bias corrections confirmed that the original huge effect sizes (d = 0.6) were inflated by publication bias. Process models (Inzlicht) now propose motivational shifting rather than literal glucose depletion.',
    lessonsLearned:
      'Demonstrated how popular conceptual metaphors (self-control as a muscle or battery) can persist for decades through publication bias despite lack of reliable laboratory effect reproducibility.'
  },
  {
    id: 'rep-facial-feedback',
    originalStudy: 'Inhibiting and Facilitating Conditions of the Human Smile: Nonobtrusive Test of Facial Feedback',
    authors: 'Strack, F., Martin, L. L., & Stepper, S.',
    year: 1988,
    originalClaim: 'Holding a pen in the teeth (forcing a smile) makes cartoons seem funnier than holding a pen with the lips, demonstrating facial expressions modulate emotion.',
    replicationAttempts: 'A Registered Replication Report by Wagenmakers et al. (2016) across 17 laboratories (N = 1,894) failed to find the effect. The Many Smiles Collaboration (Coles et al., 2022) found a very small effect without cameras.',
    verdict: 'Nuanced',
    currentStatus: 'The effect is real under strict boundary conditions (when unobserved by video cameras), but the effect size is very small (d ~ 0.10–0.15) rather than the dramatic modulation originally claimed.',
    lessonsLearned:
      'Showed how subtle variations in experimental protocol (e.g. video cameras inducing objective self-awareness) interact with subtle psychological feedback loops.'
  },
  {
    id: 'rep-marshmallow-test',
    originalStudy: 'Delay of Gratification in Children (The Marshmallow Test)',
    authors: 'Mischel, W., Ebbesen, E. B., & Raskoff Zeiss, A.',
    year: 1972,
    originalClaim: 'A child’s ability to wait for two marshmallows predicts long-term life outcomes (higher SAT scores, lower BMI, lower criminality) as an internal willpower trait.',
    replicationAttempts: 'Watts, Duncan, & Quan (2018) conceptually replicated the study in a large, racially and socioeconomically diverse sample (N > 900).',
    verdict: 'Nuanced',
    currentStatus: 'After controlling for maternal education, family income, and home environment, the association between delay ability and adult outcomes shrank dramatically toward zero. Kidd et al. (2013) also showed delay is a rational calculation of environmental reliability.',
    lessonsLearned:
      'Warns against attributing socioeconomic and structural advantages to internal "character" traits (fundamental attribution error) without controlling for background confounders.'
  },
  {
    id: 'rep-stanford-prison',
    originalStudy: 'The Stanford Prison Experiment',
    authors: 'Zimbardo, P. G.',
    year: 1971,
    originalClaim: 'Normal college students assigned to guard and prisoner roles inevitably descended into sadistic abuse and psychological breakdown purely due to situational role forces.',
    replicationAttempts: 'Archival investigative research (Le Texier, 2019) and BBC Prison Study replications (Haslam & Reicher, 2006).',
    verdict: 'Discredited',
    currentStatus: 'Audio recordings revealed Zimbardo and his staff explicitly instructed the guards on how to behave, coaching specific abusive tactics. It was not a naturalistic experiment, but actively directed theatrical simulation with severe demand characteristics.',
    lessonsLearned:
      'The SPE is widely recognized in contemporary academic curricula as a dramatic simulation with catastrophic demand characteristics rather than a controlled psychological experiment.'
  },
  {
    id: 'rep-milgram-obedience',
    originalStudy: 'Behavioral Study of Obedience (65% Maximum Shock)',
    authors: 'Milgram, S.',
    year: 1963,
    originalClaim: '65% of ordinary men obeyed an authority figure to administer lethal 450-volt electric shocks to an innocent learner.',
    replicationAttempts: 'Burger (2009) replicated the paradigm up to the 150-volt mark (~70% obedience). Archival transcripts analyzed by Gibson (2013) and Haslam & Reicher (2012).',
    verdict: 'Nuanced',
    currentStatus: 'Whenever the experimenter used the 4th prompt ("You have no other choice, you must go on"—the only true command), 100% of participants refused to obey. Participants only continued when appeals were framed in terms of shared scientific progress.',
    lessonsLearned:
      'Reinterpreted as "engaged followership": individuals voluntarily commit harmful acts when they believe in the noble scientific or ideological cause promoted by the authority, rather than blind compliance.'
  },
  {
    id: 'rep-bem-precognition',
    originalStudy: 'Feeling the Future: Experimental Evidence for Anomalous Retroactive Influences on Cognition and Affect',
    authors: 'Bem, D. J.',
    year: 2011,
    originalClaim: 'Reported 9 separate experiments showing that future events retroactively affect human memory and anticipation (precognition / ESP, p < .05).',
    replicationAttempts: 'Independent multi-lab replication across 3 laboratories (Ritchie, Wiseman, & French, 2012) and Bayesian re-analysis (Wagenmakers et al., 2011).',
    verdict: 'Discredited',
    currentStatus: 'All independent direct replications failed completely. Bem’s paper served as the ultimate demonstration of researcher degrees of freedom and the flaws of uncorrected NHST with arbitrary stopping rules.',
    lessonsLearned:
      'The immediate catalyst for the Replication Crisis. Convinced the psychological establishment that peer-review standards were vulnerable to p-hacking and that rigorous preregistration is essential.'
  },
  {
    id: 'rep-candidate-gene',
    originalStudy: 'Influence of Life Stress on Depression: Moderation by a Polymorphism in the 5-HTT Gene',
    authors: 'Caspi, A., Sugden, K., Moffitt, T. E., et al.',
    year: 2003,
    originalClaim: 'Individuals with one or two copies of the short (s) allele of the 5-HTTLPR serotonin transporter gene exhibit more depressive symptoms in relation to stressful life events.',
    replicationAttempts: 'Border et al. (2019) conducted a massive genome-wide analysis across N = 621,214 and 18 historical candidate genes.',
    verdict: 'Discredited',
    currentStatus: 'No historical candidate gene, including 5-HTTLPR, showed significant interaction with life stress. Depression is polygenic, influenced by thousands of variants of minute effect (GWAS), not single candidate genes.',
    lessonsLearned:
      'Demonstrated the complete collapse of candidate-gene association studies (CGAS) in psychiatry due to underpowered samples and uncorrected multiple testing. Modern psychiatry mandates GWAS.'
  }
];

export const OPEN_SCIENCE_REFORMS = [
  {
    id: 'os-1',
    name: 'Preregistration (OSF / AsPredicted)',
    purpose: 'Formulating hypotheses, exclusion criteria, and analysis plans prior to data collection to distinguish confirmatory testing from post-hoc exploratory HARKing.'
  },
  {
    id: 'os-2',
    name: 'Registered Reports Format',
    purpose: 'Peer review occurs before data collection. Acceptance is granted based on theoretical rationale and methodological rigor, guaranteeing publication regardless of whether p < .05.'
  },
  {
    id: 'os-3',
    name: 'Open Data & Reproducible Code',
    purpose: 'Making anonymized raw datasets, computational scripts (R/Python), and stimuli publicly accessible to enable computational verification and multiverse re-analyses.'
  },
  {
    id: 'os-4',
    name: 'A Priori Statistical Power Planning',
    purpose: 'Transitioning from historical N = 20-30 convenience samples to power analyses designed to achieve 80–90% power for realistic, small-to-medium effect sizes (N = 200+).'
  },
  {
    id: 'os-5',
    name: 'Multi-Site Collaborative Networks',
    purpose: 'Consortiums like the Psychological Science Accelerator (PSA) and ManyLabs conducting global replications across diverse non-WEIRD populations.'
  }
];
