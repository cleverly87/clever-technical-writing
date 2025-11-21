import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Psych-Skills Architecture — Andrew Cleverly" };

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
        <span className="text-neutral-100">Architecture</span>
      </div>
    </div>
  );
}

export default function PsychSkillsArchitecturePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <section className="flex-grow py-16 px-6 bg-gradient-to-br from-neutral-950 to-emerald-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">System Architecture</h1>
          
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Next.js 14 App Router Architecture</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              The platform leverages Next.js 14's App Router with server components for optimal performance, 
              utilizing server-side rendering, automatic code splitting, and edge deployment capabilities.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Application Structure</h3>
            <div className="bg-neutral-900/50 p-6 rounded-lg font-mono text-sm text-neutral-300 mb-6 overflow-x-auto">
              <pre>{`app/
├── (marketing)/          # Public pages (SSR)
│   ├── page.tsx         # Homepage
│   ├── booking/         # Session booking
│   ├── blog/            # SEO blog
│   └── contact/         # Contact form
├── admin/               # Protected area
│   ├── (auth)/         # Login flows
│   └── (protected)/    # Dashboard
└── api/                 # API routes
    ├── auth/           # NextAuth
    ├── bookings/       # CRUD ops
    └── admin/          # Admin endpoints`}</pre>
            </div>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Key Architectural Patterns</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Server Components:</strong> Default rendering for reduced JavaScript bundle size and improved performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>API Route Handlers:</strong> RESTful endpoints for CRUD operations with TypeScript type safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Middleware Protection:</strong> Session validation on all protected routes with role-based access control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Database ORM:</strong> Prisma for type-safe database queries with automatic migrations</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Database Schema Design</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              PostgreSQL database with Prisma ORM featuring 9 normalized models for bookings, users, 
              content management, and system configuration. Full referential integrity with cascading operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Core Models</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• User (roles, authentication)</li>
                  <li>• Booking (sessions, payments)</li>
                  <li>• Service (offerings, pricing)</li>
                  <li>• Availability (scheduling)</li>
                  <li>• BlockedDate (calendar mgmt)</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Content Models</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• BlogPost (SEO content)</li>
                  <li>• Tag (categorization)</li>
                  <li>• Testimonial (reviews)</li>
                  <li>• ContactSubmission (leads)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Technology Stack Details</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Frontend</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Next.js 14.2</li>
                  <li>• React 18</li>
                  <li>• TypeScript 5.3</li>
                  <li>• Tailwind CSS</li>
                  <li>• shadcn/ui</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Backend</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Node.js Runtime</li>
                  <li>• PostgreSQL</li>
                  <li>• Prisma ORM 5.22</li>
                  <li>• NextAuth.js 4.24</li>
                  <li>• bcrypt</li>
                  <li>• Nodemailer</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">DevOps</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Vercel Platform</li>
                  <li>• Edge Deployment</li>
                  <li>• GitHub Actions</li>
                  <li>• Prisma Migrate</li>
                  <li>• ESLint</li>
                  <li>• Git Version Control</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/projects/psych-skills/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-colors"
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
