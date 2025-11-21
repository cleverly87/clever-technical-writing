"use client";
import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function PsychSkillsPrivateAccessPage() {
  // Set page title on client side
  useEffect(() => {
    document.title = "Psych-Skills Repository Access Request — Andrew Cleverly";
  }, []);
  const [status, setStatus] = useState<null | string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch("https://formspree.io/f/meovdbln", {
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
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-neutral-950/80 border-b border-emerald-400/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
          <Link href="/projects" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            ← Portfolio
          </Link>
          <span className="text-neutral-400">/</span>
          <Link href="/projects/psych-skills" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Psych-Skills
          </Link>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-100">Repository Access</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">
            Psych-Skills Repository Access
          </h1>
          <p className="text-xl text-neutral-300 mb-8">
            Request access to enterprise healthcare SaaS platform source code
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-purple-900/30 to-rose-900/30 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Protected Commercial Software</h3>
                <p className="text-neutral-300 leading-relaxed">
                  This repository contains proprietary healthcare SaaS platform code with enterprise-grade security 
                  implementations and commercial intellectual property. Access is restricted to qualified developers, 
                  potential clients, and technical evaluators.
                </p>
              </div>
            </div>
          </div>

          {/* Why Private Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Repository Protection
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Enterprise security architecture and authentication flows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Proprietary booking algorithms and business logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Custom CMS and admin dashboard implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Commercial database schema and API architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                What You'll Gain Access To
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Complete Next.js 14 + TypeScript source code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Prisma database schemas and migration history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Security implementation patterns and rate limiting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Comprehensive inline documentation and architecture notes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Public Resources */}
          <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-500/30 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Public Technical Documentation
            </h3>
            <p className="text-neutral-300 mb-6">
              While the source code is private, comprehensive technical documentation is publicly available to 
              demonstrate architecture, implementation patterns, and technical decision-making.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link 
                href="/projects/psych-skills/architecture"
                className="bg-neutral-800/50 border border-neutral-700 hover:border-emerald-400/50 p-4 rounded-lg text-center transition-colors group"
              >
                <div className="text-3xl mb-2">🏗️</div>
                <div className="text-emerald-400 group-hover:text-emerald-300 font-medium">Architecture Docs</div>
              </Link>
              <Link 
                href="/projects/psych-skills/security"
                className="bg-neutral-800/50 border border-neutral-700 hover:border-rose-400/50 p-4 rounded-lg text-center transition-colors group"
              >
                <div className="text-3xl mb-2">🔐</div>
                <div className="text-rose-400 group-hover:text-rose-300 font-medium">Security Details</div>
              </Link>
              <Link 
                href="/projects/psych-skills/features"
                className="bg-neutral-800/50 border border-neutral-700 hover:border-cyan-400/50 p-4 rounded-lg text-center transition-colors group"
              >
                <div className="text-3xl mb-2">📅</div>
                <div className="text-cyan-400 group-hover:text-cyan-300 font-medium">Feature Breakdown</div>
              </Link>
            </div>
          </div>

          {/* Access Request Form */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Request Repository Access</h2>
            
            {status === "success" && (
              <div className="bg-emerald-900/30 border border-emerald-500 text-emerald-200 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Request submitted successfully! I'll review and respond within 48 hours.</span>
                </div>
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-rose-900/30 border border-rose-500 text-rose-200 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Submission failed. Please try again or contact me directly.</span>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Hidden field to identify project */}
              <input type="hidden" name="project" value="Psych-Skills Platform" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium text-neutral-300 mb-2">
                  GitHub Username *
                </label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="@username"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-neutral-300 mb-2">
                  Professional Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select your role...</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Technical Recruiter">Technical Recruiter</option>
                  <option value="Engineering Manager">Engineering Manager</option>
                  <option value="Potential Client">Potential Client</option>
                  <option value="Healthcare Professional">Healthcare Professional</option>
                  <option value="Academic/Researcher">Academic/Researcher</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-neutral-300 mb-2">
                  Purpose of Access *
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Please describe why you're requesting access to this repository. Include specific areas of interest (e.g., security architecture, booking system, admin dashboard)."
                />
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-sm font-semibold text-neutral-200 mb-3">Access Agreement</h4>
                <div className="space-y-2 text-sm text-neutral-400 mb-4">
                  <p>By requesting access, you acknowledge and agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Use code for evaluation and learning purposes only</li>
                    <li>Not redistribute or share source code with third parties</li>
                    <li>Not use proprietary algorithms in commercial projects without permission</li>
                    <li>Respect intellectual property and licensing restrictions</li>
                  </ul>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreement"
                    required
                    className="mt-1 w-4 h-4 bg-neutral-900 border-neutral-600 rounded text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-neutral-300">
                    I agree to the access terms and will use the code responsibly *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:from-neutral-700 disabled:to-neutral-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Submit Access Request
                  </>
                )}
              </button>

              <p className="text-xs text-neutral-500 text-center">
                Requests are typically reviewed within 48 hours. You'll receive an email with next steps.
              </p>
            </form>
          </div>

          {/* Contact Alternative */}
          <div className="mt-8 text-center">
            <p className="text-neutral-400 mb-4">
              Prefer to discuss access directly?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me Directly
            </Link>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
