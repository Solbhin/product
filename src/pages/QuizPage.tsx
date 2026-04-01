import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import questions from '@/data/questions.json';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { getResultTypeFromAnswers } from '@/lib/scoring';

const STORAGE_KEY = 'ai-test-progress';
const TOTAL = questions.length;

export default function QuizPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<number[]>(Array(TOTAL).fill(-1));
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (Array.isArray(data.answers) && data.answers.length === TOTAL) {
          setAnswers(data.answers);
        }
        if (typeof data.current === 'number') {
          setCurrent(data.current);
        }
      }
    } catch {
      // ignore parse errors
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, current }));
  }, [answers, current, loaded]);

  const handleSelect = (score: number) => {
    const next = [...answers];
    next[current] = score;
    setAnswers(next);
  };

  const handleNext = () => {
    if (current < TOTAL - 1) {
      setCurrent((c) => c + 1);
    } else {
      const type = getResultTypeFromAnswers(answers);
      localStorage.removeItem(STORAGE_KEY);
      navigate(`/result/${type}`);
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleRestart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers(Array(TOTAL).fill(-1));
    setCurrent(0);
  };

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  const q = questions[current];
  const isAnswered = answers[current] >= 0;
  const isLast = current === TOTAL - 1;
  const answeredCount = answers.filter((a) => a >= 0).length;

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            홈
          </Link>
          <span className="text-sm font-bold text-indigo-600">AI 생존력 테스트</span>
          <button
            onClick={handleRestart}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            처음부터
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <ProgressBar current={current + 1} total={TOTAL} />

        <QuestionCard
          key={current}
          question={q}
          selectedScore={answers[current]}
          onSelect={handleSelect}
        />

        {/* Answered indicators */}
        <div className="flex gap-1.5 justify-center mt-6 flex-wrap">
          {answers.map((a, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-7 h-7 rounded-full text-xs font-bold transition-all
                ${i === current
                  ? 'bg-indigo-600 text-white scale-110'
                  : a >= 0
                    ? 'bg-indigo-200 text-indigo-700'
                    : 'bg-gray-200 text-gray-400'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">
          {answeredCount}/{TOTAL} 답변 완료
        </p>
      </main>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-4 flex gap-3">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-semibold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95"
          >
            ← 이전
          </button>
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-[2] py-4 rounded-2xl font-bold text-white transition-all active:scale-95
              disabled:opacity-40 disabled:cursor-not-allowed
              bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md disabled:shadow-none"
          >
            {isLast ? '결과 보기 🎯' : '다음 →'}
          </button>
        </div>
      </div>
    </div>
  );
}
