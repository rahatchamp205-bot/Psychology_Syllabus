import { UserDegreeState, UserNote } from '../types';

const STORAGE_KEY = 'psych_degree_selfstudy_state_v1';

export const INITIAL_DEGREE_STATE: UserDegreeState = {
  courseProgress: {
    'psy-101': { status: 'in-progress', completedUnits: ['psy101-u1'], notes: 'Currently reviewing history and evolutionary fundamentals.' },
    'psy-105': { status: 'in-progress', completedUnits: [], notes: 'Working on operationalization and Popper falsifiability.' }
  },
  readingStatus: {
    'tb-101-1': 'Reading',
    'pp-101-1': 'Completed',
    'tb-105-1': 'Reading'
  },
  assignmentStatus: {},
  notes: [
    {
      id: 'init-note-1',
      title: 'Course Inception: The Logic of Falsification (PSY 105)',
      content:
        '# Notes on Karl Popper’s Logic of Scientific Discovery\n\n* A hypothesis is only scientific if it is empirically falsifiable.\n* Freudian psychoanalysis and classical Adlerian individual psychology frequently fail Popper’s demarcation criterion because any patient behavior can be rationalized post-hoc.\n* Modern psychological science requires explicit pre-stated conditions under which the hypothesis would be abandoned.',
      courseCode: 'PSY 105',
      updatedAt: new Date().toISOString()
    }
  ],
  quizScores: {
    'q-stat-1': 1,
    'q-cog-1': 1
  },
  flashcardStats: {},
  researchSkillsMastered: [
    'skill-ops-1',
    'skill-meas-1'
  ],
  thesisMilestones: {
    researchQuestionFormulated: false,
    literatureReviewDrafted: false,
    methodologyDesigned: false,
    powerAnalysisCalculated: false,
    preregistrationSubmitted: false,
    dataCollectedOrObtained: false,
    statisticalAnalysisCompleted: false,
    thesisDraftAssembled: false,
    defenseCompleted: false
  },
  lastActive: new Date().toISOString()
};

export function loadUserDegreeState(): UserDegreeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_DEGREE_STATE;
    }
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_DEGREE_STATE,
      ...parsed
    };
  } catch (err) {
    console.error('Failed to load user state from localStorage:', err);
    return INITIAL_DEGREE_STATE;
  }
}

export function saveUserDegreeState(state: UserDegreeState): void {
  try {
    const updated = {
      ...state,
      lastActive: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save user state to localStorage:', err);
  }
}

export function exportDegreeStateAsJson(state: UserDegreeState): void {
  const jsonStr = JSON.stringify(state, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `psychology-degree-progress-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importDegreeStateFromJson(jsonString: string): UserDegreeState | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (typeof parsed === 'object' && parsed !== null) {
      const merged: UserDegreeState = {
        ...INITIAL_DEGREE_STATE,
        ...parsed
      };
      saveUserDegreeState(merged);
      return merged;
    }
    return null;
  } catch (err) {
    console.error('Invalid JSON format for degree state:', err);
    return null;
  }
}

export function resetDegreeState(): UserDegreeState {
  localStorage.removeItem(STORAGE_KEY);
  return INITIAL_DEGREE_STATE;
}
