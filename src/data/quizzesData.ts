import { QuizQuestion, FlashcardItem } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-stat-1',
    courseCode: 'PSY 230',
    topicId: 'p230-t4',
    category: 'statistical-test-selection',
    difficulty: 'intermediate',
    question:
      'A cognitive psychologist tests whether a new working-memory training program improves digit span. She measures the digit span of 40 participants before the 4-week training and then measures the same 40 participants immediately after completion. Which statistical test is most appropriate to evaluate whether digit span changed significantly?',
    options: [
      'Independent-samples t-test',
      'Paired-samples (repeated-measures) t-test',
      'One-way between-subjects ANOVA',
      'Pearson product-moment correlation coefficient'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Because the same participants are measured twice (pre-test and post-test), the two sets of observations are dependent/paired. Therefore, a paired-samples (dependent) t-test is the appropriate test to analyze mean differences within subjects.',
    verified: true
  },
  {
    id: 'q-neuro-1',
    courseCode: 'PSY 310',
    topicId: 'p310-t4',
    category: 'methodological-critique',
    difficulty: 'advanced',
    question:
      'An fMRI study reports that viewing images of consumer products activated the anterior insular cortex. The authors conclude: "Because the anterior insula activates during physical pain, viewing these high prices caused genuine physical pain in the participants." Which fundamental methodological fallacy does this conclusion commit?',
    options: [
      'The ecological fallacy',
      'Reverse inference',
      'Selection bias',
      'Simpson’s paradox'
    ],
    correctAnswerIndex: 1,
    explanation:
      'As demonstrated by Poldrack (2006), inferring a specific mental state (e.g., pain) from the activation of a brain region (e.g., anterior insula) is the fallacy of reverse inference. Because the anterior insula is activated across dozens of disparate tasks (including disgust, empathy, risk anticipation, and general salience), its activation does not uniquely confirm physical pain.',
    verified: true
  },
  {
    id: 'q-psych-1',
    courseCode: 'PSY 301',
    topicId: 'p301-t5',
    category: 'empirical-findings',
    difficulty: 'intermediate',
    question:
      'According to Eiko Fried’s (2017) analysis of common depression rating scales (e.g., HAM-D, BDI, PHQ-9), what did he discover regarding symptom overlap across scales?',
    options: [
      'All 7 depression rating scales shared identical 9 core DSM symptoms in equal proportions.',
      'The scales contained 52 distinct symptoms with surprisingly low item overlap, meaning two patients diagnosed with MDD can share zero overlapping symptoms.',
      'Depression rating scales primarily measure anxiety rather than mood.',
      'Depression scales have perfect unidimensional psychometric factor structure.'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Fried (2017) demonstrated profound measurement heterogeneity in depression research: across seven common depression scales, 52 unique symptoms appeared, and 40% appeared on only one scale. Due to DSM polythetic criteria, two individuals can qualify for MDD without sharing any identical symptoms.',
    verified: true
  },
  {
    id: 'q-cog-1',
    courseCode: 'PSY 201',
    topicId: 'p201-t1',
    category: 'theorist-matching',
    difficulty: 'intermediate',
    question:
      'In Baddeley and Hitch’s multi-component model of working memory, which component is responsible for binding information from the phonological loop, visuospatial sketchpad, and long-term memory into coherent multimodal episodes?',
    options: [
      'The Central Executive',
      'The Episodic Buffer',
      'The Articulatory Loop',
      'The Inner Scribe'
    ],
    correctAnswerIndex: 1,
    explanation:
      'The Episodic Buffer was introduced by Baddeley in 2000 to account for the integration of temporary multimodal sensory representations with long-term memory into chronologically sequenced representations.',
    verified: true
  },
  {
    id: 'q-open-1',
    courseCode: 'PSY 370',
    topicId: 'p370-t7',
    category: 'empirical-findings',
    difficulty: 'intermediate',
    question:
      'In the 2015 Open Science Collaboration reproducibility project which replicated 100 psychology studies, what was the approximate percentage of original findings that successfully replicated with statistical significance (p < .05)?',
    options: [
      '95%',
      '72%',
      '36%',
      '12%'
    ],
    correctAnswerIndex: 2,
    explanation:
      'Whereas 97% of the original studies reported statistically significant positive results, only 36% of the preregistered direct replications achieved statistical significance, and average effect sizes shrank by nearly 50%.',
    verified: true
  },
  {
    id: 'q-dev-1',
    courseCode: 'PSY 210',
    topicId: 'p210-t2',
    category: 'key-terms',
    difficulty: 'intermediate',
    question:
      'In Mary Ainsworth’s Strange Situation procedure, an infant who displays disoriented behavior upon the mother’s return—such as freezing, approaching with head averted, or showing sudden apprehension toward the caregiver—is classified as exhibiting:',
    options: [
      'Secure attachment (Type B)',
      'Insecure-Avoidant attachment (Type A)',
      'Insecure-Resistant/Ambivalent attachment (Type C)',
      'Disorganized/Disoriented attachment (Type D)'
    ],
    correctAnswerIndex: 3,
    explanation:
      'Main & Solomon (1986) identified Disorganized attachment (Type D) characterized by the absence of an organized coping strategy. The infant experiences the parent as both the source of biological safety and the source of fear (fright without solution).',
    verified: true
  },
  {
    id: 'q-social-1',
    courseCode: 'PSY 220',
    topicId: 'p220-t1',
    category: 'key-terms',
    difficulty: 'beginner',
    question:
      'The tendency for observers to underestimate the impact of situational factors and overestimate the influence of internal dispositional factors when explaining another person’s behavior is known as:',
    options: [
      'The Self-Serving Bias',
      'The Fundamental Attribution Error',
      'Confirmation Bias',
      'The Bystander Effect'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Formulated by Lee Ross (1977), the Fundamental Attribution Error (or correspondence bias) describes our systematic tendency to explain others’ actions through stable internal personality traits while downplaying powerful situational pressures.',
    verified: true
  },
  {
    id: 'q-pharm-1',
    courseCode: 'PSY 360',
    topicId: 'p360-t3',
    category: 'empirical-findings',
    difficulty: 'advanced',
    question:
      'Moncrieff et al.’s (2022) systematic umbrella review in Molecular Psychiatry concluded which of the following regarding the biological serotonin hypothesis of depression?',
    options: [
      'Depression is definitively caused by reduced 5-HT1A receptor density across the cerebral cortex.',
      'There is no consistent empirical evidence supporting an association between serotonin deficiency and depression, indicating that depression is not simply a chemical serotonin deficit.',
      'Antidepressants work exclusively through immediate 2-hour serotonin elevation and have no downstream neuroplastic actions.',
      'Plasma tryptophan depletion reliably triggers clinical major depressive episodes in all healthy adults.'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Moncrieff et al. synthesized decades of research (plasma 5-HT, CSF metabolites, SERT binding, gene associations) and found no consistent empirical evidence that depression is caused by lowered serotonin concentrations or activity, prompting scientific consensus to move toward neuroplasticity (BDNF/TrkB) models.',
    verified: true
  }
];

export const FLASHCARD_DECK: FlashcardItem[] = [
  {
    id: 'fc-1',
    courseCode: 'PSY 105',
    front: 'What is Operationalization?',
    back: 'The process of defining an unobservable, abstract psychological construct (e.g. anxiety, memory capacity, aggression) in terms of specific, concrete, measurable empirical operations or variables.',
    keyConcept: 'Measurement Validity',
    difficulty: 'easy'
  },
  {
    id: 'fc-2',
    courseCode: 'PSY 201',
    front: 'What is the Testing Effect (Retrieval Practice)?',
    back: 'The empirical finding that actively retrieving information from memory (such as taking a practice test or answering flashcards) produces substantially superior long-term retention compared to passive restudying of the material (Roediger & Karpicke, 2006).',
    keyConcept: 'Durable Learning',
    difficulty: 'easy'
  },
  {
    id: 'fc-3',
    courseCode: 'PSY 230',
    front: 'What does a p-value actually represent?',
    back: 'The probability of observing data as extreme as, or more extreme than, the observed sample result, assuming that the null hypothesis (H0) is true. It does NOT indicate the probability that H0 is true, nor the probability that H1 is false.',
    keyConcept: 'Inferential Statistics',
    difficulty: 'medium'
  },
  {
    id: 'fc-4',
    courseCode: 'PSY 301',
    front: 'What are Robins & Guze’s (1970) 5 criteria for psychiatric diagnostic validity?',
    back: '1. Clinical description (symptom cluster & demographics)\n2. Laboratory studies (biomarkers, psychological tests)\n3. Delimitation from other disorders (exclusion criteria)\n4. Follow-up study (consistent longitudinal clinical course)\n5. Family studies (elevated prevalence in biological relatives)',
    keyConcept: 'Nosology & Validity',
    difficulty: 'hard'
  },
  {
    id: 'fc-5',
    courseCode: 'PSY 310',
    front: 'What is the BOLD signal in fMRI, and what is its temporal limitation?',
    back: 'Blood Oxygen Level Dependent contrast: measures the ratio of oxygenated to deoxygenated hemoglobin following local neural metabolic demand. Its temporal resolution is constrained by the hemodynamic response function (HRF), which lags neural firing by 4–6 seconds.',
    keyConcept: 'Neuroimaging Biophysics',
    difficulty: 'hard'
  },
  {
    id: 'fc-6',
    courseCode: 'PSY 320',
    front: 'What is the difference between a Mediator and a Moderator?',
    back: '• Mediator: Explains the theoretical mechanism (HOW or WHY X leads to Y; the indirect path X -> M -> Y).\n• Moderator: Specifies the boundary condition (WHEN, FOR WHOM, or UNDER WHAT CIRCUMSTANCES the relation between X and Y varies; an interaction effect).',
    keyConcept: 'Multivariable Modeling',
    difficulty: 'medium'
  },
  {
    id: 'fc-7',
    courseCode: 'PSY 350',
    front: 'What is a Double Dissociation in neuropsychology?',
    back: 'A demonstration that Patient A has lesion in Region 1 and is impaired on Task X but normal on Task Y, while Patient B has lesion in Region 2 and is impaired on Task Y but normal on Task X. It provides conclusive evidence that Tasks X and Y rely on anatomically distinct cognitive modules.',
    keyConcept: 'Cognitive Neuropsychology',
    difficulty: 'hard'
  },
  {
    id: 'fc-8',
    courseCode: 'PSY 370',
    front: 'What is HARKing and why is it harmful?',
    back: 'Hypothesizing After the Results are Known (Kerr, 1998): Presenting a post-hoc exploratory finding discovered during data analysis as if it were an a priori confirmatory hypothesis. It disguises exploratory fishing as rigorous deduction and severely inflates false-positive rates.',
    keyConcept: 'Open Science & QRPs',
    difficulty: 'medium'
  }
];
