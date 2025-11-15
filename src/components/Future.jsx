import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Rocket, Sparkles, Users, Mail, Shield, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function MonexaFutureSections() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-white overflow-hidden">
      <style>{`
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>

      {/* Section 5 - Future Vision */}
      {/* <section className="relative overflow-hidden py-20 px-6"> */}
        {/* Animated background pattern */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100" />
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400 animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: 0.4,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div> */}

        {/* <div className="max-w-7xl mx-auto relative z-10"> */}
          {/* Header */}
          {/* <div className="text-center mb-16 space-y-6">
            <div className={`inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Introducing</span>
            </div>
             */}
            {/* <h2 className={`text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              From Earth to Space
            </h2>
             */}
            {/* <div className={`text-4xl md:text-5xl font-bold text-black flex items-center justify-center gap-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              The MONA Beyond Initiative
              <Rocket className="w-12 h-12 text-cyan-500 animate-float" />
            </div> */}
            
            {/* <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-6 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              AI-Powered Clinical Decision Support
            </p>
          </div> */}

          {/* Partnership Statement */}
          {/* <div className="mb-16">
            <p className={`text-2xl text-gray-800 text-center mb-10 max-w-4xl mx-auto leading-relaxed font-medium ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
              Partnering with <span className="font-bold text-black relative">
                ISRO, NASA, ESA, JAXA & CSA
                <span className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 opacity-30 -z-10"></span>
              </span> to enable autonomous medicine for astronauts
            </p> */}
            
            {/* <div className="flex flex-wrap justify-center gap-6 items-center">
              {['ISRO', 'NASA', 'ESA', 'JAXA', 'CSA'].map((agency, idx) => (
                <div
                  key={agency}
                  className={`px-10 py-5 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:scale-110 cursor-pointer ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                > */}
                  {/* <span className={`text-3xl font-bold text-black transition-all duration-300 ${hoveredCard === idx ? 'text-cyan-500' : ''}`}>
                    {agency}
                  </span>
                  {hoveredCard === idx && (
                    <div className="absolute inset-0 shimmer-effect rounded-xl pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div> */}

          {/* Feature Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: "Zero-Gravity Medicine",
                desc: "AI diagnostics engineered for extreme space environments and autonomous operations",
                color: "cyan"
              },
              {
                icon: Zap,
                title: "Autonomous Care Systems",
                desc: "Real-time health monitoring and clinical decision support without Earth communication",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Mission-Critical Reliability",
                desc: "Supporting astronaut health and safety on long-duration Mars and lunar missions",
                color: "cyan"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 cursor-pointer ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${1.0 + idx * 0.15}s` }}
              > */}
                {/* <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 transition-colors duration-300 group-hover:text-cyan-600">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div> */}
            {/* ))}
          </div> */}

          {/* CTA Button */}
          {/* <div className={`text-center ${isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'}`}>
            <button className="group relative px-12 py-5 bg-black text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-110 inline-flex items-center gap-3 overflow-hidden animate-pulse-glow">
              <span className="relative z-10">Discover MONA Beyond</span>
              <Rocket className="w-5 h-5 relative z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </section> */}

      {/* Section 6 - Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight tracking-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Be part of the future of
              <br />
              <span className="relative inline-block">
                intelligent healthcare
                <div className="absolute bottom-2 left-0 w-full h-4 bg-cyan-400 opacity-30 -z-10 transition-all duration-700 hover:w-0" />
              </span>
            </h2>

            <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              Join healthcare institutions and research teams working to improve clinical workflows with AI-driven support.

            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            <Link to="/contact" className="group relative px-10 py-5 bg-black text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 inline-flex items-center gap-3 overflow-hidden">
              <Users className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:scale-110" />
              <span className="relative z-10">Join Our Pilot Program</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
            {/* <Link to="/contact">
            <button className="group px-12 py-5 bg-white border-2 border-black text-black rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white inline-flex items-center gap-3">
              <Mail className="w-5 h-5 transition-all duration-500 group-hover:rotate-12" />
              <span>Contact Our Team</span>
            </button>
            </Link> */}
          </div>

          {/* Value Propositions for Stakeholders */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-slideInLeft delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                💼 For Healthcare Leaders

              </h3>
              <ul className="space-y-3">
                {[
                  "Improve reporting consistency",
                  "Reduce manual workload",
                  "Accelerate clinical workflows",
                  "Support decision-making with transparent AI outputs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 opacity-0 animate-fadeInUp" style={{ animationDelay: `${0.4 + idx * 0.1}s`, animationFillMode: 'forwards' }}>
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-125" />
                    <span className="transition-all duration-300 hover:translate-x-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-slideInRight delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                🎓 For Research Institutions
              </h3>
              <ul className="space-y-3">
                {[
                  "Collaborative development opportunities",
                  "Access to our clinical AI infrastructure",
                  "Multi-center research support",
                  "Co-development and validation partnerships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 opacity-0 animate-fadeInUp" style={{ animationDelay: `${0.4 + idx * 0.1}s`, animationFillMode: 'forwards' }}>
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-125" />
                    <span className="transition-all duration-300 hover:translate-x-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`pt-12 border-t-2 border-gray-200 ${isVisible ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {[
                { icon: Shield, text: "Built with security" },
                { icon: CheckCircle, text: "clinical safety in mind" },
                { icon: Shield, text: "privacy" },
                { icon: Globe, text: "Global Standards" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-600 transition-all duration-500 hover:scale-110 hover:text-cyan-600 cursor-pointer group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:shadow-lg">
                    <item.icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="font-medium transition-all duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}