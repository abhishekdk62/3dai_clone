import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#181e2b] pt-10 pb-6 text-sm text-gray-300">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between gap-10">
        {/* Brand + description */}
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold text-white mb-3">
            DeepInspect 3D
          </h3>
          <p className="text-gray-400 text-sm">
            Advanced AI-powered structural analysis for engineering
            professionals.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>API Reference</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#181e2b] pt-4 text-xs text-gray-400">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span>© 2025 DeepInspect 3D</span>
          <span className="flex items-center gap-1">
            <span className="text-pink-500">❤</span>
            Handcrafted by A.I researchers.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-gray-200">Privacy Policy</button>
          <button className="hover:text-gray-200">Terms</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
