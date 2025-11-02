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
        title="Creditsafe Global API Platform"
        subtitle="Enterprise documentation infrastructure architected from scratch for a multi-million pound global organization. Complete transformation from error-filled OpenAPI files to a flagship developer platform serving 14+ countries with Doc-as-Code philosophy, enterprise governance, and measurable business impact."
        category="Enterprise Platform"
        status="Production at Scale"
        techStack={[
          "Redocly Enterprise",
          "Azure DevOps",
          "MS Entra ID",
          "Python",
          "Postman",
          "VS Code",
          "OpenAPI 3.0/3.1",
          "Arazzo Testing",
          "Adobe Analytics",
          "MS Clarity",
          "Modular Framework",
          "Custom SSO",
          "EU GDPR Compliance"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Platform Architecture & Transformation">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Challenge: Global Scale Transformation</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Single-handedly architected and built a complete documentation infrastructure from the ground up for a 
                multi-million pound global organization. Started with error-filled OpenAPI files and transformed into 
                a flagship developer platform serving millions of API calls across 14+ countries.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Stakeholder Alignment</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Development Teams:</strong> Multiple dev teams across global offices</li>
                <li>• <strong>QA & Testing:</strong> Integrated quality assurance workflows</li>
                <li>• <strong>Product & Marketing:</strong> Business alignment and go-to-market</li>
                <li>• <strong>C-Suite Management:</strong> Executive-level platform positioning</li>
                <li>• <strong>External Clients:</strong> Customer engagement and feedback integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Measured Business Impact</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">80%</div>
                  <div className="text-sm text-neutral-400">Reduction in developer onboarding time</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">40%</div>
                  <div className="text-sm text-neutral-400">Decrease in support tickets to service desk</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">14+</div>
                  <div className="text-sm text-neutral-400">Countries served with unified platform</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">Product</div>
                  <div className="text-sm text-neutral-400">Positioned as flagship offering</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Enterprise Infrastructure & Governance">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Built on Doc-as-Code philosophy with Azure DevOps as the development environment, ensuring documentation 
              lives alongside code with enterprise-grade governance, security, and compliance built into every layer.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="border border-neutral-800 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-200 mb-3">Security & Compliance</h4>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• MS Entra ID SSO integration and governance</li>
                <li>• EU GDPR compliance with cookie management</li>
                <li>• EU Accessibility regulations adherence</li>
                <li>• Role-based access controls</li>
                <li>• Custom domain and redirect management</li>
              </ul>
            </div>
            
            <div className="border border-neutral-800 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-200 mb-3">Analytics & Intelligence</h4>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• MS Clarity for user behavior analysis</li>
                <li>• Adobe Analytics for comprehensive tracking</li>
                <li>• Customer feedback mechanisms integration</li>
                <li>• Documentation value correlation metrics</li>
                <li>• AI-ready content structuring and optimization</li>
              </ul>
            </div>
            
            <div className="border border-neutral-800 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-200 mb-3">Automation & Quality</h4>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• CI/CD automation with Azure DevOps</li>
                <li>• Arazzo tooling for verification and validation</li>
                <li>• Automated SDK updates on pipeline runs</li>
                <li>• Peer review workflows and governance</li>
                <li>• Version control through Git integration</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-200 mb-4">Modular Framework Architecture</h4>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                Designed modular framework for ease of management, enabling multiple development teams 
                to work concurrently while maintaining consistency and quality across all documentation.
              </p>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>• Markdown-based content creation alongside OpenAPI design</li>
                <li>• Separate tooling ecosystem for rendering and UI interaction</li>
                <li>• Central portal infrastructure orchestrating all pipelines</li>
                <li>• OpenAPI 3.0 and 3.1 version support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-neutral-200 mb-4">Deployment & Scaling Strategy</h4>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                Phased deployment approach with concurrent live production during transition, 
                enabling zero-downtime transformation while maintaining service availability.
              </p>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>• Stakeholder engagement (internal and external)</li>
                <li>• Workshop delivery for key stakeholders</li>
                <li>• Customer feedback integration and workflow guidance</li>
                <li>• AI assistance integration for documentation tasks</li>
              </ul>
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