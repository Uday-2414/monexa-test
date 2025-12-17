import Carousel from "../reusable/Carousel.jsx";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Radiology from "../assets/radiology.jpg";
import Monax from "../assets/x.jpg";
import Monacosmo from "../assets/cosmo.jpg";
import {
  Sparkles,
  Scan,
  Brain,
  Rocket,
  Activity,
  Shield,
  Database,
} from "lucide-react";

const engines = [
  {
    id: "radiology",
    name: "MONA Radiology",
    shortTitle: "MONA RADIOLOGY",
    icon: Scan,
    gradientFrom: "#06b6d4",
    gradientTo: "#2563eb",
    description:
      "Multi-modality imaging AI for X-rays, CT, MRI, and ultrasound analysis.",
    benefits: [
      "95% accuracy in anomaly detection",
      "Reduces radiologist workload by 40%",
      "Real-time analysis in under 30 seconds",
    ],
    useCase:
      "A hospital emergency department uses MONA Radiology to instantly flag critical findings in chest X-rays, reducing time-to-treatment for pneumothorax cases by 70%.",
    specialization: "Computer Vision & Deep Learning",
  },
  {
    id: "mona-x",
    name: "MONA-X",
    shortTitle: "MONA-X",
    icon: Brain,
    gradientFrom: "#3b82f6",
    gradientTo: "#7c3aed",
    description:
      "A clinical intelligence system integrating multimodal data for real-time decision support across departments.",
    benefits: [
      "Cross-specialty AI insights",
      "Real-time multimodal decision support",
      "Early detection of critical conditions",
      "Unified view across radiology, pathology, cardiology and ICU",
    ],
    useCase:
      "In a multispecialty hospital, MONA-X continuously analyzes imaging, lab results, ECG data and patient vitals, alerting clinicians about sepsis risk 4 hours earlier than traditional systems.",
    specialization: "Multimodal Clinical Intelligence",
  },
  {
    id: "mona-cosmo",
    name: "MONA-COSMO",
    shortTitle: "MONA-COSMO",
    icon: Rocket,
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
    description:
      "Autonomous clinical intelligence built for space missions and communication-denied environments.",
    benefits: [
      "Offline autonomous medical analysis",
      "Support for Mars, lunar and deep-space missions",
      "Adaptive diagnostics without ground communication",
      "Real-time triage and emergency support",
    ],
    useCase:
      "During a Mars research mission, MONA-COSMO autonomously analyzes astronaut vitals and ultrasound scans, guiding crew members through emergency procedures despite a 20-minute communication delay with Earth.",
    specialization: "Autonomous & Space Medicine AI",
  },
];



function EngineSection({ engine, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      key={engine.id}
      className={`py-20 px-6 ${
        isEven
          ? "bg-white"
          : "bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16 ${
          !isEven ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Left/Right visual */}
        <div className="flex-1 flex items-center justify-center">
          <img src={engine.id === "radiology" ? Radiology : engine.id === "mona-x" ? Monax : Monacosmo} alt={engine.name} className="rounded-xl shadow-2xl h-90 w-80 sm:h-100 sm:w-90 lg:h-140 lg:w-110" />
        </div>

        {/* Right/Left text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-primary font-extrabold text-black tracking-wide mb-4">
            {engine.shortTitle}
          </h2>

          <p className="text-sm uppercase tracking-[0.2em] text-cyan-700 mb-3">
            {engine.specialization}
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {engine.description}
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
            <ul className="space-y-2">
              {engine.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex w-4 h-4 rounded-full bg-cyan-500" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5 mb-6">
            <p className="text-sm font-semibold text-cyan-700 mb-1">
              Real-world use case
            </p>
            <p className="text-gray-700 text-sm md:text-base italic">
              {engine.useCase}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function MonaProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 5s ease infinite;
        }

         @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @media (max-width: 420px) {
          .product-hero-text {
            margin-top: 7rem !important;
            padding-bottom: 0 !important;
            width: 90% !important;
          }

          .product-hero-carousel {
            height: 520px !important;
            width: 100% !important;
          }
          .product-hero-carousel > div {
            transform: scale(1.265) !important;
          }
          .product-hero-text1 + section {
            padding-top: 1.25rem !important;
          }
        }
      `}</style>

      

      {/* Hero */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center min-h-screen relative z-10 w-full product-hero-text1">
        <section
          className="relative md:pb-10 lg:ml-45 product-hero-text"
          style={{ width: "40%" }}
        > 
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 animate-fadeInScale">
              <span className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Our Engines
              </span>
            </div>

            <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight animate-fadeInUp">
              MONA <span className="gradient-text">Suite</span>
            </h1>

            <p className=" text-sm sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fadeInUp">
              A unified AI-powered clinical decision support platform with
              specialized engines for every medical discipline.
            </p>
          </div>
        </section>

        <div
          className="flex justify-center items-center product-hero-carousel"
          style={{ width: "60%", height: "500px", position: "relative" }}
        >
          <div style={{ transform: "scale(1.6)" }}>
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={2000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
      

      {/* New alternating engine sections */}
      {engines.map((engine, index) => (
        <EngineSection key={engine.id} engine={engine} index={index} />
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to transform your clinical workflow?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a demo to see the MONA Suite in action.
          </p>
          <Link to="/contact">
            <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3">
              Request a Demo
              <span className="text-xl">→</span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
