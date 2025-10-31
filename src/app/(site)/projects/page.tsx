import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "Projects — Andrew Cleverly" };

function Card({ 
  title, 
  children, 
  href, 
  external = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  href: string;
  external?: boolean;
}) {
  const content = (
    <div className="border border-neutral-800 rounded p-5 hover:border-neutral-600 transition">
      <h3 className="font-semibold">{title}</h3>
      <div className="text-sm text-neutral-300 mt-2">{children}</div>
    </div>
  );
  
  return external ? (
    <a href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <Link href={href}>{content}</Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="container py-12 flex-grow">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title="Creditsafe API Developer Portal (Realm)" href="/projects/creditsafe">
            Global multi-product API documentation portal. Modular OpenAPI 3.1 architecture, governance, and CI/CD
            publishing pipeline. Role: architect, implementer, and content lead.
          </Card>
          <Card title="Pleo Demo Task (Stoplight)" href="/projects/stoplight-demo">
            Sample API definition and minimal portal using Stoplight tooling. Demonstrates spec writing and public-facing docs.
          </Card>
          <Card title="Swansea Harriers Athlete Database" href="/projects/swansea-harriers">
            Web-based athlete performance DB with Python/Flask API + SQLite, UI for querying PB/SB and trends.
            OpenAPI-backed docs and maintainable content pipeline.
          </Card>
          <Card title="OANDA FX Trading Engine" href="/projects/oanda">
            Fully operational trading bot with modular strategies, risk management, live monitoring, and logging.
            Core strategies & credentials protected under IP. Public write-up focuses on architecture and DocOps.
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
