# Copilot Instructions for clever-technical-writing

You are assisting a senior API Technical Writer and Documentation Systems Architect.
Your job is to generate, refactor, or review code and content for:
- Next.js + Tailwind CSS portfolio sites hosted on AWS (S3 + CloudFront)
- API documentation systems (OpenAPI 3.1, Redocly Realm, CI/CD DocOps)
- YAML / JSON schemas, SDK generation, Postman collections, and developer portal architecture
- Python and TypeScript integrations for API documentation pipelines

Always:
- Write clean, modern, fully-commented code.
- Use professional, concise, technically accurate language.
- Align with Doc-as-Code best practices and CI/CD automation.
- Assume AWS, GitHub Actions, and Azure DevOps are part of the workflow.
- Prefer modular design, readable structure, and strong naming conventions.

When asked for explanations, focus on why and how, not just what.
When building site pages, follow the existing component layout and dark theme style.
When uncertain, provide a safe default and note what to confirm later.

You may include TODO comments for placeholders that require later adjustment.

## Project Overview
Modern portfolio website for Andrew Cleverly, showcasing API documentation expertise and technical writing projects. Built with Next.js + Tailwind CSS for professional business presentation, hosted on AWS S3 with CloudFront distribution.

## Tech Stack & Architecture
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with professional dark theme
- **Deployment**: AWS S3 + CloudFront via GitHub Actions
- **Content**: MDX for project showcases and technical articles
- **Forms**: Serverless contact forms (AWS Lambda/SES or Formspree)

## Development Workflow
- **Local dev**: `npm run dev` for Next.js development server
- **Build**: `npm run build && npm run export` for static export
- **Deployment**: Automatic S3 sync on push to `main` branch
- **Content**: MDX files in `/content` directory for easy editing

## Key Patterns & Conventions

### Component Architecture
- **Modular components**: Reusable UI components in `/components`
- **Layout systems**: Consistent page layouts with shared headers/footers
- **TypeScript**: Strict typing for all components and utilities
- **Responsive design**: Mobile-first with Tailwind breakpoints

### Tailwind Theme Configuration
```javascript
// tailwind.config.js - Professional business theme
theme: {
  extend: {
    colors: {
      primary: { /* Professional blue/gray palette */ },
      secondary: { /* Accent colors for CTAs */ },
      dark: { /* Dark mode variants */ }
    }
  }
}
```

### Content Management
- **MDX integration**: Technical articles and project showcases
- **Metadata schemas**: Consistent frontmatter for SEO and organization
- **Asset optimization**: Next.js Image component for performance

### API Documentation Integration
- **OpenAPI previews**: Embedded Redocly or SwaggerUI components
- **Code samples**: Syntax-highlighted examples with copy functionality
- **Interactive demos**: Live API testing within portfolio pages

## AWS Infrastructure
- **S3 Bucket**: `clever-technical-writing.com`
- **Region**: `eu-west-2`
- **CloudFront**: Global CDN with cache optimization
- **Route 53**: DNS management for custom domain
- **GitHub Actions**: CI/CD pipeline with build optimization

## File Structure
```
/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── content/            # MDX files for projects/articles
├── lib/                # Utilities and API integrations
├── public/             # Static assets
└── styles/             # Global Tailwind configurations
```

When building features, prioritize performance, accessibility, and professional presentation that reflects technical writing expertise.