import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Stoplight Demo System — Andrew Cleverly" };

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
              <a 
                href="https://github.com/cleverly87/stoplight-demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 text-sm rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </a>
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

/**
 * CodeBlock - Component for displaying code snippets
 */
function CodeBlock({ 
  title, 
  language, 
  children 
}: { 
  title: string; 
  language: string; 
  children: string; 
}) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex justify-between items-center">
        <h4 className="font-semibold text-neutral-200">{title}</h4>
        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">{language}</span>
      </div>
      <pre className="bg-neutral-950 p-4 overflow-x-auto">
        <code className="text-neutral-300 text-sm">{children}</code>
      </pre>
    </div>
  );
}

export default function StoplightProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Stoplight Demo System"
        subtitle="Advanced API design toolchain demonstration showcasing collaborative workflows, enterprise governance patterns, and modern documentation automation using Stoplight's professional platform."
        category="API Documentation"
        status="Live Demo"
        techStack={[
          "OpenAPI 3.1",
          "Stoplight Studio",
          "Stoplight Elements",
          "JSON Schema",
          "Spectral Linting",
          "Git Workflows",
          "CI/CD Integration"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Demonstration Goal</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Create a comprehensive demonstration of Stoplight's enterprise API design and 
                documentation capabilities, showcasing best practices for collaborative API 
                development and governance in modern organizations.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Features Demonstrated</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Design-first API development workflow</li>
                <li>• Collaborative editing and review processes</li>
                <li>• Automated validation and linting</li>
                <li>• Git-based version control integration</li>
                <li>• Interactive documentation generation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Documentation Outcomes</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">100%</div>
                  <div className="text-sm text-neutral-400">OpenAPI 3.1 specification compliance</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">Interactive</div>
                  <div className="text-sm text-neutral-400">Try-it-out functionality</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">Git-Based</div>
                  <div className="text-sm text-neutral-400">Version controlled documentation</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Live Documentation Portal">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6">
              The live demonstration showcases a complete API documentation experience with 
              interactive testing, code generation, and comprehensive examples - all generated 
              from a single OpenAPI specification.
            </p>
            <EmbeddedPreview
              url="https://sawdde.stoplight.io/"
              title="Stoplight Demo Documentation"
              description="Interactive API documentation with try-it-out functionality and code examples"
            />
          </div>
        </ProjectSection>

        <ProjectSection title="OpenAPI Specification Design">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Specification Structure</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Resource-Based Design</h4>
                  <p className="text-sm">RESTful API patterns with clear resource hierarchies and consistent endpoint naming conventions.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Comprehensive Schemas</h4>
                  <p className="text-sm">Detailed JSON Schema definitions with validation rules, examples, and clear property descriptions.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Error Handling</h4>
                  <p className="text-sm">Standardized error response patterns with detailed error codes and user-friendly messages.</p>
                </div>
              </div>
            </div>
            
            <div>
              <CodeBlock 
                title="OpenAPI Schema Example" 
                language="YAML"
              >
{`openapi: 3.1.0
info:
  title: Demo API
  version: 1.0.0
  description: |
    Comprehensive API demonstration showcasing modern 
    OpenAPI 3.1 patterns and documentation best practices.
    
paths:
  /users/{userId}:
    get:
      summary: Retrieve user details
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: string
            format: uuid
          example: "123e4567-e89b-12d3-a456-426614174000"
      responses:
        '200':
          description: User details retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
              examples:
                standard_user:
                  summary: Standard user example
                  value:
                    id: "123e4567-e89b-12d3-a456-426614174000"
                    name: "John Doe"
                    email: "john@example.com"
                    created_at: "2024-01-15T10:30:00Z"`}
              </CodeBlock>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Stoplight Platform Features">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Design & Collaboration</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Visual Designer:</strong> Form-based API specification editing</li>
                <li>• <strong>Code Editor:</strong> Advanced YAML/JSON editing with validation</li>
                <li>• <strong>Collaborative Reviews:</strong> Team-based specification reviews</li>
                <li>• <strong>Version Control:</strong> Git integration with branch workflows</li>
                <li>• <strong>Change Tracking:</strong> Detailed diff visualization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Documentation & Testing</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Auto-Generation:</strong> Beautiful docs from specifications</li>
                <li>• <strong>Interactive Testing:</strong> Built-in API client with auth</li>
                <li>• <strong>Code Examples:</strong> Multi-language client generation</li>
                <li>• <strong>Mock Servers:</strong> Instant API simulation for testing</li>
                <li>• <strong>Custom Branding:</strong> Branded documentation portals</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Enterprise Governance Patterns">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              This demonstration showcases how Stoplight enables enterprise-grade API governance 
              through automated validation, style guides, and collaborative workflows that scale 
              across large development organizations.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Governance Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Spectral Linting</h4>
                <p className="text-sm text-neutral-400">Automated style guide enforcement with custom rules for API consistency across teams.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Design Libraries</h4>
                <p className="text-sm text-neutral-400">Reusable components and patterns shared across multiple API specifications.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Workflow Integration</h4>
                <p className="text-sm text-neutral-400">CI/CD pipeline integration with automated testing and documentation deployment.</p>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Implementation Insights">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Design Decisions</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Design-First Approach</h4>
                  <p className="text-sm">Specification-driven development ensuring consistency between documentation and implementation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Component Reusability</h4>
                  <p className="text-sm">Shared schemas and examples across endpoints to maintain consistency and reduce duplication.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Comprehensive Examples</h4>
                  <p className="text-sm">Rich examples covering edge cases, error scenarios, and realistic data patterns.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Best Practices Demonstrated</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Semantic versioning for API evolution</li>
                <li>• Consistent error response formats</li>
                <li>• Comprehensive parameter validation</li>
                <li>• Clear authentication documentation</li>
                <li>• Rate limiting and quota guidance</li>
                <li>• Deprecation strategies and migration paths</li>
              </ul>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Documentation Excellence">
          <div className="text-neutral-300">
            <p className="mb-6 leading-relaxed">
              This project demonstrates advanced documentation techniques that go beyond basic API 
              reference material, creating a comprehensive developer experience that accelerates 
              adoption and reduces support overhead.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Content Strategy</h4>
                <ul className="text-sm space-y-1">
                  <li>• Progressive disclosure of complexity</li>
                  <li>• Use case-driven documentation structure</li>
                  <li>• Interactive tutorials and guides</li>
                  <li>• Comprehensive error handling guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Developer Experience</h4>
                <ul className="text-sm space-y-1">
                  <li>• Try-it-out functionality with real responses</li>
                  <li>• Multi-language code generation</li>
                  <li>• SDK download and integration guides</li>
                  <li>• Postman collection exports</li>
                </ul>
              </div>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}