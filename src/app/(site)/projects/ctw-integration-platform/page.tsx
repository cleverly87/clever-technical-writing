import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "CTW Integration Platform — Andrew Cleverly" };

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
                  href="/projects/ctw-integration-platform/private-access"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-purple-600 hover:border-purple-500 text-purple-300 hover:text-purple-200 text-sm rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Request Repository Access
                </Link>
                
                {/* Platform Coming Soon */}
                <button 
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-700 border border-neutral-600 text-neutral-500 text-sm rounded cursor-not-allowed"
                  title="Platform in active development"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Platform (In Development)
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

export default function CTWIntegrationPlatformPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="CTW Integration Platform"
        subtitle="Multi-tenant SaaS solution for API management and developer onboarding. Comprehensive ecosystem enabling businesses to manage APIs, customize developer experiences, and streamline integration workflows with scalable multi-tenancy architecture."
        category="API Management SaaS"
        status="In Development"
        techStack={[
          "Next.js 14",
          "TypeScript",
          "PostgreSQL",
          "Prisma ORM",
          "NextAuth.js",
          "Tailwind CSS",
          "Multi-Tenant Architecture",
          "Dynamic Routing",
          "Vercel",
          "Node.js"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Businesses struggle with API management complexity, developer onboarding friction, and maintaining 
                consistent integration experiences across multiple products. Organizations need unified platforms 
                that can scale from startup to enterprise while providing customizable developer experiences.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Solution</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                A comprehensive multi-tenant SaaS platform that centralizes API management, automates developer 
                onboarding, and enables businesses to create branded, professional developer experiences with 
                minimal setup and maximum scalability.
              </p>
              
              <Link 
                href="/projects/ctw-integration-platform/overview"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                <span>🔍</span>
                Explore Technical Architecture
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Development Milestones</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-green-400/50 transition-colors">
                  <div className="text-2xl font-bold text-green-400">✓</div>
                  <div className="text-sm text-neutral-400">Super Admin Dashboard with global tenant management</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-green-400/50 transition-colors">
                  <div className="text-2xl font-bold text-green-400">✓</div>
                  <div className="text-sm text-neutral-400">Marketing Homepage and Provider Portal</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4 hover:border-orange-400/50 transition-colors">
                  <div className="text-2xl font-bold text-orange-400">🔧</div>
                  <div className="text-sm text-neutral-400">Custom branding and domain support (in progress)</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Platform Architecture & Components">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Marketing Homepage</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Public-facing site showcasing platform capabilities with clear call-to-action for business onboarding.
              </p>
              <div className="text-xs text-blue-400 font-medium">Customer Acquisition →</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Super Admin Dashboard</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Centralized control panel for global platform management, tenant oversight, and usage monitoring.
              </p>
              <div className="text-xs text-purple-400 font-medium">Global Management →</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Provider Portal</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Tenant dashboard for API management, usage monitoring, and developer portal customization.
              </p>
              <div className="text-xs text-emerald-400 font-medium">Business Management →</div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Developer Portals</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Company-specific portals with shareable URLs for API documentation and developer tools.
              </p>
              <div className="text-xs text-cyan-400 font-medium">Developer Experience →</div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Implementation">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Multi-Tenant Architecture</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Dynamic Routing:</strong> Next.js dynamic routing with tenant-scoped URL patterns (e.g., /company/acme/developers)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Scoped Database Queries:</strong> Prisma ORM with tenant isolation ensuring data security across organizations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Customizable Branding:</strong> Theme engine allowing companies to match their brand identity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <strong>Custom Domains:</strong> Support for company-owned URLs (e.g., developers.acme.com)
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Enterprise Features</h3>
              <ul className="text-neutral-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <div>
                    <strong>API Management:</strong> Comprehensive API lifecycle management with usage analytics and monitoring
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <div>
                    <strong>Developer Onboarding:</strong> Simplified integration flows with automated credential provisioning
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <div>
                    <strong>Subscription Management:</strong> Planned Stripe integration for recurring revenue model
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <div>
                    <strong>Advanced Analytics:</strong> Detailed usage reporting and developer engagement metrics
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Scalable SaaS Architecture</h3>
            <p className="text-neutral-300 mb-6">
              Built for the API economy with multi-tenancy, subscription management, and enterprise-grade 
              security. Designed to scale from startup API providers to large enterprise organizations 
              with hundreds of developer clients.
            </p>
            <Link 
              href="/projects/ctw-integration-platform/private-access"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              <span>🚀</span>
              Request Platform Access
            </Link>
          </div>
        </ProjectSection>

        <ProjectSection title="Business Value & Market Opportunity">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">🏢 For Companies</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• Simplified API management and monitoring</li>
                <li>• Enhanced brand visibility with custom portals</li>
                <li>• Improved customer satisfaction</li>
                <li>• Reduced developer support overhead</li>
                <li>• Faster time-to-market for integrations</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">👨‍💻 For Developers</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• Easy access to API documentation</li>
                <li>• Reduced integration complexity</li>
                <li>• Consistent experience across companies</li>
                <li>• Interactive testing and validation tools</li>
                <li>• Comprehensive SDK and code samples</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">💰 Platform Revenue</h3>
              <ul className="text-neutral-300 space-y-2 text-sm">
                <li>• Subscription-based SaaS model</li>
                <li>• Recurring monthly/annual revenue</li>
                <li>• Scalable to thousands of tenants</li>
                <li>• Premium features for enterprise clients</li>
                <li>• Critical enabler in API economy</li>
              </ul>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}