import Link from "next/link";
export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)" }}>404</p>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: "48px", fontWeight: 900, letterSpacing: "-2px" }}>Page not found.</h1>
      <Link href="/" style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--accent)", textDecoration: "none" }}>← Back home</Link>
    </main>
  );
}
