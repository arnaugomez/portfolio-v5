"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import clsx from "clsx/lite";

function timeoutPromise(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
            index={index}
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
  index: number;
  height: number;
  isReverse?: boolean;
}

function TextLine({ text, index, height, isReverse }: TextLineProps) {
  const factor = isReverse ? -1 : 1;
  const textRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);
  const [showSecondaryText, setShowSecondaryText] = useState(false);

  const animation = useCallback(async () => {
    if (textRef.current) {
      const chars = textRef.current.children;
      timeoutPromise(2000).then(() => setShowSecondaryText(true));
      await timeoutPromise(500 * index);
      setShowText(true);
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
  }, [index]);

  useEffect(() => {
    animation();
  }, [animation]);

  return (
    <div
      style={{ transform: `translateX(${height * factor}px)` }}
      className="relative whitespace-nowrap w-fit leading-none font-light text-fluid"
    >
      <div
        className={clsx(
          showSecondaryText ? "opacity-100" : "opacity-0",
          "absolute duration-1000 transition-opacity whitespace-nowrap right-full w-fit text-slate-200 px-1"
        )}
      >
        <div className="absolute whitespace-nowrap right-full w-fit text-slate-200 px-1">
          {text}
        </div>
        {text}
      </div>
      <div
        className={clsx(
          showSecondaryText ? "opacity-100" : "opacity-0",
          "absolute duration-1000 transition-opacity whitespace-nowrap left-full w-fit text-slate-200 px-1"
        )}
      >
        {text}
        <div className="absolute whitespace-nowrap left-full w-fit text-slate-200 px-1">
          {text}
        </div>
      </div>
      <div
        ref={textRef}
        className={clsx(!showText && "opacity-0", "overflow-hidden")}
      >
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </div>
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
