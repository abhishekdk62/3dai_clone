import React from "react";
import SplitText from "../reactbits/SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    // optional: remove or replace with analytics
    console.log("Hero heading animated");
  };

  return (
    <section className="flex-1">
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
          delay={60}              // ms between letters
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
    </section>
  );
};

export default Hero;
