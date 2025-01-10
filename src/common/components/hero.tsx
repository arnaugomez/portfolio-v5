"use client";

import { useState, useRef, useEffect } from "react";

const texts = ["Bringing AI", "to your web", "and mobile", "applications"];

export function Hero() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto uppercase">
        <div className="h-20"></div>
        {texts.map((text, index) => (
          <TextLine
            key={index}
            text={text}
            height={height}
            isReverse={Boolean(index % 2)}
          />
        ))}
      </div>
    </div>
  );
}

interface TextLineProps {
  text: string;
  height: number;
  isReverse?: boolean;
}

function TextLine({ text, height, isReverse }: TextLineProps) {
  const factor = isReverse ? -1 : 1;
  return (
    <div
      style={{ transform: `translateX(${height * factor}px)` }}
      className="relative whitespace-nowrap w-fit leading-none font-light text-fluid"
    >
      <div className="absolute whitespace-nowrap right-full w-fit text-slate-200 px-1">
        <div className="absolute whitespace-nowrap right-full w-fit text-slate-200 px-1">
          {text}
        </div>
        {text}
      </div>
      <div className="absolute whitespace-nowrap left-full w-fit text-slate-200 px-1">
        {text}
        <div className="absolute whitespace-nowrap left-full w-fit text-slate-200 px-1">
          {text}
        </div>
      </div>
      {text}
    </div>
  );
}

/**
 * 
"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const texts = ["Bringing AI", "to your web", "and mobile", "applications"];

export function Hero() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto uppercase">
        <div className="h-20"></div>
        {texts.map((text, index) => (
          <TextLine
            key={index}
            text={text}
            height={height}
            isReverse={Boolean(index % 2)}
          />
        ))}
      </div>
    </div>
  );
}

interface TextLineProps {
  text: string;
  height: number;
  isReverse?: boolean;
}

function TextLine({ text, height, isReverse }: TextLineProps) {
  const factor = isReverse ? -1 : 1;
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { y: "100%" },
        {
          y: "0%",
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [height]);

  return (
    <div
      ref={textRef}
      style={{ transform: `translateX(${height * factor}px)` }}
      className="relative whitespace-nowrap w-fit leading-none font-light text-fluid"
    >
      {text.split("").map((char, index) => (
        <span key={index} className="char inline-block">
          {char}
        </span>
      ))}
    </div>
  );
}

 */
