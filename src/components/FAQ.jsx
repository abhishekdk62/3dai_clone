import React, { useState } from "react";

const faqs = [
  {
    q: "How does VR visualization work?",
    a: "DeepInspect3D streams your 3D models into a WebXR‑ready viewer. You can inspect scenes directly in the browser or switch to a compatible VR headset for an immersive view.",
  },
  {
    q: "What devices are supported?",
    a: "Modern desktop browsers, laptops, and WebXR‑enabled headsets such as Meta Quest are supported. For the best experience, use the latest versions of Chrome or Edge.",
  },
  {
    q: "Can I share my visualizations?",
    a: "Yes. You can generate secure share links for models, inspections, and views so teammates and clients can explore them without installing extra software.",
  },
  {
    q: "What is the single model size limit?",
    a: "Typical uploads support models up to a few gigabytes depending on your plan. Very large assets are automatically optimized for smooth viewing.",
  },
  {
    q: "Is my data protected?",
    a: "All traffic is encrypted over HTTPS and models are stored in secure, access‑controlled storage. Role‑based permissions keep projects restricted to your team.",
  },
  {
    q: "Free tier?",
    a: "A limited trial lets you upload a small number of models and run sample analyses before choosing a paid plan.",
  },
];

const FAQItem = ({ question, answer, open, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className={`w-full text-left rounded-2xl border px-6 sm:px-10 py-4 sm:py-5 transition-colors ${
      open ? "bg-[#0c1220] border-[#2a3346]" : "bg-[#050814] border-[#181e2b]"
    }`}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="text-gray-100 text-sm sm:text-base">
        {question}
      </span>
      <span
        className={`text-cyan-400 text-xl font-semibold transform transition-transform ${
          open ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </div>

    <div
      className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-300 ease-out ${
        open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
      }`}
    >
      <p className="text-xs sm:text-sm text-gray-300 pr-4">
        {answer}
      </p>
    </div>
  </button>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(2); // default open 3rd

  return (
    <section className="mt-28">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((item, idx) => (
          <FAQItem
            key={item.q}
            question={item.q}
            answer={item.a}
            open={openIndex === idx}
            onToggle={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          />
        ))}

        <button className="mt-4 w-full rounded-2xl bg-[#050814] border border-[#181e2b] py-4 text-sm sm:text-base font-semibold text-gray-100 hover:bg-[#0b1020] transition">
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default FAQ;
