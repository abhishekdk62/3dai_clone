import React from "react";
import SpotlightCard from "../reactbits/SpotlightCard";

const StatCard = ({ value, label }) => {
  return (
    <SpotlightCard
      spotlightColor="rgba(0, 229, 255, 0.2)"
      className="
        flex-1 min-w-[230px]
        rounded-2xl
        bg-[#0e1420]              /* solid bg, not transparent */
        border border-[#202736]
        text-center
        shadow-[0_0_25px_rgba(0,0,0,0.6)]
      "
    >
      <div className="text-3xl font-extrabold text-cyan-400 tracking-tight">
        {value}
      </div>
      <div className="mt-3 text-sm text-gray-300">{label}</div>
    </SpotlightCard>
  );
};

const Stats = () => {
  return (
    <section className="flex flex-wrap items-stretch justify-between gap-6">
      <StatCard value="5K+" label="Models Shared" />
      <StatCard value="99.5%" label="Uptime" />
      <StatCard value="50K+" label="Streams" />
      <StatCard value="39.89 GB" label="Total Data" />
    </section>
  );
};

export default Stats;
