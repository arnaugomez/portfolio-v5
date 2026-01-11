import { ArrowRightIcon } from "lucide-react";

export function Projects() {
  return (
    <div className="px-4 sm:px-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
        <div className="max-w-2xl">
          <a
            href="https://tiptap.dev/product/ai-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="overflow-hidden rounded-lg border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
              <img
                src="/tiptap-ai-toolkit.jpg"
                alt="Tiptap AI Toolkit - Document Tools for AI Agents"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                Tiptap AI Toolkit
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Document tools for AI agents. Build Cursor-like editors for any
                document with streaming, navigation, and editing methods.
              </p>
            </div>
          </a>
        </div>
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/arnaugomez/details/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700 hover:underline transition-colors"
          >
            <span>View more projects</span>
            <ArrowRightIcon className="size-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
