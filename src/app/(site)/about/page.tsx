import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = { title: "About — Andrew Cleverly" };

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-neutral-950 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Professional Image */}
              <div className="lg:col-span-1">
                <div className="aspect-square bg-neutral-800 rounded-lg border border-neutral-700 flex items-center justify-center">
                  <div className="text-center text-neutral-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-neutral-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Professional Photo</p>
                    <p className="text-xs text-neutral-500 mt-1">Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold text-neutral-100 mb-6">About Andrew Cleverly</h1>
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                  <p className="text-xl text-neutral-200">
                    Senior API Technical Writer and Documentation Systems Architect specialising in 
                    enterprise-scale documentation infrastructure and developer experience design.
                  </p>
                  <p>
                    I design and build API documentation ecosystems that connect engineering, product, and business — 
                    unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one. 
                    Every implementation aligns documentation delivery with strategic goals and AI-enabled knowledge flows.
                  </p>
                  <p>
                    My approach combines technical depth with business acumen, delivering documentation platforms 
                    that scale from startup to enterprise while maintaining consistency, accuracy, and exceptional 
                    developer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Core Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Documentation Infrastructure</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• OpenAPI 3.1 specification design and governance</li>
                  <li>• Redocly Realm portal architecture</li>
                  <li>• Multi-product documentation ecosystems</li>
                  <li>• CI/CD DocOps pipeline implementation</li>
                  <li>• Version control and branching strategies</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Developer Experience Design</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Interactive documentation with try-it-out functionality</li>
                  <li>• SDK generation and testing automation</li>
                  <li>• Developer onboarding optimization</li>
                  <li>• API testing and validation frameworks</li>
                  <li>• Performance analytics and user insights</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Technical Systems</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Python data processing and automation</li>
                  <li>• TypeScript/Node.js application development</li>
                  <li>• Database design and API integration</li>
                  <li>• AWS cloud infrastructure and deployment</li>
                  <li>• Financial systems and trading algorithms</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Strategic Consultation</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Documentation governance frameworks</li>
                  <li>• Enterprise API strategy and planning</li>
                  <li>• Team process optimization</li>
                  <li>• AI-ready content structuring</li>
                  <li>• Regulatory compliance and accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-16 px-6 bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Professional Background</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-700 pl-8">
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Current Focus</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Building next-generation documentation infrastructure that bridges the gap between 
                  technical implementation and business objectives. Specializing in enterprise-scale 
                  API ecosystems where documentation quality directly impacts customer success and 
                  revenue growth.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-700 pl-8">
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Technical Philosophy</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Documentation is infrastructure, not afterthought. Every specification, guide, and 
                  tutorial should be designed with the same rigor as production systems — scalable, 
                  maintainable, testable, and aligned with business strategy.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-700 pl-8">
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Industry Impact</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Proven track record of reducing developer onboarding time by 50-80%, decreasing 
                  API support tickets by 20-40%, and enabling faster product releases through 
                  automated testing and validation pipelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Methodology */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Approach & Methodology</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-neutral-200">1</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Systems Analysis</h3>
                <p className="text-neutral-400 text-sm">
                  Deep technical assessment of existing documentation infrastructure, 
                  identifying gaps and optimization opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-neutral-200">2</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Strategic Design</h3>
                <p className="text-neutral-400 text-sm">
                  Architecture planning that balances immediate needs with long-term 
                  scalability and business objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-neutral-200">3</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Implementation</h3>
                <p className="text-neutral-400 text-sm">
                  Hands-on delivery with continuous optimization, testing, and 
                  performance measurement throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
