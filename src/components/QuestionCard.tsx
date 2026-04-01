'use client';

interface Option {
  label: string;
  text: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuestionCardProps {
  question: Question;
  selectedScore: number;
  onSelect: (score: number) => void;
}

export default function QuestionCard({ question, selectedScore, onSelect }: QuestionCardProps) {
  return (
    <div className="animate-slide-up">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 leading-relaxed text-balance">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selectedScore === opt.score;
            return (
              <button
                key={opt.label}
                onClick={() => onSelect(opt.score)}
                className={`w-full text-left flex items-start gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-200 group
                  ${isSelected
                    ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                    : 'border-gray-100 bg-gray-50 hover:border-indigo-200 hover:bg-indigo-50/50'
                  }`}
              >
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center transition-colors
                    ${isSelected
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-gray-500 border border-gray-200 group-hover:border-indigo-300 group-hover:text-indigo-500'
                    }`}
                >
                  {opt.label}
                </span>
                <span className={`text-sm sm:text-base leading-relaxed font-medium transition-colors
                  ${isSelected ? 'text-indigo-800' : 'text-gray-700'}`}>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
