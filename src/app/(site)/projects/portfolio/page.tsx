import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/link";

export const metadata = { title: "Portfolio Platform Architecture — Andrew Cleverly" };

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
                href="https://github.com/cleverly87/clever-technical-writing" 
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

export default function PortfolioProjectPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <ProjectHeader
        title="Portfolio Platform Architecture"
        subtitle="Professional consultancy platform built with Next.js 14, automated CI/CD workflows, and enterprise-grade AWS deployment architecture demonstrating modern web development and infrastructure capabilities."
        category="Web Platform"
        status="Production"
        techStack={[
          "Next.js 14",
          "TypeScript",
          "Tailwind CSS",
          "GitHub Actions",
          "AWS S3",
          "CloudFront",
          "Route 53",
          "AWS Lambda"
        ]}
      />

      <div className="flex-grow">
        <ProjectSection title="Project Overview">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Strategic Purpose</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Design and implement a professional consultancy platform that demonstrates technical 
                capabilities while serving as a business development tool. The platform needed to 
                showcase both documentation expertise and full-stack development skills.
              </p>
              
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Technical Requirements</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Modern React framework with server-side rendering</li>
                <li>• Professional design system with dark theme</li>
                <li>• Automated deployment and content delivery</li>
                <li>• Global performance optimization</li>
                <li>• Version control integration and workflow automation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Platform Metrics</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">&lt; 2s</div>
                  <div className="text-sm text-neutral-400">Page load time globally via CloudFront</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">100%</div>
                  <div className="text-sm text-neutral-400">Automated deployment success rate</div>
                </div>
                <div className="border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-neutral-200">5 Pages</div>
                  <div className="text-sm text-neutral-400">Comprehensive project showcase</div>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Architecture & Technology Decisions">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Framework Selection</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">Next.js 14 with App Router</h4>
                  <p className="text-sm">Modern React framework providing server-side rendering, static generation, and optimal performance characteristics.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">TypeScript Integration</h4>
                  <p className="text-sm">Strict typing for component interfaces, API interactions, and development workflow reliability.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">Tailwind CSS System</h4>
                  <p className="text-sm">Professional design system with custom neutral palette and responsive component architecture.</p>
                </div>
              </div>
            </div>
            
            <div>
              <CodeBlock 
                title="Next.js Configuration" 
                language="JavaScript"
              >
{`/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://clever-technical-writing.com' 
    : '',
  
  // Enable static optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['tailwindcss']
  },
  
  // Build optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};

export default nextConfig;`}
              </CodeBlock>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="AWS Infrastructure Implementation">
          <div className="mb-8">
            <p className="text-neutral-300 mb-6">
              The platform utilizes a comprehensive AWS architecture for global content delivery, 
              security, and performance optimization. Every component is configured for enterprise-grade 
              reliability and scalability.
            </p>
            
            <CodeBlock 
              title="GitHub Actions Deployment Workflow" 
              language="YAML"
            >
{`name: Deploy to AWS S3 and CloudFront

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build application
      run: npm run build
      
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: eu-west-2
        
    - name: Sync to S3
      run: |
        aws s3 sync ./out s3://clever-technical-writing.com \\
          --delete \\
          --cache-control "public, max-age=31536000, immutable" \\
          --exclude "*.html" \\
          --exclude "*.json"
          
        aws s3 sync ./out s3://clever-technical-writing.com \\
          --delete \\
          --cache-control "public, max-age=0, must-revalidate" \\
          --include "*.html" \\
          --include "*.json"
          
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \\
          --distribution-id \${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \\
          --paths "/*"`}
            </CodeBlock>
          </div>
        </ProjectSection>

        <ProjectSection title="Content Strategy & Component Architecture">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Design System Principles</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Neutral Professional Palette:</strong> Executive-level aesthetics</li>
                <li>• <strong>Modular Components:</strong> Reusable UI elements across pages</li>
                <li>• <strong>Responsive Design:</strong> Mobile-first with desktop optimization</li>
                <li>• <strong>Performance Focus:</strong> Optimized loading and interaction</li>
                <li>• <strong>Accessibility Compliance:</strong> WCAG standards implementation</li>
                <li>• <strong>SEO Optimization:</strong> Meta tags and structured data</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Component Examples</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-neutral-200">ProjectHeader</h4>
                  <p className="text-sm">Standardized project introduction with tech stack, status, and GitHub integration.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">OutcomeCarousel</h4>
                  <p className="text-sm">Interactive expertise showcase with responsive navigation and outcome metrics.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-200">EmbeddedPreview</h4>
                  <p className="text-sm">Secure iframe integration for live system demonstrations within project pages.</p>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Performance & Security Implementation">
          <div className="text-neutral-300">
            <p className="mb-6 leading-relaxed">
              The platform implements enterprise-grade performance optimization and security measures, 
              demonstrating production-ready development practices and AWS best practices.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">CloudFront CDN</h4>
                <ul className="text-sm space-y-1">
                  <li>• Global edge location distribution</li>
                  <li>• Intelligent cache control headers</li>
                  <li>• Automatic HTTPS enforcement</li>
                  <li>• Custom error page handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">S3 Configuration</h4>
                <ul className="text-sm space-y-1">
                  <li>• Static website hosting optimization</li>
                  <li>• Bucket policy security controls</li>
                  <li>• Versioning and lifecycle management</li>
                  <li>• Cross-origin resource sharing (CORS)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-200 mb-3">Route 53 DNS</h4>
                <ul className="text-sm space-y-1">
                  <li>• Custom domain configuration</li>
                  <li>• Health checks and monitoring</li>
                  <li>• SSL certificate management</li>
                  <li>• Global DNS optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Business & Technical Outcomes">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              This platform serves dual purposes: demonstrating technical capabilities to potential 
              clients while providing a scalable foundation for business development and content 
              management. The architecture decisions reflect enterprise development practices.
            </p>
            
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Technical Demonstration</h4>
                <p className="text-sm text-neutral-400">Showcases modern web development, AWS infrastructure, and CI/CD automation capabilities to potential clients.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Professional Positioning</h4>
                <p className="text-sm text-neutral-400">Positions expertise beyond documentation into full-stack development and cloud architecture.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Scalable Foundation</h4>
                <p className="text-sm text-neutral-400">Provides extensible platform for content expansion, case studies, and business growth.</p>
              </div>
              <div className="border border-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Cost Optimization</h4>
                <p className="text-sm text-neutral-400">Efficient AWS resource utilization with S3 storage and CloudFront caching minimizing operational costs.</p>
              </div>
            </div>
          </div>
        </ProjectSection>
      </div>
      
      <Footer />
    </main>
  );
}