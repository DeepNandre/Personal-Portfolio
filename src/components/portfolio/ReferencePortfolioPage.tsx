import { useState } from "react";
import {
  Github,
  Home,
  Linkedin,
  Mail,
  MoonStar,
  NotebookText,
  SunMedium,
} from "lucide-react";

type WorkItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  href?: string;
  badge: string;
  accent: string;
};

type EducationItem = {
  school: string;
  course: string;
  period: string;
  href?: string;
  badge: string;
};

const workItems: WorkItem[] = [
  {
    id: "parallel-labs",
    company: "parallel labs",
    role: "ceo & cto",
    period: "2026 - present",
    bullets: [
      "currently building atlasly, a pre-construction intelligence software platform for the aec industry.",
    ],
    badge: "PL",
    accent: "from-violet-500 to-indigo-400",
  },
  {
    id: "accelerate-me",
    company: "accelerate me",
    role: "fellow (cohort 12)",
    period: "2026",
    bullets: [
      "12 weeks of intensive workshops.",
      "$10,000 in equity-free funding.",
      "mentorship from industry professionals.",
      "networking opportunities across the uk startup ecosystem.",
      "trips to london, lisbon, and beyond.",
      "co-working space access.",
      "$280,000+ in partner perks from nvidia, supabase, notion, github, and more.",
    ],
    badge: "AM",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    id: "enspec",
    company: "enspec power ltd",
    role: "software engineer",
    period: "sept 2024 - present",
    bullets: [
      "built and shipped internal software systems including lightning risk workflows and automation tooling.",
    ],
    href: "https://enspecpower.com/",
    badge: "EP",
    accent: "from-orange-500 to-amber-400",
  },
  {
    id: "dy-patil",
    company: "d y patil international university",
    role: "cloud ta & lab engineer",
    period: "jan 2023 - may 2023",
    bullets: ["managed aws and gcp labs for students and taught cloud fundamentals."],
    badge: "DY",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "dok",
    company: "data on kubernetes",
    role: "summer intern",
    period: "jan 2022 - sept 2022",
    bullets: ["ran workshops and community programs around docker and kubernetes."],
    badge: "DK",
    accent: "from-zinc-300 to-zinc-500",
  },
  {
    id: "vmedulife",
    company: "vmedulife software services",
    role: "data analyst intern",
    period: "june 2021 - sept 2021",
    bullets: ["scraped, transformed, and visualized operational data for reporting."],
    badge: "VS",
    accent: "from-yellow-400 to-amber-300",
  },
];

const educationItems: EducationItem[] = [
  {
    school: "manchester metropolitan university",
    course: "msc cyber security",
    period: "2024 - 2025",
    href: "https://www.mmu.ac.uk/",
    badge: "MM",
  },
  {
    school: "savitribai phule pune university",
    course: "bachelor's in electronics & telecommunication",
    period: "2020 - 2023",
    badge: "SP",
  },
];

const skillItems = [
  "typescript",
  "react",
  "python",
  "aws",
  "azure",
  "kubernetes",
  "docker",
  "github actions",
  "power bi",
  "microsoft sentinel",
  "security engineering",
  "public speaking",
];

