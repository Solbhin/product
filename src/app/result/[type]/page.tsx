import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ResultCard from '@/components/ResultCard';
import ShareButton from '@/components/ShareButton';
import { getResultById, getAllResultIds } from '@/lib/scoring';
import results from '@/data/results.json';

// Pre-generate all 8 result pages at build time
export function generateStaticParams() {
  return getAllResultIds().map((id) => ({ type: id }));
}

export async function generateMetadata({
  params,
}: {
  params: { type: string };
}): Promise<Metadata> {
  const result = getResultById(params.type);
  if (!result) return {};

  const title = `나의 AI 유형은 "${result.title}" ${result.emoji}`;
  const description = result.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function ResultPage({ params }: { params: { type: string } }) {
  const result = getResultById(params.type);
  if (!result) notFound();

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-center">
          <span className="text-sm font-bold text-indigo-600">AI 시대 생존력 테스트</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-8">
        <ResultCard result={result} />

        {/* Action buttons */}
        <div className="mt-6 space-y-3">
          <ShareButton />

          <Link
            href="/quiz"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl border-2 border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            다시 테스트하기
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl text-gray-500 font-medium hover:text-gray-700 transition-colors"
          >
            ← 홈으로
          </Link>
        </div>

        {/* Other types */}
        <div className="mt-10">
          <h3 className="text-sm font-bold text-gray-400 text-center mb-4 uppercase tracking-wide">
            다른 유형 보기
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {results
              .filter((r) => r.id !== params.type)
              .map((r) => (
                <Link
                  key={r.id}
                  href={`/result/${r.id}/`}
                  className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl">{r.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700">{r.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6 mt-4">
        <p className="text-center text-sm text-gray-400">© 2024 AI 시대 생존력 테스트</p>
      </footer>
    </div>
  );
}
