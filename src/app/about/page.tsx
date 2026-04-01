import type { Metadata } from 'next';
import Link from 'next/link';
import results from '@/data/results.json';

export const metadata: Metadata = {
  title: '테스트 소개',
  description: 'AI 시대 생존력 테스트가 무엇인지, 어떻게 만들어졌는지 알아보세요.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            홈
          </Link>
          <span className="text-sm font-bold text-indigo-600">테스트 소개</span>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6 pb-16">
        {/* Title */}
        <div className="text-center py-4">
          <div className="text-5xl mb-4">🤖</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            AI 시대 생존력 테스트
          </h1>
          <p className="text-gray-500 mt-2">당신의 AI 활용 준비도를 알아보세요</p>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-3 text-lg">이 테스트는 무엇인가요?</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            AI 시대 생존력 테스트는 AI 기술이 빠르게 발전하는 현재, 나 자신이 AI를 어떻게 인식하고 활용하는지 점검해보는 자기 진단 도구입니다.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3">
            10가지 상황 기반 질문을 통해 AI 적응력, 창의적 활용 능력, 비판적 사고를 측정하고, 8가지 유형 중 나와 가장 가까운 유형을 알려드립니다.
          </p>
        </div>

        {/* Scoring */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">점수 산정 방식</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">Q</span>
              <span className="text-gray-600">총 10개 질문, 각 4개 보기 (0~3점)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-xs">∑</span>
              <span className="text-gray-600">최저 0점 ~ 최고 30점</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">→</span>
              <span className="text-gray-600">점수 구간에 따라 8가지 유형 중 하나 결정</span>
            </div>
          </div>
        </div>

        {/* Types list */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">8가지 AI 생존 유형</h2>
          <div className="space-y-3">
            {results.map((r) => (
              <Link
                key={r.id}
                href={`/result/${r.id}/`}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
              >
                <span className="text-3xl">{r.emoji}</span>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {r.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {r.minScore}~{r.maxScore}점 · {r.subtitle}
                  </div>
                </div>
                <span className="text-gray-300 group-hover:text-indigo-400 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6">
          <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            참고 사항
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            이 테스트는 재미와 자기 인식을 위한 가벼운 진단 도구입니다. 결과가 개인의 능력이나 가치를 규정하지 않으며, 언제든 새로운 유형으로 성장할 수 있습니다.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            테스트 시작하기
          </Link>
        </div>
      </main>
    </div>
  );
}
