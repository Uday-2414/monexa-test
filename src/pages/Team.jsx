import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Linkedin,
  Award,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import dp from "../assets/dp.jpg";
import ceo from "../assets/ceo.jpg";
import cto from "../assets/lead-1.jpg";

export default function TeamPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const founders = [
    {
      name: "Vamsi Krishna K",
      role: "Founder &  CEO",
      image: ceo,
    },
    {
      name: "Uday Kumar V",
      role: "Lead Full-Stack Developer",
      image: dp,
    },
    {
      name: "Amar Saraf",
      role: "Clinical Lead ",
      image: cto,
    },
    {
      name: "Dr. Joshuva Arokia Dhanaraj",
      role: "Technical Advisor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  const advisors = [
    { name: "Mayo Clinic", logo: "MC", type: "Medical Partner" },
    { name: "Cleveland Clinic", logo: "CC", type: "Research Collaborator" },
    { name: "Stanford Health", logo: "SH", type: "Advisory Board" },
    { name: "MIT CSAIL", logo: "MIT", type: "Research Partner" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-First",
      description:
        "Every algorithm we build prioritizes patient safety and clinical outcomes above all else.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Explainable AI",
      description:
        "Transparency in every decision. Our models provide clear, interpretable insights clinicians can trust.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Evidence-Based",
      description:
        "Validated through rigorous clinical trials and peer-reviewed research across diverse populations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
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
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-rotateIn {
          animation: rotateIn 0.7s ease-out forwards;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 5s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .image-reveal {
          position: relative;
          overflow: hidden;
        }
        
        .image-reveal::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.7s;
          z-index: 10;
        }
        
        .image-reveal:hover::before {
          left: 100%;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className="inline-block mb-8 animate-fadeInScale"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Sparkles className="w-4 h-4" />
              Meet the Team
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Building the Future of
            <br />
            <span className="gradient-text">Healthcare Intelligence</span>
          </h1>

          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-2"
            style={{ fontFamily: "Inter, sans-serif", animationDelay: "0.2s" }}
          >
            A team of Innovators, Doctors, and AI Engineers committed to
            redefining clinical care through trusted, explainable, and validated
            artificial intelligence.
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-3 animate-fadeInScale stagger-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            id="vision-card"
            data-animate
            className={`bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 relative overflow-hidden ${
              isVisible["vision-card"] ? "animate-fadeInScale" : "opacity-0"
            }`}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-50" />

            <div className="relative flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-rotateIn">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div
                className={
                  isVisible["vision-card"]
                    ? "animate-slideInRight"
                    : "opacity-0"
                }
              >
                <h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Our Vision
                </h2>
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We envision a healthcare ecosystem where every clinician is
                  supported by intelligent, reliable, and deeply interpretable
                  AI. MONA is our commitment to making advanced medical
                  intelligence accessible to all reshaping how diagnostic
                  insights are delivered, understood, and acted upon. Our
                  mission goes beyond building algorithms; we're creating a
                  future where AI and clinical expertise work seamlessly
                  together to drive faster decisions, reduce variability, and
                  elevate patient outcomes on a global scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            id="values-title"
            data-animate
            className={`text-center mb-12 ${
              isVisible["values-title"] ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Principles
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                id={`value-${idx}`}
                data-animate
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover relative overflow-hidden group ${
                  isVisible[`value-${idx}`] ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            id="founders-title"
            data-animate
            className={`text-center mb-16 ${
              isVisible["founders-title"] ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Leadership Team
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Decades of combined expertise in AI, medicine, and healthcare
              technology
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                id={`founder-${idx}`}
                data-animate
                className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ${
                  isVisible[`founder-${idx}`]
                    ? "animate-fadeInScale"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative overflow-hidden image-reveal">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </div>

                <div className="p-8 relative">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 relative z-10"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="text-blue-600 font-semibold mb-4 relative z-10"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {founder.role}
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed mb-6 relative z-10"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {founder.bio}
                  </p>
                  <a
                    href={founder.linkedin}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group/link relative z-10"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span className="relative">
                      Connect on LinkedIn
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Partners */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            id="advisors-title"
            data-animate
            className={`text-center mb-16 ${
              isVisible["advisors-title"] ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Trusted Partners
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Collaborating with world-leading medical institutions and research
              centers
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {advisors.map((advisor, idx) => (
              <div
                key={idx}
                id={`advisor-${idx}`}
                data-animate
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group relative overflow-hidden ${
                  isVisible[`advisor-${idx}`] ? "animate-rotateIn" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Animated Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                <div className="relative">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {advisor.logo}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {advisor.name}
                  </h3>
                  <p
                    className="text-sm text-blue-600 font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {advisor.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div
          id="cta-section"
          data-animate
          className={`max-w-4xl mx-auto rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden ${
            isVisible["cta-section"] ? "animate-fadeInScale" : "opacity-0"
          }`}
        >
          {/* Animated Gradient Background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-size-200 animate-gradient"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-shift 5s ease infinite",
            }}
          />

          {/* Floating Particles */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-float" />
          <div
            className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-10 left-1/4 w-5 h-5 bg-white/25 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative z-10">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Join Our Mission
            </h2>
            <p
              className="text-xl mb-8 opacity-90"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We're always looking for talented individuals passionate about
              transforming healthcare through AI
            </p>
            <Link to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Open Positions →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
}
