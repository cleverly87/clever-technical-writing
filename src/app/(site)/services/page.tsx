import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = { title: "Services — Andrew Cleverly" };

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="container py-12">
        <h1 className="text-3xl font-semibold">Services</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">API Documentation Architecture</h3>
            <p className="text-sm text-neutral-300 mt-2">
              OpenAPI schema strategy, multi-repo governance, review workflows, and versioning policies that scale.
            </p>
          </div>
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">DocOps & CI/CD</h3>
            <p className="text-sm text-neutral-300 mt-2">
              Automated validate/build/publish pipelines in Azure DevOps or GitHub Actions, integrated with product releases.
            </p>
          </div>
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">SDK Generation & Developer Enablement</h3>
            <p className="text-sm text-neutral-300 mt-2">
              From OpenAPI to SDKs and quickstarts. Empower teams and customers from day one with consistent, tested artifacts.
            </p>
          </div>
          <div className="border border-neutral-800 rounded p-5">
            <h3 className="font-semibold">AI-Ready Documentation</h3>
            <p className="text-sm text-neutral-300 mt-2">
              Structure, metadata, and content patterns optimized for retrieval, analytics, and agentic workflows.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
