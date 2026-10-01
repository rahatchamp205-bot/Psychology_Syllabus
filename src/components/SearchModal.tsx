import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { MASTER_COURSES } from '../data/courses';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : MASTER_COURSES.filter((c) => {
    const q = query.toLowerCase();
    const matchesTitle = c.title.toLowerCase().includes(q);
    const matchesCode = c.code.toLowerCase().includes(q);
    const matchesDesc = c.description.toLowerCase().includes(q);
    const matchesTb = c.textbooks.some(tb => tb.title.toLowerCase().includes(q) || tb.authors.toLowerCase().includes(q));
    const matchesPaper = c.papers.some(pp => pp.title.toLowerCase().includes(q) || pp.authors.toLowerCase().includes(q));
    return matchesTitle || matchesCode || matchesDesc || matchesTb || matchesPaper;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1E1E]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-3 animate-in fade-in duration-150">
      <div
        className="bg-[#FFFFFF] rounded-xs shadow-2xl border border-[#E5E2DC] w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="p-4 border-b border-[#E5E2DC] flex items-center gap-3 bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-[#A51C30] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search curricula, monographs, empirical papers, authors, or concepts..."
            className="w-full text-sm bg-transparent focus:outline-hidden text-[#1E1E1E] placeholder-[#A8A29E] font-serif"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#78716C] hover:text-[#1E1E1E] rounded-xs hover:bg-[#FAF8F3] border border-[#E5E2DC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1 bg-[#FFFFFF]">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-xs text-[#78716C] font-serif">
              Type keywords to search across four academic years of course dossiers, foundational textbooks, and primary research literature.
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#78716C] font-serif">
              No matching courses or papers found for "{query}".
            </div>
          ) : (
            results.map((course) => (
              <button
                key={course.id}
                onClick={() => {
                  onSelectCourse(course);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xs hover:bg-[#FAF9F6] transition-all flex items-start justify-between gap-3 group border border-transparent hover:border-[#E5E2DC]"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#A51C30]">
                      {course.code}
                    </span>
                    <span className="text-[10px] font-seal text-[#78716C] uppercase tracking-wider">
                      Year {course.year} • Semester {course.semester}
                    </span>
                  </div>
                  <h3 className="font-serif-scholarly font-bold text-sm text-[#1E1E1E] group-hover:text-[#A51C30] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-[#57534E] line-clamp-1 mt-0.5 font-serif">
                    {course.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D5D1C8] group-hover:text-[#A51C30] shrink-0 mt-2 transition-transform group-hover:translate-x-0.5" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
