import React from "react";
import CardSwap, { Card } from "../reactbits/CardSwap";

const Cards = () => {
  return (
    <section className="mt-24 relative">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left: heading & copy */}
        <div className="flex-1 max-w-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
            DeepInspect3D Features
          </p>
          <h1 className="text-3xl sm:text-6xl font-extrabold text-white">
          Powerful Features

          </h1>
          <p className="mt-3 text-sm sm:text-xl text-gray-300">
          Experience the next generation of 3D model analysis.

</p>
        </div>

        {/* Right: stacked cards */}
        <div className="flex-1 relative">
          <div style={{ height: "400px", position: "relative" }}>
            <CardSwap
              width={420}
              height={280}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {/* Multi Format Support */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-slate-600/70 bg-gradient-to-br from-slate-900/95 via-slate-900 to-slate-950 px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_35px_rgba(15,23,42,0.9)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                      ⬛ Formats
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Multi Format Support
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Upload OBJ, LAS, PLY, and other formats with instant,
                      browser‑based viewing for reviewers and clients.
                    </p>
                  </div>
                </div>
              </Card>

              {/* VR Support */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-slate-600/70 bg-gradient-to-br from-[#020617] via-slate-900 to-slate-950 px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_40px_rgba(56,189,248,0.55)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                      🎧 Immersion
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      VR Support
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Move from browser to Quest and other WebXR headsets to
                      inspect structures at true scale.
                    </p>
                  </div>
                </div>
              </Card>

              {/* AI‑Powered Analysis */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-[#111827] px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_40px_rgba(245,158,11,0.45)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                      🧠 AI Analysis
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      AI‑Powered Detection
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Automatically detect cracks, rebars, spalls, and other
                      anomalies from dense point clouds.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Instant Sharing */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_35px_rgba(16,185,129,0.55)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
                      🔗 Sharing
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Instant, Secure Links
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Share models and analysis views with permissions, not
                      bulky file transfers.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Advanced Analytics */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-sky-500/40 bg-gradient-to-br from-slate-900 via-[#020617] to-slate-950 px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_40px_rgba(56,189,248,0.55)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
                      📊 Analytics
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Advanced Analytics
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Track measurements, severity, and progression across
                      inspections and projects.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Collaboration */}
              <Card>
                <div className="h-full w-full rounded-[18px] border border-indigo-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-[#1e1b4b] px-7 py-7 text-left flex flex-col justify-between shadow-[0_0_40px_rgba(99,102,241,0.55)]">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
                      👥 Collaboration
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Team &amp; Client Spaces
                    </h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      Comment, annotate, and version models so engineers and
                      stakeholders stay aligned.
                    </p>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
