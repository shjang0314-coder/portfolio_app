import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "홍길동 | Senior Full-Stack Developer | Portfolio",
  description: "사용자 경험을 최우선으로 생각하는 개발자. 성능 최적화, 확장 가능한 아키텍처, 사용자 중심 설계를 전문으로 합니다.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "홍길동" }],
  openGraph: {
    title: "홍길동 | Senior Full-Stack Developer",
    description: "사용자 경험을 최우선으로 생각하는 개발자",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "홍길동 | Senior Full-Stack Developer",
    description: "사용자 경험을 최우선으로 생각하는 개발자",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
