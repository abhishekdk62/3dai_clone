import React from "react";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center pointer-events-none">
      {/* glass nav container */}
      <nav
        className="
          pointer-events-auto
          flex items-center justify-between
          w-[90%] max-w-5xl
          rounded-full
          border border-white/15
          bg-white/5
          backdrop-blur-2xl
          px-6 sm:px-8 py-3
          shadow-[0_0_55px_rgba(15,23,42,0.9)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-cyan-300/60 bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-[15px] font-extrabold text-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.9)]">
            3D
          </div>
          <span className="text-sm sm:text-base font-medium tracking-tight text-white">
            DeepInspect<span className="text-cyan-300">3D</span>
          </span>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-8 text-xs sm:text-sm text-slate-100">
          <button className="hover:text-white/90 transition-colors">
            Features
          </button>
          <button className="hover:text-white/90 transition-colors">
            Pipeline
          </button>
          <button className="hover:text-white/90 transition-colors">
            Converters
          </button>
          <button className="hover:text-white/90 transition-colors">
            FAQ&apos;s
          </button>
          <button className="hover:text-white/90 transition-colors">
            Pricing
          </button>
        </div>

        {/* Right side: Login */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-full border border-white/30 px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors">
            Login
          </button>

          {/* Mobile menu icon */}
          <button className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/30 bg-black/20 text-gray-100">
            <span className="sr-only">Open menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-gray-100" />
              <span className="block h-0.5 w-4 bg-gray-100" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
