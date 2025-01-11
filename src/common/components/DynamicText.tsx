"use client";
import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";

const text =
  "Hi, I'm Arnau, a software developer from Barcelona.# For the past 6 years, I have helped large companies like Amazon # build modern web and mobile apps that perform at scale.# My focus is on TypeScript and React,# with an emphasis on performance, QA and scalability.# I am currently working on AI engineering & agents with LangChain.";
const split = text.split("#");

export function DynamicText() {
  const [selectedChild, setSelectedChild] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const goal = window.innerHeight / (window.innerWidth < 640 ? 3 : 2);

      const children = Array.from(containerRef.current.children)
        .filter((child) => child.tagName === "SPAN")
        .map((child) => {
          const rect = child.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          return Math.abs(center - goal);
        });
      const closestChildIndex = children.indexOf(Math.min(...children));
      setSelectedChild(closestChildIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-slate-400 flex-1 min-w-0 text-3xl sm:text-4xl font-bold">
      <div className="relative max-w-2xl" ref={containerRef}>
        <div className="hidden xl:block absolute pl-12 -top-4 left-full text-9xl text-slate-300">
          &rdquo;
        </div>
        {split.map((text, index) => (
          <span
            className={cn(
              index === selectedChild && "text-slate-700",
              "transition-colors duration-500 ease-in-out"
            )}
            key={index}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
