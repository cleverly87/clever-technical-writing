import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "CTW Integration Platform Overview — Andrew Cleverly" };

export default function CTWOverviewPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/projects/ctw-integration-platform" 
            className="text-sm text-neutral-400 hover:text-neutral-200 mb-4 inline-block"
          >
            ← Back to CTW Integration Platform
          </Link>
          
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">Technical Overview</h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Deep dive into the architectural design and technical implementation of a scalable multi-tenant SaaS platform 
            for API management and developer experience optimization.
          </p>
        </div>
      </div>

      <div className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Hero Section with Platform Statistics */}
          <section>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-neutral-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6">Platform Overview</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">4</div>
                  <div className="text-sm text-neutral-400">Core Platform Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">100+</div>
                  <div className="text-sm text-neutral-400">Potential Tenant Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <div className="text-sm text-neutral-400">User Management Tiers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">∞</div>
                  <div className="text-sm text-neutral-400">Scalable API Endpoints</div>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed">
                The CTW Integration Platform represents a comprehensive solution to the complex challenges of API 
                management in today's interconnected business environment. Built with modern SaaS architecture 
                principles, it provides a unified platform for businesses to manage their APIs, create branded 
                developer experiences, and scale their integration ecosystems seamlessly.
              </p>
            </div>
          </section>

          {/* Architecture Deep Dive */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8">System Architecture</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">🏗️ Multi-Tenant Architecture</h3>
                <ul className="text-neutral-300 space-y-3 text-sm">
                  <li><strong>Database Isolation:</strong> Tenant-scoped PostgreSQL queries with Prisma ORM ensuring data security</li>
                  <li><strong>Dynamic Routing:</strong> Next.js App Router with tenant-based URL structures</li>
                  <li><strong>Custom Domains:</strong> Support for company-branded developer portals</li>
                  <li><strong>Middleware Layer:</strong> Request routing and tenant resolution at edge level</li>
                </ul>
              </div>

              <div className="border border-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">🔧 Technology Stack</h3>
                <ul className="text-neutral-300 space-y-3 text-sm">
                  <li><strong>Frontend:</strong> Next.js 14 with TypeScript and Tailwind CSS</li>
                  <li><strong>Backend:</strong> Node.js APIs with NextAuth.js authentication</li>
                  <li><strong>Database:</strong> PostgreSQL with Prisma ORM for type-safe queries</li>
                  <li><strong>Deployment:</strong> Vercel with serverless architecture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Platform Components Detailed */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8">Platform Components</h2>
            
            <div className="space-y-8">
              {/* Marketing Homepage */}
              <div className="border border-neutral-700 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🏠</div>
                    <h3 className="text-xl font-semibold text-blue-400">Marketing Homepage</h3>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    Professional landing page designed to attract businesses seeking API management solutions. 
                    Features clear value propositions, pricing tiers, and streamlined onboarding flows.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-blue-400">Lead Generation</div>
                      <div className="text-neutral-400">Contact forms and trial signups</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-blue-400">Value Proposition</div>
                      <div className="text-neutral-400">Clear benefits and use cases</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-blue-400">Social Proof</div>
                      <div className="text-neutral-400">Customer testimonials and case studies</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Super Admin Dashboard */}
              <div className="border border-neutral-700 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">⚡</div>
                    <h3 className="text-xl font-semibold text-purple-400">Super Admin Dashboard</h3>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    Centralized control center for platform operators. Manages global tenant accounts, monitors 
                    platform usage, handles billing operations, and provides system-wide analytics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-purple-400">Tenant Management</div>
                      <div className="text-neutral-400">Account creation, suspension, configuration</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-purple-400">Usage Analytics</div>
                      <div className="text-neutral-400">Platform metrics and performance monitoring</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-purple-400">Billing Operations</div>
                      <div className="text-neutral-400">Subscription management and revenue tracking</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Provider Portal */}
              <div className="border border-neutral-700 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🏢</div>
                    <h3 className="text-xl font-semibold text-emerald-400">Provider Portal</h3>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    Business-facing dashboard where API providers manage their integration ecosystem. 
                    Features API configuration, developer portal customization, and usage monitoring.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-emerald-400">API Configuration</div>
                      <div className="text-neutral-400">Endpoint management and documentation</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-emerald-400">Brand Customization</div>
                      <div className="text-neutral-400">Portal theming and domain settings</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-emerald-400">Developer Management</div>
                      <div className="text-neutral-400">User access and credential provisioning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Portals */}
              <div className="border border-neutral-700 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">👨‍💻</div>
                    <h3 className="text-xl font-semibold text-cyan-400">Developer Portals</h3>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    Company-branded developer experiences accessible via shareable URLs. Each portal provides 
                    tailored API documentation, testing tools, and integration resources.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-cyan-400">Interactive Docs</div>
                      <div className="text-neutral-400">API reference with testing capabilities</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-cyan-400">SDK Generation</div>
                      <div className="text-neutral-400">Auto-generated client libraries</div>
                    </div>
                    <div className="bg-neutral-800/50 p-3 rounded">
                      <div className="font-semibold text-cyan-400">Support Resources</div>
                      <div className="text-neutral-400">Guides, tutorials, and community features</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation Details */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8">Implementation Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Authentication & Security</h3>
                <ul className="text-neutral-300 space-y-2 text-sm">
                  <li>• NextAuth.js with multiple provider support</li>
                  <li>• JWT-based session management</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• API key management and rotation</li>
                  <li>• Rate limiting and request throttling</li>
                  <li>• CORS configuration for cross-origin requests</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-4">Database Design</h3>
                <ul className="text-neutral-300 space-y-2 text-sm">
                  <li>• PostgreSQL with multi-tenant isolation</li>
                  <li>• Prisma ORM for type-safe database operations</li>
                  <li>• Optimized indexing for tenant queries</li>
                  <li>• Automated migrations and schema updates</li>
                  <li>• Connection pooling for scalability</li>
                  <li>• Data encryption at rest and in transit</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Scalability & Performance */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8">Scalability & Performance</h2>
            
            <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-700 p-8 rounded-xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">🚀 Performance Optimizations</h3>
                  <ul className="text-neutral-300 space-y-2 text-sm">
                    <li>• Next.js automatic code splitting</li>
                    <li>• Vercel Edge Runtime for global distribution</li>
                    <li>• Database query optimization with indexes</li>
                    <li>• CDN-cached static assets</li>
                    <li>• Image optimization and lazy loading</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-4">📈 Scaling Strategy</h3>
                  <ul className="text-neutral-300 space-y-2 text-sm">
                    <li>• Horizontal scaling with load balancers</li>
                    <li>• Database read replicas for query distribution</li>
                    <li>• Auto-scaling based on traffic patterns</li>
                    <li>• Microservices architecture readiness</li>
                    <li>• Caching layers for frequently accessed data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">🔧 Monitoring & Analytics</h3>
                  <ul className="text-neutral-300 space-y-2 text-sm">
                    <li>• Real-time performance monitoring</li>
                    <li>• Error tracking and alerting systems</li>
                    <li>• Usage analytics and billing metrics</li>
                    <li>• API response time tracking</li>
                    <li>• Custom dashboard for platform insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Future Roadmap */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-8">Development Roadmap</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-green-500/20 rounded-lg bg-green-500/5">
                <div className="text-green-400 font-bold text-lg">✓</div>
                <div>
                  <div className="font-semibold text-green-400">Phase 1: Core Platform (Completed)</div>
                  <div className="text-neutral-300 text-sm">Basic multi-tenant architecture with all four core components</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-orange-500/20 rounded-lg bg-orange-500/5">
                <div className="text-orange-400 font-bold text-lg">🔧</div>
                <div>
                  <div className="font-semibold text-orange-400">Phase 2: Enterprise Features (In Progress)</div>
                  <div className="text-neutral-300 text-sm">Custom branding, domain support, advanced analytics, and Stripe integration</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-blue-500/20 rounded-lg bg-blue-500/5">
                <div className="text-blue-400 font-bold text-lg">📋</div>
                <div>
                  <div className="font-semibold text-blue-400">Phase 3: Advanced API Management (Planned)</div>
                  <div className="text-neutral-300 text-sm">API versioning, testing suites, webhook management, and developer community features</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-purple-500/20 rounded-lg bg-purple-500/5">
                <div className="text-purple-400 font-bold text-lg">🚀</div>
                <div>
                  <div className="font-semibold text-purple-400">Phase 4: AI Integration (Future)</div>
                  <div className="text-neutral-300 text-sm">AI-powered documentation generation, code examples, and intelligent API recommendations</div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-neutral-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-neutral-100 mb-4">Ready to Explore Further?</h2>
              <p className="text-neutral-300 mb-6">
                Dive deeper into specific aspects of the CTW Integration Platform architecture and implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects/ctw-integration-platform"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                >
                  ← Back to Project Overview
                </Link>
                <Link 
                  href="/projects/ctw-integration-platform/private-access"
                  className="px-6 py-3 border border-purple-600 text-purple-300 hover:border-purple-500 hover:text-purple-200 font-semibold rounded-lg transition-colors"
                >
                  Request Repository Access →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}