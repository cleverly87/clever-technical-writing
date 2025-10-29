import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = { title: "About — Andrew Cleverly" };

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="container py-12">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">
          I'm a Senior API Technical Writer and documentation systems architect. I build scalable documentation
          ecosystems that make complex platforms understandable and usable — aligning engineering standards with
          business outcomes. My work spans OpenAPI 3.1 design, Redocly Realm portals, Azure DevOps/AWS CI/CD, and
          SDK generation, with a strong emphasis on governance and AI-enabled content structure.
        </p>
      </section>
      <Footer />
    </main>
  );
}
