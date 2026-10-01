import { Course } from '../types';

export const ALL_COURSES: Course[] = [
  // ================= YEAR 1 =================
  // Semester 1
  {
    id: 'psy-101',
    code: 'PSY 101',
    title: 'Introduction to Psychological Science',
    year: 1,
    semester: 1,
    difficulty: 'Introductory',
    whyIncluded: 'Gateway course. Establishes the scientific method, biological basis of behaviour, and a systematic map of the discipline.',
    prerequisites: ['None'],
    description: 'A comprehensive survey of psychological science, exploring mental processes and behaviour through empirical inquiry, neurobiology, cognition, social dynamics, and developmental trajectories.',
    learningObjectives: [
      'Define psychology as an empirical science and contrast it with folk psychology',
      'Explain the scientific method, hypothesis testing, and operational definitions',
      'Describe major subfields and their theoretical integration',
      'Identify the biological underpinnings of perception, cognition, and action',
      'Read a basic empirical research paper and summarize its method and conclusions'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy101-u1',
        title: 'Unit 1: Foundations & Scientific Method',
        order: 1,
        topics: [
          { id: 'p101-t1', title: 'History of psychology as an empirical science', keyConcepts: ['Wundt', 'Functionalism', 'Structuralism', 'Epistemology'] },
          { id: 'p101-t2', title: 'The scientific method & falsifiability', keyConcepts: ['Popper', 'Hypothesis formulation', 'Operationalization'] },
          { id: 'p101-t3', title: 'Descriptive, correlational, and experimental designs', keyConcepts: ['Third-variable problem', 'Directionality', 'Random assignment'] },
          { id: 'p101-t4', title: 'Research ethics & the IRB process', keyConcepts: ['Informed consent', 'Deception', 'Debriefing', 'Belmont Report'] }
        ]
      },
      {
        id: 'psy101-u2',
        title: 'Unit 2: Biological Bases & Sensation',
        order: 2,
        topics: [
          { id: 'p101-t5', title: 'Biological foundations: Neurons, glia & transmission', keyConcepts: ['Action potential', 'Synaptic gap', 'Neurotransmitters'] },
          { id: 'p101-t6', title: 'Gross neuroanatomy & brain localization', keyConcepts: ['Cortex lobes', 'Limbic system', 'Brainstem'] },
          { id: 'p101-t7', title: 'Sensation vs. perception & psychophysics', keyConcepts: ['Absolute threshold', 'Signal detection', 'Transduction'] },
          { id: 'p101-t8', title: 'Consciousness, sleep architecture & circadian rhythms', keyConcepts: ['REM sleep', 'Sleep stages', 'Attentional awareness'] }
        ]
      },
      {
        id: 'psy101-u3',
        title: 'Unit 3: Learning, Memory & Cognition',
        order: 3,
        topics: [
          { id: 'p101-t9', title: 'Classical & operant conditioning mechanisms', keyConcepts: ['Pavlov', 'Reinforcement schedules', 'Extinction'] },
          { id: 'p101-t10', title: 'Memory stages: Encoding, storage, and retrieval', keyConcepts: ['Atkinson-Shiffrin', 'Working memory', 'Forgetting curves'] },
          { id: 'p101-t11', title: 'Thinking, heuristics, language acquisition', keyConcepts: ['Availability heuristic', 'Representativeness', 'Chomsky vs. Skinner'] },
          { id: 'p101-t12', title: 'Intelligence theories & psychometric measurement', keyConcepts: ['Spearman g', 'Gardner', 'WAIS standardization'] }
        ]
      },
      {
        id: 'psy101-u4',
        title: 'Unit 4: Development, Social & Clinical Overview',
        order: 4,
        topics: [
          { id: 'p101-t13', title: 'Lifespan developmental psychology', keyConcepts: ['Piagetian stages', 'Attachment styles', 'Erikson'] },
          { id: 'p101-t14', title: 'Social influence, conformity & group behavior', keyConcepts: ['Asch', 'Bystander effect', 'Fundamental attribution error'] },
          { id: 'p101-t15', title: 'Overview of psychological disorders', keyConcepts: ['Biopsychosocial model', 'DSM-5-TR concept', 'Stigma'] },
          { id: 'p101-t16', title: 'Evidence-based treatment approaches', keyConcepts: ['Psychotherapy modalities', 'Pharmacotherapy', 'Placebo effects'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-101-1',
        title: 'Psychology',
        authors: 'Schacter, D. L., Gilbert, D. T., Nock, M. K., & Wegner, D. M.',
        edition: '5th Edition',
        year: '2020',
        courseCode: 'PSY 101',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Written by preeminent Harvard scientists; sets gold standard for rigor, clarity, and integration of evolutionary and cognitive perspectives.',
        chaptersToRead: 'Chapters 1 through 16 (Full volume cover-to-cover survey)',
        verified: true
      },
      {
        id: 'tb-101-2',
        title: 'Introduction to Psychology',
        authors: 'Stangor, C., & Walinga, J.',
        edition: 'Open Textbook Edition',
        year: '2014',
        courseCode: 'PSY 101',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'Peer-reviewed open educational textbook with excellent chapter summaries and self-quizzing questions.',
        chaptersToRead: 'Complete units on Research Methods, Biological, and Cognitive Psychology',
        freeUrl: 'https://open.umn.edu/opentextbooks/textbooks/introduction-to-psychology',
        verified: true
      },
      {
        id: 'tb-101-3',
        title: 'Psychology',
        authors: 'Gray, P., & Bjorklund, D. F.',
        edition: '8th Edition',
        year: '2018',
        courseCode: 'PSY 101',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Superb evolutionary and comparative biology emphasis throughout all major branches of psychology.',
        chaptersToRead: 'Chapters on Foundations of Psychology and Biological Bases',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-101-1',
        title: 'Thinking Like a Psychological Scientist',
        authors: 'Biswas-Diener, R.',
        year: 2020,
        journal: 'Noba Project Psychology Modules',
        courseCode: 'PSY 101',
        category: 'foundational',
        priority: 'FREE',
        researchQuestion: 'What constitutes scientific reasoning versus intuition in human behavior study?',
        method: 'Pedagogical synthesis and empirical review of scientific thinking errors',
        findings: 'Systematic observation, inductive/deductive reasoning, and peer scrutiny are essential to overcome confirmation bias.',
        importance: 'Introduces students to rigorous empirical skepticism and hypothesis falsification.',
        limitations: 'Introductory overview without primary trial dataset.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Foundational framework taught in modern psychology pedagogy.',
        verified: true,
        link: 'https://nobaproject.com'
      }
    ],
    assignments: [
      {
        id: 'asg-101-1',
        courseCode: 'PSY 101',
        title: 'Chapter Active Recall Summaries',
        type: 'short-answer',
        prompt: 'After reading each core chapter, close all notes and write a 200-word active-recall synthesis detailing the central paradigm, empirical methods, and major caveats.',
        deliverables: 'Written 200-word concise synthesis for 4 major modules.',
        estimatedHours: 4,
        rubricFocus: ['Accuracy of concepts', 'Absence of textbook quoting', 'Clear operational terminology']
      },
      {
        id: 'asg-101-2',
        courseCode: 'PSY 101',
        title: 'Media Claim vs. Empirical Paper Audit',
        type: 'critical-evaluation',
        prompt: 'Locate a mainstream journalism headline making a psychological claim (e.g. in NYT, BBC, or Guardian). Trace it to the primary empirical publication. Evaluate whether the authors’ actual methodology and effect size genuinely support the popular headline.',
        deliverables: '2-page critical evaluation comparing media headlines to primary study results.',
        estimatedHours: 6,
        rubricFocus: ['Identification of original peer-reviewed paper', 'Analysis of causal overstatements', 'Critique of sample size and effect size']
      }
    ]
  },

  {
    id: 'psy-105',
    code: 'PSY 105',
    title: 'History and Systems of Psychology',
    year: 1,
    semester: 1,
    difficulty: 'Introductory',
    whyIncluded: 'To understand why psychology thinks the way it does today, one must understand its intellectual history and paradigm shifts.',
    prerequisites: ['None'],
    description: 'An intellectual history of psychological thought, from structuralism and early psychoanalysis to radical behaviourism, the cognitive revolution, and modern neural syntheses.',
    learningObjectives: [
      'Trace major theoretical paradigm shifts from late 19th-century physiology to 21st-century cognitive neuroscience',
      'Explain why behaviourism eclipsed structuralism and why cognitive science subsequently replaced radical behaviourism',
      'Evaluate the epistemological and scientific status of psychodynamic theory',
      'Critically analyze primary foundational papers from Watson, Skinner, and Chomsky'
    ],
    estimatedWorkload: '8–10 hours / week',
    units: [
      {
        id: 'psy105-u1',
        title: 'Unit 1: The Emergence of Scientific Psychology',
        order: 1,
        topics: [
          { id: 'p105-t1', title: 'Philosophical antecedents: Rationalism vs. Empiricism', keyConcepts: ['Descartes', 'Locke', 'Hume', 'Kant'] },
          { id: 'p105-t2', title: 'Physiological roots & psychophysics', keyConcepts: ['Helmholtz', 'Weber', 'Fechner'] },
          { id: 'p105-t3', title: 'Wundt’s Leipzig laboratory & structuralism', keyConcepts: ['Introspection', 'Titchener', 'Sensory elements'] },
          { id: 'p105-t4', title: 'William James & American functionalism', keyConcepts: ['Stream of consciousness', 'Pragmatism', 'Evolutionary utility'] }
        ]
      },
      {
        id: 'psy105-u2',
        title: 'Unit 2: The Behaviourist Ascendancy',
        order: 2,
        topics: [
          { id: 'p105-t5', title: 'Pavlov & Thorndike: Reflexes and the Law of Effect', keyConcepts: ['Conditioned reflexes', 'Puzzle boxes', 'S-R associations'] },
          { id: 'p105-t6', title: 'Watson’s Behaviourist Manifesto (1913)', keyConcepts: ['Rejection of consciousness', 'Prediction and control', 'Little Albert'] },
          { id: 'p105-t7', title: 'Skinner & Radical Behaviourism', keyConcepts: ['Operant chamber', 'Explanatory fictions', 'Schedules of reinforcement'] },
          { id: 'p105-t8', title: 'Gestalt psychology: Critique of atomism', keyConcepts: ['Wertheimer', 'Koffka', 'Köhler', 'Insight learning'] }
        ]
      },
      {
        id: 'psy105-u3',
        title: 'Unit 3: Psychoanalysis, Humanism & The Cognitive Turn',
        order: 3,
        topics: [
          { id: 'p105-t9', title: 'Freud, psychoanalysis, and scientific demarcation', keyConcepts: ['Popper’s critique', 'Unconscious dynamics', 'Defense mechanisms'] },
          { id: 'p105-t10', title: 'Humanistic psychology: Rogers and Maslow', keyConcepts: ['Self-actualization', 'Phenomenology', 'Unconditional positive regard'] },
          { id: 'p105-t11', title: 'The Cognitive Revolution & information processing', keyConcepts: ['Broadbent', 'Miller', 'Neisser (1967)', 'Computer metaphor'] },
          { id: 'p105-t12', title: 'Chomsky’s 1959 critique of Skinner’s Verbal Behavior', keyConcepts: ['Poverty of the stimulus', 'Universal grammar', 'Mental representations'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-105-1',
        title: 'A Brief History of Modern Psychology',
        authors: 'Benjamin, L. T., Jr.',
        edition: '3rd Edition',
        year: '2019',
        courseCode: 'PSY 105',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Authoritative, accessible survey of the experimental discipline’s institutional and conceptual growth.',
        chaptersToRead: 'Chapters 1 through 10',
        verified: true
      },
      {
        id: 'tb-105-2',
        title: 'A History of Psychology: From Antiquity to Modernity',
        authors: 'Leahey, T. H.',
        edition: '7th Edition',
        year: '2018',
        courseCode: 'PSY 105',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Deep philosophical and historiographical analysis framed around Thomas Kuhn’s structure of scientific revolutions.',
        chaptersToRead: 'Chapters on Behaviourism and The Cognitive Revolution',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-105-1',
        title: 'Psychology as the Behaviorist Views It',
        authors: 'Watson, J. B.',
        year: 1913,
        journal: 'Psychological Review, 20(2), 158–177',
        courseCode: 'PSY 105',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Can psychology become a purely objective experimental branch of natural science without introspection?',
        method: 'Theoretical manifesto and critique of introspectionist psychophysics',
        findings: 'Argued that consciousness is untestable; psychology’s goal must be prediction and control of observable behavior.',
        importance: 'The seminal founding document of American Behaviourism.',
        limitations: 'Dogmatic dismissal of internal mental states later disproven by cognitive and neuroscience methods.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Historical landmark; recognized as an over-correction that nonetheless catalyzed methodological rigor.',
        verified: true,
        link: 'https://psychclassics.yorku.ca/Watson/views.htm'
      },
      {
        id: 'pp-105-2',
        title: 'Are Theories of Learning Necessary?',
        authors: 'Skinner, B. F.',
        year: 1950,
        journal: 'Psychological Review, 57(4), 193–216',
        courseCode: 'PSY 105',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Do hypothetical constructs or physiological models improve the functional analysis of behaviour?',
        method: 'Cumulative record data analysis of operant conditioning curves in animals',
        findings: 'Maintained that mentalistic intervening variables distract from direct functional relations between stimuli and responses.',
        importance: 'Solidified radical behaviourist epistemology against Hullian and Tolmanian theoretical modeling.',
        limitations: 'Underestimated computational and neural constraints on learning.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Foundational for applied behaviour analysis, though cognitive modeling replaced its epistemological claims.',
        verified: true
      },
      {
        id: 'pp-105-3',
        title: 'A Review of B. F. Skinner’s Verbal Behavior',
        authors: 'Chomsky, N.',
        year: 1959,
        journal: 'Language, 35(1), 26–58',
        courseCode: 'PSY 105',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Can human language acquisition and creative syntax be accounted for by operant stimulus-response conditioning?',
        method: 'Linguistic, logical, and empirical critique of Skinnerian concepts in language',
        findings: 'Demonstrated that reinforcement and stimulus control are vacuous when applied to generative grammar and novel sentences.',
        importance: 'Generally recognized as the catalyst of the Cognitive Revolution.',
        limitations: 'Focused primarily on syntax rather than social-pragmatic language usage.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Unanimously treated as a classic devastating critique of radical behaviourism in complex human cognition.',
        verified: true
      },
      {
        id: 'pp-105-4',
        title: 'The Cognitive Revolution: A Historical Perspective',
        authors: 'Miller, G. A.',
        year: 2003,
        journal: 'Trends in Cognitive Sciences, 7(3), 141–144',
        courseCode: 'PSY 105',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'How did linguistics, computing, and cognitive psychology converge in the 1950s?',
        method: 'Historical analysis and firsthand reflection by one of its primary founders',
        findings: 'The revolution was not merely anti-behaviourist but an interdisciplinary convergence that created modern cognitive science.',
        importance: 'Essential overview from an intellectual leader who participated in the shift.',
        limitations: 'Reflective memoir-style historical paper rather than an empirical trial.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Standard historiographical reference for the genesis of cognitive science.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-105-1',
        courseCode: 'PSY 105',
        title: 'Essay: Revolution or Evolution?',
        type: 'essay',
        prompt: 'Was the Cognitive Revolution a genuine Kuhnian paradigm revolution or an evolutionary broadening of experimental psychology? Argue referencing Watson (1913), Skinner (1950), and Chomsky (1959).',
        deliverables: '1,500-word scholarly essay in APA style.',
        estimatedHours: 8,
        rubricFocus: ['Use of primary citations', 'Clear thesis statement', 'Balanced consideration of continuous methodological inheritance']
      },
      {
        id: 'asg-105-2',
        courseCode: 'PSY 105',
        title: 'Psychology Theoretical Shifts Timeline',
        type: 'mini-project',
        prompt: 'Create a chronological structural breakdown of psychology’s 5 major theoretical shifts (Structuralism, Psychoanalysis, Behaviourism, Humanism, Cognitive Revolution). Detail the precipitating anomalies that broke each prior paradigm.',
        deliverables: 'Visual and textual comparative chart with paragraph justification per paradigm.',
        estimatedHours: 5,
        rubricFocus: ['Accurate dates and key publications', 'Identification of fatal theoretical anomalies']
      }
    ]
  },

  {
    id: 'psy-110',
    code: 'PSY 110',
    title: 'Academic Skills for Psychology',
    year: 1,
    semester: 1,
    difficulty: 'Introductory',
    whyIncluded: 'Self-study fails without deliberate skill-building. This course teaches how to read, write, and research like a working psychology scholar.',
    prerequisites: ['None'],
    description: 'Practical training in scientific literacy: deciphering IMRaD empirical structures, bibliographic searching (PsycINFO, PubMed, Google Scholar), APA 7th edition formatting, and academic integrity.',
    learningObjectives: [
      'Deconstruct an empirical paper into Question, Method, Results, Interpretation, and Limitations in 10 minutes',
      'Construct advanced boolean search queries in PubMed and Google Scholar',
      'Master APA 7th edition referencing for journal articles, book chapters, and preprints',
      'Paraphrase complex empirical claims without patchwriting or inadvertent plagiarism'
    ],
    estimatedWorkload: '6–8 hours / week',
    units: [
      {
        id: 'psy110-u1',
        title: 'Unit 1: Reading Empirical Papers & The IMRaD Format',
        order: 1,
        topics: [
          { id: 'p110-t1', title: 'The anatomy of a research report (Abstract to Discussion)', keyConcepts: ['IMRaD', 'Peer review', 'Preprints'] },
          { id: 'p110-t2', title: 'Rapid extraction strategies for statistical and methodological claims', keyConcepts: ['Sampling size', 'Effect size', 'P-value check'] },
          { id: 'p110-t3', title: 'Distinguishing empirical findings from author interpretations', keyConcepts: ['Over-claiming', 'Null findings', 'Generalizability'] }
        ]
      },
      {
        id: 'psy110-u2',
        title: 'Unit 2: Academic Search & Bibliographic Management',
        order: 2,
        topics: [
          { id: 'p110-t4', title: 'Search syntax: Boolean operators, MeSH terms, and citation chaining', keyConcepts: ['Backward chaining', 'Forward citations', 'Grey literature'] },
          { id: 'p110-t5', title: 'Reference manager workflow (Zotero, BibTeX)', keyConcepts: ['Metadata cleanup', 'PDF annotations', 'Citation libraries'] },
          { id: 'p110-t6', title: 'APA 7th Edition style, in-text citations & reference list', keyConcepts: ['DOI links', 'Parenthetical citations', 'Bias-free language'] },
          { id: 'p110-t7', title: 'Academic integrity, synthesis, and avoiding patchwriting', keyConcepts: ['Synthesizing sources', 'Paraphrasing', 'Plagiarism boundary'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-110-1',
        title: 'Purdue OWL APA Style 7th Edition Guide',
        authors: 'Purdue Online Writing Lab',
        edition: '7th Edition Web Guide',
        year: '2023',
        courseCode: 'PSY 110',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'The universally recognized authoritative reference for APA citation, formatting, and tables.',
        chaptersToRead: 'General Format, In-Text Citations, Reference List Articles and Books',
        freeUrl: 'https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/index.html',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-110-1',
        title: 'How to Read a Scientific Paper',
        authors: 'Carey, M. A., Lichtenstein, D. L., & Kumar, H.',
        year: 2020,
        journal: 'Annals of the American Thoracic Society / PLOS Computational Biology',
        courseCode: 'PSY 110',
        category: 'foundational',
        priority: 'FREE',
        researchQuestion: 'What is the optimal non-linear procedure for deconstructing peer-reviewed empirical papers?',
        method: 'Systematic pedagogical workflow breakdown',
        findings: 'Reading figures, tables, and methodology before discussion sections prevents anchored bias from author commentary.',
        importance: 'Crucial reading skill for independent scholars.',
        limitations: 'General scientific guide not specific to psychometrics.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Widely endorsed pedagogical practice.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-110-1',
        courseCode: 'PSY 110',
        title: 'One-Page Empirical Paper Extraction',
        type: 'paper-analysis',
        prompt: 'Select any recent empirical psychology paper. Complete a strict 1-page structured breakdown: 1. Research Question, 2. Method & Sample, 3. Key Quantitative Findings, 4. Interpretation, 5. Methodological Limitations.',
        deliverables: '1-page structured breakdown in markdown or PDF.',
        estimatedHours: 4,
        rubricFocus: ['Separation of findings from commentary', 'Identification of effect size and limitations']
      },
      {
        id: 'asg-110-2',
        courseCode: 'PSY 110',
        title: 'Literature Search & Zotero Collection',
        type: 'short-answer',
        prompt: 'Formulate a search question on a specific psychological topic. Execute a Boolean search string, export 5 relevant primary empirical papers into Zotero, and generate an error-free APA 7th edition reference list with DOIs.',
        deliverables: 'Search query log + formatted APA 7th reference list.',
        estimatedHours: 3,
        rubricFocus: ['Valid Boolean syntax', 'Correct APA 7 DOI formatting']
      }
    ]
  },

  // Semester 2
  {
    id: 'psy-120',
    code: 'PSY 120',
    title: 'Biological Psychology (Neurons to Behaviour)',
    year: 1,
    semester: 2,
    difficulty: 'Introductory',
    whyIncluded: 'You cannot understand behaviour without understanding the physical brain. It provides the essential neurobiological foundation for cognitive neuroscience and psychopharmacology.',
    prerequisites: ['PSY 101'],
    description: 'Investigation of the neurobiological substrates of mind: electrochemical signalling, neuroanatomy, neurotransmitter pharmacology, sensory-motor neurobiology, and behavioural genetics.',
    learningObjectives: [
      'Describe the molecular mechanisms of resting potential, action potential, and synaptic release',
      'Map major central and peripheral neuroanatomical structures and their functional connections',
      'Explain the synthesis, receptor binding, and termination mechanisms of major neurotransmitter systems',
      'Analyze gene-environment interactions (epigenetics) and behavioural genetics methodologies'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy120-u1',
        title: 'Unit 1: Cellular & Molecular Neurobiology',
        order: 1,
        topics: [
          { id: 'p120-t1', title: 'Neuron morphology, glia, and the blood-brain barrier', keyConcepts: ['Astrocytes', 'Microglia', 'Myelin sheath', 'Nodes of Ranvier'] },
          { id: 'p120-t2', title: 'Electrophysiology: Resting potential & Action potential', keyConcepts: ['Na+/K+ pump', 'Voltage-gated channels', 'Refractory periods'] },
          { id: 'p120-t3', title: 'Synaptic transmission: Exocytosis and receptor binding', keyConcepts: ['Vesicles', 'SNARE complex', 'EPSPs and IPSPs', 'Spatial/temporal summation'] },
          { id: 'p120-t4', title: 'Neurotransmitters: Monoamines, amino acids, and peptides', keyConcepts: ['Dopamine', 'Serotonin', 'GABA', 'Glutamate', 'Acetylcholine'] }
        ]
      },
      {
        id: 'psy120-u2',
        title: 'Unit 2: Neuroanatomy & Systems Neurobiology',
        order: 2,
        topics: [
          { id: 'p120-t5', title: 'Gross neuroanatomy: Forebrain, midbrain, hindbrain', keyConcepts: ['Cerebral cortex', 'Basal ganglia', 'Limbic system', 'Cerebellum'] },
          { id: 'p120-t6', title: 'The autonomic nervous system & endocrine axis', keyConcepts: ['Sympathetic', 'Parasympathetic', 'HPA axis', 'Cortisol'] },
          { id: 'p120-t7', title: 'Neural development, neurogenesis, and synaptogenesis', keyConcepts: ['Neural tube', 'Pruning', 'Critical periods', 'Adult neurogenesis'] },
          { id: 'p120-t8', title: 'Behavioural genetics & epigenetic mechanisms', keyConcepts: ['Twin designs', 'Heritability estimates', 'DNA methylation', 'Histone modification'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-120-1',
        title: 'Biological Psychology',
        authors: 'Breedlove, S. M., & Watson, N. V.',
        edition: '13th Edition',
        year: '2020',
        courseCode: 'PSY 120',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Clear illustrations and rigorous integration of molecular mechanisms with observable animal and human behaviour.',
        chaptersToRead: 'Chapters 1 through 8 (Cells, electrical signals, synaptic chemistry, anatomy)',
        verified: true
      },
      {
        id: 'tb-120-2',
        title: 'Biological Psychology',
        authors: 'Rosenzweig, M. R., Leiman, A. L., & Breedlove, S. M.',
        edition: 'Classic Edition',
        year: '1999',
        courseCode: 'PSY 120',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Historic masterwork by pioneer of neuroplasticity and environmental enrichment.',
        chaptersToRead: 'Selected chapters on Brain Plasticity and Enrichment',
        verified: true
      },
      {
        id: 'tb-120-3',
        title: 'MIT OpenCourseWare 9.01: Introduction to Neuroscience',
        authors: 'MIT Department of Brain and Cognitive Sciences',
        edition: 'Free Course Series',
        year: '2021',
        courseCode: 'PSY 120',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'Comprehensive open university lecture video modules with problem sets and exam solutions.',
        chaptersToRead: 'Lectures 1–12 (Cellular neuroscience & sensory processing)',
        freeUrl: 'https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-120-1',
        title: 'Neurogenesis in the Adult Human Hippocampus',
        authors: 'Eriksson, P. S., Perfilieva, E., Björk-Eriksson, T., et al.',
        year: 1998,
        journal: 'Nature Medicine, 4(11), 1313–1317',
        courseCode: 'PSY 120',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Does the adult human brain generate new neurons in the dentate gyrus of the hippocampus?',
        method: 'Post-mortem examination of cancer patients who received BrdU (thymidine analog incorporated into dividing cells)',
        findings: 'Confirmed the presence of BrdU-positive new neurons in the adult human dentate gyrus, overturning the dogma of fixed adult brain cells.',
        importance: 'Revolutionized understanding of adult neural plasticity.',
        limitations: 'Small post-mortem sample of elderly oncology patients; quantified extent of ongoing neurogenesis remains debated.',
        replicationStatus: 'Partially Replicated / Context-Dependent',
        currentInterpretation: 'Generally accepted that adult hippocampal neurogenesis occurs in humans, though rates decline with age and controversy over measurement persists (e.g. Sorrells et al. 2018 vs. Boldrini et al. 2018).',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-120-1',
        courseCode: 'PSY 120',
        title: 'Neuron & Action Potential Diagrammatic Reconstruction',
        type: 'short-answer',
        prompt: 'From memory, draw and label a complete neuron showing dendrites, soma, axon hillock, myelin sheath, nodes of Ranvier, and axon terminal. Accompany with a graph of membrane potential over time (mV) detailing the opening and inactivation of Na+ and K+ channels.',
        deliverables: 'Labeled diagram + 300-word step-by-step description of ionic fluxes.',
        estimatedHours: 4,
        rubricFocus: ['Accurate threshold values (-55mV, +30mV, -70mV)', 'Correct role of refractory periods']
      },
      {
        id: 'asg-120-2',
        courseCode: 'PSY 120',
        title: 'Synaptic Mechanism of SSRIs Explanation',
        type: 'critical-evaluation',
        prompt: 'Write an explanatory essay (800 words) describing the exact mechanism of a Selective Serotonin Reuptake Inhibitor (SSRI) at the 5-HT synapse (vesicular storage, SERT inhibition, autoreceptor desensitization, neurotrophic hypothesis). Aim your tone at an educated non-specialist.',
        deliverables: '800-word scholarly explanation addressing both immediate synaptic and delayed downstream therapeutic effects.',
        estimatedHours: 5,
        rubricFocus: ['Accuracy of synaptic protein targets', 'Explanation of therapeutic delay (neuroplasticity vs. simple transmitter boost)']
      }
    ]
  },

  {
    id: 'psy-130',
    code: 'PSY 130',
    title: 'Statistics for Behavioural Sciences I',
    year: 1,
    semester: 2,
    difficulty: 'Introductory',
    whyIncluded: 'Statistics is non-negotiable. Top universities require empirical statistics by the end of sophomore year to evaluate any scientific claim.',
    prerequisites: ['Basic algebra'],
    description: 'An introduction to descriptive and foundational inferential statistics: central tendency, variability, probability theory, the normal distribution, sampling distributions, z-scores, Pearson correlation, and the core logic of hypothesis testing.',
    learningObjectives: [
      'Calculate and correctly interpret measures of central tendency and variability',
      'Apply the Central Limit Theorem and understand sampling distribution behavior',
      'Transform raw scores into standard z-scores and calculate normal curve probabilities',
      'Compute Pearson r and Spearman rho; articulate why correlation does not imply causation',
      'Define null hypothesis significance testing (NHST), alpha, Type I and Type II errors, and what a p-value genuinely represents'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy130-u1',
        title: 'Unit 1: Descriptive Statistics & Data Distributions',
        order: 1,
        topics: [
          { id: 'p130-t1', title: 'Scales of measurement: Nominal, ordinal, interval, ratio', keyConcepts: ['Stevens scales', 'Discrete vs continuous', 'Data types'] },
          { id: 'p130-t2', title: 'Measures of central tendency: Mean, median, mode & skewness', keyConcepts: ['Outlier sensitivity', 'Bimodal', 'Positive/negative skew'] },
          { id: 'p130-t3', title: 'Measures of variability: Sum of squares, variance, standard deviation', keyConcepts: ['Degrees of freedom (n-1)', 'IQR', 'Standard error'] },
          { id: 'p130-t4', title: 'Standardized distributions: z-scores & area under normal curve', keyConcepts: ['Standard normal', 'Empirical rule (68-95-99.7)', 'Percentiles'] }
        ]
      },
      {
        id: 'psy130-u2',
        title: 'Unit 2: Probability, Correlation & Hypothesis Testing Logic',
        order: 2,
        topics: [
          { id: 'p130-t5', title: 'Basic probability, permutations, and combinations', keyConcepts: ['Multiplication rule', 'Addition rule', 'Conditional probability'] },
          { id: 'p130-t6', title: 'The Central Limit Theorem & distribution of sample means', keyConcepts: ['Standard error of the mean', 'Sample size effect'] },
          { id: 'p130-t7', title: 'Correlation: Pearson r, Spearman rho, and coefficient of determination', keyConcepts: ['Covariance', 'r-squared', 'Restriction of range'] },
          { id: 'p130-t8', title: 'The logic of NHST: Null vs. Alternative, alpha, p-values, and error types', keyConcepts: ['Type I error (alpha)', 'Type II error (beta)', 'What p < .05 actually means'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-130-1',
        title: 'Statistics for the Behavioral Sciences',
        authors: 'Gravetter, F. J., Wallnau, L. B., Forzano, L. B., & Witnauer, J. E.',
        edition: '10th Edition',
        year: '2021',
        courseCode: 'PSY 130',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The premier undergraduate textbook explaining mathematical intuition step-by-step with behavioral examples.',
        chaptersToRead: 'Chapters 1 through 8 (Descriptive stats, z-scores, probability, sampling distributions)',
        verified: true
      },
      {
        id: 'tb-130-2',
        title: 'Discovering Statistics Using R',
        authors: 'Field, A., Miles, J., & Field, Z.',
        edition: '1st Edition',
        year: '2012',
        courseCode: 'PSY 130',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Engaging, thorough introduction linking statistical reasoning directly to open-source R programming and data visualization.',
        chaptersToRead: 'Chapters 1–4 (Foundations, Exploratory data analysis)',
        verified: true
      },
      {
        id: 'tb-130-3',
        title: 'Khan Academy: Statistics and Probability',
        authors: 'Khan Academy',
        edition: 'Interactive modules',
        year: '2023',
        courseCode: 'PSY 130',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'Interactive exercises for practicing calculations of variance, standard deviation, and normal probabilities.',
        chaptersToRead: 'Modules on Exploring data, Modeling data distributions, and Sampling distributions',
        freeUrl: 'https://www.khanacademy.org/math/statistics-probability',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-130-1',
        title: 'The Earth Is Round (p < .05)',
        authors: 'Cohen, J.',
        year: 1994,
        journal: 'American Psychologist, 49(12), 997–1003',
        courseCode: 'PSY 130',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Why is null hypothesis significance testing widely misunderstood and misused in psychological research?',
        method: 'Theoretical critique and Bayesian probability demonstration',
        findings: 'Demonstrated that NHST does not tell researchers what they want to know (the probability that the hypothesis is true given the data), but rather P(Data|H0).',
        importance: 'The seminal critique that sparked modern psychological calls for effect sizes and confidence intervals.',
        limitations: 'Polemical style; did not completely resolve what alternative reporting standard should replace NHST.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal core reading in psychology methodology courses; basis for modern APA effect size reporting guidelines.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-130-1',
        courseCode: 'PSY 130',
        title: 'Descriptive Statistics Computation by Hand',
        type: 'stats-exercise',
        prompt: 'Given a raw dataset of 20 participant test scores: compute the mean, median, sum of squares (SS), variance (s^2), and standard deviation (s) using standard definitional formulas. Verify with computational formulas.',
        deliverables: 'Complete step-by-step computational table with worked math.',
        estimatedHours: 3,
        rubricFocus: ['Correct application of n-1 degrees of freedom', 'Accuracy of arithmetic']
      },
      {
        id: 'asg-130-2',
        courseCode: 'PSY 130',
        title: 'Plain Language Interpretation of 5 Correlation Coefficients',
        type: 'critical-evaluation',
        prompt: 'Interpret 5 distinct correlation scenarios (e.g., r = +0.82, r = -0.65, r = +0.08, r = -0.95, r = +0.40) in plain language. State the direction, magnitude, proportion of shared variance (r^2), and two alternative causal explanations including possible third variables.',
        deliverables: 'Written report evaluating all 5 coefficients with scatterplot interpretations.',
        estimatedHours: 4,
        rubricFocus: ['Calculation of r-squared', 'Non-causal language', 'Identification of plausible confounds']
      }
    ]
  },

  {
    id: 'psy-140',
    code: 'PSY 140',
    title: 'Research Methods I (Scientific Reasoning and Basic Design)',
    year: 1,
    semester: 2,
    difficulty: 'Introductory',
    whyIncluded: 'Methodology is a central pillar of psychology. You must be able to design rigorous experiments, detect confounds, and critique published claims.',
    prerequisites: ['PSY 101'],
    description: 'Systematic study of empirical design: formulating falsifiable hypotheses, operationalizing variables, internal vs. external validity, between-subjects and within-subjects experimental designs, and observational methods.',
    learningObjectives: [
      'Operationalize abstract psychological constructs into valid, quantifiable variables',
      'Distinguish between independent, dependent, extraneous, and confounding variables',
      'Explain the fundamental role of random assignment in establishing internal validity',
      'Contrast between-subjects vs. within-subjects designs (order effects, counterbalancing)',
      'Evaluate the four major validities: construct, internal, external, and statistical'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy140-u1',
        title: 'Unit 1: Scientific Claims & Validities',
        order: 1,
        topics: [
          { id: 'p140-t1', title: 'Three claims: Frequency, association, and causal', keyConcepts: ['Verbs indicating claims', 'Requirements for causal inference'] },
          { id: 'p140-t2', title: 'The Four Big Validities: Construct, internal, external, statistical', keyConcepts: ['Trade-offs', 'Prioritizing validity based on research goals'] },
          { id: 'p140-t3', title: 'Operational definitions and measurement types', keyConcepts: ['Self-report', 'Observational', 'Physiological'] },
          { id: 'p140-t4', title: 'Ethical guidelines and animal/human research ethics', keyConcepts: ['APA Ethics Code', 'IRB', 'Animal welfare'] }
        ]
      },
      {
        id: 'psy140-u2',
        title: 'Unit 2: Experimental Designs & Threats to Internal Validity',
        order: 2,
        topics: [
          { id: 'p140-t5', title: 'Between-subjects design: Independent groups and random assignment', keyConcepts: ['Posttest-only', 'Pretest/posttest', 'Selection effects'] },
          { id: 'p140-t6', title: 'Within-subjects design: Repeated measures & counterbalancing', keyConcepts: ['Order effects', 'Fatigue', 'Practice effects', 'Latin square'] },
          { id: 'p140-t7', title: 'Threats to internal validity: History, maturation, regression to mean, attrition', keyConcepts: ['Campbell & Stanley threats', 'Instrumentation', 'Testing effects'] },
          { id: 'p140-t8', title: 'Experimenter expectancy, demand characteristics, and blinding', keyConcepts: ['Double-blind', 'Placebo controls', 'Clever Hans effect'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-140-1',
        title: 'Research Methods in Psychology: Evaluating a World of Information',
        authors: 'Morling, B.',
        edition: '4th Edition',
        year: '2021',
        courseCode: 'PSY 140',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Widely praised for teaching students how to be critical consumers of psychological claims through the "Four Validities" framework.',
        chaptersToRead: 'Chapters 1 through 10 (Claims, validities, experimental designs, threats)',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-140-1',
        title: 'Experimental and Quasi-Experimental Designs for Research (Foundational Monograph)',
        authors: 'Campbell, D. T., & Stanley, J. C.',
        year: 1963,
        journal: 'Rand McNally / American Educational Research Association',
        courseCode: 'PSY 140',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'What are the systematic threats to internal and external validity across experimental and quasi-experimental designs?',
        method: 'Theoretical taxonomy and methodological formalization',
        findings: 'Identified 8 distinct threats to internal validity (history, maturation, testing, instrumentation, regression, selection, mortality, interaction) and 4 threats to external validity.',
        importance: 'The foundational bedrock of experimental design in social and behavioral sciences.',
        limitations: 'Historical monograph preceding modern computational matching techniques.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal benchmark standard across methodology syllabi.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-140-1',
        courseCode: 'PSY 140',
        title: 'Correlational Study Critique & Third-Variable Analysis',
        type: 'critical-evaluation',
        prompt: 'Locate a published correlational study that received media attention. Identify the two correlated variables. Explain why the authors (or media) cannot claim X caused Y. Propose at least two plausible third variables that could account for the correlation and describe a partial-correlation or longitudinal method to test them.',
        deliverables: '3-page critical evaluation.',
        estimatedHours: 5,
        rubricFocus: ['Clarity in explaining reverse directionality', 'Plausibility of third variables', 'Correct understanding of confounds']
      },
      {
        id: 'asg-140-2',
        courseCode: 'PSY 140',
        title: 'Experimental Method Section Design',
        type: 'design-exercise',
        prompt: 'Design a novel between-subjects 2-condition experiment testing a cognitive or social claim (e.g. background music on reading retention). Write a formal APA Method section including: Participants, Materials/Apparatus, and Procedure (with random assignment and confound controls).',
        deliverables: 'Complete APA-style Method section (approx 1,000 words).',
        estimatedHours: 6,
        rubricFocus: ['Operational definitions', 'Controls for demand characteristics', 'Clear step-by-step procedure']
      }
    ]
  },

  // ================= YEAR 2 =================
  // Semester 3
  {
    id: 'psy-201',
    code: 'PSY 201',
    title: 'Cognitive Psychology',
    year: 2,
    semester: 3,
    difficulty: 'Intermediate',
    whyIncluded: 'Cognition is a core subfield. Harvard’s foundational course PSY 11 is Cognition: How the Mind Works.',
    prerequisites: ['PSY 101', 'PSY 140'],
    description: 'An in-depth examination of mental representations and processes: selective and divided attention, working memory, long-term memory systems, language comprehension, mental imagery, and problem-solving.',
    learningObjectives: [
      'Explain the multi-store and working memory models (Baddeley & Hitch)',
      'Contrast episodic, semantic, and procedural long-term memory systems',
      'Analyze empirical evidence on false memories and eyewitness testimony reconstruction',
      'Evaluate theories of concept representation (prototype, exemplar, and theory-based views)'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy201-u1',
        title: 'Unit 1: Attention & Working Memory',
        order: 1,
        topics: [
          { id: 'p201-t1', title: 'Selective attention & filter theories', keyConcepts: ['Broadbent filter', 'Treisman attenuation', 'Late selection'] },
          { id: 'p201-t2', title: 'Divided attention, automaticity, and executive control', keyConcepts: ['Stroop effect', 'Schneider & Shiffrin', 'Attentional blink'] },
          { id: 'p201-t3', title: 'Working memory model: Phonological loop, visuospatial sketchpad, central executive, episodic buffer', keyConcepts: ['Baddeley & Hitch', 'Articulatory suppression', 'Dual-task paradigms'] },
          { id: 'p201-t4', title: 'Capacity limits of short-term memory: 7±2 vs. 4 chunks', keyConcepts: ['Miller (1956)', 'Cowan (2001)', 'Chunking'] }
        ]
      },
      {
        id: 'psy201-u2',
        title: 'Unit 2: Long-Term Memory, Language & Reasoning',
        order: 2,
        topics: [
          { id: 'p201-t5', title: 'Encoding, levels of processing, and transfer-appropriate processing', keyConcepts: ['Craik & Lockhart', 'Elaborative rehearsal', 'Context-dependent memory'] },
          { id: 'p201-t6', title: 'Memory retrieval, interference, and constructive memory', keyConcepts: ['Retroactive/proactive interference', 'Misinformation effect', 'Loftus'] },
          { id: 'p201-t7', title: 'Language architecture: Phonology, syntax, and semantics', keyConcepts: ['Parsing', 'Garden-path sentences', 'Broca/Wernicke areas'] },
          { id: 'p201-t8', title: 'Heuristics, biases, and dual-process reasoning', keyConcepts: ['Kahneman System 1 and 2', 'Framing effects', 'Confirmation bias'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-201-1',
        title: 'Cognitive Psychology',
        authors: 'Sternberg, R. J., & Sternberg, K.',
        edition: '7th Edition',
        year: '2016',
        courseCode: 'PSY 201',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Clear encyclopedic coverage connecting historical models with contemporary laboratory findings.',
        chaptersToRead: 'Chapters 1 through 9 (Perception, attention, memory structures, reasoning)',
        verified: true
      },
      {
        id: 'tb-201-2',
        title: 'Cognition: Exploring the Science of the Mind',
        authors: 'Reisberg, D.',
        edition: '8th Edition',
        year: '2021',
        courseCode: 'PSY 201',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Phenomenal writing emphasizing experimental logic, subjective experience, and cognitive neuroscience correlations.',
        chaptersToRead: 'Chapters on Working Memory and Eyewitness Memory',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-201-1',
        title: 'The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information',
        authors: 'Miller, G. A.',
        year: 1956,
        journal: 'Psychological Review, 63(2), 81–97',
        courseCode: 'PSY 201',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Is there a general quantitative limit on immediate human memory span and absolute judgment?',
        method: 'Review and mathematical synthesis of unidimensional judgment and memory span data',
        findings: 'Immediate memory span is constrained to approximately 7 chunks of information, irrespective of bit density.',
        importance: 'Founded chunking theory and initiated computational cognitive psychology.',
        limitations: 'Conflated absolute judgment with memory span; chunking can obscure smaller underlying pure storage limits.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Modern consensus (Cowan 2001) revises the pure un-rehearsed focus of attention to approximately 4 chunks.',
        verified: true,
        link: 'https://psychclassics.yorku.ca/Miller/'
      },
      {
        id: 'pp-201-2',
        title: 'Working Memory',
        authors: 'Baddeley, A. D., & Hitch, G.',
        year: 1974,
        journal: 'Psychology of Learning and Motivation, 8, 47–89',
        courseCode: 'PSY 201',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Is short-term memory a unitary store or a multi-component workspace?',
        method: 'Dual-task interference experiments in humans (e.g. digit-span retention concurrent with reasoning tasks)',
        findings: 'Concurrent digit load did not catastrophic disrupt reasoning, proving distinct verbal and spatial storage subsystems supervised by an executive.',
        importance: 'Replaced Atkinson-Shiffrin unitary STM model with the multicomponent Working Memory paradigm.',
        limitations: 'Initial formulation had unclear specification of central executive mechanisms.',
        replicationStatus: 'Robust',
        currentInterpretation: 'The dominant working memory framework across human neuroscience and cognitive psychology.',
        verified: true
      },
      {
        id: 'pp-201-3',
        title: 'Levels of Processing: A Framework for Memory Research',
        authors: 'Craik, F. I. M., & Lockhart, R. S.',
        year: 1972,
        journal: 'Journal of Verbal Learning and Verbal Behavior, 11(6), 671–684',
        courseCode: 'PSY 201',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Does memory persistence depend on the structural store or the depth of qualitative encoding analysis?',
        method: 'Incidental learning paradigms comparing structural, phonemic, and deep semantic tasks',
        findings: 'Deeper semantic processing produces vastly superior recall and recognition compared to shallow perceptual analysis.',
        importance: 'Shifted focus from static memory structures to dynamic encoding processes.',
        limitations: 'Circular definition of "depth" unless independently operationalized.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Fundamental principle in learning science, refined by Morris et al.’s transfer-appropriate processing.',
        verified: true
      },
      {
        id: 'pp-201-4',
        title: 'Reconstruction of Automobile Destruction: An Example of the Interaction Between Language and Memory',
        authors: 'Loftus, E. F., & Palmer, J. C.',
        year: 1974,
        journal: 'Journal of Verbal Learning and Verbal Behavior, 13(5), 585–589',
        courseCode: 'PSY 201',
        category: 'foundational',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'Can subtle changes in question phrasing alter eyewitness memory of an event?',
        method: 'Participants watched film of car crash and answered speed questions using verbs: "smashed", "collided", "bumped", "hit", or "contacted"; later asked if they saw broken glass.',
        findings: '"Smashed" produced significantly higher speed estimates (40.5 mph vs 31.8 mph) and more false reports of broken glass (32% vs 14%).',
        importance: 'Demonstrated the malleability of human episodic memory.',
        limitations: 'Laboratory film viewing differs from high-stakes real-world traumatic event witnessing; response bias vs true memory alteration debated.',
        replicationStatus: 'Partially Replicated / Context-Dependent',
        currentInterpretation: 'The misinformation effect is robust and replicated hundreds of times, though whether original memory traces are erased or overlaid remains an active debate.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-201-1',
        courseCode: 'PSY 201',
        title: 'Critical Evaluation of Loftus & Palmer (1974)',
        type: 'critical-evaluation',
        prompt: 'Read Loftus & Palmer (1974). Write a 1,200-word critical evaluation answering: 1. What did the experiments demonstrate? 2. How did subsequent researchers (e.g., McCloskey & Zaragoza) challenge the "destructive memory" interpretation with response-bias accounts? 3. What implications does this have for eyewitness testimony?',
        deliverables: '1,200-word critical evaluation with at least 3 subsequent citations.',
        estimatedHours: 6,
        rubricFocus: ['Understanding of response-bias versus trace alteration', 'Application to legal protocols']
      },
      {
        id: 'asg-201-2',
        courseCode: 'PSY 201',
        title: 'Working Memory Dual-Task Experiment Design',
        type: 'design-exercise',
        prompt: 'Design an empirical experiment testing whether visuospatial sketchpad resources are distinct from phonological loop resources using a dual-task interference paradigm. Detail independent variables, dependent variable (accuracy/reaction time in ms), counterbalancing, and predicted interaction effect.',
        deliverables: 'Experimental proposal with mock 2x2 ANOVA graph.',
        estimatedHours: 5,
        rubricFocus: ['Sound dual-task logic', 'Correct operationalization of interference', 'Mock graph interpretation']
      }
    ]
  },

  {
    id: 'psy-210',
    code: 'PSY 210',
    title: 'Developmental Psychology',
    year: 2,
    semester: 3,
    difficulty: 'Intermediate',
    whyIncluded: 'Harvard PSY 16; Oxford and Cambridge treat developmental trajectories across the lifespan as core knowledge.',
    prerequisites: ['PSY 101'],
    description: 'The study of human growth from conception through senescence: cognitive changes (Piaget, Vygotsky), socio-emotional bonds (Bowlby, Ainsworth), theory of mind, moral development, and aging.',
    learningObjectives: [
      'Contrast Piaget’s stage model of cognitive development with Vygotsky’s sociocultural scaffolding',
      'Explain the Strange Situation procedure and attachment classifications across the lifespan',
      'Describe the empirical testing of Theory of Mind (e.g., false-belief tasks)',
      'Analyze epigenetic and environmental influences in critical/sensitive developmental periods'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy210-u1',
        title: 'Unit 1: Infancy & Cognitive Development',
        order: 1,
        topics: [
          { id: 'p210-t1', title: 'Prenatal development, teratogens, and neonatal reflexes', keyConcepts: ['Critical periods', 'Fetal alcohol spectrum', 'Rooting reflex'] },
          { id: 'p210-t2', title: 'Piaget’s Stage Theory: Sensorimotor, Preoperational, Concrete, Formal', keyConcepts: ['Assimilation', 'Accommodation', 'Conservation', 'Object permanence'] },
          { id: 'p210-t3', title: 'Vygotsky’s Sociocultural Theory: Zone of Proximal Development', keyConcepts: ['Scaffolding', 'Private speech', 'Cultural tools'] },
          { id: 'p210-t4', title: 'Information processing & modern critiques of Piaget', keyConcepts: ['Baillargeon violation-of-expectation', 'Core knowledge'] }
        ]
      },
      {
        id: 'psy210-u2',
        title: 'Unit 2: Attachment, Socioemotional & Lifespan Development',
        order: 2,
        topics: [
          { id: 'p210-t5', title: 'Attachment theory: Bowlby, Harlow’s monkeys, and Ainsworth', keyConcepts: ['Strange Situation', 'Secure', 'Anxious-ambivalent', 'Avoidant', 'Disorganized'] },
          { id: 'p210-t6', title: 'Development of Theory of Mind & self-concept', keyConcepts: ['Sally-Anne test', 'False belief', 'Executive function role'] },
          { id: 'p210-t7', title: 'Moral development: Kohlberg, Gilligan, and Haidt', keyConcepts: ['Preconventional', 'Conventional', 'Postconventional', 'Moral foundations'] },
          { id: 'p210-t8', title: 'Adolescence, identity formation, and cognitive changes in aging', keyConcepts: ['Marcia identity statuses', 'Fluid vs crystallized intelligence', 'Dementia vs normal aging'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-210-1',
        title: 'How Children Develop',
        authors: 'Siegler, R. S., Saffran, J. R., Gershoff, E., & Eisenberg, N.',
        edition: '6th Edition',
        year: '2020',
        courseCode: 'PSY 210',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Renowned for rigorous empirical presentation of experimental developmental paradigms.',
        chaptersToRead: 'Chapters 1 through 14',
        verified: true
      },
      {
        id: 'tb-210-2',
        title: 'Noba Project: Developmental Psychology Modules',
        authors: 'Noba Project',
        edition: 'Open Access Modules',
        year: '2022',
        courseCode: 'PSY 210',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'Top-tier open access summaries on cognitive development, attachment, theory of mind, and nature-nurture.',
        chaptersToRead: 'Modules on Cognitive Development in Childhood, Attachment Through Life',
        freeUrl: 'https://nobaproject.com',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-210-1',
        title: 'Object Permanence in 3 1/2- and 4 1/2-Month-Old Infants',
        authors: 'Baillargeon, R.',
        year: 1987,
        journal: 'Developmental Psychology, 23(5), 655–664',
        courseCode: 'PSY 210',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Do infants understand that occluded objects continue to exist much earlier than Piaget claimed?',
        method: 'Violation-of-expectation paradigm using rotating drawbridge and hidden wooden block',
        findings: 'Infants looked reliably longer at the physically impossible event, demonstrating object representation at 3.5 months (versus Piaget’s 8–9 months).',
        importance: 'Overturned Piagetian timelines through sensitive non-motor looking measures.',
        limitations: 'Looking-time interpretation disputes (perceptual novelty vs conceptual understanding).',
        replicationStatus: 'Robust',
        currentInterpretation: 'Cornerstone study demonstrating early innate or rapidly acquired core physical knowledge.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-210-1',
        courseCode: 'PSY 210',
        title: 'Piagetian Conservation Task Replication Analysis',
        type: 'critical-evaluation',
        prompt: 'Watch or conduct (with ethics/consent) a classic Piagetian conservation task (e.g. liquid volume or coin spacing). Write a critical analysis comparing Piaget’s interpretation with modern information-processing explanations (e.g., executive function, linguistic pragmatics of repeated questions).',
        deliverables: '1,000-word analysis with discussion of alternative cognitive explanations.',
        estimatedHours: 5,
        rubricFocus: ['Detailed procedural understanding', 'Critique of task demands and question repetition bias']
      }
    ]
  },

  {
    id: 'psy-220',
    code: 'PSY 220',
    title: 'Social Psychology',
    year: 2,
    semester: 3,
    difficulty: 'Intermediate',
    whyIncluded: 'Harvard PSY 15; Oxford/Cambridge core subject. Social psychology is also the critical domain where the replication crisis and open science reforms became most urgent.',
    prerequisites: ['PSY 101'],
    description: 'The scientific investigation of how thoughts, feelings, and behaviours are influenced by the actual, imagined, or implied presence of others. Covers social cognition, attribution, attitude formation, conformity, obedience, prejudice, and prosocial behaviour.',
    learningObjectives: [
      'Explain fundamental attribution error, cognitive dissonance, and elaboration likelihood models',
      'Critically evaluate classic high-profile studies (Asch, Milgram, Bystander) regarding ethics and replication',
      'Analyze the methodology of implicit versus explicit measures of prejudice (e.g. IAT)',
      'Assess the modern replication crisis in social psychology and the role of preregistration and large-scale multi-lab studies'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy220-u1',
        title: 'Unit 1: Social Cognition, Attribution & Attitudes',
        order: 1,
        topics: [
          { id: 'p220-t1', title: 'Social cognition & heuristics in judgment', keyConcepts: ['Confirmation bias', 'Self-fulfilling prophecy', 'Schemas'] },
          { id: 'p220-t2', title: 'Attribution theory: Fundamental attribution error & actor-observer bias', keyConcepts: ['Heider', 'Kelley covariation model', 'Dispositional vs situational'] },
          { id: 'p220-t3', title: 'Cognitive dissonance theory: Festinger & Carlsmith (1959)', keyConcepts: ['Induced compliance', 'Effort justification', 'Self-perception theory'] },
          { id: 'p220-t4', title: 'Persuasion and attitude change: Elaboration Likelihood Model', keyConcepts: ['Central route', 'Peripheral route', 'Source credibility'] }
        ]
      },
      {
        id: 'psy220-u2',
        title: 'Unit 2: Social Influence, Group Processes & Replication Audits',
        order: 2,
        topics: [
          { id: 'p220-t5', title: 'Conformity: Asch line judgment experiments', keyConcepts: ['Informational influence', 'Normative influence', 'Cross-cultural replication'] },
          { id: 'p220-t6', title: 'Obedience to authority: Milgram (1963) & Burger (2009) replication', keyConcepts: ['Agentic state', 'Proximity effect', 'Ethical violations'] },
          { id: 'p220-t7', title: 'Prosocial behaviour and the bystander effect (Darley & Latané)', keyConcepts: ['Diffusion of responsibility', 'Pluralistic ignorance', 'Context dependency'] },
          { id: 'p220-t8', title: 'Prejudice, stereotypes, and the replication crisis in social priming', keyConcepts: ['Bargh elderly priming failure', 'Many Labs 1-5', 'Replication rates'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-220-1',
        title: 'Social Psychology',
        authors: 'Kassin, S., Fein, S., & Markus, H. R.',
        edition: '11th Edition',
        year: '2021',
        courseCode: 'PSY 220',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Outstanding balanced coverage with direct treatment of the replication crisis and cultural variations.',
        chaptersToRead: 'Chapters 1 through 12',
        verified: true
      },
      {
        id: 'tb-220-2',
        title: 'Principles of Social Psychology',
        authors: 'Jhangiani, R., & Tarry, H.',
        edition: '1st International Edition',
        year: '2014',
        courseCode: 'PSY 220',
        type: 'Free alternative',
        priority: 'FREE',
        whyItMatters: 'Open-access, peer-reviewed textbook highlighting social cognition and group phenomena.',
        chaptersToRead: 'All core chapters',
        freeUrl: 'https://opentextbc.ca/socialpsychology/',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-220-1',
        title: 'Effects of Group Pressure upon the Modification and Distortion of Judgments',
        authors: 'Asch, S. E.',
        year: 1951,
        journal: 'Groups, Leadership, and Men (Carnegie Press), 177–190',
        courseCode: 'PSY 220',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Will an individual conform to an obviously incorrect unanimous visual judgment of a group?',
        method: 'Standard line-matching paradigm with 1 real participant and 7 confederates giving unanimously wrong answers on critical trials',
        findings: 'Participants conformed on approximately 37% of critical trials; 75% conformed at least once.',
        importance: 'Empirically proved the immense power of normative group pressure.',
        limitations: 'All-male American college sample; conformity varies significantly cross-culturally and across task ambiguity.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Extensively replicated globally (Bond & Smith meta-analysis: higher conformity in collectivist cultures).',
        verified: true
      },
      {
        id: 'pp-220-2',
        title: 'Behavioral Study of Obedience',
        authors: 'Milgram, S.',
        year: 1963,
        journal: 'Journal of Abnormal and Social Psychology, 67(4), 371–378',
        courseCode: 'PSY 220',
        category: 'foundational',
        priority: 'ADVANCED',
        researchQuestion: 'To what extent will ordinary citizens obey an experimenter commanding them to deliver escalating electric shocks to an innocent victim?',
        method: 'Yale laboratory setup where teacher subjects were ordered to shock a learner confederate up to 450 volts',
        findings: '65% (26 of 40) delivered maximum 450-volt shock despite intense psychological distress.',
        importance: 'Exposed vulnerability to malevolent authority; reshaped research ethics worldwide.',
        limitations: 'Extreme ethical coercion; demand characteristics and participant suspicion debated.',
        replicationStatus: 'Partially Replicated / Context-Dependent',
        currentInterpretation: 'Burger (2009) ethically replicated up to the 150-volt threshold, finding comparable obedience rates (~70%).',
        verified: true
      },
      {
        id: 'pp-220-3',
        title: 'Automaticity of Social Behavior: Direct Effects of Trait Construct and Stereotype Activation on Action',
        authors: 'Bargh, J. A., Chen, M., & Burrows, L.',
        year: 1996,
        journal: 'Journal of Personality and Social Psychology, 71(2), 230–244',
        courseCode: 'PSY 220',
        category: 'controversial',
        priority: 'CONTROVERSIAL',
        researchQuestion: 'Does unconscious priming with elderly stereotypes cause individuals to walk more slowly down a hallway?',
        method: 'Scrambled-sentence priming task followed by hidden stopwatch timing of participants walking to an elevator',
        findings: 'Reported that participants primed with elderly words walked significantly slower.',
        importance: 'Catalyzed 15 years of dramatic behavioural priming claims in social psychology.',
        limitations: 'Small sample size, unblinded experimenter timing, vulnerability to researcher expectancy.',
        replicationStatus: 'Controversial / Failed Replication',
        currentInterpretation: 'Doyen et al. (2012) and subsequent multi-lab attempts failed to replicate when automated infrared timing was used, triggering psychology’s replication crisis.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-220-1',
        courseCode: 'PSY 220',
        title: 'Critical Ethical & Methodological Audit of Milgram (1963)',
        type: 'critical-evaluation',
        prompt: 'Write an analytical critique comparing Milgram (1963) with Jerry Burger’s (2009) ethical partial replication. Address: 1. Ethical dilemmas (deception, extreme distress), 2. Methodological adaptations (150-volt cutoff), 3. Contemporary situational vs. dispositional interpretation.',
        deliverables: '1,500-word critical evaluation essay.',
        estimatedHours: 6,
        rubricFocus: ['Clear identification of 150V inflection point', 'Ethical analysis under APA code', 'Understanding of authority dynamics']
      },
      {
        id: 'asg-220-2',
        courseCode: 'PSY 220',
        title: 'Advertising Persuasion & Heuristic Deconstruction',
        type: 'paper-analysis',
        prompt: 'Deconstruct a high-budget political or corporate commercial using the Elaboration Likelihood Model (Petty & Cacioppo) and Cialdini’s principles of influence (Scarcity, Social Proof, Authority). Identify explicit cognitive arguments vs. peripheral emotional priming cues.',
        deliverables: '2-page multimodal analytical breakdown.',
        estimatedHours: 4,
        rubricFocus: ['Accurate application of central vs. peripheral routes', 'Recognition of cognitive biases']
      }
    ]
  },

  {
    id: 'psy-230',
    code: 'PSY 230',
    title: 'Statistics for Behavioural Sciences II',
    year: 2,
    semester: 3,
    difficulty: 'Intermediate',
    whyIncluded: 'Continues the quantitative progression. Harvard requires PSY 1901 after PSY 1900. Fundamental for testing experimental hypotheses.',
    prerequisites: ['PSY 130'],
    description: 'Inferential statistical modeling for behavioral science: Independent and paired samples t-tests, one-way and factorial Analysis of Variance (ANOVA), repeated-measures ANOVA, post-hoc tests, effect sizes (Cohen’s d, eta-squared), statistical power analysis, and non-parametric tests (Mann-Whitney, Wilcoxon, Kruskal-Wallis, Chi-square).',
    learningObjectives: [
      'Conduct, interpret, and report independent and paired samples t-tests in strict APA format',
      'Understand the mathematical partition of variance in One-Way and Two-Way Factorial ANOVA',
      'Compute and differentiate effect size metrics (Cohen’s d, partial eta-squared)',
      'Calculate statistical power and determine required sample sizes using G*Power concepts',
      'Identify when parametric assumptions are violated and apply corresponding non-parametric tests'
    ],
    estimatedWorkload: '12–14 hours / week',
    units: [
      {
        id: 'psy230-u1',
        title: 'Unit 1: t-Tests, Power & Effect Size',
        order: 1,
        topics: [
          { id: 'p230-t1', title: 'Single-sample and independent-measures t-test', keyConcepts: ['Pooled variance', 'Standard error of difference', 'Assumptions: Normality, Homogeneity'] },
          { id: 'p230-t2', title: 'Repeated-measures (paired-samples) t-test', keyConcepts: ['Difference scores', 'Reduction of error variance', 'Carryover risks'] },
          { id: 'p230-t3', title: 'Effect sizes: Cohen’s d, Hedges’ g, and confidence intervals', keyConcepts: ['Point estimates', 'Overlap of distributions', 'Clinical vs statistical significance'] },
          { id: 'p230-t4', title: 'Statistical power (1-beta) and sample size planning', keyConcepts: ['Alpha level', 'Effect size magnitude', 'Underpowered study dangers'] }
        ]
      },
      {
        id: 'psy230-u2',
        title: 'Unit 2: Analysis of Variance (ANOVA) & Non-Parametrics',
        order: 2,
        topics: [
          { id: 'p230-t5', title: 'One-Way Between-Subjects ANOVA', keyConcepts: ['F-ratio', 'Mean Squares (Between / Within)', 'Familywise error rate'] },
          { id: 'p230-t6', title: 'Two-Way Factorial ANOVA & Interaction Effects', keyConcepts: ['Main effects', 'Interaction crossover', 'Simple effects tests'] },
          { id: 'p230-t7', title: 'Post-hoc pairwise comparisons: Tukey HSD, Bonferroni, Scheffé', keyConcepts: ['Type I error inflation control', 'Conservative vs liberal corrections'] },
          { id: 'p230-t8', title: 'Non-parametric tests: Chi-Square, Mann-Whitney U, Wilcoxon', keyConcepts: ['Goodness of fit', 'Test of independence', 'Rank-sum logic'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-230-1',
        title: 'Statistics for the Behavioral Sciences (Continued)',
        authors: 'Gravetter, F. J., Wallnau, L. B., Forzano, L. B., & Witnauer, J. E.',
        edition: '10th Edition',
        year: '2021',
        courseCode: 'PSY 230',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Detailed step-by-step mathematical walkthroughs of ANOVA computational tables.',
        chaptersToRead: 'Chapters 9 through 17 (t-tests, ANOVA, Repeated-measures, Chi-square)',
        verified: true
      },
      {
        id: 'tb-230-2',
        title: 'Discovering Statistics Using R (Continued)',
        authors: 'Field, A., Miles, J., & Field, Z.',
        edition: '1st Edition',
        year: '2012',
        courseCode: 'PSY 230',
        type: 'Supplementary',
        priority: 'RECOMMENDED',
        whyItMatters: 'Teaches running t-tests, factorial ANOVAs, and post-hoc diagnostics with clean R syntax and ggplot2.',
        chaptersToRead: 'Chapters 9, 10, 11, 12, 13, 14',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-230-1',
        title: 'Statistical Power Analysis for the Behavioral Sciences (Overview Paper)',
        authors: 'Cohen, J.',
        year: 1992,
        journal: 'Current Directions in Psychological Science, 1(3), 98–101',
        courseCode: 'PSY 230',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Why is statistical power routinely ignored, and how can researchers implement a straightforward power primer?',
        method: 'Analytical framework presenting rules of thumb for small, medium, and large effect sizes',
        findings: 'Demonstrated that psychology experiments are chronically underpowered (often < 50% chance of detecting real medium effects).',
        importance: 'Canonical paper establishing d = 0.2, 0.5, 0.8 and power = 0.80 conventions.',
        limitations: 'Conventions can become rigid substitutes for domain-specific effect size modeling.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal prerequisite reference for grant applications, ethics boards, and pre-study planning.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-230-1',
        courseCode: 'PSY 230',
        title: 'Full Factorial 2x2 ANOVA Dataset Analysis & APA Report',
        type: 'stats-exercise',
        prompt: 'Given a raw experimental dataset with two independent variables (e.g. Drug Condition [Placebo vs Active] x Stress [Low vs High]): compute SS, MS, F-ratios, p-values, and partial eta-squared. Write the complete results section in APA format including description of main effects and interaction.',
        deliverables: 'ANOVA summary table + APA formatted Results paragraph.',
        estimatedHours: 5,
        rubricFocus: ['Exact F(df1, df2) formatting', 'Accurate interpretation of interaction effect', 'Effect size reporting']
      },
      {
        id: 'asg-230-2',
        courseCode: 'PSY 230',
        title: 'A Priori Power Calculation & Sample Size Justification',
        type: 'stats-exercise',
        prompt: 'Determine the required sample size for a study wishing to detect an anticipated medium effect size (d = 0.50) with alpha = .05 and 80% power in a between-subjects two-group design. Explain in plain language why running only 20 participants per group invites severe replication hazards.',
        deliverables: '2-page power analysis report.',
        estimatedHours: 4,
        rubricFocus: ['Correct sample size calculation (~64 per group)', 'Clear explanation of Type II error risk']
      }
    ]
  },

  // Semester 4
  {
    id: 'psy-240',
    code: 'PSY 240',
    title: 'Personality Psychology',
    year: 2,
    semester: 4,
    difficulty: 'Intermediate',
    whyIncluded: 'Core area of psychological science. Essential for understanding individual differences, psychometric personality assessment, and clinical psychopathology.',
    prerequisites: ['PSY 101'],
    description: 'The empirical study of psychological traits, temperament, intrapsychic dynamics, and cognitive-affective individuality. Centers on the Five-Factor Model (OCEAN), biological foundations, evolutionary perspectives, and lifespan personality stability and change.',
    learningObjectives: [
      'Explain the lexical hypothesis and the empirical factor-analytic derivation of the Big Five (OCEAN)',
      'Evaluate the person-situation debate (Mischel’s critique vs. trait aggregation responses)',
      'Describe biological and genetic correlates of personality traits (dopaminergic extraversion, serotonergic conscientiousness)',
      'Analyze the scientific validity of projective tests (Rorschach, TAT) versus objective psychometric inventories (IPIP-NEO, HEXACO)'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy240-u1',
        title: 'Unit 1: The Trait Approach & The Five-Factor Model',
        order: 1,
        topics: [
          { id: 'p240-t1', title: 'The Lexical Hypothesis and Cattell’s 16PF', keyConcepts: ['Factor analysis', 'Allport', 'Surface vs source traits'] },
          { id: 'p240-t2', title: 'The Five-Factor Model (OCEAN) and HEXACO', keyConcepts: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism', 'Honesty-Humility'] },
          { id: 'p240-t3', title: 'Measurement: Objective inventories vs. projective tests', keyConcepts: ['NEO-PI-R', 'IPIP', 'Barnum effect', 'Projective test invalidity'] },
          { id: 'p240-t4', title: 'The Person-Situation Debate: Mischel (1968) and Aggregation', keyConcepts: ['Cross-situational consistency', 'Epstein aggregation', 'Interactionism'] }
        ]
      },
      {
        id: 'psy240-u2',
        title: 'Unit 2: Biological Bases, Stability & Lifespan Dynamics',
        order: 2,
        topics: [
          { id: 'p240-t5', title: 'Biological theories: Eysenck, Gray’s BIS/BAS, and Cloninger', keyConcepts: ['Ascending reticular activating system', 'Behavioral inhibition/activation'] },
          { id: 'p240-t6', title: 'Behavioral genetics and twin studies of personality', keyConcepts: ['Heritability (~40-50%)', 'Non-shared environmental variance'] },
          { id: 'p240-t7', title: 'Lifespan rank-order stability vs. mean-level change', keyConcepts: ['Maturity principle', 'Plaster hypothesis vs plasticity', 'Longitudinal findings'] },
          { id: 'p240-t8', title: 'Psychodynamic, Humanistic, and Narrative approaches', keyConcepts: ['Defense mechanisms', 'Rogers self-discrepancy', 'McAdams narrative identity'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-240-1',
        title: 'Personality Psychology: Domains of Knowledge About Human Nature',
        authors: 'Larsen, R. J., & Buss, D. M.',
        edition: '7th Edition',
        year: '2020',
        courseCode: 'PSY 240',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Superb framework organizing personality into trait, biological, intrapsychic, cognitive, social, and adjustment domains.',
        chaptersToRead: 'Chapters 1 through 14',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-240-1',
        title: 'An Alternative "Description of Personality": The Big-Five Factor Structure',
        authors: 'Goldberg, L. R.',
        year: 1990,
        journal: 'Journal of Personality and Social Psychology, 59(6), 1216–1229',
        courseCode: 'PSY 240',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Can natural language trait terms be reliably condensed into five robust orthogonal dimensions?',
        method: 'Factor analysis of 1,431 trait adjectives across independent participant cohorts',
        findings: 'Demonstrated remarkable invariance of the Five-Factor structure (Extraversion, Agreeableness, Conscientiousness, Emotional Stability, Intellect/Openness).',
        importance: 'Solidified modern consensus on the Big Five in psychological science.',
        limitations: 'Lexical method reflects human descriptive language which may omit non-verbalized internal states.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Replicated across dozens of languages and cultures; foundational to modern personality assessment.',
        verified: true
      },
      {
        id: 'pp-240-2',
        title: 'Patterns of Mean-Level Change in Personality Traits Across the Life Course: A Meta-Analysis of Longitudinal Studies',
        authors: 'Roberts, B. W., Walton, K. E., & Viechtbauer, W.',
        year: 2006,
        journal: 'Psychological Bulletin, 132(1), 1–25',
        courseCode: 'PSY 240',
        category: 'contemporary',
        priority: 'RECOMMENDED',
        researchQuestion: 'Do personality traits remain fixed after age 30 ("plaster hypothesis") or change systematically across the adult lifespan?',
        method: 'Meta-analysis of 92 longitudinal sample cohorts tracking participants across ages 10 to 101',
        findings: 'Disproved the rigid plaster hypothesis: people show continuous "maturity principle" increases in Conscientiousness, Agreeableness, and Emotional Stability well into adulthood.',
        importance: 'Shifted the field toward a lifespan developmental perspective on personality plasticity.',
        limitations: 'Observational longitudinal data; underlying causal environmental drivers vary.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Decisive reference confirming that personality is both stable in rank-order and dynamic in mean-level development.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-240-1',
        courseCode: 'PSY 240',
        title: 'Big Five Self-Assessment & Psychometric Profile Audit',
        type: 'paper-analysis',
        prompt: 'Complete the full 120-item open-source IPIP-NEO personality inventory (free online). Analyze your percentile scores across the 5 domains and 30 facets. Critically evaluate your profile in light of Roberts et al. (2006) findings on age-related norm shifts and state-trait variability.',
        deliverables: '1,200-word reflective psychometric profile analysis.',
        estimatedHours: 4,
        rubricFocus: ['Accurate facet interpretation', 'Discussion of measurement error and test-retest reliability']
      },
      {
        id: 'asg-240-2',
        courseCode: 'PSY 240',
        title: 'Essay: The Person-Situation Debate in Contemporary Science',
        type: 'essay',
        prompt: 'Evaluate whether Walter Mischel’s (1968) critique of personality traits remains valid today. How did trait aggregation (Epstein), fleeson’s density distribution approach, and behavioral genetics resolve the debate?',
        deliverables: '1,500-word scholarly essay.',
        estimatedHours: 6,
        rubricFocus: ['Deep understanding of correlation coefficients in behavior prediction (r = .30 barrier vs aggregated r = .60+)', 'Contemporary synthesis']
      }
    ]
  },

  {
    id: 'psy-250',
    code: 'PSY 250',
    title: 'Sensation and Perception',
    year: 2,
    semester: 4,
    difficulty: 'Intermediate',
    whyIncluded: 'Oxford and leading research programs include perception as a core second-year course. Explains how physical stimuli are transduced into subjective conscious experience.',
    prerequisites: ['PSY 120'],
    description: 'An advanced investigation into sensory transduction and perceptual interpretation: psychophysics, visual pathways (retina to striate and extrastriate cortex), color vision, depth cues, auditory processing, vestibular and somatosensory mechanisms, and multisensory integration.',
    learningObjectives: [
      'Calculate absolute and difference thresholds and apply Signal Detection Theory (d-prime and beta)',
      'Trace visual processing pathways from photoreceptors through lateral geniculate nucleus to ventral and dorsal streams',
      'Explain trichromatic and opponent-process theories of color vision',
      'Deconstruct perceptual illusions using predictive processing and Bayesian inference models'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy250-u1',
        title: 'Unit 1: Psychophysics & Visual Processing',
        order: 1,
        topics: [
          { id: 'p250-t1', title: 'Classical psychophysics & Signal Detection Theory (SDT)', keyConcepts: ['Weber-Fechner Law', 'Stevens Power Law', 'Hits, Misses, False Alarms', 'd-prime and criterion'] },
          { id: 'p250-t2', title: 'The Retina & Phototransduction', keyConcepts: ['Rods and cones', 'Rhodopsin', 'Dark adaptation', 'Lateral inhibition & Mach bands'] },
          { id: 'p250-t3', title: 'Primary visual cortex (V1) & receptive fields', keyConcepts: ['Hubel & Wiesel', 'Simple, complex, hypercomplex cells', 'Ocular dominance columns'] },
          { id: 'p250-t4', title: 'Ventral and dorsal visual streams ("What" vs "Where/How")', keyConcepts: ['Goodale & Milner', 'Visual agnosia vs optic ataxia', 'Fusiform Face Area'] }
        ]
      },
      {
        id: 'psy250-u2',
        title: 'Unit 2: Colour, Audition & Multisensory Systems',
        order: 2,
        topics: [
          { id: 'p250-t5', title: 'Colour vision: Trichromatic and Opponent-Process models', keyConcepts: ['Young-Helmholtz', 'Hering opponent channels', 'Colour constancy'] },
          { id: 'p250-t6', title: 'Auditory transduction & tonotopic cortical maps', keyConcepts: ['Basilar membrane', 'Hair cells', 'Place theory vs temporal code', 'Interaural time/level differences'] },
          { id: 'p250-t7', title: 'Somatosensation, pain mechanisms, and gate control theory', keyConcepts: ['Mechanoreceptors', 'C-fibers & A-delta fibers', 'Melzack & Wall gate theory'] },
          { id: 'p250-t8', title: 'Multisensory integration & perceptual illusions', keyConcepts: ['McGurk effect', 'Rubber hand illusion', 'Bayesian predictive coding'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-250-1',
        title: 'Sensation and Perception',
        authors: 'Goldstein, E. B., & Brockmole, J. R.',
        edition: '11th Edition',
        year: '2021',
        courseCode: 'PSY 250',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'Gold-standard textbook with unparalleled sensory illustrations and physiological grounding.',
        chaptersToRead: 'Chapters 1 through 15',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-250-1',
        title: 'Receptive Fields of Single Neurones in the Cat’s Striate Cortex',
        authors: 'Hubel, D. H., & Wiesel, T. N.',
        year: 1959,
        journal: 'The Journal of Physiology, 148(3), 574–591',
        courseCode: 'PSY 250',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'How do individual cortical neurons in visual area V1 encode specific geometric patterns of light?',
        method: 'Single-cell microelectrode electrophysiology recording in anesthetized cats viewing projected oriented light slits',
        findings: 'Discovered that V1 neurons do not respond to diffuse illumination, but are tuned to specific orientations, bar widths, and motion directions.',
        importance: 'Nobel-prize winning discovery that established hierarchical feature-detection models in sensory neuroscience.',
        limitations: 'Anesthetized animal recordings do not capture top-down attentional modulation present in active awake perception.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Universal textbook foundation across neurobiology and machine vision (CNN architectures).',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-250-1',
        courseCode: 'PSY 250',
        title: 'Signal Detection Experiment Simulation & Calculation',
        type: 'stats-exercise',
        prompt: 'Run a 100-trial auditory or visual signal detection simulation. Compute the hit rate, false alarm rate, sensitivity index (d-prime), and response bias criterion (c). Interpret what a liberal vs conservative criterion implies in medical radiology or airport security screening.',
        deliverables: 'Computational report with ROC curve plot and interpretation.',
        estimatedHours: 4,
        rubricFocus: ['Correct z-transform calculations', 'Mathematical accuracy of d-prime', 'Application to real-world diagnostic screening']
      },
      {
        id: 'asg-250-2',
        courseCode: 'PSY 250',
        title: 'Müller-Lyer & Perceptual Illusion Mechanistic Critique',
        type: 'paper-analysis',
        prompt: 'Compare two competing explanations for the Müller-Lyer illusion: Gregory’s misapplied size constancy theory (carpentered world hypothesis) vs. spatial filtering / low-level neurophysiological accounts. Review cross-cultural replication findings (Henrich et al., WEIRD samples).',
        deliverables: '1,200-word critical evaluation.',
        estimatedHours: 5,
        rubricFocus: ['Detailed explanation of size constancy scaling', 'Cross-cultural data evaluation']
      }
    ]
  },

  {
    id: 'psy-260',
    code: 'PSY 260',
    title: 'Learning and Behaviour',
    year: 2,
    semester: 4,
    difficulty: 'Intermediate',
    whyIncluded: 'Behavioural conditioning principles remain historically foundational and indispensable in modern clinical behavioral therapies (exposure, behavioral activation, contingency management).',
    prerequisites: ['PSY 101'],
    description: 'The principles of associative and non-associative learning: habituation, sensitization, Pavlovian conditioning mechanisms, the Rescorla-Wagner computational model, operant reinforcement schedules, punishment, stimulus control, and social-observational learning.',
    learningObjectives: [
      'Contrast classical and operant conditioning paradigms and identify their boundary conditions',
      'Explain the Rescorla-Wagner mathematical model of conditioning (blocking, overshadowing)',
      'Design a behavior modification program using shaping, differential reinforcement, and extinction',
      'Critique the radical behaviourist claim that internal mental representations need not be studied'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy260-u1',
        title: 'Unit 1: Classical Conditioning & Associative Models',
        order: 1,
        topics: [
          { id: 'p260-t1', title: 'Habituation, sensitization, and neural mechanisms in Aplysia', keyConcepts: ['Kandel', 'Synaptic depression', 'Serotonin facilitation'] },
          { id: 'p260-t2', title: 'Pavlovian conditioning: Acquisition, extinction, and spontaneous recovery', keyConcepts: ['CS, US, CR, UR', 'Renewal', 'Reinstatement', 'Conditioned taste aversion (Garcia)'] },
          { id: 'p260-t3', title: 'The Rescorla-Wagner Model: Prediction error & associative strength', keyConcepts: ['Delta V = alpha * beta * (lambda - V)', 'Blocking effect (Kamin)', 'Overshadowing'] },
          { id: 'p260-t4', title: 'Conditioned emotional responses & fear conditioning neurobiology', keyConcepts: ['Amygdala basolateral complex', 'Exposure therapy mechanism'] }
        ]
      },
      {
        id: 'psy260-u2',
        title: 'Unit 2: Operant Conditioning & Observational Learning',
        order: 2,
        topics: [
          { id: 'p260-t5', title: 'Operant conditioning: Reinforcement schedules and matching law', keyConcepts: ['FR, VR, FI, VI schedules', 'Herrnstein Matching Law', 'Partial reinforcement extinction effect'] },
          { id: 'p260-t6', title: 'Shaping, chaining, stimulus control, and discrimination', keyConcepts: ['Successive approximations', 'Discriminative stimulus (S-D)', 'Fading'] },
          { id: 'p260-t7', title: 'Aversive control: Positive/negative punishment and learned helplessness', keyConcepts: ['Seligman', 'Depression etiology model', 'Side-effects of punishment'] },
          { id: 'p260-t8', title: 'Bandura’s Social Learning Theory & observational mechanisms', keyConcepts: ['Bobo doll experiment', 'Vicarious reinforcement', 'Self-efficacy'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-260-1',
        title: 'The Principles of Learning and Behavior',
        authors: 'Domjan, M.',
        edition: '7th Edition',
        year: '2018',
        courseCode: 'PSY 260',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The benchmark experimental learning textbook, rigorously presenting animal laboratory paradigms and associative mathematics.',
        chaptersToRead: 'Chapters 1 through 12',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-260-1',
        title: 'A Theory of Pavlovian Conditioning: Variations in the Effectiveness of Reinforcement and Nonreinforcement',
        authors: 'Rescorla, R. A., & Wagner, A. R.',
        year: 1972,
        journal: 'Classical Conditioning II (Appleton-Century-Crofts), 64–99',
        courseCode: 'PSY 260',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'Can associative learning be modeled mathematically as a function of the discrepancy between expected and received reinforcement (prediction error)?',
        method: 'Formal computational model validated against blocking, overshadowing, and conditioned inhibition experimental data',
        findings: 'Proved that learning occurs only when an event is surprising (prediction error), not merely paired in time.',
        importance: 'The foundational computational model of associative learning; direct precursor to modern reinforcement learning algorithms (Q-learning, TD learning).',
        limitations: 'Cannot easily account for latent inhibition or CS-modulatory attentional shifts.',
        replicationStatus: 'Robust',
        currentInterpretation: 'Recognized as one of the most influential mathematical achievements in psychology.',
        verified: true
      },
      {
        id: 'pp-260-2',
        title: 'Transmission of Aggression Through Imitation of Aggressive Models',
        authors: 'Bandura, A., Ross, D., & Ross, S. A.',
        year: 1961,
        journal: 'The Journal of Abnormal and Social Psychology, 63(3), 575–582',
        courseCode: 'PSY 260',
        category: 'foundational',
        priority: 'ADVANCED',
        researchQuestion: 'Will children observe and imitate aggressive behaviour demonstrated by adult models in the absence of reinforcement?',
        method: 'Children observed aggressive adult kicking/punching inflatable Bobo doll versus non-aggressive adult, then placed in room with toys',
        findings: 'Children exposed to aggressive models demonstrated significantly higher novel imitative aggressive physical and verbal acts.',
        importance: 'Demonstrated observational learning without direct reinforcement, dealing a severe blow to radical behaviourism.',
        limitations: 'Demand characteristics (the doll is designed to be hit); imitation vs generalized real-world aggression distinctions.',
        replicationStatus: 'Partially Replicated / Context-Dependent',
        currentInterpretation: 'Classic historical study demonstrating social modeling, though the link between media violence and real-world aggression is far more complex and context-dependent than originally claimed.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-260-1',
        courseCode: 'PSY 260',
        title: 'Applied Behaviour Modification Plan',
        type: 'design-exercise',
        prompt: 'Design an evidence-based behaviour modification plan targeting a specific real-world habit (e.g., smartphone distraction or exercise adherence). Formulate: baseline operational tracking, ABC functional analysis (Antecedents, Behaviour, Consequences), positive reinforcement schedules, and stimulus control strategies.',
        deliverables: '3-page comprehensive behavior intervention protocol.',
        estimatedHours: 5,
        rubricFocus: ['Strict functional behavioral terminology', 'Avoidance of aversive punishment', 'Measurement reliability']
      },
      {
        id: 'asg-260-2',
        courseCode: 'PSY 260',
        title: 'Rescorla-Wagner Prediction Error Simulation',
        type: 'stats-exercise',
        prompt: 'Calculate step-by-step trial-by-trial associative strength (V) across 10 trials of compound conditioning (Light + Tone paired with Food) where Light was previously trained to asymptote (blocking design). Show mathematically why Tone fails to acquire associative strength.',
        deliverables: 'Math table showing lambda, V_light, V_tone, V_total, and delta_V for each trial.',
        estimatedHours: 4,
        rubricFocus: ['Correct mathematical execution of the formula', 'Clear conceptual explanation of blocking']
      }
    ]
  },

  {
    id: 'psy-270',
    code: 'PSY 270',
    title: 'Research Methods II (Measurement, Reliability, Validity)',
    year: 2,
    semester: 4,
    difficulty: 'Intermediate',
    whyIncluded: 'Measurement is the bedrock of valid scientific discovery. Without psychometrics, empirical studies produce spurious noise.',
    prerequisites: ['PSY 130', 'PSY 140'],
    description: 'Classical test theory, scale construction, item analysis, and psychometric validation: operationalization of latent constructs, reliability metrics (test-retest, inter-rater, Cronbach’s alpha, McDonald’s omega), validity frameworks (content, criterion, construct: convergent and discriminant), factor analysis concepts, and survey design.',
    learningObjectives: [
      'Explain Classical Test Theory (Observed Score = True Score + Error)',
      'Calculate and interpret internal consistency reliability (Cronbach’s alpha) and identify its inflation caveats',
      'Construct a Multi-Trait Multi-Method (MTMM) matrix to evaluate construct validity',
      'Design an empirical psychological rating scale following psychometric best practices'
    ],
    estimatedWorkload: '10–12 hours / week',
    units: [
      {
        id: 'psy270-u1',
        title: 'Unit 1: Classical Test Theory & Reliability',
        order: 1,
        topics: [
          { id: 'p270-t1', title: 'Classical Test Theory: X = T + E & Measurement Error', keyConcepts: ['True score variance', 'Error variance', 'Standard error of measurement'] },
          { id: 'p270-t2', title: 'Test-retest and alternate-forms reliability', keyConcepts: ['Time intervals', 'Memory effects', 'Coefficient of stability'] },
          { id: 'p270-t3', title: 'Internal consistency: Split-half, Cronbach’s alpha, and McDonald’s omega', keyConcepts: ['Tau-equivalence assumption', 'Alpha inflation with scale length'] },
          { id: 'p270-t4', title: 'Inter-rater reliability: Cohen’s kappa, Fleiss’ kappa, and ICC', keyConcepts: ['Chance agreement correction', 'Two-way random effects'] }
        ]
      },
      {
        id: 'psy270-u2',
        title: 'Unit 2: Construct Validity, Factor Analysis & Scale Construction',
        order: 2,
        topics: [
          { id: 'p270-t5', title: 'Content, Face, and Criterion Validity (Predictive & Concurrent)', keyConcepts: ['Criterion contamination', 'Incremental validity'] },
          { id: 'p270-t6', title: 'Construct validity: Convergent and discriminant evidence', keyConcepts: ['Campbell & Fiske MTMM matrix', 'Nomological network'] },
          { id: 'p270-t7', title: 'Exploratory & Confirmatory Factor Analysis concepts', keyConcepts: ['Factor loadings', 'Eigenvalues & scree plots', 'Simple structure'] },
          { id: 'p270-t8', title: 'Survey design: Item writing, response formats, and response sets', keyConcepts: ['Likert scales', 'Acquiescence bias', 'Social desirability', 'Reverse coding'] }
        ]
      }
    ],
    textbooks: [
      {
        id: 'tb-270-1',
        title: 'Psychometrics: An Introduction',
        authors: 'Furr, R. M.',
        edition: '4th Edition',
        year: '2021',
        courseCode: 'PSY 270',
        type: 'Primary',
        priority: 'CORE',
        whyItMatters: 'The clearest, most mathematically grounded modern undergraduate introduction to test theory, reliability, and validity.',
        chaptersToRead: 'Chapters 1 through 10',
        verified: true
      }
    ],
    papers: [
      {
        id: 'pp-270-1',
        title: 'Convergent and Discriminant Validation by the Multitrait-Multimethod Matrix',
        authors: 'Campbell, D. T., & Fiske, D. W.',
        year: 1959,
        journal: 'Psychological Bulletin, 56(2), 81–105',
        courseCode: 'PSY 270',
        category: 'foundational',
        priority: 'CORE',
        researchQuestion: 'How can researchers separate variance due to a psychological trait from variance introduced by the measurement method?',
        method: 'Formal matrix evaluating correlations between multiple traits measured by multiple methods',
        findings: 'Demonstrated that many measures correlate higher with different traits using the same method than with the same trait using different methods (method bias).',
        importance: 'The seminal foundation for establishing construct validity.',
        limitations: 'Complex heuristic rules replaced in modern psychometrics by confirmatory factor analysis.',
        replicationStatus: 'Robust',
        currentInterpretation: 'One of the most cited papers in social science history; standard methodology requirement.',
        verified: true
      }
    ],
    assignments: [
      {
        id: 'asg-270-1',
        courseCode: 'PSY 270',
        title: 'Published Psychological Scale Psychometric Audit',
        type: 'paper-analysis',
        prompt: 'Select a widely used published psychological scale (e.g. PHQ-9, Rosenberg Self-Esteem, or Big Five Inventory). Review its development paper and write a psychometric audit assessing: 1. Item generation, 2. Test-retest reliability, 3. Internal consistency (alpha/omega), 4. Convergent and discriminant validity evidence, 5. Measurement invariance across demographics.',
        deliverables: '3-page formal psychometric audit report.',
        estimatedHours: 6,
        rubricFocus: ['Critique of alpha assumptions', 'Evaluation of discriminant validity', 'Identification of psychometric limitations']
      },
      {
        id: 'asg-270-2',
        courseCode: 'PSY 270',
        title: 'Scale Construction & Validation Protocol Design',
        type: 'design-exercise',
        prompt: 'Develop a novel 10-item self-report questionnaire measuring a defined psychological construct (e.g. "Academic Procrastination Resilience"). Include: theoretical construct definition, 10 items (with at least 2 reverse-coded items), 5-point Likert scale format, and a step-by-step proposal for testing reliability and construct validity.',
        deliverables: 'Construct definition + 10 items + 2-page validation plan.',
        estimatedHours: 5,
        rubricFocus: ['Item clarity and absence of double-barreled phrasing', 'Sound validation roadmap (MTMM or CFA)']
      }
    ]
  }
];
