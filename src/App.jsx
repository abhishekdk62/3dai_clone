// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import AICapabilities from "./components/AICapabilities";
import Models from "./components/Models";
import Pricing from "./components/Pricing";
import UploadSection from "./components/UploadSection";
import Experiences from "./components/Experiences";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Squares from "./reactbits/DotGrid";
import Cards from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      {/* DotGrid background */}
      <div className="pointer-events-none absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-34">
            <Hero />
          </section>

          <section className="mb-34">
            <Stats />
          </section>

          <section className="mb-34">
            <Cards />
          </section>

          {/* <section className="mb-24">
            <Features />
          </section> */}

          <section className="mb-37">
            <UploadSection />
          </section>

          <section className="mb-29">
            <AICapabilities />
          </section>

          <section className="mb-24">
            <Experiences />
          </section>

          <section className="mb-24">
            <Models />
          </section>

          <section className="mb-24">
            <Pricing />
          </section>

          {/* FAQ: no extra outer margin, it already has own spacing */}
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
