import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Projects — Andrew Cleverly" };

function Card({ 
  title, 
  children, 
  href, 
  external = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  href: string;
  external?: boolean;
}) {
  const content = (
    <div className="border border-neutral-800 rounded p-5 hover:border-neutral-600 transition">
      <h3 className="font-semibold">{title}</h3>
      <div className="text-sm text-neutral-300 mt-2">{children}</div>
    </div>
  );
  
  return external ? (
    <a href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <Link href={href}>{content}</Link>
  );
}

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
              
              <Card title="Pleo Demo Task (Stoplight)" href="/projects/stoplight-demo">
                Sample API definition and minimal portal using Stoplight tooling. Demonstrates spec writing and public-facing docs.
              </Card>
              
              <Card title="Swansea Harriers Athlete Database" href="/projects/swansea-harriers">
                Web-based athlete performance DB with Python/Flask API + SQLite, UI for querying PB/SB and trends.
                OpenAPI-backed docs and maintainable content pipeline.
              </Card>
              
              <Card title="OANDA FX Trading Engine" href="/projects/oanda">
                Fully operational trading bot with modular strategies, risk management, live monitoring, and logging.
                Core strategies & credentials protected under IP. Public write-up focuses on architecture and DocOps.
              </Card>

            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
