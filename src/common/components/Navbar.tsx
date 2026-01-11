"use client";

import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [hasInit, setHasInit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setHasInit(true);
    }, 2500);
  }, []);

  return (
    <div className="z-30 fixed w-full" ref={ref}>
      <div
        className={cn(
          "flex items-center w-fit mx-auto px-4 mt-3 py-2 rounded-full transition-colors border border-slate-200 bg-slate-200/20 hover:bg-slate-400/20 filter backdrop-blur-lg cursor-pointer",
        )}
      >
        <div className="size-4 rounded-full bg-slate-400"></div>
        <HideContent showContent={hasInit}>
          <h1 className="text-md leading-tight whitespace-nowrap text-slate-700">
            Arnau Gómez
          </h1>
        </HideContent>
      </div>
    </div>
  );
}

interface HideContentProps extends PropsWithChildren {
  showContent: boolean;
}

export function HideContent({ showContent, children }: HideContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [children]);

  return (
    <div
      className="overflow-hidden transition-all ease-out duration-1000"
      style={{ width: showContent ? `${width}px` : "0" }}
    >
      <div ref={ref} className="w-fit pl-3">
        {children}
      </div>
    </div>
  );
}
