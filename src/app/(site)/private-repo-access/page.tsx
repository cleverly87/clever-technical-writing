"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PrivateRepoAccessPage() {
  // Set page title on client side
  useEffect(() => {
    document.title = "Private Repository Access Request — Andrew Cleverly";
  }, []);
  const [status, setStatus] = useState<null | string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch("https://formspree.io/f/xyzbrrwk", {
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
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">
            Private Repository Access
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            You've requested access to a private repository containing proprietary trading algorithms and strategies. 
            This code represents significant intellectual property and is protected accordingly.
          </p>
        </div>
      </section>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Explanation Section */}
          <section className="mb-16">
            <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800 mb-8">
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Why This Repository is Private</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    Proprietary Trading Strategies
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    The repository contains custom algorithmic trading strategies, risk management systems, 
                    and signal processing logic that represents years of development and testing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Intellectual Property Protection
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Financial trading algorithms require careful IP protection. The public case study 
                    demonstrates architectural capabilities while protecting competitive advantages.
                  </p>
                </div>
              </div>
            </div>

            {/* What You Can See */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-xl p-8 border border-neutral-800">
              <h3 className="text-xl font-semibold text-neutral-100 mb-6">What You Can Access</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-neutral-200 mb-2">Detailed Case Study</h4>
                  <p className="text-sm text-neutral-400">
                    <Link href="/projects/oanda" className="text-blue-400 hover:text-blue-300">
                      View the complete case study
                    </Link> showing architecture, API integration, and system design.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-neutral-200 mb-2">Technical Documentation</h4>
                  <p className="text-sm text-neutral-400">
                    Comprehensive documentation of the system architecture, API workflows, and deployment patterns.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-neutral-200 mb-2">Direct Discussion</h4>
                  <p className="text-sm text-neutral-400">
                    <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                      Contact me directly
                    </Link> to discuss the project, methodologies, and technical approaches.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Access Request Form */}
          <section>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Request Repository Access</h2>
                <p className="text-neutral-400">
                  For legitimate business inquiries, potential collaborations, or due diligence purposes, 
                  please complete this request form. Access is granted on a case-by-case basis.
                </p>
              </div>

              {status === "success" ? (
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Request Submitted</h3>
                  <p className="text-green-400">
                    Your access request has been received and will be reviewed within 48 hours. 
                    I'll contact you directly with next steps.
                  </p>
                  <Link 
                    href="/projects/oanda"
                    className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    ← Back to OANDA Project Case Study
                  </Link>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name *</label>
                      <input 
                        id="name"
                        name="name" 
                        placeholder="Your full name" 
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none transition-colors" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address *</label>
                      <input 
                        id="email"
                        type="email" 
                        name="email" 
                        placeholder="your.email@company.com" 
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none transition-colors" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">Company/Organization *</label>
                      <input 
                        id="company"
                        name="company" 
                        placeholder="Your company name" 
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none transition-colors" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-neutral-300 mb-2">Your Role/Title *</label>
                      <input 
                        id="role"
                        name="role" 
                        placeholder="e.g., CTO, Technical Lead, Investor" 
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none transition-colors" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-neutral-300 mb-2">Access Purpose *</label>
                    <select 
                      id="purpose"
                      name="purpose" 
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 focus:border-orange-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select the purpose of your request</option>
                      <option value="business-collaboration">Business Collaboration Opportunity</option>
                      <option value="technical-due-diligence">Technical Due Diligence</option>
                      <option value="hiring-evaluation">Hiring/Contract Evaluation</option>
                      <option value="academic-research">Academic Research</option>
                      <option value="peer-review">Peer Technical Review</option>
                      <option value="investment-evaluation">Investment Evaluation</option>
                      <option value="other">Other (please explain in details)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-neutral-300 mb-2">Request Details *</label>
                    <textarea 
                      id="details"
                      name="details" 
                      placeholder="Please provide specific details about your request, including your business context, what aspects of the code you need to review, intended use, and any relevant background information that would support your access request." 
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-orange-500 focus:outline-none transition-colors h-32" 
                      required 
                    />
                  </div>

                  <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                    <h4 className="font-semibold text-neutral-200 mb-4 flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      Non-Disclosure Agreement & Access Terms
                    </h4>
                    
                    <div className="space-y-3 text-sm text-neutral-400 mb-4">
                      <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-red-600">
                        <h5 className="font-semibold text-neutral-200 mb-2">CONFIDENTIALITY OBLIGATIONS</h5>
                        <div className="space-y-1">
                          <p>• All code, algorithms, documentation, and related materials are CONFIDENTIAL and PROPRIETARY</p>
                          <p>• You agree to maintain strict confidentiality and not disclose any information to third parties</p>
                          <p>• Confidentiality obligations survive termination of access and continue indefinitely</p>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-orange-600">
                        <h5 className="font-semibold text-neutral-200 mb-2">PROHIBITED ACTIVITIES</h5>
                        <div className="space-y-1">
                          <p>• <strong>NO COPYING:</strong> Unauthorized duplication, download, or reproduction of any code or materials</p>
                          <p>• <strong>NO DISTRIBUTION:</strong> Sharing, transmission, or disclosure to any third party</p>
                          <p>• <strong>NO COMMERCIAL USE:</strong> Using any concepts, algorithms, or code for commercial purposes</p>
                          <p>• <strong>NO REVERSE ENGINEERING:</strong> Analyzing, decompiling, or attempting to derive source logic</p>
                          <p>• <strong>NO DERIVATIVE WORKS:</strong> Creating modifications or works based on the proprietary materials</p>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-blue-600">
                        <h5 className="font-semibold text-neutral-200 mb-2">INTELLECTUAL PROPERTY PROTECTION</h5>
                        <div className="space-y-1">
                          <p>• All trading strategies, algorithms, and code remain exclusive property of Andrew Cleverly</p>
                          <p>• No license, right, or interest in the intellectual property is granted</p>
                          <p>• Access is limited to evaluation and due diligence purposes only</p>
                          <p>• Any breach may result in immediate legal action and claims for damages</p>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-purple-600">
                        <h5 className="font-semibold text-neutral-200 mb-2">LEGAL ENFORCEMENT</h5>
                        <div className="space-y-1">
                          <p>• Violations constitute breach of contract and may result in injunctive relief</p>
                          <p>• Unauthorized use may be prosecuted under applicable intellectual property laws</p>
                          <p>• You agree to jurisdiction in Wales, UK for any legal disputes</p>
                          <p>• Legal fees and damages may be sought for any violations</p>
                        </div>
                      </div>
                      
                      <div className="bg-red-900/20 rounded-lg p-4 border border-red-700">
                        <h5 className="font-semibold text-red-300 mb-2">⚠️ IMPORTANT NOTICE</h5>
                        <p className="text-red-400">
                          This repository contains proprietary financial algorithms with significant commercial value. 
                          Access is provided under strict confidentiality terms. Any misuse will be pursued to the full extent of the law.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          name="agree_nda" 
                          required
                          className="mt-1 w-4 h-4 text-orange-600 bg-neutral-900 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-300">
                          <strong>I agree to the Non-Disclosure Agreement</strong> and understand that all materials are confidential and proprietary. I will not copy, distribute, or disclose any information to third parties. *
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          name="agree_no_commercial_use" 
                          required
                          className="mt-1 w-4 h-4 text-orange-600 bg-neutral-900 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-300">
                          <strong>I will not use any code or concepts commercially</strong> without explicit written permission from Andrew Cleverly. *
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          name="agree_legal_consequences" 
                          required
                          className="mt-1 w-4 h-4 text-orange-600 bg-neutral-900 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-300">
                          <strong>I understand the legal consequences</strong> of violating these terms and agree to jurisdiction in Wales, UK for any disputes. *
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 disabled:text-neutral-500 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Submit Access Request
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <div className="bg-red-900/20 border border-red-700 text-red-300 p-4 rounded-lg text-sm text-center">
                      Something went wrong. Please try again or contact me directly.
                    </div>
                  )}
                </form>
              )}
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}