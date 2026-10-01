import React, { useState } from 'react';
import {
  Clock,
  BookOpen,
  CheckCircle2,
  Brain,
  Layers,
  ArrowRight,
  Check,
  Compass
} from 'lucide-react';
import { MASTER_COURSES } from '../data/courses';
import { UserDegreeState } from '../types';

interface StudyPlannerViewProps {
  degreeState: UserDegreeState;
  onMarkCoreTaskCompleted: (courseCode: string, taskDesc: string) => void;
}

export const StudyPlannerView: React.FC<StudyPlannerViewProps> = ({
  degreeState,
  onMarkCoreTaskCompleted
}) => {
  const [availableTime, setAvailableTime] = useState<string>('60min');
  const [studyMode, setStudyMode] = useState<string>('balanced');
  const [targetCourse, setTargetCourse] = useState<string>('PSY 105');
  const [planCompleted, setPlanCompleted] = useState(false);

  // Time labels
  const timeProfiles: Record<string, { label: string; warmup: string; core: string; consolidation: string }> = {
    '30min': {
      label: '30 Minutes (Targeted Sprint)',
      warmup: '5 min: Rapid retrieval flashcards testing key concepts from the previous reading block.',
      core: '20 min: Focused monograph section reading or critical evaluation of paper methods & hypotheses.',
      consolidation: '5 min: Synthesize 3 concise takeaways into the Course Study Notebook.'
    },
    '60min': {
      label: '1 Hour (Standard Academic Block)',
      warmup: '10 min: Active recall self-assessment and statistical assumption verification.',
      core: '40 min: Close reading of 1 assigned core chapter or deep critique of 1 primary empirical paper.',
      consolidation: '10 min: Formulate 3 conceptual retrieval questions with model rationale.'
    },
    '120min': {
      label: '2 Hours (Deep Empirical Seminar)',
      warmup: '15 min: Spaced review of core theoretical models and epistemological frameworks.',
      core: '85 min: Comparative analysis of 2 empirical papers or drafting assignment proposals.',
      consolidation: '20 min: Comprehensive Markdown synthesis and hypothesis cross-checks.'
    },
    '240min': {
      label: '4 Hours (Honours Research Intensive)',
      warmup: '20 min: Cumulative retrieval across past semesters & statistical decision tree drill.',
      core: '180 min: Primary literature synthesis, R/Python computational analysis, or honours thesis drafting.',
      consolidation: '40 min: Methodological audit, APA 7th reference cross-check, and degree progress log.'
    }
  };

  const selectedProfile = timeProfiles[availableTime] || timeProfiles['60min'];
  const currentCourseObj = MASTER_COURSES.find((c) => c.code === targetCourse) || MASTER_COURSES[0];

  const handleRecommendRandom = () => {
    const activeOrNew = MASTER_COURSES.find((c) => {
      const st = degreeState.courseProgress[c.id]?.status;
      return st === 'in-progress' || st !== 'completed';
    }) || MASTER_COURSES[0];

    setTargetCourse(activeOrNew.code);
    setAvailableTime('60min');
    setStudyMode('balanced');
    setPlanCompleted(false);
  };

  const handleCompleteSession = () => {
    setPlanCompleted(true);
    onMarkCoreTaskCompleted(targetCourse, `Completed ${selectedProfile.label} on ${currentCourseObj.title}`);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Pedagogical Protocol
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Deliberate Practice & Cognitive Scheduling
          </span>
        </div>
        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Curricular Study Planner & Session Prescriber
        </h1>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          Sustain steady scholarly momentum across the four-year curriculum through evidence-backed cognitive learning blocks.
          Select your available study interval to prescribe an empirical 3-stage study protocol.
        </p>

        {/* Input Configuration Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E5E2DC]">
          <div>
            <label className="text-[10px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider block mb-1">
              Time Available Today
            </label>
            <select
              value={availableTime}
              onChange={(e) => {
                setAvailableTime(e.target.value);
                setPlanCompleted(false);
              }}
              className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FFFFFF] font-medium text-[#1E1E1E]"
            >
              <option value="30min">30 Minutes (Targeted Sprint)</option>
              <option value="60min">1 Hour (Standard Academic Block)</option>
              <option value="120min">2 Hours (Deep Empirical Seminar)</option>
              <option value="240min">4 Hours (Honours Research Intensive)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider block mb-1">
              Methodological Focus
            </label>
            <select
              value={studyMode}
              onChange={(e) => {
                setStudyMode(e.target.value);
                setPlanCompleted(false);
              }}
              className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FFFFFF] font-medium text-[#1E1E1E]"
            >
              <option value="balanced">Balanced (Reading & Retrieval)</option>
              <option value="paper">Empirical Primary Source Critique</option>
              <option value="assignment">Assignment & Empirical Proposal</option>
              <option value="stats">Statistical & Quantitative Practice</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider block mb-1">
              Active Course Focus
            </label>
            <select
              value={targetCourse}
              onChange={(e) => {
                setTargetCourse(e.target.value);
                setPlanCompleted(false);
              }}
              className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FFFFFF] font-medium text-[#1E1E1E]"
            >
              {MASTER_COURSES.map((c) => (
                <option key={c.id} value={c.code}>
                  {c.code}: {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-1 flex justify-end">
          <button
            onClick={handleRecommendRandom}
            className="flex items-center gap-1.5 text-xs text-[#A51C30] hover:text-[#8B1425] font-seal uppercase tracking-wider font-semibold"
          >
            <Compass className="w-3.5 h-3.5 text-[#A51C30]" />
            <span>Prescribe next recommended syllabus</span>
          </button>
        </div>
      </section>

      {/* Generated Scaffolded Routine */}
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E2DC] shadow-sm space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-[#E5E2DC] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold text-[#A51C30]">
                  {currentCourseObj.code}
                </span>
                <span className="text-xs text-[#78716C] font-seal uppercase tracking-wider">
                  Year {currentCourseObj.year} • Semester {currentCourseObj.semester}
                </span>
              </div>
              <h2 className="font-serif-scholarly text-xl sm:text-2xl font-bold text-[#1E1E1E]">
                Prescribed Academic Study Protocol
              </h2>
              <p className="text-xs text-[#57534E] mt-1 font-serif">
                Focus: <strong className="text-[#1E1E1E]">{currentCourseObj.title}</strong> • Duration: <strong className="text-[#1E1E1E]">{selectedProfile.label}</strong>
              </p>
            </div>

            <div className="w-10 h-10 border border-[#E5E2DC] bg-[#FAF8F3] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#A51C30]" />
            </div>
          </div>

          {/* 3-Step Scientific Flow */}
          <div className="space-y-4">
            {/* Step 1: Warm-up */}
            <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider">
                <span className="w-4 h-4 bg-[#1E1E1E] text-white flex items-center justify-center text-[10px] font-mono">
                  1
                </span>
                <span>Stage 1: Spaced Retrieval Warm-Up</span>
              </div>
              <p className="text-xs text-[#44403C] leading-relaxed pl-6 font-serif">
                {selectedProfile.warmup}
              </p>
            </div>

            {/* Step 2: Core Task */}
            <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#A51C30] space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-seal font-bold text-[#A51C30] uppercase tracking-wider">
                <span className="w-4 h-4 bg-[#A51C30] text-white flex items-center justify-center text-[10px] font-mono">
                  2
                </span>
                <span>Stage 2: Core Intellectual Task</span>
              </div>
              <p className="text-xs text-[#44403C] leading-relaxed pl-6 font-serif">
                {selectedProfile.core}
              </p>
              <div className="ml-6 text-xs text-[#57534E] bg-[#FFFFFF] p-2.5 border border-[#E5E2DC] font-serif">
                <strong className="text-[#1E1E1E] font-sans text-[11px]">Assigned Source:</strong> {currentCourseObj.textbooks[0]?.title || 'Primary Course Text'} (Read designated sections matching active learning objectives).
              </div>
            </div>

            {/* Step 3: Active Consolidation */}
            <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] border-l-3 border-l-[#226738] space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-seal font-bold text-[#226738] uppercase tracking-wider">
                <span className="w-4 h-4 bg-[#226738] text-white flex items-center justify-center text-[10px] font-mono">
                  3
                </span>
                <span>Stage 3: Active Consolidation & Metacognition</span>
              </div>
              <p className="text-xs text-[#44403C] leading-relaxed pl-6 font-serif">
                {selectedProfile.consolidation}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between">
            <div className="text-xs text-[#78716C] font-serif italic">
              {planCompleted ? (
                <span className="text-[#226738] font-medium not-italic flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#226738]" /> Academic session successfully logged to curriculum dossier!
                </span>
              ) : (
                'Ready to log this study interval?'
              )}
            </div>

            <button
              onClick={handleCompleteSession}
              disabled={planCompleted}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xs text-xs font-semibold transition-all border ${
                planCompleted
                  ? 'bg-[#226738] text-white border-[#226738]'
                  : 'bg-[#1E1E1E] hover:bg-[#333333] text-white border-[#1E1E1E]'
              }`}
            >
              {planCompleted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Session Recorded</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark Session Complete</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
