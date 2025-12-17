import { useState } from "react";
import BlurText from "../reusable/BlurText.jsx";
import NextText from "../reusable/NextText.jsx";
import IntroducingBadge from "../reusable/Introducing.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  const [showNextText, setShowNextText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleBlurTextAnimationComplete = () => {
    setTimeout(() => {
      setShowNextText(true);
    }, 100);
  };

  const handleNextTextAnimationComplete = () => {
    setTimeout(() => {
      setShowButton(true);
    }, 300);
  };

  return (
    <div
      className="min-h-screen bg-gradient-hero
 flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <IntroducingBadge text="Introducing" />
        <BlurText
          text="MONA"
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleBlurTextAnimationComplete}
          className="font-bold text-6xl sm:text-6xl md:text-6xl lg:text-8xl mb-4 tracking-tight"
        />
      </div>
      <div className="text-xl ml-5 mr-4 mb-8 md:text-3xl lg:text-4xl md:mb-8">
        {showNextText ? (
          <NextText
            text="Clinical Workflow Intelligence for the Next Generation of Healthcare"
            delay={0}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleNextTextAnimationComplete}
          />
        ) : (
          <span className="text-transparent">
            Clinical Workflow Intelligence for the Next Generation of Healthcare
          </span>
        )}
      </div>

      <div
        className={`flex gap-4 mt-6 sm:mt-12 flex-col sm:flex-row md:flex-row transition-all duration-500 ease-in-out ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Link
          to="/product"
          className="group relative bg-black text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore MONA-R
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* <Link to="/contact" className="group relative bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5">
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-cyan-700">
            Join Our Pilot Program
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link> */}
      </div>
    </div>
  );
}
