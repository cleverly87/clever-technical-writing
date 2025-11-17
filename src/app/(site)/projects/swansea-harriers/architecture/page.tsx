import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "System Architecture - Swansea Harriers Analytics Platform — Andrew Cleverly",
  description: "Technical deep dive into the Swansea Harriers Rankings Platform system architecture: Flask backend, SQLite database design, RESTful API structure, and data flow.",
  keywords: "Flask, Python, SQLite, System Architecture, Full-Stack Development, REST API",
  openGraph: {
    title: "System Architecture - Swansea Harriers Rankings Platform",
    description: "Explore the technical architecture of a full-stack athletics performance tracking system built with Flask, SQLite, and modern web technologies.",
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
        <span className="text-neutral-100">Architecture</span>
      </div>
    </div>
  );
}

/**
 * Hero Section with Animated Title
 */
function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-indigo-950">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Athletic Performance Platform
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Full-Stack Web Application for Rankings & Relay Team Management
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {["Python + Flask", "SQLite", "Vanilla JavaScript", "RESTful API", "AWS Lightsail"].map((tech, index) => (
            <div
              key={tech}
              className="px-6 py-3 bg-neutral-800/50 border border-neutral-700 rounded-full font-semibold text-neutral-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Stats Grid Component
 */
function StatsGrid() {
  const stats = [
    { number: "4", label: "System Layers" },
    { number: "15+", label: "API Endpoints" },
    { number: "5", label: "Database Tables" },
    { number: "8+", label: "Event Types" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
        >
          <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
          <div className="text-neutral-300 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Architecture Layer Component
 */
function ArchitectureLayer({ 
  title, 
  icon, 
  components 
}: { 
  title: string; 
  icon: string; 
  components: { name: string; features: string[] }[] 
}) {
  return (
    <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 border-l-4 border-cyan-400 p-6 rounded-lg hover:border-l-emerald-400 hover:translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        {title}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component, index) => (
          <div
            key={component.name}
            className="bg-neutral-950/50 p-4 rounded-lg border-l-2 border-emerald-400 hover:scale-105 transition-transform duration-200"
          >
            <h4 className="text-emerald-400 font-semibold mb-2">{component.name}</h4>
            <ul className="space-y-1">
              {component.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-neutral-300 flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Data Flow Diagram
 */
function DataFlowDiagram() {
  const flowSteps = [
    "Web Scraping",
    "Data Processing", 
    "Database Storage",
    "API Layer",
    "Client Display"
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-8">
      {flowSteps.map((step, index) => (
        <div key={step} className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700 px-6 py-4 rounded-xl text-center min-w-[150px] hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
            <div className="font-semibold text-neutral-100">{step}</div>
          </div>
          {index < flowSteps.length - 1 && (
            <div className="text-cyan-400 text-2xl font-bold">→</div>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Feature Card Component
 */
function FeatureCard({ 
  title, 
  icon, 
  description, 
  technologies 
}: { 
  title: string; 
  icon: string; 
  description: string; 
  technologies: string[] 
}) {
  return (
    <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h3>
      <p className="text-neutral-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-neutral-700 text-neutral-300 text-sm rounded-full border border-neutral-600"
          >
            {tech}
          </span>
        ))}
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
      current: true 
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
      current: false 
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
                  ? 'bg-cyan-400/20 border-2 border-cyan-400 cursor-default'
                  : 'bg-neutral-800/50 border border-neutral-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-3">{showcase.icon}</div>
              <h4 className={`font-semibold ${showcase.current ? 'text-cyan-300' : 'text-cyan-400'}`}>
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

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-6">System Overview</h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            A sophisticated web application that aggregates athletic performance data, processes it into intelligent rankings, 
            and provides an advanced relay team builder with pace-based time projections.
          </p>
          <StatsGrid />
        </section>

        {/* Architecture Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">System Architecture</h2>
          
          <div className="space-y-8">
            <ArchitectureLayer
              title="Client Layer"
              icon="🖥️"
              components={[
                {
                  name: "Landing Page",
                  features: ["Access request", "Token delivery", "Responsive design"]
                },
                {
                  name: "Rankings View",
                  features: ["Multi-event tabs", "PB/SB/Recent display", "CSV export"]
                },
                {
                  name: "Team Builder SPA",
                  features: ["Drag-and-drop", "Pace calculations", "Time projections"]
                }
              ]}
            />
            
            <ArchitectureLayer
              title="API Layer"
              icon="🔗"
              components={[
                {
                  name: "REST Endpoints",
                  features: ["GET /api/rankings", "GET /api/athlete/:id", "POST /api/teams"]
                },
                {
                  name: "Authentication",
                  features: ["Token-based access", "Request validation", "Rate limiting"]
                },
                {
                  name: "Data Serialization",
                  features: ["JSON responses", "CSV generation", "Error handling"]
                }
              ]}
            />
            
            <ArchitectureLayer
              title="Business Logic Layer"
              icon="⚙️"
              components={[
                {
                  name: "Ranking Engine",
                  features: ["PB calculation", "SB tracking", "Recent form"]
                },
                {
                  name: "Team Builder",
                  features: ["Pace matching", "Time prediction", "Optimization algorithms"]
                },
                {
                  name: "Data Processing",
                  features: ["Web scraping", "Data cleaning", "Validation"]
                }
              ]}
            />
            
            <ArchitectureLayer
              title="Data Layer"
              icon="🗄️"
              components={[
                {
                  name: "SQLite Database",
                  features: ["Athlete profiles", "Performance records", "Team configurations"]
                },
                {
                  name: "File Storage",
                  features: ["CSV exports", "Static assets", "Configuration files"]
                },
                {
                  name: "External APIs",
                  features: ["Power of 10 data", "Results scraping", "Real-time updates"]
                }
              ]}
            />
          </div>
        </section>

        {/* Data Flow Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Data Flow</h2>
          <DataFlowDiagram />
          <p className="text-lg text-neutral-300 mt-6 leading-relaxed">
            Data flows seamlessly from external sources through our processing pipeline to deliver 
            real-time insights to coaches and athletes. The system ensures data integrity and 
            provides multiple access points for different user roles.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Automated Data Collection"
              icon="🔄"
              description="Scrapes performance data from multiple sources with intelligent parsing and validation."
              technologies={["Python", "BeautifulSoup", "Requests"]}
            />
            <FeatureCard
              title="Real-time Rankings"
              icon="🏆"
              description="Dynamic ranking system that updates automatically with new performance data."
              technologies={["SQLite", "Flask", "JavaScript"]}
            />
            <FeatureCard
              title="Intelligent Team Builder"
              icon="🧠"
              description="AI-powered relay team optimization based on individual paces and performance history."
              technologies={["Python", "Algorithms", "Data Analysis"]}
            />
            <FeatureCard
              title="Professional Exports"
              icon="📋"
              description="Generate publication-ready reports with advanced formatting and branding."
              technologies={["ReportLab", "PDF", "CSV"]}
            />
            <FeatureCard
              title="Responsive Interface"
              icon="📱"
              description="Mobile-first design that works seamlessly across all devices and screen sizes."
              technologies={["HTML5", "CSS3", "JavaScript"]}
            />
            <FeatureCard
              title="Scalable Architecture"
              icon="📈"
              description="Designed for growth with modular components and efficient database queries."
              technologies={["AWS", "Docker", "CI/CD"]}
            />
          </div>
        </section>
      </div>

      <ShowcaseNavigation />
      <Footer />
    </main>
  );
}