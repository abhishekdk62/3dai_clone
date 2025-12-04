import React from "react";

const PricingCard = ({ title, price, subPrice, badge, features, highlight }) => {
  return (
    <div
      className={`flex-1 min-w-[260px] rounded-3xl border px-8 py-10 flex flex-col gap-6 ${
        highlight
          ? "bg-[#050f24] border-sky-500 shadow-[0_0_35px_rgba(56,189,248,0.6)] scale-[1.02]"
          : "bg-[#050814] border-[#202736]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {badge && (
          <span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {price}
        <span className="text-lg font-semibold text-gray-300"> / {subPrice}</span>
        <span className="text-sm text-gray-400"> /mo</span>
      </div>

      <ul className="space-y-3 text-sm text-gray-200">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-sky-400">
              {f.warning ? "!" : "✓"}
            </span>
            <span className={f.warning ? "text-amber-300" : ""}>{f.label}</span>
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full rounded-md bg-[#1f3f8f] hover:bg-[#2648a6] py-3 text-sm font-semibold text-white transition">
        {title === "Enterprise" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="mt-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Simple Pricing
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          Choose the perfect plan for your needs.
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <PricingCard
          title="Starter"
          price="$129"
          subPrice="11,000 inr"
          features={[
            { label: "Up to 40 models" },
            { label: "Email support" },
            { label: "50GB storage" },
            { label: "5 Projects" },
            { label: "Low Textured Models", warning: true },
            { label: "No A.I analysis", warning: true },
          ]}
        />

        <PricingCard
          title="Professional"
          price="$229"
          subPrice="19,000 inr"
          badge="Popular"
          highlight
          features={[
            { label: "Up to 100 models" },
            { label: "Priority support" },
            { label: "100GB storage" },
            { label: "20 Projects" },
            { label: "High Textured Models" },
            { label: "Advanced A.I analysis" },
          ]}
        />

        <PricingCard
          title="Enterprise"
          price="Custom"
          subPrice=""
          features={[
            { label: "Unlimited models" },
            { label: "Custom AI training" },
            { label: "24/7 support" },
            { label: "Unlimited storage" },
            { label: "API access" },
            { label: "Custom integration" },
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;
