import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
              L
            </div>
            <span className="font-bold text-xl tracking-tight">LEXA</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-indigo-400 transition-colors">Playground</Link>
            <Link href="https://github.com/rainel-projects/open-source-lexa" className="hover:text-indigo-400 transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">Docs</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            The Adaptive Code Refactor Engine
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Lexa parses your code using Tree-Sitter, applies deterministic refactoring rules, and clearly explains every change. No hallucinations, just structural precision.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition-all shadow-lg shadow-indigo-500/20">
              Start Refactoring
            </button>
            <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md font-medium border border-slate-700 transition-all">
              View Rules
            </button>
          </div>
        </div>

        {/* Editor Placeholder Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50 shadow-2xl">
          <div className="flex flex-col border-r border-slate-800">
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-500 flex justify-between items-center">
              <span>INPUT (JavaScript)</span>
              <span className="text-emerald-500">● Live</span>
            </div>
            <div className="flex-1 p-4 font-mono text-sm text-slate-300 opacity-70">
              // Paste your messy code here...
            </div>
          </div>
          <div className="flex flex-col bg-slate-900/30">
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-500">
              <span>OUTPUT (Refactored)</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-slate-600 text-sm">
              <div className="text-center">
                <p>Waiting for input...</p>
                <p className="text-xs mt-2 opacity-50">WASM Engine: Not Connected</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
