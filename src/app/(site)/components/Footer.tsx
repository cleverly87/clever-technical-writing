export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="container py-8 text-xs text-neutral-400">
        © {new Date().getFullYear()} Andrew Cleverly. All rights reserved.
      </div>
    </footer>
  );
}
