import React from "react";

const Bullet = ({ text }) => (
  <li className="flex items-center gap-4 text-sm sm:text-base text-gray-100">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1730] border border-blue-500">
      <span className="h-3 w-1.5 border-2 border-blue-400 border-t-transparent border-l-transparent rotate-45 rounded-sm" />
    </span>
    <span>{text}</span>
  </li>
);

const AICapabilities = () => {
  return (
    <section className="mt-24 flex flex-col lg:flex-row gap-12 items-stretch">
      {/* Left: text list */}
      <div className="flex-1 rounded-3xl border border-[#202736] bg-[#050814] px-10 py-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
          AI Analysis Capabilities
        </h2>
        <ul className="space-y-6">
          <Bullet text="Sub-millimeter crack detection" />
          <Bullet text="Rebar mapping and condition assessment" />
          <Bullet text="Spall depth measurement" />
          <Bullet text="Corrosion progression analysis" />
          <Bullet text="Structural integrity assessment" />
          <Bullet text="Real-time defect monitoring" />
        </ul>
      </div>

      {/* Right: AI analysis panel mock */}
      <div className="flex-1">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 shadow-[0_0_40px_rgba(56,189,248,0.6)] border border-slate-700/70">
          {/* Browser bar */}
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <div className="flex-1 ml-3 rounded-md bg-slate-900/80 px-3 py-1 text-xs text-gray-400 truncate">
              https://deepinspect3d.ai/projects/bridge-inspection/pillar-b12/ai-analysis
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column info */}
            <div className="w-full lg:w-2/5 text-sm space-y-6">
              <div className="text-cyan-400 font-semibold">A.I Analysis</div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Project Info
                </p>
                <div>
                  <p className="text-xs text-gray-400">Project ID</p>
                  <p className="font-semibold text-white">BRG-2024-156</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="font-semibold text-white">Bridge B12</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-700/60">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Inspection Status
                </p>
                <div className="rounded-md bg-amber-500/20 text-amber-200 px-3 py-1 text-xs font-medium border border-amber-500/60 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Needs Attention
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Defects Found</p>
                    <p className="mt-1 text-lg font-semibold text-white">4</p>
                  </div>
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Critical Issues</p>
                    <p className="mt-1 text-lg font-semibold text-white">2</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60">
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                  Identified Defects
                </p>
                <p className="text-xs text-gray-300">
                  Crack, spall, corrosion (sample summary)
                </p>
              </div>
            </div>

            {/* Right: vertical model */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative aspect-[3/5] w-40 sm:w-56 rounded-xl bg-black/80 border border-slate-700/80 flex items-center justify-center">
                <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-10 rounded-xl bg-blue-500" />
                <div className="absolute inset-0">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400"
                      style={{
                        left: `${10 + (i * 5) % 80}%`,
                        top: `${10 + (i * 7) % 80}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
