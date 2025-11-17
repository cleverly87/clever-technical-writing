import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "Relay Team Builder - Swansea Harriers Analytics Platform — Andrew Cleverly",
  description: "Interactive relay team optimization system with drag-and-drop interface, pace calculations, and intelligent team selection algorithms.",
  keywords: "Relay Teams, Optimization Algorithm, Drag and Drop, Team Selection, Athletics",
  openGraph: {
    title: "Relay Team Builder - Swansea Harriers Rankings Platform",
    description: "Explore the intelligent relay team building system with advanced optimization algorithms and interactive user interface.",
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
        <span className="text-neutral-100">Team Builder</span>
      </div>
    </div>
  );
}

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-purple-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
          Relay Team Builder
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Intelligent Team Optimization with Drag & Drop Interface
        </p>
      </div>
    </div>
  );
}

/**
 * Algorithm Overview Component
 */
function AlgorithmOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
          <span>🧠</span>
          Optimization Algorithm
        </h3>
        <p className="text-neutral-300 mb-4 leading-relaxed">
          The team builder uses advanced algorithms to optimize relay team composition based on individual 
          pace data, recent performance trends, and historical relay performance.
        </p>
        <ul className="space-y-2 text-neutral-300">
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">→</span>
            Pace-based matching for optimal handoff timing
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">→</span>
            Performance trend analysis for team selection
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">→</span>
            Multiple team configuration suggestions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400">→</span>
            Real-time time projection calculations
          </li>
        </ul>
      </div>
      
      <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
          <span>🎯</span>
          Interactive Interface
        </h3>
        <p className="text-neutral-300 mb-4 leading-relaxed">
          Drag-and-drop functionality allows coaches to experiment with different team compositions 
          while getting instant feedback on projected performance.
        </p>
        <ul className="space-y-2 text-neutral-300">
          <li className="flex items-center gap-2">
            <span className="text-purple-400">→</span>
            Visual athlete cards with key statistics
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">→</span>
            Real-time team time calculations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">→</span>
            Performance confidence indicators
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">→</span>
            Export functionality for team sheets
          </li>
        </ul>
      </div>
    </div>
  );
}

/**
 * Feature Showcase Component
 */
function FeatureShowcase() {
  const features = [
    {
      title: "Drag & Drop Interface",
      icon: "🖱️",
      description: "Intuitive drag-and-drop system for building relay teams with instant visual feedback."
    },
    {
      title: "Pace Calculations",
      icon: "⏱️",
      description: "Real-time pace analysis and projected relay times based on individual performances."
    },
    {
      title: "Smart Suggestions",
      icon: "💡",
      description: "AI-powered team recommendations based on optimal pace distribution and performance data."
    },
    {
      title: "Performance Analytics",
      icon: "📈",
      description: "Deep analysis of individual and team performance trends for informed decision making."
    },
    {
      title: "Team Optimization",
      icon: "⚡",
      description: "Advanced algorithms to find the optimal athlete positioning for maximum team performance."
    },
    {
      title: "Export & Share",
      icon: "📋",
      description: "Generate professional team sheets and share configurations with coaching staff."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-purple-400 mb-3">{feature.title}</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
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
      current: true 
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
                  ? 'bg-purple-400/20 border-2 border-purple-400 cursor-default'
                  : 'bg-neutral-800/50 border border-neutral-700 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-3">{showcase.icon}</div>
              <h4 className={`font-semibold ${showcase.current ? 'text-purple-300' : 'text-cyan-400'}`}>
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

export default function TeamBuilderPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-6">Team Builder Overview</h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            The Relay Team Builder is an intelligent system that helps coaches create optimal relay teams 
            through data-driven analysis and an intuitive drag-and-drop interface.
          </p>
          <AlgorithmOverview />
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Key Features</h2>
          <FeatureShowcase />
        </section>

        {/* Technical Implementation */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Technical Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Frontend Technologies</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <strong>Vanilla JavaScript:</strong> Drag-and-drop functionality
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <strong>HTML5:</strong> Semantic structure and accessibility
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <strong>CSS3:</strong> Responsive design and animations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <strong>Fetch API:</strong> Real-time data updates
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Backend Processing</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <strong>Python Algorithms:</strong> Team optimization logic
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <strong>Flask APIs:</strong> RESTful endpoints for team data
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <strong>SQLite Queries:</strong> Performance data retrieval
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <strong>Pace Calculations:</strong> Real-time time projections
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Algorithm Details */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Optimization Algorithm</h2>
          
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4-6</div>
                <div className="text-neutral-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                <div className="text-neutral-300">Variables Considered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;0.5s</div>
                <div className="text-neutral-300">Calculation Time</div>
              </div>
            </div>
            
            <p className="text-neutral-300 leading-relaxed">
              The optimization algorithm considers multiple factors including individual pace data, 
              recent performance trends, handoff compatibility, and team chemistry to suggest 
              the most effective relay team configurations. The system can process complex 
              permutations in real-time to provide instant feedback to coaches.
            </p>
          </div>
        </section>
      </div>

      <ShowcaseNavigation />
      <Footer />
    </main>
  );
}