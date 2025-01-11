"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
  PropsWithChildren,
} from "react";
import gsap from "gsap";
import clsx from "clsx/lite";

function timeoutPromise(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const texts = [
  "Bringing *AI*",
  "to your web",
  "and mobile",
  "applications",
].map((text) => ({
  groups: text
    .split("*")
    .filter(Boolean)
    .map((t, index) => ({
      text: t,
      isBold: Boolean(index % 2),
    })),
}));

export function Hero() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHeight(document.body.getBoundingClientRect().top);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto uppercase">
        <div className="h-16 sm:h"></div>
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
  text: (typeof texts)[number];
  index: number;
  height: number;
  isReverse?: boolean;
}

function TextLine({ text, index, height, isReverse }: TextLineProps) {
  const hasTriggered = useRef(false);
  const factor = isReverse ? -1 : 1;
  const textRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);
  const [showSecondaryText, setShowSecondaryText] = useState(false);

  const animation = useCallback(async () => {
    if (!textRef.current) return;

    if (hasTriggered.current) return;
    hasTriggered.current = true;

    const chars = textRef.current.querySelectorAll(".char");
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
  }, [index]);

  useEffect(() => {
    animation();
  }, [animation]);

  const plainText = text.groups.map((group) => group.text).join("");

  return (
    <div
      style={{ transform: `translateX(${height * factor}px)` }}
      className="relative whitespace-nowrap w-fit leading-none font-light text-fluid text-slate-900"
    >
      <div
        className={clsx(
          showSecondaryText ? "opacity-100" : "opacity-0",
          "absolute duration-1000 transition-opacity whitespace-nowrap right-full w-fit text-slate-200 px-1"
        )}
      >
        <div className="absolute whitespace-nowrap right-full w-fit text-slate-200 px-1">
          {plainText}
        </div>
        {plainText}
      </div>
      <div
        className={clsx(
          showSecondaryText ? "opacity-100" : "opacity-0",
          "absolute duration-1000 transition-opacity whitespace-nowrap left-full w-fit text-slate-200 px-1"
        )}
      >
        {plainText}
        <div className="absolute whitespace-nowrap left-full w-fit text-slate-200 px-1">
          {plainText}
        </div>
      </div>
      <div
        ref={textRef}
        className={clsx(!showText && "opacity-0", "overflow-hidden")}
      >
        {text.groups.map((group, index) => {
          if (group.isBold) {
            return (
              <BoldText key={index}>
                <TextSplit key={index} text={group.text} />
              </BoldText>
            );
          }
          return <TextSplit key={index} text={group.text} />;
        })}
      </div>
    </div>
  );
}

const classes = [
  "text-violet-500",
  "text-purple-500",
  "text-fuchsia-500",
  "text-pink-500",
  "text-rose-500",
];

const dropShadows = [
  "drop-shadow-[0_0_6px_#a78bfa]",
  "drop-shadow-[0_0_6px_#c084fc]",
  "drop-shadow-[0_0_6px_#e879f9]",
  "drop-shadow-[0_0_6px_#f472b6]",
  "drop-shadow-[0_0_6px_#fb7185]",
];
function BoldText({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        return (prev + 1) % classes.length;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={clsx(
        classes[index],
        dropShadows[index],
        "transition-all duration-1000"
      )}
    >
      {children}
    </span>
  );
}

function TextSplit({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char transition-none whitespace-pre inline-block"
        >
          {char}
        </span>
      ))}
    </>
  );
}
