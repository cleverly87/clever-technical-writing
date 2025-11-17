import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Swansea Harriers Analytics Platform — Andrew Cleverly" };

/**
 * ProjectHeader - Reusable header component for project pages
 */
function ProjectHeader({ 
  title, 
  subtitle, 
  category, 
  status,
  techStack 
}: {
  title: string;
  subtitle: string;
  category: string;
  status: string;
  techStack: string[];
}) {
  return (
    <div className="bg-neutral-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/projects" 
          className="text-sm text-neutral-400 hover:text-neutral-200 mb-4 inline-block"
        >
          ← Back to Projects
        </Link>
        
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">{category}</span>
            <span className="px-3 py-1 bg-neutral-700 text-neutral-200 text-xs rounded-full">{status}</span>
          </div>
          <h1 className="text-4xl font-bold text-neutral-100 mb-3">{title}</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">{subtitle}</p>
        </div>

        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 mb-3">TECHNOLOGY STACK</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 border border-neutral-700 text-neutral-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col gap-3">
                <Link 
                  href="/projects/swansea-harriers/private-access"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-purple-600 hover:border-purple-500 text-purple-300 hover:text-purple-200 text-sm rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Request Repository Access
                </Link>
                
                {/* Production Link - Coming Soon */}
                <button 
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-700 border border-neutral-600 text-neutral-500 text-sm rounded cursor-not-allowed"
                  title="Production deployment coming soon"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProjectSection - Reusable section component with consistent styling
 */
function ProjectSection({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode; 
}) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}



export default function SwanseaHarriersProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Swansea Harriers Analytics Platform"
        subtitle="Comprehensive athlete performance analytics system integrating Power of 10 API data with custom Python data processing, SQL database architecture, and intuitive management interfaces for coaches and team managers."
        category="Sports Analytics"
        status="Production"
        techStack={[
          "Python",
          "Flask",
          "SQLite", 
          "AWS Lightsail",
          "Nginx",
          "SSL/TLS",
          "Power of 10 API",
          "pandas",
          "ReportLab",
          "HTML/CSS/JavaScript",
          "Chart.js",
          "REST API",
          "Ubuntu Server"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Swansea Harriers needed a comprehensive system to track athlete performance, 
                analyze training progress, and provide coaches with actionable insights. The 
                existing manual processes were time-consuming and limited analytical capabilities.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Solution</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                A full-stack web application that automates data collection, provides intelligent 
                analytics, and delivers professional-quality reporting tools for athletic performance management.
              </p>
              
              <Link 
                href="/projects/swansea-harriers/overview"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-colors"
              >
                <span>🔍</span>
                Explore Technical Deep Dives
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Achievements</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-cyan-400/50 transition-colors">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-neutral-400">Athletes tracked across all categories</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-emerald-400/50 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400">15+ APIs</div>
                  <div className="text-sm text-neutral-400">RESTful endpoints for comprehensive data access</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-orange-400/50 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">99.9%</div>
                  <div className="text-sm text-neutral-400">Production uptime on AWS infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Core Features & Business Value">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/projects/swansea-harriers/architecture"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">System Architecture</h3>
              <p className="text-neutral-300 text-sm mb-4">
                4-layer architecture with Flask backend, SQLite database, and 15+ RESTful API endpoints.
              </p>
              <div className="text-xs text-cyan-400 font-medium">View Technical Details →</div>
            </Link>
            
            <Link 
              href="/projects/swansea-harriers/deployment"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">AWS Deployment</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Production deployment on AWS Lightsail with Nginx, SSL, and 99.9% uptime achievement.
              </p>
              <div className="text-xs text-orange-400 font-medium">View Deployment Guide →</div>
            </Link>
            
            <Link 
              href="/projects/swansea-harriers/teambuilder"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Team Builder</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Intelligent relay team optimization with drag-and-drop interface and pace calculations.
              </p>
              <div className="text-xs text-purple-400 font-medium">View Algorithm Details →</div>
            </Link>
            
            <Link 
              href="/projects/swansea-harriers/export-system"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-rose-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-rose-400 mb-3">PDF Reports</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Professional document generation using ReportLab with 50+ branded templates.
              </p>
              <div className="text-xs text-rose-400 font-medium">View Export System →</div>
            </Link>
          </div>
        </ProjectSection>

        <ProjectSection title="Business Impact & User Benefits">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">For Coaches & Managers</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Time Savings:</strong> Automated data collection eliminates manual entry and reduces administrative overhead by 80%
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Data-Driven Decisions:</strong> Performance analytics provide insights for training optimization and competition strategies  
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Professional Reports:</strong> Generate branded team sheets and performance reports for stakeholders
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">For Athletes</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Performance Tracking:</strong> Real-time access to personal bests, season bests, and performance trends
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Goal Setting:</strong> Clear visualization of progress toward qualification standards and targets
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Team Selection:</strong> Transparent relay team selection process based on objective performance data
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Want to See the Technical Details?</h3>
            <p className="text-neutral-300 mb-6">
              Explore comprehensive technical documentation covering system architecture, deployment strategies, 
              algorithm implementations, and live application screenshots.
            </p>
            <Link 
              href="/projects/swansea-harriers/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-colors"
            >
              <span>🚀</span>
              View Complete Technical Overview
            </Link>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}