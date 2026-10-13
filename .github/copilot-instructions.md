# Copilot Instructions for clever-technical-writing

You are assisting a senior API Technical Writer and Documentation Systems Architect.
Your job is to generate, refactor, or review code and content for:
- Next.js + Tailwind CSS portfolio sites hosted on Vercel
- API documentation systems (OpenAPI 3.1, Redocly Realm, CI/CD DocOps)
- YAML / JSON schemas, SDK generation, Postman collections, and developer portal architecture
- Python and TypeScript integrations for API documentation pipelines

Always:
- Write clean, modern, fully-commented code.
- Use professional, concise, technically accurate language.
- Align with Doc-as-Code best practices and CI/CD automation.
- Assume the site is deployed by Vercel from the `main` branch.
- Prefer modular design, readable structure, and strong naming conventions.

When asked for explanations, focus on why and how, not just what.
When building site pages, follow the existing component layout and dark theme style.
When uncertain, provide a safe default and note what to confirm later.

You may include TODO comments for placeholders that require later adjustment.

## Project Overview
Modern portfolio website for Andrew Cleverly, showcasing API documentation expertise and technical writing projects. Built with Next.js + Tailwind CSS, hosted on Vercel.

## Tech Stack & Architecture
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with professional dark theme
- **Deployment**: Vercel (Git integration, auto-deploys `main`)
- **Content**: MDX for project showcases and technical articles
- **Forms**: Formspree

## Development Workflow
- **Local dev**: `npm run dev` for Next.js development server
- **Build**: `npm run build`
- **Deployment**: Vercel deploys `main` automatically; other branches get preview URLs
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

## Hosting
- **Vercel**: hosting, builds, and DNS for `clever-technical-writing.com`
- **AWS Route 53**: domain registration only

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