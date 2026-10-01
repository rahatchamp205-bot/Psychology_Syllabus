export type PriorityLevel = 'CORE' | 'RECOMMENDED' | 'ADVANCED' | 'CONTROVERSIAL' | 'FREE';

export type ReadingStatus = 'Not Started' | 'Reading' | 'Completed' | 'not-started' | 'reading' | 'completed' | 'skipped' | 'revisit';

export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

export type AssignmentStatus = 'not-started' | 'in-progress' | 'submitted' | 'completed';

export type PaperCategory = 'foundational' | 'contemporary' | 'controversial' | 'seminal';

export type DifficultyLevel = 'Introductory' | 'Intermediate' | 'Advanced' | 'Honours / Capstone';

export type NavSection =
  | 'dashboard'
  | 'year-1'
  | 'year-2'
  | 'year-3'
  | 'year-4'
  | 'reading-bank'
  | 'reading-library'
  | 'research-papers'
  | 'psychopathology'
  | 'research-stats'
  | 'statistics'
  | 'research-methods'
  | 'replication-tracker'
  | 'active-recall'
  | 'study-planner'
  | 'notebook'
  | 'degree-progress'
  | 'assignments'
  | 'self-assessment'
  | 'spaced-review'
  | 'thesis'
  | 'milestones'
  | 'progress'
  | 'settings';

export interface CourseTopic {
  id: string;
  title: string;
  keyConcepts?: string[];
}

export interface CourseUnit {
  id: string;
  title: string;
  order: number;
  topics: CourseTopic[];
}

export interface Textbook {
  id: string;
  title: string;
  authors: string;
  edition?: string;
  year?: string;
  courseCode: string;
  type: 'Primary' | 'Supplementary' | 'Free alternative' | 'Reference';
  priority: PriorityLevel;
  whyItMatters: string;
  chaptersToRead: string;
  verified: boolean;
  freeUrl?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  courseCode: string;
  category: PaperCategory;
  priority: PriorityLevel;
  researchQuestion: string;
  method: string;
  findings: string;
  importance?: string;
  limitations: string;
  replicationStatus: 'Robust' | 'Partially Replicated / Context-Dependent' | 'Controversial / Failed Replication' | 'Modern Synthesis' | 'Failed' | 'Discredited' | 'Fragile';
  currentInterpretation: string;
  verified: boolean;
  link?: string;
}

export interface Assignment {
  id: string;
  courseCode: string;
  title: string;
  type: 'short-answer' | 'critical-evaluation' | 'essay' | 'paper-analysis' | 'stats-exercise' | 'design-exercise' | 'lit-review' | 'mini-project' | string;
  prompt: string;
  deliverables: string;
  estimatedHours: number;
  rubricFocus: string[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  year: 1 | 2 | 3 | 4;
  semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  whyIncluded: string;
  prerequisites: string[];
  difficulty: DifficultyLevel;
  description: string;
  learningObjectives: string[];
  estimatedWorkload: string;
  units: CourseUnit[];
  textbooks: Textbook[];
  papers: ResearchPaper[];
  assignments: Assignment[];
  isElective?: boolean;
}

export interface QuizQuestion {
  id: string;
  courseCode: string;
  topicId?: string;
  unitId?: string;
  quizType?: 'quick' | 'unit' | 'final';
  type?: 'multiple-choice' | 'true-false' | 'definition' | 'scenario' | 'method-critique';
  category?: 'statistical-test-selection' | 'methodological-critique' | 'empirical-findings' | 'theorist-matching' | 'key-terms' | string;
  prompt?: string;
  question?: string;
  options: string[];
  correctAnswer?: number | string;
  correctAnswerIndex?: number;
  explanation: string;
  topicRevisit?: string;
  difficulty: 'basic' | 'applied' | 'critical-thinking' | 'beginner' | 'intermediate' | 'advanced';
  verified?: boolean;
}

export interface FlashcardItem {
  id: string;
  courseCode: string;
  front: string;
  back: string;
  keyConcept: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface PsychopathologyTopic {
  id: string;
  category: 'foundations' | 'disorders' | 'mechanisms';
  title: string;
  dsm5trCode?: string;
  summary: string;
  coreFeatures: string[];
  epidemiology: string;
  etiologicalModels: string[];
  evidenceBasedTreatments: string[];
  controversies: string[];
  relatedCourses: string[];
}

export interface StatTestGuide {
  id: string;
  testName: string;
  designType: string;
  purpose: string;
  variableTypes?: string;
  assumptions: string[];
  apaTemplate: string;
  rCode: string;
  pythonCode: string;
}

export interface StatPitfall {
  id: string;
  name: string;
  severity: 'Critical' | 'Moderate' | 'High' | 'Medium' | 'Low';
  description: string;
  howToAvoid: string;
  example: string;
}

export interface YearProgression {
  year: 1 | 2 | 3 | 4;
  title: string;
  focus: string;
  courses: string[];
  coreCompetencies: string[];
}

export interface ReplicationCase {
  id: string;
  originalStudy: string;
  authors?: string;
  year: number;
  originalClaim: string;
  replicationAttempts?: string;
  verdict: 'Discredited' | 'Failed' | 'Fragile' | 'Nuanced' | string;
  currentStatus: string;
  lessonsLearned: string;
}

export interface UserNote {
  id: string;
  title: string;
  content: string;
  courseCode?: string;
  updatedAt: string;
}

export interface UserDegreeState {
  courseProgress: Record<string, { status: CourseStatus; completedUnits?: string[]; notes?: string }>;
  readingStatus: Record<string, ReadingStatus>;
  assignmentStatus: Record<string, boolean>;
  notes: UserNote[];
  quizScores: Record<string, number>;
  flashcardStats: Record<string, { interval: number; easeFactor: number; nextReview: string }>;
  researchSkillsMastered: string[];
  thesisMilestones: {
    researchQuestionFormulated: boolean;
    literatureReviewDrafted: boolean;
    methodologyDesigned: boolean;
    powerAnalysisCalculated: boolean;
    preregistrationSubmitted: boolean;
    dataCollectedOrObtained: boolean;
    statisticalAnalysisCompleted: boolean;
    thesisDraftAssembled: boolean;
    defenseCompleted: boolean;
  };
  lastActive: string;
}
