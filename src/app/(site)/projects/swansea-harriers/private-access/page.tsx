"use client";
import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function SwanseaHarriersPrivateAccessPage() {
  // Set page title on client side
  useEffect(() => {
    document.title = "Swansea Harriers Repository Access Request — Andrew Cleverly";
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
      <div className="bg-neutral-950/80 border-b border-cyan-400/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
          <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Portfolio
          </Link>
          <span className="text-neutral-400">/</span>
          <Link href="/projects/swansea-harriers" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Swansea Harriers
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
            Swansea Harriers Repository Access
          </h1>
          <p className="text-xl text-neutral-300 mb-8">
            Request access to proprietary athletic performance platform source code
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
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Protected Intellectual Property</h3>
                <p className="text-neutral-300 leading-relaxed">
                  This repository contains proprietary algorithms and commercial-grade athletic performance tracking systems 
                  with significant intellectual property value. Access is restricted to qualified developers and potential collaborators.
                </p>
              </div>
            </div>
          </div>

          {/* Repository Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Repository Contents</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Advanced athletic performance algorithms
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Proprietary relay team optimization logic
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Custom data processing pipelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Production-ready Flask application architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Professional PDF generation systems
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Access Requirements</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Professional development background
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Legitimate business or educational purpose
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Agreement to intellectual property terms
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Non-disclosure agreement compliance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Respect for commercial potential
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Terms */}
          <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-700 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Access Terms & Conditions</h3>
            
            <div className="space-y-6 text-neutral-300">
              <div className="bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded">
                <h4 className="font-semibold text-rose-200 mb-2">🔒 Intellectual Property Protection</h4>
                <p className="text-sm leading-relaxed">
                  The Swansea Harriers Athletic Performance Platform contains proprietary algorithms, optimization techniques, 
                  and business logic developed for commercial application. All code, algorithms, and methodologies are protected 
                  intellectual property with significant commercial value.
                </p>
              </div>
              
              <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <h4 className="font-semibold text-orange-200 mb-2">⚖️ Non-Disclosure Agreement</h4>
                <p className="text-sm leading-relaxed">
                  By requesting access, you agree not to disclose, reproduce, or distribute any portion of the codebase 
                  without explicit written permission. This includes but is not limited to algorithms, database structures, 
                  API designs, and business logic implementations.
                </p>
              </div>
              
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-semibold text-purple-200 mb-2">💼 Commercial Use Restrictions</h4>
                <p className="text-sm leading-relaxed">
                  The codebase contains commercially viable athletic performance tracking solutions. Any commercial use, 
                  derivative works, or competitive applications require separate licensing agreements and are strictly prohibited 
                  under this access agreement.
                </p>
              </div>
              
              <div className="bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded">
                <h4 className="font-semibold text-cyan-200 mb-2">📋 Professional Use Only</h4>
                <p className="text-sm leading-relaxed">
                  Repository access is granted exclusively for professional evaluation, educational purposes, or potential 
                  collaboration discussions. Access is not granted for competitive analysis, reverse engineering, or 
                  unauthorized commercial development.
                </p>
              </div>
            </div>
          </div>

          {/* Access Request Form */}
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Repository Access Request</h3>
            
            {status === "success" && (
              <div className="bg-emerald-900/30 border border-emerald-500 p-4 rounded-lg mb-6">
                <p className="text-emerald-200 font-medium">
                  ✅ Access request submitted successfully! You will receive a response within 24-48 hours with repository access details and any additional requirements.
                </p>
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg mb-6">
                <p className="text-red-200 font-medium">
                  ❌ There was an error submitting your request. Please try again or contact directly.
                </p>
              </div>
            )}
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-2">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-neutral-200 mb-2">
                  Organization/Company *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Company, University, or Organization"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-neutral-200 mb-2">
                  Professional Role *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Software Developer, Technical Lead, CTO, etc."
                />
              </div>
              
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-neutral-200 mb-2">
                  Access Purpose *
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select primary purpose</option>
                  <option value="professional-evaluation">Professional Code Evaluation</option>
                  <option value="educational-research">Educational/Research Purpose</option>
                  <option value="potential-collaboration">Potential Collaboration Discussion</option>
                  <option value="technical-consultation">Technical Consultation</option>
                  <option value="hiring-assessment">Technical Hiring Assessment</option>
                  <option value="other">Other (please specify below)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-neutral-200 mb-2">
                  Detailed Request Information *
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Please provide specific details about your access purpose, intended use, and professional background. Include information about your experience with athletic performance systems, data processing, or related technologies if applicable."
                />
              </div>
              
              <div>
                <label htmlFor="github" className="block text-sm font-medium text-neutral-200 mb-2">
                  GitHub Username
                </label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your GitHub username for repository invitation"
                />
              </div>
              
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-neutral-200 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              {/* Agreement Checkboxes */}
              <div className="space-y-4 pt-6 border-t border-neutral-600">
                <h4 className="text-lg font-semibold text-neutral-100">Required Agreements</h4>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="ip-agreement"
                    name="ip_agreement"
                    required
                    className="mt-1 w-4 h-4 text-purple-600 bg-neutral-900 border-neutral-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="ip-agreement" className="text-sm text-neutral-300">
                    I acknowledge that this repository contains protected intellectual property with commercial value and agree to respect all IP rights.
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="nda-agreement"
                    name="nda_agreement"
                    required
                    className="mt-1 w-4 h-4 text-purple-600 bg-neutral-900 border-neutral-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="nda-agreement" className="text-sm text-neutral-300">
                    I agree to maintain confidentiality and not disclose, reproduce, or distribute any portion of the codebase without explicit permission.
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="commercial-agreement"
                    name="commercial_agreement"
                    required
                    className="mt-1 w-4 h-4 text-purple-600 bg-neutral-900 border-neutral-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="commercial-agreement" className="text-sm text-neutral-300">
                    I understand that commercial use or derivative works require separate licensing and are prohibited under this access agreement.
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="professional-agreement"
                    name="professional_agreement"
                    required
                    className="mt-1 w-4 h-4 text-purple-600 bg-neutral-900 border-neutral-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="professional-agreement" className="text-sm text-neutral-300">
                    I confirm that my request is for legitimate professional, educational, or collaboration purposes only.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  isSubmitting 
                    ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
                }`}
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Access Request'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm">
              For questions about repository access or licensing opportunities, 
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 ml-1">
                contact directly
              </Link>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}