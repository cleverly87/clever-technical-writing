import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Swansea Harriers Platform Overview — Andrew Cleverly",
  description: "Comprehensive overview of the Swansea Harriers Athletic Performance Platform - a full-stack web application for rankings management and relay team optimization.",
  keywords: "Athletic Performance Platform, Sports Analytics, Full-Stack Development, Team Management, Performance Tracking",
  openGraph: {
    title: "Swansea Harriers Athletic Performance Platform Overview",
    description: "Explore the complete technical showcase of a production athletics management system with advanced features and professional deployment.",
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
        <span className="text-neutral-100">Technical Overview</span>
      </div>
    </div>
  );
}

/**
 * Hero Section with Screenshots
 */
function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-indigo-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Athletic Performance Platform
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12">
          Complete Technical Deep Dive & Live Application Screenshots
        </p>
        
        {/* Screenshot Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Landing Page Interface</h3>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-600">
              <Image
                src="/images/Landing Page.png"
                alt="Swansea Harriers Landing Page"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Rankings Dashboard</h3>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-600">
              <Image
                src="/images/Rankings Page.png"
                alt="Swansea Harriers Rankings Page"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Technical Showcases Grid
 */
function TechnicalShowcases() {
  const showcases = [
    {
      title: "System Architecture",
      icon: "🏗️",
      href: "/projects/swansea-harriers/architecture",
      description: "Deep dive into the 4-layer system architecture, database design, and API structure.",
      color: "cyan",
      highlights: ["Flask Backend", "SQLite Database", "RESTful APIs", "15+ Endpoints"]
    },
    {
      title: "AWS Deployment",
      icon: "☁️",
      href: "/projects/swansea-harriers/deployment",
      description: "Production deployment on AWS Lightsail with professional DevOps practices.",
      color: "orange",
      highlights: ["AWS Lightsail", "Nginx Configuration", "SSL/HTTPS", "99.9% Uptime"]
    },
    {
      title: "Relay Team Builder",
      icon: "👥",
      href: "/projects/swansea-harriers/teambuilder",
      description: "Intelligent team optimization with drag-and-drop interface and pace calculations.",
      color: "purple",
      highlights: ["Optimization Algorithm", "Drag & Drop UI", "Pace Matching", "Real-time Calculations"]
    },
    {
      title: "PDF Export System",
      icon: "📊",
      href: "/projects/swansea-harriers/export-system",
      description: "Professional document generation using ReportLab for branded athletics reports.",
      color: "rose",
      highlights: ["ReportLab Integration", "50+ Templates", "Professional Quality", "Automated Generation"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/5 text-cyan-400",
      orange: "border-orange-400/50 hover:border-orange-400 hover:bg-orange-400/5 text-orange-400", 
      purple: "border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/5 text-purple-400",
      rose: "border-rose-400/50 hover:border-rose-400 hover:bg-rose-400/5 text-rose-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {showcases.map((showcase) => (
        <Link
          key={showcase.title}
          href={showcase.href}
          className={`block bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg ${getColorClasses(showcase.color)}`}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">{showcase.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{showcase.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{showcase.description}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-neutral-400 mb-3">KEY FEATURES</h4>
            <div className="grid grid-cols-2 gap-2">
              {showcase.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="text-xs px-3 py-1 bg-neutral-700/50 text-neutral-300 rounded border border-neutral-600"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium">View Technical Deep Dive</span>
            <span className="text-lg">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Platform Stats
 */
function PlatformStats() {
  const stats = [
    { label: "Lines of Code", value: "5,000+", icon: "💻" },
    { label: "API Endpoints", value: "15+", icon: "🔗" },
    { label: "Database Tables", value: "5", icon: "🗄️" },
    { label: "Athletes Tracked", value: "500+", icon: "🏃" },
    { label: "Events Supported", value: "8+", icon: "🏆" },
    { label: "Performance Data", value: "5 Years", icon: "📈" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 rounded-xl"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
          <div className="text-sm text-neutral-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function SwanseaHarriersOverview() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Platform Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8 text-center">Platform Statistics</h2>
          <PlatformStats />
        </section>

        {/* Technical Deep Dives */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">Technical Deep Dives</h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore the comprehensive technical documentation covering every aspect of the Athletic Performance Platform, 
              from system architecture to deployment strategies.
            </p>
          </div>
          <TechnicalShowcases />
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8 text-center">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Backend</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Python 3.9+</li>
                <li>• Flask Framework</li>
                <li>• SQLite Database</li>
                <li>• RESTful API Design</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Frontend</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Vanilla JavaScript</li>
                <li>• HTML5 & CSS3</li>
                <li>• Responsive Design</li>
                <li>• Interactive UI Components</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• AWS Lightsail</li>
                <li>• Nginx Web Server</li>
                <li>• SSL/HTTPS Security</li>
                <li>• Domain Management</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Tools & Libraries</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• ReportLab (PDF)</li>
                <li>• pandas (Data Processing)</li>
                <li>• Gunicorn (WSGI Server)</li>
                <li>• Git Version Control</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Links */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">Project Resources</h2>
            <p className="text-neutral-300 mb-6">
              Access the source code and explore the live application to see the Athletic Performance Platform in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects/swansea-harriers" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-colors"
              >
                <span>📋</span>
                Main Project Page
              </Link>
              
              <a 
                href="https://github.com/cleverly87/SwanseaHarrierPO10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <span>⚡</span>
                View Source Code
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}