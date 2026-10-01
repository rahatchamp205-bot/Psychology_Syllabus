import React, { useState } from 'react';
import {
  BookMarked,
  Search,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import { MASTER_COURSES } from '../data/courses';
import { ReadingStatus, UserDegreeState } from '../types';

interface ReadingBankViewProps {
  degreeState: UserDegreeState;
  onUpdateReadingStatus: (itemId: string, status: ReadingStatus) => void;
}

export const ReadingBankView: React.FC<ReadingBankViewProps> = ({
  degreeState,
  onUpdateReadingStatus
}) => {
  const [filterType, setFilterType] = useState<'all' | 'textbooks' | 'papers'>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [filterYear, setFilterYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Collate all textbooks and papers
  const allTextbooks = MASTER_COURSES.flatMap((c) =>
    c.textbooks.map((tb) => ({
      ...tb,
      itemType: 'textbook' as const,
      courseTitle: c.title,
      year: c.year,
      citation: `${tb.authors} (${tb.year}). ${tb.title} (${tb.edition}).`
    }))
  );

  const allPapers = MASTER_COURSES.flatMap((c) =>
    c.papers.map((pp) => ({
      ...pp,
      itemType: 'paper' as const,
      courseTitle: c.title,
      year: c.year,
      citation: `${pp.authors} (${pp.year}). ${pp.title}. ${pp.journal}.`
    }))
  );

  const allItems = [...allTextbooks, ...allPapers];

  const filteredItems = allItems.filter((item) => {
    const matchesType =
      filterType === 'all' ||
      (filterType === 'textbooks' && item.itemType === 'textbook') ||
      (filterType === 'papers' && item.itemType === 'paper');

    const matchesPriority =
      filterPriority === 'all' ||
      ('priority' in item && item.priority === filterPriority);

    const matchesYear = filterYear === 'all' || item.year === Number(filterYear);

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesPriority && matchesYear && matchesSearch;
  });

  const handleCopyCitation = (id: string, citation: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Bibliographic Repository
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Four-Year Primary & Monographic Reading Bank
          </span>
        </div>
        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Reading Bank & Primary Literature Library
        </h1>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          Search, cross-examine, and log reading progress across foundational textbooks, seminal empirical experiments,
          and preregistered replications. Includes instant APA 7th Edition citation formatting for scholarly bibliographies.
        </p>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-3 border-t border-[#E5E2DC] flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Type buttons */}
            <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 border border-[#E5E2DC] rounded-xs">
              <button
                onClick={() => setFilterType('all')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-all ${
                  filterType === 'all' ? 'bg-[#1E1E1E] text-white' : 'text-[#57534E] hover:text-[#1E1E1E]'
                }`}
              >
                All Literature ({allItems.length})
              </button>
              <button
                onClick={() => setFilterType('textbooks')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-all ${
                  filterType === 'textbooks' ? 'bg-[#1E1E1E] text-white' : 'text-[#57534E] hover:text-[#1E1E1E]'
                }`}
              >
                Monographs ({allTextbooks.length})
              </button>
              <button
                onClick={() => setFilterType('papers')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-all ${
                  filterType === 'papers' ? 'bg-[#1E1E1E] text-white' : 'text-[#57534E] hover:text-[#1E1E1E]'
                }`}
              >
                Journal Papers ({allPapers.length})
              </button>
            </div>

            {/* Year filter */}
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="text-xs p-1.5 rounded-xs border border-[#E5E2DC] bg-[#FFFFFF] text-[#1E1E1E]"
            >
              <option value="all">All Academic Years</option>
              <option value="1">Year 1 Curriculum</option>
              <option value="2">Year 2 Curriculum</option>
              <option value="3">Year 3 Curriculum</option>
              <option value="4">Year 4 Honours</option>
            </select>

            {/* Priority filter */}
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="text-xs p-1.5 rounded-xs border border-[#E5E2DC] bg-[#FFFFFF] text-[#1E1E1E]"
            >
              <option value="all">All Course Priorities</option>
              <option value="CORE">CORE Syllabus</option>
              <option value="RECOMMENDED">RECOMMENDED</option>
              <option value="FREE">FREE / Open Access</option>
            </select>
          </div>

          {/* Search input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search author, title, journal, or course..."
              className="w-full sm:w-72 pl-8 pr-3 py-1.5 rounded-xs text-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] bg-[#FFFFFF] text-[#1E1E1E]"
            />
          </div>
        </div>
      </section>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const status = degreeState.readingStatus[item.id] || 'Not Started';
          return (
            <div
              key={item.id}
              className="p-5 bg-[#FFFFFF] border border-[#E5E2DC] hover:border-[#D5D1C8] transition-all shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[11px] font-bold text-[#A51C30]">
                    {item.courseCode}
                  </span>
                  <span className="text-[9px] uppercase font-seal px-1.5 py-0.5 bg-[#FAF8F3] text-[#78716C] border border-[#E5E2DC]">
                    {item.itemType}
                  </span>
                  {'priority' in item && (
                    <span
                      className={`text-[9px] font-seal font-bold px-1.5 py-0.5 uppercase ${
                        item.priority === 'CORE'
                          ? 'bg-[#A51C30] text-white'
                          : item.priority === 'FREE'
                          ? 'bg-[#226738] text-white'
                          : 'bg-[#FAF8F3] text-[#57534E] border border-[#E5E2DC]'
                      }`}
                    >
                      {item.priority}
                    </span>
                  )}
                  {'replicationStatus' in item && (
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 ${
                        item.replicationStatus === 'Robust'
                          ? 'bg-[#E8F3EB] text-[#226738] border border-[#226738]/30'
                          : 'bg-[#FDF2F2] text-[#A51C30] border border-[#A51C30]/30'
                      }`}
                    >
                      {item.replicationStatus}
                    </span>
                  )}
                </div>

                <h2 className="font-serif-scholarly font-bold text-base text-[#1E1E1E] leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs text-[#78716C] font-serif italic">
                  {item.citation}
                </p>

                {'chaptersToRead' in item && (
                  <p className="text-xs text-[#57534E] font-serif">
                    <strong className="text-[#1E1E1E] font-sans text-[11px]">Assigned Sections:</strong> {item.chaptersToRead}
                  </p>
                )}

                {'findings' in item && (
                  <p className="text-xs text-[#57534E] line-clamp-2 font-serif">
                    <strong className="text-[#1E1E1E] font-sans text-[11px]">Primary Finding:</strong> {item.findings}
                  </p>
                )}
              </div>

              {/* Status & Copy Action */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => handleCopyCitation(item.id, item.citation)}
                  className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xs border border-[#E5E2DC] hover:bg-[#FAF8F3] bg-[#FAF9F6] text-[#57534E] transition-colors"
                  title="Copy APA 7th Edition citation"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#226738]" />
                      <span className="text-[11px] text-[#226738] font-mono font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#78716C]" />
                      <span className="text-[11px] font-seal uppercase">Cite</span>
                    </>
                  )}
                </button>

                <select
                  value={status}
                  onChange={(e) => onUpdateReadingStatus(item.id, e.target.value as ReadingStatus)}
                  className="text-xs font-medium px-2.5 py-1.5 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E] cursor-pointer"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="Reading">Reading</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
