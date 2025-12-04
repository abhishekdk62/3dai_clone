import React, { useEffect, useState } from "react";

const slides = [
  {
    url: "https://app.d3d.ai/models/view/aa2-343c-12df",
    title: "View & Analyse",
    subtitle: "View in browser or VR and run built‑in AI checks on every scan.",
    bullets: [
      "Navigate large models directly in the browser.",
      "Switch to VR for immersive under‑bridge inspection.",
      "Use AI panels to review defects alongside the 3D view.",
    ],
    gradient:
      "bg-gradient-to-b from-sky-200 via-sky-300/40 to-slate-900", // blue
  },
  {
    url: "https://app.d3d.ai/models/view/bridge-measure-45",
    title: "Measure & Annotate",
    subtitle: "Capture lengths, clearances, and notes in context.",
    bullets: [
      "Drop measurement lines along beams, decks, and cables.",
      "Attach annotations with screenshots and comments.",
      "Export annotated views for reports and approvals.",
    ],
    gradient:
      "bg-gradient-to-b from-amber-200 via-amber-300/40 to-slate-900", // light yellow
  },
  {
    url: "https://app.d3d.ai/models/view/tunnel-collab-09",
    title: "Collaborate in Real Time",
    subtitle: "Share live sessions with project teams and clients.",
    bullets: [
      "Invite collaborators into the same 3D session.",
      "Track who added which note and when.",
      "Keep all discussion anchored to the actual geometry.",
    ],
    gradient:
      "bg-gradient-to-b from-orange-200 via-orange-300/40 to-slate-900", // light orange
  },
];

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  const active = slides[activeIndex];

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white">
        Featured Experiences
      </h2>

      {/* URL bar */}
      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-[#050814] border border-[#1f2933] px-5 py-2 text-xs sm:text-sm text-gray-200 shadow-[0_0_25px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
          <span
            key={active.url}
            className="text-gray-400 transition-opacity duration-500 ease-out"
          >
            {active.url}
          </span>
        </div>
      </div>

      {/* Main frame */}
      <div className="mt-8 rounded-[30px] bg-[#050814] border border-[#1f2933] shadow-[0_0_45px_rgba(56,189,248,0.5)] overflow-hidden">
        <div className={`relative aspect-video ${active.gradient}`}>
          {/* Left info panel (slide content) */}
          <div className="absolute left-0 top-0 h-full w-1/3 bg-white/95">
            <div className="h-12 border-b border-slate-200 flex items-center px-4 text-xs font-semibold text-slate-700">
              3D
            </div>

            <div
              key={activeIndex}
              className="h-[calc(100%-3rem)] px-5 py-5 flex flex-col gap-3 transition-opacity duration-500 ease-out"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-500">
                Experience
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {active.subtitle}
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Scene controls • AI panels • VR</span>
                <button className="rounded-full border border-slate-300 px-3 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-100">
                  Open demo
                </button>
              </div>
            </div>
          </div>

          {/* Right: 3D bridge mock */}
          <div className="absolute inset-y-0 left-[33%] right-0 bg-[radial-gradient(circle_at_top,#bae6fd,transparent_55%),radial-gradient(circle_at_bottom,#0f172a,transparent_55%)]" />

          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            aria-label="Previous experience"
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white/80 hover:bg-black/40 hover:border-white/70 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Next experience"
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white/80 hover:bg-black/40 hover:border-white/70 transition-colors"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-cyan-400 w-5"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
