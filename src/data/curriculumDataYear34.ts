import { Course } from '../types';

export const YEAR_3_AND_4_COURSES: Course[] = [
  // ================= YEAR 3 =================
  // Semester 5
  {
    id: 'psy-301',
    code: 'PSY 301',
    title: 'Psychopathology (Advanced)',
    year: 3,
    semester: 5,
    difficulty: 'Advanced',
    whyIncluded: 'Major specialization foundation. Harvard has PSY 18 (Psychopathology). We expand this into two advanced courses bridging diagnostic classification with transdiagnostic mechanisms.',
    prerequisites: ['PSY 101', 'PSY 120', 'PSY 210'],
    description: 'An advanced, empirical analysis of psychological disorders using the DSM-5-TR, ICD-11, and modern Research Domain Criteria (RDoC). Covers anxiety, mood, psychotic, personality, and neurodevelopmental disorders, their epidemiology, etiology, and treatment modalities.',
    learningObjectives: [
      'Describe the major diagnostic categories in DSM-5-TR and explain structural diagnostic controversies',
      'Evaluate the biological, cognitive, developmental, and environmental etiological models of disorder',
      'Critically evaluate the strengths and limitations of categorical classification vs. dimensional models (HiTOP)',
      'Distinguish between descriptive symptoms and underlying cognitive-biological mechanisms'
    ],
    estimatedWorkload: '14–16 hours / week',
    units: [
      {
        id: 'psy301-u1',
        title: 'Unit 1: Classification, Diagnosis & Neurosis Spectrum',
        order: 1,
        topics: [
          { id: 'p301-t1', title: 'DSM-5-TR structure, Robins & Guze criteria, and diagnostic validity', keyConcepts: ['Descriptive validity', 'Comorbidity', 'Medicalization debate'] },
          { id: 'p301-t2', title: 'Anxiety disorders: GAD, Panic Disorder, Agoraphobia, Social Anxiety', keyConcepts: ['Interoceptive conditioning', 'Amygdala hyper-reactivity', 'Safety behaviors'] },
          { id: 'p301-t3', title: 'Obsessive-Compulsive & Related Disorders', keyConcepts: ['Corticostriatal loops', 'Intrusive thoughts', 'Exposure & Response Prevention (ERP)'] },
          { id: 'p301-t4', title: 'Trauma and Stressor-Related Disorders: PTSD and Complex PTSD', keyConcepts: ['Fear extinction deficit', 'Hippocampal volume', 'Intrusive re-experiencing'] }
        ]
      },
      {
        id: 'psy301-u2',
        title: 'Unit 2: Mood Disorders & The Schizophrenia Spectrum',
        order: 2,
        topics: [
          { id: 'p301-t5', title: 'Major Depressive Disorder: Symptom heterogeneity & Fried (2017)', keyConcepts: ['52 distinct symptoms', 'HPA axis dysregulation', 'Cognitive triad (Beck)'] },
          { id: 'p301-t6', title: 'Bipolar I and II Disorders: Manic switches and circadian disruption', keyConcepts: ['Kindling model', 'Lithium responsiveness', 'Genetic architecture'] },
          { id: 'p301-t7', title: 'Schizophrenia spectrum & psychotic disorders: Positive vs negative symptoms', keyConcepts: ['Dopamine hypothesis', 'Aberrant salience', 'Cognitive deficits', 'Glutamate/NMDA hypofunction'] },
          { id: 'p301-t8', title: 'Personality disorders: Cluster A, B, and C & alternative dimensional model', keyConcepts: ['Borderline (Linehan biosocial)', 'Antisocial', 'HiTOP dimensional model'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-301-1',
        title: 'Abnormal Psychology: The Science and Treatment of Psychological Disorders',
        authors: 'Kring, A. M., & Johnson, S. L.',
        edition: '15th Edition',
        year: '2021',
        courseCode: 'PSY 301',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Extremely rigorous neurobiological and cognitive science integration of modern psychopathology research.',
        chaptersToRead: 'Chapters 1 through 15 (Comprehensive)',
        verified: true
      },
      {
        id: 'tb-301-2',
        title: 'Abnormal Psychology: An Integrative Approach',
        authors: 'Barlow, D. H., Durand, V. M., & Hofmann, S. G.',
        edition: '8th Edition',
        year: '2018',
        courseCode: 'PSY 301',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Superb focus on multidimensional integrative models combining genetics, neuroscience, and conditioning.',
        chaptersToRead: 'Chapters on Anxiety and Mood Disorders',
        verified: true
      },
      {
        id: 'tb-301-3',
        title: 'Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR)',
        authors: 'American Psychiatric Association',
        edition: '5th Edition Text Revision',
        year: '2022',
        courseCode: 'PSY 301',
        type: 'Reference',
        priority: 'CORE',
        whyItMatters: 'The official clinical reference manual for diagnostic criteria, prevalence rates, and differential diagnosis.',
        chaptersToRead: 'Diagnostic criteria tables for Major Depressive, Schizophrenia, Panic, and BPD',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-301-1',
        title: 'Establishment of Diagnostic Validity in Psychiatric Illness: Its Application to Schizophrenia',
        authors: 'Robins, E., & Guze, S. B.',
        year: 1970,
        journal: 'American Journal of Psychiatry, 126(7), 983–987',
        courseCode: 'PSY 301',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What criteria must be satisfied to establish that a psychiatric diagnosis is a valid, discrete clinical entity?',
        method: 'Theoretical framework proposing 5 phases: 1. Clinical description, 2. Laboratory studies, 3. Delimitation from other disorders, 4. Follow-up study, 5. Family studies.',
        findings: 'Formulated the gold-standard 5-step paradigm that transformed psychiatric nosology from psychoanalysis to empirical psychiatry (basis of DSM-III to DSM-5).',
        importance: 'The single most foundational paper in modern empirical psychiatric classification.',
        limitations: 'Assumed discrete categorical entities rather than continuous dimensional spectra.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Historical foundation of DSM, now integrated with modern genetics and neuroimaging.',
        verified: true
      },
      {
        id: 'pp-301-2',
        title: 'Toward a Philosophical Structure for Psychiatry',
        authors: 'Kendler, K. S.',
        year: 2005,
        journal: 'American Journal of Psychiatry, 162(3), 433–440',
        courseCode: 'PSY 301',
        category: 'foundational',
        priority: 'RECOMMENDED',
        researchQuestion: 'How can psychiatry move past naive biological reductionism and Cartesian dualism?',
        method: 'Philosophical and empirical synthesis of genetic epidemiology and mechanistic complexity',
        findings: 'Argued for "explanatory pluralism" and "patchy reductionism": psychiatric illness is inherently multilevel (genes, circuits, cognitions, social environments) and cannot be reduced solely to molecular brain lesions.',
        importance: 'Major intellectual roadmap for modern psychiatric science.',
        limitations: 'Philosophical framework rather than empirical test.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Widely taught as the antidote to vulgar neuro-essentialism.',
        verified: true
      },
      {
        id: 'pp-301-3',
        title: 'The 52 Symptoms of Major Depression: Lack of Content Overlap Among Seven Common Depression Scales',
        authors: 'Fried, E. I.',
        year: 2017,
        journal: 'Journal of Affective Disorders, 208, 191–197',
        courseCode: 'PSY 301',
        category: 'controversial',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'Do standard depression rating scales measure the same construct, or do they feature radically divergent symptom profiles?',
        method: 'Content analysis of 7 major depression rating scales (HAM-D, BDI, CES-D, MADRS, QIDS, PHQ-9, IDS)',
        findings: 'Identified 52 distinct symptoms across scales; 40% of symptoms appeared on only one scale; scales shared low symptom overlap.',
        importance: 'Exposed profound measurement heterogeneity in depression research, proving that two patients diagnosed with "MDD" can share zero overlapping symptoms.',
        limitations: 'Focuses on scale item wording rather than neurobiological subtypes.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Catalyzed network psychometrics and transdiagnostic symptom-level modeling in psychopathology.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-301-1',
        courseCode: 'PSY 301',
        title: 'Major Disorder Category Comprehensive Summary Portfolio',
        type: 'short-answer',
        prompt: 'For 5 major disorder categories (Anxiety, Depressive, Bipolar, Schizophrenia, and Borderline Personality), write a 1-page structured breakdown detailing: 1. Core clinical features, 2. Epidemiology & lifetime prevalence, 3. Primary biological/cognitive etiological models, 4. First-line evidence-based treatments, 5. Current diagnostic controversies.',
        deliverables: '5-page structured psychopathology portfolio.',
        estimatedHours: 8,
        rubricFocus: ['DSM-5-TR accuracy', 'Identification of biological and psychological mechanisms', 'Current controversies']
      },
      {
        id: 'asg-301-2',
        courseCode: 'PSY 301',
        title: 'Diagnostic Criteria Critical Evaluation: DSM vs. Dimensional Models',
        type: 'critical-evaluation',
        prompt: 'Select a specific DSM-5-TR criteria set (e.g. Major Depressive Episode or Schizoaffective Disorder). Write a critical evaluation: What does the categorical threshold capture well? What does it obscure (e.g. subthreshold distress, symptom heterogeneity, arbitrary cutoffs)? Contrast with the Hierarchical Taxonomy of Psychopathology (HiTOP) dimensional model.',
        deliverables: '1,500-word critical evaluation essay.',
        estimatedHours: 6,
        rubricFocus: ['Critique of polythetic diagnostic rules', 'Understanding of HiTOP dimensions', 'Clinical vs empirical validity']
      }
    ]
  },

  {
    id: 'psy-310',
    code: 'PSY 310',
    title: 'Cognitive Neuroscience',
    year: 3,
    semester: 5,
    difficulty: 'Advanced',
    whyIncluded: 'Harvard PSY 14; Oxford core subject. Bridges mental computation with spatial/temporal functional neuroimaging.',
    prerequisites: ['PSY 120', 'PSY 201'],
    description: 'The neural substrates of human mental operations: fMRI physics and BOLD signal limitations, electroencephalography (EEG/ERP), magnetoencephalography (MEG), transcranial magnetic stimulation (TMS), lesion logic, and neural systems for attention, memory, language, and emotion.',
    learningObjectives: [
      'Explain the biophysical origins of the BOLD signal in fMRI and recognize the fallacy of "reverse inference"',
      'Contrast the high temporal resolution of EEG/ERP with the high spatial resolution of fMRI',
      'Map the medial temporal lobe memory circuit (hippocampus, entorhinal cortex) and prefrontal executive networks',
      'Critically evaluate the reproducibility challenges in task-based neuroimaging (Botvinik-Nezer et al. 2020)'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy310-u1',
        title: 'Unit 1: Neuroimaging Methods & Biophysical Logic',
        order: 1,
        topics: [
          { id: 'p310-t1', title: 'fMRI physics: Blood Oxygen Level Dependent (BOLD) signal', keyConcepts: ['Hemodynamic response function (HRF)', 'T2* relaxation', 'Logothetis (2008)'] },
          { id: 'p310-t2', title: 'Electrophysiology: EEG, Event-Related Potentials (ERPs), and MEG', keyConcepts: ['P300', 'N400', 'Post-synaptic potentials', 'Source localization problem'] },
          { id: 'p310-t3', title: 'Brain stimulation & lesion methods: TMS, tDCS, and neuropsychological lesion overlap', keyConcepts: ['Causal vs correlational inference', 'Virtual lesions', 'Voxel-based lesion-symptom mapping'] },
          { id: 'p310-t4', title: 'Reverse inference fallacy and statistical thresholding (FWE, FDR)', keyConcepts: ['Poldrack (2006)', 'Dead salmon fMRI (Bennett)', 'Multiple comparisons problem'] }
        ]
      },
      {
        id: 'psy310-u2',
        title: 'Unit 2: Neural Systems for Memory, Emotion & Executive Function',
        order: 2,
        topics: [
          { id: 'p310-t5', title: 'Medial temporal lobe memory system and hippocampal indexing', keyConcepts: ['Pattern separation (DG)', 'Pattern completion (CA3)', 'Systems consolidation'] },
          { id: 'p310-t6', title: 'Prefrontal cortex architecture & executive control', keyConcepts: ['Dorsolateral PFC (DLPFC)', 'Ventromedial PFC (VMPFC)', 'Default Mode Network (DMN)', 'Salience network'] },
          { id: 'p310-t7', title: 'Affective neuroscience: Amygdala circuits and fear conditioning', keyConcepts: ['Ledoux high and low roads', 'Extinction circuits (Infralimbic cortex)', 'Reward dopaminergic pathways'] },
          { id: 'p310-t8', title: 'Variability in neuroimaging analysis & open science pipelines', keyConcepts: ['Botvinik-Nezer (2020)', 'Analytical flexibility', 'fMRIPrep standardization'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-310-1',
        title: 'Cognitive Neuroscience: The Biology of the Mind',
        authors: 'Gazzaniga, M. S., Ivry, R. B., & Mangun, G. R.',
        edition: '5th Edition',
        year: '2018',
        courseCode: 'PSY 310',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The premier global cognitive neuroscience textbook, written by pioneers of split-brain and attentional research.',
        chaptersToRead: 'Chapters 1 through 14',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-310-1',
        title: 'Can Cognitive Processes Be Inferred from Neuroimaging Data?',
        authors: 'Poldrack, R. A.',
        year: 2006,
        journal: 'Trends in Cognitive Sciences, 10(2), 59–63',
        courseCode: 'PSY 310',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'Under what conditions can a researcher validly infer a specific mental process from the activation of a brain region (reverse inference)?',
        method: 'Formal Bayesian analysis of selectivity and prior probabilities in neuroimaging databases',
        findings: 'Showed that because most brain regions (e.g., insula, anterior cingulate, amygdala) activate across dozens of diverse tasks, reverse inference is almost always deductively invalid without strict Bayes calculations.',
        importance: 'Reshaped how neuroimaging findings are interpreted across cognitive and clinical science.',
        limitations: 'Can be overly conservative if applied to multivariate pattern analysis (MVPA).',
        replicationStatus: 'Robust',
        currentInterpretation: 'Mandatory standard citation in cognitive neuroscience to prevent over-interpreting brain activation.',
        verified: true
      },
      {
        id: 'pp-310-2',
        title: 'Variability in the Analysis of a Single Neuroimaging Dataset by Many Teams',
        authors: 'Botvinik-Nezer, R., Holzmeister, F., Camerer, C. F., et al.',
        year: 2020,
        journal: 'Nature, 582(7810), 84–88',
        courseCode: 'PSY 310',
        category: 'controversial',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'How much does analytical flexibility affect results when different analysis teams evaluate the exact same fMRI dataset with identical hypotheses?',
        method: '70 independent teams analyzed the same raw fMRI dataset testing 9 predefined hypotheses',
        findings: 'No two teams chose identical analysis pipelines; hypothesis testing results varied dramatically across teams for the exact same data.',
        importance: 'Exposed massive researcher degrees of freedom in fMRI analysis pipelines.',
        limitations: 'Focused on flexible pipelines before modern preregistration and standardized container workflows (e.g. fMRIPrep).',
        replicationStatus: 'Robust',
        currentInterpretation: 'Pivotal open science paper driving standard preregistered pipelines in human brain mapping.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-310-1',
        courseCode: 'PSY 310',
        title: 'Reverse Inference & fMRI Methodological Critique',
        type: 'critical-evaluation',
        prompt: 'Explain why functional Magnetic Resonance Imaging (fMRI) cannot be used to "prove" that a specific brain region is the exclusive "module" responsible for a complex mental function. Contrast correlational BOLD activation with causal neuropsychological lesion logic and TMS stimulation.',
        deliverables: '1,200-word scholarly critique.',
        estimatedHours: 5,
        rubricFocus: ['Detailed explanation of the BOLD hemodynamic lag', 'Formal definition of reverse inference', 'Double dissociation concept']
      },
      {
        id: 'asg-310-2',
        courseCode: 'PSY 310',
        title: 'Cognitive Neuroscience Empirical Paper Deconstruction',
        type: 'paper-analysis',
        prompt: 'Select a primary research paper from the Journal of Cognitive Neuroscience or NeuroImage. Deconstruct the experimental contrast (subtraction method), correction for multiple comparisons (cluster-extent vs voxelwise FWE), and whether the authors’ conclusions commit reverse inference.',
        deliverables: '2-page critical paper audit.',
        estimatedHours: 5,
        rubricFocus: ['Subtraction logic analysis', 'Correction for multiple testing verification', 'Rigorous critique']
      }
    ]
  },

  {
    id: 'psy-320',
    code: 'PSY 320',
    title: 'Statistics III (Regression and Advanced Topics)',
    year: 3,
    semester: 5,
    difficulty: 'Advanced',
    whyIncluded: 'Regression is the mathematical foundation of all general linear modeling and multivariable observational research.',
    prerequisites: ['PSY 230'],
    description: 'Advanced multivariable statistical models: multiple linear regression (simultaneous, hierarchical, stepwise), multicollinearity diagnostics, logistic regression, mediation and moderation analysis (Hayes PROCESS framework), path analysis fundamentals, handling missing data, and open science preregistration.',
    learningObjectives: [
      'Interpret unstandardized (b) and standardized (beta) coefficients in multiple regression models',
      'Diagnose violations of regression assumptions (multicollinearity via VIF, heteroscedasticity)',
      'Conduct and interpret mediation (indirect effects via bootstrapping) and moderation (interaction terms with simple slopes)',
      'Formulate a comprehensive open science preregistration protocol using OSF standards'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy320-u1',
        title: 'Unit 1: Multiple Regression & Diagnostics',
        order: 1,
        topics: [
          { id: 'p320-t1', title: 'The General Linear Model & Ordinary Least Squares (OLS)', keyConcepts: ['Residual minimization', 'R-squared and Adjusted R-squared', 'F-test of model fit'] },
          { id: 'p320-t2', title: 'Multiple regression coefficients & partial correlation', keyConcepts: ['Holding other variables constant', 'Unique vs shared variance'] },
          { id: 'p320-t3', title: 'Regression diagnostics & assumption testing', keyConcepts: ['Multicollinearity (VIF/Tolerance)', 'Cook’s distance (outliers)', 'Homoscedasticity'] },
          { id: 'p320-t4', title: 'Hierarchical regression & dummy coding categorical predictors', keyConcepts: ['Incremental R-squared change', 'Reference category coding'] }
        ]
      },
      {
        id: 'psy320-u2',
        title: 'Unit 2: Mediation, Moderation & Logistic Regression',
        order: 2,
        topics: [
          { id: 'p320-t5', title: 'Mediation analysis: Baron & Kenny vs. modern bootstrapping', keyConcepts: ['Indirect effect (a*b)', 'Preacher & Hayes bootstrap CI', 'Causal assumptions of mediation'] },
          { id: 'p320-t6', title: 'Moderation analysis: Interaction terms & simple slopes', keyConcepts: ['Centering continuous predictors', 'Johnson-Neyman technique', 'Floodlight vs spotlight'] },
          { id: 'p320-t7', title: 'Binary logistic regression & odds ratios', keyConcepts: ['Logit link function', 'Odds ratio (OR) interpretation', 'Hosmer-Lemeshow fit'] },
          { id: 'p320-t8', title: 'Missing data mechanisms & Open Science preregistration', keyConcepts: ['MCAR, MAR, MNAR', 'Multiple imputation', 'OSF preregistration template'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-320-1',
        title: 'Discovering Statistics Using R (Regression Chapters)',
        authors: 'Field, A., Miles, J., & Field, Z.',
        edition: '1st Edition',
        year: '2012',
        courseCode: 'PSY 320',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Unmatched practical walkthroughs of multiple regression, moderation, mediation, and logistic regression with R script examples.',
        chaptersToRead: 'Chapters 7, 8, and 19 (Regression, Logistic Regression, Moderation/Mediation)',
        verified: true
      },
      {
        id: 'tb-320-2',
        title: 'Applied Multiple Regression/Correlation Analysis for the Behavioral Sciences',
        authors: 'Cohen, J., Cohen, P., West, S. G., & Aiken, L. S.',
        edition: '3rd Edition',
        year: '2002',
        courseCode: 'PSY 320',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'The authoritative graduate reference for mathematical regression theory and interaction interpretation.',
        chaptersToRead: 'Chapters 2, 3, 7 (Multiple regression and Interactions)',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-320-1',
        title: 'The Moderator-Mediator Variable Distinction in Social Psychological Research',
        authors: 'Baron, R. M., & Kenny, D. A.',
        year: 1986,
        journal: 'Journal of Personality and Social Psychology, 51(6), 1173–1182',
        courseCode: 'PSY 320',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What is the precise conceptual and statistical distinction between a mediator (mechanism) and a moderator (boundary condition)?',
        method: 'Conceptual and mathematical regression equations formalizing 4-step testing',
        findings: 'Established standard terminology: mediators explain HOW or WHY a phenomenon occurs; moderators specify WHEN or FOR WHOM it occurs.',
        importance: 'The most cited paper in the history of psychology (>100,000 citations).',
        limitations: 'Baron-Kenny 4-step logic has low statistical power; modern science uses bootstrapping of the indirect effect (Hayes, 2013).',
        replicationStatus: 'Robust',
        currentInterpretation: 'Conceptually foundational; statistically superseded by Hayes bootstrapping approaches.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-320-1',
        courseCode: 'PSY 320',
        title: 'Multiple Regression Analysis on Open Dataset',
        type: 'stats-exercise',
        prompt: 'Run a 3-predictor multiple linear regression using an open psychology dataset in R or Python. Evaluate multicollinearity (VIF), generate residual diagnostic plots, compute b, SE, beta, t, p, and R^2. Write an APA-formatted results section with a summary table.',
        deliverables: 'Script code + APA-formatted statistical table and interpretation text.',
        estimatedHours: 5,
        rubricFocus: ['Accuracy of b vs beta distinction', 'Checking regression assumptions', 'APA table presentation']
      },
      {
        id: 'asg-320-2',
        courseCode: 'PSY 320',
        title: 'Preregistration Protocol Construction (OSF Template)',
        type: 'design-exercise',
        prompt: 'Write a full formal Open Science Framework (OSF) preregistration protocol for an observational study involving multiple regression or mediation. Detail exact hypotheses, inclusion criteria, outlier exclusion rules, and planned primary/secondary statistical models.',
        deliverables: 'Completed 4-page OSF-compliant preregistration document.',
        estimatedHours: 6,
        rubricFocus: ['Elimination of researcher degrees of freedom', 'Unambiguous exclusion criteria', 'Precise model specification']
      }
    ]
  },

  {
    id: 'psy-330',
    code: 'PSY 330',
    title: 'Research Methods III (Experimental and Quasi-Experimental Design)',
    year: 3,
    semester: 5,
    difficulty: 'Advanced',
    whyIncluded: 'Advanced causal inference in field and laboratory settings where pure random assignment is constrained.',
    prerequisites: ['PSY 270'],
    description: 'Complex experimental designs and causal inference without randomization: higher-order factorial designs, mixed between-within designs, quasi-experimental designs (nonequivalent control groups, interrupted time series), regression discontinuity, longitudinal designs, and the Rubin Causal Model.',
    learningObjectives: [
      'Design complex 3-way factorial and mixed experimental protocols',
      'Identify and mitigate internal validity threats in quasi-experimental field evaluations',
      'Explain the logic of regression discontinuity and propensity score matching',
      'Distinguish true causal effects from selection-maturation and historical artifacts'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy330-u1',
        title: 'Unit 1: Complex Factorial & Mixed Designs',
        order: 1,
        topics: [
          { id: 'p330-t1', title: 'Higher-order factorial designs (2x2x2) and 3-way interactions', keyConcepts: ['Interpretation of 3-way interactions', 'Simple interaction effects', 'Statistical power requirements'] },
          { id: 'p330-t2', title: 'Mixed between-within split-plot designs', keyConcepts: ['Sphericity assumption', 'Greenhouse-Geisser correction', 'Individual difference baselines'] },
          { id: 'p330-t3', title: 'Single-case experimental designs (ABAB, multiple-baseline)', keyConcepts: ['Reversal logic', 'Applied behavior analysis validation', 'Visual analysis standards'] }
        ]
      },
      {
        id: 'psy330-u2',
        title: 'Unit 2: Quasi-Experiments & Modern Causal Inference',
        order: 2,
        topics: [
          { id: 'p330-t4', title: 'Non-equivalent control group pretest-posttest designs', keyConcepts: ['Selection-maturation threat', 'Regression to the mean artifacts'] },
          { id: 'p330-t5', title: 'Interrupted time-series and comparative interrupted time-series', keyConcepts: ['Autocorrelation', 'Immediate shift vs gradual slope change'] },
          { id: 'p330-t6', title: 'Regression Discontinuity Design (RDD)', keyConcepts: ['Forcing variable', 'Bandwidth selection', 'Local average treatment effect'] },
          { id: 'p330-t7', title: 'The Rubin Causal Model & Propensity Score Matching', keyConcepts: ['Counterfactual framework', 'Potential outcomes', 'Confounder balance'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-330-1',
        title: 'Experimental and Quasi-Experimental Designs for Generalized Causal Inference',
        authors: 'Shadish, W. R., Cook, T. D., & Campbell, D. T.',
        edition: '2nd Edition',
        year: '2002',
        courseCode: 'PSY 330',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The undisputed bible of causal inference in behavioral, social, and psychological sciences.',
        chaptersToRead: 'Chapters 1 through 8 (Causation, threats, quasi-experiments, regression discontinuity)',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-330-1',
        title: 'Estimating Causal Effects of Treatments in Randomized and Nonrandomized Studies',
        authors: 'Rubin, D. B.',
        year: 1974,
        journal: 'Journal of Educational Psychology, 66(5), 688–701',
        courseCode: 'PSY 330',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'How can causal effects be formally defined in terms of unobservable counterfactual potential outcomes?',
        method: 'Mathematical formalization of the Potential Outcomes framework (Rubin Causal Model)',
        findings: 'Defined a causal effect as the difference between what would have happened to a participant with treatment vs without treatment.',
        importance: 'Revolutionized causal inference across epidemiology, economics, and psychology.',
        limitations: 'Fundamental problem of causal inference: impossible to observe both potential outcomes for the same individual.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal mathematical standard for modern causal inference.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-330-1',
        courseCode: 'PSY 330',
        title: 'Factorial 2x3 Experimental Proposal Design',
        type: 'design-exercise',
        prompt: 'Design a 2x3 factorial experiment investigating a cognitive or educational intervention. Provide: 1. Factorial matrix, 2. Exact randomization strategy, 3. Predicted interaction hypothesis with mock graph, 4. Planned simple main effects analysis procedure.',
        deliverables: '1,500-word experimental proposal.',
        estimatedHours: 6,
        rubricFocus: ['Clarity of factor structure', 'Proper simple effects analysis plan', 'Identification of potential confounds']
      },
      {
        id: 'asg-330-2',
        courseCode: 'PSY 330',
        title: 'Quasi-Experimental Causal Claim Audit',
        type: 'critical-evaluation',
        prompt: 'Find a published study that used a quasi-experimental design (e.g. policy change or school-wide curriculum). Use the Shadish, Cook, & Campbell framework to catalog all threats to internal validity (history, selection, instrumentation) that prevent pure causal claims.',
        deliverables: '3-page methodological critique.',
        estimatedHours: 5,
        rubricFocus: ['Rigorous cataloging of threats', 'Evaluation of author causal language']
      }
    ]
  },

  // Semester 6
  {
    id: 'psy-340',
    code: 'PSY 340',
    title: 'Clinical Psychology and Evidence-Based Intervention',
    year: 3,
    semester: 6,
    difficulty: 'Advanced',
    whyIncluded: 'Bridges psychopathology to therapeutic science. Focuses on randomized controlled trials (RCTs), evidence-based therapies, and mechanistic intervention research.',
    prerequisites: ['PSY 301'],
    description: 'An empirical evaluation of psychological treatments: history of psychotherapy, psychoanalysis to modern Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), interpersonal psychotherapy, treatment outcome research methodology, and the "common factors" debate.',
    learningObjectives: [
      'Contrast the core theoretical mechanisms of second-wave (CBT) and third-wave (ACT/DBT) therapies',
      'Explain how randomized controlled trials (RCTs) with active placebos evaluate treatment efficacy',
      'Evaluate the "Dodo Bird Verdict" and the empirical balance between specific techniques and common factors',
      'Assess clinical practice guidelines (NICE, APA Division 12) for evidence-based interventions'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy340-u1',
        title: 'Unit 1: Evidence-Based Modalities & Mechanics',
        order: 1,
        topics: [
          { id: 'p340-t1', title: 'Cognitive Behavioral Therapy (CBT): Cognitive restructuring & behavioral activation', keyConcepts: ['Beck', 'Automatic thoughts', 'Core beliefs', 'Behavioral experiments'] },
          { id: 'p340-t2', title: 'Dialectical Behavior Therapy (DBT): Emotion regulation & distress tolerance', keyConcepts: ['Linehan', 'Dialectical philosophy', 'Mindfulness', 'Validation'] },
          { id: 'p340-t3', title: 'Acceptance and Commitment Therapy (ACT) & psychological flexibility', keyConcepts: ['Relational Frame Theory', 'Cognitive defusion', 'Values-based action'] },
          { id: 'p340-t4', title: 'Exposure therapies & inhibitory learning theory', keyConcepts: ['Craske model', 'Expectancy violation', 'Extinction vs inhibition'] }
        ]
      },
      {
        id: 'psy340-u2',
        title: 'Unit 2: Treatment Outcome Science & Common Factors',
        order: 1,
        topics: [
          { id: 'p340-t5', title: 'RCT methodology: Waitlist, attention control, active psychological placebos', keyConcepts: ['Blinding in psychotherapy', 'Therapist allegiance bias', 'Fidelity monitoring'] },
          { id: 'p340-t6', title: 'The Common Factors debate: Wampold vs. Specific Ingredients', keyConcepts: ['Therapeutic alliance', 'Empathy', 'Dodo Bird verdict', 'Cuijpers (2019)'] },
          { id: 'p340-t7', title: 'Meta-analyses of psychotherapy efficacy: Hofmann et al. (2012)', keyConcepts: ['Effect sizes across disorders', 'Publication bias in psychotherapy trials'] },
          { id: 'p340-t8', title: 'Harm in psychotherapy & evidence-based practice guidelines', keyConcepts: ['Iatrogenic treatments', 'APA Division 12 criteria', 'NICE guidelines'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-340-1',
        title: 'Clinical Handbook of Psychological Disorders: A Step-by-Step Treatment Manual',
        authors: 'Barlow, D. H. (Ed.)',
        edition: '6th Edition',
        year: '2021',
        courseCode: 'PSY 340',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The gold-standard clinician-scientist handbook detailing exact evidence-based protocols for panic, depression, OCD, and PTSD.',
        chaptersToRead: 'Chapters on Panic Disorder, Major Depression, and BPD (DBT)',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-340-1',
        title: 'The Efficacy of Cognitive Behavioral Therapy: A Review of Meta-Analyses',
        authors: 'Hofmann, S. G., Asnaani, A., Vonk, I. J., et al.',
        year: 2012,
        journal: 'Cognitive Therapy and Research, 36(5), 427–440',
        courseCode: 'PSY 340',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'How robust is the empirical meta-analytic evidence base for CBT across clinical disorders?',
        method: 'Systematic review of 269 meta-analytic studies covering thousands of clinical trials',
        findings: 'Found strong evidence for CBT efficacy in anxiety disorders, somatoform disorders, bulimia, anger control, and general stress, with moderate efficacy in depression and schizophrenia.',
        importance: 'The definitive empirical synthesis substantiating CBT’s status as first-line evidence-based psychotherapy.',
        limitations: 'Heterogeneity across included meta-analyses; reliance on waitlist control comparators in some trials.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Benchmark reference cited internationally in clinical guideline development.',
        verified: true
      },
      {
        id: 'pp-340-2',
        title: 'The Role of Common Factors in Psychotherapy Outcomes',
        authors: 'Cuijpers, P., Reijnders, M., & Huibers, M. J.',
        year: 2019,
        journal: 'Annual Review of Clinical Psychology, 15, 207–231',
        courseCode: 'PSY 340',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'Do specific treatment techniques drive outcomes, or are therapeutic alliance and common factors primarily responsible?',
        method: 'Meta-analytic and methodological review of component trials and dismantling studies',
        findings: 'Demonstrated that common factors (alliance, expectancy) account for substantial variance, but specific evidence-based ingredients remain crucial for targeted conditions like panic and OCD.',
        importance: 'Brought nuanced methodological balance to the polarizing common factors vs specific ingredients controversy.',
        limitations: 'Difficulty in disaggregating relational skills from procedural competence in real therapists.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Contemporary consensus view in clinical psychology science.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-340-1',
        courseCode: 'PSY 340',
        title: 'Comparative Treatment Evaluation: CBT vs Alternative Modality',
        type: 'essay',
        prompt: 'Choose one specific psychiatric disorder (e.g. Major Depressive Disorder or Panic Disorder). Write a 2,000-word scholarly essay comparing CBT with another evidence-based treatment (e.g. Interpersonal Therapy or Acceptance & Commitment Therapy). Evaluate: underlying hypothesized mechanisms, empirical effect sizes from RCTs, and long-term relapse prevention data.',
        deliverables: '2,000-word comparative research essay.',
        estimatedHours: 8,
        rubricFocus: ['Accurate mechanistic contrast', 'Citing high-quality meta-analyses', 'Evaluation of control conditions']
      },
      {
        id: 'asg-340-2',
        courseCode: 'PSY 340',
        title: 'Psychotherapy RCT Methodological Audit',
        type: 'paper-analysis',
        prompt: 'Select a published randomized controlled trial of a psychological intervention. Evaluate its methodological rigor: blinding of outcome assessors, treatment fidelity monitoring, use of intention-to-treat (ITT) analysis, control group selection (waitlist vs psychological placebo), and therapist allegiance effects.',
        deliverables: '3-page structured trial audit.',
        estimatedHours: 5,
        rubricFocus: ['Critique of waitlist control inflation', 'ITT compliance check', 'Assessment of risk of bias']
      }
    ]
  },

  {
    id: 'psy-350',
    code: 'PSY 350',
    title: 'Neuropsychology',
    year: 3,
    semester: 6,
    difficulty: 'Advanced',
    whyIncluded: 'Crucial clinical neuroscience discipline examining the cognitive and behavioral consequences of human brain damage and neuropathology.',
    prerequisites: ['PSY 310'],
    description: 'The study of brain-behavior relationships in clinical neuropathology: double dissociation logic, aphasias, agnosias, apraxias, amnesic syndromes (H.M., Clive Wearing), frontal executive dysfunction, traumatic brain injury, dementias (Alzheimer’s, Frontotemporal, Lewy Body), and standardized neuropsychological assessment (WCST, Trail Making, WAIS).',
    learningObjectives: [
      'Explain the logic of single and double dissociations in cognitive neuropsychology',
      'Describe the neuroanatomy and clinical presentations of Broca’s, Wernicke’s, and conduction aphasia',
      'Analyze what medial temporal lobe resection in patient H.M. revealed about memory systems',
      'Evaluate the psychometric properties and diagnostic utility of standard neuropsychological tests'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy350-u1',
        title: 'Unit 1: Cortical Syndromes & Dissociations',
        order: 1,
        topics: [
          { id: 'p350-t1', title: 'The logic of double dissociations and cognitive modularity', keyConcepts: ['Shallice', 'Teuber', 'Task demand artifacts vs true modularity'] },
          { id: 'p350-t2', title: 'Aphasia: Broca, Wernicke, Conduction, and Transcortical syndromes', keyConcepts: ['Arcuate fasciculus', 'Paraphasias', 'Wernicke-Geschwind model'] },
          { id: 'p350-t3', title: 'Agnosias and Apraxias: Ventral stream breakdowns', keyConcepts: ['Apperceptive vs associative agnosia', 'Prosopagnosia', 'Ideomotor apraxia'] },
          { id: 'p350-t4', title: 'Hemispatial neglect and parietal lobe syndromes', keyConcepts: ['Right parietal dominance', 'Extinction', 'Line bisection and clock drawing tests'] }
        ]
      },
      {
        id: 'psy350-u2',
        title: 'Unit 2: Amnesias, Executive Dysfunction & Dementias',
        order: 2,
        topics: [
          { id: 'p350-t5', title: 'Amnesic syndromes: Patient H.M. and Scoville & Milner (1957)', keyConcepts: ['Anterograde amnesia', 'Intact motor/procedural learning', 'Mirror tracing task'] },
          { id: 'p350-t6', title: 'Frontal lobe syndromes & dysexecutive syndrome', keyConcepts: ['Phineas Gage', 'Perseveration', 'Orbitofrontal disinhibition vs dorsolateral abulia'] },
          { id: 'p350-t7', title: 'Dementia neuropathology: Alzheimer’s, FTD, Lewy Body, Vascular', keyConcepts: ['Amyloid plaques & tau tangles', 'Alpha-synuclein', 'Differential clinical course'] },
          { id: 'p350-t8', title: 'Standardized neuropsychological assessment batteries', keyConcepts: ['Wisconsin Card Sorting Test', 'Stroop', 'Trail Making Test A & B', 'MoCA'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-350-1',
        title: 'Fundamentals of Human Neuropsychology',
        authors: 'Kolb, B., & Whishaw, I. Q.',
        edition: '8th Edition',
        year: '2021',
        courseCode: 'PSY 350',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The undisputed definitive undergraduate neuropsychology text, filled with real clinical case histories and anatomical drawings.',
        chaptersToRead: 'Chapters 1 through 16',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-350-1',
        title: 'Loss of Recent Memory After Bilateral Hippocampal Lesions',
        authors: 'Scoville, W. B., & Milner, B.',
        year: 1957,
        journal: 'Journal of Neurology, Neurosurgery, and Psychiatry, 20(1), 11–21',
        courseCode: 'PSY 350',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What are the precise memory consequences of bilateral surgical resection of the medial temporal lobe in humans?',
        method: 'Clinical case study of patient H.M. (Henry Molaison) and 9 other surgical patients following bilateral medial temporal resection for intractable epilepsy',
        findings: 'H.M. developed profound, permanent anterograde amnesia with preserved intellectual function, perceptual ability, and short-term digit span.',
        importance: 'The most famous case study in neuroscience; proved that memory is a distinct brain function anatomically localized to the medial temporal lobes, separable from general intelligence.',
        limitations: 'Single-case lesion boundaries were surgically approximate (later clarified with MRI by Corkin et al.).',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal cornerstone of memory systems neuroscience.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-350-1',
        courseCode: 'PSY 350',
        title: 'Patient H.M. Case Study & Memory Systems Synthesis',
        type: 'essay',
        prompt: 'Write an in-depth analytical paper (1,500 words) on patient H.M. (Scoville & Milner 1957). Detail: 1. Exact surgical resection boundaries, 2. What memory abilities were completely abolished vs preserved (e.g. mirror tracing, priming), 3. How his profile proved the distinction between declarative/explicit and non-declarative/implicit memory.',
        deliverables: '1,500-word clinical neuroscience paper.',
        estimatedHours: 6,
        rubricFocus: ['Anatomical precision (hippocampus, entorhinal, perirhinal cortex)', 'Detailed explanation of preserved procedural learning']
      },
      {
        id: 'asg-350-2',
        courseCode: 'PSY 350',
        title: 'Neuropsychological Assessment Battery Critique',
        type: 'critical-evaluation',
        prompt: 'Select two standard neuropsychological tests: one executive function test (e.g. Wisconsin Card Sorting Test) and one screening test (e.g. Montreal Cognitive Assessment). Evaluate: construct validity, test-retest reliability, ecological validity, and sensitivity/specificity in detecting early mild cognitive impairment.',
        deliverables: '2-page psychometric critique.',
        estimatedHours: 4,
        rubricFocus: ['Critique of task impurity in executive tests', 'Evaluation of educational bias in screening scores']
      }
    ]
  },

  {
    id: 'psy-360',
    code: 'PSY 360',
    title: 'Psychopharmacology',
    year: 3,
    semester: 6,
    difficulty: 'Advanced',
    whyIncluded: 'Understanding the biochemical mechanisms of psychiatric drugs and substances of abuse is mandatory for evaluating clinical interventions.',
    prerequisites: ['PSY 120', 'PSY 301'],
    description: 'Principles of neuropharmacology and clinical psychopharmacotherapy: pharmacokinetics (absorption, distribution, metabolism, elimination), pharmacodynamics (receptors, agonists, antagonists, allosteric modulators), mechanism of antidepressants (SSRIs, SNRIs, ketamine), antipsychotics (typical vs atypical), mood stabilizers (lithium), anxiolytics, stimulants, and the critical evaluation of psychiatric drug efficacy vs placebo.',
    learningObjectives: [
      'Contrast pharmacokinetics (what body does to drug) and pharmacodynamics (what drug does to body)',
      'Explain the synaptic mechanisms and receptor profiles of major psychiatric drug classes',
      'Critically evaluate the serotonin hypothesis of depression in light of Moncrieff et al. (2022)',
      'Analyze the neurobiology of the placebo effect and the magnitude of active drug-placebo differences'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy360-u1',
        title: 'Unit 1: Pharmacokinetics, Pharmacodynamics & Antidepressants',
        order: 1,
        topics: [
          { id: 'p360-t1', title: 'Pharmacokinetics: ADME and the Cytochrome P450 enzyme system', keyConcepts: ['Bioavailability', 'Half-life', 'Steady state', 'Enzyme induction/inhibition'] },
          { id: 'p360-t2', title: 'Pharmacodynamics: Receptors, G-proteins, and second messengers', keyConcepts: ['Agonists, antagonists, inverse agonists', 'Allosteric modulators', 'Dose-response curve'] },
          { id: 'p360-t3', title: 'Antidepressants: SSRIs, SNRIs, TCAs, MAOIs, and Ketamine', keyConcepts: ['SERT inhibition', 'Downregulation of 5-HT1A autoreceptors', 'BDNF synthesis', 'NMDA blockade'] },
          { id: 'p360-t4', title: 'The Serotonin Theory of Depression Controversy: Moncrieff et al. (2022)', keyConcepts: ['Umbrella review', 'Lack of consistent serotonin deficit', 'Alternative neuroplasticity models'] }
        ]
      },
      {
        id: 'psy360-u2',
        title: 'Unit 2: Antipsychotics, Mood Stabilizers & Placebo Dynamics',
        order: 2,
        topics: [
          { id: 'p360-t5', title: 'Antipsychotics: First-generation vs Second-generation (Atypical)', keyConcepts: ['D2 receptor occupancy (>65% vs >80%)', 'Extrapyramidal symptoms (EPS)', 'Tardive dyskinesia', '5-HT2A antagonism'] },
          { id: 'p360-t6', title: 'Mood stabilizers: Lithium, Valproate, and Lamotrigine', keyConcepts: ['Inositol depletion hypothesis', 'GSK-3 inhibition', 'Narrow therapeutic window and monitoring'] },
          { id: 'p360-t7', title: 'Anxiolytics & Sedatives: Benzodiazepines and Buspirone', keyConcepts: ['GABA-A positive allosteric modulation', 'Tolerance, physical dependence, and withdrawal'] },
          { id: 'p360-t8', title: 'Placebo mechanisms, nocebo effects, and open vs hidden administration', keyConcepts: ['Endogenous opioid release', 'Expectancy conditioning', 'Active placebos (Kirsch meta-analyses)'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-360-1',
        title: 'Stahl’s Essential Psychopharmacology: Neuroscientific Basis and Practical Applications',
        authors: 'Stahl, S. M.',
        edition: '5th Edition',
        year: '2021',
        courseCode: 'PSY 360',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The worldwide gold-standard clinical psychopharmacology textbook, renowned for full-color cartoon circuit diagrams of neurotransmitter dynamics.',
        chaptersToRead: 'Chapters 1 through 12',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-360-1',
        title: 'The Serotonin Theory of Depression: A Systematic Umbrella Review of the Evidence',
        authors: 'Moncrieff, J., Cooper, R. E., Stockmann, T., et al.',
        year: 2022,
        journal: 'Molecular Psychiatry, 28(8), 3243–3256',
        courseCode: 'PSY 360',
        category: 'controversial',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'Is there convincing empirical evidence that depression is caused by lowered serotonin concentrations or activity?',
        method: 'Umbrella review synthesizing systematic reviews and meta-analyses across 6 research strands (plasma 5-HT, 5-HIAA in CSF, 5-HT1A receptors, SERT binding, tryptophan depletion, 5-HTTLPR gene)',
        findings: 'Found no consistent evidence of an association between serotonin and depression, nor evidence that depression is caused by chemical imbalance.',
        importance: 'Major public and scientific firestorm prompting widespread reassessment of how antidepressants are explained to the public.',
        limitations: 'Methodological disputes over the sensitivity of CSF biomarkers; does not disprove that SSRIs exert downstream therapeutic neuroplastic effects via BDNF/TrkB.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Intensely debated; consensus acknowledges simple "chemical imbalance" was a marketing heuristic, while researchers point to neurogenesis and neuroplastic mechanisms.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-360-1',
        courseCode: 'PSY 360',
        title: 'Critical Evaluation of Moncrieff et al. (2022) and Psychiatric Responses',
        type: 'critical-evaluation',
        prompt: 'Read Moncrieff et al. (2022) alongside formal published responses from psychiatric researchers (e.g. Jauhar et al. 2023). Write a 1,500-word critical evaluation: What did the umbrella review demonstrate about serotonin biomarkers? Why do clinicians distinguish between the etiology of a disorder and the therapeutic mechanism of a drug?',
        deliverables: '1,500-word critical review paper.',
        estimatedHours: 6,
        rubricFocus: ['Separation of etiology from pharmacology (aspirin treats headache without headache being an aspirin deficiency)', 'Understanding of downstream neuroplasticity']
      },
      {
        id: 'asg-360-2',
        courseCode: 'PSY 360',
        title: 'Drug Class Mechanistic & Receptor Profile Monograph',
        type: 'paper-analysis',
        prompt: 'Select one major psychiatric drug class (e.g. Atypical Antipsychotics or Second-Generation Mood Stabilizers). Write a detailed technical monograph outlining: 1. Primary receptor binding affinities (Ki values), 2. Synaptic intracellular signaling cascade, 3. Therapeutic indications, 4. Adverse effects, 5. Comparison of efficacy vs placebo.',
        deliverables: '2,000-word detailed pharmacological monograph.',
        estimatedHours: 7,
        rubricFocus: ['Biochemical accuracy', 'Explanation of side-effect profiles via off-target receptors (H1, alpha-1, M1)']
      }
    ]
  },

  {
    id: 'psy-370',
    code: 'PSY 370',
    title: 'Research Methods IV (Meta-Analysis, Systematic Reviews, Open Science)',
    year: 3,
    semester: 6,
    difficulty: 'Advanced',
    whyIncluded: 'The pinnacle of evidence synthesis and the cornerstone of the Open Science movement in psychology.',
    prerequisites: ['PSY 320', 'PSY 330'],
    description: 'Methodology and statistics of secondary evidence synthesis: PRISMA systematic review standards, meta-analytic calculations (fixed-effect vs random-effects models), extracting effect sizes (Cohen’s d, Hedges’ g, odds ratios), forest plots, quantifying heterogeneity (Q statistic, I-squared), detecting publication bias (funnel plots, Egger’s test, p-curve), and reproducible open science practices.',
    learningObjectives: [
      'Formulate a systematic review protocol following PRISMA 2020 guidelines',
      'Compute pooled effect sizes using both fixed-effect and random-effects meta-analytic models',
      'Interpret forest plots, funnel plots, and assess between-study heterogeneity (I-squared)',
      'Critically evaluate questionable research practices (p-hacking, HARKing) and implement open science workflows'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy370-u1',
        title: 'Unit 1: Systematic Reviews & Meta-Analytic Statistics',
        order: 1,
        topics: [
          { id: 'p370-t1', title: 'Systematic review methodology & the PRISMA 2020 statement', keyConcepts: ['Search protocols', 'Inclusion/exclusion screening', 'Risk of bias assessment (Cochrane RoB 2)'] },
          { id: 'p370-t2', title: 'Effect size extraction and standardization (Cohen’s d, Hedges’ g, r)', keyConcepts: ['Small-sample correction', 'Conversion formulas', 'Weighting by inverse variance'] },
          { id: 'p370-t3', title: 'Fixed-effect vs. Random-effects meta-analytic models', keyConcepts: ['Common true effect assumption', 'Between-study variance (tau-squared)', 'Borenstein framework'] },
          { id: 'p370-t4', title: 'Forest plots & quantifying heterogeneity', keyConcepts: ['Cochran’s Q', 'I-squared percentage', 'Subgroup analysis and meta-regression'] }
        ]
      },
      {
        id: 'psy370-u2',
        title: 'Unit 2: Publication Bias, Reproducibility & Open Science',
        order: 2,
        topics: [
          { id: 'p370-t5', title: 'Publication bias & the File Drawer Problem (Rosenthal)', keyConcepts: ['Funnel plot asymmetry', 'Trim and fill method', 'Egger’s regression test'] },
          { id: 'p370-t6', title: 'P-curve analysis & detecting Questionable Research Practices (QRPs)', keyConcepts: ['Simonsohn p-curve', 'Evidential value', 'P-hacking and HARKing'] },
          { id: 'p370-t7', title: 'The Open Science Collaboration (2015) Reproducibility Project', keyConcepts: ['Replicating 100 psychology studies', '36% replication rate', 'Effect size shrinkage'] },
          { id: 'p370-t8', title: 'Registered Reports, open data, and preregistration workflows', keyConcepts: ['Peer review before results', 'Data sharing repositories (OSF)', 'TOP guidelines'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-370-1',
        title: 'Introduction to Meta-Analysis',
        authors: 'Borenstein, M., Hedges, L. V., Higgins, J. P. T., & Rothstein, H. R.',
        edition: '2nd Edition',
        year: '2021',
        courseCode: 'PSY 370',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The universally acclaimed gold standard for learning the mathematical intuition and practical execution of meta-analyses.',
        chaptersToRead: 'Chapters 1 through 15',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-370-1',
        title: 'Estimating the Reproducibility of Psychological Science',
        authors: 'Open Science Collaboration',
        year: 2015,
        journal: 'Science, 349(6251), aac4716',
        courseCode: 'PSY 370',
        category: 'controversial',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'What proportion of published experimental and correlational findings in top psychology journals replicate successfully?',
        method: 'Collaborative pre-registered direct replications of 100 empirical studies published in 2008 across 3 leading journals (JPSP, JEP:LMC, Psych Science)',
        findings: 'Whereas 97% of original studies reported statistically significant results (p < .05), only 36% of replications reached significance; mean effect size shrank by approximately half (from r = .40 to r = .20).',
        importance: 'The monumental empirical catalyst confirming the replication crisis in psychology.',
        limitations: 'Differences in statistical power and fidelity of materials between original and replication teams.',
        replicationStatus: 'Robust',
        currentInterpretation: 'The landmark scientific audit of 21st-century psychology; stimulated journal reforms, preregistration, and sample size enlargement.',
        verified: true
      },
      {
        id: 'pp-370-2',
        title: 'Psychology, Science, and Knowledge Construction: Broadening Perspectives from the Replication Crisis',
        authors: 'Shrout, P. E., & Rodgers, J. L.',
        year: 2018,
        journal: 'Annual Review of Psychology, 69, 487–510',
        courseCode: 'PSY 370',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'How can psychology reform its institutional incentives and statistical practices to build cumulative scientific knowledge?',
        method: 'Methodological and philosophical analysis of statistical power, p-values, and institutional structures',
        findings: 'Concluded that the crisis is an opportunity to replace ritualistic NHST with estimation, replication registries, and theoretical formalization.',
        importance: 'Essential forward-looking synthesis by senior psychometricians.',
        limitations: 'Conceptual review rather than an empirical study.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Widely assigned in graduate methodology seminars.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-370-1',
        courseCode: 'PSY 370',
        title: 'PRISMA Mini Systematic Review Protocol',
        type: 'lit-review',
        prompt: 'Formulate a focused empirical research question (e.g., "Does mindfulness meditation improve cognitive working memory capacity?"). Write a formal PRISMA 2020 systematic review protocol detailing: databases searched, exact boolean query syntax, inclusion/exclusion criteria, dual-screening protocol, and data extraction schema.',
        deliverables: 'PRISMA-compliant 4-page systematic review protocol.',
        estimatedHours: 8,
        rubricFocus: ['Adherence to PRISMA checklist items', 'Comprehensive search strategy', 'Explicit exclusion rules']
      },
      {
        id: 'asg-370-2',
        courseCode: 'PSY 370',
        title: 'Meta-Analysis & Forest Plot Computation Exercise',
        type: 'stats-exercise',
        prompt: 'Using a sample dataset of 8 published trials (means, standard deviations, and N for two groups): compute Hedges’ g effect sizes, within-study variances, inverse-variance weights under both fixed and random-effects models, Q heterogeneity statistic, and I^2. Construct and interpret a forest plot.',
        deliverables: 'Computational table + forest plot + written interpretation of heterogeneity.',
        estimatedHours: 6,
        rubricFocus: ['Mathematical accuracy of random-effects weights', 'Correct calculation of tau-squared and I-squared', 'Accurate forest plot visualization']
      }
    ]
  },

  // ================= YEAR 4 =================
  // Semester 7
  {
    id: 'psy-401',
    code: 'PSY 401',
    title: 'Advanced Psychopathology and Mechanisms of Mental Disorder',
    year: 4,
    semester: 7,
    difficulty: 'Honours / Capstone',
    whyIncluded: 'Senior Honours capstone in psychopathology. Moves past descriptive symptoms into transdiagnostic cognitive, computational, and neurobiological mechanisms.',
    prerequisites: ['PSY 301', 'PSY 310'],
    description: 'An advanced investigation into the mechanistic etiology of psychiatric conditions: transdiagnostic cognitive biases (attentional, interpretative, memory biases), computational psychiatry (predictive processing in psychosis), neurocircuit dysregulation (cortico-limbic, striatal), neuroinflammation, and genetic-epigenetic interactions.',
    learningObjectives: [
      'Explain transdiagnostic cognitive bias models and their behavioral assessment (dot-probe, emotional Stroop)',
      'Deconstruct computational psychiatry models of psychosis (aberrant precision of sensory priors)',
      'Analyze the evidence linking the HPA axis, systemic neuroinflammation, and treatment-resistant mood disorders',
      'Design an advanced empirical study testing a mechanistic hypothesis of disorder maintenance'
    ],
    estimatedWorkload: '14–16 hours / week',
    units: [
      {
        id: 'psy401-u1',
        title: 'Unit 1: Transdiagnostic Cognitive & Computational Mechanisms',
        order: 1,
        topics: [
          { id: 'p401-t1', title: 'Transdiagnostic cognitive models: Attentional bias, interpretation bias, memory bias', keyConcepts: ['Mathews & MacLeod', 'Cognitive bias modification (CBM)', 'Negative memory intrusions'] },
          { id: 'p401-t2', title: 'Computational Psychiatry & Predictive Processing in Psychosis', keyConcepts: ['Friston', 'Precision-weighting of prediction errors', 'Hallucinations as hyper-priors', 'Aberrant salience (Kapur)'] },
          { id: 'p401-t3', title: 'Network approach to psychopathology (Borsboom)', keyConcepts: ['Symptoms as causal networks', 'Hysteresis', 'Bridge symptoms', 'Centrality metrics'] },
          { id: 'p401-t4', title: 'RDoC (Research Domain Criteria): Negative Valence, Cognitive Systems', keyConcepts: ['Insel (2010)', 'Units of analysis (genes to circuits to behavior)', 'Decoupling from DSM categories'] }
        ]
      },
      {
        id: 'psy401-u2',
        title: 'Unit 2: Neurobiological, Stress & Epigenetic Mechanisms',
        order: 2,
        topics: [
          { id: 'p401-t5', title: 'HPA axis dysregulation, allostatic load, and glucocorticoid resistance', keyConcepts: ['McEwen', 'Dexamethasone suppression test failure', 'Hippocampal neurotoxicity'] },
          { id: 'p401-t6', title: 'Neuroinflammation and immunopsychiatry', keyConcepts: ['Microglial activation', 'Cytokines (IL-6, TNF-alpha)', 'Kynurenine pathway', 'Inflammation-induced depression'] },
          { id: 'p401-t7', title: 'Epigenetics and developmental psychopathology', keyConcepts: ['Meaney maternal licking studies', 'FKBP5 gene methylation', 'Childhood adversity gene-environment interaction'] },
          { id: 'p401-t8', title: 'Neural circuit dysfunction: Frontostriatal loops and default mode hyperactivity', keyConcepts: ['DMN rumination circuit', 'Fronto-amygdala disconnection', 'Deep brain stimulation targets'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-401-1',
        title: 'Primary Research Literature in Contemporary Psychopathology',
        authors: 'Selected papers from JAMA Psychiatry, Am J Psychiatry, Biol Psychiatry, Lancet Psychiatry',
        edition: '2020–2024 Collection',
        year: '2024',
        courseCode: 'PSY 401',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Fourth-year honours students read direct peer-reviewed experimental literature rather than secondary textbooks.',
        chaptersToRead: 'Primary research papers on transdiagnostic mechanisms and computational psychiatry',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-401-1',
        title: 'Research Domain Criteria (RDoC): Toward a New Classification Framework for Research on Mental Disorders',
        authors: 'Insel, T., Cuthbert, B., Garvey, M., et al.',
        year: 2010,
        journal: 'American Journal of Psychiatry, 167(7), 748–751',
        courseCode: 'PSY 401',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'How can psychiatric neuroscience transition from descriptive syndromal categories (DSM) to biologically grounded dimensional constructs?',
        method: 'National Institute of Mental Health (NIMH) strategic framework proposing a matrix of functional domains (Negative Valence, Positive Valence, Cognitive Systems) across biological units of analysis',
        findings: 'Demonstrated that DSM categories do not map onto discrete neurobiological substrates and argued for classifying pathology based on observable brain-behavior dimensions.',
        importance: 'Transformed psychiatric grant funding and modern clinical neuroscience study designs globally.',
        limitations: 'Underestimated the immediate clinical necessity of categorical diagnostic decisions for treatment authorization.',
        replicationStatus: 'Robust',
        currentInterpretation: 'The guiding theoretical framework for translational psychiatric research.',
        verified: true
      },
      {
        id: 'pp-401-2',
        title: 'Transdiagnostic Approaches to Mental Health Problems: Current Status and Future Directions',
        authors: 'Dalgleish, T., Black, M., Johnston, D., & Bevan, A.',
        year: 2020,
        journal: 'Journal of Consulting and Clinical Psychology, 88(3), 179–195',
        courseCode: 'PSY 401',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'What are the shared transdiagnostic psychological processes that maintain mental health problems across conventional diagnostic boundaries?',
        method: 'Theoretical taxonomy and empirical review of transdiagnostic cognitive-behavioral processes',
        findings: 'Identified core transdiagnostic processes including repetitive negative thinking (rumination/worry), attentional bias to threat, experiential avoidance, and perfectionism.',
        importance: 'Provides the empirical foundation for unified transdiagnostic protocols (e.g., Barlow Unified Protocol).',
        limitations: 'Heterogeneity in how transdiagnostic constructs are operationalized across clinical trials.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Core curriculum reading in modern honours clinical psychology.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-401-1',
        courseCode: 'PSY 401',
        title: 'Critical Review of a Specific Psychopathology Mechanism',
        type: 'lit-review',
        prompt: 'Choose one specific transdiagnostic mechanism (e.g. Attentional Bias toward threat, Aberrant Salience in early psychosis, or Rumination and Default Mode Network hyperconnectivity). Write a 2,500-word critical review of the empirical literature, evaluating: theoretical models, behavioral measurement paradigms, neural substrates, and treatment reversibility.',
        deliverables: '2,500-word honours-level critical review in APA format.',
        estimatedHours: 12,
        rubricFocus: ['Deep integration of cognitive paradigms and neuroimaging', 'Methodological critique of measurement tasks', 'APA 7 style']
      },
      {
        id: 'asg-401-2',
        courseCode: 'PSY 401',
        title: 'Mechanistic Study Experimental Proposal',
        type: 'design-exercise',
        prompt: 'Design a novel experimental study testing a mechanistic hypothesis of disorder maintenance (e.g. testing whether cognitive bias modification of interpretation changes behavioral avoidance and amygdala reactivity). Include: specific aims, hypotheses, detailed methodology, and planned statistical models.',
        deliverables: 'Complete 5-page research proposal.',
        estimatedHours: 10,
        rubricFocus: ['Clear mechanistic hypothesis', 'Rigorous experimental controls', 'Statistical analysis plan']
      }
    ]
  },

  {
    id: 'psy-410',
    code: 'PSY 410',
    title: 'Advanced Cognitive Neuroscience (Memory, Emotion, Decision-Making, Consciousness)',
    year: 4,
    semester: 7,
    difficulty: 'Honours / Capstone',
    whyIncluded: 'Explores the highest frontiers of cognitive neuroscience: memory consolidation/reconsolidation, neuroeconomics of decision-making, and theories of consciousness.',
    prerequisites: ['PSY 310'],
    description: 'Senior seminar exploring advanced topics in human brain function: memory consolidation and reconsolidation, neurobiology of fear extinction, dopamine and reward prediction error in reinforcement learning, neuroeconomics (ventromedial PFC and value computation), theories of consciousness (Global Neuronal Workspace vs Integrated Information Theory), and free will / agency.',
    learningObjectives: [
      'Explain molecular and systems memory consolidation (cellular LTP vs hippocampal-cortical dialogue)',
      'Describe the neurobiology of memory reconsolidation and its clinical translation in PTSD',
      'Explain how midbrain dopamine neurons encode reward prediction errors (Schultz) in reinforcement learning',
      'Critically compare Global Neuronal Workspace Theory (GNWT) and Integrated Information Theory (IIT) in consciousness science'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy410-u1',
        title: 'Unit 1: Memory Reconsolidation & Reinforcement Learning',
        order: 1,
        topics: [
          { id: 'p410-t1', title: 'Molecular and systems memory consolidation', keyConcepts: ['Squire', 'Cellular protein synthesis', 'Slow wave sleep reactivation', 'Sharp-wave ripples'] },
          { id: 'p410-t2', title: 'Memory reconsolidation: Nader, Dudai, and therapeutic translation', keyConcepts: ['Lability window', 'Propranolol', 'Extinction during reconsolidation'] },
          { id: 'p410-t3', title: 'Reward prediction error & dopaminergic reinforcement learning', keyConcepts: ['Schultz, Dayan & Montague (1997)', 'Ventral tegmental area (VTA)', 'Striatal D1/D2 pathways'] },
          { id: 'p410-t4', title: 'Neuroeconomics & value computation in ventromedial PFC', keyConcepts: ['Subjective value signal', 'Intertemporal choice', 'Loss aversion neural substrates'] }
        ]
      },
      {
        id: 'psy410-u2',
        title: 'Unit 2: Theories of Consciousness & Neurophilosophy',
        order: 2,
        topics: [
          { id: 'p410-t5', title: 'The Neural Correlates of Consciousness (NCC)', keyConcepts: ['Crick & Koch', 'Bistable perception', 'Binocular rivalry', 'Unconscious vs conscious processing'] },
          { id: 'p410-t6', title: 'Global Neuronal Workspace Theory (GNWT: Dehaene, Changeux)', keyConcepts: ['Parieto-frontal ignition', 'Late P3b wave', 'All-or-none conscious access'] },
          { id: 'p410-t7', title: 'Integrated Information Theory (IIT: Tononi, Koch)', keyConcepts: ['Phi metric', 'Posterior cortical hot zone', 'Phenomenological axioms'] },
          { id: 'p410-t8', title: 'Adversarial collaboration on consciousness (Cogitate Consortium)', keyConcepts: ['Preregistered adversarial testing of GNWT vs IIT', 'Anatomical predictions'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-410-1',
        title: 'Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts',
        authors: 'Dehaene, S.',
        edition: 'Reprint Edition',
        year: '2014',
        courseCode: 'PSY 410',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Brilliant exposition of the Global Neuronal Workspace theory and empirical consciousness science.',
        chaptersToRead: 'Chapters 1 through 7',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-410-1',
        title: 'A Neural Substrate of Prediction and Reward',
        authors: 'Schultz, W., Dayan, P., & Montague, P. R.',
        year: 1997,
        journal: 'Science, 275(5306), 1593–1599',
        courseCode: 'PSY 410',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Do midbrain dopamine neurons encode the delivery of reward or the mathematical prediction error between expected and received reward?',
        method: 'Single-unit electrophysiological recording of dopamine neurons in non-human primates during classical conditioning tasks',
        findings: 'Demonstrated that dopamine neurons fire not to reward delivery itself once learned, but to the conditioned stimulus, and depress firing if expected reward is omitted (reward prediction error).',
        importance: 'Founded computational neuroscience of reinforcement learning; united psychology, neurobiology, and machine learning.',
        limitations: 'Single-unit recordings primarily in primates; heterogeneity of dopamine neuron subpopulations identified in later work.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Unanimously accepted foundational bedrock of reward neuroscience.',
        verified: true
      },
      {
        id: 'pp-410-2',
        title: 'An Adversarial Collaboration to Critically Evaluate Theories of Consciousness',
        authors: 'Melloni, L., Mudrik, L., Pitts, M., & Koch, C.',
        year: 2021,
        journal: 'Science, 372(6545), 910–912',
        courseCode: 'PSY 410',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'Can proponents of GNWT and IIT agree in advance on specific empirical tests to falsify their respective theories of consciousness?',
        method: 'Multicenter multimodal (fMRI, MEG, intracranial EEG) preregistered adversarial collaboration protocol',
        findings: 'Formalized decisive contrasting predictions: GNWT predicts late frontoparietal ignition; IIT predicts sustained posterior cortical activation.',
        importance: 'Exemplary model of rigorous open-science adversarial collaboration tackling controversial theoretical questions.',
        limitations: 'Multi-year data collection timeline; interpretation disputes remain possible.',
        replicationStatus: 'Robust',
        currentInterpretation: 'The leading contemporary benchmark for consciousness research.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-410-1',
        courseCode: 'PSY 410',
        title: 'Adversarial Theories of Consciousness Comparative Paper',
        type: 'essay',
        prompt: 'Critically compare Global Neuronal Workspace Theory (GNWT) and Integrated Information Theory (IIT). Address: 1. Core axioms and definitions of consciousness, 2. Hypothesized anatomical substrates (frontoparietal network vs posterior hot zone), 3. Temporal predictions (late P3b ignition vs continuous posterior resonance), 4. Implications of recent adversarial collaboration findings.',
        deliverables: '2,000-word honours-level theoretical evaluation.',
        estimatedHours: 8,
        rubricFocus: ['Deep conceptual accuracy of both models', 'Analysis of the Cogitate Consortium findings', 'Philosophical clarity']
      },
      {
        id: 'asg-410-2',
        courseCode: 'PSY 410',
        title: 'Cognitive Neuroscience Experiment Design Protocol',
        type: 'design-exercise',
        prompt: 'Design an advanced cognitive neuroscience experiment testing whether memory reconsolidation can be disrupted pharmacologically or behaviorally in humans. Detail the behavioral reminder cue, timing of the intervention during the 6-hour lability window, and objective psychophysiological/fMRI outcome measures.',
        deliverables: 'Complete 4-page experimental design proposal.',
        estimatedHours: 6,
        rubricFocus: ['Rigorous understanding of the boundary conditions of reconsolidation', 'Valid control groups']
      }
    ]
  },

  {
    id: 'psy-420',
    code: 'PSY 420',
    title: 'Thesis Seminar I (Research Question, Literature Review, Proposal)',
    year: 4,
    semester: 7,
    difficulty: 'Honours / Capstone',
    whyIncluded: 'First half of the honours thesis capstone. Focuses on formulating a novel empirical research question, conducting a comprehensive literature review, and writing a defensible proposal.',
    prerequisites: ['PSY 370'],
    description: 'Senior honours thesis seminar: selecting a viable research domain, formulating testable empirical hypotheses, conducting exhaustive bibliographic literature reviews, designing rigorous quantitative or experimental methodologies, addressing institutional ethics, and submitting a formal 10–15 page thesis proposal.',
    learningObjectives: [
      'Formulate a precise, falsifiable research question that addresses an identifiable gap in psychological science',
      'Synthesize 30+ peer-reviewed empirical papers into a coherent thematic literature review',
      'Develop an airtight quantitative or experimental methodology with power calculations and planned statistical analyses',
      'Produce a complete 10–15 page honours thesis proposal adhering strictly to APA 7th edition standards'
    ],
    estimatedWorkload: '16–20 hours / week',
    units: [
      {
        id: 'psy420-u1',
        title: 'Unit 1: The Research Question & Literature Review',
        order: 1,
        topics: [
          { id: 'p420-t1', title: 'Identifying scientific gaps & formulating falsifiable hypotheses', keyConcepts: ['Theoretical justification', 'Feasibility assessment', 'Specific aims'] },
          { id: 'p420-t2', title: 'Literature review strategy and thematic synthesis', keyConcepts: ['Organizing by theme not study-by-study', 'Critical evaluation of prior methods'] },
          { id: 'p420-t3', title: 'Methodological design, operationalization & power analysis', keyConcepts: ['A priori G*Power calculation', 'Sampling strategy', 'Instrumentation validation'] }
        ]
      },
      {
        id: 'psy420-u2',
        title: 'Unit 2: Ethics, Analysis Plan & Formal Proposal Defense',
        order: 2,
        topics: [
          { id: 'p420-t4', title: 'Research ethics, IRB protocol preparation & risk mitigation', keyConcepts: ['Informed consent documentation', 'Confidentiality', 'Vulnerable populations'] },
          { id: 'p420-t5', title: 'Pre-specifying data analysis plans and outlier protocols', keyConcepts: ['Primary vs secondary outcomes', 'Data cleaning rules', 'Preregistration draft'] },
          { id: 'p420-t6', title: 'Writing and structuring the 10–15 page thesis proposal', keyConcepts: ['APA proposal structure', 'Anticipated results', 'Timeline milestones'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-420-1',
        title: 'The Psychologist’s Companion: A Guide to Professional Success for Researchers',
        authors: 'Sternberg, R. J., & Sternberg, K.',
        edition: '6th Edition',
        year: '2016',
        courseCode: 'PSY 420',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Practical advice on writing proposals, conceptualizing research questions, and avoiding common thesis traps.',
        chaptersToRead: 'Chapters 1 through 10',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-420-1',
        title: 'How to Choose a Good Scientific Problem',
        authors: 'Alon, U.',
        year: 2009,
        journal: 'Molecular Cell, 35(6), 726–728',
        courseCode: 'PSY 420',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What criteria define a scientific problem that balances feasibility with genuine intellectual and societal impact?',
        method: 'Reflective framework modeling feasibility vs. interest dimensions and navigating the "cloud" of research uncertainty',
        findings: 'Provided a two-dimensional schema (Feasibility x Importance) helping scholars avoid safe triviality or impossible dead-ends.',
        importance: 'Seminal guide for developing independent research projects.',
        limitations: 'General science perspective rather than specific to psychometric datasets.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universally recommended reading for doctoral and honours thesis candidates.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-420-1',
        courseCode: 'PSY 420',
        title: 'Formal Honours Thesis Research Proposal',
        type: 'mini-project',
        prompt: 'Produce a complete 10–15 page honours thesis proposal in APA 7th edition format. Sections must include: Title Page, Abstract, Introduction & Thematic Literature Review (minimum 25 empirical citations), Specific Hypotheses, Method (Participants, Design, Materials, Detailed Procedure), Planned Statistical Analysis & Power Calculation, Ethical Considerations, and References.',
        deliverables: 'Complete 10–15 page formal honours thesis proposal document.',
        estimatedHours: 35,
        rubricFocus: ['Compelling theoretical justification of hypotheses', 'Airtight experimental or survey methodology', 'Flawless APA 7 formatting']
      }
    ]
  },

  // Semester 8
  {
    id: 'psy-430',
    code: 'PSY 430',
    title: 'Thesis Seminar II (Data Analysis, Writing, Presentation)',
    year: 4,
    semester: 8,
    difficulty: 'Honours / Capstone',
    whyIncluded: 'The ultimate culmination of the four-year Psychology degree. Data analysis, writing the comprehensive 5,000+ word thesis, and oral/poster presentation.',
    prerequisites: ['PSY 420'],
    description: 'Senior honours thesis completion seminar: executing statistical analyses (or analyzing open secondary datasets), interpreting findings against original hypotheses, writing the Discussion and Limitations sections, assembling the complete 5,000+ word thesis document, and presenting findings in an academic poster and viva defense.',
    learningObjectives: [
      'Execute planned statistical analyses, report effect sizes, and generate publication-quality figures',
      'Write a comprehensive 5,000+ word honours thesis adhering to international journal publishing standards',
      'Critically discuss methodological limitations and theoretical implications without over-claiming',
      'Defend thesis findings in a mock viva voce oral examination and present a scientific poster'
    ],
    estimatedWorkload: '18–22 hours / week',
    units: [
      {
        id: 'psy430-u1',
        title: 'Unit 1: Data Analysis & The Results Section',
        order: 1,
        topics: [
          { id: 'p430-t1', title: 'Data cleaning, screening for assumptions, and missing data handling', keyConcepts: ['Normality checks', 'Outlier management', 'Reporting transparency'] },
          { id: 'p430-t2', title: 'Executing primary hypothesis testing and secondary exploratory models', keyConcepts: ['Effect size calculation', 'Confidence interval generation', 'APA statistical tables'] },
          { id: 'p430-t3', title: 'Creating publication-quality data visualizations', keyConcepts: ['Scatterplots with regression lines', 'Raincloud plots', 'Bar graphs with error bars'] }
        ]
      },
      {
        id: 'psy430-u2',
        title: 'Unit 2: Discussion, Viva Defense & Scientific Poster',
        order: 2,
        topics: [
          { id: 'p430-t4', title: 'Writing the Discussion section: Contextualizing findings', keyConcepts: ['Answering the original question', 'Reconciling unexpected results', 'Theoretical advance'] },
          { id: 'p430-t5', title: 'Writing thorough limitations and future directions', keyConcepts: ['Internal and external validity boundaries', 'Measurement constraints', 'Constructive next steps'] },
          { id: 'p430-t6', title: 'Poster presentation design and oral viva defense preparation', keyConcepts: ['Clear visual hierarchy', 'Defending methodology', 'Explaining findings to non-specialists'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-430-1',
        title: 'The Psychologist’s Companion (Continued)',
        authors: 'Sternberg, R. J., & Sternberg, K.',
        edition: '6th Edition',
        year: '2016',
        courseCode: 'PSY 430',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Guidance on writing results, discussions, presenting posters, and defending research.',
        chaptersToRead: 'Chapters 11 through 15 (Results, Discussion, Presentations)',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-430-1',
        title: 'Writing the Empirical Journal Article',
        authors: 'Bem, D. J.',
        year: 2003,
        journal: 'The Compleat Academic (APA Books), 171–201',
        courseCode: 'PSY 430',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What rhetorical and structural principles create an engaging, rigorous empirical psychology journal article?',
        method: 'Writing guide and pedagogical framework for structuring empirical reports',
        findings: 'Outlined the hourglass model of academic writing (broad opening -> narrow empirical focus -> broad scientific discussion).',
        importance: 'The most famous and widely assigned writing guide in experimental psychology.',
        limitations: 'Bem’s advice on post-hoc storytelling must be tempered by modern preregistration standards against HARKing.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal stylistic standard, updated with modern open science transparency principles.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-430-1',
        courseCode: 'PSY 430',
        title: 'Complete Honours-Level Bachelor’s Thesis',
        type: 'mini-project',
        prompt: 'Write and assemble the complete honours bachelor’s thesis (minimum 5,000 words). Full structure: Title Page, Abstract (250 words), Introduction, Thematic Literature Review, Method, Results (with tables and figures), Discussion, Limitations, Future Directions, and References.',
        deliverables: '5,000+ word final honours thesis document in APA format.',
        estimatedHours: 50,
        rubricFocus: ['Methodological rigor', 'Clarity and depth of Discussion', 'Complete APA 7 compliance']
      },
      {
        id: 'asg-430-2',
        courseCode: 'PSY 430',
        title: 'Scientific Poster & Viva Defense Presentation',
        type: 'essay',
        prompt: 'Create a scientific research conference poster summarizing your thesis (Introduction, Method, Results with visual graphs, Conclusions). Prepare and self-record an 8-minute oral viva presentation defending your methodology and answering potential critiques.',
        deliverables: 'Scientific poster file + 8-minute recorded presentation transcript.',
        estimatedHours: 10,
        rubricFocus: ['Visual clarity of poster', 'Composure and rigor in answering methodological challenges']
      }
    ]
  }
];

export const ADVANCED_ELECTIVES: Course[] = [
  {
    id: 'psy-451',
    code: 'PSY 451',
    title: 'Evolutionary Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'Advanced elective exploring natural selection, adaptation, mating strategies, kin selection, and evolutionary mismatch theories.',
    prerequisites: ['PSY 101', 'PSY 240'],
    description: 'The adaptationist paradigm applied to human mental architecture: sexual selection, parental investment theory (Trivers), cooperation, reciprocal altruism, modularity of mind, and modern evolutionary mismatches.',
    learningObjectives: [
      'Explain adaptationist logic and distinguish adaptations from byproducts and noise',
      'Analyze empirical evidence on human mating strategies and sexual selection',
      'Critically evaluate the massive modularity hypothesis and its critics'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy451-u1',
        title: 'Unit 1: Natural Selection & Human Evolutionary History',
        order: 1,
        topics: [
          { id: 'p451-t1', title: 'Adaptationism, natural selection, and sexual selection', keyConcepts: ['Fitness', 'Exaptations', 'Spandrels (Gould)'] },
          { id: 'p451-t2', title: 'Mating strategies: Parental Investment Theory & sexual conflict', keyConcepts: ['Trivers', 'Short-term vs long-term mating', 'Mate preferences'] },
          { id: 'p451-t3', title: 'Cooperation, kin selection, and reciprocal altruism', keyConcepts: ['Hamilton rule', 'Axelrod prisoner dilemma', 'Cheater detection module'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-451-1',
        title: 'Evolutionary Psychology: The New Science of the Mind',
        authors: 'Buss, D. M.',
        edition: '6th Edition',
        year: '2019',
        courseCode: 'PSY 451',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The premier authoritative textbook on evolutionary psychology.',
        chaptersToRead: 'Chapters 1 through 8',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-451-1',
        courseCode: 'PSY 451',
        title: 'Evolutionary Mismatch Paper',
        type: 'essay',
        prompt: 'Analyze a modern behavioral phenomenon (e.g. social media anxiety or ultra-processed food consumption) using the evolutionary mismatch framework. Evaluate whether adaptationist claims can be rigorously falsified.',
        deliverables: '1,500-word critical evaluation.',
        estimatedHours: 6,
        rubricFocus: ['Falsifiability of evolutionary claims', 'Accurate application of EEA (Environment of Evolutionary Adaptedness)']
      }
    ]
  },
  {
    id: 'psy-452',
    code: 'PSY 452',
    title: 'Cultural Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'Advanced elective investigating how culture shapes cognition, self-concept, and emotion.',
    prerequisites: ['PSY 101', 'PSY 220'],
    description: 'Empirical cross-cultural psychology: the WEIRD sample critique (Henrich et al.), independent vs interdependent self-construals (Markus & Kitayama), holistic vs analytic cognitive styles, and cultural neuroscience.',
    learningObjectives: [
      'Deconstruct the WEIRD problem in psychological research and evaluate generalizability claims',
      'Contrast independent and interdependent self-construal across cultures',
      'Explain cultural differences in visual perception, categorization, and attribution'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy452-u1',
        title: 'Unit 1: Cross-Cultural Cognition & Self-Construal',
        order: 1,
        topics: [
          { id: 'p452-t1', title: 'The WEIRD Problem: Western, Educated, Industrialized, Rich, Democratic', keyConcepts: ['Henrich et al. (2010)', 'Sampling bias in psychology'] },
          { id: 'p452-t2', title: 'Independent vs. Interdependent Self-Construals', keyConcepts: ['Markus & Kitayama', 'Relational identity', 'Social harmony vs autonomy'] },
          { id: 'p452-t3', title: 'Holistic vs. Analytic cognition & cultural perception', keyConcepts: ['Nisbett', 'Context sensitivity', 'Attribution styles across cultures'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-452-1',
        title: 'Cultural Psychology',
        authors: 'Heine, S. J.',
        edition: '4th Edition',
        year: '2020',
        courseCode: 'PSY 452',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The standard textbook synthesizing experimental cultural psychological science.',
        chaptersToRead: 'Chapters 1 through 10',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-452-1',
        courseCode: 'PSY 452',
        title: 'Audit of WEIRD Sampling in Top Psychology Journals',
        type: 'paper-analysis',
        prompt: 'Select 5 recent empirical papers from a top journal. Audit the participant samples: geographic location, education, demographics. Evaluate whether the authors over-generalized their findings to "human nature".',
        deliverables: '1,500-word audit report.',
        estimatedHours: 5,
        rubricFocus: ['Accurate tracking of participant origins', 'Critique of generalization claims']
      }
    ]
  },
  {
    id: 'psy-453',
    code: 'PSY 453',
    title: 'Health Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'Bridges behavioral science with physical health, psychoneuroimmunology, and behavioral medicine.',
    prerequisites: ['PSY 101', 'PSY 120'],
    description: 'The biopsychosocial model applied to physical disease: psychoneuroimmunology, chronic stress, cardiovascular disease, pain management, health behavior change models, and patient adherence.',
    learningObjectives: [
      'Explain the biological mechanisms linking chronic psychological stress to immune suppression and vascular pathology',
      'Apply health behavior change models (Health Belief Model, Theory of Planned Behavior)',
      'Evaluate non-pharmacological interventions in chronic pain and illness management'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy453-u1',
        title: 'Unit 1: Psychoneuroimmunology & Chronic Illness',
        order: 1,
        topics: [
          { id: 'p453-t1', title: 'Psychoneuroimmunology: Stress, cytokines, and cellular immunity', keyConcepts: ['Sapolsky', 'Cortisol and immune suppression', 'Wound healing studies'] },
          { id: 'p453-t2', title: 'Behavioral medicine in cardiovascular disease and chronic pain', keyConcepts: ['Type A controversy', 'Sympathetic overactivation', 'Pain gate modulation'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-453-1',
        title: 'Health Psychology: A Biopsychosocial Approach',
        authors: 'Straub, R. O.',
        edition: '6th Edition',
        year: '2019',
        courseCode: 'PSY 453',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Rigorous integration of physiology, epidemiology, and clinical behavioral interventions.',
        chaptersToRead: 'Core chapters on Stress and Immune Function',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-453-1',
        courseCode: 'PSY 453',
        title: 'Psychoneuroimmunology Intervention Design',
        type: 'design-exercise',
        prompt: 'Design an evidence-based behavioral intervention to improve immune parameters (e.g. antibody response to vaccination or inflammatory markers) in chronically stressed caregivers.',
        deliverables: '1,500-word intervention protocol.',
        estimatedHours: 5,
        rubricFocus: ['Measurement of physiological endpoints', 'Feasibility and ethical design']
      }
    ]
  },
  {
    id: 'psy-454',
    code: 'PSY 454',
    title: 'Industrial/Organizational Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The science of human behavior in workplace, team, and organizational environments.',
    prerequisites: ['PSY 101', 'PSY 240'],
    description: 'Personnel selection psychometrics, structured interviewing, job performance modeling, leadership theories, organizational culture, job satisfaction, and burnout.',
    learningObjectives: [
      'Evaluate the predictive validity of cognitive ability (g), personality, and structured interviews in employee selection',
      'Explain job characteristics theory and organizational motivation models',
      'Analyze the systemic causes and interventions for workplace burnout'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy454-u1',
        title: 'Unit 1: Personnel Selection & Workplace Dynamics',
        order: 1,
        topics: [
          { id: 'p454-t1', title: 'Personnel selection psychometrics & Schmidt & Hunter meta-analyses', keyConcepts: ['Predictive validity of g (r=.51)', 'Work sample tests', 'Structured interviews'] },
          { id: 'p454-t2', title: 'Organizational motivation, job design, and occupational burnout', keyConcepts: ['Hackman & Oldham', 'Maslach Burnout Inventory', 'Equity theory'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-454-1',
        title: 'Work in the 21st Century: An Introduction to Industrial and Organizational Psychology',
        authors: 'Landy, F. J., & Conte, J. M.',
        edition: '6th Edition',
        year: '2019',
        courseCode: 'PSY 454',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The benchmark industrial/organizational psychology textbook.',
        chaptersToRead: 'Chapters on Personnel Decisions and Motivation',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-454-1',
        courseCode: 'PSY 454',
        title: 'Evidence-Based Selection System Protocol',
        type: 'design-exercise',
        prompt: 'Design a valid, bias-minimized personnel selection system for a high-complexity role, integrating general cognitive ability, conscientiousness, and structured behavioral interview rubrics.',
        deliverables: '1,500-word selection protocol.',
        estimatedHours: 5,
        rubricFocus: ['Psychometric validity evidence', 'Adverse impact mitigation']
      }
    ]
  },
  {
    id: 'psy-455',
    code: 'PSY 455',
    title: 'Educational Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The science of learning, memory consolidation in education, instruction design, and learning styles debunking.',
    prerequisites: ['PSY 101', 'PSY 201'],
    description: 'Applying cognitive science to instructional design: the testing effect (retrieval practice), spaced practice, cognitive load theory (Sweller), growth mindset empirical status, and the scientific debunking of "learning styles".',
    learningObjectives: [
      'Explain cognitive load theory (intrinsic, extraneous, germane) in instructional multimedia design',
      'Analyze the testing effect and spacing effect in durable educational retention',
      'Critically evaluate the empirical evidence refuting the meshing hypothesis of "learning styles"'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy455-u1',
        title: 'Unit 1: Cognitive Science of Learning',
        order: 1,
        topics: [
          { id: 'p455-t1', title: 'Cognitive Load Theory & Multimedia Learning (Sweller, Mayer)', keyConcepts: ['Split-attention effect', 'Modality effect', 'Working memory limits'] },
          { id: 'p455-t2', title: 'Durable learning principles: Retrieval practice, interleaving, spacing', keyConcepts: ['Roediger & Karpicke', 'Desirable difficulties (Bjork)', 'Flashcards'] },
          { id: 'p455-t3', title: 'Neuromyths in education: The Learning Styles Debunking (Pashler et al.)', keyConcepts: ['Meshing hypothesis failure', 'Educational pseudoscience'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-455-1',
        title: 'Applying Science of Learning in Education',
        authors: 'Benassi, V. A., Overson, C. E., & Hakala, C. M. (Eds.)',
        edition: 'Open Access Edition (Society for the Teaching of Psychology)',
        year: '2014',
        courseCode: 'PSY 455',
        type: 'Primary',
        priority: 'FREE',
        whyItMatters: 'Peer-reviewed open textbook translating laboratory memory findings to classroom interventions.',
        chaptersToRead: 'Chapters on Spacing, Retrieval Practice, and Learning Styles',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-455-1',
        courseCode: 'PSY 455',
        title: 'Curricular Redesign Using Desirable Difficulties',
        type: 'design-exercise',
        prompt: 'Select a traditional educational syllabus and redesign its study activities to implement spacing, retrieval practice, and interleaving while eliminating debunked learning styles.',
        deliverables: '1,500-word curriculum redesign paper.',
        estimatedHours: 5,
        rubricFocus: ['Concrete application of testing effect', 'Sweller cognitive load principles']
      }
    ]
  },
  {
    id: 'psy-456',
    code: 'PSY 456',
    title: 'Forensic Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The intersection of psychological science, criminal behavior, and the legal system.',
    prerequisites: ['PSY 101', 'PSY 240'],
    description: 'Psychology within criminal and civil jurisprudence: psychopathy assessment (PCL-R), risk assessment instruments (VRAG, HCR-20), eyewitness identification procedures, false confessions, and the insanity defense.',
    learningObjectives: [
      'Contrast psychopathy (Hare PCL-R) with DSM Antisocial Personality Disorder',
      'Explain actuarial vs clinical risk assessment of violent re-offending',
      'Analyze the psychological mechanisms producing coerced-compliant and coerced-internalized false confessions'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy456-u1',
        title: 'Unit 1: Criminal Psychopathy & Legal Psychology',
        order: 1,
        topics: [
          { id: 'p456-t1', title: 'Psychopathy assessment: Hare PCL-R Factor 1 and Factor 2', keyConcepts: ['Affective/interpersonal vs antisocial lifestyle', 'Brain correlates (paralimbic)'] },
          { id: 'p456-t2', title: 'The psychology of false confessions: Reid technique interrogation', keyConcepts: ['Kassin', 'Minimization and maximization', 'Vulnerability factors'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-456-1',
        title: 'Forensic Psychology',
        authors: 'Pozzulo, J., Bennell, C., & Forth, A.',
        edition: '6th Edition',
        year: '2021',
        courseCode: 'PSY 456',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Standard forensic text balancing empirical research with legal court case evaluations.',
        chaptersToRead: 'Chapters on Interrogations, Eyewitness Testimony, and Psychopathy',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-456-1',
        courseCode: 'PSY 456',
        title: 'Interrogation Technique & False Confession Evaluation',
        type: 'critical-evaluation',
        prompt: 'Analyze a documented case of false confession (e.g. Central Park Five). Evaluate how specific psychological interrogation techniques (Reid technique) exploited cognitive vulnerabilities to elicit a false admission.',
        deliverables: '1,500-word forensic case analysis.',
        estimatedHours: 5,
        rubricFocus: ['Identification of maximization/minimization', 'Legal and psychometric reforms']
      }
    ]
  },
  {
    id: 'psy-457',
    code: 'PSY 457',
    title: 'Judgment and Decision-Making',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The cognitive science of human choice, heuristics, behavioral economics, and bounded rationality.',
    prerequisites: ['PSY 101', 'PSY 201'],
    description: 'Normative vs descriptive decision models: Kahneman & Tversky heuristics and biases, Prospect Theory, bounded rationality (Simon), nudge theory (Thaler), and intertemporal choice.',
    learningObjectives: [
      'Explain Prospect Theory (value function S-curve, loss aversion, probability weighting)',
      'Analyze cognitive heuristics: availability, representativeness, anchoring-and-adjustment',
      'Critique libertarian paternalism and nudge interventions in public policy'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy457-u1',
        title: 'Unit 1: Heuristics, Biases & Prospect Theory',
        order: 1,
        topics: [
          { id: 'p457-t1', title: 'Expected Utility Theory violations & Prospect Theory', keyConcepts: ['Kahneman & Tversky (1979)', 'Loss aversion (losses loom larger than gains)', 'Framing effects'] },
          { id: 'p457-t2', title: 'Heuristics and Biases program: Anchoring, Representativeness, Availability', keyConcepts: ['Conjunction fallacy (Linda problem)', 'Base-rate neglect'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-457-1',
        title: 'Judgment in Managerial Decision Making',
        authors: 'Bazerman, M. H., & Moore, D. A.',
        edition: '8th Edition',
        year: '2012',
        courseCode: 'PSY 457',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Classic text bridging cognitive decision science with practical evaluation.',
        chaptersToRead: 'Chapters 1 through 6',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-457-1',
        courseCode: 'PSY 457',
        title: 'Prospect Theory Experimental Replication',
        type: 'design-exercise',
        prompt: 'Design a survey experiment testing framing effects (gain vs loss frame) on risk preferences in a medical or financial decision scenario. Include calculations of expected value and predicted risk aversion vs risk seeking.',
        deliverables: '1,500-word experimental design with questionnaire items.',
        estimatedHours: 5,
        rubricFocus: ['Precise operationalization of framing', 'Prospect theory mathematical curvature explanation']
      }
    ]
  },
  {
    id: 'psy-458',
    code: 'PSY 458',
    title: 'Consciousness Studies',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The philosophical and empirical investigation into phenomenal consciousness, qualia, and the mind-body problem.',
    prerequisites: ['PSY 101', 'PSY 310'],
    description: 'The "hard problem" of consciousness (Chalmers), physicalism vs dualism, higher-order thought theories, split-brain phenomena, altered states of consciousness, psychedelics research, and panpsychism.',
    learningObjectives: [
      'Formulate Chalmers’ "hard problem" and distinguish it from the "easy problems" of cognitive science',
      'Evaluate split-brain evidence regarding unity of conscious experience',
      'Explain psychedelic neuroscience mechanisms (5-HT2A receptor agonism and DMN disintegration)'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy458-u1',
        title: 'Unit 1: The Philosophy and Neuroscience of Qualia',
        order: 1,
        topics: [
          { id: 'p458-t1', title: 'The Hard Problem of Consciousness & Explanatory Gap', keyConcepts: ['Chalmers', 'Qualia', 'Philosophical zombies', 'Mary the Color Scientist (Jackson)'] },
          { id: 'p458-t2', title: 'Altered states of consciousness and psychedelic neuroscience', keyConcepts: ['Carhart-Harris REBUS model', 'Default Mode Network entropy'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-458-1',
        title: 'Consciousness: An Introduction',
        authors: 'Blackmore, S., & Troscianko, E. T.',
        edition: '3rd Edition',
        year: '2018',
        courseCode: 'PSY 458',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Engaging, balanced coverage of the hard problem, illusions of free will, and animal consciousness.',
        chaptersToRead: 'Chapters on The Hard Problem, The Brain, and Altered States',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-458-1',
        courseCode: 'PSY 458',
        title: 'Essay: The Hard Problem and Physicalism',
        type: 'essay',
        prompt: 'Evaluate whether physicalist cognitive neuroscience can ever fully solve Chalmers’ Hard Problem of Consciousness. Contrast physicalist functionalism with dualism or panpsychism.',
        deliverables: '1,500-word philosophical and neuroscience essay.',
        estimatedHours: 6,
        rubricFocus: ['Philosophical rigor', 'Integration of empirical neuroscience NCC data']
      }
    ]
  },
  {
    id: 'psy-459',
    code: 'PSY 459',
    title: 'Comparative Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The study of animal behavior, cognition, and evolutionary continuities across species.',
    prerequisites: ['PSY 101', 'PSY 260'],
    description: 'Animal mind and cognition across species: episodic memory in scrub jays, tool use in primates and corvids, theory of mind in chimpanzees, communication in cetaceans, and Morgan’s Canon.',
    learningObjectives: [
      'Apply Morgan’s Canon to avoid anthropomorphic over-attribution in animal cognition',
      'Evaluate experimental evidence for non-human episodic memory (Clayton & Dickinson)',
      'Analyze comparative communication systems and the boundaries of human linguistic uniqueness'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy459-u1',
        title: 'Unit 1: Animal Cognition & Social Intelligence',
        order: 1,
        topics: [
          { id: 'p459-t1', title: 'Morgan’s Canon, anthropomorphism, and comparative methodology', keyConcepts: ['Occam’s razor in animal behavior', 'Tinbergen 4 questions'] },
          { id: 'p459-t2', title: 'Animal tool use, episodic-like memory, and theory of mind', keyConcepts: ['New Caledonian crows', 'Scrub jay caching', 'Mirror self-recognition test'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-459-1',
        title: 'Animal Cognition: The Science of Animal Thinking',
        authors: 'Wynne, C. D. L., & Udell, M. A. R.',
        edition: '3rd Edition',
        year: '2020',
        courseCode: 'PSY 459',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Superbly written, scientifically rigorous treatment of animal minds.',
        chaptersToRead: 'Chapters on Perception, Memory, and Social Cognition',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-459-1',
        courseCode: 'PSY 459',
        title: 'Comparative Cognition Experimental Critique',
        type: 'paper-analysis',
        prompt: 'Critically analyze a published claim of "theory of mind" or "metacognition" in non-human animals. Apply Morgan’s Canon: can the findings be explained by simpler associative conditioning?',
        deliverables: '1,500-word critical evaluation.',
        estimatedHours: 5,
        rubricFocus: ['Strict application of Morgan’s Canon', 'Associative conditioning alternative hypotheses']
      }
    ]
  },
  {
    id: 'psy-460',
    code: 'PSY 460',
    title: 'Positive Psychology',
    year: 4,
    semester: 7,
    difficulty: 'Advanced',
    isElective: true,
    whyIncluded: 'The empirical science of well-being, strengths, flourishing, and human resilience.',
    prerequisites: ['PSY 101', 'PSY 240'],
    description: 'Empirical science of optimal functioning: subjective well-being measurement, hedonic adaptation, character strengths (VIA classification), Seligman’s PERMA model, resilience, and the critical evaluation of positive interventions.',
    learningObjectives: [
      'Explain the components of Subjective Well-Being (SWB) and hedonic adaptation (treadmill)',
      'Analyze the empirical evidence for positive psychology interventions (three good things, gratitude visits)',
      'Critically evaluate methodological limitations and effect-size inflation in early positive psychology claims'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy460-u1',
        title: 'Unit 1: Well-Being Measurement & Interventions',
        order: 1,
        topics: [
          { id: 'p460-t1', title: 'Subjective well-being, hedonic treadmill, and the Easterlin paradox', keyConcepts: ['Diener', 'Set-point theory', 'Affective balance vs life satisfaction'] },
          { id: 'p460-t2', title: 'Seligman’s PERMA Model & empirical intervention trials', keyConcepts: ['Positive Emotion, Engagement, Relationships, Meaning, Accomplishment', 'Gratitude RCTs'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-460-1',
        title: 'Positive Psychology: The Science of Happiness and Human Strengths',
        authors: 'Carr, A.',
        edition: '3rd Edition',
        year: '2022',
        courseCode: 'PSY 460',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Evidence-based academic textbook separating empirical findings from self-help claims.',
        chaptersToRead: 'Chapters on Happiness, Strengths, and Resilience',
        verified: true
      }
    ],
    papers: [],
    assignments: [
      {
        id: 'asg-460-1',
        courseCode: 'PSY 460',
        title: 'Positive Intervention RCT Methodological Audit',
        type: 'critical-evaluation',
        prompt: 'Select a published randomized controlled trial of a positive psychology intervention (e.g. gratitude journaling or mindfulness app). Audit its sample size, control group (passive vs active placebo), and long-term durability of gains.',
        deliverables: '1,500-word critical audit.',
        estimatedHours: 5,
        rubricFocus: ['Scrutiny of effect size durability', 'Critique of self-selection bias']
      }
    ]
  }
];
