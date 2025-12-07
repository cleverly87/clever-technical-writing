"use client";
import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export default function CTWPrivateAccessPage() {
  const [status, setStatus] = useState("");

  // Set page title on client side
  useEffect(() => {
    document.title = "CTW Integration Platform Repository Access — Andrew Cleverly";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    try {
      const res = await fetch("https://formspree.io/f/mqardayd", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/projects/ctw-integration-platform" 
            className="text-sm text-neutral-400 hover:text-neutral-200 mb-4 inline-block"
          >
            ← Back to CTW Integration Platform
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-100">Repository Access Request</h1>
              <p className="text-neutral-400">CTW Integration Platform - Commercial SaaS Solution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Commercial Software Notice */}
          <section>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-neutral-700 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.08 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-yellow-400 mb-2">Protected Commercial Software</h2>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    The CTW Integration Platform represents a comprehensive commercial SaaS solution with significant 
                    intellectual property and proprietary business logic. This multi-tenant platform includes advanced 
                    API management systems, custom branding capabilities, and enterprise-grade security implementations.
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    Repository access is carefully managed to protect commercial interests while enabling technical 
                    evaluation for qualified prospects, potential partners, and serious business collaborators.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Platform Architecture & Value</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">🏗️ Technical Architecture</h3>
                <ul className="text-neutral-300 space-y-2 text-sm">
                  <li>• Multi-tenant SaaS architecture with PostgreSQL</li>
                  <li>• Next.js 14 with TypeScript and modern frameworks</li>
                  <li>• Dynamic routing and custom domain support</li>
                  <li>• Enterprise-grade security and data isolation</li>
                  <li>• Scalable API management and SDK generation</li>
                  <li>• Advanced analytics and subscription billing</li>
                </ul>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">💼 Commercial Value</h3>
                <ul className="text-neutral-300 space-y-2 text-sm">
                  <li>• Comprehensive API ecosystem management</li>
                  <li>• White-label developer portal solutions</li>
                  <li>• Recurring revenue SaaS business model</li>
                  <li>• Enterprise client onboarding automation</li>
                  <li>• Competitive advantage in API economy</li>
                  <li>• Proprietary multi-tenancy implementations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Access Qualification Criteria */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Access Qualification</h2>
            
            <div className="space-y-6">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Qualified Requesters Include:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">🤝 Business Partners</h4>
                    <ul className="text-neutral-300 space-y-1 text-sm">
                      <li>• Potential technology partners</li>
                      <li>• Integration service providers</li>
                      <li>• API ecosystem collaborators</li>
                      <li>• Strategic business alliances</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">🏢 Enterprise Prospects</h4>
                    <ul className="text-neutral-300 space-y-1 text-sm">
                      <li>• Enterprise software evaluators</li>
                      <li>• Technical decision makers</li>
                      <li>• API platform administrators</li>
                      <li>• Developer experience managers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Professional Context Required:</h3>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Access requests should include professional context, intended evaluation scope, and business 
                    justification. This ensures appropriate protection of commercial intellectual property while 
                    enabling meaningful technical collaboration and business development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Access Request Form */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Request Repository Access</h2>
            
            <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Professional Access Request</h3>
                <p className="text-neutral-400 mb-6">
                  Submit a detailed access request including your professional context, intended use case, 
                  and business justification for repository access.
                </p>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400">Request Submitted Successfully</h4>
                      <p className="text-green-300 text-sm">Your repository access request has been received and will be reviewed within 24-48 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400">Submission Failed</h4>
                      <p className="text-red-300 text-sm">There was an error submitting your request. Please try again or contact directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="CTW Integration Platform Repository Access Request" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Professional Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="e.g., CTO, API Manager, Technical Lead"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="use-case" className="block text-sm font-semibold text-neutral-200 mb-2">
                    Intended Use Case *
                  </label>
                  <select
                    id="use-case"
                    name="use-case"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your primary interest...</option>
                    <option value="evaluation">Platform evaluation for enterprise adoption</option>
                    <option value="partnership">Technology partnership discussion</option>
                    <option value="integration">API integration and collaboration</option>
                    <option value="architecture">Technical architecture review</option>
                    <option value="investment">Investment or acquisition inquiry</option>
                    <option value="other">Other business purpose</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="business-justification" className="block text-sm font-semibold text-neutral-200 mb-2">
                    Business Justification *
                  </label>
                  <textarea
                    id="business-justification"
                    name="business-justification"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please provide detailed context about your business needs, evaluation criteria, and how repository access would support your objectives. Include your organization's API management challenges and potential collaboration opportunities."
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-neutral-200 mb-2">
                    Evaluation Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g., 2-4 weeks for initial evaluation"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="commercial-agreement"
                    name="commercial-agreement"
                    required
                    className="w-4 h-4 text-blue-600 bg-neutral-800 border-neutral-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="commercial-agreement" className="text-sm text-neutral-300">
                    I acknowledge this is commercial software with intellectual property protections and agree to appropriate confidentiality and usage terms. *
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "success"}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {status === "success" ? "Request Submitted" : "Submit Repository Access Request"}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-neutral-700">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/projects/ctw-integration-platform/overview"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-300 hover:border-neutral-500 hover:text-neutral-200 rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Technical Overview
                  </Link>
                  <span className="text-xs text-neutral-500">•</span>
                  <p className="text-xs text-neutral-500 text-center">
                    Repository access is granted based on professional merit and business justification.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Additional Context */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-neutral-800 rounded-xl p-8">
              <h2 className="text-xl font-semibold text-neutral-100 mb-4">Alternative Evaluation Options</h2>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                If direct repository access isn't suitable for your needs, consider these alternative 
                evaluation approaches for the CTW Integration Platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects/ctw-integration-platform"
                  className="px-4 py-2 border border-blue-600 text-blue-300 hover:border-blue-500 hover:text-blue-200 rounded transition-colors"
                >
                  ← Project Overview
                </Link>
                <Link 
                  href="/projects"
                  className="px-4 py-2 border border-neutral-600 text-neutral-300 hover:border-neutral-500 hover:text-neutral-200 rounded transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}