import { ALL_COURSES } from './curriculumData';
import { YEAR_3_AND_4_COURSES, ADVANCED_ELECTIVES } from './curriculumDataYear34';
import { Course } from '../types';

export const MASTER_COURSES: Course[] = [
  ...ALL_COURSES,
  ...YEAR_3_AND_4_COURSES,
  ...ADVANCED_ELECTIVES
];

export function getCourseByCode(code: string): Course | undefined {
  return MASTER_COURSES.find(c => c.code.toLowerCase() === code.toLowerCase() || c.id.toLowerCase() === code.toLowerCase());
}

export function getCoursesByYear(year: 1 | 2 | 3 | 4): Course[] {
  return MASTER_COURSES.filter(c => c.year === year && !c.isElective);
}

export function getAllElectives(): Course[] {
  return ADVANCED_ELECTIVES;
}
