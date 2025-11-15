import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Users, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
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
      observerRef.current.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        .input-focus {
          transition: all 0.3s ease;
        }
        
        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
        }
        
        @keyframes success-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .success-animation {
          animation: success-bounce 0.5s ease-in-out;
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div 
            className="inline-block mb-8 animate-fadeInScale"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <span className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-lg" style={{fontFamily: 'Inter, sans-serif'}}>
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </span>
          </div>
          
          <h1 
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp"
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            Let's Build the Future<br/>
            <span className="gradient-text">
              Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-2" style={{fontFamily: 'Inter, sans-serif'}}>
            Whether you're a healthcare provider, research institution, or investor, we'd love to hear from you.
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-3 animate-fadeInScale stagger-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div 
              id="contact-info"
              data-animate
              className={`space-y-8 ${isVisible['contact-info'] ? 'animate-slideInLeft' : 'opacity-0'}`}
            >
              {/* Contact Cards */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                      Our team typically responds within 24 hours
                    </p>
                    <a href="mailto:contact@monexa.ai" className="text-blue-600 font-semibold hover:text-blue-700 transition" style={{fontFamily: 'Inter, sans-serif'}}>
                      founder@monexahealth.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                      Monday to Friday, 9 AM - 6 PM EST
                    </p>
                    <a href="tel:+1-555-MONEXA" className="text-blue-600 font-semibold hover:text-blue-700 transition" style={{fontFamily: 'Inter, sans-serif'}}>
                      +91 76719 52358
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      Visit Us
                    </h3>
                    <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                      Bengalore,<br />
                      Karnataka,
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Partner with MONEXA
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                    Join leading healthcare institutions leveraging AI-powered clinical decision support. Let's explore how we can collaborate.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" style={{fontFamily: 'Inter, sans-serif'}}>
                    Explore Partnerships →
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              id="contact-form"
              data-animate
              className={`${isVisible['contact-form'] ? 'animate-slideInRight' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -mr-32 -mt-32 opacity-50" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
                    Fill out the form below and we'll get back to you shortly
                  </p>

                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                            Full Name *
                          </label>
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
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                            Email Address *
                          </label>
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

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                            Organization
                          </label>
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
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus"
                            style={{fontFamily: 'Inter, sans-serif'}}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                          Subject *
                        </label>
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none input-focus resize-none"
                          style={{fontFamily: 'Inter, sans-serif'}}
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                        style={{fontFamily: 'Inter, sans-serif'}}
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>

                      <p className="text-sm text-gray-500 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}