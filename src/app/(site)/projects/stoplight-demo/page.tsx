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
              <div className="space-y-2">
                <a 
                  href="https://github.com/cleverly87/Pleo-Demo-Task" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 text-sm rounded transition-colors w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Repository
                </a>
                <a 
                  href="https://sawdde.stoplight.io/docs/pleo-demo-task/163b938ac6a24-clarence-services-api" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 text-sm rounded transition-colors w-full"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Docs
                </a>
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
        title="Pleo Technical Writing Task"
        subtitle="Rapid platform mastery demonstration: complete API documentation portal built in 9 hours using Stoplight (zero prior experience), showcasing OpenAPI 3.1 expertise, OAuth implementation, and professional developer documentation standards."
        category="API Documentation"
        status="Live Demo"
        techStack={[
          "OpenAPI 3.1",
          "Stoplight Studio",
          "Stoplight Elements",
          "JSON Schema",
          "Spectral Linting"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Task Requirements</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Create comprehensive API documentation and developer portal demonstrating technical 
                writing capabilities, OpenAPI expertise, and ability to deliver professional results 
                within tight time constraints using an unfamiliar platform.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Platform Selection & Constraints</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Platform:</strong> Stoplight (zero prior experience)</li>
                <li>• <strong>Access Level:</strong> Free tier features only</li>
                <li>• <strong>Time Limit:</strong> 9 hours total delivery time</li>
                <li>• <strong>Deliverable:</strong> Complete API specification and documentation portal</li>
                <li>• <strong>Scope:</strong> Integration guides, flowcharts, and developer onboarding</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Delivered Outcomes</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">9 Hours</div>
                  <div className="text-sm text-neutral-400">Complete delivery from zero to live documentation</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">100%</div>
                  <div className="text-sm text-neutral-400">OpenAPI 3.1 specification compliance</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">Production</div>
                  <div className="text-sm text-neutral-400">Live, interactive documentation portal</div>
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
            
            {/* Custom API Documentation Viewer */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-neutral-200">Clarence Services API</h4>
                  <p className="text-sm text-neutral-400 mt-1">Interact with Clarence the Dog via simple HTTP calls</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">v3</span>
                  <a 
                    href="https://sawdde.stoplight.io/docs/pleo-demo-task/163b938ac6a24-clarence-services-api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-neutral-300 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
                  >
                    View Full Documentation →
                  </a>
                </div>
              </div>
              
              {/* API Overview & Structure */}
              <div className="p-6">
                <div className="mb-6 pb-6 border-b border-neutral-800">
                  <h5 className="font-semibold text-neutral-200 mb-3">API Structure & Authentication</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="text-sm font-medium text-neutral-300 mb-2">Base URL</h6>
                      <code className="text-sm bg-neutral-950 px-3 py-1 rounded text-blue-400">https://external.pleo.io/v3</code>
                      
                      <h6 className="text-sm font-medium text-neutral-300 mb-2 mt-4">Authentication</h6>
                      <div className="text-sm text-neutral-400">
                        <p className="mb-2">OAuth 2.0 with <code className="text-blue-400">clarence.actions</code> scope</p>
                        <p className="text-xs text-neutral-500">Supports both Authorization Code and Client Credentials flows</p>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium text-neutral-300 mb-2">Documentation Features</h6>
                      <ul className="text-sm text-neutral-400 space-y-1">
                        <li>• Complete integration procedures and flowcharts</li>
                        <li>• Interactive try-it-out functionality</li>
                        <li>• Code examples in multiple languages</li>
                        <li>• Comprehensive error handling scenarios</li>
                        <li>• OAuth 2.0 setup and testing guides</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-neutral-200 mb-3">Available Actions</h5>
                  <div className="space-y-3">
                    {/* POST /clarence/sit */}
                    <div className="border border-neutral-700 rounded-lg p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs font-mono rounded">POST</span>
                        <code className="text-neutral-300 font-mono">/clarence/sit</code>
                        <span className="text-xs text-neutral-500">Ask Clarence to sit</span>
                      </div>
                      <p className="text-sm text-neutral-400 mb-3">Returns confirmation if Clarence sits successfully.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Success Response (200)</h6>
                          <div className="bg-neutral-950 rounded p-2 text-xs">
                            <code className="text-neutral-300">
{`{
  "status": "ok",
  "action": "sit",
  "detail": "Clarence sits politely. Good boy!"
}`}
                            </code>
                          </div>
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Error Response (400)</h6>
                          <div className="bg-neutral-950 rounded p-2 text-xs">
                            <code className="text-neutral-300">
{`{
  "type": "clarence_asleep",
  "message": "Clarence is asleep. Try again in a few minutes."
}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* GET /clarence/paw */}
                    <div className="border border-neutral-700 rounded-lg p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs font-mono rounded">GET</span>
                        <code className="text-neutral-300 font-mono">/clarence/paw</code>
                        <span className="text-xs text-neutral-500">Ask Clarence to offer his paw</span>
                      </div>
                      <p className="text-sm text-neutral-400 mb-3">Choose which paw using the <strong>side</strong> query parameter.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Query Parameters</h6>
                          <div className="space-y-1 mb-3">
                            <div className="text-xs"><code className="text-blue-400">side</code> <span className="text-neutral-500">enum: "left" | "right" (required)</span></div>
                          </div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Example Request</h6>
                          <code className="text-xs text-neutral-400">GET /clarence/paw?side=left</code>
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Response Examples</h6>
                          <div className="bg-neutral-950 rounded p-2 text-xs">
                            <code className="text-neutral-300">
{`{
  "status": "ok",
  "action": "paw",
  "detail": "Clarence offers his left paw."
}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* POST /clarence/heel */}
                    <div className="border border-neutral-700 rounded-lg p-4 hover:border-neutral-600 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs font-mono rounded">POST</span>
                        <code className="text-neutral-300 font-mono">/clarence/heel</code>
                        <span className="text-xs text-neutral-500">Ask Clarence to heel</span>
                      </div>
                      <p className="text-sm text-neutral-400 mb-3">Commands Clarence to walk obediently beside you.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Request</h6>
                          <p className="text-xs text-neutral-500 mb-2">No request body required</p>
                          <p className="text-xs text-neutral-500">Requires OAuth 2.0 with <code className="text-blue-400">clarence.actions</code> scope</p>
                        </div>
                        <div>
                          <h6 className="text-xs font-semibold text-neutral-400 mb-2">Success Response (200)</h6>
                          <div className="bg-neutral-950 rounded p-2 text-xs">
                            <code className="text-neutral-300">
{`{
  "status": "ok",
  "action": "heel",
  "detail": "Clarence heels at your side."
}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schema Information */}
                <div className="border-t border-neutral-800 pt-6">
                  <h5 className="font-semibold text-neutral-200 mb-3">Core Data Models</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-neutral-700 rounded p-3">
                      <h6 className="font-medium text-neutral-300 mb-2">ActionResult Schema</h6>
                      <div className="text-xs space-y-1">
                        <div><code className="text-blue-400">status</code> <span className="text-neutral-500">enum: "ok" (required)</span></div>
                        <div><code className="text-blue-400">action</code> <span className="text-neutral-500">string (required)</span></div>
                        <div><code className="text-blue-400">detail</code> <span className="text-neutral-500">string (optional)</span></div>
                      </div>
                    </div>
                    <div className="border border-neutral-700 rounded p-3">
                      <h6 className="font-medium text-neutral-300 mb-2">Error Schema</h6>
                      <div className="text-xs space-y-1">
                        <div><code className="text-blue-400">type</code> <span className="text-neutral-500">string (required)</span></div>
                        <div><code className="text-blue-400">message</code> <span className="text-neutral-500">string (required)</span></div>
                        <div className="mt-2 text-neutral-600">Common types: clarence_asleep, unauthorized, forbidden</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Rapid Platform Mastery: 9-Hour Challenge">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">The Challenge</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Demonstrate technical writing and API documentation capabilities using Stoplight - 
                a platform I had never used before - with a 9-hour time limit and access only to 
                free tier features. The goal: prove I can rapidly learn and effectively leverage 
                unfamiliar tools to deliver professional results.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Approach & Strategy</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Rapid Learning (2 hours)</h4>
                  <p className="text-sm">Platform exploration, feature mapping, and identifying optimal workflow for the constraint.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Strategic Design (3 hours)</h4>
                  <p className="text-sm">OpenAPI 3.1 specification creation with creative but professional API concept (Clarence the Dog).</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Documentation Development (4 hours)</h4>
                  <p className="text-sm">Complete portal with integration guides, flowcharts, and comprehensive documentation structure.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Constraints & Solutions</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral-200 mb-2">Free Tier Limitations</h4>
                  <p className="text-sm text-neutral-400">No advanced features, limited customization. Solution: Focus on content quality and maximize basic feature utilization.</p>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral-200 mb-2">Zero Prior Experience</h4>
                  <p className="text-sm text-neutral-400">Never used Stoplight before. Solution: Systematic exploration and rapid iteration based on documentation patterns.</p>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold text-neutral-200 mb-2">9-Hour Time Constraint</h4>
                  <p className="text-sm text-neutral-400">Tight deadline requiring efficiency. Solution: Front-load learning, focus on core deliverables, iterate quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Technical Execution & Results">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              The final deliverable demonstrates comprehensive API documentation capabilities within 
              platform constraints, showcasing ability to adapt quickly to new toolchains while 
              maintaining professional standards and creative problem-solving.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">What Was Delivered</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Complete OpenAPI 3.1 Spec</h4>
                <p className="text-sm text-neutral-400">Fully functional API specification with OAuth 2.0, comprehensive error handling, and realistic examples.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Integration Documentation</h4>
                <p className="text-sm text-neutral-400">Step-by-step guides, flowcharts, and procedures for developer onboarding and implementation.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Interactive Portal</h4>
                <p className="text-sm text-neutral-400">Public documentation site with try-it-out functionality and multi-language code examples.</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Core Capabilities Demonstrated</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-neutral-200 mb-3">Platform Agnostic Skills</h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Rapid tool evaluation and workflow optimization</li>
                  <li>• OpenAPI specification design and architecture</li>
                  <li>• Technical writing for developer audiences</li>
                  <li>• Documentation structure and information architecture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-neutral-200 mb-3">Adaptability & Efficiency</h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Learning unknown platforms under time pressure</li>
                  <li>• Working within constraint limitations effectively</li>
                  <li>• Maintaining quality standards with limited resources</li>
                  <li>• Creative problem-solving within technical boundaries</li>
                </ul>
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

        <ProjectSection title="Documentation Architecture & Future-Proofing">
          <div className="text-neutral-300">
            <p className="mb-6 leading-relaxed">
              The specification was designed with extensibility and developer experience in mind, 
              creating a foundation that supports advanced integrations and tooling even within 
              the constraints of a 9-hour delivery window.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Built-In Features</h4>
                <ul className="text-sm space-y-1">
                  <li>• Interactive try-it-out functionality with OAuth</li>
                  <li>• Multi-language code examples (auto-generated)</li>
                  <li>• Comprehensive error handling documentation</li>
                  <li>• Integration flowcharts and step-by-step guides</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">SDK-Ready Architecture</h4>
                <ul className="text-sm space-y-1">
                  <li>• Consistent naming conventions for code generation</li>
                  <li>• Proper schema definitions enabling SDK creation</li>
                  <li>• Structured for Postman collection export</li>
                  <li>• OpenAPI 3.1 compatibility with modern toolchains</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <h4 className="font-semibold text-neutral-200 mb-2">Strategic Design</h4>
              <p className="text-sm text-neutral-400">
                The API specification structure anticipates common developer needs and tooling requirements, 
                ensuring that when SDK generation or advanced integrations are needed, the foundation is already in place.
                This demonstrates forward-thinking documentation design within rapid delivery constraints.
              </p>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}