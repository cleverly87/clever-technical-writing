import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Projects — Andrew Cleverly" };



export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Project Portfolio</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Real-world implementations showcasing API documentation strategy, 
            developer experience design, and technical architecture excellence.
          </p>
        </div>
      </section>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8 text-center">Featured Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Enhanced Card Components with Icons and Better Styling */}
              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Creditsafe API Developer Portal</h3>
                    <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Enterprise Production
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Global multi-product API documentation portal built with Redocly Realm. 
                  Modular OpenAPI 3.1 architecture, automated governance, and CI/CD publishing pipeline.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/creditsafe" 
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">Architect & Lead</span>
                </div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Psych-Skills Healthcare SaaS</h3>
                    <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Live Production
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Enterprise-grade sports psychology platform with Next.js 14, real-time booking system, 
                  multi-layer security architecture, and comprehensive admin dashboard for professional service delivery.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/psych-skills" 
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2"
                  >
                    View Project Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">Full Stack SaaS</span>
                </div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Portfolio Platform Architecture</h3>
                    <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Live Production
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Professional consultancy platform built with Next.js 14, TypeScript, and AWS infrastructure. 
                  Demonstrates modern web development, CI/CD automation, and enterprise deployment practices.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/portfolio" 
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
                  >
                    View Technical Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">Full Stack</span>
                </div>
              </div>

            </div>
          </section>

          {/* Additional Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8 text-center">Additional Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Pleo Demo */}
              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Pleo Demo Task (Stoplight)</h3>
                    <div className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      Live Demo
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Sample API definition and minimal portal using Stoplight tooling. Demonstrates spec writing and public-facing documentation standards.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/stoplight-demo" 
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2"
                  >
                    View Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">API Design</span>
                </div>
              </div>

              {/* Swansea Harriers */}
              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Swansea Harriers Analytics</h3>
                    <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Production
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Full-stack athletic performance platform with Python/Flask backend, SQLite database, and intelligent relay team optimization algorithms.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/swansea-harriers" 
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">Full Stack</span>
                </div>
              </div>

              {/* OANDA Trading Engine */}
              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">OANDA FX Trading Engine</h3>
                    <div className="inline-flex items-center gap-2 bg-orange-900/30 text-orange-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Development/Stage
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  Fully operational trading bot with modular strategies, risk management, live monitoring, and comprehensive logging systems.
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href="/projects/oanda" 
                    className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2"
                  >
                    View Architecture
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-neutral-500">FinTech</span>
                </div>
              </div>

            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
