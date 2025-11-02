import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Andrew Cleverly — Documentation Systems Architect",
  description: "I build API documentation ecosystems: OpenAPI governance, CI/CD DocOps, SDK generation, AI-ready content.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
