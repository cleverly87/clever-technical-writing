import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "PDF Export System - Swansea Harriers Analytics Platform — Andrew Cleverly",
  description: "Professional PDF generation system using ReportLab for creating branded athletics reports, team sheets, and performance analytics documents.",
  keywords: "PDF Generation, ReportLab, Document Automation, Professional Reports, Data Visualization",
  openGraph: {
    title: "PDF Export System - Swansea Harriers Rankings Platform",
    description: "Explore the automated PDF generation system for creating professional athletics reports and documentation.",
    type: "article",
  }
};

/**
 * Breadcrumb Navigation Component
 */
function Breadcrumb() {
  return (
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
        <span className="text-neutral-100">Export System</span>
      </div>
    </div>
  );
}

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-rose-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-cyan-400 bg-clip-text text-transparent">
          PDF Export System
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Professional Report Generation with ReportLab
        </p>
      </div>
    </div>
  );
}

/**
 * Navigation to Other Showcases
 */
function ShowcaseNavigation() {
  const showcases = [
    { 
      name: "System Architecture", 
      icon: "🏗️", 
      href: "/projects/swansea-harriers/architecture",
      current: false 
    },
    { 
      name: "AWS Deployment", 
      icon: "☁️", 
      href: "/projects/swansea-harriers/deployment",
      current: false 
    },
    { 
      name: "Team Builder", 
      icon: "👥", 
      href: "/projects/swansea-harriers/teambuilder",
      current: false 
    },
    { 
      name: "Export System", 
      icon: "📊", 
      href: "/projects/swansea-harriers/export-system",
      current: true 
    }
  ];

  return (
    <section className="py-16 bg-neutral-950/60 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center text-neutral-100 mb-8">
          Explore More Technical Deep Dives
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcases.map((showcase) => (
            <Link
              key={showcase.name}
              href={showcase.href}
              className={`block p-6 rounded-xl text-center transition-all duration-300 ${
                showcase.current
                  ? 'bg-rose-400/20 border-2 border-rose-400 cursor-default'
                  : 'bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-rose-400/10 hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-3">{showcase.icon}</div>
              <h4 className={`font-semibold ${showcase.current ? 'text-rose-300' : 'text-cyan-400'}`}>
                {showcase.name}
              </h4>
              {showcase.current && (
                <div className="text-xs text-neutral-400 mt-2">Current Page</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExportSystemPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-6">Export System Overview</h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            The PDF Export System transforms raw athletics data into professional, branded reports 
            suitable for coaches, athletes, and official documentation purposes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-rose-400 mb-2">50+</div>
              <div className="text-neutral-300">Document Templates</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-neutral-300">Reports Generated</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 rounded-xl">
              <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;5s</div>
              <div className="text-neutral-300">Generation Time</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Professional Quality Reports</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Every document generated meets professional printing standards with high-resolution graphics, 
            consistent branding, and archival-quality PDF output suitable for official documentation 
            and long-term storage. The system uses ReportLab to create publication-ready documents
            with sophisticated layouts and data visualizations.
          </p>
        </section>
      </div>

      <ShowcaseNavigation />
      <Footer />
    </main>
  );
}