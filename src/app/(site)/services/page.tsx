import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Services — Andrew Cleverly" };

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Documentation Infrastructure Services</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Transform your API documentation from afterthought to competitive advantage. 
            I design and implement documentation systems that scale with your business.
          </p>
        </div>
      </section>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Engagement Models */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8 text-center">Engagement Models</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Consultancy</h3>
                <p className="text-sm text-neutral-400">Strategic guidance and assessment projects</p>
                <div className="text-sm text-neutral-500 mt-3">Pricing on request</div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Fixed-Term Projects</h3>
                <p className="text-sm text-neutral-400">Complete implementation with defined deliverables</p>
                <div className="text-sm text-neutral-500 mt-3">Project-based pricing</div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Training & Workshops</h3>
                <p className="text-sm text-neutral-400">Team upskilling and knowledge transfer</p>
                <div className="text-sm text-neutral-500 mt-3">Session-based pricing</div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Long-Term Residency</h3>
                <p className="text-sm text-neutral-400">Embedded team member for ongoing development</p>
                <div className="text-sm text-neutral-500 mt-3">Monthly retainer</div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8 text-center">Core Service Areas</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="border border-neutral-800 rounded-lg p-8 hover:border-neutral-700 transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">Documentation Strategy & Assessment</h3>
                  <div className="w-16 h-1 bg-blue-500 rounded"></div>
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Comprehensive evaluation of your documentation ecosystem, identifying gaps, inefficiencies, 
                  and transformation opportunities. Strategic roadmap for implementing Doc-as-Code practices.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold">Consultancy:</span>
                    <span className="text-neutral-400">Current state analysis, stakeholder interviews, strategic recommendations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-semibold">Fixed-Term:</span>
                    <span className="text-neutral-400">Complete assessment with implementation roadmap and team training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold">Training:</span>
                    <span className="text-neutral-400">Doc-as-Code workshops and best practices sessions</span>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-8 hover:border-neutral-700 transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">API Documentation Architecture</h3>
                  <div className="w-16 h-1 bg-green-500 rounded"></div>
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Design and implement scalable OpenAPI-first documentation systems. From schema governance 
                  to automated publishing, create documentation that accelerates developer adoption.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold">Consultancy:</span>
                    <span className="text-neutral-400">Architecture review, technology recommendations, governance strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-semibold">Fixed-Term:</span>
                    <span className="text-neutral-400">Complete platform implementation with CI/CD integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-semibold">Residency:</span>
                    <span className="text-neutral-400">Embedded architect for large-scale transformations</span>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-8 hover:border-neutral-700 transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">DocOps & Automation</h3>
                  <div className="w-16 h-1 bg-purple-500 rounded"></div>
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Implement automated documentation pipelines integrated with your development workflow. 
                  From validation to deployment, ensure consistent, high-quality documentation delivery.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold">Consultancy:</span>
                    <span className="text-neutral-400">Pipeline assessment, toolchain recommendations, integration strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-semibold">Fixed-Term:</span>
                    <span className="text-neutral-400">Complete CI/CD setup with quality gates and deployment automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-semibold">Training:</span>
                    <span className="text-neutral-400">Team workshops on pipeline management and automation best practices</span>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-800 rounded-lg p-8 hover:border-neutral-700 transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">Developer Experience Optimization</h3>
                  <div className="w-16 h-1 bg-orange-500 rounded"></div>
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Create documentation experiences that reduce time-to-first-API-call and minimize support tickets. 
                  From SDK generation to interactive guides, make your APIs irresistible to integrate.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold">Consultancy:</span>
                    <span className="text-neutral-400">UX audit, developer journey mapping, optimization recommendations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-semibold">Fixed-Term:</span>
                    <span className="text-neutral-400">Complete developer portal with SDK generation and interactive docs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-semibold">Residency:</span>
                    <span className="text-neutral-400">Ongoing optimization based on analytics and user feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8 text-center">How We Work Together</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold">1</span>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Discovery & Strategy</h3>
                <p className="text-sm text-neutral-400">
                  Deep dive into your current state, goals, and constraints. Define success metrics and project scope.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold">2</span>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Implementation & Integration</h3>
                <p className="text-sm text-neutral-400">
                  Hands-on implementation with your team. Knowledge transfer and training throughout the process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold">3</span>
                </div>
                <h3 className="font-semibold text-neutral-200 mb-2">Optimization & Support</h3>
                <p className="text-sm text-neutral-400">
                  Ongoing optimization based on user feedback and analytics. Optional retainer for continued evolution.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-neutral-900 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">Ready to Transform Your Documentation?</h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Every organization has unique documentation challenges. Let's discuss your specific requirements 
              and I'll provide a tailored proposal with transparent pricing and clear deliverables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Request Custom Proposal
              </Link>
              <Link 
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg font-medium transition-colors"
              >
                View Case Studies
              </Link>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              All initial consultations are complimentary • Transparent pricing • No hidden fees
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
