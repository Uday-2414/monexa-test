export default function About() {
  return (
    <>
      <div className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why MONEXA?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Healthcare is overloaded - too many scans, too few specialists,
              and workflows that break under pressure.
              <span className="font-semibold text-blue-600"> Monexa</span>{" "}
              builds AI-driven orchestration systems that help clinicians work
              faster, with greater consistency and less manual burden.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="text-5xl mb-4">🩺</div>
              <div className="text-4xl font-bold text-red-600 mb-3">
                1:100,000
              </div>
              <p className="text-gray-700 font-medium mb-2">
                🩺 Severe radiologist shortage
              </p>
              <p className="text-sm text-gray-600">
                India has 1 radiologist per 100,000 people, leading to large
                backlogs and uneven access to expert reporting.
              </p>
              {/* <div className="mt-6 pt-6 border-t border-red-200">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>MONA bridges this gap</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div> */}
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="text-5xl mb-4">⏱️</div>
              <div className="text-4xl font-bold text-purple-600 mb-3">60%</div>
              <p className="text-gray-700 font-medium mb-2">
                ⏱ Growing workload pressure
              </p>
              <p className="text-sm text-gray-600">
                More than half of radiologists report burnout from rising case
                volumes and repetitive manual tasks.
              </p>
              {/* <div className="mt-6 pt-6 border-t border-purple-200">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>MONA assists in real-time</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div> */}
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-4xl font-bold text-blue-600 mb-3">50%</div>
              <p className="text-gray-700 font-medium mb-2">
                🌍 Unequal access to expertise
              </p>
              <p className="text-sm text-gray-600">
                Remote and low-resource regions lack timely specialist support
                due to staffing and connectivity gaps.
              </p>
              {/* <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>MONA democratizes care</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-2xl text-gray-800 font-medium mb-6">
              AI-powered support for{" "}
              <span className="text-blue-600 font-bold">every diagnosis</span>,
              <span className="text-purple-600 font-bold"> every patient</span>,
              <span className="text-cyan-600 font-bold"> everywhere</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
