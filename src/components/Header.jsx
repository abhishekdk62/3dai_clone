import React from "react";

const Header = () => {
  return (
    <header className="border-b border-slate-800/80 bg-[#050816]/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-cyan-500 flex items-center justify-center text-lg font-extrabold text-slate-900 shadow-lg shadow-cyan-500/40">
            3D
          </div>
          <span className="text-xl font-semibold tracking-tight">
            DeepInspect<span className="text-cyan-400">3D</span>
          </span>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <button className="hover:text-white transition-colors">
            Features
          </button>
          <button className="hover:text-white transition-colors">
            Pipeline
          </button>
          <button className="hover:text-white transition-colors">
            Converters
          </button>
          <button className="hover:text-white transition-colors">
            FAQ&apos;s
          </button>
          <button className="hover:text-white transition-colors">
            Pricing
          </button>

          <button className="ml-4 rounded-full border border-slate-600 px-5 py-1.5 text-sm font-semibold text-gray-100 hover:bg-white hover:text-slate-900 transition-colors shadow-sm">
            Login
          </button>
        </div>

        {/* Mobile menu icon */}
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-700 text-gray-300">
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-gray-300" />
            <span className="block h-0.5 w-4 bg-gray-300" />
            <span className="block h-0.5 w-4 bg-gray-300" />
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
