import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Clock,
  CheckCircle2,
  Circle,
  Award,
  ArrowUpRight,
  Filter,
  GraduationCap
} from 'lucide-react';
import { Course, CourseStatus, UserDegreeState } from '../types';
import { getCoursesByYear, getAllElectives } from '../data/courses';

interface YearViewProps {
  year: 1 | 2 | 3 | 4;
  degreeState: UserDegreeState;
  onSelectCourse: (course: Course) => void;
  onUpdateCourseStatus: (courseId: string, status: CourseStatus) => void;
}

export const YearView: React.FC<YearViewProps> = ({
  year,
  degreeState,
  onSelectCourse,
  onUpdateCourseStatus
}) => {
  const [selectedSemester, setSelectedSemester] = useState<'all' | number>('all');

  const yearMetadata = {
    1: {
      title: 'Year 1: Foundations of Mind, Brain, and Scientific Inquiry',
      theme: 'Epistemology, Biological Bases, Psychometrics & Classical Paradigms',
      credits: '24.0 Credit Units Equivalent • 6 Required Foundation Courses',
      description:
        'The foundational curriculum establishes the epistemological and empirical scaffolding of psychological science: the historical transition from philosophical introspection to empirical verification, fundamental neuroanatomy, sensory transduction, and rigorous experimental methodology.',
      semesters: [1, 2]
    },
    2: {
      title: 'Year 2: Core Substantive Disciplines of Psychology',
      theme: 'Cognitive Architecture, Developmental Trajectories, Social Attribution, Personality & Inferential Statistics',
      credits: '32.0 Credit Units Equivalent • 8 Core Disciplinary Courses',
      description:
        'The core curriculum investigates the substantive pillars of modern psychology: working memory, psycholinguistics, normative and atypical lifespan development, social cognition, trait taxonomy (Five-Factor Model), operant learning, and probability theory underlying null hypothesis significance testing.',
      semesters: [3, 4]
    },
    3: {
      title: 'Year 3: Advanced Specialization, Clinical Science & Neuroscience',
      theme: 'Nosology, Cognitive Neuroscience, General Linear Models, Psychotherapy RCTs & Psychopharmacology',
      credits: '32.0 Credit Units Equivalent • 8 Advanced Specialization Seminars',
      description:
        'Advanced coursework transitioning into high-level empirical synthesis: DSM-5-TR categorical and dimensional nosology, fMRI BOLD hemodynamic principles, multiple regression and interaction modeling, clinical efficacy trials, and neurotransmitter receptor kinetics.',
      semesters: [5, 6]
    },
    4: {
      title: 'Year 4: Honours Specialization & Capstone Senior Thesis',
      theme: 'Mechanisms of Mental Disorder, Consciousness, Advanced Honours Electives & Independent 5,000-Word Thesis',
      credits: '32.0 Credit Units Equivalent • 2 Honours Seminars + Capstone Thesis + 2 Electives',
      description:
        'The senior honours capstone year. Students formulate an empirical research hypothesis, compose a formal preregistration on the Open Science Framework, execute quantitative data analysis, synthesize findings in a 5,000-word honours thesis, and select two advanced specialized electives.',
      semesters: [7, 8]
    }
  };

  const meta = yearMetadata[year];
  const coreCourses = getCoursesByYear(year);
  const electives = year === 4 ? getAllElectives() : [];

  const displayCourses = coreCourses.filter(
    (c) => selectedSemester === 'all' || c.semester === selectedSemester
  );

  return (
    <div className="space-y-6 pb-16">
      {/* Year Banner / Catalogue Header */}
      <section
        className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-l-4 border-l-[#A51C30] shadow-2xs space-y-3"
        aria-label={`Academic Year ${year} Overview`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-seal text-[11px] font-bold px-2 py-0.5 rounded-xs bg-[#A51C30] text-white tracking-widest uppercase">
            YEAR {year} CURRICULUM
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            {meta.theme}
          </span>
        </div>

        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          {meta.title}
        </h1>

        <div className="text-xs text-[#78716C] font-mono">
          {meta.credits}
        </div>

        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl pt-1">
          {meta.description}
        </p>

        {/* Semester Filter Controls */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#E5E2DC] flex-wrap">
          <span className="text-xs text-[#78716C] font-medium mr-1 flex items-center gap-1 font-seal uppercase tracking-wider text-[10px]">
            <Filter className="w-3.5 h-3.5 text-[#A51C30]" /> Filter Term:
          </span>
          <button
            onClick={() => setSelectedSemester('all')}
            className={`px-3 py-1 text-xs font-semibold rounded-xs transition-all border ${
              selectedSemester === 'all'
                ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
            }`}
          >
            All Year {year} Courses ({coreCourses.length})
          </button>
          {meta.semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-3 py-1 text-xs font-semibold rounded-xs transition-all border ${
                selectedSemester === sem
                  ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                  : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
              }`}
            >
              Semester {sem}
            </button>
          ))}
        </div>
      </section>

      {/* Course Cards Catalogue Grid */}
      <section aria-label="Course Catalogue Entries">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayCourses.map((course) => {
            const status = degreeState.courseProgress[course.id]?.status || 'not-started';
            const readingCount = course.textbooks.length + course.papers.length;

            return (
              <div
                key={course.id}
                className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E2DC] hover:border-[#D5D1C8] transition-all shadow-2xs flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-mono text-xs font-bold text-[#A51C30]">
                          {course.code}
                        </span>
                        <span className="text-[10px] text-[#78716C] uppercase font-seal tracking-wider">
                          Semester {course.semester}
                        </span>
                        <span className="text-[10px] text-[#78716C] font-mono">
                          4.0 credits
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-xs bg-[#FAF8F3] text-[#78716C] border border-[#E5E2DC] font-medium capitalize">
                          {course.difficulty}
                        </span>
                      </div>
                      <h2
                        onClick={() => onSelectCourse(course)}
                        className="font-serif-scholarly font-bold text-lg text-[#1E1E1E] group-hover:text-[#A51C30] cursor-pointer transition-colors leading-snug"
                      >
                        {course.title}
                      </h2>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0">
                      {status === 'completed' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#226738] bg-[#E8F3EB] px-2 py-0.5 rounded-xs border border-[#226738]/20">
                          <CheckCircle2 className="w-3 h-3 text-[#226738]" /> Completed
                        </span>
                      ) : status === 'in-progress' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C4A00] bg-[#FFF5E6] px-2 py-0.5 rounded-xs border border-[#8C4A00]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" /> Enrolled
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 rounded-xs border border-[#E5E2DC] font-medium">
                          Not Started
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed font-serif">
                    {course.description}
                  </p>

                  {/* Scholarly Metadata Counts */}
                  <div className="flex items-center gap-4 text-xs text-[#78716C] pt-2 border-t border-[#E5E2DC] font-mono text-[11px]">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#A51C30]" />
                      {course.textbooks.length} Textbooks
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#1E1E1E]" />
                      {course.papers.length} Empirical Papers
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#78716C]" />
                      {course.estimatedWorkload}
                    </span>
                  </div>
                </div>

                {/* Course Action Row */}
                <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex items-center gap-1 text-xs font-semibold text-[#A51C30] hover:text-[#8B1425] transition-colors"
                  >
                    <span>View Syllabus & Readings</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-seal text-[#78716C] uppercase">Status:</span>
                    <select
                      value={status}
                      onChange={(e) => onUpdateCourseStatus(course.id, e.target.value as CourseStatus)}
                      className="text-xs font-medium px-2 py-1 rounded-xs bg-[#FAF9F6] border border-[#E5E2DC] text-[#1E1E1E] hover:border-[#A51C30]/40 transition-colors cursor-pointer"
                    >
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">Enrolled (In Progress)</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* YEAR 4 ADVANCED HONOURS ELECTIVES SECTION */}
      {year === 4 && (
        <section className="mt-12 space-y-4" aria-label="Honours Electives Selection">
          <div className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] border-l-4 border-l-[#A51C30] space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#A51C30]" />
              <h3 className="font-serif-scholarly text-xl font-bold text-[#1E1E1E]">
                Honours Specialization Electives (Select Two Required)
              </h3>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed font-serif max-w-3xl">
              To satisfy honours degree requirements alongside the 5,000-word empirical Capstone Thesis (PSY 420 & PSY 430),
              candidates select two advanced seminar electives reflecting their intended graduate research focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {electives.map((elec) => {
              const status = degreeState.courseProgress[elec.id]?.status || 'not-started';
              return (
                <div
                  key={elec.id}
                  className="p-5 bg-[#FFFFFF] border border-[#E5E2DC] hover:border-[#D5D1C8] transition-all shadow-2xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[#A51C30]">
                            {elec.code}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-xs bg-[#FAF8F3] text-[#78716C] border border-[#E5E2DC] font-seal uppercase tracking-wider">
                            Honours Elective
                          </span>
                        </div>
                        <h4
                          onClick={() => onSelectCourse(elec)}
                          className="font-serif-scholarly font-bold text-base text-[#1E1E1E] hover:text-[#A51C30] cursor-pointer transition-colors"
                        >
                          {elec.title}
                        </h4>
                      </div>

                      <select
                        value={status}
                        onChange={(e) => onUpdateCourseStatus(elec.id, e.target.value as CourseStatus)}
                        className="text-xs font-medium px-2 py-1 rounded-xs bg-[#FAF9F6] border border-[#E5E2DC] text-[#1E1E1E]"
                      >
                        <option value="not-started">Not Enrolled</option>
                        <option value="in-progress">Enrolled</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>

                    <p className="text-xs text-[#57534E] line-clamp-2 font-serif">
                      {elec.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between">
                    <button
                      onClick={() => onSelectCourse(elec)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#A51C30] hover:text-[#8B1425]"
                    >
                      <span>Inspect Elective Syllabus</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-[#78716C] font-mono">
                      4.0 credits
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
