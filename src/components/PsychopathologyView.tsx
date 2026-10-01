import React, { useState } from 'react';
import {
  Activity,
  ShieldAlert,
  Search,
  BookOpen,
  ChevronRight,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import {
  PSYCHOPATHOLOGY_TRACK,
  PSYCHOPATHOLOGY_DISCLAIMER
} from '../data/psychopathologyData';
import { Course } from '../types';
import { getCourseByCode } from '../data/courses';

interface PsychopathologyViewProps {
  onSelectCourse: (course: Course) => void;
}

export const PsychopathologyView: React.FC<PsychopathologyViewProps> = ({
  onSelectCourse
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'foundations' | 'disorders' | 'mechanisms'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(PSYCHOPATHOLOGY_TRACK[5].id);

  const filteredTopics = PSYCHOPATHOLOGY_TRACK.filter((t) => {
    const matchesCat = activeCategory === 'all' || t.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.dsm5trCode && t.dsm5trCode.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const currentTopic = PSYCHOPATHOLOGY_TRACK.find((t) => t.id === selectedTopicId) || filteredTopics[0];

  return (
    <div className="space-y-6 pb-16">
      {/* Formal Institutional Ethical & Educational Disclaimer */}
      <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-4 border-l-[#A51C30] text-[#1E1E1E] flex items-start gap-3 shadow-2xs">
        <ShieldAlert className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed font-serif">
          <strong className="font-seal text-[10px] tracking-wider uppercase text-[#A51C30] block mb-0.5">
            Academic & Educational Standard Only
          </strong>
          {PSYCHOPATHOLOGY_DISCLAIMER}
        </div>
      </div>

      {/* Catalogue Track Header */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Specialized Clinical Track
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Clinical Science & Transdiagnostic Etiology
          </span>
        </div>

        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Psychopathology & Mechanisms of Mental Disorder
        </h1>

        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          An advanced university specialization organizing clinical science into three empirical tiers:
          Foundations (nosology, epidemiology, diagnostic validity), 14 Major Disorder Categories (DSM-5-TR / ICD-11),
          and 10 Advanced Cognitive, Neurobiological & Computational Mechanisms.
        </p>

        {/* Category Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#E5E2DC]">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All Topics (${PSYCHOPATHOLOGY_TRACK.length})` },
              { id: 'foundations', label: 'Foundations (5)' },
              { id: 'disorders', label: 'Disorders (14)' },
              { id: 'mechanisms', label: 'Advanced Mechanisms (10)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-xs text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                    : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search disorder, code, or mechanism..."
              className="w-full sm:w-64 pl-8 pr-3 py-1.5 rounded-xs text-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] bg-[#FFFFFF] text-[#1E1E1E]"
            />
          </div>
        </div>
      </section>

      {/* Two-Column Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Topic List */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E2DC] p-3 shadow-2xs max-h-[750px] overflow-y-auto space-y-1">
          {filteredTopics.map((topic) => {
            const isSelected = currentTopic?.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left p-3 rounded-xs transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#FAF8F3] border-l-3 border-l-[#A51C30] border-t border-r border-b border-[#E5E2DC]'
                    : 'hover:bg-[#FAF9F6] border-l-3 border-l-transparent border border-transparent'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className={`text-[9px] font-seal uppercase tracking-wider px-1.5 py-0.5 rounded-xs ${
                        topic.category === 'foundations'
                          ? 'bg-[#E5E2DC] text-[#44403C]'
                          : topic.category === 'disorders'
                          ? 'bg-[#A51C30]/10 text-[#A51C30]'
                          : 'bg-[#1E1E1E]/10 text-[#1E1E1E]'
                      }`}
                    >
                      {topic.category}
                    </span>
                    {topic.dsm5trCode && (
                      <span className="text-[10px] font-mono text-[#78716C]">
                        {topic.dsm5trCode}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif-scholarly font-bold text-sm text-[#1E1E1E] truncate">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-[#78716C] line-clamp-1 mt-0.5 font-serif">
                    {topic.summary}
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#A51C30] translate-x-0.5' : 'text-[#D5D1C8]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Topic Clinical & Empirical Dossier */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E2DC] p-6 shadow-2xs space-y-6">
          {currentTopic ? (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Title & DSM Badge */}
              <div className="border-b border-[#E5E2DC] pb-4">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-seal text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#A51C30] text-white">
                    {currentTopic.category}
                  </span>
                  {currentTopic.dsm5trCode && (
                    <span className="font-mono text-xs px-2 py-0.5 bg-[#FAF8F3] text-[#1E1E1E] border border-[#E5E2DC] font-semibold">
                      DSM-5-TR: {currentTopic.dsm5trCode}
                    </span>
                  )}
                </div>
                <h2 className="font-serif-scholarly text-2xl font-bold text-[#1E1E1E] mt-1.5">
                  {currentTopic.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mt-2 font-serif">
                  {currentTopic.summary}
                </p>
              </div>

              {/* Core Diagnostic Signs */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                  Core Diagnostic Signs & Criteria
                </h3>
                <ul className="space-y-1.5">
                  {currentTopic.coreFeatures.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-xs text-[#33302E] font-serif">
                      <span className="text-[#A51C30] font-bold text-xs mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Epidemiology */}
              <div className="bg-[#FAF9F6] p-4 border border-[#E5E2DC]">
                <h4 className="text-[10px] font-seal font-bold text-[#1E1E1E] uppercase tracking-wider mb-1">
                  Epidemiology & Prevalence
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed font-serif">
                  {currentTopic.epidemiology}
                </p>
              </div>

              {/* Etiological Models */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                  Biological, Cognitive & Systems Etiology
                </h3>
                <div className="space-y-2">
                  {currentTopic.etiologicalModels.map((model, midx) => (
                    <div key={midx} className="p-3 bg-[#FAF8F3] border border-[#E5E2DC] text-xs text-[#44403C] font-serif">
                      • {model}
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence-Based Interventions */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                  Evidence-Based Treatments & Clinical Trials
                </h3>
                <div className="space-y-1.5">
                  {currentTopic.evidenceBasedTreatments.map((tr, tidx) => (
                    <div key={tidx} className="p-3 bg-[#FFFFFF] border border-[#E5E2DC] text-xs text-[#226738] font-serif">
                      ✓ {tr}
                    </div>
                  ))}
                </div>
              </div>

              {/* Controversies & Diagnostic Limitations */}
              {currentTopic.controversies && currentTopic.controversies.length > 0 && (
                <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#A51C30] text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-seal text-[10px] font-bold text-[#A51C30] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-[#A51C30]" />
                    Contemporary Scientific Controversies
                  </div>
                  {currentTopic.controversies.map((c, cidx) => (
                    <p key={cidx} className="text-[#44403C] leading-relaxed font-serif">
                      {c}
                    </p>
                  ))}
                </div>
              )}

              {/* Connected Curriculum Courses */}
              <div className="pt-4 border-t border-[#E5E2DC] flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-[#78716C] font-serif italic">
                  Associated Degree Syllabi:
                </span>
                <div className="flex items-center gap-2">
                  {currentTopic.relatedCourses.map((code) => {
                    const matchedCourse = getCourseByCode(code);
                    return (
                      <button
                        key={code}
                        onClick={() => matchedCourse && onSelectCourse(matchedCourse)}
                        className="flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 bg-[#1E1E1E] text-white hover:bg-[#A51C30] rounded-xs transition-colors"
                      >
                        <span>{code}</span>
                        <ExternalLink className="w-3 h-3 text-[#F4EDCA]" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#78716C] text-xs font-serif">
              Select a clinical topic from the catalogue to view diagnostic criteria, etiology, and treatments.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
