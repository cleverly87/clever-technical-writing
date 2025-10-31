import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Creditsafe API Platform — Andrew Cleverly" };

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

/**
 * EmbeddedPreview - Component for showing live websites within the project
 */
function EmbeddedPreview({ 
  url, 
  title, 
  description 
}: { 
  url: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800">
        <h4 className="font-semibold text-neutral-200">{title}</h4>
        <p className="text-sm text-neutral-400 mt-1">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-neutral-500 hover:text-neutral-300 mt-2 inline-block"
        >
          Open in new tab →
        </a>
      </div>
      <div className="aspect-video bg-neutral-800">
        <iframe
          src={url}
          className="w-full h-full"
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}

export default function CreditsafeProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Creditsafe API Platform"
        subtitle="Enterprise-scale OpenAPI governance with multi-product documentation architecture, automated SDK generation, and developer portal integration for global financial data APIs."
        category="API Documentation"
        status="Production"
        techStack={[
          "OpenAPI 3.1",
          "Redocly Realm",
          "GitHub Actions",
          "Node.js",
          "TypeScript",
          "Docker",
          "AWS CloudFront"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Creditsafe needed a unified documentation platform for multiple API products 
                serving thousands of developers across 14 countries. The existing documentation 
                was fragmented, inconsistent, and lacked proper governance controls.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Solution Architecture</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Modular OpenAPI 3.1 specification architecture</li>
                <li>• Automated validation and testing pipelines</li>
                <li>• Multi-environment deployment strategy</li>
                <li>• Integrated SDK generation workflows</li>
                <li>• Role-based access controls and governance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">60%</div>
                  <div className="text-sm text-neutral-400">Reduction in developer onboarding time</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">14</div>
                  <div className="text-sm text-neutral-400">Countries with unified documentation</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">35%</div>
                  <div className="text-sm text-neutral-400">Decrease in API support tickets</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Live Documentation Portal">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6">
              The production documentation portal showcasing the unified API ecosystem 
              with interactive examples, SDK downloads, and comprehensive guides.
            </p>
            <EmbeddedPreview
              url="https://doc.creditsafe.com/"
              title="Creditsafe Developer Portal"
              description="Production documentation platform serving thousands of developers globally"
            />
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Implementation">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Architecture Decisions</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Modular OpenAPI Structure</h4>
                  <p className="text-sm">Separated specifications by product while maintaining consistency through shared components and standardized patterns.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">CI/CD Integration</h4>
                  <p className="text-sm">GitHub Actions pipeline for automated validation, testing, and deployment across multiple environments.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">SDK Generation</h4>
                  <p className="text-sm">Automated SDK generation in multiple languages with consistent patterns and error handling.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Features</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Real-time API testing with authentication</li>
                <li>• Multi-language code examples</li>
                <li>• Interactive parameter exploration</li>
                <li>• Comprehensive error code documentation</li>
                <li>• Rate limiting and quota guidance</li>
                <li>• Webhook documentation and testing</li>
                <li>• SDK download with usage examples</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Development Process">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              This project required deep collaboration with engineering teams across multiple countries, 
              product managers, and external developer communities. The challenge was not just technical 
              but organizational - establishing governance processes that could scale with the business.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Implementation Phases</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Phase 1: Foundation</h4>
                <p className="text-sm text-neutral-400">OpenAPI specification audit, toolchain selection, and governance framework design.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Phase 2: Migration</h4>
                <p className="text-sm text-neutral-400">Legacy documentation analysis, content migration, and automated validation implementation.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Phase 3: Optimization</h4>
                <p className="text-sm text-neutral-400">Performance optimization, advanced features, and developer experience improvements.</p>
              </div>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}