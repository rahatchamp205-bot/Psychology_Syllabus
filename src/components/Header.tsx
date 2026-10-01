import React from 'react';
import { Search, Sparkles, Database, BookOpen, GraduationCap } from 'lucide-react';
import { UserDegreeState } from '../types';
import { MASTER_COURSES } from '../data/courses';
import { PsychologyEmblem } from './PsychologyEmblem';

interface HeaderProps {
  degreeState: UserDegreeState;
  onOpenSearch: () => void;
  onOpenPlanner: () => void;
  onOpenDataModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  degreeState,
  onOpenSearch,
  onOpenPlanner,
  onOpenDataModal,
  activeSection
}) => {
  // Calculate completion percentage
  const totalCourses = MASTER_COURSES.filter(c => !c.isElective).length + 2; // Core courses + 2 required electives = 26
  const completedCoursesCount = Object.values(degreeState.courseProgress).filter(
    (cp) => cp?.status === 'completed'
  ).length;
  const inProgressCoursesCount = Object.values(degreeState.courseProgress).filter(
    (cp) => cp?.status === 'in-progress'
  ).length;
  const degreeProgressPercent = Math.min(
    100,
    Math.round((completedCoursesCount / totalCourses) * 100)
  );

  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-[#E5E2DC] px-4 sm:px-6 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Title & Institutional Program Seal */}
        <div className="flex items-center gap-3 min-w-0">
          <PsychologyEmblem size="md" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-serif-scholarly text-base sm:text-lg font-bold text-[#1E1E1E] truncate tracking-tight">
                Psychology Degree Self-Study Curriculum
              </span>
              <span className="hidden md:inline-flex items-center text-[10px] font-seal tracking-wider uppercase px-2 py-0.5 rounded-xs bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/30 font-semibold">
                Honours-Level Independent Study
              </span>
            </div>
            <p className="text-[11px] text-[#57534E] hidden sm:block truncate font-serif italic">
              A Four-Year Empirical & Theoretical Curriculum • Grounded in Science
            </p>
          </div>
        </div>

        {/* Action Controls & Progress Metric */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Degree Progress Badge (Restrained, Editorial Style) */}
          <button
            onClick={onOpenDataModal}
            className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#E5E2DC] hover:border-[#A51C30]/40 transition-colors text-left group"
            title="View Academic Transcript & Degree Audit"
          >
            <div>
              <div className="text-[10px] font-seal font-semibold text-[#78716C] uppercase tracking-wider">
                Degree Standing
              </div>
              <div className="text-xs font-semibold text-[#1E1E1E] group-hover:text-[#A51C30] transition-colors">
                {completedCoursesCount} of {totalCourses} Courses ({degreeProgressPercent}%)
              </div>
            </div>
            <div className="w-14 h-1.5 bg-[#E5E2DC] rounded-none overflow-hidden">
              <div
                className="h-full bg-[#A51C30] transition-all duration-300"
                style={{ width: `${Math.max(degreeProgressPercent, 3)}%` }}
              />
            </div>
          </button>

          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#44403C] hover:text-[#1E1E1E] bg-[#FFFFFF] hover:bg-[#FAF8F3] border border-[#E5E2DC] rounded-sm transition-colors"
            title="Search curriculum library, papers, textbooks (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#78716C]" />
            <span className="hidden sm:inline text-xs">Search Library</span>
            <kbd className="hidden sm:inline-block text-[9px] bg-[#FAF9F6] text-[#78716C] px-1.5 py-0.5 rounded-xs border border-[#E5E2DC] font-mono">
              /
            </kbd>
          </button>

          {/* Study Today Engine (Crimson editorial button) */}
          <button
            onClick={onOpenPlanner}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#A51C30] hover:bg-[#8B1425] rounded-sm transition-colors shadow-2xs"
            title="Open Daily Paced Study Engine"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4EDCA]" />
            <span className="font-semibold text-xs tracking-tight">Study Today</span>
          </button>

          {/* Transcript / Audit Button */}
          <button
            onClick={onOpenDataModal}
            className="p-1.5 text-[#57534E] hover:text-[#1E1E1E] hover:bg-[#FFFFFF] border border-[#E5E2DC] rounded-sm transition-colors"
            title="Degree Audit, Transcript & Data Backup"
            aria-label="Degree Audit and Transcript"
          >
            <Database className="w-4 h-4 text-[#57534E]" />
          </button>
        </div>
      </div>
    </header>
  );
};
