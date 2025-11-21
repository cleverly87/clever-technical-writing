import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "Psych-Skills Platform Overview — Andrew Cleverly",
  description: "Comprehensive overview of the Psych-Skills Professional Platform - a production-ready SaaS application for sports psychology services with enterprise security and real-time booking.",
  keywords: "Healthcare SaaS, Sports Psychology Platform, Next.js 14, Full-Stack Development, Enterprise Security, Booking System",
  openGraph: {
    title: "Psych-Skills Professional Platform Overview",
    description: "Explore the complete technical showcase of an enterprise-grade healthcare SaaS platform with advanced security and booking management.",
    type: "article",
  }
};

/**
 * Breadcrumb Navigation Component
 */
function Breadcrumb() {
  return (
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
        <span className="text-neutral-100">Technical Overview</span>
      </div>
    </div>
  );
}

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <div className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-emerald-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Psychology Platform
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Enterprise-Grade Healthcare SaaS with Advanced Security & Booking Management
        </p>
        
        <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-emerald-400/30 rounded-xl p-8 text-left">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏥</div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Full-Stack Healthcare Platform</h3>
              <p className="text-neutral-300 mb-4">
                Production-ready SaaS application built with Next.js 14, TypeScript, and PostgreSQL. 
                Designed for professional sports psychology services with enterprise-grade security, 
                real-time booking management, and comprehensive administrative controls.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">Next.js 14 App Router</span>
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full">PostgreSQL + Prisma</span>
                <span className="px-3 py-1 bg-rose-900/30 text-rose-400 rounded-full">Enterprise Security</span>
              </div>
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
      href: "/projects/psych-skills/architecture",
      description: "Next.js 14 App Router architecture, Prisma database schema, and API route structure.",
      color: "emerald",
      highlights: ["Server Components", "PostgreSQL Schema", "API Routes", "Prisma ORM"]
    },
    {
      title: "Booking System",
      icon: "📅",
      href: "/projects/psych-skills/features",
      description: "Real-time availability management, automated notifications, and conflict prevention.",
      color: "cyan",
      highlights: ["Calendar Integration", "Email Automation", "Payment Tracking", "Multi-Service Support"]
    },
    {
      title: "Security Architecture",
      icon: "🔐",
      href: "/projects/psych-skills/security",
      description: "Multi-layer authentication, progressive rate limiting, and enterprise-grade protection.",
      color: "rose",
      highlights: ["NextAuth.js", "Rate Limiting", "IP Blocking", "CAPTCHA System"]
    },
    {
      title: "Admin Dashboard",
      icon: "📊",
      href: "/projects/psych-skills/features",
      description: "Comprehensive business operations with analytics, content management, and monitoring.",
      color: "purple",
      highlights: ["Live Analytics", "Content CMS", "Security Dashboard", "Booking Management"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-100 mb-12 text-center">
          Technical Deep Dives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcases.map((showcase, index) => (
            <Link
              key={index}
              href={showcase.href}
              className={`block bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 hover:border-${showcase.color}-400/50 p-8 rounded-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-5xl mb-4">{showcase.icon}</div>
              <h3 className={`text-xl font-semibold text-${showcase.color}-400 mb-3`}>
                {showcase.title}
              </h3>
              <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
                {showcase.description}
              </p>
              <ul className="space-y-2">
                {showcase.highlights.map((highlight, i) => (
                  <li key={i} className="text-neutral-400 text-xs flex items-center gap-2">
                    <span className={`text-${showcase.color}-400`}>▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Project Statistics
 */
function ProjectStatistics() {
  const stats = [
    { label: "Performance Score", value: "95+", description: "Lighthouse rating", color: "emerald" },
    { label: "Security Layers", value: "5", description: "Authentication & protection", color: "rose" },
    { label: "API Endpoints", value: "20+", description: "RESTful routes", color: "cyan" },
    { label: "Database Models", value: "9", description: "Prisma entities", color: "purple" },
    { label: "UI Components", value: "50+", description: "shadcn/ui based", color: "orange" },
    { label: "Type Coverage", value: "100%", description: "Full TypeScript", color: "blue" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-neutral-900 to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-center">
          Project Statistics
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Quantified metrics demonstrating technical excellence and production readiness
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-800/30 border border-neutral-700 p-8 rounded-xl text-center hover:border-emerald-400/50 transition-colors"
            >
              <div className={`text-5xl font-bold text-${stat.color}-400 mb-3`}>
                {stat.value}
              </div>
              <div className="text-xl text-neutral-200 mb-2">{stat.label}</div>
              <div className="text-sm text-neutral-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Technology Stack Breakdown
 */
function TechnologyStack() {
  const stackCategories = [
    {
      category: "Frontend",
      color: "emerald",
      technologies: [
        { name: "Next.js 14", description: "App Router with SSR" },
        { name: "TypeScript 5.3", description: "Full type safety" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
        { name: "shadcn/ui", description: "Radix UI primitives" },
        { name: "Framer Motion", description: "Animation library" },
        { name: "React Hook Form", description: "Form management" }
      ]
    },
    {
      category: "Backend",
      color: "cyan",
      technologies: [
        { name: "PostgreSQL", description: "Primary database" },
        { name: "Prisma ORM", description: "Type-safe queries" },
        { name: "NextAuth.js", description: "Authentication" },
        { name: "Nodemailer", description: "Email delivery" },
        { name: "bcrypt", description: "Password hashing" },
        { name: "Zod", description: "Schema validation" }
      ]
    },
    {
      category: "DevOps",
      color: "purple",
      technologies: [
        { name: "Vercel", description: "Edge deployment" },
        { name: "GitHub Actions", description: "CI/CD pipeline" },
        { name: "Prisma Migrate", description: "DB migrations" },
        { name: "ESLint", description: "Code quality" },
        { name: "TypeScript", description: "Static analysis" },
        { name: "Git", description: "Version control" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-center">
          Technology Stack
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Modern, production-proven technologies selected for performance, security, and developer experience
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stackCategories.map((category, index) => (
            <div key={index} className="bg-neutral-800/20 border border-neutral-700 p-8 rounded-xl">
              <h3 className={`text-2xl font-semibold text-${category.color}-400 mb-6`}>
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.technologies.map((tech, i) => (
                  <li key={i} className="border-l-2 border-neutral-700 pl-4">
                    <div className="text-neutral-200 font-medium">{tech.name}</div>
                    <div className="text-neutral-400 text-sm">{tech.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Key Features Overview
 */
function KeyFeatures() {
  const features = [
    {
      title: "Real-Time Booking System",
      description: "Dynamic calendar integration with conflict prevention, automated confirmations, and flexible payment options for seamless client scheduling.",
      icon: "📅",
      color: "emerald"
    },
    {
      title: "Enterprise Security",
      description: "Multi-layer authentication with NextAuth.js, progressive rate limiting, IP blocking, CAPTCHA protection, and bcrypt password hashing.",
      icon: "🔐",
      color: "rose"
    },
    {
      title: "SEO-Optimized CMS",
      description: "Full-featured blog platform with rich text editing, media uploads, tag categorization, and automatic sitemap generation for search visibility.",
      icon: "📝",
      color: "purple"
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive business operations center with live analytics, booking management, content publishing, and security monitoring tools.",
      icon: "📊",
      color: "cyan"
    },
    {
      title: "Performance Optimized",
      description: "Server-side rendering, automatic code splitting, image optimization, and Edge deployment for 95+ Lighthouse scores across all metrics.",
      icon: "⚡",
      color: "orange"
    },
    {
      title: "Accessibility First",
      description: "WCAG 2.1 compliant with semantic HTML, ARIA labels, keyboard navigation, and dark mode support for inclusive user experience.",
      icon: "♿",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-neutral-900 to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-100 mb-4 text-center">
          Platform Capabilities
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Enterprise-grade features designed for professional healthcare service delivery
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800/30 border border-neutral-700 p-8 rounded-xl hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold text-${feature.color}-400 mb-3`}>
                {feature.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Call to Action
 */
function CallToAction() {
  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutral-100 mb-6">
          Explore Technical Deep Dives
        </h2>
        <p className="text-neutral-300 mb-12 leading-relaxed">
          Dive into detailed technical documentation covering architecture, security implementation, 
          feature breakdowns, and deployment strategies.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/projects/psych-skills/architecture"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
          >
            🏗️ System Architecture
          </Link>
          <Link
            href="/projects/psych-skills/security"
            className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
          >
            🔐 Security Details
          </Link>
        </div>
        <div className="mt-8">
          <Link
            href="/projects/psych-skills/private-access"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-300 hover:bg-purple-400/10 font-semibold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Request Repository Access
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PsychSkillsOverviewPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      <HeroSection />
      <TechnicalShowcases />
      <ProjectStatistics />
      <KeyFeatures />
      <TechnologyStack />
      <CallToAction />
      <Footer />
    </main>
  );
}