const dockLinks = [
  { href: "#top", label: "Home", icon: Home },
  { href: "https://deepnandre.hashnode.dev/", label: "Blog", icon: NotebookText, external: true },
  { href: "https://github.com/DeepNandre", label: "GitHub", icon: Github, external: true },
  { href: "https://www.linkedin.com/in/deep-nandre5/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "mailto:23685656@stu.mmu.ac.uk", label: "Email", icon: Mail, external: true },
];

const securityScenarios = [
  {
    id: "delivery",
    title: "fake delivery text",
    situation:
      "you get a text saying your parcel is delayed and asks you to click a link + enter card details for a re-delivery fee.",
    lesson:
      "real couriers do not ask for card details from random sms links. open the courier app/site directly instead.",
  },
  {
    id: "wifi",
    title: "free airport wi-fi",
    situation:
      "a public wi-fi page asks for your email, phone, and date of birth before you can connect.",
    lesson:
      "share the minimum possible on public portals. avoid banking/logins on open wi-fi unless you use trusted mobile data or a vpn.",
  },
  {
    id: "work-email",
    title: "urgent work email",
    situation:
      "an email says 'your account will be disabled in 10 minutes' and asks you to reset your password right now.",
    lesson:
      "urgency is a classic phishing trick. do not click from the email. go to your normal company login page and verify with it/admin.",
  },
];

const CompanyBadge = ({ badge, accent }: { badge: string; accent: string }) => {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-bold uppercase text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]`}
    >
      {badge}
    </div>
  );
};

const ReferencePortfolioPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [expandedExperience, setExpandedExperience] = useState<string | null>("parallel-labs");
  const [revealedScenario, setRevealedScenario] = useState<string | null>(null);

  const pageClassName = isDark
    ? "min-h-screen bg-[#050505] text-white"
    : "min-h-screen bg-[#f5f5f2] text-[#101010]";

  const mutedTextClass = isDark ? "text-white/60" : "text-black/60";
  const headingTextClass = isDark ? "text-white" : "text-black";
  const cardClass = isDark
    ? "border border-white/10 bg-white/[0.02]"
    : "border border-black/10 bg-black/[0.02]";
  const dockClass = isDark
    ? "border border-white/10 bg-[#111214]/90 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
    : "border border-black/10 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)]";
  const chipClass = isDark
    ? "border border-white/10 bg-white text-black"
    : "border border-black/10 bg-black text-white";

  const toggleExperience = (id: string) => {
    setExpandedExperience((current) => (current === id ? null : id));
  };

  return (
    <div className={pageClassName}>
      <main
        id="top"
        className="mx-auto max-w-[980px] px-6 pb-40 pt-14 sm:px-8 lg:px-12 lg:pt-24"
      >
        <section className="grid gap-10 md:grid-cols-[1fr_180px] md:items-start">
          <div>
            <h1
              className={`text-[3.25rem] font-semibold tracking-[-0.06em] sm:text-[4.5rem] ${headingTextClass}`}
            >
              hi, deep here
            </h1>
            <p className={`mt-2 text-lg ${mutedTextClass}`}>
              building secure systems on the internet.
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div
              className={`flex h-36 w-36 items-center justify-center rounded-full ${cardClass} overflow-hidden sm:h-40 sm:w-40`}
            >
              <div
                className={`flex h-[86%] w-[86%] items-center justify-center rounded-full text-4xl font-semibold tracking-[-0.08em] ${
                  isDark
                    ? "border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_rgba(255,255,255,0.02)_70%)]"
                    : "border border-black/10 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.1),_rgba(0,0,0,0.02)_70%)]"
                }`}
              >
                DN
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>about</h2>
          <div className={`mt-2 space-y-6 text-[1.05rem] leading-8 ${mutedTextClass}`}>
            <p>tldr; i build software, cloud systems, and security tooling that actually ships.</p>
            <p>
              i like technology, good infrastructure, and solving messy operational problems with code.
            </p>
            <p>
              i write software for power engineering, cloud platforms, and internal systems that need to be reliable.
            </p>
            <p>
              if you want to know more about me,{" "}
              <a
                href="#skills"
                className={`font-medium underline underline-offset-4 ${headingTextClass}`}
              >
                here are some things i am good at.
              </a>
            </p>
          </div>
        </section>

        <section id="experience" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>cool places i worked at</h2>
          <div className="mt-6 space-y-5">
            {workItems.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleExperience(item.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleExperience(item.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedExperience === item.id}
                aria-label={`Toggle details for ${item.company}`}
                className={`w-full rounded-2xl p-3 text-left transition ${cardClass} hover:opacity-95`}
              >
                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto_auto] sm:items-start">
                  <div className="pt-1 sm:pt-0">
                    <CompanyBadge badge={item.badge} accent={item.accent} />
                  </div>
                  <div>
                    <div
                      className={`text-[1.05rem] font-semibold tracking-[-0.03em] ${headingTextClass} underline underline-offset-4 ${
                        isDark ? "decoration-white/30" : "decoration-black/30"
                      }`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="hover:opacity-80"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </div>
                    <div className={`text-base ${mutedTextClass}`}>{item.role}</div>
                    {expandedExperience === item.id && (
                      <ul className={`mt-3 list-disc space-y-2 pl-5 text-sm ${mutedTextClass}`}>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`text-base sm:text-right ${mutedTextClass}`}>{item.period}</div>
                  <div className={`text-xl leading-none sm:text-right ${mutedTextClass}`}>
                    {expandedExperience === item.id ? "-" : "+"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>education</h2>
          <div className="mt-6 space-y-5">
            {educationItems.map((item) => (
              <div
                key={`${item.school}-${item.period}`}
                className={`rounded-2xl p-3 transition ${cardClass} hover:opacity-95`}
              >
                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold uppercase ${
                      isDark
                        ? "border border-white/10 bg-white text-black"
                        : "border border-black/10 bg-black text-white"
                    }`}
                  >
                    {item.badge}
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-[1.05rem] font-semibold tracking-[-0.03em] underline underline-offset-4 ${
                          isDark ? "text-white decoration-white/30" : "text-black decoration-black/30"
                        }`}
                      >
                        {item.school}
                      </a>
                    ) : (
                      <div className={`text-[1.05rem] font-semibold tracking-[-0.03em] ${headingTextClass}`}>
                        {item.school}
                      </div>
                    )}
                    <div className={`text-base ${mutedTextClass}`}>{item.course}</div>
                  </div>
                  <div className={`text-base sm:text-right ${mutedTextClass}`}>{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>skills</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {skillItems.map((skill) => (
              <span
                key={skill}
                className={`rounded-xl px-4 py-2 text-base font-semibold leading-none ${chipClass}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="security-check" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>
            60-sec security check
          </h2>
          <p className={`mt-2 text-lg ${mutedTextClass}`}>
            quick real-life situations anyone can learn from.
          </p>
          <div className="mt-6 space-y-4">
            {securityScenarios.map((scenario) => (
              <div key={scenario.id} className={`rounded-2xl p-4 ${cardClass}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className={`text-lg font-semibold ${headingTextClass}`}>{scenario.title}</h3>
                    <p className={`mt-1 text-sm ${mutedTextClass}`}>{scenario.situation}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setRevealedScenario((current) => (current === scenario.id ? null : scenario.id))
                    }
                    className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"
                    }`}
                  >
                    {revealedScenario === scenario.id ? "hide lesson" : "reveal lesson"}
                  </button>
                </div>
                {revealedScenario === scenario.id && (
                  <p className={`mt-3 border-t pt-3 text-sm ${mutedTextClass} ${isDark ? "border-white/10" : "border-black/10"}`}>
                    {scenario.lesson}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="spotify" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>spotify</h2>
          <p className={`mt-2 text-lg ${mutedTextClass}`}>extra fun. this stays.</p>
          <div className={`mt-6 overflow-hidden rounded-[28px] p-4 ${cardClass}`}>
            <iframe
              title="Spotify playlist"
              style={{ borderRadius: "18px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1E35YPtSMUnvdd?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
        </section>

        <section id="contact" className="mt-20 text-center">
          <div className={`mx-auto h-3 w-10 rounded-full ${isDark ? "bg-white" : "bg-black"}`} />
          <p className={`mt-8 text-2xl tracking-[-0.04em] sm:text-3xl ${mutedTextClass}`}>
            say hello on{" "}
            <a
              href="https://x.com/deepnandre"
              target="_blank"
              rel="noreferrer"
              className="text-[#3b82f6]"
            >
              X
            </a>
          </p>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-3 backdrop-blur-xl ${dockClass}`}
        >
          {dockLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
                    isDark ? "hover:bg-white/8" : "hover:bg-black/6"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </a>
                {index < dockLinks.length - 1 && (
                  <div className={`mx-1 h-9 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                )}
              </div>
            );
          })}

          <div className={`mx-1 h-9 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />

          <button
            type="button"
            aria-label="Toggle theme"
            title="Theme"
            onClick={() => setIsDark((current) => !current)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
              isDark ? "bg-white/8 hover:bg-white/12" : "bg-black/6 hover:bg-black/10"
            }`}
          >
            {isDark ? <MoonStar className="h-5 w-5" /> : <SunMedium className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ReferencePortfolioPage;
