import React from 'react';
import { Sparkles } from 'lucide-react';

export default function IntroducingBadge({ text = "Introducing", icon: Icon = Sparkles }) {
  return (
    <>
      <style>{`
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

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(34, 211, 238, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.4), 0 0 60px rgba(34, 211, 238, 0.4);
          }
        }

        .badge-container {
          animation: fadeInDown 0.8s ease-out;
        }

        .badge-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .badge-icon {
          animation: iconPulse 2s ease-in-out infinite;
        }

        .badge-shimmer {
          position: relative;
          overflow: hidden;
        }

        .badge-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .badge-text {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="inline-flex items-center justify-center badge-container mb-10">
        <div className="badge-shimmer badge-glow inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
          <Icon className="w-4 h-4 badge-icon" />
          <span className="badge-text">{text}</span>
        </div>
      </div>
    </>
  );
}

// Example Usage Demo
function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-white flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Introducing Badge Component</h2>
        
        {/* Default usage */}
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">Default:</p>
          <IntroducingBadge />
        </div>

        {/* Custom text */}
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">Custom Text:</p>
          <IntroducingBadge text="New Feature" />
        </div>

        {/* Different icons */}
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">With Different Icon:</p>
          <IntroducingBadge text="Coming Soon" icon={Sparkles} />
        </div>

        {/* In context */}
        <div className="mt-16 space-y-6">
          <IntroducingBadge text="Introducing" />
          <h1 className="text-6xl font-bold text-black">
            MONA Beyond Initiative
          </h1>
          <p className="text-xl text-gray-700">
            AI-Powered Clinical Decision Support
          </p>
        </div>
      </div>

      {/* Code Example */}
      <div className="max-w-2xl w-full mt-12 p-6 bg-gray-900 rounded-xl text-white font-mono text-sm">
        <div className="text-cyan-400 mb-2">// Usage:</div>
        <div className="text-gray-300">
          <div className="text-purple-400">import</div> IntroducingBadge <div className="text-purple-400">from</div> './IntroducingBadge';
        </div>
        <div className="mt-4 text-gray-300">
          <div className="text-yellow-400">{'// Default'}</div>
          <div>{'<IntroducingBadge />'}</div>
          
          <div className="mt-3 text-yellow-400">{'// Custom text'}</div>
          <div>{'<IntroducingBadge text="New Feature" />'}</div>
          
          <div className="mt-3 text-yellow-400">{'// Custom icon'}</div>
          <div>{'<IntroducingBadge text="Coming Soon" icon={Rocket} />'}</div>
        </div>
      </div>
    </div>
  );
}