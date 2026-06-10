import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Mail, Github, Phone, MapPin, Calendar, User, Code2, Palette,
  Database, GitBranch, Sparkles, ExternalLink, Settings2, X,
  Briefcase, GraduationCap, Award, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const DEFAULTS = {
  name: "Phan Khánh Duy",
  role: "UI/UX & Frontend Engineering Intern",
  tagline: "Tôi xây dựng những giao diện web hiện đại, mượt mà và lấy người dùng làm trọng tâm.",
  email: "duyluu72@gmail.com",
  github: "github.com/DuyCaChef",
  phone: "0907020343",
  location: "Long Xuyên City, An Giang",
  dob: "21/12/2005",
  gender: "Male",
  objective:
    "Sinh viên ngành Công nghệ Thông tin với nền tảng vững chắc về nguyên tắc UI/UX và phát triển frontend hiện đại. Đam mê tạo ra trải nghiệm người dùng tinh tế. Mong muốn vị trí Frontend Intern tại công ty công nghệ định hướng tương lai để áp dụng kinh nghiệm xây dựng cấu trúc web có khả năng mở rộng, hệ thống thiết kế component và luồng xác thực mượt mà.",
  schoolMajor: "Information Technology",
  schoolName: "An Giang University",
  schoolDetail:
    "Tập trung kiến trúc phần mềm, phân tích cơ sở dữ liệu, thiết kế hệ thống và giao diện/trải nghiệm người dùng (UI/UX).",
  primaryColor: "#00ffa3",
  accentColor: "#6366f1",
  bgColor: "#0a0e1a",
};

type Data = typeof DEFAULTS;

const PROJECTS = [
  { name: "Raptor", sub: "Sports E-commerce Web Platform", desc: "Thiết kế full UI/UX trên Figma theo mobile-first, xây dựng kiến trúc component-driven, tích hợp RESTful API với JWT auth & Route Guards, tối ưu hiệu năng với lazy-loading.", tags: ["Figma", "React", "JWT", "REST API"], color: "from-emerald-400/30 to-cyan-500/20" },
  { name: "CineWrap", sub: "Movie Streaming Web Application", desc: "Giao diện dark cinematic với carousel động và infinite scroll. Landing page hiệu năng cao, backend RESTful scalable, xác thực JWT bảo mật endpoint.", tags: ["React", "Node.js", "JWT", "REST API"], color: "from-indigo-500/30 to-purple-500/20" },
  { name: "Private Clinic Management", sub: "Desktop Clinic System", desc: "Phát triển UI/UX desktop quản lý dữ liệu nặng với WinForms (UserControl, TableLayoutPanel, Docking). Quy trình Reception–Examination–Billing và RBAC.", tags: ["C#", ".NET", "ADO.NET", "SQL Server"], color: "from-amber-400/30 to-rose-500/20" },
  { name: "Cashflow", sub: "Personal Finance Mobile App", desc: "Thiết kế UI/UX Figma với charts/graphs accessible. Phát triển Flutter/Dart, state management Riverpod, phân loại chi tiêu & theo dõi ngân sách realtime.", tags: ["Flutter", "Dart", "Riverpod", "Figma"], color: "from-sky-400/30 to-emerald-400/20" },
];

const SKILLS = [
  { icon: Code2, label: "Frontend Core", items: "HTML5, CSS3, JavaScript (ES6+), TypeScript, DOM" },
  { icon: Sparkles, label: "Framework / Library", items: "React.js, Tailwind CSS" },
  { icon: Database, label: "Architecture & API", items: "RESTful API, JWT Auth, JSON, Asynchronous" },
  { icon: Palette, label: "UI/UX & Design", items: "Figma, Adobe Illustrator, Adobe Lr, Canva" },
  { icon: GitBranch, label: "Version Control & More", items: "Git/GitHub, PostgreSQL, MySQL, SQL Server, C#/.NET, Node.js, Postman" },
];

const SOFT_SKILLS = [
  { label: "Team work", value: 85 },
  { label: "Attention to Detail", value: 90 },
  { label: "Time Management", value: 80 },
  { label: "Problem Solving", value: 85 },
];

const CERTS = [
  { year: "2026", name: "VSTEP English Proficiency — Level B1", org: "Can Tho University" },
  { year: "2026", name: "Robotics Programming Course", org: "University of Science" },
];

const MARQUEE = ["REACT", "TYPESCRIPT", "TAILWIND", "FIGMA", "GSAP", "NODE.JS", "POSTGRESQL", "UI/UX"];

