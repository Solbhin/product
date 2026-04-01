import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 시대 생존력 테스트',
};

const STATS = [
  { value: '10', label: '가지 질문' },
  { value: '3분', label: '소요 시간' },
  { value: '8', label: '가지 유형' },
];

const TYPES = [
  { emoji: '👑', name: 'AI 마스터' },
  { emoji: '🚀', name: 'AI 개척자' },
  { emoji: '🤝', name: 'AI 협력자' },
  { emoji: '🧭', name: 'AI 탐험가' },
  { emoji: '👁️', name: 'AI 관찰자' },
  { emoji: '🌱', name: 'AI 입문자' },
  { emoji: '🤔', name: 'AI 회의론자' },
  { emoji: '🌙', name: 'AI 이방인' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            AI 시대가 이미 시작됐습니다
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            AI 시대<br />생존력 테스트
          </h1>

          <p className="text-lg sm:text-xl text-indigo-100 mb-8 leading-relaxed">
            당신은 AI 시대에 얼마나 준비되어 있나요?<br className="hidden sm:block" />
            10가지 질문으로 나의 AI 생존 유형을 알아보세요.
          </p>

          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            테스트 시작하기
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-indigo-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Types */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">8가지 AI 생존 유형</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TYPES.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{t.emoji}</div>
              <div className="text-sm font-semibold text-gray-700">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-2xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">이렇게 진행돼요</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: '10가지 질문에 답하기', desc: '평소 AI를 어떻게 생각하고 활용하는지 솔직하게 답해보세요.' },
              { step: '02', title: '점수 계산', desc: '답변을 바탕으로 AI 시대 생존력 점수를 계산합니다.' },
              { step: '03', title: '유형 결과 확인', desc: '8가지 유형 중 나의 타입과 맞춤형 추천 행동을 확인하세요.' },
              { step: '04', title: '결과 공유', desc: '결과를 친구에게 공유하고 서로의 유형을 비교해보세요.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 pb-16 text-center">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          지금 테스트 시작
        </Link>
        <p className="text-sm text-gray-400 mt-3">무료 · 회원가입 불필요 · 약 3분 소요</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-2xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <span>© 2024 AI 시대 생존력 테스트</span>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            테스트 소개 →
          </Link>
        </div>
      </footer>
    </main>
  );
}
