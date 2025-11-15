import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import { Scan, FlaskConical, Heart, Activity, Dna, ArrowRight, Zap, Shield, Brain, Database, ChevronRight } from 'lucide-react';

export default function MonaProductsPage() {
  const [activeEngine, setActiveEngine] = useState(null);
  const [flowAnimation, setFlowAnimation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFlowAnimation(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const engines = [
    {
      id: 'radiology',
      name: 'MONA Radiology',
      icon: Scan,
      color: 'from-cyan-400 to-blue-600',
      description: 'Multi-modality imaging AI for X-rays, CT, MRI, and ultrasound analysis',
      benefits: ['95% accuracy in anomaly detection', 'Reduces radiologist workload by 40%', 'Real-time analysis in under 30 seconds'],
      useCase: 'A hospital emergency department uses MONA Radiology to instantly flag critical findings in chest X-rays, reducing time-to-treatment for pneumothorax cases by 70%.',
      specialization: 'Computer Vision & Deep Learning'
    },
    {
      id: 'pathology',
      name: 'MONA Pathology',
      icon: FlaskConical,
      color: 'from-purple-400 to-pink-600',
      description: 'Intelligent laboratory test analysis and digital pathology interpretation',
      benefits: ['Automated blood work analysis', 'Tissue slide pattern recognition', 'Predictive biomarker identification'],
      useCase: 'A pathology lab processes 500+ tissue samples daily. MONA Pathology identifies cancerous cells with 98% sensitivity, helping pathologists prioritize critical cases.',
      specialization: 'Pattern Recognition & ML'
    },
    {
      id: 'cardiology',
      name: 'MONA Cardiology',
      icon: Heart,
      color: 'from-red-400 to-rose-600',
      description: 'Advanced cardiac diagnostics for ECG, echocardiography, and heart disease prediction',
      benefits: ['Early detection of arrhythmias', 'Heart failure risk assessment', 'Post-operative monitoring'],
      useCase: 'A cardiac care unit monitors 50 high-risk patients. MONA Cardiology detects atrial fibrillation patterns 2 hours before clinical symptoms, enabling preventive intervention.',
      specialization: 'Time-Series Analysis & AI'
    },
    {
      id: 'criticalcare',
      name: 'MONA CriticalCare',
      icon: Activity,
      color: 'from-orange-400 to-red-600',
      description: 'Real-time emergency and ICU AI guidance for critical decision-making',
      benefits: ['Sepsis prediction 6 hours in advance', 'Continuous vital sign monitoring', 'Treatment recommendation engine'],
      useCase: 'An ICU with 20 beds uses MONA CriticalCare to monitor patient deterioration. The system alerts staff to early sepsis indicators, reducing mortality by 30%.',
      specialization: 'Predictive Analytics & NLP'
    },
    {
      id: 'rare',
      name: 'MONA Rare',
      icon: Dna,
      color: 'from-green-400 to-emerald-600',
      description: 'Intelligent detection and diagnosis support for rare diseases and complex cases',
      benefits: ['Pattern matching across 10,000+ rare conditions', 'Genetic marker analysis', 'Global case database integration'],
      useCase: 'A patient with undiagnosed symptoms for 5 years is analyzed by MONA Rare, which identifies a rare metabolic disorder by correlating genetic data with clinical presentation.',
      specialization: 'Knowledge Graphs & AI Reasoning'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes dataFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Brain className="w-4 h-4" />
            <span>Products</span>
          </div>
          
          <h1 className={`text-4xl md:text-7xl font-bold text-black mb-6 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            The MONA Suite
          </h1>
          
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            A unified AI-powered clinical decision support platform with specialized engines for every medical discipline
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-black text-center mb-12 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            Intelligent Architecture
          </h2>

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-2 border-gray-200">
            {/* Main vertical pipeline */}
            <div className="relative max-w-4xl mx-auto">
              
              {/* Hospital Data Input - Top */}
              <div className="flex justify-center mb-8">
                <div className={`${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-lg border-2 border-gray-300 hover:scale-105 transition-all duration-300 w-64">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-black">Hospital Data</h3>
                    </div>
                    <p className="text-xs text-gray-600">EHR, Imaging, Labs, Vitals</p>
                  </div>
                </div>
              </div>

              {/* Vertical Line with flowing animation */}
              <div className="flex justify-center mb-8">
                <div className="relative w-1 h-16 bg-gradient-to-b from-gray-400 to-cyan-500 rounded-full overflow-hidden">
                  <div className="absolute w-full h-8 bg-white opacity-60" style={{
                    animation: 'dataFlow 2s linear infinite',
                    transform: 'rotate(90deg)'
                  }} />
                </div>
              </div>

              {/* Core MONA Brain - Center */}
              <div className="flex justify-center mb-8">
                <div className={`${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-8 shadow-2xl border-4 border-cyan-500 hover:scale-105 transition-all duration-300 animate-float w-80">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Brain className="w-8 h-8 text-cyan-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">MONA Suite</h3>
                    </div>
                    <p className="text-sm text-cyan-50 text-center">Neural Processing Core</p>
                  </div>
                </div>
              </div>

              {/* Main Vertical Pipeline continuing down */}
              <div className="flex justify-center mb-12">
                <div className="relative w-1 h-24 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full overflow-hidden">
                  <div className="absolute w-full h-12 bg-white opacity-60" style={{
                    animation: 'dataFlow 2s linear infinite',
                    transform: 'rotate(90deg)',
                    animationDelay: '0.5s'
                  }} />
                </div>
              </div>

              {/* Branching Engines - Water Flow Pattern */}
              <div className="relative space-y-12">
                {engines.map((engine, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={engine.id} className="relative">
                      {/* Connecting line from center */}
                      <div className={`absolute top-8 ${isLeft ? 'left-1/2 right-1/2' : 'right-1/2 left-1/2'} flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                        <svg className={`${isLeft ? '' : 'transform scale-x-[-1]'}`} width="200" height="80" style={{ overflow: 'visible' }}>
                          <defs>
                            <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: engine.color.split(' ')[1].replace('to-', '').replace('-600', ''), stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 0 Q 100 0, 200 80"
                            fill="none"
                            stroke={`url(#gradient-${idx})`}
                            strokeWidth="3"
                            className="transition-all duration-300"
                          />
                          {/* Animated flow dots */}
                          <circle r="4" fill="white" opacity="0.8">
                            <animateMotion
                              dur="3s"
                              repeatCount="indefinite"
                              path="M 0 0 Q 100 0, 200 80"
                              begin={`${idx * 0.3}s`}
                            />
                          </circle>
                        </svg>
                      </div>

                      {/* Engine Card */}
                      <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                        <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'} w-72`} style={{ animationDelay: `${0.6 + idx * 0.15}s` }}>
                          <div className={`bg-white rounded-2xl p-6 shadow-xl border-2 ${activeEngine === engine.id ? 'border-cyan-400 scale-105' : 'border-gray-200'} hover:border-cyan-400 hover:scale-105 transition-all duration-500 cursor-pointer`}
                            onMouseEnter={() => setActiveEngine(engine.id)}
                            onMouseLeave={() => setActiveEngine(null)}
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <div className={`w-14 h-14 bg-gradient-to-br ${engine.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${activeEngine === engine.id ? 'rotate-12 scale-110' : ''}`}>
                                <engine.icon className="w-7 h-7 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-black">{engine.name}</h3>
                                <p className="text-xs text-gray-500">{engine.specialization}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{engine.description.substring(0, 80)}...</p>
                          </div>
                        </div>
                      </div>

                      {/* Continue vertical line between engines */}
                      {idx < engines.length - 1 && (
                        <div className="flex justify-center my-8">
                          <div className="relative w-1 h-12 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full opacity-50" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Shield, text: 'HIPAA Compliant', color: 'cyan' },
                { icon: Zap, text: 'Real-Time Processing', color: 'blue' },
                { icon: Database, text: 'Secure Data Pipeline', color: 'purple' }
              ].map((feature, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-cyan-400 transition-all duration-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${1.2 + idx * 0.1}s` }}>
                  <div className={`w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Engines */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-4">
            Specialized AI Engines
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Each engine is purpose-built with domain-specific AI models, trained on millions of clinical cases
          </p>

          <div className="space-y-8">
            {engines.map((engine, idx) => (
              <div
                key={engine.id}
                className={`group relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-500 overflow-hidden ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${1.0 + idx * 0.1}s` }}
                onMouseEnter={() => setActiveEngine(engine.id)}
                onMouseLeave={() => setActiveEngine(null)}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${engine.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${activeEngine === engine.id ? 'scale-110 rotate-6' : ''}`}>
                        <engine.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-black mb-2">{engine.name}</h3>
                          <p className="text-sm text-gray-500 font-medium">{engine.specialization}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{engine.description}</p>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-bold text-black mb-3">Key Benefits:</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {engine.benefits.map((benefit, bidx) => (
                            <div key={bidx} className="flex items-start gap-2 bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                              <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Case */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 mb-6 border border-gray-200">
                        <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                          <span className="text-cyan-600">💡</span> Real-World Use Case:
                        </h4>
                        <p className="text-gray-700 italic leading-relaxed">{engine.useCase}</p>
                      </div>

                      {/* CTA */}
                      <button className={`group/btn px-6 py-3 bg-black text-white rounded-full font-medium inline-flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${engine.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to transform your clinical workflow?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a demo to see the MONA Suite in action
          </p>
          <Link to="/contact">
          <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3">
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}