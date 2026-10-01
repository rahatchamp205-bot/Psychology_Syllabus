import React from 'react';
import {
  Compass,
  Calendar,
  Layers,
  Award,
  Activity,
  Binary,
  ShieldAlert,
  BookMarked,
  BrainCircuit,
  Clock,
  NotebookPen,
  FileCheck2,
  ChevronRight,
  X
} from 'lucide-react';
import { NavSection } from '../types';
import { PsychologyEmblem } from './PsychologyEmblem';

interface NavItem {
  id: NavSection;
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  highlight?: boolean;
}

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  mobileOpen,
  setMobileOpen
}) => {
  const navSections: { group: string; items: NavItem[] }[] = [
    {
      group: 'Overview',
      items: [
        {
          id: 'dashboard' as NavSection,
          label: 'Degree Dashboard',
          sublabel: 'Curriculum progress & syllabus',
          icon: Compass
        }
      ]
    },
    {
      group: 'Academic Years',
      items: [
        {
          id: 'year-1' as NavSection,
          label: 'Year 1: Foundations',
          sublabel: 'Scientific bases & methods',
          icon: Calendar,
          badge: '6 Courses'
        },
        {
          id: 'year-2' as NavSection,
          label: 'Year 2: Core Disciplines',
          sublabel: 'Cognitive, social & bio',
          icon: Layers,
          badge: '8 Courses'
        },
        {
          id: 'year-3' as NavSection,
          label: 'Year 3: Advanced Specialization',
          sublabel: 'Clinical, neuro & stats',
          icon: Layers,
          badge: '8 Courses'
        },
        {
          id: 'year-4' as NavSection,
          label: 'Year 4: Honours & Capstone',
          sublabel: 'Thesis & advanced seminars',
          icon: Award,
          badge: 'Thesis'
        }
      ]
    },
    {
      group: 'Specialized Tracks',
      items: [
        {
          id: 'psychopathology' as NavSection,
          label: 'Psychopathology Track',
          sublabel: 'Nosology & mechanisms',
          icon: Activity,
          highlight: true
        },
        {
          id: 'research-stats' as NavSection,
          label: 'Research & Statistics Lab',
          sublabel: 'Inference & APA templates',
          icon: Binary
        },
        {
          id: 'replication-tracker' as NavSection,
          label: 'Replication & Open Science',
          sublabel: 'Methodological reforms',
          icon: ShieldAlert
        }
      ]
    },
    {
      group: 'Scholarly Tools',
      items: [
        {
          id: 'reading-bank' as NavSection,
          label: 'Reading Library & Papers',
          sublabel: 'Textbooks & empirical archive',
          icon: BookMarked
        },
        {
          id: 'active-recall' as NavSection,
          label: 'Active Recall & Exams',
          sublabel: 'Formative self-assessment',
          icon: BrainCircuit
        },
        {
          id: 'study-planner' as NavSection,
          label: 'Study Planner ("Study Today")',
          sublabel: 'Paced weekly schedule',
          icon: Clock
        },
        {
          id: 'notebook' as NavSection,
          label: 'Research Notebook',
          sublabel: 'Markdown literature logs',
          icon: NotebookPen
        },
        {
          id: 'degree-progress' as NavSection,
          label: 'Degree Audit & Transcript',
          sublabel: 'Data management & backup',
          icon: FileCheck2
        }
      ]
    }
  ];

  const handleSelect = (id: NavSection) => {
    onSelectSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#1E1E1E]/50 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-[#FAF9F6] border-r border-[#E5E2DC] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top University Catalogue Header */}
        <div className="p-4 border-b border-[#E5E2DC] bg-[#FAF9F6]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PsychologyEmblem size="md" />
              <div>
                <div className="font-serif-scholarly font-bold text-[#1E1E1E] text-sm tracking-tight leading-tight">
                  Psychology Curriculum Portal
                </div>
                <div className="text-[10px] font-seal tracking-wider uppercase text-[#A51C30] font-semibold mt-0.5">
                  Honours-Level Independent Study
                </div>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 text-[#57534E] hover:text-[#1E1E1E] rounded-md hover:bg-[#EAE7E0]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation items catalogue list */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5" aria-label="Curriculum sections">
          {navSections.map((sec, sIdx) => (
            <div key={sIdx}>
              <div className="px-3 mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                  {sec.group}
                </span>
                <span className="w-8 h-px bg-[#E5E2DC]" />
              </div>

              <div className="space-y-0.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full group flex items-center justify-between px-3 py-2 rounded-sm text-left transition-all ${
                        isActive
                          ? 'bg-[#FFFFFF] border-l-2 border-[#A51C30] text-[#1E1E1E] shadow-2xs font-semibold'
                          : 'text-[#44403C] hover:text-[#1E1E1E] hover:bg-[#EFECE6]/80 border-l-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isActive
                              ? 'text-[#A51C30]'
                              : item.highlight
                              ? 'text-[#A51C30]'
                              : 'text-[#78716C] group-hover:text-[#1E1E1E]'
                          }`}
                        />
                        <div className="min-w-0">
                          <div className="text-xs truncate leading-snug">
                            {item.label}
                          </div>
                          {item.sublabel && (
                            <div className="text-[10px] text-[#78716C] truncate leading-tight font-normal">
                              {item.sublabel}
                            </div>
                          )}
                        </div>
                      </div>

                      {item.badge ? (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded-sm font-mono tracking-wide ${
                            isActive
                              ? 'bg-[#A51C30]/10 text-[#A51C30] font-bold border border-[#A51C30]/20'
                              : 'bg-[#E5E2DC]/70 text-[#57534E]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight
                          className={`w-3 h-3 transition-transform ${
                            isActive
                              ? 'text-[#A51C30] translate-x-0.5'
                              : 'text-transparent group-hover:text-[#A8A29E]'
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Academic Motto Footer */}
        <div className="p-3 border-t border-[#E5E2DC] bg-[#FAF8F3] text-center">
          <div className="text-[10px] font-seal tracking-widest text-[#A51C30] uppercase font-semibold">
            Nullius In Verba
          </div>
          <p className="text-[10px] font-serif italic text-[#78716C] mt-0.5 leading-tight">
            Independent personal scholarship • Grounded in empirical inquiry
          </p>
        </div>
      </aside>
    </>
  );
};
