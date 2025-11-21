import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Psych-Skills Features — Andrew Cleverly" };

function Breadcrumb() {
  return (
    <div className="bg-neutral-950/80 border-b border-cyan-400/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          ← Portfolio
        </Link>
        <span className="text-neutral-400">/</span>
        <Link href="/projects/psych-skills" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Psych-Skills
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="text-neutral-100">Features</span>
      </div>
    </div>
  );
}

export default function PsychSkillsFeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <section className="flex-grow py-16 px-6 bg-gradient-to-br from-neutral-950 to-cyan-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Platform Features</h1>
          
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">📅 Advanced Booking System</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Real-time availability management with intelligent conflict prevention, automated email notifications, 
              and flexible payment options for professional healthcare service delivery.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Key Capabilities</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span><strong>Dynamic Calendar:</strong> Real-time availability with visual date picker and blocked date management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span><strong>Multi-Service Support:</strong> Different session types with custom pricing, duration, and descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span><strong>Payment Flexibility:</strong> Reserve now / pay later options with secure tracking and status management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span><strong>Email Automation:</strong> Instant confirmations sent to clients and admin with session details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span><strong>Conflict Prevention:</strong> Smart scheduling prevents double-booking with availability checks</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">📊 Comprehensive Admin Dashboard</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Full-featured business operations center providing real-time analytics, content management, 
              booking oversight, and security monitoring in a unified interface.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Analytics & Reporting</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Live booking statistics and trends</li>
                  <li>• Revenue tracking and payment status</li>
                  <li>• Client engagement metrics</li>
                  <li>• Content performance analytics</li>
                  <li>• Security event monitoring</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Operations Management</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Booking CRUD with status updates</li>
                  <li>• Availability and schedule control</li>
                  <li>• Contact form submissions review</li>
                  <li>• Service offerings configuration</li>
                  <li>• User role and permissions mgmt</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">📝 SEO-Optimized Content Management</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Full-featured CMS for professional blog publishing, testimonial showcases, and dynamic service 
              management with rich media support and search engine optimization.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Blog Platform Features</h3>
            <ul className="space-y-3 text-neutral-300 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Rich Text Editor:</strong> Markdown support with formatting, headings, lists, and code blocks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Media Management:</strong> Featured image uploads with automatic optimization via Next.js Image</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>SEO Tools:</strong> Meta titles, descriptions, keywords, and Open Graph tags for social sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Tag System:</strong> Categorization and filtering for content discovery and navigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Publishing Workflow:</strong> Draft/published status with scheduled publishing capabilities</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Testimonials & Social Proof</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Client success stories with star ratings and optional photo uploads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Featured testimonial highlighting for homepage prominence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Display order management for curated presentation</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">⚡ Performance & User Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Performance Optimizations</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Server-side rendering (SSR) for SEO</li>
                  <li>• Automatic code splitting by route</li>
                  <li>• Image optimization with WebP conversion</li>
                  <li>• Edge deployment via Vercel CDN</li>
                  <li>• Database connection pooling</li>
                  <li>• 95+ Lighthouse performance score</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Accessibility Features</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• WCAG 2.1 Level AA compliance</li>
                  <li>• Semantic HTML structure</li>
                  <li>• ARIA labels and landmarks</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Dark mode with system preference</li>
                  <li>• Mobile-first responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/projects/psych-skills/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors"
            >
              ← Back to Overview
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