function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Data>(DEFAULTS);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-data");
      if (saved) setData({ ...DEFAULTS, ...JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--primary", data.primaryColor);
    r.style.setProperty("--accent", data.accentColor);
    r.style.setProperty("--background", data.bgColor);
    try { localStorage.setItem("portfolio-data", JSON.stringify(data)); } catch {}
  }, [data]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", { y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.from(".float-card", { scale: 0.85, opacity: 0, duration: 1.2, delay: 0.3, ease: "back.out(1.4)" });
      gsap.to(".float-card", { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.4 });

      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(e.target, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((el) => { gsap.set(el, { y: 40, opacity: 0 }); io.observe(el); });

      const bars = gsap.utils.toArray<HTMLElement>(".bar-fill");
      const ioBar = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const w = (e.target as HTMLElement).dataset.value;
            gsap.to(e.target, { width: `${w}%`, duration: 1.4, ease: "power3.out" });
            ioBar.unobserve(e.target);
          }
        });
      }, { threshold: 0.4 });
      bars.forEach((b) => ioBar.observe(b));

      gsap.to(".marquee-inner", { xPercent: -50, duration: 25, ease: "none", repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  const update = (k: keyof Data, v: string) => setData((d) => ({ ...d, [k]: v }));

  return (
    <div ref={root} className="min-h-screen text-foreground overflow-x-hidden">
      <nav className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-4">
        <div className="glass max-w-6xl mx-auto rounded-full px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="font-mono text-sm font-semibold grad-text">&lt;PKD/&gt;</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <button onClick={() => setSettingsOpen(true)} className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:text-primary transition">
            <Settings2 className="w-3.5 h-3.5" /><span className="hidden sm:inline">Customize</span>
          </button>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 pt-28">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
          <div>
            <span className="hero-anim chip"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Available for Internship</span>
            <h1 className="hero-anim mt-6 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <br /><span className="grad-text">{data.name}</span>
            </h1>
            <p className="hero-anim mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl">{data.role}</p>
            <p className="hero-anim mt-3 text-base text-muted-foreground/80 max-w-xl">{data.tagline}</p>
            <div className="hero-anim mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition shadow-[0_10px_40px_-10px_var(--primary)]">
                Xem dự án <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/60 transition">
                <Mail className="w-4 h-4" /> Liên hệ
              </a>
            </div>
            <div className="hero-anim mt-10 flex flex-wrap gap-5 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Code2 className="w-4 h-4 text-primary" /> React · TS · Tailwind</span>
              <span className="flex items-center gap-2"><Palette className="w-4 h-4 text-primary" /> Figma · UI/UX</span>
            </div>
          </div>

          <div className="float-card relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4 font-mono text-xs text-muted-foreground">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                </div>
                <span>profile.tsx</span>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 mb-4 flex items-center justify-center text-7xl font-bold text-foreground/80">
                {data.name.split(" ").map((w) => w[0]).slice(-2).join("")}
              </div>
              <div className="font-mono text-xs space-y-1.5 text-muted-foreground">
                <div><span className="text-primary">const</span> <span className="text-foreground">dev</span> = {"{"}</div>
                <div className="pl-4">role: <span className="text-emerald-300">"Frontend Intern"</span>,</div>
                <div className="pl-4">stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TS"</span>],</div>
                <div className="pl-4">status: <span className="text-emerald-300">"open_to_work"</span></div>
                <div>{"}"};</div>
              </div>
            </div>
          </div>
        </div>
        <ChevronDown className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 text-muted-foreground animate-bounce" />
      </section>

      <section className="py-8 border-y border-border overflow-hidden">
        <div className="marquee-inner flex gap-12 whitespace-nowrap font-bold text-3xl sm:text-5xl text-muted-foreground/40">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {MARQUEE.map((t) => (
                <span key={t} className="flex items-center gap-12">{t}<span className="text-primary">★</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <span className="chip"><User className="w-3 h-3" /> About</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Career <span className="grad-text">Objective</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{data.objective}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <InfoTile icon={<MapPin className="w-4 h-4" />} label="Location" value={data.location} />
              <InfoTile icon={<Calendar className="w-4 h-4" />} label="Born" value={data.dob} />
              <InfoTile icon={<Phone className="w-4 h-4" />} label="Phone" value={data.phone} />
              <InfoTile icon={<User className="w-4 h-4" />} label="Gender" value={data.gender} />
            </div>
          </div>
          <div className="reveal space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><GraduationCap className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">EDUCATION</p>
                  <h3 className="text-lg font-semibold mt-1">{data.schoolMajor}</h3>
                  <p className="text-primary text-sm font-medium">{data.schoolName}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{data.schoolDetail}</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Award className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">CERTIFICATES</p>
                  <h3 className="text-lg font-semibold mt-1">Achievements</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {CERTS.map((c) => (
                  <li key={c.name} className="flex gap-4 text-sm">
                    <span className="font-mono text-primary w-12 shrink-0">{c.year}</span>
                    <span><span className="font-medium">{c.name}</span><span className="text-muted-foreground"> · {c.org}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="chip"><Briefcase className="w-3 h-3" /> Projects</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Key <span className="grad-text">Projects</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md">Một số sản phẩm tôi đã thiết kế và phát triển trong quá trình học tập.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <article key={p.name} className="reveal group glass rounded-2xl p-6 hover:border-primary/40 transition relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-60 group-hover:opacity-100 transition`} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{p.sub}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="chip"><Code2 className="w-3 h-3" /> Skills</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Technical <span className="grad-text">Stack</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {SKILLS.map((s) => (
                <div key={s.label} className="reveal glass rounded-xl p-5 flex gap-4 hover:border-primary/40 transition">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{s.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.items}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal glass rounded-2xl p-6 sm:p-8 self-start">
              <h3 className="font-semibold text-lg mb-6">Soft Skills</h3>
              <div className="space-y-5">
                {SOFT_SKILLS.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{s.label}</span>
                      <span className="font-mono text-primary">{s.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div data-value={s.value} className="bar-fill h-full w-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8">
        <div className="reveal max-w-3xl mx-auto text-center glass rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <span className="chip"><Mail className="w-3 h-3" /> Get in touch</span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold">Let's build something <span className="grad-text">together</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Tôi đang tìm cơ hội thực tập Frontend Developer. Hãy gửi tin nhắn nếu bạn có dự án phù hợp!</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition">
                <Mail className="w-4 h-4" /> {data.email}
              </a>
              <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/60 transition">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={`tel:${data.phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/60 transition">
                <Phone className="w-4 h-4" /> {data.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} {data.name}. Crafted with React + GSAP.
      </footer>

      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSettingsOpen(false)} />
          <aside className="relative ml-auto w-full max-w-md h-full bg-card border-l border-border overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2"><Settings2 className="w-5 h-5 text-primary" /> Customize</h3>
              <button onClick={() => setSettingsOpen(false)} className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-5">
              <Section title="Colors">
                <ColorField label="Primary" value={data.primaryColor} onChange={(v) => update("primaryColor", v)} />
                <ColorField label="Accent" value={data.accentColor} onChange={(v) => update("accentColor", v)} />
                <ColorField label="Background" value={data.bgColor} onChange={(v) => update("bgColor", v)} />
              </Section>
              <Section title="Personal Info">
                <TextField label="Name" value={data.name} onChange={(v) => update("name", v)} />
                <TextField label="Role" value={data.role} onChange={(v) => update("role", v)} />
                <TextField label="Tagline" value={data.tagline} onChange={(v) => update("tagline", v)} textarea />
                <TextField label="Email" value={data.email} onChange={(v) => update("email", v)} />
                <TextField label="GitHub" value={data.github} onChange={(v) => update("github", v)} />
                <TextField label="Phone" value={data.phone} onChange={(v) => update("phone", v)} />
                <TextField label="Location" value={data.location} onChange={(v) => update("location", v)} />
              </Section>
              <Section title="About">
                <TextField label="Career Objective" value={data.objective} onChange={(v) => update("objective", v)} textarea />
              </Section>
              <Section title="Education">
                <TextField label="Major" value={data.schoolMajor} onChange={(v) => update("schoolMajor", v)} />
                <TextField label="School" value={data.schoolName} onChange={(v) => update("schoolName", v)} />
                <TextField label="Detail" value={data.schoolDetail} onChange={(v) => update("schoolDetail", v)} textarea />
              </Section>
              <button onClick={() => { localStorage.removeItem("portfolio-data"); setData(DEFAULTS); }} className="w-full py-2.5 rounded-lg border border-border hover:border-destructive/50 hover:text-destructive text-sm transition">
                Reset to defaults
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-3">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">{icon} {label}</div>
      <p className="text-sm font-medium mt-1 truncate">{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">{title}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 glass rounded-lg p-3">
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="w-9 h-9 rounded cursor-pointer bg-transparent border border-border" />
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-24 px-2 py-1 text-xs font-mono bg-muted rounded border border-border" />
      </div>
    </label>
  );
}

function TextField({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} className="mt-1 w-full px-3 py-2 text-sm bg-muted rounded-lg border border-border focus:border-primary outline-none resize-none" />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full px-3 py-2 text-sm bg-muted rounded-lg border border-border focus:border-primary outline-none" />
      )}
    </label>
  );
}
