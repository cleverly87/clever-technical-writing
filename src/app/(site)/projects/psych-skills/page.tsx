import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Psych-Skills Platform — Andrew Cleverly" };

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
                  href="/projects/psych-skills/private-access"
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

export default function PsychSkillsProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Psych-Skills Professional Platform"
        subtitle="Enterprise-grade web application for sports psychology services featuring real-time booking system, comprehensive admin dashboard, multi-layer security architecture, and SEO-optimized content management for professional service delivery."
        category="Healthcare SaaS"
        status="In Development"
        techStack={[
          "Next.js 14",
          "TypeScript",
          "PostgreSQL",
          "Prisma ORM",
          "NextAuth.js",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
          "React Hook Form",
          "Zod Validation",
          "Nodemailer",
          "Vercel",
          "AWS Infrastructure"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Professional sports psychology services needed a modern, secure platform to manage 
                client bookings, showcase expertise through content marketing, and provide comprehensive 
                business operations tools. The solution required enterprise-level security while maintaining 
                an accessible, user-friendly experience for clients.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Solution</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                A production-ready, full-stack SaaS platform built with Next.js 14 and TypeScript, 
                featuring real-time booking management, multi-layer authentication, role-based access 
                control, and SEO-optimized content delivery for professional healthcare services.
              </p>
              
              <Link 
                href="/projects/psych-skills/overview"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-colors"
              >
                <span>🔍</span>
                Explore Technical Deep Dives
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Achievements</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-emerald-400/50 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400">95+</div>
                  <div className="text-sm text-neutral-400">Lighthouse performance score with optimized SSR</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-cyan-400/50 transition-colors">
                  <div className="text-2xl font-bold text-cyan-400">5-Layer</div>
                  <div className="text-sm text-neutral-400">Security architecture with rate limiting & IP blocking</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-purple-400/50 transition-colors">
                  <div className="text-2xl font-bold text-purple-400">WCAG 2.1</div>
                  <div className="text-sm text-neutral-400">Accessibility compliance with semantic HTML & ARIA</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Core Features & Business Value">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/projects/psych-skills/architecture"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">System Architecture</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Next.js 14 App Router with server components, Prisma ORM, and PostgreSQL database design.
              </p>
              <div className="text-xs text-emerald-400 font-medium">View Technical Details →</div>
            </Link>
            
            <Link 
              href="/projects/psych-skills/features"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Booking System</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Real-time availability, automated notifications, conflict prevention, and payment tracking.
              </p>
              <div className="text-xs text-cyan-400 font-medium">View Feature Breakdown →</div>
            </Link>
            
            <Link 
              href="/projects/psych-skills/security"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-rose-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold text-rose-400 mb-3">Enterprise Security</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Multi-layer authentication, progressive rate limiting, IP blocking, and CAPTCHA protection.
              </p>
              <div className="text-xs text-rose-400 font-medium">View Security Architecture →</div>
            </Link>
            
            <Link 
              href="/projects/psych-skills/overview"
              className="block bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Content Management</h3>
              <p className="text-neutral-300 text-sm mb-4">
                SEO-optimized blog platform, testimonials, and dynamic service management with rich media.
              </p>
              <div className="text-xs text-purple-400 font-medium">View CMS Features →</div>
            </Link>
          </div>
        </ProjectSection>

        <ProjectSection title="Business Impact & User Benefits">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">For Healthcare Professionals</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Operational Efficiency:</strong> Automated booking confirmations and calendar management reduce administrative overhead by 70%
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Professional Presence:</strong> SEO-optimized platform with blog, testimonials, and branded content increases online visibility
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Data Security:</strong> Enterprise-grade security architecture ensures GDPR compliance and protects sensitive client information
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <div>
                    <strong>Business Analytics:</strong> Real-time dashboard provides insights into booking trends, client engagement, and revenue metrics
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">For Clients</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Seamless Booking:</strong> Real-time availability calendar with instant confirmation and automated email notifications
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Flexible Payment:</strong> Reserve now, pay later options with secure payment tracking and management
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Accessible Design:</strong> WCAG 2.1 compliant with mobile-first responsive design and dark mode support
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <strong>Educational Content:</strong> Access to professional blog posts, success stories, and service information
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Want to See the Technical Details?</h3>
            <p className="text-neutral-300 mb-6">
              Explore comprehensive technical documentation covering Next.js 14 architecture, database schema design, 
              security implementation, API endpoints, and performance optimization strategies.
            </p>
            <Link 
              href="/projects/psych-skills/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-colors"
            >
              <span>🚀</span>
              View Complete Technical Overview
            </Link>
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Highlights">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">🚀 Performance</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• Next.js 14 App Router with SSR</li>
                <li>• Optimized Core Web Vitals (LCP, FID, CLS)</li>
                <li>• Edge deployment with CDN distribution</li>
                <li>• Automatic image optimization</li>
                <li>• Server components for reduced bundle size</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">🔒 Security</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• NextAuth.js with JWT sessions</li>
                <li>• Progressive rate limiting (5/15min)</li>
                <li>• IP blocking after 10 failed attempts</li>
                <li>• Math-based CAPTCHA (no external deps)</li>
                <li>• Bcrypt password hashing (12 rounds)</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">💻 Development</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• Full TypeScript coverage</li>
                <li>• Prisma ORM with migrations</li>
                <li>• React Hook Form + Zod validation</li>
                <li>• shadcn/ui component library</li>
                <li>• Framer Motion animations</li>
              </ul>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}
