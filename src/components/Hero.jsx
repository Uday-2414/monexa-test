import BlurText from "../reusable/BlurText.jsx";
import IntroducingBadge from "../reusable/Introducing.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
  return (
    <div
      className="min-h-screen bg-gradient-hero
 flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <IntroducingBadge text="Introducing" />
        <BlurText
          text="MONA EARTH🌏"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="font-bold text-4xl sm:text-6xl md:text-6xl lg:text-8xl mb-4 tracking-tight"
        />
      </div>
      <BlurText
        text="AI-Powered Clinical Decision Support
"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-xl md:text-3xl lg:text-4xl mb-8"
      />

      <div className="flex gap-4 mt-6 sm:mt-12 flex-col sm:flex-row md:flex-row">
        <Link to="/product" className="group relative bg-black text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5">
          <span className="relative z-10 flex items-center gap-2">
            Explore MONA Suite
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
  
        <Link to="/contact" className="group relative bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5">
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-cyan-700">
            Join Our Pilot Program
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
</div>

       
    </div>
  );
}
