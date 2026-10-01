import React, { useState } from 'react';
import {
  X,
  BookOpen,
  FileText,
  CheckCircle2,
  Clock,
  ExternalLink,
  Copy,
  Check,
  BookMarked,
  FileCheck,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Course, CourseStatus, ReadingStatus, UserDegreeState } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  degreeState: UserDegreeState;
  onUpdateCourseStatus: (courseId: string, status: CourseStatus) => void;
  onUpdateReadingStatus: (itemId: string, status: ReadingStatus) => void;
  onUpdateAssignmentStatus: (asgId: string, completed: boolean) => void;
  onSaveCourseNotes: (courseCode: string, notes: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  degreeState,
  onUpdateCourseStatus,
  onUpdateReadingStatus,
  onUpdateAssignmentStatus,
  onSaveCourseNotes
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'textbooks' | 'papers' | 'assignments' | 'notes'>('syllabus');
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

  if (!course) return null;

  const currentStatus = degreeState.courseProgress[course.id]?.status || 'not-started';
  const savedNotes = degreeState.courseProgress[course.id]?.notes || '';
  const [localNotes, setLocalNotes] = useState(savedNotes);

  const handleCopyCitation = (paperId: string, citationText: string) => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitationId(paperId);
    setTimeout(() => setCopiedCitationId(null), 2000);
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalNotes(e.target.value);
    onSaveCourseNotes(course.code, e.target.value);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1E1E]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#FFFFFF] rounded-xs shadow-2xl border border-[#E5E2DC] w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header: University Syllabus Dossier Header */}
        <div className="p-5 sm:p-6 border-b border-[#E5E2DC] bg-[#FAF9F6] shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="font-mono text-xs font-bold text-[#A51C30]">
                  {course.code}
                </span>
                <span className="text-[10px] font-seal uppercase tracking-wider text-[#78716C]">
                  Year {course.year} • Semester {course.semester}
                </span>
                <span className="text-[10px] text-[#78716C] font-mono">
                  4.0 Credit Units Equivalent
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-xs bg-[#FAF8F3] text-[#78716C] border border-[#E5E2DC] font-medium capitalize">
                  {course.difficulty}
                </span>
                {course.isElective && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-xs bg-[#A51C30]/10 text-[#A51C30] border border-[#A51C30]/20 font-seal font-semibold uppercase">
                    Honours Elective
                  </span>
                )}
              </div>
              <h2 className="font-serif-scholarly text-xl sm:text-2xl font-bold text-[#1E1E1E] leading-tight">
                {course.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#78716C] hover:text-[#1E1E1E] hover:bg-[#FAF8F3] border border-[#E5E2DC] rounded-xs transition-colors"
              aria-label="Close syllabus"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Details Bar */}
          <div className="mt-4 flex items-center justify-between gap-4 flex-wrap text-xs text-[#57534E]">
            <div className="flex items-center gap-4 flex-wrap font-mono text-[11px]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#A51C30]" />
                Workload: {course.estimatedWorkload}
              </span>
              {course.prerequisites.length > 0 && (
                <span>
                  Prerequisites: {course.prerequisites.join(', ')}
                </span>
              )}
            </div>

            {/* Status Selector */}
            <div className="flex items-center gap-1.5 bg-[#FFFFFF] px-2.5 py-1 rounded-xs border border-[#E5E2DC]">
              <span className="text-[10px] font-seal uppercase tracking-wider text-[#78716C]">Standing:</span>
              <select
                value={currentStatus}
                onChange={(e) => onUpdateCourseStatus(course.id, e.target.value as CourseStatus)}
                className="text-xs font-semibold bg-transparent text-[#1E1E1E] focus:outline-hidden cursor-pointer"
              >
                <option value="not-started">Not Started</option>
                <option value="in-progress">Enrolled (In Progress)</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Dossier Tabs */}
          <div className="flex items-center gap-2 mt-5 border-b border-[#E5E2DC] -mb-5 sm:-mb-6 overflow-x-auto pb-2">
            {[
              { id: 'syllabus', label: 'Overview & Units', icon: BookOpen },
              { id: 'textbooks', label: `Textbooks (${course.textbooks.length})`, icon: BookMarked },
              { id: 'papers', label: `Research Papers (${course.papers.length})`, icon: FileText },
              { id: 'assignments', label: `Assignments (${course.assignments.length})`, icon: FileCheck },
              { id: 'notes', label: 'Research Notes', icon: Layers }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
                    isActive
                      ? 'border-[#A51C30] text-[#A51C30] font-semibold'
                      : 'border-transparent text-[#78716C] hover:text-[#1E1E1E]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 bg-[#FFFFFF]">
          {/* TAB 1: SYLLABUS */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              {/* Epistemological Justification */}
              <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#A51C30]">
                <div className="flex items-center gap-2 text-[10px] font-seal font-bold text-[#A51C30] uppercase tracking-wider mb-1">
                  Curricular Justification
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed font-serif">
                  {course.whyIncluded}
                </p>
              </div>

              {/* Course Description */}
              <div>
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-2">
                  Catalogue Description
                </h3>
                <p className="text-sm text-[#33302E] leading-relaxed font-serif">
                  {course.description}
                </p>
              </div>

              {/* Learning Objectives */}
              <div>
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-2.5">
                  Core Learning Objectives
                </h3>
                <ul className="space-y-2">
                  {course.learningObjectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#44403C] font-serif">
                      <span className="text-[#A51C30] font-bold text-xs mt-0.5">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Units & Topics Breakdown */}
              <div>
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-3">
                  Curriculum Units & Key Concepts
                </h3>
                <div className="space-y-3">
                  {course.units.map((unit) => (
                    <div key={unit.id} className="p-4 border border-[#E5E2DC] bg-[#FAF9F6]">
                      <h4 className="font-serif-scholarly font-bold text-sm text-[#1E1E1E] mb-2.5">
                        {unit.title}
                      </h4>
                      <div className="space-y-2">
                        {unit.topics.map((topic) => (
                          <div key={topic.id} className="bg-[#FFFFFF] p-3 border border-[#E5E2DC]">
                            <div className="text-xs font-semibold text-[#1E1E1E] mb-1.5 font-serif">
                              {topic.title}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {topic.keyConcepts?.map((kc, kidx) => (
                                <span
                                  key={kidx}
                                  className="text-[10px] px-2 py-0.5 rounded-xs bg-[#FAF8F3] text-[#57534E] border border-[#E5E2DC] font-mono"
                                >
                                  {kc}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TEXTBOOKS */}
          {activeTab === 'textbooks' && (
            <div className="space-y-4">
              <div className="text-xs text-[#78716C] font-serif italic">
                Foundational textbooks and empirical monographs selected for scholarly depth and methodological rigor.
              </div>
              {course.textbooks.map((tb) => {
                const readStatus = degreeState.readingStatus[tb.id] || 'Not Started';
                return (
                  <div key={tb.id} className="p-4 border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#D5D1C8] transition-all">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className={`text-[9px] font-seal font-bold px-1.5 py-0.5 uppercase tracking-wider ${
                              tb.priority === 'CORE'
                                ? 'bg-[#A51C30] text-white'
                                : tb.priority === 'FREE'
                                ? 'bg-[#226738] text-white'
                                : 'bg-[#FAF8F3] text-[#57534E] border border-[#E5E2DC]'
                            }`}
                          >
                            {tb.priority}
                          </span>
                          <span className="text-xs font-mono text-[#78716C]">
                            {tb.authors} ({tb.year}) • {tb.edition}
                          </span>
                        </div>
                        <h4 className="font-serif-scholarly font-bold text-base text-[#1E1E1E]">
                          {tb.title}
                        </h4>
                      </div>

                      {/* Reading Status Selector */}
                      <select
                        value={readStatus}
                        onChange={(e) => onUpdateReadingStatus(tb.id, e.target.value as ReadingStatus)}
                        className="text-xs font-medium px-2 py-1 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E]"
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="Reading">Reading</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-xs text-[#57534E] mt-2 font-serif">
                      <p>
                        <strong className="text-[#1E1E1E]">Scholarly Significance:</strong> {tb.whyItMatters}
                      </p>
                      <p className="font-mono text-[11px] text-[#78716C]">
                        <strong className="text-[#1E1E1E] font-sans">Assigned Chapters:</strong> {tb.chaptersToRead}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: RESEARCH PAPERS */}
          {activeTab === 'papers' && (
            <div className="space-y-4">
              <div className="text-xs text-[#78716C] font-serif italic">
                Empirical primary sources, seminal experiments, contemporary replications, and open-science evaluations.
              </div>
              {course.papers.map((pp) => {
                const readStatus = degreeState.readingStatus[pp.id] || 'Not Started';
                const apaCitation = `${pp.authors} (${pp.year}). ${pp.title}. ${pp.journal}.`;
                return (
                  <div key={pp.id} className="p-4 border border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#D5D1C8] transition-all space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[9px] uppercase font-seal tracking-wider px-1.5 py-0.5 bg-[#FAF8F3] text-[#78716C] border border-[#E5E2DC]">
                            {pp.category}
                          </span>
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 font-mono ${
                              pp.replicationStatus === 'Robust'
                                ? 'bg-[#E8F3EB] text-[#226738] border border-[#226738]/30'
                                : pp.replicationStatus.includes('Failed') || pp.replicationStatus.includes('Controversial')
                                ? 'bg-[#FDF2F2] text-[#A51C30] border border-[#A51C30]/30'
                                : 'bg-[#FFF5E6] text-[#8C4A00] border border-[#8C4A00]/30'
                            }`}
                          >
                            Replication: {pp.replicationStatus}
                          </span>
                        </div>
                        <h4 className="font-serif-scholarly font-bold text-base text-[#1E1E1E]">
                          {pp.title}
                        </h4>
                        <div className="text-xs text-[#78716C] font-serif italic mt-0.5">
                          {pp.authors} ({pp.year}) • {pp.journal}
                        </div>
                      </div>

                      {/* Status Dropdown & Copy Citation */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleCopyCitation(pp.id, apaCitation)}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-xs bg-[#FAF9F6] hover:bg-[#FAF8F3] border border-[#E5E2DC] text-[#57534E] transition-colors"
                          title="Copy APA 7th Edition Citation"
                        >
                          {copiedCitationId === pp.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#226738]" />
                              <span className="text-[11px] text-[#226738] font-medium font-mono">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#78716C]" />
                              <span className="text-[11px] hidden sm:inline font-seal uppercase">Cite</span>
                            </>
                          )}
                        </button>
                        <select
                          value={readStatus}
                          onChange={(e) => onUpdateReadingStatus(pp.id, e.target.value as ReadingStatus)}
                          className="text-xs font-medium px-2 py-1 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E]"
                        >
                          <option value="Not Started">Not Started</option>
                          <option value="Reading">Reading</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>

                    {/* Paper Anatomy Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#E5E2DC] text-xs font-serif">
                      <div className="bg-[#FAF9F6] p-3 border border-[#E5E2DC]">
                        <strong className="text-[#1E1E1E] block mb-0.5 font-sans font-semibold text-[11px]">Research Hypothesis:</strong>
                        <p className="text-[#57534E] leading-relaxed">{pp.researchQuestion}</p>
                      </div>
                      <div className="bg-[#FAF9F6] p-3 border border-[#E5E2DC]">
                        <strong className="text-[#1E1E1E] block mb-0.5 font-sans font-semibold text-[11px]">Empirical Methodology:</strong>
                        <p className="text-[#57534E] leading-relaxed">{pp.method}</p>
                      </div>
                      <div className="bg-[#FAF9F6] p-3 border border-[#E5E2DC] md:col-span-2">
                        <strong className="text-[#1E1E1E] block mb-0.5 font-sans font-semibold text-[11px]">Primary Findings & Effect Sizes:</strong>
                        <p className="text-[#57534E] leading-relaxed">{pp.findings}</p>
                      </div>
                      <div className="bg-[#FAF8F3] border border-[#E5E2DC] border-l-2 border-l-[#A51C30] p-3 md:col-span-2">
                        <strong className="text-[#A51C30] block mb-0.5 font-sans font-semibold text-[11px]">Critical Limitations & Replication Context:</strong>
                        <p className="text-[#44403C] leading-relaxed">{pp.limitations} • {pp.currentInterpretation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: ASSIGNMENTS */}
          {activeTab === 'assignments' && (
            <div className="space-y-4">
              <div className="text-xs text-[#78716C] font-serif italic">
                Honours-level empirical research proposals, statistical replications, and critical evaluation essays.
              </div>
              {course.assignments.map((asg) => {
                const isCompleted = degreeState.assignmentStatus[asg.id] || false;
                return (
                  <div key={asg.id} className="p-5 border border-[#E5E2DC] bg-[#FFFFFF] space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-seal font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/20">
                            {asg.type}
                          </span>
                          <span className="text-xs text-[#78716C] font-mono flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#A51C30]" />
                            Est. {asg.estimatedHours} hours
                          </span>
                        </div>
                        <h4 className="font-serif-scholarly font-bold text-base text-[#1E1E1E]">
                          {asg.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onUpdateAssignmentStatus(asg.id, !isCompleted)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold transition-all border ${
                          isCompleted
                            ? 'bg-[#226738] text-white border-[#226738]'
                            : 'bg-[#FAF9F6] hover:bg-[#FAF8F3] text-[#57534E] border-[#E5E2DC]'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isCompleted ? 'Submitted (Done)' : 'Mark Submitted'}</span>
                      </button>
                    </div>

                    <div className="bg-[#FAF9F6] p-3.5 border border-[#E5E2DC]">
                      <div className="text-[11px] font-seal uppercase tracking-wider font-bold text-[#1E1E1E] mb-1">
                        Prompt & Problem Statement:
                      </div>
                      <p className="text-xs text-[#44403C] leading-relaxed font-serif">{asg.prompt}</p>
                    </div>

                    <div className="text-xs text-[#57534E] font-serif">
                      <strong className="text-[#1E1E1E] font-sans font-semibold">Expected Deliverables:</strong> {asg.deliverables}
                    </div>

                    <div>
                      <div className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        Grading Rubric Focus:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {asg.rubricFocus.map((rf, ridx) => (
                          <span
                            key={ridx}
                            className="text-[10px] px-2 py-0.5 rounded-xs bg-[#FAF8F3] text-[#57534E] border border-[#E5E2DC] font-serif"
                          >
                            ✓ {rf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 5: STUDY NOTES */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif-scholarly font-bold text-lg text-[#1E1E1E] mb-1">
                  Course Study Notebook & Research Log
                </h4>
                <p className="text-xs text-[#78716C] font-serif">
                  Document chapter reflections, critical theoretical syntheses, and thesis ideas for {course.code}. Persisted in browser memory.
                </p>
              </div>
              <textarea
                value={localNotes}
                onChange={handleNotesChange}
                rows={13}
                placeholder={`Document your research reflections for ${course.code}...
- Key empirical insights
- Methodological critique of assigned papers
- Connections to honours thesis topic`}
                className="w-full p-4 rounded-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] text-xs sm:text-sm font-serif leading-relaxed text-[#1E1E1E] placeholder-[#A8A29E] bg-[#FAF9F6] resize-y"
              />
              <div className="text-right text-[11px] text-[#78716C] font-mono">
                Auto-saved to local browser storage • Markdown supported
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
