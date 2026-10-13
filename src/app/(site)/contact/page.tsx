"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | string>(null);

  // Set page title on client side
  useEffect(() => {
    document.title = "Contact — Andrew Cleverly";
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mzzdvlwe", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      if (res.ok) {
        setStatus("Thanks — I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again or refresh the page.");
      }
    } catch {
      setStatus("Network error. Please check your connection and try again.");
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Whether it's a role, a collaboration, or a question about one of my projects, 
            I'd be glad to hear from you.
          </p>
        </div>
      </section>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Send a Message</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                  <input 
                    id="name"
                    name="name" 
                    placeholder="Your name" 
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="your.email@company.com" 
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">Company (Optional)</label>
                  <input 
                    id="company"
                    name="company" 
                    placeholder="Where you work" 
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-neutral-300 mb-2">Reason for Getting in Touch</label>
                  <select 
                    id="reason"
                    name="reason" 
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a reason</option>
                    <option value="role">Role or job opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="project-question">Question about a project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="What would you like to talk about?" 
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none transition-colors h-32" 
                    required 
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
                {status && (
                  <div className={`p-4 rounded-lg ${status.includes('Thanks') ? 'bg-green-900/20 border border-green-700 text-green-300' : 'bg-red-900/20 border border-red-700 text-red-300'}`}>
                    <p className="text-sm">{status}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information & Context */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6">What to Expect</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-1">Quick Response</h3>
                    <p className="text-sm text-neutral-400">I read every message and reply as soon as I can.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-1">Private Repositories</h3>
                    <p className="text-sm text-neutral-400">Some project source code is private. You can request access from the relevant project page.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-200 mb-1">Happy to Talk Shop</h3>
                    <p className="text-sm text-neutral-400">Questions about API documentation, DocOps, or how a project was built are always welcome.</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-neutral-200 mb-3">Professional Networks</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <Link href="https://www.linkedin.com/in/andrewcleverly/" target="_blank" className="text-neutral-300 hover:text-blue-400 transition-colors">
                      Connect on LinkedIn
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <Link href="https://github.com/cleverly87" target="_blank" className="text-neutral-300 hover:text-blue-400 transition-colors">
                      View GitHub Portfolio
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-neutral-400 mb-4">
                  Based in Carmarthenshire, UK
                </p>
                <Link 
                  href="/insights"
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read my latest insights while you wait →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
