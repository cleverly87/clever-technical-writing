import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "AWS Deployment - Swansea Harriers Analytics Platform — Andrew Cleverly",
  description: "Deep dive into AWS Lightsail deployment strategy, DevOps practices, and production infrastructure for the Swansea Harriers Rankings Platform.",
  keywords: "AWS Lightsail, DevOps, Cloud Deployment, Production Infrastructure, CI/CD",
  openGraph: {
    title: "AWS Deployment - Swansea Harriers Rankings Platform",
    description: "Explore the cloud deployment architecture and DevOps practices for a production athletics performance tracking system.",
    type: "article",
  }
};

/**
 * Breadcrumb Navigation Component
 */
function Breadcrumb() {
  return (
    <div className="bg-neutral-950/80 border-b border-cyan-400/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          ← Portfolio
        </Link>
        <span className="text-neutral-400">/</span>
        <Link href="/projects/swansea-harriers" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Swansea Harriers
        </Link>
        <span className="text-neutral-400">/</span>
        <span className="text-neutral-100">AWS Deployment</span>
      </div>
    </div>
  );
}

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-indigo-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
          AWS Lightsail Deployment
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8">
          Production Infrastructure & DevOps Strategy
        </p>
      </div>
    </div>
  );
}

/**
 * Deployment Steps Component
 */
