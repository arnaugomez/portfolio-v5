"use client";

import { cn } from "@/utils/cn";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
// Cards spotlight
class Spotlight {
  mouse: { x: number; y: number };
  containerSize: { w: number; h: number };
  container: HTMLElement;
  cards: HTMLElement[];

  constructor(containerElement: HTMLElement) {
    this.container = containerElement;
    this.cards = Array.from(this.container.children) as HTMLElement[];
    this.mouse = { x: 0, y: 0 };
    this.containerSize = { w: 0, h: 0 };
    this.initContainer = this.initContainer.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init();
  }

  initContainer(): void {
    this.containerSize.w = this.container.offsetWidth;
    this.containerSize.h = this.container.offsetHeight;
  }

  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;
    const rect = this.container.getBoundingClientRect();
    const { w, h } = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;
    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;
      this.cards.forEach((card) => {
        const cardX =
          -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const cardY =
          -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
        card.style.setProperty("--mouse-x", `${cardX}px`);
        card.style.setProperty("--mouse-y", `${cardY}px`);
      });
    }
  }

  init(): void {
    this.initContainer();
    window.addEventListener("resize", this.initContainer);
    window.addEventListener("mousemove", this.onMouseMove);
  }
}

export function Navbar() {
  const [hasInit, setHasInit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setHasInit(true);
    }, 2500);
    if (ref.current) {
      new Spotlight(ref.current);
    }
  }, []);

  return (
    <div className="z-30 fixed w-full" ref={ref}>
      <div
        className={cn(
          "flex items-center w-fit mx-auto px-4 mt-3 py-2 rounded-full bg-slate-200/20 filter backdrop-blur-lg cursor-pointer",
          "before:absolute before:w-20 before:h-20 before:-left-10 before:-top-10 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[25px]",
          "after:absolute after:w-24 after:h-24 after:-left-12 after:-top-12 after:bg-slate-600 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[25px] overflow-hidden"
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
      <div ref={ref} className="w-fit pl-4">
        {children}
      </div>
    </div>
  );
}
