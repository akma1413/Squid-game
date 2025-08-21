import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COPY } from '@/content/copy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: COPY.seo.title,
  description: COPY.seo.description,
  keywords: '서바이벌 게임, 명문대 챌린지, 스트리트스마트, 서바이벌 이벤트',
  openGraph: {
    title: COPY.seo.title,
    description: COPY.seo.description,
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
