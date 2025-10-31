import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <section className="container py-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Documentation is infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-300">
            I design and build API documentation ecosystems that connect engineering, product, and business —
            unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one.
            Every implementation is crafted to align documentation delivery with strategic goals and AI-enabled knowledge flows.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="border rounded px-4 py-2 text-sm">Explore Projects</Link>
            <Link href="/services" className="border rounded px-4 py-2 text-sm">Services</Link>
          </div>
        </section>

        <section className="container py-8 grid md:grid-cols-3 gap-6">
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">OpenAPI & Governance</h3>
            <p className="text-sm text-neutral-300 mt-2">Architecture, linting, review workflows, and standards that scale across teams and products.</p>
          </div>
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">DocOps in CI/CD</h3>
            <p className="text-sm text-neutral-300 mt-2">Automated build, validate, and publish pipelines integrated with dev lifecycles.</p>
          </div>
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">SDKs & AI-Ready Content</h3>
            <p className="text-sm text-neutral-300 mt-2">SDK generation from OpenAPI, structured docs optimized for retrieval and analytics.</p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
