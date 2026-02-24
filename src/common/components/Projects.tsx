import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <div className="px-4 sm:px-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <a
            href="https://tiptap.dev/product/ai-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="overflow-hidden rounded-lg border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-lg aspect-video relative">
              <Image
                src="/tiptap-ai-toolkit.jpg"
                alt="Tiptap AI Toolkit - Document Tools for AI Agents"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                Tiptap AI Toolkit
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Document tools for AI agents. Build Cursor-like editors for any
                rich text document, with user review and streaming built-in.
              </p>
            </div>
          </a>
          <a
            href="https://tiptap.dev/docs/content-ai/capabilities/ai-toolkit/advanced-guides/compare-documents"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="overflow-hidden rounded-lg border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-lg aspect-video relative">
              <Image
                src="/smart-diff.jpg"
                alt="Smart Diff - Intelligent diff algorithm for rich text content"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                Smart Diff
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                A smart algorithm for comparing rich text documents. It
                intelligently adapts to lists, tables and any structured
                content.
              </p>
            </div>
          </a>
        </div>
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/arnaugomez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700 hover:underline transition-colors"
          >
            <span>Other projects & work experience</span>
            <ArrowRightIcon className="size-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
