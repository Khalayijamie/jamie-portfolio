"use client";
import Link from "next/link";
import { useState } from "react";

interface Project {
  slug: string; index: string; title: string; subtitle: string;
  tags: string[]; desc: string; year: string; bg: string; fg: string; accent: string;
}

export function ProjectCard({ p }: { p: Project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/work/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "280px 1fr", background: hovered ? "rgba(255,255,255,0.04)" : "var(--bg)", transition: "background 0.2s ease" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ height: "220px", background: p.bg, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.5rem" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: p.accent, letterSpacing: "2px" }}>{p.index}</span>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "42px", fontWeight: 900, color: p.fg, letterSpacing: "-2px", lineHeight: 1 }}>{p.title.split(" ")[0]}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: p.accent, marginTop: "4px" }}>{p.year}</div>
          </div>
        </div>
        <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "0.75rem" }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontSize: "11px", padding: "3px 10px", border: "1px solid var(--border)", borderRadius: "20px", color: "var(--ink-muted)", fontFamily: "var(--mono)" }}>{t}</span>
              ))}
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>{p.title}</h2>
            <p style={{ fontSize: "14px", color: "var(--ink-muted)", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--ink-faint)" }}>{p.subtitle}</span>
            <span style={{ fontSize: "20px", color: hovered ? "var(--ink)" : "var(--ink-faint)", transition: "color 0.2s" }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
