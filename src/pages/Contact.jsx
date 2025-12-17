import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import { Scan, FlaskConical, Heart, Activity, Dna, ArrowRight, Zap, Shield, Brain, Database, ChevronRight, Rocket } from 'lucide-react';


export default function ContactPage() {
  const [scrollY /* kept if you still want, but we won't use for translate */ , setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Keep scroll listener only if you use elsewhere; safe to keep but unused now.
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

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

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xnnrbqej", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          organization: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert('There was a problem with your submission. Please try again.');
          }
        });
      }
    } catch (error) {
      alert('There was a problem with your submission. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-teal-50 overflow-hidden flex flex-col">
      <style>{`
        /* KEEP ALL YOUR ORIGINAL ANIMATIONS & CLASSES — unchanged */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 5s ease infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .input-focus { transition: all 0.3s ease; }
        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
        }
        @keyframes success-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .success-animation { animation: success-bounce 0.5s ease-in-out; }
        @media (max-width: 420px) {
          #contact-form {
            height: auto !important;
            padding-bottom: 2rem; /* Add some space before the footer */
          }
        }
      `}</style>

      {/* Floating Background Elements (unchanged) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      {/* MAIN: keep flex-1 so footer sits below. We calculate a viewport fit area subtracting nav(≈85px). */}
      <main className="flex-1 relative z-10">
        {/* HERO area: reduced top padding so grid starts aligned with hero top on large screens */}
        <section className="pt-23 pb-4 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Using a two-column row at the hero level to ensure top baseline alignment */}
            <div className="grid lg:grid-cols-2 gap-8 items-start"> {/* CHANGED: items-start ensures top alignment */}
              {/* LEFT: hero + contact cards */}
              <div className="lg:pr-6">
                <div
                  className="inline-block mb-6 animate-fadeInScale"
                  style={{ transform: `translateY(${scrollY * 0.00}px)` }} /* keep scrollY harmless, no movement */
                >
                  <span className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-lg" style={{fontFamily: 'Inter, sans-serif'}}>
                    <Sparkles className="w-4 h-4" />
                    Get in Touch
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight animate-fadeInUp text-left"
                  style={{fontFamily: 'Poppins, sans-serif'}}
                >
                  Let's Build the Future<br/>
                  <span className="gradient-text">Together</span>
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl leading-relaxed animate-fadeInUp stagger-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Whether you're a healthcare provider, research institution, or investor, we'd love to hear from you.
                </p>

              
                {/* CONTACT CARDS: pulled up to start right under subtext */}
                <div id="contact-info" data-animate className={`${isVisible['contact-info'] ? 'animate-slideInLeft' : 'opacity-0'} mt-8 space-y-4`}>
                  <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Email Us</h3>

                        <a href="founder@monexahealth.com" className="text-blue-600 font-semibold hover:text-blue-700 transition" style={{fontFamily: 'Inter, sans-serif'}}>founder@monexahealth.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Call Us</h3>
                        <a href="+91 76719 52358" className="text-blue-600 font-semibold hover:text-blue-700 transition" style={{fontFamily: 'Inter, sans-serif'}}>+91 76719 52358</a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Visit Us</h3>
                        <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Bengaluru, Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: contact form aligned to the same top baseline as H1 (no extra top margin) */}
              <div className="lg:pl-6 flex items-start justify-end">
                <div
                  id="contact-form"
                  data-animate
                  className={`${isVisible['contact-form'] ? 'animate-slideInRight' : 'opacity-0'} w-full max-w-2xl`}
                  // CHANGED: use calc viewport minus nav height (85px) so main area fits and footer is below
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-6.5  border border-gray-100 relative overflow-visible">
                    {/* background decoration left as-is */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -mr-32 -mt-20 opacity-50" />

                    {/* Make the inner area not scroll internally: use flex to distribute content */}
                    <div className="relative z-10 flex flex-col">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Send Us a Message</h2>
                      <p className="text-gray-600 mb-2 sm:mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Fill out the form below and we'll get back to you shortly</p>

                      {/* FORM: grows, but no internal overflow; textarea limited height so it fits */}
                      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                        {!isSubmitted ? (
                          <div className="space-y-4 flex-1">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Full Name *</label>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                                  style={{fontFamily: 'Inter, sans-serif'}}
                                  placeholder="Dr. John Smith"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Email Address *</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                                  style={{fontFamily: 'Inter, sans-serif'}}
                                  placeholder="john.smith@hospital.com"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Organization</label>
                                <input
                                  type="text"
                                  name="organization"
                                  value={formData.organization}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                                  style={{fontFamily: 'Inter, sans-serif'}}
                                  placeholder="Memorial Hospital"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Phone Number</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                                  style={{fontFamily: 'Inter, sans-serif'}}
                                  placeholder="+91 666-123-4567"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Subject *</label>
                              <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                                style={{fontFamily: 'Inter, sans-serif'}}
                              >
                                <option value="">Select a subject</option>
                                <option value="partnership">Partnership Inquiry</option>
                                <option value="demo">Request a Demo</option>
                                <option value="research">Research Collaboration</option>
                                <option value="investment">Investment Opportunity</option>
                                <option value="support">Technical Support</option>
                                <option value="other">Other</option>
                              </select>
                            </div>

                            <div className="flex-1">
                              <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Message *</label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus resize-none h-25"
                                style={{fontFamily: 'Inter, sans-serif'}}
                                placeholder="Tell us more about your inquiry..."
                              />
                            </div>

                            <div>
                              <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                                style={{fontFamily: 'Inter, sans-serif'}}
                              >
                                <Send className="w-5 h-5" />
                                Send Message
                              </button>

                              <p className="text-sm text-gray-500 text-center mt-2" style={{fontFamily: 'Inter, sans-serif'}}>
                                By submitting this form, you agree to our Privacy Policy and Terms of Service.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-12 success-animation">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                              Message Sent Successfully!
                            </h3>
                            <p className="text-gray-600 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                              Thank you for reaching out. Our team will get back to you within 24 hours.
                            </p>
                            <button
                              onClick={() => setIsSubmitted(false)}
                              className="text-blue-600 font-semibold hover:text-blue-700 transition"
                              style={{fontFamily: 'Inter, sans-serif'}}
                            >
                              Send Another Message
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
