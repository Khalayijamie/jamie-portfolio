import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    slug: "haraka", index: "01", title: "Haraka", subtitle: "Emergency Mobility Platform",
    tags: ["UX Research", "Interaction Design", "High-stakes UX"],
    desc: "Connecting users to emergency transport and healthcare. Designed for zero cognitive load under pressure.",
    year: "2026", bg: "#04342C", fg: "#5DCAA5", accent: "#1D9E75",
  },
  {
    slug: "healthcare-ai", index: "02", title: "Healthcare AI Routing", subtitle: "AI-Powered Hospital Recommendation",
    tags: ["AI UX", "User Flows", "Accessibility"],
    desc: "Translated ML complexity into a clear, accessible interface for users with low digital literacy.",
    year: "2026", bg: "#042C53", fg: "#85B7EB", accent: "#378ADD",
  },
  {
    slug: "culturelink", index: "03", title: "CultureLink Kenya", subtitle: "Cultural Discovery Experience",
    tags: ["Discovery UX", "Onboarding", "Localisation"],
    desc: "Personalised discovery across six cultural groups — onboarding, language modules, content navigation.",
    year: "2025–ongoing", bg: "#26215C", fg: "#AFA9EC", accent: "#7F77DD",
  },
];

const skills = ["Figma", "User Interviews", "Prototyping", "Interaction Design", "React", "Next.js", "TypeScript", "User Flows", "Usability Testing", "Design Thinking", "Agile", "RAG Systems"];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.25rem 2.5rem", borderBottom: "1px solid var(--border)",
        position: "sticky", top: 0, background: "var(--bg)", zIndex: 100,
      }}>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 900, fontSize: "17px", letterSpacing: "-0.5px" }}>Jamie K.</span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["Work", "#work"], ["About", "#about"]].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: "13px", color: "var(--ink-muted)", textDecoration: "none", fontFamily: "var(--mono)", letterSpacing: "0.02em" }}>{l}</a>
          ))}
          <a href="mailto:jamie.khalayi@gmail.com" style={{
            fontSize: "12px", padding: "7px 16px", border: "1px solid var(--ink)", borderRadius: "20px",
            color: "var(--ink)", textDecoration: "none", fontFamily: "var(--mono)",
          }}>Get in touch →</a>
        </div>
      </nav>

      <section style={{ padding: "5rem 2.5rem 4rem", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)",
          fontFamily: "var(--serif)", fontSize: "clamp(180px, 28vw, 320px)", fontWeight: 900,
          color: "transparent", WebkitTextStroke: "1px var(--border)",
          lineHeight: 1, pointerEvents: "none", userSelect: "none", letterSpacing: "-10px",
        }}>JKN</div>

        <div className="animate-fade-up" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--accent-light)", borderRadius: "20px", padding: "5px 12px", marginBottom: "2rem",
          }}>
            <span style={{ width: "7px", height: "7px", background: "var(--accent)", borderRadius: "50%", display: "inline-block" }}></span>
            <span style={{ fontSize: "12px", color: "var(--accent)", fontFamily: "var(--mono)" }}>Open to opportunities · Nairobi, Kenya</span>
          </div>
          <h1 style={{
            fontFamily: "var(--serif)", fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 900, lineHeight: 1.0, letterSpacing: "-3px", maxWidth: "700px", marginBottom: "1.5rem",
          }}>Design that<br /><em style={{ color: "var(--accent)" }}>ships.</em></h1>
          <p style={{ fontSize: "17px", color: "var(--ink-muted)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Product designer and software engineer. I research, prototype, and build human-centred products — from emergency platforms to AI routing systems.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#work" style={{ background: "var(--ink)", color: "var(--bg)", padding: "12px 24px", borderRadius: "4px", fontSize: "14px", fontFamily: "var(--mono)", textDecoration: "none" }}>View work ↓</a>
            <a href="mailto:jamie.khalayi@gmail.com" style={{ border: "1px solid var(--border-hover)", color: "var(--ink)", padding: "12px 24px", borderRadius: "4px", fontSize: "14px", fontFamily: "var(--mono)", textDecoration: "none" }}>Email me</a>
          </div>
        </div>
      </section>

      <div style={{ borderBottom: "1px solid var(--border)", padding: "0.75rem 0", overflow: "hidden", background: "var(--ink)" }}>
        <div className="marquee-track" style={{ display: "flex", gap: "2.5rem", width: "max-content" }}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(245,242,236,0.5)", whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
              {s} <span style={{ color: "var(--accent)" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <section id="work" style={{ padding: "4rem 2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase" }}>Selected work</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--ink-faint)" }}>3 case studies</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section id="about" style={{ padding: "4rem 2.5rem", borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>About</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "36px", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Engineer who<br /><em>designs.</em><br />Designer who<br /><em>ships.</em>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--ink-muted)", lineHeight: 1.8 }}>
            I hold a BSc in Informatics & Computer Science from Strathmore University and a Certificate in Interaction Design from Tallinn University. I conduct user interviews, translate research into design decisions, and build the products I design.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>Experience</p>
          {[
            { role: "Junior ML Engineer", org: "Qare+", period: "2026–Present" },
            { role: "Full Stack Developer", org: "//kood/Jõhvi, Estonia", period: "Feb–May 2026" },
            { role: "Cloud Solutions Intern", org: "Reliance", period: "2025" },
          ].map((e, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 500 }}>{e.role}</p>
                <p style={{ fontSize: "13px", color: "var(--ink-muted)", fontFamily: "var(--mono)" }}>{e.org}</p>
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--ink-faint)" }}>{e.period}</span>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "3rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ink)" }}>
        <div>
          <p style={{ fontFamily: "var(--serif)", fontSize: "28px", fontWeight: 900, color: "var(--bg)", letterSpacing: "-1px" }}>Let's work together.</p>
          <p style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "rgba(245,242,236,0.5)", marginTop: "4px" }}>jamie.khalayi@gmail.com</p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://github.com/Khalayijamie" target="_blank" rel="noopener" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(245,242,236,0.6)", textDecoration: "none", border: "1px solid rgba(245,242,236,0.2)", padding: "8px 16px", borderRadius: "4px" }}>GitHub ↗</a>
          <a href="mailto:jamie.khalayi@gmail.com" style={{ fontFamily: "var(--mono)", fontSize: "12px", background: "var(--accent)", color: "#fff", textDecoration: "none", padding: "8px 16px", borderRadius: "4px" }}>Email →</a>
        </div>
      </footer>
    </main>
  );
}
