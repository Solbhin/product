import type { ResultType } from '@/lib/scoring';

interface ResultCardProps {
  result: ResultType;
  score?: number;
  maxScore?: number;
}

export default function ResultCard({ result, score, maxScore = 30 }: ResultCardProps) {
  return (
    <div className="animate-slide-up">
      {/* Type Badge */}
      <div
        className="rounded-3xl p-8 sm:p-10 text-center mb-4"
        style={{ backgroundColor: result.bgColor }}
      >
        <div className="text-6xl mb-4">{result.emoji}</div>
        <div
          className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-3"
          style={{ backgroundColor: result.badgeColor, color: result.color }}
        >
          나의 AI 생존 유형
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: result.color }}>
          {result.title}
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-600">{result.subtitle}</p>

        {/* Score display */}
        {score !== undefined && (
          <div className="mt-6 inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <span className="text-sm text-gray-500">생존력 점수</span>
            <span className="font-bold text-lg" style={{ color: result.color }}>
              {score}
            </span>
            <span className="text-sm text-gray-400">/ {maxScore}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-4">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span
            className="w-1.5 h-5 rounded-full inline-block"
            style={{ backgroundColor: result.color }}
          />
          유형 설명
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{result.description}</p>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span
            className="w-1.5 h-5 rounded-full inline-block"
            style={{ backgroundColor: result.color }}
          />
          추천 행동 3가지
        </h2>
        <div className="space-y-3">
          {result.recommendations.map((rec, idx) => (
            <div
              key={idx}
              className="flex gap-3 items-start p-4 rounded-2xl"
              style={{ backgroundColor: result.bgColor }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                style={{ backgroundColor: result.color }}
              >
                {idx + 1}
              </span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
