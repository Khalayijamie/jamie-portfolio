import Link from "next/link";
import { notFound } from "next/navigation";

const projects: Record<string, {
  index: string; title: string; subtitle: string; year: string;
  tags: string[]; bg: string; fg: string; accent: string;
  problem: string; research: string[]; process: string[];
  solution: string; outcome: string[];
  role: string; duration: string; team: string;
  screenshots?: { src: string; alt: string; caption?: string }[];
}> = {
  haraka: {
    index: "01", title: "Haraka", subtitle: "Emergency Mobility Platform",
    year: "2026", bg: "#04342C", fg: "#5DCAA5", accent: "#1D9E75",
    tags: ["UX Research", "Interaction Design", "High-stakes UX", "End-to-end Design"],
    role: "Lead Designer", duration: "2026", team: "Cross-functional",
    screenshots: [
      { src: "/images/haraka/chat.png", alt: "Haraka chat interface — natural language symptom intake", caption: "Natural language intake" },
      { src: "/images/haraka/analyzing.png", alt: "Haraka AI analysis in progress", caption: "AI assessment in progress" },
      { src: "/images/haraka/results.png", alt: "Haraka results — urgency level and matched facilities", caption: "Urgency + matched facilities" },
      { src: "/images/haraka/ride.png", alt: "Haraka ride confirmed — driver details and route", caption: "Ride confirmed" },
    ],
    problem: "In emergencies — medical crises, accidents, urgent transport needs — people face a broken experience: wrong numbers, no visibility on arrival times, and interfaces built for calm users rather than panicked ones. Every second of friction has real consequences.",
    research: [
      "Conducted user interviews with people who had experienced medical emergencies or urgent transport needs in Nairobi.",
      "Identified three critical friction points: locating the right service, communicating urgency, and tracking arrival.",
      "Discovered that most users defaulted to calling family rather than emergency services — a trust and usability gap.",
      "Mapped the full stress-state journey: what users think, feel, and do when time pressure peaks.",
    ],
    process: [
      "Defined a design principle: every interaction must work in 2 taps or less under high cognitive load.",
      "Sketched multiple flow options for the critical path — tap to call emergency transport — and stress-tested with users.",
      "Prototyped in Figma with large touch targets, high contrast, and minimal text — clarity over comprehensiveness.",
      "Iterated on the tracking view after users expressed anxiety about 'not knowing' arrival time.",
    ],
    solution: "A platform with a single-screen emergency initiation, real-time tracking, and hospital bed availability — designed so that a panicked user can activate help in under 10 seconds. The interface uses large targets, clear iconography, and a calm colour system that reduces anxiety rather than amplifying it.",
    outcome: [
      "End-to-end UX designed and prototyped for web and mobile.",
      "User testing showed task completion in under 12 seconds for the critical emergency flow.",
      "Iterated to 3 design versions based on structured user feedback.",
    ],
  },
  "healthcare-ai": {
    index: "03", title: "Healthcare AI Routing", subtitle: "AI-Powered Hospital Recommendation",
    year: "2026", bg: "#042C53", fg: "#85B7EB", accent: "#378ADD",
    tags: ["AI UX", "User Flows", "Accessibility", "ML Systems"],
    role: "Designer & ML Engineer", duration: "2026", team: "Qare+",
    problem: "AI can recommend the right hospital based on symptoms, location, and real-time capacity — but only if users can trust and understand the output. Black-box AI creates anxiety. The challenge: make a complex ML system feel simple, transparent, and safe.",
    research: [
      "Interviewed patients and caregivers about how they currently choose hospitals — most used word of mouth or defaulted to the nearest facility.",
      "Discovered a key insight: users don't trust recommendations they don't understand. Explainability is not optional.",
      "Mapped digital literacy levels — a significant portion of target users had limited smartphone experience.",
      "Identified that fear of wrong diagnosis was the primary blocker to AI adoption in health contexts.",
    ],
    process: [
      "Mapped the full user journey from symptom input through ML analysis to actionable recommendation.",
      "Designed progressive disclosure: simple output first, reasoning available on demand.",
      "Tested multiple metaphors for explaining AI confidence — chose a simple 'match strength' indicator over percentages.",
      "Built low-fidelity prototypes and tested with users who had never used a health app before.",
    ],
    solution: "A symptom-to-recommendation flow that guides users through three clear steps, surfaces the top hospital match with simple reasoning, and always provides a fallback human contact. The system never hides that it is AI — transparency is built into the copy and visual language.",
    outcome: [
      "Designed and shipped as part of the Qare+ product at Junior ML Engineer role.",
      "Accessibility-first approach validated through testing with low-literacy users.",
      "Progressive disclosure pattern adopted as a standard across the product.",
    ],
  },
  bagtrunkz: {
    index: "02", title: "Bagtrunkz", subtitle: "Fashion E-commerce Platform",
    year: "2026", bg: "#1C1009", fg: "#E8C89A", accent: "#C4823E",
    tags: ["E-commerce UX", "Visual Design", "Brand Design", "Conversion Optimisation"],
    role: "Lead Designer & Developer", duration: "2026", team: "Independent",
    problem: "Selling bags online is competitive — most small fashion brands lose customers to friction: unclear product imagery, confusing navigation, and checkout flows that abandon at the last step. Bagtrunkz needed a shopping experience that felt premium, moved fast, and converted.",
    research: [
      "Audited competitor bag brands — identified that most used cluttered layouts that buried the product and slowed decision-making.",
      "Interviewed target customers about their online shopping habits — the most cited reason for abandoning carts was 'too many steps'.",
      "Mapped the full purchase journey from landing page to order confirmation, marking every point of potential drop-off.",
      "Identified that high-quality product photography paired with minimal UI produced the highest trust signal.",
    ],
    process: [
      "Established a visual language — warm espresso tones, clean typography, and generous whitespace to position the brand as premium.",
      "Designed the product browsing experience around filters and imagery first, keeping text secondary to the product.",
      "Simplified checkout to three steps: cart review, delivery details, payment — removing all optional steps from the critical path.",
      "Iterated on the product detail page after testing showed users wanted to see bag dimensions and interior shots before purchasing.",
    ],
    solution: "A clean, conversion-focused e-commerce platform built around the product. Large imagery, a frictionless three-step checkout, and a consistent brand identity across every touchpoint — from product grid to order confirmation.",
    outcome: [
      "End-to-end design and development of the storefront and checkout flow.",
      "Three-step checkout reduced abandonment at the payment stage.",
      "Visual identity system established and applied consistently across web and packaging.",
    ],
  },
  culturelink: {
    index: "04", title: "CultureLink Kenya", subtitle: "Cultural Discovery Experience",
    year: "2025–Ongoing", bg: "#26215C", fg: "#AFA9EC", accent: "#7F77DD",
    tags: ["Discovery UX", "Onboarding", "Localisation", "Content Design"],
    role: "Lead Designer & Developer", duration: "2025–Ongoing", team: "Independent",
    problem: "Kenya's cultural diversity is vast — but digital experiences flatten it. CultureLink was built to create personalised discovery across communities, languages, and traditions, in a way that felt genuinely local rather than generic.",
    research: [
      "Conducted user interviews across six cultural groups in Kenya — Kikuyu, Luo, Maasai, Kamba, Swahili coast, and Somali communities.",
      "Found that existing cultural apps felt built for tourists, not community members — wrong tone, wrong depth.",
      "Identified that language was the highest-trust signal: users engaged more when content was in their mother tongue.",
      "Mapped onboarding drop-off — most users abandoned at the account creation step; simplified to single-field entry.",
    ],
    process: [
      "Designed onboarding as a discovery experience rather than a form — users reveal preferences by selecting content, not filling fields.",
      "Built a content taxonomy across six cultural groups with nested language and tradition categories.",
      "Iterated on the navigation model three times based on user testing feedback about how people browse cultural content.",
      "Designed language learning modules that use cultural stories as the teaching medium.",
    ],
    solution: "A personalised discovery platform with a preference-first onboarding flow, culturally contextualised language learning modules, and navigation designed around community rather than category. Every design decision was validated against the question: does this feel made for us?",
    outcome: [
      "Three major design iterations informed by structured user feedback.",
      "Onboarding completion rate improved significantly after removing mandatory account creation.",
      "Active development ongoing — language learning module launching next.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.25rem 2.5rem", borderBottom: "1px solid var(--border)",
        position: "sticky", top: 0, background: "var(--bg)", zIndex: 100,
      }}>
        <Link href="/" style={{ fontFamily: "var(--serif)", fontWeight: 900, fontSize: "17px", letterSpacing: "-0.5px", textDecoration: "none", color: "var(--ink)" }}>
          Jamie K.
        </Link>
        <Link href="/" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--ink-muted)", textDecoration: "none" }}>
          ← All work
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ background: p.bg, padding: "4rem 2.5rem" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: p.accent, letterSpacing: "2px" }}>{p.index} / {p.year}</span>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 900, color: p.fg, letterSpacing: "-3px", lineHeight: 1, margin: "1rem 0 0.5rem" }}>{p.title}</h1>
        <p style={{ fontFamily: "var(--mono)", fontSize: "14px", color: p.accent, marginBottom: "2rem" }}>{p.subtitle}</p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: "11px", padding: "4px 12px", border: `1px solid ${p.accent}40`, borderRadius: "20px", color: p.accent, fontFamily: "var(--mono)" }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: "480px" }}>
          {[["Role", p.role], ["Duration", p.duration], ["Team", p.team]].map(([label, value]) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--mono)", fontSize: "10px", color: p.accent, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>{label}</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "13px", color: p.fg, fontWeight: 500 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      {p.screenshots ? (
        <div style={{ background: p.bg, borderTop: `1px solid ${p.accent}15`, padding: "3rem 0 3rem" }}>
          <div style={{
            display: "flex", gap: "1.25rem",
            padding: "0 2.5rem",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}>
            {p.screenshots.map((shot, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  style={{
                    height: "420px",
                    width: "auto",
                    borderRadius: "10px",
                    border: `1px solid ${p.accent}25`,
                    display: "block",
                  }}
                />
                {shot.caption && (
                  <p style={{ fontFamily: "var(--mono)", fontSize: "11px", color: p.accent, textAlign: "center", letterSpacing: "0.5px" }}>
                    {shot.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{
          height: "400px", background: p.bg,
          borderTop: `1px solid ${p.accent}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "8px",
        }}>
          <div style={{ width: "48px", height: "48px", border: `1px dashed ${p.accent}`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: p.accent, fontSize: "20px" }}>+</span>
          </div>
          <p style={{ fontFamily: "var(--mono)", fontSize: "12px", color: p.accent }}>Screenshots / mockups go here</p>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "5rem 2.5rem" }}>

        {/* Problem */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1rem" }}>01 — Problem</p>
          <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ink)", fontWeight: 300 }}>{p.problem}</p>
        </div>

        {/* Research */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>02 — Research</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {p.research.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "1rem", padding: "1.25rem 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--ink-faint)", paddingTop: "3px" }}>0{i + 1}</span>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink-muted)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>03 — Design Process</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {p.process.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "1rem", padding: "1.25rem 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--ink-faint)", paddingTop: "3px" }}>0{i + 1}</span>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink-muted)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div style={{ marginBottom: "4rem", padding: "2rem", background: "rgba(255,255,255,0.05)", borderRadius: "12px", borderLeft: "3px solid var(--accent)" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }}>04 — Solution</p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--ink)" }}>{p.solution}</p>
        </div>

        {/* Outcome */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "2px", color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>05 — Outcome</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {p.outcome.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontSize: "18px", lineHeight: 1, marginTop: "2px" }}>✓</span>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink-muted)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--ink-muted)", textDecoration: "none" }}>← Back to work</Link>
          {Object.entries(projects).find(([s]) => s !== slug) && (
            <Link href={`/work/${Object.keys(projects).find(s => s !== slug)}`}
              style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--ink)", textDecoration: "none" }}>
              Next project →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
