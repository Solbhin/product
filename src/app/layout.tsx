import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://ai-survival-test.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AI 시대 생존력 테스트',
    template: '%s | AI 시대 생존력 테스트',
  },
  description:
    '10가지 질문으로 알아보는 나의 AI 시대 생존력. 8가지 유형 중 나는 어떤 타입일까?',
  keywords: ['AI', '인공지능', '테스트', '생존력', 'MBTI', 'AI 활용', '디지털 전환'],
  authors: [{ name: 'AI Survival Test' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: 'AI 시대 생존력 테스트',
    title: 'AI 시대 생존력 테스트',
    description: '10가지 질문으로 알아보는 나의 AI 시대 생존력. 8가지 유형 중 나는 어떤 타입?',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI 시대 생존력 테스트' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 시대 생존력 테스트',
    description: '10가지 질문으로 알아보는 나의 AI 시대 생존력',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366F1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#F8F9FF]">{children}</body>
    </html>
  );
}
