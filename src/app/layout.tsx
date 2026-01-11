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
    "For the past 6 years, I have helped large companies like Amazon build modern web and mobile apps that perform at scale. My focus is on TypeScript and React, with an emphasis on performance, QA and scalability. I am currently working on AI agents with LangChain.",
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
