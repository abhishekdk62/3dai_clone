import React from "react";
import SplitText from "../reactbits/SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Hero heading animated");
  };

  return (
    <section className="flex flex-col lg:flex-row items-center gap-10">
      {/* Left: text */}
      <div className="flex-1">
        {/* VR Ready pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/40 px-4 py-1 text-xs font-medium text-indigo-200">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1a1635] border border-indigo-400/60">
            <span className="h-1.5 w-2 rounded-sm border-2 border-indigo-300 border-t-transparent border-b-transparent border-l-transparent rotate-90" />
          </span>
          <span>VR Ready</span>
        </div>

        {/* Main heading with SplitText on first line */}
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <SplitText
            text="Analyse, Inspect & Share"
            className="block"
            delay={60}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <span className="block mt-1 text-cyan-400">3D Models</span>
        </h1>

        {/* Sub text */}
        <p className="mt-6 max-w-2xl text-sm sm:text-base text-gray-300">
          Upload 3D Models and instantly view, share and analyze them with our
          AI‑powered platform.
          <br className="hidden sm:block" />
          Supports VR and AR for immersive inspection experience.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button className="rounded-md bg-[#1f8fff] hover:bg-[#40a4ff] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition">
            Start Free Trial
          </button>
          <button className="rounded-md bg-[#151821] px-8 py-3 text-sm font-semibold text-gray-100 border border-[#3a3f4f] hover:bg-[#1d212f] transition">
            Watch Demo
          </button>
        </div>

        {/* Note */}
        <p className="mt-4 flex items-center gap-2 text-xs text-gray-400">
          <span className="h-4 w-4 rounded-full border border-gray-500 flex items-center justify-center">
            <span className="h-1 w-2 rounded-sm bg-cyan-400" />
          </span>
          No credit card required*
        </p>
      </div>

      {/* Right: model viewer mock */}
      <div className="flex-1 w-full">
        <div className="relative rounded-3xl bg-[#050814] border border-[#1f2933] shadow-[0_0_45px_rgba(56,189,248,0.5)] overflow-hidden">
          {/* browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111827] border-b border-[#1f2937] text-xs text-gray-300">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <div className="ml-3 flex-1 rounded-md bg-[#020617] px-3 py-1 truncate">
              https://deepinspect3d.ai/projects/bridge-inspection/pillar-b12
            </div>
          </div>

          <div className="flex">
            {/* left stats panel */}
            <div className="w-1/3 bg-[#0b101b] px-4 py-4 text-xs text-gray-200 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Height
                </p>
                <p className="font-semibold">4.2m</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Width
                </p>
                <p className="font-semibold">0.8m</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Depth
                </p>
                <p className="font-semibold">0.5m</p>
              </div>

              <div className="pt-3 border-t border-slate-700/70 space-y-2">
                <p className="text-[11px] font-semibold flex items-center gap-1">
                  <span className="text-blue-400">▲</span> Inspection Status
                </p>
                <span className="inline-flex items-center rounded-md bg-amber-500/20 text-amber-200 px-3 py-1 text-[11px] font-medium border border-amber-500/60">
                  Needs Attention
                </span>

                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Defects Found</p>
                    <p className="mt-1 text-lg font-semibold">4</p>
                  </div>
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Critical Issues</p>
                    <p className="mt-1 text-lg font-semibold">2</p>
                  </div>
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Structural Health</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-400">
                      85%
                    </p>
                  </div>
                  <div className="rounded-md bg-slate-900/80 px-3 py-2 border border-slate-700/80">
                    <p className="text-gray-400">Priority</p>
                    <p className="mt-1 text-lg font-semibold text-rose-400">
                      High
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right 3D model mock */}
            <div className="relative flex-1 bg-[#020617] flex items-center justify-center">
              <div className="relative aspect-[3/5] w-40 sm:w-52 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <div className="grid grid-cols-6 grid-rows-10 gap-0.5 opacity-60">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-sm bg-slate-600"
                    />
                  ))}
                </div>
                <div className="absolute top-6 right-6 grid grid-cols-2 gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-4 w-4 rounded-sm bg-rose-500"
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

export default Hero;
