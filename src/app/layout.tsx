import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "@/contexts/TodoContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tasker - 아름다운 할 일 관리",
  description: "당신의 하루를 더 아름답게 만들어주는 할 일 관리 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-inter antialiased">
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
