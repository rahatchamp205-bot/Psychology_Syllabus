import React, { useState } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { QUIZ_QUESTIONS, FLASHCARD_DECK } from '../data/quizzesData';
import { UserDegreeState } from '../types';

interface ActiveRecallViewProps {
  degreeState: UserDegreeState;
  onRecordQuizScore: (questionId: string, score: number) => void;
}

export const ActiveRecallView: React.FC<ActiveRecallViewProps> = ({
  degreeState,
  onRecordQuizScore
}) => {
  const [mode, setMode] = useState<'quiz' | 'flashcards'>('quiz');

  // Quiz Mode State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredQuestions = QUIZ_QUESTIONS.filter(
    (q) => filterCategory === 'all' || q.category === filterCategory
  );
  const activeQuestion = filteredQuestions[currentQuizIndex] || filteredQuestions[0];

  // Flashcards State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [ratedConfidence, setRatedConfidence] = useState<number | null>(null);

  const activeCard = FLASHCARD_DECK[currentCardIndex] || FLASHCARD_DECK[0];

  const handleSelectOption = (idx: number) => {
    if (!submitted) {
      setSelectedOption(idx);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !activeQuestion) return;
    setSubmitted(true);
    const correctIdx = activeQuestion.correctAnswerIndex ?? (typeof activeQuestion.correctAnswer === 'number' ? activeQuestion.correctAnswer : 0);
    const isCorrect = selectedOption === correctIdx;
    onRecordQuizScore(activeQuestion.id, isCorrect ? 1 : 0);
  };

  const handleNextQuestion = () => {
    setSubmitted(false);
    setSelectedOption(null);
    setCurrentQuizIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setRatedConfidence(null);
    setCurrentCardIndex((prev) => (prev + 1) % FLASHCARD_DECK.length);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Testing Effect & Retrieval Practice
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Cognitive Science of Durable Memory (Roediger & Karpicke, 2006)
          </span>
        </div>
        <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
          Active Recall & Conceptual Self-Assessment
        </h1>
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-4xl">
          Strengthen consolidated neurological representations through rigorous retrieval practice.
          Includes honours-standard multiple-choice problem sets and active recall flashcards with self-rated retrieval confidence.
        </p>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#E5E2DC]">
          <button
            onClick={() => setMode('quiz')}
            className={`px-4 py-1.5 rounded-xs text-xs font-semibold transition-all border ${
              mode === 'quiz'
                ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
            }`}
          >
            Academic Multiple-Choice Examination
          </button>
          <button
            onClick={() => setMode('flashcards')}
            className={`px-4 py-1.5 rounded-xs text-xs font-semibold transition-all border ${
              mode === 'flashcards'
                ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                : 'bg-[#FFFFFF] text-[#57534E] hover:text-[#1E1E1E] border-[#E5E2DC]'
            }`}
          >
            Concept Flashcards (Retrieval Index 1–5)
          </button>
        </div>
      </section>

      {/* MODE 1: MULTIPLE CHOICE EXAMINATION */}
      {mode === 'quiz' && activeQuestion && (
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Question Metadata */}
          <div className="flex items-center justify-between text-xs text-[#78716C] flex-wrap gap-2 font-serif">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#A51C30]">
                {activeQuestion.courseCode}
              </span>
              <span>•</span>
              <span className="capitalize font-seal text-[10px] text-[#57534E]">
                {activeQuestion.category ? activeQuestion.category.replace(/-/g, ' ') : 'Concept Check'}
              </span>
              <span>•</span>
              <span className="capitalize font-seal text-[10px] text-[#78716C]">
                Level: {activeQuestion.difficulty}
              </span>
            </div>
            <div className="font-mono text-[11px]">
              Item {currentQuizIndex + 1} of {filteredQuestions.length}
            </div>
          </div>

          {/* Question Card */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E2DC] shadow-2xs space-y-6">
            <h2 className="font-serif-scholarly font-bold text-lg sm:text-xl text-[#1E1E1E] leading-relaxed">
              {activeQuestion.question || activeQuestion.prompt}
            </h2>

            {/* Options */}
            <div className="space-y-2.5">
              {(activeQuestion.options || []).map((option, idx) => {
                const isSelected = selectedOption === idx;
                const correctIdx = activeQuestion.correctAnswerIndex ?? (typeof activeQuestion.correctAnswer === 'number' ? activeQuestion.correctAnswer : 0);
                const isCorrect = idx === correctIdx;
                let optionStyle = 'border-[#E5E2DC] hover:bg-[#FAF9F6] text-[#1E1E1E] bg-[#FFFFFF]';

                if (submitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-[#E8F3EB] border-[#226738] text-[#1A4D2E] font-semibold';
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FDF2F2] border-[#A51C30] text-[#A51C30]';
                  } else {
                    optionStyle = 'border-[#E5E2DC] text-[#A8A29E] opacity-50 bg-[#FAF9F6]';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#FAF8F3] border-[#A51C30] text-[#1E1E1E] font-semibold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={submitted}
                    className={`w-full text-left p-3.5 rounded-xs border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 font-serif ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono font-bold text-xs shrink-0 mt-0.5 text-[#A51C30]">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span>{option}</span>
                    </div>

                    {submitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-[#226738] shrink-0 mt-0.5" />
                    )}
                    {submitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-[#A51C30] shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {submitted && (
              <div className="p-4 bg-[#FAF8F3] border border-[#E5E2DC] border-l-3 border-l-[#A51C30] text-xs text-[#44403C] leading-relaxed space-y-1 animate-in fade-in duration-200 font-serif">
                <div className="font-seal text-[10px] font-bold text-[#A51C30] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A51C30]" />
                  Theoretical Rationale & Mechanism
                </div>
                <p>{activeQuestion.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-3 flex items-center justify-between border-t border-[#E5E2DC]">
              <div className="text-xs text-[#78716C] font-mono">
                {degreeState.quizScores[activeQuestion.id] === 1 ? 'Mastered in Record' : ''}
              </div>

              {!submitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-5 py-2 rounded-xs bg-[#A51C30] hover:bg-[#8B1425] disabled:opacity-40 text-white text-xs font-semibold transition-all"
                >
                  Submit Examination Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xs bg-[#1E1E1E] hover:bg-[#333333] text-white text-xs font-semibold transition-all"
                >
                  <span>Proceed to Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4EDCA]" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: FLASHCARDS */}
      {mode === 'flashcards' && activeCard && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-[#78716C] font-serif">
            <span className="font-mono text-xs font-bold text-[#A51C30]">
              {activeCard.courseCode} • {activeCard.keyConcept}
            </span>
            <span className="font-mono text-[11px]">Card {currentCardIndex + 1} of {FLASHCARD_DECK.length}</span>
          </div>

          {/* Interactive Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[280px] p-8 bg-[#FFFFFF] border border-[#E5E2DC] hover:border-[#A51C30] cursor-pointer shadow-sm flex flex-col justify-between transition-all select-none"
          >
            <div className="text-right text-[10px] font-seal uppercase tracking-wider text-[#78716C]">
              {isFlipped ? 'Model Synthesis (Click to invert)' : 'Retrieval Prompt (Click to reveal)'}
            </div>

            <div className="my-auto py-4">
              {!isFlipped ? (
                <div className="font-serif-scholarly text-xl sm:text-2xl font-bold text-[#1E1E1E] text-center leading-relaxed">
                  {activeCard.front}
                </div>
              ) : (
                <div className="text-xs sm:text-sm text-[#33302E] whitespace-pre-line leading-relaxed font-serif">
                  {activeCard.back}
                </div>
              )}
            </div>

            <div className="text-center text-[10px] text-[#78716C] flex items-center justify-center gap-1 font-seal uppercase tracking-wider">
              <RotateCcw className="w-3 h-3 text-[#A51C30]" />
              <span>Click surface to toggle prompt and synthesis</span>
            </div>
          </div>

          {/* Rate Recall Bar (1-5) */}
          {isFlipped && (
            <div className="p-4 bg-[#FAF9F6] border border-[#E5E2DC] text-center space-y-3 animate-in fade-in duration-150">
              <div className="text-xs font-seal uppercase tracking-wider font-semibold text-[#1E1E1E]">
                Rate Retrieval Fluency & Confidence:
              </div>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => {
                      setRatedConfidence(score);
                      setTimeout(handleNextCard, 200);
                    }}
                    className={`w-9 h-9 rounded-xs text-xs font-mono font-bold border transition-all ${
                      score >= 4
                        ? 'bg-[#E8F3EB] hover:bg-[#D2EBD9] border-[#226738] text-[#226738]'
                        : score === 3
                        ? 'bg-[#FFF5E6] hover:bg-[#FFE8CC] border-[#8C4A00] text-[#8C4A00]'
                        : 'bg-[#FDF2F2] hover:bg-[#FCE6E6] border-[#A51C30] text-[#A51C30]'
                    }`}
                  >
                    {score}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-[#78716C] px-4 font-mono">
                <span>1: Blackout</span>
                <span>3: Hesitant Retrieval</span>
                <span>5: Instant Mastery</span>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleNextCard}
              className="flex items-center gap-1 text-xs font-seal uppercase tracking-wider font-semibold text-[#57534E] hover:text-[#1E1E1E]"
            >
              <span>Skip to Next Card</span>
              <ChevronRight className="w-4 h-4 text-[#A51C30]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
