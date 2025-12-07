import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";
import OutcomeCarousel from "./(site)/components/OutcomeCarousel";
import Link from "next/link";

export default function HomePage() {
  const outcomes = [
    {
      label: "Time-to-First-Success",
      metric: "↓ 50–80%",
      blurb: "Reduce onboarding friction with structured OpenAPI workflows and interactive SDK examples."
    },
    {
      label: "Support Tickets", 
      metric: "↓ 20–40%",
      blurb: "Self-service documentation architecture eliminates repetitive developer questions."
    },
    {
      label: "Release Confidence",
      metric: "↑ Significantly", 
      blurb: "Automated testing pipelines with Arazzo scripting catch breaking changes before release."
    },
    {
      label: "Regulatory Compliance",
      metric: "✓ Assured",
      blurb: "WCAG 2.1 AA accessibility standards and audit-ready documentation governance frameworks ensure regulatory adherence."
    },
    {
      label: "AI Integration Ready",
      metric: "↑ Future-Proof",
      blurb: "Structured schemas and semantic markup enable intelligent agent consumption for automated self-service guidance."
    },
    {
      label: "User Analytics Insights",
      metric: "↑ Data-Driven", 
      blurb: "Integrated analytics dashboards reveal real user behavior patterns, enabling focused improvements and content optimization."
    },
    {
      label: "Scalable Architecture",
      metric: "↑ Enterprise-Grade",
      blurb: "Multi-tenant documentation systems with microservice integration patterns that scale from startup to enterprise volume."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-24 px-6 relative overflow-hidden">
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold text-neutral-100 mb-8">
              <span className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                Documentation is Infrastructure
              </span>
            </h1>
            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              I design and build API documentation ecosystems that connect engineering, product, and business —
              unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one.
              From enterprise documentation platforms to full-stack demonstration systems, every implementation 
              emphasizes scalable architecture and comprehensive documentation that serves both human understanding 
              and AI-agent consumption. Every solution aligns technical delivery with strategic business goals.
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/projects" 
                className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-neutral-800/50 whitespace-nowrap text-center group"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/50 whitespace-nowrap text-center"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-neutral-800/50 whitespace-nowrap text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Strategic Documentation Thinking Section */}
        <div className="py-20 px-6 border-b border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-950 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/5 via-transparent to-purple-950/5"></div>
          <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-100 mb-4">
                Strategic Documentation Thinking
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Documentation as business architecture, not just content delivery
              </p>
            </div>
            
            <div className="mb-12">
              <p className="text-neutral-300 text-center leading-relaxed text-lg max-w-3xl mx-auto">
                I approach documentation not just as content, but as a critical system within the business architecture. 
                It should evolve with the product lifecycle, reflect governance needs, and enable scalable developer 
                onboarding, support, and automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 bg-neutral-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-3 text-lg">Product Strategy Alignment</h3>
                <p className="text-neutral-400">Aligns with product and platform strategy</p>
              </div>
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20 bg-neutral-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-3 text-lg">Governance & Analytics</h3>
                <p className="text-neutral-400">Enables governance, analytics, and automation</p>
              </div>
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 bg-neutral-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-3 text-lg">DevOps Integration</h3>
                <p className="text-neutral-400">Integrates seamlessly into CI/CD and DevOps workflows</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Built with Systems Thinking Section */}
        <div className="py-20 px-6 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-100 mb-4">
                Built with Systems Thinking
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Complex documentation ecosystems designed for scale and integration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">Creditsafe API Platform</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Multi-product OpenAPI governance with automated SDK generation and developer portal integration</p>
                  </div>
                </div>
                <Link href="/projects/creditsafe" className="text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm font-medium flex items-center gap-2 group-hover:gap-3 group-hover:drop-shadow-sm">
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">Psych-Skills Healthcare SaaS</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Live sports psychology platform with Next.js 14, real-time booking system, and comprehensive admin dashboard</p>
                  </div>
                </div>
                <Link href="/projects/psych-skills" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Project Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2m0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M7 7V6a1 1 0 011-1h8a1 1 0 011 1v1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">CTW Integration Platform</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Multi-tenant SaaS platform for API management with Super Admin Dashboard and custom-branded Developer portals</p>
                  </div>
                </div>
                <Link href="/projects/ctw-integration-platform" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Platform Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">Stoplight Demo System</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Advanced API design toolchain with collaborative workflows and enterprise governance demonstration</p>
                  </div>
                </div>
                <Link href="/projects/stoplight-demo" className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">OANDA Trading Bot System</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Automated forex trading interface with custom strategy algorithms and signal execution via OANDA API integration</p>
                  </div>
                </div>
                <Link href="/projects/oanda" className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Architecture
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-2 text-lg">Swansea Harriers Analytics Platform</h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">Power of 10 API integration with Python data cleaning modules and SQL database, plus management UI for athlete insights</p>
                  </div>
                </div>
                <Link href="/projects/swansea-harriers" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Business Outcomes Section */}
        <div className="py-16 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900/80">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-4">
              Comprehensive Documentation Expertise
            </h2>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
              Deep technical capabilities across the entire documentation infrastructure lifecycle.
            </p>
            
            <OutcomeCarousel outcomes={outcomes} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