function DeploymentFlow() {
  const steps = [
    {
      title: "Server Provisioning",
      description: "AWS Lightsail instance setup with Ubuntu 22.04",
      icon: "🖥️",
      technologies: ["AWS Lightsail", "Ubuntu", "SSH"]
    },
    {
      title: "Environment Setup",
      description: "Python, Nginx, and application dependencies",
      icon: "⚙️", 
      technologies: ["Python 3.9+", "Nginx", "Systemd"]
    },
    {
      title: "Application Deployment",
      description: "Flask app configuration and service setup",
      icon: "🚀",
      technologies: ["Flask", "Gunicorn", "Git"]
    },
    {
      title: "Domain & SSL",
      description: "Custom domain mapping and HTTPS certification",
      icon: "🔒",
      technologies: ["Route 53", "Let's Encrypt", "Certbot"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {steps.map((step, index) => (
        <div 
          key={step.title}
          className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
        >
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">{step.title}</h3>
          <p className="text-neutral-300 mb-4 text-sm">{step.description}</p>
          <div className="flex flex-wrap gap-2">
            {step.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-neutral-700 text-neutral-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Configuration Block Component
 */
function ConfigBlock({ 
  title, 
  filename, 
  content 
}: { 
  title: string; 
  filename: string; 
  content: string; 
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
        <span>📄</span>
        {title}
      </h3>
      <div className="border border-neutral-700 rounded-lg overflow-hidden">
        <div className="bg-neutral-800 px-4 py-2 border-b border-neutral-700 flex justify-between items-center">
          <span className="text-neutral-300 font-mono text-sm">{filename}</span>
          <span className="text-xs text-neutral-500 bg-neutral-700 px-2 py-1 rounded">Config</span>
        </div>
        <pre className="bg-neutral-950 p-4 overflow-x-auto">
          <code className="text-neutral-300 text-sm font-mono">{content}</code>
        </pre>
      </div>
    </div>
  );
}

/**
 * Navigation to Other Showcases
 */
function ShowcaseNavigation() {
  const showcases = [
    { 
      name: "System Architecture", 
      icon: "🏗️", 
      href: "/projects/swansea-harriers/architecture",
      current: false 
    },
    { 
      name: "AWS Deployment", 
      icon: "☁️", 
      href: "/projects/swansea-harriers/deployment",
      current: true 
    },
    { 
      name: "Team Builder", 
      icon: "👥", 
      href: "/projects/swansea-harriers/teambuilder",
      current: false 
    },
    { 
      name: "Export System", 
      icon: "📊", 
      href: "/projects/swansea-harriers/export-system",
      current: false 
    }
  ];

  return (
    <section className="py-16 bg-neutral-950/60 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center text-neutral-100 mb-8">
          Explore More Technical Deep Dives
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcases.map((showcase) => (
            <Link
              key={showcase.name}
              href={showcase.href}
              className={`block p-6 rounded-xl text-center transition-all duration-300 ${
                showcase.current
                  ? 'bg-orange-400/20 border-2 border-orange-400 cursor-default'
                  : 'bg-neutral-800/50 border border-neutral-700 hover:border-orange-400 hover:bg-orange-400/10 hover:scale-105'
              }`}
            >
              <div className="text-4xl mb-3">{showcase.icon}</div>
              <h4 className={`font-semibold ${showcase.current ? 'text-orange-300' : 'text-cyan-400'}`}>
                {showcase.name}
              </h4>
              {showcase.current && (
                <div className="text-xs text-neutral-400 mt-2">Current Page</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DeploymentPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ScrollToTop />
      <Header />
      <Breadcrumb />
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-6">Deployment Overview</h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            The Swansea Harriers Rankings Platform is deployed on AWS Lightsail, providing a cost-effective 
            and scalable solution for hosting the Flask application with professional-grade reliability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">$10/month</div>
              <div className="text-neutral-300">AWS Lightsail Cost</div>
            </div>
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-neutral-300">Uptime Achievement</div>
            </div>
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;200ms</div>
              <div className="text-neutral-300">Response Time</div>
            </div>
          </div>
        </section>

        {/* Deployment Flow */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Deployment Pipeline</h2>
          <DeploymentFlow />
        </section>

        {/* Infrastructure Configuration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Infrastructure Configuration</h2>
          
          <ConfigBlock
            title="Nginx Configuration"
            filename="/etc/nginx/sites-available/swansea-harriers"
            content={`server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Application Proxy
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Static Files
    location /static/ {
        alias /var/www/swansea-harriers/static/;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}`}
          />

          <ConfigBlock
            title="Systemd Service Configuration"
            filename="/etc/systemd/system/swansea-harriers.service"
            content={`[Unit]
Description=Swansea Harriers Rankings Platform
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/swansea-harriers
Environment="PATH=/var/www/swansea-harriers/venv/bin"
ExecStart=/var/www/swansea-harriers/venv/bin/gunicorn --workers 3 --bind 127.0.0.1:8000 wsgi:app
Restart=always

[Install]
WantedBy=multi-user.target`}
          />

          <ConfigBlock
            title="Gunicorn Configuration"
            filename="gunicorn.conf.py"
            content={`import multiprocessing

# Server socket
bind = "127.0.0.1:8000"
backlog = 2048

# Worker processes
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'sync'
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
accesslog = '/var/log/swansea-harriers/access.log'
errorlog = '/var/log/swansea-harriers/error.log'
loglevel = 'info'

# Process naming
proc_name = 'swansea-harriers'

# Server mechanics
daemon = False
pidfile = '/var/run/swansea-harriers.pid'
user = 'www-data'
group = 'www-data'
tmp_upload_dir = None`}
          />
        </section>

        {/* Security & Monitoring */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Security & Monitoring</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <span>🔒</span>
                Security Measures
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  SSL/TLS encryption with Let's Encrypt
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Firewall configuration (UFW)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  SSH key-based authentication
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Regular security updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Access token authentication
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span>📊</span>
                Monitoring & Logs
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Nginx access & error logs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Application performance tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  System resource monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Automated backup procedures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Error alerting via email
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Optimization */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-8">Performance Optimization</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Caching Strategy</h3>
              <ul className="text-sm text-neutral-300 space-y-1">
                <li>• Static file caching (30 days)</li>
                <li>• Database query optimization</li>
                <li>• Gzip compression</li>
                <li>• Browser caching headers</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Resource Management</h3>
              <ul className="text-sm text-neutral-300 space-y-1">
                <li>• Multi-worker Gunicorn setup</li>
                <li>• Connection pooling</li>
                <li>• Memory usage optimization</li>
                <li>• CPU utilization monitoring</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Load Optimization</h3>
              <ul className="text-sm text-neutral-300 space-y-1">
                <li>• Async request handling</li>
                <li>• Database indexing</li>
                <li>• Efficient SQL queries</li>
                <li>• Resource minification</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ShowcaseNavigation />
      <Footer />
    </main>
  );
}