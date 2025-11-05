import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Link from "next/link";
import Image from "next/image";

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
                <div className="aspect-square bg-neutral-800 rounded-lg border border-neutral-700 overflow-hidden mb-6">
                  <Image
                    src="/images/Profile_image.jpeg"
                    alt="Andrew Cleverly - API Technical Writer and Documentation Systems Architect"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Profile Links */}
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/andrewcleverly/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                  
                  <a 
                    href="https://github.com/cleverly87" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 rounded-lg font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                  </a>
                  
                  <a 
                    href="/cv-andrew-cleverly.pdf" 
                    download
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 rounded-lg font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold text-neutral-100 mb-6">About Andrew Cleverly</h1>
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                  <p className="text-xl text-neutral-200">
                    Senior API Technical Writer and Documentation Systems Architect — a scientist turned documentation strategist.
                  </p>
                  <p>
                    My background in research and systems analysis means I don't approach problems conventionally. 
                    I specialise in learning fast, understanding deeply, and building documentation ecosystems that 
                    operate like infrastructure — scalable, measurable, and aligned with business goals.
                  </p>
                  <p>
                    I design and build API documentation systems that connect engineering, product, and business — 
                    unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one. 
                    Every implementation aligns documentation delivery with strategic objectives and AI-ready knowledge flows.
                  </p>
                  <p className="text-lg text-neutral-200 font-medium border-l-2 border-neutral-600 pl-4">
                    If you want the same as everyone else, fine. But if you want to stand out, you need to think differently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doc-as-Code Philosophy */}
        <section className="py-16 px-6 border-b border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-8">Doc-as-Code Philosophy</h2>
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                I operate within a <strong className="text-neutral-200">Doc-as-Code philosophy</strong> — documentation is treated as a first-class 
                engineering product. Version control, CI/CD integration, and automated validation bring the same rigor 
                and traceability as software development.
              </p>
              <p>
                Through custom automation, I extend this model to produce offline deliverables such as PDFs directly 
                from live documentation sources, maintaining complete parity between online portals and distributed assets.
              </p>
              <p>
                This approach gives organisations <strong className="text-neutral-200">auditability, rollback capability, and repeatable quality</strong> — 
                ensuring brand consistency, compliance reliability, and global-scale governance. It replaces ad-hoc 
                documentation with a disciplined, traceable process that reflects enterprise maturity.
              </p>
              
              {/* Doc-as-Code Process Visual */}
              <div className="mt-8 p-6 bg-neutral-950 rounded-lg border border-neutral-800">
                <h4 className="text-lg font-semibold text-neutral-200 mb-4 text-center">Doc-as-Code Pipeline</h4>
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-neutral-800 rounded text-neutral-300">Author</span>
                    <span className="text-neutral-500">→</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-neutral-800 rounded text-neutral-300">Review</span>
                    <span className="text-neutral-500">→</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-neutral-800 rounded text-neutral-300">Build</span>
                    <span className="text-neutral-500">→</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-neutral-800 rounded text-neutral-300">Publish</span>
                    <span className="text-neutral-500">→</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-neutral-700 rounded text-neutral-200">Archive (Rollback)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="py-16 px-6 bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Operating Principles</h2>
            <div className="text-center mb-8">
              <p className="text-neutral-300">My work is guided by four core principles:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-3">Learn fast, think differently</h3>
                <p className="text-neutral-300">
                  Scientific training drives first-principles analysis, experimentation, and creative problem-solving.
                </p>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-3">Docs as infrastructure</h3>
                <p className="text-neutral-300">
                  Governance, automation, and analytics woven together for reliability and scale.
                </p>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-3">Business alignment first</h3>
                <p className="text-neutral-300">
                  Documentation serves company strategy, not just code output.
                </p>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-3">Doc-as-Code discipline</h3>
                <p className="text-neutral-300">
                  Version control, rollback, and governed pipelines ensure reliability and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">How I Work</h2>
            <div className="text-center mb-8">
              <p className="text-neutral-300">I approach every engagement as a complete system — from technical design to business outcome:</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-200">01</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Discover</h3>
                <p className="text-neutral-400 text-sm">
                  Analyse current documentation systems, map stakeholders, identify risks and opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-200">02</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Design</h3>
                <p className="text-neutral-400 text-sm">
                  Plan governance models, content architecture, and DocOps automation that align with product strategy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-200">03</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Implement</h3>
                <p className="text-neutral-400 text-sm">
                  Build pipelines, SDK generation, validation workflows, and developer-facing portals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-neutral-200">04</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Operate</h3>
                <p className="text-neutral-400 text-sm">
                  Monitor analytics, enforce governance, and evolve content structures to meet changing business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Core Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Documentation Infrastructure</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Doc-as-Code architecture & governance</li>
                  <li>• OpenAPI 3.0/3.1 specification design with version migration strategies</li>
                  <li>• Redocly ecosystem expertise (Expert level) with custom element development</li>
                  <li>• Multi-environment documentation architecture aligned with dev workflows</li>
                  <li>• Source-code co-location strategies and content structure optimization</li>
                  <li>• Custom QA pipelines with automated validation and conformance testing</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Developer Experience Design</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Interactive documentation with try-it-out functionality</li>
                  <li>• SDK generation and testing automation</li>
                  <li>• Developer onboarding optimization with progressive disclosure</li>
                  <li>• API testing frameworks and validation workflows</li>
                  <li>• Performance analytics and user behavior insights</li>
                  <li>• Custom documentation tooling and developer portal extensions</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Technical Systems & DevOps</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• GitHub/Git/Azure DevOps CI/CD pipeline architecture</li>
                  <li>• AWS cloud infrastructure (S3, CloudFront, Route 53, Lambda)</li>
                  <li>• Python data processing and automation systems</li>
                  <li>• TypeScript/Node.js application development</li>
                  <li>• Next.js portfolio platforms with automated deployment</li>
                  <li>• Database design and API integration patterns</li>
                </ul>
              </div>
              
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">Governance & Training</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Custom style guide definition and enforcement strategies</li>
                  <li>• Team training programs and documentation best practices</li>
                  <li>• Pipeline-enforced standards with automated quality gates</li>
                  <li>• Enterprise API strategy and governance frameworks</li>
                  <li>• Regulatory compliance and accessibility implementation</li>
                  <li>• AI-ready content structuring and semantic markup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-16 px-6 bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Professional Background</h2>
            
            <div className="text-neutral-300 leading-relaxed space-y-6">
              <p>
                I've built documentation systems at every scale — from lightweight Stoplight demos to enterprise-grade 
                Redocly Realm portals and automated CI/CD pipelines.
              </p>
              <p>
                My experience spans fintech, scientific R&D, analytics, and automation, combining technical accuracy 
                with long-term strategy. I've reduced developer onboarding times by up to 80%, cut support tickets by 40%, 
                and delivered global documentation infrastructures that scale with product growth.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Overview */}
        <section className="py-16 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-100 mb-6">Systems in Production</h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              From enterprise API platforms serving millions of requests to trading systems handling real capital, 
              these implementations demonstrate the full spectrum of documentation-as-infrastructure principles in practice.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-200 mb-2">5</div>
                <div className="text-sm text-neutral-400">Production Systems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-200 mb-2">4</div>
                <div className="text-sm text-neutral-400">Different Tech Stacks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-200 mb-2">100%</div>
                <div className="text-sm text-neutral-400">OpenAPI Coverage</div>
              </div>
            </div>
            
            <Link 
              href="/projects" 
              className="inline-flex items-center px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg font-semibold transition-colors"
            >
              Explore Technical Case Studies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Tooling I've Built */}
        <section className="py-16 px-6 border-b border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 text-center mb-12">Tooling I've Built</h2>
            <div className="text-center mb-8">
              <p className="text-neutral-300">
                Custom automation tools that power documentation workflows and demonstrate technical depth beyond strategy:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://github.com/cleverly87/DocCraft-PDF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors group block"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-neutral-100 transition-colors">
                    DocCraft PDF Generator
                  </h3>
                  <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  Streamlined pipeline using Pandoc and XeLaTeX to convert OpenAPI-aligned markdown into branded PDFs with ToC, styling, and automation-ready structure.
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </div>
              </a>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-neutral-100 transition-colors">
                    SDK Generator
                  </h3>
                  <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  OpenAPI-based CLI for generating language-specific SDKs with consistent structure and built-in tests.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-neutral-100 transition-colors">
                    OpenAPI Validator
                  </h3>
                  <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Internal tool that validates specs for CI/CD readiness, governance rules, and AI ingestion compliance.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-neutral-100 transition-colors">
                    Interactive Changelog Builder
                  </h3>
                  <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Converts diffed OpenAPI specs into structured changelogs (Markdown + JSON) for release automation.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-neutral-500">
                These tools demonstrate hands-on technical execution alongside strategic consultation
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 px-6 bg-neutral-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-100 mb-8">Ready to Transform Your Documentation?</h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              If your organisation treats documentation as an afterthought, I can help you turn it into infrastructure — 
              a governed, measurable, and automated system that scales with your products and your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 rounded-lg font-semibold transition-colors"
            >
              Start the Conversation
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
