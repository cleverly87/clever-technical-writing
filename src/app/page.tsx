import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";
import OutcomeCarousel from "./(site)/components/OutcomeCarousel";
import Link from "next/link";

export default function HomePage() {
  // Define expanded expertise outcomes
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
        <div className="bg-neutral-950 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-100 mb-8">
              <span className="text-neutral-200">Documentation is Infrastructure</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I design and build API documentation ecosystems that connect engineering, product, and business —
              unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one.
              Every implementation aligns documentation delivery with strategic goals and AI-enabled knowledge flows.
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/projects" 
                className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap text-center"
              >
                View Projects
              </Link>
              <Link 
                href="/services" 
                className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap text-center"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Built with Systems Thinking Section */}
        <div className="py-16 px-6 border-b border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-neutral-100 text-center mb-3">
              Built with Systems Thinking
            </h2>
            <p className="text-neutral-400 text-center mb-12 text-sm">
              Complex documentation ecosystems designed for scale and integration
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-neutral-200 mb-2">Creditsafe API Platform</h3>
                <p className="text-sm text-neutral-400 mb-3">Multi-product OpenAPI governance with automated SDK generation and developer portal integration</p>
                <Link href="/projects/creditsafe" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  View Case Study →
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-neutral-200 mb-2">Stoplight Demo System</h3>
                <p className="text-sm text-neutral-400 mb-3">Advanced API design toolchain with collaborative workflows and enterprise governance demonstration</p>
                <Link href="/projects/stoplight-demo" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  View Case Study →
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-neutral-200 mb-2">OANDA Trading Bot System</h3>
                <p className="text-sm text-neutral-400 mb-3">Automated forex trading interface with custom strategy algorithms and signal execution via OANDA API integration</p>
                <Link href="/projects/oanda" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  View Case Study →
                </Link>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
                <h3 className="font-semibold text-neutral-200 mb-2">Swansea Harriers Analytics Platform</h3>
                <p className="text-sm text-neutral-400 mb-3">Power of 10 API integration with Python data cleaning modules and SQL database, plus management UI for athlete insights</p>
                <Link href="/projects/swansea-harriers" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Business Outcomes Section */}
        <div className="py-16 px-6">
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
