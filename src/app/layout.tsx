import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnau Gómez | Software Engineer | Web, Desktop & Mobile",
  description:
    "I am Arnau, a software engineer at Tiptap (YC S23). For the past 6 years, I have helped companies like Amazon integrate AI into their web and mobile aplications. My focus is on TypeScript, React and PyTorch, with an emphasis on performance, QA and scalability. At Tiptap, I'm building the AI Toolkit, a platform where AI can work with documents on complex tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, "antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
