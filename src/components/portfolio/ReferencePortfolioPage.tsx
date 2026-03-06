import { FormEvent, ReactNode, useState } from "react";
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
  company: string;
  role: string;
  period: string;
  description: string;
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
    company: "enspec power ltd",
    role: "graduate software engineer | fulltime",
    period: "sept 2025 - present",
    description: "building internal software systems for power engineering workflows.",
    href: "https://enspecpower.com/",
    badge: "EP",
    accent: "from-orange-500 to-amber-400",
  },
  {
    company: "enspec power ltd",
    role: "it systems engineer | placement year",
    period: "sept 2024 - sept 2025",
    description: "built the lightning risk engine and automated internal reporting.",
    href: "https://enspecpower.com/",
    badge: "EP",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    company: "d y patil international university",
    role: "cloud ta & lab engineer",
    period: "jan 2023 - may 2023",
    description: "managed aws and gcp labs for students and taught cloud fundamentals.",
    badge: "DY",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    company: "data on kubernetes",
    role: "summer intern",
    period: "jan 2022 - sept 2022",
    description: "ran workshops and community programs around docker and kubernetes.",
    badge: "DK",
    accent: "from-zinc-300 to-zinc-500",
  },
  {
    company: "vmedulife software services",
    role: "data analyst intern",
    period: "june 2021 - sept 2021",
    description: "scraped, transformed, and visualized operational data for reporting.",
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

const CompanyBadge = ({ badge, accent }: { badge: string; accent: string }) => {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-bold uppercase text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]`}
    >
      {badge}
    </div>
  );
};

const RowLink = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => {
  if (!href) {
    return <div>{children}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block transition-opacity hover:opacity-100 opacity-95"
    >
      {children}
    </a>
  );
};

const ReferencePortfolioPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [subscriberEmail, setSubscriberEmail] = useState("");

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

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleaned = subscriberEmail.trim();
    if (!cleaned) return;

    window.location.href = `mailto:23685656@stu.mmu.ac.uk?subject=subscribe%20me&body=please%20add%20${encodeURIComponent(
      cleaned
    )}%20to%20your%20updates%20list`;
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
              <RowLink key={`${item.company}-${item.period}`} href={item.href}>
                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div className="pt-1 sm:pt-0">
                    <CompanyBadge badge={item.badge} accent={item.accent} />
                  </div>
                  <div>
                    <div className={`text-[1.05rem] font-semibold tracking-[-0.03em] ${headingTextClass}`}>
                      {item.company}
                    </div>
                    <div className={`text-base ${mutedTextClass}`}>{item.role}</div>
                    <div className={`text-sm ${mutedTextClass}`}>{item.description}</div>
                  </div>
                  <div className={`text-base sm:text-right ${mutedTextClass}`}>{item.period}</div>
                </div>
              </RowLink>
            ))}
          </div>
        </section>

        <section id="education" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>education</h2>
          <div className="mt-6 space-y-5">
            {educationItems.map((item) => (
              <RowLink key={`${item.school}-${item.period}`} href={item.href}>
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
                    <div className={`text-[1.05rem] font-semibold tracking-[-0.03em] ${headingTextClass}`}>
                      {item.school}
                    </div>
                    <div className={`text-base ${mutedTextClass}`}>{item.course}</div>
                  </div>
                  <div className={`text-base sm:text-right ${mutedTextClass}`}>{item.period}</div>
                </div>
              </RowLink>
            ))}
          </div>
        </section>

        <section id="updates" className="mt-20">
          <h2 className={`text-[2.2rem] font-semibold tracking-[-0.05em] ${headingTextClass}`}>stay updated</h2>
          <p className={`mt-2 text-lg ${mutedTextClass}`}>subscribe to my email list</p>
          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={subscriberEmail}
              onChange={(event) => setSubscriberEmail(event.target.value)}
              className={`h-14 flex-1 rounded-2xl px-5 text-lg outline-none transition ${cardClass} ${
                isDark ? "placeholder:text-white/40" : "placeholder:text-black/40"
              }`}
            />
            <button
              type="submit"
              className="h-14 rounded-2xl bg-[#424f68] px-7 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
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
