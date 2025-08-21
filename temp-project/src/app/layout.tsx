import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prove You\'re Street Smart - 궁극의 서바이벌 게임',
  description: '명문대생과 서바이벌 애청자를 위한 100인 오프라인 서바이벌 이벤트. 지금 지원하고 명문대를 이겨라!',
  keywords: '서바이벌 게임, 명문대 챌린지, 스트리트스마트, 서바이벌 이벤트',
  openGraph: {
    title: 'Prove You\'re Street Smart - 궁극의 서바이벌 게임',
    description: '명문대생과 서바이벌 애청자를 위한 100인 오프라인 서바이벌 이벤트',
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
