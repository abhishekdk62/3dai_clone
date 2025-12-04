import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex-1 min-w-[260px] rounded-2xl bg-[#0e1420] border border-[#202736] px-8 py-8 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <div className="text-3xl mb-4 text-cyan-400">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Powerful Features
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          Experience the next generation of 3D model analysis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <FeatureCard
          icon="⬛"
          title="Multi Format Support"
          description="Support for OBJ, LAS, PLY, and more formats with instant browser-based viewing."
        />
        <FeatureCard
          icon="🎧"
          title="VR Support"
          description="Experience models in immersive virtual reality with Quest and other VR headsets."
        />
        <FeatureCard
          icon="🧠"
          title="AI-Powered Analysis"
          description="Advanced detection of cracks, rebars, spalls, and structural anomalies."
        />
        <FeatureCard
          icon="🔗"
          title="Instant Sharing"
          description="Generate secure links for easy model sharing and collaboration."
        />
        <FeatureCard
          icon="📊"
          title="Advanced Analytics"
          description="Detailed reports with measurements, severity levels, and progression tracking."
        />
        <FeatureCard
          icon="👥"
          title="Team/Client Collaboration"
          description="Real-time collaboration with comments, annotations, and version control."
        />
      </div>
    </section>
  );
};

export default Features;
