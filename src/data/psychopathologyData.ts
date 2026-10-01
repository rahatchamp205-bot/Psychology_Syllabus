import { PsychopathologyTopic } from '../types';

export const PSYCHOPATHOLOGY_DISCLAIMER =
  'EDUCATIONAL DISCLAIMER: This platform provides honours-level academic and scientific educational resources in abnormal psychology and psychiatric science. It is strictly not a clinical diagnostic tool, medical assessment, or personalized psychiatric advisory instrument. Content is organized around DSM-5-TR and ICD-11 research criteria and mechanistic models for university self-study.';

export const PSYCHOPATHOLOGY_TRACK: PsychopathologyTopic[] = [
  // FOUNDATIONS
  {
    id: 'psycho-found-1',
    category: 'foundations',
    title: 'Classification & Nosology (Categorical vs Dimensional)',
    summary: 'The theoretical and epistemological foundations of mental disorder classification, comparing DSM-5-TR categorical boundaries with modern dimensional frameworks (HiTOP and RDoC).',
    coreFeatures: [
      'Polythetic diagnostic criteria: shared clinical presentation without necessary/sufficient individual signs',
      'Diagnostic thresholding: clinical impairment and subjective distress requirements',
      'Comorbidity challenge: high rates of co-occurring diagnoses reflecting shared underlying transdiagnostic latent factors'
    ],
    epidemiology: 'Approximately 46% lifetime prevalence for any DSM disorder in population-based epidemiologic surveys (NCS-R).',
    etiologicalModels: [
      'Kuhn paradigm shifts in psychiatry: from psychoanalytic etiology to empirical descriptive nosology (DSM-III)',
      'Hierarchical Taxonomy of Psychopathology (HiTOP): spectra (Internalizing, Externalizing, Thought Disorder)',
      'Research Domain Criteria (RDoC): multi-level neurobehavioral constructs'
    ],
    evidenceBasedTreatments: [
      'Transdiagnostic CBT protocols (Barlow Unified Protocol)',
      'Measurement-Based Care (MBC) tracking continuous symptom trajectories'
    ],
    controversies: [
      'Reification of descriptive diagnostic labels into supposed distinct disease entities',
      'Arbitrary numerical symptom cutoffs (e.g. 5 of 9 symptoms required for MDD)'
    ],
    relatedCourses: ['PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-found-2',
    category: 'foundations',
    title: 'Diagnosis & Clinical Assessment Methodology',
    summary: 'Principles of clinical formulation, semi-structured clinical interviews (SCID-5), self-report screening instruments, and differential diagnosis.',
    coreFeatures: [
      'Semi-structured clinical interviews: SCID-5 (Research & Clinical versions), MINI',
      'Standardized rating scales: PHQ-9, GAD-7, PANSS, Y-BOCS',
      'Multimethod assessment: convergent self-report, informant report, and behavioral observation'
    ],
    epidemiology: 'Structured interviews dramatically increase inter-rater diagnostic reliability (Cohen’s kappa > 0.75) compared to unstructured clinical interviews.',
    etiologicalModels: [
      'Biopsychosocial case formulation: 4P factor model (Predisposing, Precipitating, Perpetuating, Protective factors)'
    ],
    evidenceBasedTreatments: [
      'Collaborative assessment and feedback approaches'
    ],
    controversies: [
      'Cultural bias in Western psychiatric symptom conceptualizations',
      'Over-reliance on self-report without functional impairment verification'
    ],
    relatedCourses: ['PSY 270', 'PSY 301']
  },
  {
    id: 'psycho-found-3',
    category: 'foundations',
    title: 'Epidemiology of Mental Disorders',
    summary: 'Population-level study of incidence, prevalence, disease burden (DALYs), and social determinants of psychological distress.',
    coreFeatures: [
      'Point prevalence, 12-month prevalence, and lifetime risk metrics',
      'Disability-Adjusted Life Years (DALYs): depression as a leading cause of global disability (WHO Global Burden of Disease)',
      'Age-of-onset distributions: median onset in adolescence and early adulthood (ages 14–24)'
    ],
    epidemiology: 'World Health Organization World Mental Health surveys across 28 countries.',
    etiologicalModels: [
      'Social causation vs social drift hypotheses in severe psychopathology',
      'Stress vulnerability models interacting with socio-economic status'
    ],
    evidenceBasedTreatments: [
      'Public health preventative interventions and early psychosis detection programs'
    ],
    controversies: [
      'True incidence shifts vs diagnostic bracket creep and increased health-seeking behavior'
    ],
    relatedCourses: ['PSY 130', 'PSY 301']
  },
  {
    id: 'psycho-found-4',
    category: 'foundations',
    title: 'Risk and Protective Factors',
    summary: 'Longitudinal identification of vulnerability factors, resilience mechanisms, and developmental trajectories leading to psychological distress or flourishing.',
    coreFeatures: [
      'Diathesis-Stress paradigm: distal vulnerabilities activated by proximal stressors',
      'Adverse Childhood Experiences (ACEs): cumulative graded relationship to adult morbidity',
      'Cognitive and social resilience factors: psychological flexibility, social support, cognitive reserve'
    ],
    epidemiology: 'Individuals with >=4 ACEs exhibit 4-fold increased lifetime risk for depressive disorders.',
    etiologicalModels: [
      'Differential susceptibility theory (Belsky): orchid vs dandelion genetic sensitivities',
      'Allostatic load model (McEwen): neuroendocrine wear-and-tear'
    ],
    evidenceBasedTreatments: [
      'Resilience training, trauma-informed systems, social support enhancement'
    ],
    controversies: [
      'Risk factors often non-specific (e.g., poverty predicts almost all psychiatric outcomes non-specifically)'
    ],
    relatedCourses: ['PSY 210', 'PSY 301']
  },
  {
    id: 'psycho-found-5',
    category: 'foundations',
    title: 'Etiological Models in Psychopathology',
    summary: 'A critical comparative synthesis of major contemporary paradigms: biological psychiatry, cognitive-behavioural models, psychodynamic formulations, and network models.',
    coreFeatures: [
      'Explanatory pluralism (Kendler): rejecting reductionist biological monocausality',
      'Network theory (Borsboom): mental disorders as complex networks of mutually reinforcing symptoms without a latent disease entity',
      'Evolutionary psychiatry: mismatch, defense mechanisms (anxiety/fever analog), and polygenic balancing selection'
    ],
    epidemiology: 'Genome-Wide Association Studies (GWAS) show high polygenic overlap and genetic correlation across psychiatric disorders.',
    etiologicalModels: [
      'Cognitive model (Beck): schema activation and cognitive distortions',
      'Neurocircuit models: dysregulation in cortico-limbic and fronto-striatal circuits'
    ],
    evidenceBasedTreatments: [
      'Integrative evidence-based multimodal care combining psychotherapy and indicated pharmacotherapy'
    ],
    controversies: [
      'Ongoing debates between chemical imbalance narratives and psychosocial structural critiques'
    ],
    relatedCourses: ['PSY 105', 'PSY 301', 'PSY 401']
  },

  // DISORDERS (ALL 14 REQUESTED CATEGORIES)
  {
    id: 'psycho-dis-1',
    category: 'disorders',
    title: 'Anxiety Disorders',
    dsm5trCode: 'F41.1 / F41.0 / F40.10',
    summary: 'Generalized Anxiety Disorder (GAD), Panic Disorder, Agoraphobia, Social Anxiety Disorder, and Specific Phobias.',
    coreFeatures: [
      'Excessive, persistent fear and autonomic apprehension out of proportion to real danger',
      'Behavioral avoidance and active safety maneuvers maintaining distorted threat estimates',
      'Interoceptive conditioning (catastrophic misinterpretation of bodily sensations in Panic Disorder)'
    ],
    epidemiology: 'Lifetime prevalence ~29-31% across all anxiety disorders; female-to-male ratio approximately 2:1.',
    etiologicalModels: [
      'Clark cognitive model of panic: somatic sensations -> catastrophic misinterpretation -> adrenaline surge -> panic peak',
      'Barlow triple vulnerability model: generalized biological, generalized psychological, and specific psychological vulnerabilities',
      'Hyperactive amygdala response and impaired ventromedial prefrontal top-down inhibition'
    ],
    evidenceBasedTreatments: [
      'Cognitive Behavioral Therapy (In Vivo and Interoceptive Exposure)',
      'SSRIs, SNRIs (first-line pharmacotherapy; avoidance of long-term benzodiazepine monotherapy)'
    ],
    controversies: [
      'Over-prescription of sedative-hypnotics and neglect of exposure therapy in primary care settings'
    ],
    relatedCourses: ['PSY 301', 'PSY 340']
  },
  {
    id: 'psycho-dis-2',
    category: 'disorders',
    title: 'Obsessive-Compulsive and Related Disorders',
    dsm5trCode: 'F42 / F45.22 / F63.3',
    summary: 'Obsessive-Compulsive Disorder (OCD), Body Dysmorphic Disorder (BDD), Hoarding Disorder, and Trichotillomania.',
    coreFeatures: [
      'Obsessions: recurrent, intrusive, unwanted thoughts, urges, or mental images generating intense distress',
      'Compulsions: repetitive overt behaviors or covert mental rituals performed to neutralize anxiety or prevent feared catastrophe',
      'Ego-dystonic vs ego-syntonic insight dimensions'
    ],
    epidemiology: 'Lifetime prevalence 1.5–2.5%; typically manifests in late childhood or early adulthood.',
    etiologicalModels: [
      'Cortico-striatal-thalamic-cortical (CSTC) loop hyper-reactivity (orbitofrontal cortex and caudate nucleus failure to terminate error signals)',
      'Inflated responsibility and thought-action fusion cognitive models (Rachman, Salkovskis)'
    ],
    evidenceBasedTreatments: [
      'Exposure and Response Prevention (ERP) — first-line psychotherapy',
      'High-dose SSRIs (higher doses than depression guidelines); augmentation with antipsychotics or deep brain stimulation for refractory cases'
    ],
    controversies: [
      'Separation from anxiety disorders in DSM-5: whether CSTC circuitry justifies a separate chapter'
    ],
    relatedCourses: ['PSY 301', 'PSY 340', 'PSY 360']
  },
  {
    id: 'psycho-dis-3',
    category: 'disorders',
    title: 'Trauma- and Stressor-Related Disorders',
    dsm5trCode: 'F43.10 / F43.12',
    summary: 'Posttraumatic Stress Disorder (PTSD), Acute Stress Disorder, Complex PTSD (ICD-11), and Adjustment Disorders.',
    coreFeatures: [
      'Exposure to actual or threatened death, serious injury, or sexual violence (Criterion A)',
      'Four symptom clusters: 1. Intrusive re-experiencing, 2. Persistent avoidance, 3. Negative alterations in cognition/mood, 4. Hyperarousal/reactivity',
      'Complex PTSD features: affective dysregulation, negative self-concept, and interpersonal disturbances'
    ],
    epidemiology: 'Lifetime prevalence ~6.8–8.3% in US adults; higher in military veterans and survivors of interpersonal violence.',
    etiologicalModels: [
      'Dual representation theory (Brewin): verbally accessible memory vs situationally accessible perceptual memory fragments',
      'Neurobiology: reduced hippocampal volume, hyper-responsive amygdala, hypofunctional anterior cingulate and medial PFC',
      'Fear extinction recall impairment'
    ],
    evidenceBasedTreatments: [
      'Trauma-Focused CBT: Prolonged Exposure (PE) and Cognitive Processing Therapy (CPT)',
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'SSRIs (sertraline, paroxetine approved); MDMA-assisted psychotherapy in phase 3 clinical investigation'
    ],
    controversies: [
      'Criterion A scope creep in popular culture vs strict DSM boundaries; debate over EMDR eye movements as non-specific vs active ingredient'
    ],
    relatedCourses: ['PSY 301', 'PSY 340', 'PSY 401']
  },
  {
    id: 'psycho-dis-4',
    category: 'disorders',
    title: 'Depressive Disorders',
    dsm5trCode: 'F32 / F33 / F34.1',
    summary: 'Major Depressive Disorder (MDD), Persistent Depressive Disorder (Dysthymia), Premenstrual Dysphoric Disorder, and Disruptive Mood Dysregulation Disorder.',
    coreFeatures: [
      'Depressed mood or anhedonia (loss of interest/pleasure) present for >=2 weeks accompanied by >=5 total neurovegetative/cognitive symptoms',
      'Vegetative symptoms: sleep disturbance, appetite changes, psychomotor agitation/retardation, fatigue',
      'Cognitive symptoms: worthlessness, excessive guilt, concentration deficits, recurrent suicidal ideation'
    ],
    epidemiology: 'Lifetime prevalence 16–20%; 12-month prevalence ~7%; leading cause of disability worldwide (WHO).',
    etiologicalModels: [
      'Beck cognitive triad: negative views of the self, world, and future mediated by rigid core schemas',
      'Learned helplessness and hopelessness theory (Abramson, Seligman)',
      'Neuroendocrine: chronic HPA axis hyper-activation, glucocorticoid resistance, elevated pro-inflammatory cytokines',
      'Neuroplasticity hypothesis: reduced BDNF expression and dendritic atrophy in hippocampus reversed by chronic treatments'
    ],
    evidenceBasedTreatments: [
      'Cognitive Behavioral Therapy (CBT), Behavioral Activation (BA), Interpersonal Psychotherapy (IPT)',
      'Pharmacotherapy: SSRIs, SNRIs, Bupropion, Mirtazapine; Esketamine and IV Ketamine for treatment-resistant depression; ECT'
    ],
    controversies: [
      'Fried (2017) symptom heterogeneity (52 distinct symptoms across scales); Moncrieff (2022) umbrella review dismantling simple serotonin deficiency'
    ],
    relatedCourses: ['PSY 301', 'PSY 340', 'PSY 360', 'PSY 401']
  },
  {
    id: 'psycho-dis-5',
    category: 'disorders',
    title: 'Bipolar and Related Disorders',
    dsm5trCode: 'F31.0 - F31.9 / F34.0',
    summary: 'Bipolar I Disorder (manic episodes), Bipolar II Disorder (hypomanic + major depressive episodes), and Cyclothymic Disorder.',
    coreFeatures: [
      'Manic episode: distinct period of abnormally elevated, expansive, or irritable mood and increased energy lasting >=1 week with >=3 symptoms (grandiosity, decreased need for sleep, pressured speech, racing thoughts, distractibility, risky behavior)',
      'Hypomanic episode: similar symptoms lasting >=4 consecutive days without causing severe functional impairment or psychosis',
      'High rates of depressive polarity predominance in overall course'
    ],
    epidemiology: 'Lifetime prevalence ~1.0% for Bipolar I, ~1.1% for Bipolar II; equal male-to-female ratio; onset late adolescence/early 20s.',
    etiologicalModels: [
      'Highest heritability among psychiatric disorders (~70-85% twin concordance)',
      'Circadian and social rhythm disruption (molecular clock genes CLOCK/BMAL1 dysregulation)',
      'Dopamine receptor hypersensitivity during manic phases; mitochondrial dysfunction'
    ],
    evidenceBasedTreatments: [
      'Pharmacotherapy: Mood stabilizers (Lithium gold standard, Valproate, Lamotrigine) and atypical antipsychotics (quetiapine, lurasidone)',
      'Psychotherapy: Interpersonal and Social Rhythm Therapy (IPSRT), Family-Focused Therapy (FFT), psychoeducation'
    ],
    controversies: [
      'Antidepressant-induced manic switches and mixed states; misdiagnosis of Bipolar II as unipolar depression'
    ],
    relatedCourses: ['PSY 301', 'PSY 360']
  },
  {
    id: 'psycho-dis-6',
    category: 'disorders',
    title: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    dsm5trCode: 'F20.9 / F25 / F22',
    summary: 'Schizophrenia, Schizoaffective Disorder, Delusional Disorder, Brief Psychotic Disorder, and Schizotypal Disorder.',
    coreFeatures: [
      'Positive symptoms: delusions (persecutory, referential, grandiose), hallucinations (predominantly auditory), disorganized speech/formal thought disorder',
      'Negative symptoms: avolition, alogia, anhedonia, flat affect, asociality (dramatically impair long-term functioning)',
      'Cognitive impairment: working memory deficits, executive dysfunction, processing speed reductions'
    ],
    epidemiology: 'Lifetime prevalence ~0.7–1.0%; modal onset late teens to mid-20s for males, slightly later for females; elevated suicide risk (~5%).',
    etiologicalModels: [
      'Two-hit neurodevelopmental hypothesis: early genetic/perinatal vulnerability followed by adolescent synaptic pruning / cannabis / stress',
      'Dopamine hypothesis: mesolimbic hyper-dopaminergia (positive symptoms via aberrant salience) and mesocortical hypo-dopaminergia (negative symptoms)',
      'Glutamate / NMDA receptor hypofunction on parvalbumin-positive GABAergic interneurons leading to cortical disinhibition'
    ],
    evidenceBasedTreatments: [
      'Antipsychotic pharmacotherapy (first-generation D2 antagonists, second-generation 5HT2A/D2 antagonists, partial agonists like aripiprazole)',
      'Psychosocial: Coordinated Specialty Care (CSC) for first-episode psychosis, CBT for psychosis (CBTp), Social Skills Training, Supported Employment'
    ],
    controversies: [
      'High rates of metabolic syndrome and cardiovascular mortality associated with atypical antipsychotics; medical model vs Hearing Voices Network'
    ],
    relatedCourses: ['PSY 301', 'PSY 310', 'PSY 360', 'PSY 401']
  },
  {
    id: 'psycho-dis-7',
    category: 'disorders',
    title: 'Personality Disorders',
    dsm5trCode: 'F60.0 - F60.9',
    summary: 'Enduring patterns of inner experience and behavior that deviate markedly from cultural expectations, grouped into Cluster A, B, and C.',
    coreFeatures: [
      'Cluster A (Odd/Eccentric): Paranoid, Schizoid, Schizotypal',
      'Cluster B (Dramatic/Erratic): Borderline, Antisocial, Narcissistic, Histrionic',
      'Cluster C (Anxious/Fearful): Avoidant, Dependent, Obsessive-Compulsive Personality Disorder',
      'DSM-5 Alternative Model for Personality Disorders (AMPD): Criterion A (Level of Personality Functioning) & Criterion B (Pathological Trait Domains)'
    ],
    epidemiology: 'General population prevalence ~9–15%; high comorbidity with mood, anxiety, and substance use disorders.',
    etiologicalModels: [
      'Linehan Biosocial Theory of Borderline Personality Disorder: biological emotional vulnerability interacting with invalidating developmental environment',
      'Attachment disruptions and early severe relational trauma',
      'Polygenic trait extremes on the Five-Factor Model (e.g. extreme Neuroticism, extremely low Agreeableness)'
    ],
    evidenceBasedTreatments: [
      'Dialectical Behavior Therapy (DBT), Mentalization-Based Treatment (MBT), Schema Therapy, Transference-Focused Psychotherapy (TFP)',
      'No FDA-approved medications for personality disorders; psychotropics used targeted solely for crisis/affective dysregulation'
    ],
    controversies: [
      'Severe diagnostic overlap and stigma; clinical debate between DSM-5 categorical clusters vs AMPD dimensional trait profiles'
    ],
    relatedCourses: ['PSY 240', 'PSY 301', 'PSY 340']
  },
  {
    id: 'psycho-dis-8',
    category: 'disorders',
    title: 'Neurodevelopmental Disorders',
    dsm5trCode: 'F84.0 / F90.0 - F90.9',
    summary: 'Autism Spectrum Disorder (ASD), Attention-Deficit/Hyperactivity Disorder (ADHD), Intellectual Disability, and Specific Learning Disorders.',
    coreFeatures: [
      'Early developmental onset with pervasive impacts on social, academic, or occupational functioning',
      'ASD: persistent deficits in social communication/interaction and restricted, repetitive patterns of behavior, interests, or activities',
      'ADHD: persistent pattern of inattention and/or hyperactivity-impulsivity inconsistent with developmental level'
    ],
    epidemiology: 'ADHD ~5–7% in youth, ~2.5–4% in adults; ASD ~1.5–2% (CDC reports 1 in 36 due to expanded diagnostic criteria and surveillance).',
    etiologicalModels: [
      'Extremely high heritability (~75-80% for ADHD, ~70-90% for ASD)',
      'ADHD: delayed prefrontal cortical maturation and fronto-striatal dopaminergic/noradrenergic transmission hypofunction',
      'ASD: altered neural connectivity (local hyper-connectivity vs long-range hypo-connectivity), synaptic gene mutations (neuroligins, neurexins)'
    ],
    evidenceBasedTreatments: [
      'ADHD: Stimulant pharmacotherapy (Methylphenidate, Amphetamine compounds) and Behavioral Parent Training',
      'ASD: Early behavioral intervention (Naturalistic Developmental Behavioral Interventions), speech therapy, occupational therapy'
    ],
    controversies: [
      'Neurodiversity paradigm vs traditional medical deficit model; adult ADHD diagnostic surge and stimulant supply constraints'
    ],
    relatedCourses: ['PSY 210', 'PSY 301', 'PSY 360']
  },
  {
    id: 'psycho-dis-9',
    category: 'disorders',
    title: 'Eating Disorders',
    dsm5trCode: 'F50.0 - F50.8',
    summary: 'Anorexia Nervosa, Bulimia Nervosa, Binge-Eating Disorder, and Avoidant/Restrictive Food Intake Disorder (ARFID).',
    coreFeatures: [
      'Severe disturbances in eating behavior and related thoughts and emotions',
      'Anorexia: restriction of energy intake leading to significantly low body weight, intense fear of gaining weight, distorted body image',
      'Bulimia: recurrent binge eating followed by inappropriate compensatory behaviors (purging, laxatives, excessive exercise)',
      'Binge-Eating Disorder: recurrent binges marked by lack of control without regular compensatory behaviors'
    ],
    epidemiology: 'Lifetime prevalence ~0.6–1.0% for Anorexia (highest mortality rate among psychiatric disorders, SMR ~5.9); Bulimia ~1.0–1.5%; BED ~2–3%.',
    etiologicalModels: [
      'Transdiagnostic cognitive-behavioral model (Fairburn): core over-evaluation of shape and weight',
      'Biological: altered reward sensitivity, insula interoceptive blunting, serotonergic signaling dysregulation'
    ],
    evidenceBasedTreatments: [
      'Family-Based Treatment (FBT / Maudsley approach) for adolescents with Anorexia',
      'Enhanced Cognitive Behavior Therapy (CBT-E) for adults across eating disorders; Lisdexamfetamine approved for BED'
    ],
    controversies: [
      'Involuntary medical feeding legal and ethical dilemmas in severe chronic anorexia'
    ],
    relatedCourses: ['PSY 301', 'PSY 340']
  },
  {
    id: 'psycho-dis-10',
    category: 'disorders',
    title: 'Substance-Related and Addictive Disorders',
    dsm5trCode: 'F10 - F19 / F63.0',
    summary: 'Alcohol, Cannabis, Opioid, Stimulant, Sedative, and Tobacco Use Disorders, plus non-substance Gambling Disorder.',
    coreFeatures: [
      'Cluster of cognitive, behavioral, and physiological symptoms indicating continued substance use despite significant substance-related problems',
      'Pathological criteria: impaired control, social impairment, risky use, pharmacological criteria (tolerance and physiological withdrawal)',
      'Severity grading based on symptom count (Mild: 2-3, Moderate: 4-5, Severe: 6+)'
    ],
    epidemiology: 'Alcohol Use Disorder lifetime prevalence ~29% in US; Opioid Use Disorder driving epidemic public health crisis.',
    etiologicalModels: [
      'Incentive-sensitization theory (Robinson & Berridge): "wanting" (dopaminergic mesolimbic sensitization) decouples from "liking" (hedonic opioid hotspots)',
      'Koob three-stage cycle: binge/intoxication (basal ganglia), withdrawal/negative affect (extended amygdala), preoccupation/anticipation (PFC)'
    ],
    evidenceBasedTreatments: [
      'Medication-Assisted Treatment (MAT): Buprenorphine/Methadone for opioids, Naltrexone/Acamprosate for alcohol',
      'Psychosocial: Contingency Management (highest effect size in stimulant disorders), Motivational Interviewing, CBT, 12-Step facilitation'
    ],
    controversies: [
      'Harm reduction models vs mandatory abstinence ideologies; criminalization vs public health decriminalization'
    ],
    relatedCourses: ['PSY 260', 'PSY 301', 'PSY 360']
  },
  {
    id: 'psycho-dis-11',
    category: 'disorders',
    title: 'Dissociative Disorders',
    dsm5trCode: 'F44.81 / F44.0 / F48.1',
    summary: 'Dissociative Identity Disorder (DID), Dissociative Amnesia, and Depersonalization/Derealization Disorder.',
    coreFeatures: [
      'Disruption of and/or discontinuity in the normal integration of consciousness, memory, identity, emotion, perception, and body representation',
      'Depersonalization: experiences of unreality, detachment, or being an outside observer to one’s thoughts/body',
      'Derealization: experiences of unreality or detachment with respect to surroundings (dreamlike, foggy, artificial)',
      'DID: presence of two or more distinct personality states and recurrent gaps in recall of everyday events'
    ],
    epidemiology: 'Depersonalization/derealization symptoms common (~50% transient lifetime); clinically diagnosed DID estimated ~1.0–1.5% in psychiatric populations.',
    etiologicalModels: [
      'Posttraumatic model: DID as an extreme developmental defense mechanism against unbearable childhood interpersonal abuse',
      'Sociocognitive / Fantasy model (Lilienfeld, Lynn): DID symptoms cultivated by therapist suggestion, hypnosis, media portrayal, and cultural demand characteristics'
    ],
    evidenceBasedTreatments: [
      'Phase-oriented trauma therapy: safety/stabilization, trauma processing, and identity integration',
      'No specific medications validated for core dissociative pathology'
    ],
    controversies: [
      'Intense scientific battle between the posttraumatic model and the sociocognitive iatrogenic model; concerns over false recovered memories'
    ],
    relatedCourses: ['PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-dis-12',
    category: 'disorders',
    title: 'Somatic Symptom and Related Disorders',
    dsm5trCode: 'F45.1 / F45.21 / F44.4 - F44.7',
    summary: 'Somatic Symptom Disorder, Illness Anxiety Disorder, Conversion Disorder (Functional Neurological Symptom Disorder), and Factitious Disorder.',
    coreFeatures: [
      'Prominence of distressing somatic symptoms associated with excessive, disproportionate thoughts, feelings, and behaviors',
      'Conversion Disorder: altered voluntary motor or sensory function that is medically incompatible with neurological pathophysiology (e.g. non-epileptic seizures, functional weakness)',
      'Absence of conscious feigning (distinguishing from Malingering and Factitious Disorder)'
    ],
    epidemiology: 'Somatic symptom presentations account for up to 15–20% of general outpatient medical consultations.',
    etiologicalModels: [
      'Central sensitization and hyper-attentive somatic scanning',
      'Predictive coding model of Functional Neurological Disorder (Edwards et al.): hyper-precise top-down priors override sensory prediction error signals'
    ],
    evidenceBasedTreatments: [
      'Specialized multidisciplinary CBT targeting catastrophic health cognitions and checking behaviors',
      'Specialized physical therapy for functional neurological weakness'
    ],
    controversies: [
      'Risk of medical diagnostic overshadowing: mistaking rare autoimmune or neurological illnesses for somatic symptom disorder'
    ],
    relatedCourses: ['PSY 301', 'PSY 340']
  },
  {
    id: 'psycho-dis-13',
    category: 'disorders',
    title: 'Sleep-Wake Disorders',
    dsm5trCode: 'G47.00 / G47.419 / G47.33',
    summary: 'Insomnia Disorder, Hypersomnolence, Narcolepsy, Obstructive Sleep Apnea, and Circadian Rhythm Sleep-Wake Disorders.',
    coreFeatures: [
      'Dissatisfaction regarding sleep quantity or quality, associated with daytime distress or impairment',
      'Insomnia: difficulty initiating, maintaining, or returning to sleep present >=3 nights/week for >=3 months despite adequate sleep opportunity',
      'Bidirectional causative link: sleep disruption exacerbates mood and psychotic disorders, and vice versa'
    ],
    epidemiology: 'Chronic insomnia disorder affects 6–10% of adults; acute insomnia affects ~30%; highly comorbid with depression and PTSD.',
    etiologicalModels: [
      'Spielman 3P Model of Insomnia: Predisposing factors (hyperarousal), Precipitating factors (acute stressor), Perpetuating factors (napping, spending excessive time in bed)',
      'Narcolepsy: autoimmune destruction of hypocretin/orexin-producing neurons in lateral hypothalamus'
    ],
    evidenceBasedTreatments: [
      'Cognitive Behavioral Therapy for Insomnia (CBT-I) — established first-line gold standard superior to long-term hypnotic medication',
      'Components: Sleep restriction, stimulus control, sleep hygiene, cognitive reframing'
    ],
    controversies: [
      'Chronic dependence and cognitive risks associated with long-term prescription of Z-drugs (zolpidem) and benzodiazepines'
    ],
    relatedCourses: ['PSY 120', 'PSY 301']
  },
  {
    id: 'psycho-dis-14',
    category: 'disorders',
    title: 'Neurocognitive Disorders',
    dsm5trCode: 'G30.9 / G31.09 / G31.83',
    summary: 'Delirium, Major and Mild Neurocognitive Disorders due to Alzheimer’s Disease, Frontotemporal Lobar Degeneration, Lewy Bodies, Vascular Disease, or Traumatic Brain Injury.',
    coreFeatures: [
      'Acquired decline in one or more cognitive domains (complex attention, executive function, learning and memory, language, perceptual-motor, social cognition)',
      'Major NCD: cognitive deficits interfere with independence in basic activities of daily living (IADLs)',
      'Mild NCD (Mild Cognitive Impairment): cognitive decline without loss of daily functional independence'
    ],
    epidemiology: 'Global prevalence of dementia exceeds 55 million, expected to surpass 130 million by 2050 due to population aging.',
    etiologicalModels: [
      'Alzheimer’s: Amyloid-beta cascade hypothesis, hyperphosphorylated tau neurofibrillary tangles, APOE epsilon-4 genetic risk allele',
      'Frontotemporal: tauopathies and TDP-43 protein aggregates producing early behavioral disinhibition or primary progressive aphasias',
      'Dementia with Lewy Bodies: alpha-synuclein cytoplasmic inclusions causing visual hallucinations, REM sleep behavior disorder, and parkinsonism'
    ],
    evidenceBasedTreatments: [
      'Cholinesterase inhibitors (Donepezil, Rivastigmine), NMDA receptor antagonist (Memantine); monoclonal antibodies targeting amyloid (Lecanemab, Donanemab)',
      'Cognitive stimulation therapy and environmental safety modifications'
    ],
    controversies: [
      'Modest clinical benefits vs substantial side-effect risks (ARIA brain swelling/microhemorrhages) of anti-amyloid monoclonal antibodies'
    ],
    relatedCourses: ['PSY 350', 'PSY 360']
  },

  // ADVANCED MECHANISMS
  {
    id: 'psycho-mech-1',
    category: 'mechanisms',
    title: 'Cognitive Models (Attentional, Interpretative & Memory Biases)',
    summary: 'Information-processing biases that preferentially allocate cognitive resources to threat or loss information, maintaining anxiety and depressive pathologies.',
    coreFeatures: [
      'Attentional bias: selective visual or cognitive capture by threat stimuli (measured via dot-probe and eye-tracking)',
      'Interpretation bias: ambiguous cues automatically decoded as threatening or catastrophic',
      'Memory bias: preferential recall of negative/failure events over positive experiences in depression'
    ],
    epidemiology: 'Demonstrated across 80%+ of clinical anxiety and depression cohorts compared to healthy controls.',
    etiologicalModels: [
      'Eysenck Attentional Control Theory: anxiety impairs goal-directed attentional system while enhancing stimulus-driven system',
      'Cognitive Bias Modification (CBM) paradigms targeting automated attentional shifts'
    ],
    evidenceBasedTreatments: [
      'Cognitive Restructuring and behavioral experiments within CBT to disconfirm interpretative distortions'
    ],
    controversies: [
      'Reliability of the dot-probe task: psychometric internal consistency of reaction-time difference scores is notoriously poor'
    ],
    relatedCourses: ['PSY 201', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-2',
    category: 'mechanisms',
    title: 'Biological Mechanisms (HPA Axis, Inflammation & Neural Circuits)',
    summary: 'The physiological cascade linking chronic neuroendocrine activation, peripheral cytokine elevation, and fronto-striatal-limbic circuit dysfunction.',
    coreFeatures: [
      'Hypothalamic-Pituitary-Adrenal (HPA) axis: CRH -> ACTH -> Cortisol secretion with glucocorticoid receptor downregulation',
      'Immunopsychiatry: pro-inflammatory cytokines (IL-6, TNF-alpha) crossing the blood-brain barrier to trigger microglial activation',
      'Tryptophan catabolism: shifting serotonin synthesis toward neurotoxic quinolinic acid via IDO enzyme activation'
    ],
    epidemiology: 'Elevated baseline CRP (>3 mg/L) observed in approximately one-third of unmedicated patients with MDD.',
    etiologicalModels: [
      'Allostatic load and metabolic syndrome overlap with chronic psychiatric illness',
      'Default Mode Network (DMN) hyper-connectivity sustaining self-referential rumination'
    ],
    evidenceBasedTreatments: [
      'Aerobic exercise interventions reducing systemic inflammatory markers; anti-inflammatory augmentation trials'
    ],
    controversies: [
      'Inflammatory biomarkers are non-specific and do not define an exclusive biological subtype of depression'
    ],
    relatedCourses: ['PSY 120', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-3',
    category: 'mechanisms',
    title: 'Neurodevelopmental Models of Psychopathology',
    summary: 'How early disruptions in brain maturation, synaptic pruning, and circuit formation interact with critical developmental windows to trigger psychopathology.',
    coreFeatures: [
      'Abnormal synaptic pruning in late adolescence (C4 gene complement-mediated pruning overactivation in schizophrenia)',
      'Prefrontal cortical maturation timeline (myelination continuing through mid-20s)',
      'Neurodevelopmental cascades: childhood attentional deficits cascading into academic failure, social exclusion, and secondary depression'
    ],
    epidemiology: '75% of all lifetime psychiatric disorders manifest before age 24, corresponding directly to peak neurodevelopmental reorganization.',
    etiologicalModels: [
      'Weinberger neurodevelopmental model of schizophrenia',
      'Early life stress accelerating pubertal development and emotional circuit maturation'
    ],
    evidenceBasedTreatments: [
      'Early intervention services for youth mental health (headspace model, coordinated specialty care)'
    ],
    controversies: [
      'Predictive validity of "clinical high risk" for psychosis syndromes (only ~20-25% convert to psychosis within 3 years)'
    ],
    relatedCourses: ['PSY 210', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-4',
    category: 'mechanisms',
    title: 'Genetic and Epigenetic Factors',
    summary: 'The polygenic architecture of mental disorders, genome-wide association studies (GWAS), polygenic risk scores (PRS), and environmental epigenetic modifications.',
    coreFeatures: [
      'Highly polygenic architecture: thousands of common single-nucleotide polymorphisms (SNPs) each contributing minuscule fractions of risk',
      'Missing heritability: gap between twin study heritability estimates and SNP-based heritability',
      'Epigenetics: DNA methylation and histone acetylation altering gene expression without changing the underlying DNA sequence'
    ],
    epidemiology: 'Cross-Disorder Group of the Psychiatric Genomics Consortium (PGC) demonstrates massive pleiotropy between ADHD, depression, bipolar, and schizophrenia.',
    etiologicalModels: [
      'Meaney & Szyf maternal care epigenetic model (glucocorticoid receptor gene promoter methylation)',
      'Caspi et al. gene-by-environment interaction studies (5-HTTLPR x childhood trauma), now recognized as heavily underpowered candidate-gene findings'
    ],
    evidenceBasedTreatments: [
      'Pharmacogenomic testing (currently limited evidence for primary drug selection, but useful for CYP450 metabolism profiling)'
    ],
    controversies: [
      'Collapse of the "candidate gene" literature (e.g. 5-HTTLPR, BDNF Val66Met) failing to replicate in massive well-powered GWAS'
    ],
    relatedCourses: ['PSY 120', 'PSY 370', 'PSY 401']
  },
  {
    id: 'psycho-mech-5',
    category: 'mechanisms',
    title: 'Environmental Factors & Social Determinants',
    summary: 'The macro-level and interpersonal environment: poverty, discrimination, urbanicity, neighborhood crime, and social isolation.',
    coreFeatures: [
      'Dose-response relationship between social deprivation and psychiatric diagnosis',
      'Urbanicity: individuals born and raised in urban environments have a 2-fold increased risk of developing psychotic disorders',
      'Minority stress model: chronic stressors experienced by stigmatized minority groups drive elevated anxiety, depression, and substance misuse'
    ],
    epidemiology: 'Global studies consistently link low socioeconomic status to higher psychiatric morbidity and reduced treatment access.',
    etiologicalModels: [
      'Social causation (adversity causes disorder) vs Social selection (disorder causes downward economic drift)',
      'Loneliness as a biological stressor equivalent in mortality risk to chronic smoking'
    ],
    evidenceBasedTreatments: [
      'Community psychology, housing-first interventions, policy-level social safety net programs'
    ],
    controversies: [
      'Medicalization of socioeconomic suffering into individualized psychiatric disorders'
    ],
    relatedCourses: ['PSY 220', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-6',
    category: 'mechanisms',
    title: 'Stress and Trauma Neurobiology',
    summary: 'The neurobiological transformation from acute physiological stress adaptation to chronic pathological trauma architecture.',
    coreFeatures: [
      'Sympathomedullary (SAM) axis and HPA axis acute fight-or-flight mobilization',
      'Toxic stress: prolonged activation of stress response systems in the absence of protective adult relationships',
      'Fear conditioning and fear extinction circuits involving the amygdala, ventromedial prefrontal cortex, and hippocampus'
    ],
    epidemiology: 'Trauma exposure is common (>70% globally), but only a minority (~10-20%) develop chronic PTSD, emphasizing individual diathesis.',
    etiologicalModels: [
      'Failure of extinction learning: vmPFC fails to signal safety and inhibit amygdala fear output',
      'Hippocampal contextual encoding deficit: memories encoded without time/place stamps, triggering spontaneous vivid re-experiencing'
    ],
    evidenceBasedTreatments: [
      'Exposure therapy facilitating new inhibitory safety learning rather than memory erasure'
    ],
    controversies: [
      'Memory reconsolidation interference (propranolol, behavioral reactivation) promises vs clinical trial replication inconsistencies'
    ],
    relatedCourses: ['PSY 120', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-7',
    category: 'mechanisms',
    title: 'Transdiagnostic Models (HiTOP & Network Psychometrics)',
    summary: 'Alternative structural frameworks that conceptualize psychopathology as dimensional spectra or complex symptom networks rather than discrete DSM categories.',
    coreFeatures: [
      'Hierarchical Taxonomy of Psychopathology (HiTOP): organizing symptoms into components, subfactors, spectra (Internalizing, Thought Disorder, Externalizing), and a general "p-factor"',
      'Network approach (Borsboom): disorders are not caused by an underlying disease, but emerge from direct causal interactions between symptoms (e.g., insomnia -> fatigue -> concentration loss -> worthlessness)',
      'The "p-factor" (Caspi et al.): a single general dimension of psychopathology reflecting severity, chronicity, and comorbidity'
    ],
    epidemiology: 'The general psychopathology p-factor accounts for ~50% of the shared variance across all psychiatric diagnoses.',
    etiologicalModels: [
      'Dimensional vulnerability spectra mapping onto continuous neurobiological variation',
      'Hysteresis in symptom networks: once a network exceeds a threshold, feedback loops sustain symptoms even after the initial stressor resolves'
    ],
    evidenceBasedTreatments: [
      'Targeting central network nodes or transdiagnostic processes (e.g. sleep or repetitive negative thinking) to collapse multi-symptom clusters'
    ],
    controversies: [
      'Whether the p-factor reflects a genuine substantive neurocognitive vulnerability or a methodological artifact of general distress/acquiescence'
    ],
    relatedCourses: ['PSY 270', 'PSY 301', 'PSY 401']
  },
  {
    id: 'psycho-mech-8',
    category: 'mechanisms',
    title: 'Psychosis Mechanisms (Aberrant Salience & Predictive Coding)',
    summary: 'The computational and neurochemical mechanisms that generate hallucinations and delusions in psychotic disorders.',
    coreFeatures: [
      'Aberrant Salience hypothesis (Kapur): hyper-dopaminergic firing in the mesolimbic system attaches unwarranted significance to neutral everyday stimuli',
      'Delusions as cognitive top-down efforts to make sense of aberrantly salient experiences',
      'Predictive processing failure (Friston, Fletcher): abnormal precision-weighting of sensory prediction errors relative to top-down priors'
    ],
    epidemiology: 'Subclinical psychotic experiences (mild paranoia, perceptual aberrations) occur in ~5–7% of the general population.',
    etiologicalModels: [
      'Jumping to Conclusions (JTC) bias on the beads task in formal thought disorder',
      'NMDA receptor hypofunction disrupting gamma oscillations and cortical synchronization'
    ],
    evidenceBasedTreatments: [
      'D2 receptor antagonists attenuating aberrant salience signals; CBT for psychosis exploring alternative non-delusional interpretations'
    ],
    controversies: [
      'Reconciling dopamine-centric models with the high prevalence of cognitive and negative symptoms that do not respond to D2 blockade'
    ],
    relatedCourses: ['PSY 301', 'PSY 310', 'PSY 401']
  },
  {
    id: 'psycho-mech-9',
    category: 'mechanisms',
    title: 'Mood-Disorder Mechanisms (Reward Blunting & Rumination)',
    summary: 'Specific computational and neurocircuit mechanisms driving unipolar depression and bipolar affective switches.',
    coreFeatures: [
      'Anhedonia as blunted reward processing: impaired reward anticipation vs intact consummatory "liking"',
      'Rumination: repetitive, passive focus on symptoms of distress and possible causes/consequences without active problem-solving',
      'Default Mode Network (DMN) hyper-connectivity coupled with Task-Positive Network hypo-activation'
    ],
    epidemiology: 'Rumination is the single strongest cognitive vulnerability prospectively predicting onset of major depressive episodes.',
    etiologicalModels: [
      'Pizzagalli signal-detection reward tasks: depressed individuals fail to develop response bias toward rewarded stimuli',
      'Bipolar kindling model (Post): early mood episodes triggered by severe life events; subsequent episodes become autonomous and trigger spontaneously'
    ],
    evidenceBasedTreatments: [
      'Rumination-Focused CBT (Watkins), Behavioral Activation targeting reward re-engagement'
    ],
    controversies: [
      'Difficulty parsing reward prediction error deficits from motor psychomotor retardation in clinical depression'
    ],
    relatedCourses: ['PSY 301', 'PSY 340', 'PSY 401']
  },
  {
    id: 'psycho-mech-10',
    category: 'mechanisms',
    title: 'Anxiety Mechanisms (Interoception, Threat Sensitivity & Safety Behaviors)',
    summary: 'The psychological and neural maintenance loops that prevent fear extinction and sustain pathological anxiety.',
    coreFeatures: [
      'Interoceptive hypersensitivity: exaggerated awareness and catastrophic appraisal of heartbeat, breathing, or dizziness',
      'Safety behaviors: subtle overt or covert actions taken to prevent a feared catastrophe that inadvertently prevent fear disconfirmation',
      'Inhibitory learning failure: difficulty acquiring and retrieving conditioned safety signals (Craske model)'
    ],
    epidemiology: 'Safety behaviors are present in >95% of patients with panic disorder, social phobia, and OCD.',
    etiologicalModels: [
      'Insula cortex hyper-reactivity during interoceptive anticipation',
      'Craske inhibitory learning theory: exposure succeeds not by habituation (lowering subjective distress), but by maximizing expectancy violation'
    ],
    evidenceBasedTreatments: [
      'Inhibitory-learning-focused exposure therapy with strict elimination of safety behaviors'
    ],
    controversies: [
      'Habituation-based exposure protocols vs modern expectancy-violation inhibitory learning protocols in clinical training'
    ],
    relatedCourses: ['PSY 250', 'PSY 301', 'PSY 340']
  }
];
