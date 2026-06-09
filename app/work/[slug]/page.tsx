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
    tags: ["E-commerce UX", "Brand Design", "Web Development", "Content Strategy"],
    role: "Lead Designer & Developer", duration: "2026", team: "Independent",
    screenshots: [
      { src: "/images/BagTrunkz/Screenshot%202026-06-08%20191223.png", alt: "BagTrunkz homepage — Carry Your Story in Style", caption: "Homepage hero" },
      { src: "/images/BagTrunkz/Screenshot%202026-06-08%20191241.png", alt: "BagTrunkz product catalogue — bags with KES pricing", caption: "Product catalogue" },
      { src: "/images/BagTrunkz/Screenshot%202026-06-08%20191303.png", alt: "About BagTrunkz — Born in Nairobi, built for the world", caption: "Brand story" },
      { src: "/images/BagTrunkz/Screenshot%202026-06-08%20191327.png", alt: "BagTrunkz blog — travel and bag review posts", caption: "Blog & content" },
    ],
    problem: "Building a credible premium bag brand online in Nairobi — where buyers have access to international brands — meant every page had to earn trust. BagTrunkz needed a storefront that felt elevated and distinctly local, with a brand story that made the product worth choosing over a global alternative.",
    research: [
      "Mapped how Kenyan fashion shoppers discover and evaluate local brands — product photography and brand story were the top trust signals, ahead of price.",
      "Found that most local bag sellers operated through Instagram DMs and WhatsApp with no structured storefront customers could reliably return to.",
      "Identified that product categorisation by bag type (Baguette, Pocket, Crossbody, Sling) reduced decision fatigue significantly over single-scroll layouts.",
      "Discovered that blog content around travel and reviews drove return visits and positioned the brand as a trusted authority beyond just a shop.",
    ],
    process: [
      "Led with brand story — 'Born in Nairobi, built for the world' — making the About page as compelling as the shop, not an afterthought.",
      "Built a product grid with consistent card layouts, KES pricing, category tags, and clear Add to Cart CTAs across four bag categories.",
      "Designed and wrote a blog section with travel and review content to drive organic discovery and community engagement.",
      "Crafted the hero copy ('Carry Your Story in Style') to connect emotionally before the product pitch, positioning bags as identity rather than accessory.",
    ],
    solution: "A complete e-commerce platform anchored by a strong brand identity. The homepage leads with story, the shop offers clear product categories with KES pricing, the About page humanises the brand, and the blog builds credibility through content — every section working together to earn trust and convert.",
    outcome: [
      "Full storefront live with product catalogue across four categories: Baguette, Pocket, Crossbody, and Sling bags.",
      "Brand identity — tone, copy, and visual language — established consistently across all pages.",
      "Blog section launched with travel and review content to build authority and drive return visits.",
    ],
  },
  "tikiti-leo": {
    index: "05", title: "Tikiti Leo", subtitle: "Event Ticketing & Installment Payments",
    year: "2024", bg: "#0A0D1A", fg: "#F0F0F0", accent: "#E8192C",
    tags: ["Fintech UX", "M-Pesa Integration", "Event Tech", "Full Stack"],
    role: "Lead Designer & Developer", duration: "2024", team: "Independent",
    screenshots: [
      { src: "/images/TikitiLeo/image.png", alt: "Tikiti Leo homepage — Your Gateway to Amazing Events", caption: "Homepage" },
      { src: "/images/TikitiLeo/image%20copy.png", alt: "Tikiti Leo login screen", caption: "User login" },
      { src: "/images/TikitiLeo/image%20copy%202.png", alt: "Installment details for an event — payment schedule", caption: "Installment plan" },
      { src: "/images/TikitiLeo/image%20copy%203.png", alt: "Payment options — M-Pesa integration", caption: "M-Pesa payment" },
    ],
    problem: "Getting tickets to events in Kenya often means paying the full amount upfront — a barrier that locks people out of popular but expensive events. Tikiti Leo was built to solve this: book your ticket today, pay in installments via M-Pesa on dates that work for you.",
    research: [
      "Identified that upfront ticket cost was the primary reason Kenyan event-goers missed out — particularly for multi-day or premium events.",
      "Found that M-Pesa is the dominant and most trusted payment method in Kenya — any solution had to integrate with it natively, not treat it as an afterthought.",
      "Discovered that BNPL (Buy Now, Pay Later) was growing across Kenyan e-commerce but had not yet been applied to event ticketing.",
      "Mapped the installment tracking problem: users needed visibility into how much they'd paid, what remained, and when the next payment was due.",
    ],
    process: [
      "Designed the installment detail view to surface the key facts clearly: event name, total amount, installment amount, and scheduled payment dates.",
      "Built M-Pesa STK push integration — users enter their phone number and confirm payment directly on their phone without leaving the platform.",
      "Created a user authentication system (Login/SignUp with user type selection) to enable personal installment schedules and payment history.",
      "Designed the payment plan selection flow to let users choose how many installments they wanted before booking.",
    ],
    solution: "A full-stack event ticketing platform where users create an account, browse events, select a payment plan, and pay in scheduled installments via M-Pesa — making events accessible without requiring full upfront payment.",
    outcome: [
      "Full platform built and live — event browsing, ticket booking, and installment payment flow end-to-end.",
      "M-Pesa STK push integration enabling seamless in-app payments.",
      "Installment scheduling system tracking payment dates and amounts per user per event.",
    ],
  },
  culturelink: {
    index: "04", title: "CultureLink Kenya", subtitle: "Cultural Discovery Platform",
    year: "2025–Ongoing", bg: "#26215C", fg: "#AFA9EC", accent: "#7F77DD",
    tags: ["Discovery UX", "AI Integration", "Language Learning", "Interactive Design"],
    role: "Lead Designer & Developer", duration: "2025–Ongoing", team: "Independent",
    screenshots: [
      { src: "/images/CultureLink/Screenshot%202026-06-08%20190901.png", alt: "CultureLink Kenya homepage", caption: "Homepage" },
      { src: "/images/CultureLink/Screenshot%202026-06-08%20190924.png", alt: "Cultural categories — Traditional Foods, Ceremonies & Rituals, Arts & Crafts", caption: "Cultural categories" },
      { src: "/images/CultureLink/Screenshot%202026-06-08%20190948.png", alt: "Personalised recommendations based on cultural interest", caption: "Personalised picks" },
      { src: "/images/CultureLink/Screenshot%202026-06-08%20191025.png", alt: "Shujaa AI — Kenyan culture assistant chatbot", caption: "Shujaa AI" },
      { src: "/images/CultureLink/Screenshot%202026-06-08%20191041.png", alt: "Language learning — Kiswahili, Gikuyu, Dholuo, Luhya", caption: "Language learning" },
      { src: "/images/CultureLink/Screenshot%202026-06-08%20191112.png", alt: "Interactive cultural map of Kenya", caption: "Cultural map" },
    ],
    problem: "Kenya's cultural wealth — across Kikuyu, Maasai, Luo, Kalenjin, Kamba and more — exists largely offline or in fragmented, tourist-facing content. CultureLink was built to create a living digital home for Kenyan culture: discoverable, personalised, and genuinely made for community members, not visitors.",
    research: [
      "Reviewed existing cultural platforms — found they were either academic and inaccessible, or tourist-facing and shallow, misrepresenting the depth of Kenyan traditions.",
      "Identified five content pillars that communities wanted: Traditional Foods, Ceremonies & Rituals, Arts & Crafts, Languages, and regional geography — each needing its own depth.",
      "Discovered strong appetite for AI-assisted discovery — users wanted to ask natural questions about culture rather than browse static category pages.",
      "Found language learning was the highest-engagement concept — users wanted to learn Kiswahili, Gikuyu, Dholuo, and Luhya through cultural context, not textbook drills.",
    ],
    process: [
      "Built a structured cultural category system: Traditional Foods (45 practices), Ceremonies & Rituals (32 practices), Arts & Crafts (25 practices) — each navigable and deep.",
      "Designed and built Shujaa AI — a Kenyan culture assistant trained on 342 cultural facts, handling natural language questions about tribes, traditions, languages, foods, and ceremonies.",
      "Created a personalised recommendation engine that surfaces content based on stated cultural interest — e.g. Kalenjin Culture surfaces Ceremonies & Rituals, Music & Dance, Traditional Foods.",
      "Built an interactive map visualising the geographic spread of Kenya's cultural communities, and a language learning module covering Kiswahili, Gikuyu, Dholuo, and Luhya.",
    ],
    solution: "A multi-feature cultural platform: category-based discovery, an AI assistant (Shujaa AI) trained on 342 cultural facts, personalised recommendations, language learning modules, and an interactive cultural map — all designed to feel like it was built from the inside, not imported from outside.",
    outcome: [
      "Platform live with 100+ cultural practices across Traditional Foods, Ceremonies & Rituals, and Arts & Crafts.",
      "Shujaa AI live with 342 cultural facts — answering questions on tribes, traditions, languages, ceremonies, and food.",
      "Language learning module covering Kiswahili, Gikuyu, Dholuo, and Luhya launched.",
      "Interactive cultural map of Kenya live, showing community geography across the country.",
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
        <div className="meta-grid">
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
