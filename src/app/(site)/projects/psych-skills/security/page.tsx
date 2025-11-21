import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Psych-Skills Security — Andrew Cleverly" };

function Breadcrumb() {
  return (
    <div className="bg-neutral-950/80 border-b border-rose-400/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
        <Link href="/projects" className="text-rose-400 hover:text-rose-300 transition-colors">
          ← Portfolio
        </Link>
        <span className="text-neutral-400">/</span>
        <Link href="/projects/psych-skills" className="text-rose-400 hover:text-rose-300 transition-colors">
          Psych-Skills
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="text-neutral-100">Security</span>
      </div>
    </div>
  );
}

export default function PsychSkillsSecurityPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <section className="flex-grow py-16 px-6 bg-gradient-to-br from-neutral-950 to-rose-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-neutral-100 mb-6">Enterprise Security Architecture</h1>
          
          <div className="bg-gradient-to-r from-rose-900/30 to-purple-900/30 border-l-4 border-rose-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-rose-300 mb-3">Multi-Layer Security Model</h2>
            <p className="text-neutral-300 leading-relaxed">
              The platform implements a comprehensive 5-layer security architecture designed for healthcare 
              data protection, combining authentication, authorization, rate limiting, bot protection, and 
              monitoring to safeguard sensitive client information.
            </p>
          </div>
          
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-rose-400 mb-4">🔐 Authentication & Authorization</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Industry-standard authentication with NextAuth.js providing secure session management, 
              role-based access control, and comprehensive password security measures.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Core Security Features</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✓</span>
                <span><strong>NextAuth.js Integration:</strong> Industry-standard OAuth provider with credentials authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✓</span>
                <span><strong>Bcrypt Hashing:</strong> 12-round salted password hashing for secure credential storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✓</span>
                <span><strong>JWT Sessions:</strong> 24-hour expiry tokens with automatic refresh and secure storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✓</span>
                <span><strong>Role-Based Access:</strong> Owner and Admin roles with granular permission control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✓</span>
                <span><strong>Server-Side Validation:</strong> Every protected route verifies session authentication</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">🛡️ Progressive Rate Limiting & IP Protection</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Intelligent rate limiting system with progressive escalation to prevent brute-force attacks 
              while maintaining usability for legitimate users.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Rate Limit Tiers</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li><strong>Tier 1:</strong> 5 failed attempts = 15-minute cooldown</li>
                  <li><strong>Tier 2:</strong> 10 total attempts = 1-hour IP ban</li>
                  <li><strong>Whitelist:</strong> Admin-configurable trusted IPs</li>
                  <li><strong>Auto-Cleanup:</strong> Expired limits cleared automatically</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">IP Management</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Real-time tracking of login attempts</li>
                  <li>• Manual IP blocking / unblocking</li>
                  <li>• Permanent whitelist configuration</li>
                  <li>• Security dashboard monitoring</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Math-Based CAPTCHA</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Lightweight bot protection using simple arithmetic questions (addition/subtraction). 
              No external dependencies or user tracking required. Tokens expire after 5 minutes.
            </p>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">🔑 Password Management & Recovery</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Secure password reset workflow with token-based verification, time-limited access, 
              and encrypted email delivery for account recovery.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Reset Flow Security</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Crypto-Secure Tokens:</strong> 32-byte random tokens generated with Node.js crypto module</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Time-Limited Access:</strong> Reset links expire after 1 hour for security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>One-Time Use:</strong> Tokens are cleared after successful password reset</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Email Verification:</strong> Reset links sent only to registered email addresses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>Fallback Logging:</strong> Console output when SMTP not configured (dev mode)</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🛠️ Additional Security Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Application Security</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• <strong>SQL Injection:</strong> Prisma parameterized queries</li>
                  <li>• <strong>XSS Prevention:</strong> React automatic escaping + CSP</li>
                  <li>• <strong>CSRF Protection:</strong> NextAuth built-in tokens</li>
                  <li>• <strong>Secure Headers:</strong> Next.js security configuration</li>
                  <li>• <strong>HTTPS Only:</strong> SSL/TLS enforced in production</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-200 mb-3">Data Protection</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• <strong>Environment Variables:</strong> Secrets never committed</li>
                  <li>• <strong>Database Backups:</strong> Built-in backup/restore scripts</li>
                  <li>• <strong>GDPR Compliance:</strong> User data protection measures</li>
                  <li>• <strong>Audit Logging:</strong> Security event tracking</li>
                  <li>• <strong>Session Security:</strong> HttpOnly cookies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">📊 Security Monitoring Dashboard</h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Real-time security monitoring interface providing visibility into authentication attempts, 
              blocked IPs, rate limit status, and system security events.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">Dashboard Capabilities</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span><strong>Blocked IP Monitoring:</strong> View all currently blocked addresses with ban duration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span><strong>Login Attempt Tracking:</strong> Real-time activity feed with attempt counts per IP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span><strong>Manual IP Management:</strong> Pre-emptive blocking and whitelist configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span><strong>Rate Limit Statistics:</strong> See which IPs are approaching thresholds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span><strong>Auto-Refresh:</strong> Dashboard updates every 30 seconds for live monitoring</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/projects/psych-skills/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-purple-600 transition-colors"
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
