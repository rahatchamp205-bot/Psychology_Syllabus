import React from 'react';
import {
  GraduationCap,
  BookOpen,
  FileCheck2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Circle,
  Activity,
  Award,
  Binary,
  BookMarked
} from 'lucide-react';
import { Course, NavSection, UserDegreeState } from '../types';
import { MASTER_COURSES, getCoursesByYear } from '../data/courses';

interface DashboardViewProps {
  degreeState: UserDegreeState;
  onSelectCourse: (course: Course) => void;
  onNavigateSection: (section: NavSection) => void;
  onOpenPlanner: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  degreeState,
  onSelectCourse,
  onNavigateSection,
  onOpenPlanner
}) => {
  const years: (1 | 2 | 3 | 4)[] = [1, 2, 3, 4];
  const yearTitles = {
    1: 'Year 1: Foundations & Scientific Bases',
    2: 'Year 2: Core Disciplines & Empirical Methods',
    3: 'Year 3: Advanced Specialization & Clinical/Neuro',
    4: 'Year 4: Honours Seminar & Capstone Thesis'
  };

  const yearCredits = {
    1: '24.0 Credit Hours • 6 Foundation Courses',
    2: '32.0 Credit Hours • 8 Core Disciplines',
    3: '32.0 Credit Hours • 8 Advanced Seminars',
    4: '32.0 Credit Hours • Capstone Thesis & Seminars'
  };

  const totalCoreCourses = MASTER_COURSES.filter(c => !c.isElective).length;
  const completedCoursesCount = Object.values(degreeState.courseProgress).filter(
    (c) => c?.status === 'completed'
  ).length;
  const inProgressCoursesCount = Object.values(degreeState.courseProgress).filter(
    (c) => c?.status === 'in-progress'
  ).length;

  // Reading counts
  const totalReadingsTracked = Object.keys(degreeState.readingStatus).length;
  const completedReadingsCount = Object.values(degreeState.readingStatus).filter(
    s => s === 'Completed'
  ).length;

  // Assignment counts
  const completedAssignmentsCount = Object.values(degreeState.assignmentStatus).filter(
    Boolean
  ).length;

  return (
    <div className="space-y-8 pb-16">
      {/* ACADEMIC MASTHEAD / HERO */}
      <section
        className="relative bg-[#FAF9F6] border border-[#E5E2DC] border-t-4 border-t-[#A51C30] p-7 sm:p-10 shadow-2xs"
        aria-label="Curriculum Masthead"
      >
        <div className="max-w-4xl">
          {/* Subtle Latin Academic Inscription */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-seal font-bold text-[#A51C30] uppercase tracking-widest">
              NULLIUS IN VERBA
            </span>
            <span className="text-[#A8A29E] text-xs">•</span>
            <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
              Empirical & Open Science Framework
            </span>
            <span className="text-[#A8A29E] text-xs hidden sm:inline">•</span>
            <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider hidden sm:inline">
              Honours-Level Scholarship
            </span>
          </div>

          {/* Primary Academic Heading */}
          <h1 className="font-serif-scholarly text-3xl sm:text-5xl font-bold tracking-tight text-[#1E1E1E] leading-tight">
            Psychology Degree
          </h1>

          {/* Typographic Divider */}
          <div className="w-16 h-0.5 bg-[#A51C30] my-3.5" />

          {/* Explicitly Requested Scholarly Mission Statement */}
          <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-serif max-w-3xl">
            A four-year, research-oriented self-study curriculum grounded in empirical psychology,
            neuroscience, statistics, methodology, and honours-level scholarship.
          </p>

          <div className="text-xs text-[#78716C] mt-2 font-mono">
            Structured around 26 full semester syllabi • Primary literature & peer-reviewed replications
          </div>

          {/* Primary & Secondary Scholarly Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-[#E5E2DC]">
            <button
              onClick={onOpenPlanner}
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#A51C30] hover:bg-[#8B1425] text-white text-xs font-semibold tracking-wide transition-all shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F4EDCA]" />
              <span>What Should I Study Today?</span>
            </button>

            <button
              onClick={() => onNavigateSection('psychopathology')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#FFFFFF] hover:bg-[#FAF8F3] text-[#1E1E1E] text-xs font-semibold border border-[#E5E2DC] hover:border-[#A51C30]/40 transition-all"
            >
              <Activity className="w-3.5 h-3.5 text-[#A51C30]" />
              <span>Psychopathology Track</span>
            </button>

            <button
              onClick={() => onNavigateSection('research-stats')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#FFFFFF] hover:bg-[#FAF8F3] text-[#1E1E1E] text-xs font-semibold border border-[#E5E2DC] hover:border-[#A51C30]/40 transition-all"
            >
              <Binary className="w-3.5 h-3.5 text-[#78716C]" />
              <span>Statistics & Research Methods</span>
            </button>
          </div>
        </div>
      </section>

      {/* DASHBOARD METRICS: QUIET, EDITORIAL, RESTRAINED */}
      <section aria-label="Curriculum Standing">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Courses Metric */}
          <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E2DC] border-l-2 border-l-[#A51C30] shadow-2xs">
            <div className="flex items-center justify-between text-[#78716C] mb-2">
              <span className="text-[10px] font-seal font-bold uppercase tracking-wider">
                Courses
              </span>
              <GraduationCap className="w-4 h-4 text-[#A51C30]" />
            </div>
            <div className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
              {completedCoursesCount}{' '}
              <span className="text-xs text-[#78716C] font-normal font-sans">
                / {totalCoreCourses} completed
              </span>
            </div>
            <div className="text-[11px] text-[#57534E] mt-1.5 flex items-center justify-between">
              <span>{inProgressCoursesCount} enrolled in progress</span>
              <span className="font-mono text-[10px] text-[#78716C]">
                {completedCoursesCount * 4}.0 cr
              </span>
            </div>
          </div>

          {/* Readings Metric */}
          <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E2DC] border-l-2 border-l-[#1E1E1E] shadow-2xs">
            <div className="flex items-center justify-between text-[#78716C] mb-2">
              <span className="text-[10px] font-seal font-bold uppercase tracking-wider">
                Readings
              </span>
              <BookOpen className="w-4 h-4 text-[#1E1E1E]" />
            </div>
            <div className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
              {completedReadingsCount}{' '}
              <span className="text-xs text-[#78716C] font-normal font-sans">
                sources finished
              </span>
            </div>
            <div className="text-[11px] text-[#57534E] mt-1.5">
              {totalReadingsTracked} textbooks & papers cataloged
            </div>
          </div>

          {/* Assignments Metric */}
          <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E2DC] border-l-2 border-l-[#78716C] shadow-2xs">
            <div className="flex items-center justify-between text-[#78716C] mb-2">
              <span className="text-[10px] font-seal font-bold uppercase tracking-wider">
                Assignments
              </span>
              <FileCheck2 className="w-4 h-4 text-[#78716C]" />
            </div>
            <div className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
              {completedAssignmentsCount}{' '}
              <span className="text-xs text-[#78716C] font-normal font-sans">
                submitted
              </span>
            </div>
            <div className="text-[11px] text-[#57534E] mt-1.5">
              Empirical essays, labs & preregistrations
            </div>
          </div>

          {/* Honours Thesis Metric */}
          <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E2DC] border-l-2 border-l-[#A51C30] shadow-2xs">
            <div className="flex items-center justify-between text-[#78716C] mb-2">
              <span className="text-[10px] font-seal font-bold uppercase tracking-wider">
                Honours Thesis
              </span>
              <Award className="w-4 h-4 text-[#A51C30]" />
            </div>
            <div className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
              {degreeState.thesisMilestones.thesisDraftAssembled ? 'Completed' : 'In Progress'}
            </div>
            <div className="text-[11px] text-[#57534E] mt-1.5">
              5,000w empirical thesis & defense
            </div>
          </div>
        </div>
      </section>

      {/* FOUR-YEAR CURRICULUM ROADMAP & CATALOGUE */}
      <section className="space-y-4" aria-label="Four-Year Curriculum Roadmap">
        <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
          <div>
            <h2 className="font-serif-scholarly text-2xl font-bold text-[#1E1E1E]">
              Four-Year Academic Roadmap
            </h2>
            <p className="text-xs text-[#57534E] mt-0.5">
              Select any academic year to inspect detailed unit syllabi, required seminal papers, textbooks, and rubric deliverables.
            </p>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-seal uppercase tracking-wider text-[#A51C30] font-semibold">
            BSc / BA Honours Curriculum
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {years.map((yr) => {
            const courses = getCoursesByYear(yr);
            const yrCompleted = courses.filter(
              c => degreeState.courseProgress[c.id]?.status === 'completed'
            ).length;
            const yrPct = Math.round((yrCompleted / courses.length) * 100);

            return (
              <div
                key={yr}
                className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-4 hover:border-[#D5D1C8] transition-all"
              >
                {/* Year Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#E5E2DC] pb-3">
                  <div>
                    <div className="text-[11px] font-seal font-bold text-[#A51C30] uppercase tracking-wider mb-0.5">
                      Academic Year {yr}
                    </div>
                    <h3 className="font-serif-scholarly font-bold text-lg text-[#1E1E1E]">
                      {yearTitles[yr]}
                    </h3>
                    <div className="text-[11px] text-[#78716C] font-mono mt-0.5">
                      {yearCredits[yr]}
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigateSection(`year-${yr}` as NavSection)}
                    className="p-2 text-[#78716C] hover:text-[#A51C30] hover:bg-[#FAF8F3] border border-[#E5E2DC] rounded-xs transition-colors"
                    title={`View Year ${yr} complete syllabus`}
                    aria-label={`Open Year ${yr}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#57534E]">
                    <span className="font-serif italic">Year Requirement Standing</span>
                    <span className="font-mono text-[11px] text-[#1E1E1E] font-medium">
                      {yrCompleted} of {courses.length} Completed ({yrPct}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E5E2DC] rounded-none overflow-hidden">
                    <div
                      className="h-full bg-[#A51C30] transition-all duration-300"
                      style={{ width: `${Math.max(yrPct, 2)}%` }}
                    />
                  </div>
                </div>

                {/* Course Catalogue Cards within Year */}
                <div className="space-y-2 pt-1">
                  {courses.map((course) => {
                    const status = degreeState.courseProgress[course.id]?.status || 'not-started';
                    const readingCount = course.textbooks.length + course.papers.length;
                    const assignmentCount = course.assignments.length;

                    return (
                      <button
                        key={course.id}
                        onClick={() => onSelectCourse(course)}
                        className="w-full text-left p-3 rounded-xs border border-[#E5E2DC] hover:border-[#A51C30]/40 hover:bg-[#FAF9F6] transition-all flex items-center justify-between gap-3 group bg-[#FFFFFF]"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs font-bold text-[#A51C30]">
                              {course.code}
                            </span>
                            <span className="text-[10px] text-[#78716C] uppercase font-seal tracking-wider">
                              Year {course.year} • Semester {course.semester}
                            </span>
                            <span className="text-[10px] text-[#78716C] font-mono">
                              4.0 credits
                            </span>
                          </div>
                          <div className="font-serif-scholarly font-bold text-sm text-[#1E1E1E] truncate group-hover:text-[#A51C30] transition-colors">
                            {course.title}
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-[#78716C] mt-1 font-mono">
                            <span>{readingCount} readings</span>
                            <span>•</span>
                            <span>{assignmentCount} assignments</span>
                            <span>•</span>
                            <span className="capitalize">{course.difficulty}</span>
                          </div>
                        </div>

                        {/* Status Icon */}
                        <div className="shrink-0 flex items-center gap-1.5">
                          {status === 'completed' ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#226738] bg-[#E8F3EB] px-2 py-0.5 rounded-xs border border-[#226738]/20">
                              <CheckCircle className="w-3.5 h-3.5 text-[#226738]" />
                              <span>Completed</span>
                            </span>
                          ) : status === 'in-progress' ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C4A00] bg-[#FFF5E6] px-2 py-0.5 rounded-xs border border-[#8C4A00]/20">
                              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                              <span>Enrolled</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded-xs border border-[#E5E2DC]">
                              <Circle className="w-3 h-3 text-[#A8A29E]" />
                              <span>Not Started</span>
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SPECIALIZED SCHOLARLY TRACKS (EDITORIAL PROSPECTUS CARDS) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5" aria-label="Specialized Research Tracks">
        {/* Psychopathology Track Card */}
        <div
          onClick={() => onNavigateSection('psychopathology')}
          className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] hover:border-[#D5D1C8] transition-all cursor-pointer group shadow-2xs space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#A51C30]" />
              <span className="text-[11px] font-seal font-bold text-[#A51C30] uppercase tracking-wider">
                Specialized Clinical Curriculum
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#A51C30] group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="font-serif-scholarly font-bold text-xl text-[#1E1E1E]">
            Psychopathology & Clinical Mechanisms Track
          </h3>
          <p className="text-xs text-[#57534E] leading-relaxed font-serif">
            A comprehensive abnormal psychology sequence covering diagnostic foundations, 14 major DSM-5-TR disorder classes,
            and 10 advanced neurobiological and cognitive mechanism modules.
          </p>
          <div className="pt-2 flex items-center justify-between border-t border-[#E5E2DC] text-[11px] font-medium text-[#A51C30]">
            <span>Explore 29 Clinical Case Modules & Etiologies</span>
            <span>View Syllabus →</span>
          </div>
        </div>

        {/* Replication Crisis & Open Science Tracker */}
        <div
          onClick={() => onNavigateSection('replication-tracker')}
          className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] border-t-3 border-t-[#1E1E1E] hover:border-[#D5D1C8] transition-all cursor-pointer group shadow-2xs space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1E1E1E]" />
              <span className="text-[11px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider">
                Methodological Integrity
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#1E1E1E] group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="font-serif-scholarly font-bold text-xl text-[#1E1E1E]">
            Replication Crisis & Open Science Tracker
          </h3>
          <p className="text-xs text-[#57534E] leading-relaxed font-serif">
            Rigorous case audits of landmark psychological claims (power posing, ego depletion, Bem ESP, Stanford Prison),
            investigating statistical power, p-hacking, and modern institutional reforms (OSF, Registered Reports).
          </p>
          <div className="pt-2 flex items-center justify-between border-t border-[#E5E2DC] text-[11px] font-medium text-[#1E1E1E]">
            <span>Audit 10 Landmark Cases & Open Science Reforms</span>
            <span>View Tracker →</span>
          </div>
        </div>
      </section>
    </div>
  );
};
