import { Link } from "react-router-dom";

export default function Suite(){
    return(
        <>
         <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the MONA Suite - Your Intelligent Clinical Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At the heart of MONEXA lies <span className="font-bold text-blue-600">MONA</span> (Medical Optimized Neural Assistant), 
              connecting multiple AI engines for complete diagnostic support.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* MONA Radiology */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-400 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                  🩻
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">MONA Radiology</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi-modality imaging AI for X-rays, CT scans, MRIs, and ultrasounds with precision diagnostics.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

           

            {/* MONA Rare */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-400 transform hover:scale-105 overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                  🧬
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">MONA Rare</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Intelligent rare-case detection system that identifies uncommon diseases and conditions often missed by traditional diagnostics.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link to="/product" className="relative z-10 flex items-center gap-3">
              <div className="relative flex items-center gap-3">
                <span>Explore the MONA Suite</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              </Link>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        </div>
        </>
    );
}