import React, { useState } from 'react';
import {
  Binary,
  GitFork,
  AlertTriangle,
  Copy,
  Check,
  Calculator,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  STATS_PROGRESSION,
  STATISTICAL_TEST_GUIDES,
  STATISTICAL_PITFALLS
} from '../data/researchStatsData';
import { StatTestGuide } from '../types';

export const ResearchStatsLabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'selector' | 'progression' | 'pitfalls' | 'calculator'>('selector');

  // Test Selector State
  const [designType, setDesignType] = useState<string>('between');
  const [variableType, setVariableType] = useState<string>('continuous');
  const [groupCount, setGroupCount] = useState<string>('2');
  const [selectedTestId, setSelectedTestId] = useState<string>('independent-t-test');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Calculator State (Cohen's d)
  const [m1, setM1] = useState<number>(105);
  const [m2, setM2] = useState<number>(95);
  const [sdPooled, setSdPooled] = useState<number>(15);

  const cohensD = sdPooled > 0 ? (m1 - m2) / sdPooled : 0;
  const dAbs = Math.abs(cohensD);
  const dBenchmark =
    dAbs < 0.2
      ? 'Negligible effect'
      : dAbs < 0.5
      ? 'Small effect (Cohen’s standard benchmark)'
      : dAbs < 0.8
      ? 'Medium effect (typical behavioral science effect)'
      : 'Large effect (substantial clinical or experimental divergence)';

  // Z-Score Calculator
  const [rawScore, setRawScore] = useState<number>(115);
  const [popMean, setPopMean] = useState<number>(100);
  const [popSd, setPopSd] = useState<number>(15);

  const zVal = popSd > 0 ? (rawScore - popMean) / popSd : 0;

  const currentTestGuide: StatTestGuide =
    STATISTICAL_TEST_GUIDES.find((t) => t.id === selectedTestId) || STATISTICAL_TEST_GUIDES[0];

  const handleCopyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRecommendTest = () => {
    if (variableType === 'categorical') {
      setSelectedTestId('chi-square-independence');
    } else if (designType === 'correlational') {
      setSelectedTestId('pearson-correlation');
    } else if (designType === 'predictive') {
      setSelectedTestId('multiple-regression');
    } else if (designType === 'within') {
      setSelectedTestId('paired-t-test');
    } else if (designType === 'factorial') {
      setSelectedTestId('factorial-anova');
    } else if (groupCount === '3+') {
      setSelectedTestId('one-way-anova');
    } else {
      setSelectedTestId('independent-t-test');
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Quantitative Methodology Lab
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Inferential Statistics & General Linear Model
          </span>
        </div>
        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Research Methods & Statistics Lab
        </h1>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          An interactive laboratory providing statistical test selection decision trees, 4-year quantitative skill progressions,
          APA 7th Edition reporting templates, executable R and Python code scripts, methodological pitfall audits, and live effect-size calculators.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#E5E2DC] overflow-x-auto">
          {[
            { id: 'selector', label: 'Statistical Test Decision Tree', icon: GitFork },
            { id: 'progression', label: '4-Year Quantitative Progression', icon: Layers },
            { id: 'calculator', label: 'Live Effect Size Calculators', icon: Calculator },
            { id: 'pitfalls', label: 'Methodological Pitfalls', icon: AlertTriangle }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                    : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* TAB 1: TEST SELECTOR */}
      {activeTab === 'selector' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Decision Controls */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E5E2DC] p-5 shadow-2xs space-y-4">
            <h2 className="font-serif-scholarly font-bold text-base text-[#1E1E1E]">
              Hypothesis Test Decision Tree
            </h2>
            <p className="text-xs text-[#78716C] font-serif">
              Specify your study design and variable measurement properties to select the statistically valid inferential test.
            </p>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-seal font-bold text-[#1E1E1E] block mb-1 uppercase tracking-wider">
                  1. Study Design Architecture
                </label>
                <select
                  value={designType}
                  onChange={(e) => setDesignType(e.target.value)}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E]"
                >
                  <option value="between">Between-Subjects (Independent Groups)</option>
                  <option value="within">Within-Subjects (Repeated Measures)</option>
                  <option value="factorial">Factorial (2+ Independent Variables)</option>
                  <option value="correlational">Correlational (Two Continuous Variables)</option>
                  <option value="predictive">Predictive (Multiple Linear Regression)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-seal font-bold text-[#1E1E1E] block mb-1 uppercase tracking-wider">
                  2. Dependent / Outcome Scale
                </label>
                <select
                  value={variableType}
                  onChange={(e) => setVariableType(e.target.value)}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E]"
                >
                  <option value="continuous">Continuous (Interval / Ratio Scale)</option>
                  <option value="categorical">Categorical / Frequencies (Nominal / Ordinal)</option>
                </select>
              </div>

              {designType === 'between' && (
                <div>
                  <label className="text-[11px] font-seal font-bold text-[#1E1E1E] block mb-1 uppercase tracking-wider">
                    3. Number of Comparison Groups
                  </label>
                  <select
                    value={groupCount}
                    onChange={(e) => setGroupCount(e.target.value)}
                    className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] text-[#1E1E1E]"
                  >
                    <option value="2">2 Independent Groups</option>
                    <option value="3+">3 or More Groups</option>
                  </select>
                </div>
              )}

              <button
                onClick={handleRecommendTest}
                className="w-full py-2 bg-[#A51C30] hover:bg-[#8B1425] text-white rounded-xs text-xs font-semibold tracking-wide transition-colors"
              >
                Recommend Inferential Test
              </button>
            </div>

            {/* Quick Test List */}
            <div className="pt-4 border-t border-[#E5E2DC] space-y-1">
              <div className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-2">
                All Available Statistical Guides
              </div>
              {STATISTICAL_TEST_GUIDES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTestId(t.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-xs text-xs font-medium transition-all ${
                    selectedTestId === t.id
                      ? 'bg-[#1E1E1E] text-white font-semibold'
                      : 'hover:bg-[#FAF9F6] text-[#44403C]'
                  }`}
                >
                  {t.testName}
                </button>
              ))}
            </div>
          </div>

          {/* Test Guide Deep Dive */}
          <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E5E2DC] p-6 shadow-2xs space-y-6">
            <div className="border-b border-[#E5E2DC] pb-4">
              <span className="text-[10px] font-seal font-bold px-2 py-0.5 bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/20 uppercase">
                {currentTestGuide.designType}
              </span>
              <h2 className="font-serif-scholarly text-2xl font-bold text-[#1E1E1E] mt-2">
                {currentTestGuide.testName}
              </h2>
              <p className="text-xs text-[#57534E] leading-relaxed mt-1 font-serif">
                {currentTestGuide.purpose}
              </p>
            </div>

            {/* Assumptions */}
            <div className="space-y-2">
              <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                Mandatory Assumptions to Test & Satisfy
              </h3>
              <ul className="space-y-1">
                {currentTestGuide.assumptions.map((assump: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#44403C] font-serif">
                    <span className="text-[#A51C30] font-bold text-xs mt-0.5">•</span>
                    <span>{assump}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* APA Reporting Template */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider">
                  APA 7th Edition Reporting Template
                </h3>
                <button
                  onClick={() => handleCopyText('apa', currentTestGuide.apaTemplate)}
                  className="flex items-center gap-1 text-[11px] text-[#A51C30] hover:text-[#8B1425] font-semibold"
                >
                  {copiedKey === 'apa' ? <Check className="w-3 h-3 text-[#226738]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'apa' ? 'Copied' : 'Copy Template'}</span>
                </button>
              </div>
              <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] text-xs font-serif text-[#1E1E1E] leading-relaxed italic">
                "{currentTestGuide.apaTemplate}"
              </div>
            </div>

            {/* Code Snippets (R & Python) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* R Code */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-seal font-bold text-[#78716C] uppercase">R Syntax</span>
                  <button
                    onClick={() => handleCopyText('r', currentTestGuide.rCode)}
                    className="text-[10px] text-[#57534E] hover:text-[#1E1E1E] font-mono"
                  >
                    {copiedKey === 'r' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="p-3.5 bg-[#1E1E1E] text-[#98C379] font-mono-code text-[11px] overflow-x-auto rounded-none border border-[#333333]">
                  {currentTestGuide.rCode}
                </pre>
              </div>

              {/* Python Code */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-seal font-bold text-[#78716C] uppercase">Python (SciPy / Statsmodels)</span>
                  <button
                    onClick={() => handleCopyText('py', currentTestGuide.pythonCode)}
                    className="text-[10px] text-[#57534E] hover:text-[#1E1E1E] font-mono"
                  >
                    {copiedKey === 'py' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="p-3.5 bg-[#1E1E1E] text-[#61AFEF] font-mono-code text-[11px] overflow-x-auto rounded-none border border-[#333333]">
                  {currentTestGuide.pythonCode}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROGRESSION */}
      {activeTab === 'progression' && (
        <div className="space-y-4">
          {STATS_PROGRESSION.map((prog) => (
            <div key={prog.year} className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#1E1E1E] text-white uppercase">
                  YEAR {prog.year}
                </span>
                <h3 className="font-serif-scholarly text-lg font-bold text-[#1E1E1E]">
                  {prog.title}
                </h3>
              </div>
              <p className="text-xs text-[#57534E] font-serif">{prog.focus}</p>

              <div>
                <h4 className="text-[10px] font-seal font-bold text-[#78716C] uppercase tracking-wider mb-2">
                  Quantitative Core Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {prog.coreCompetencies.map((comp: string, cidx: number) => (
                    <div key={cidx} className="p-3 bg-[#FAF9F6] border border-[#E5E2DC] text-xs text-[#44403C] flex items-start gap-2 font-serif">
                      <span className="text-[#A51C30] font-bold">✓</span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#78716C] font-mono pt-1">
                Formal Courses: {prog.courses.join(', ')}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: CALCULATORS */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cohen's d Calculator */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-4">
            <div>
              <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/20 uppercase">
                Effect Size Metric
              </span>
              <h3 className="font-serif-scholarly text-xl font-bold text-[#1E1E1E] mt-1.5">
                Cohen’s d Calculator
              </h3>
              <p className="text-xs text-[#78716C] mt-0.5 font-serif">
                Calculates the standardized mean difference between two independent experimental groups: d = (M1 - M2) / SD_pooled.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Group 1 Mean (M1)</label>
                <input
                  type="number"
                  value={m1}
                  onChange={(e) => setM1(Number(e.target.value))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Group 2 Mean (M2)</label>
                <input
                  type="number"
                  value={m2}
                  onChange={(e) => setM2(Number(e.target.value))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Pooled SD (σ)</label>
                <input
                  type="number"
                  value={sdPooled}
                  onChange={(e) => setSdPooled(Math.max(0.1, Number(e.target.value)))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] space-y-2">
              <div className="text-[10px] font-seal uppercase tracking-wider text-[#78716C]">Computed Effect Size:</div>
              <div className="text-3xl font-serif-scholarly font-bold text-[#A51C30]">
                d = {cohensD.toFixed(3)}
              </div>
              <div className="text-xs text-[#44403C] font-serif">
                Scholarly Interpretation: <strong className="text-[#1E1E1E]">{dBenchmark}</strong>
              </div>

              {/* Visual Effect Bar */}
              <div className="w-full h-1.5 bg-[#E5E2DC] rounded-none overflow-hidden mt-3">
                <div
                  className="h-full bg-[#A51C30] transition-all"
                  style={{ width: `${Math.min(100, (dAbs / 1.5) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-[#78716C] font-mono">
                <span>0.0 (None)</span>
                <span>0.2 (Small)</span>
                <span>0.5 (Medium)</span>
                <span>0.8+ (Large)</span>
              </div>
            </div>
          </div>

          {/* Z-Score & Normal Deviation Calculator */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-4">
            <div>
              <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#FAF8F3] text-[#1E1E1E] border border-[#E5E2DC] uppercase">
                Standard Normal Deviate
              </span>
              <h3 className="font-serif-scholarly text-xl font-bold text-[#1E1E1E] mt-1.5">
                Z-Score & Critical P-Value Calculator
              </h3>
              <p className="text-xs text-[#78716C] mt-0.5 font-serif">
                Transforms raw individual scores into standard deviation units from the population mean: z = (X - μ) / σ.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Raw Score (X)</label>
                <input
                  type="number"
                  value={rawScore}
                  onChange={(e) => setRawScore(Number(e.target.value))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Pop. Mean (μ)</label>
                <input
                  type="number"
                  value={popMean}
                  onChange={(e) => setPopMean(Number(e.target.value))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
              <div>
                <label className="text-[10px] font-seal font-bold text-[#57534E] block mb-1">Pop. SD (σ)</label>
                <input
                  type="number"
                  value={popSd}
                  onChange={(e) => setPopSd(Math.max(0.1, Number(e.target.value)))}
                  className="w-full text-xs p-2 rounded-xs border border-[#E5E2DC] bg-[#FAF9F6] font-mono text-[#1E1E1E]"
                />
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] space-y-2">
              <div className="text-[10px] font-seal uppercase tracking-wider text-[#78716C]">Standardized Z-Score:</div>
              <div className="text-3xl font-serif-scholarly font-bold text-[#1E1E1E]">
                z = {zVal.toFixed(2)}
              </div>
              <div className="text-xs text-[#57534E] font-serif">
                {zVal > 0 ? `${zVal.toFixed(2)} standard deviations above the mean` : `${Math.abs(zVal).toFixed(2)} standard deviations below the mean`}
              </div>
              <p className="text-[11px] text-[#78716C] pt-1 font-serif">
                {Math.abs(zVal) >= 1.96 ? (
                  <span className="text-[#A51C30] font-semibold">
                    Statistically significant at two-tailed α = .05 (|z| ≥ 1.96).
                  </span>
                ) : (
                  <span className="text-[#57534E]">
                    Retains null hypothesis (|z| &lt; 1.96).
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PITFALLS */}
      {activeTab === 'pitfalls' && (
        <div className="space-y-4">
          {STATISTICAL_PITFALLS.map((pit) => (
            <div key={pit.id} className="p-6 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#A51C30] shrink-0" />
                  <h3 className="font-serif-scholarly font-bold text-lg text-[#1E1E1E]">
                    {pit.name}
                  </h3>
                </div>
                <span className="text-[9px] font-seal font-bold px-2 py-0.5 uppercase tracking-wider bg-[#FAF8F3] text-[#A51C30] border border-[#A51C30]/20">
                  Severity: {pit.severity}
                </span>
              </div>

              <p className="text-xs text-[#44403C] leading-relaxed font-serif">
                {pit.description}
              </p>

              <div className="p-3.5 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#226738] text-xs text-[#226738] font-serif">
                <strong className="block text-[#1E1E1E] mb-0.5 font-sans font-semibold">Correction & Best Practice:</strong>
                {pit.howToAvoid}
              </div>

              <div className="text-[11px] text-[#78716C] font-serif italic">
                <strong className="font-sans font-semibold text-[#57534E]">Empirical Case Study:</strong> {pit.example}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
