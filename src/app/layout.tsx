import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://clever-technical-writing.com'),
  title: {
    default: "Andrew Cleverly – API Documentation Consultant & Systems Architect",
    template: "%s | Andrew Cleverly"
  },
  description: "Portfolio and consultancy platform of Andrew Cleverly. I design and build documentation infrastructure: DocOps pipelines, API portals, SDK automation, and PDF systems built on OpenAPI and CI/CD tooling.",
  keywords: [
    "API documentation consultant",
    "DocOps specialist", 
    "OpenAPI architect",
    "documentation systems",
    "CI/CD documentation",
    "SDK automation",
    "technical writing consultant",
    "developer experience",
    "API portal development",
    "documentation infrastructure",
    "Redocly consultant",
    "Stoplight specialist"
  ],
  authors: [{ name: "Andrew Cleverly", url: "https://clever-technical-writing.com" }],
  creator: "Andrew Cleverly",
  publisher: "Clever Technical Writing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://clever-technical-writing.com',
    siteName: 'Clever Technical Writing',
    title: 'Andrew Cleverly – API Documentation Consultant & Systems Architect',
    description: 'Building developer-focused documentation infrastructure: DocOps, CI/CD, OpenAPI systems, and automation tools.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Andrew Cleverly - API Documentation Consultant',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AndrewCleverly',
    creator: '@AndrewCleverly',
    title: 'Andrew Cleverly – API Documentation Consultant',
    description: 'Technical writer and documentation systems architect building scalable API content workflows and developer tools.',
    images: ['/twitter-card.png'],
  },
  alternates: {
    canonical: 'https://clever-technical-writing.com',
  },
  category: 'Technology',
  other: {
    'linkedin:owner': 'andrew-cleverly',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Clever Technical Writing',
              url: 'https://clever-technical-writing.com',
              logo: 'https://clever-technical-writing.com/logo.png',
              foundingDate: '2023',
              founder: {
                '@type': 'Person',
                name: 'Andrew Cleverly',
                jobTitle: 'Documentation Systems Architect',
                url: 'https://clever-technical-writing.com/about',
                sameAs: [
                  'https://www.linkedin.com/in/andrewcleverly/',
                  'https://github.com/cleverly87'
                ]
              },
              description: 'Professional API documentation consultancy specializing in DocOps, OpenAPI systems, and developer experience optimization.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Carmarthenshire',
                addressCountry: 'UK'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://clever-technical-writing.com/contact'
              },
              service: [
                {
                  '@type': 'Service',
                  name: 'API Documentation Architecture',
                  description: 'Design and implement scalable OpenAPI-first documentation systems'
                },
                {
                  '@type': 'Service', 
                  name: 'DocOps & CI/CD Implementation',
                  description: 'Automated documentation pipelines integrated with development workflows'
                },
                {
                  '@type': 'Service',
                  name: 'Developer Experience Optimization', 
                  description: 'Create documentation experiences that accelerate developer onboarding'
                }
              ]
            })
          }}
        />
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andrew Cleverly',
              jobTitle: 'Documentation Systems Architect & API Consultant',
              description: 'Senior API Technical Writer and Documentation Systems Architect specializing in DocOps, OpenAPI governance, and developer experience optimization.',
              url: 'https://clever-technical-writing.com',
              image: 'https://clever-technical-writing.com/andrew-cleverly.jpg',
              sameAs: [
                'https://www.linkedin.com/in/andrewcleverly/',
                'https://github.com/cleverly87'
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Clever Technical Writing'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Carmarthenshire',
                addressCountry: 'UK'
              },
              knowsAbout: [
                'API Documentation',
                'OpenAPI Specification',
                'DocOps',
                'CI/CD Documentation',
                'SDK Generation',
                'Developer Experience',
                'Technical Writing',
                'Documentation Architecture'
              ]
            })
          }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#171717" />
        <meta name="msapplication-TileColor" content="#171717" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u1dcf7q3fa");
            `
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
