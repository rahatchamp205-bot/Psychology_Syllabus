import React, { useState } from 'react';
import {
  ShieldAlert,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileCheck2,
  BookOpen
} from 'lucide-react';
import { REPLICATION_CASES, OPEN_SCIENCE_REFORMS } from '../data/replicationData';

export const ReplicationTrackerView: React.FC = () => {
  const [selectedVerdict, setSelectedVerdict] = useState<'all' | 'Discredited' | 'Failed' | 'Fragile' | 'Nuanced'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = REPLICATION_CASES.filter((c) => {
    const matchesVerdict = selectedVerdict === 'all' || c.verdict === selectedVerdict;
    const matchesSearch =
      searchQuery.trim() === '' ||
      c.originalStudy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.originalClaim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.replicationAttempts && c.replicationAttempts.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (c.authors && c.authors.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesVerdict && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Epistemological Audit
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Replicability & Open Science Reform
          </span>
        </div>
        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Replication Crisis & Open Science Tracker
        </h1>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          An empirical catalog of landmark psychological claims subjected to large-scale preregistered multi-lab replications,
          analyzing methodological failures, boundary conditions, effect-size attenuations, and institutional open-science reforms.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#E5E2DC] flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-seal text-[#78716C] uppercase tracking-wider mr-1">Replication Verdict:</span>
            {['all', 'Discredited', 'Failed', 'Fragile', 'Nuanced'].map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVerdict(v as any)}
                className={`px-3 py-1 text-xs font-semibold rounded-xs transition-all border ${
                  selectedVerdict === v
                    ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                    : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case study or author..."
              className="w-full sm:w-64 pl-8 pr-3 py-1.5 rounded-xs text-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] bg-[#FFFFFF] text-[#1E1E1E]"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Cards */}
      <div className="space-y-4">
        {filteredCases.map((cs) => (
          <div
            key={cs.id}
            className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-4"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-[#A51C30]">
                    {cs.year}
                  </span>
                  <span
                    className={`text-[9px] font-seal font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider ${
                      cs.verdict === 'Discredited'
                        ? 'bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/30'
                        : cs.verdict === 'Failed'
                        ? 'bg-[#FFF5E6] text-[#8C4A00] border border-[#8C4A00]/30'
                        : cs.verdict === 'Fragile'
                        ? 'bg-[#FAF8F3] text-[#57534E] border border-[#E5E2DC]'
                        : 'bg-[#E8F3EB] text-[#226738] border border-[#226738]/30'
                    }`}
                  >
                    Verdict: {cs.verdict}
                  </span>
                  {cs.authors && (
                    <span className="text-xs text-[#78716C] font-serif italic">
                      Original Authors: {cs.authors}
                    </span>
                  )}
                </div>
                <h2 className="font-serif-scholarly font-bold text-lg sm:text-xl text-[#1E1E1E]">
                  {cs.originalStudy}
                </h2>
              </div>
            </div>

            {/* Comparative Analysis: Original Claim vs Replications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-serif">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] space-y-1">
                <strong className="text-[#1E1E1E] uppercase font-seal text-[10px] tracking-wider block">
                  Original Published Hypothesis & Claim
                </strong>
                <p className="text-[#44403C] leading-relaxed">{cs.originalClaim}</p>
              </div>

              <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#A51C30] space-y-1">
                <strong className="text-[#A51C30] uppercase font-seal text-[10px] tracking-wider block">
                  Preregistered Multi-Lab Replication Outcome
                </strong>
                <p className="text-[#44403C] leading-relaxed">{cs.replicationAttempts}</p>
              </div>
            </div>

            {/* Current Scientific Consensus */}
            <div className="p-4 bg-[#1E1E1E] text-[#F3F3F1] text-xs space-y-1 font-serif">
              <strong className="text-[#F4EDCA] uppercase font-seal text-[10px] tracking-wider block">
                Contemporary Empirical Consensus & Theoretical Reinterpretation
              </strong>
              <p className="leading-relaxed text-[#E5E2DC]">{cs.currentStatus}</p>
            </div>

            {/* Methodological Lessons */}
            <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#226738] text-xs space-y-1 font-serif">
              <strong className="text-[#226738] uppercase font-seal text-[10px] tracking-wider block">
                Methodological Safeguard & Lesson for Psychological Science
              </strong>
              <p className="text-[#44403C] leading-relaxed">{cs.lessonsLearned}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Open Science Institutional Safeguards Banner */}
      <section className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-[#A51C30]" />
          <h2 className="font-serif-scholarly text-xl font-bold text-[#1E1E1E]">
            Institutional Open Science Safeguards & Methodological Standards
          </h2>
        </div>
        <p className="text-xs text-[#57534E] font-serif leading-relaxed max-w-4xl">
          To eliminate publication bias, selective reporting, p-hacking, and HARKing (Hypothesizing After Results are Known),
          contemporary psychology curriculum mandates the following institutional research safeguards:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OPEN_SCIENCE_REFORMS.map((ref: { id: string; name: string; purpose: string }) => (
            <div key={ref.id} className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] space-y-1.5 text-xs font-serif">
              <h3 className="font-serif-scholarly font-bold text-sm text-[#1E1E1E]">{ref.name}</h3>
              <p className="text-[#57534E] leading-relaxed">{ref.purpose}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
