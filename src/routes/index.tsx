import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Award, BookOpen, CheckCircle2, Code2, Database, Download, Github, GraduationCap, Languages, Laptop, Linkedin, Mail, MapPin, Menu, MonitorCog, Palette, PenTool, Phone, Presentation, Rocket, Send, Sparkles, Trophy, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import habitTrackerImage from "@/assets/habit-tracker.png";
import nearyspaceImage from "@/assets/nearyspace.png";
import roomiematchImage from "@/assets/roomiematch.png";
import loopingImage from "@/assets/looping.png";
import environmentalDebateImage from "@/assets/environmentaldebate.png";
import firstWaveImage from "@/assets/firstwave.png";
import nationalYouthDebateImage from "@/assets/nationalyouthdebate.png";
import sisterOfCodeImage from "@/assets/Sisterofcode.png";
import techpreneurImage from "@/assets/Techpreneur.png";
import universityVentureImage from "@/assets/universityventure.png";
import womenInnovatorImage from "@/assets/WomenInnovator.png";
import vivoatImage from "@/assets/vivoat-placeholder.jpg";
import designImage from "@/assets/design-placeholder.jpg";
import profileImage from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Soun Chanboramey | Software & Multimedia Portfolio" },
    { name: "description", content: "Explore Soun Chanboramey's software engineering, web development, UI/UX, and graphic design portfolio." },
    { property: "og:title", content: "Soun Chanboramey | Creative Developer" },
    { property: "og:description", content: "Software engineering, web development, UI/UX, and graphic design portfolio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const navItems = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"];
const categories = ["All", "Web Development", "Mobile App", "UI/UX", "Graphic Design"] as const;
type Category = typeof categories[number];

const projects = [
  { title: "Mini Habit Tracker", categories: ["Web Development"], label: "Web App", description: "A small web app for recording daily habits and keeping track of progress over time. Update this description with the features and tools you used.", tech: ["Habit Tracking", "Web Development"], image: habitTrackerImage, links: [{ label: "View Project", url: "https://mini-habit-tracker-livid.vercel.app/login" }] },
  { title: "Habit Tracker Native", categories: ["Mobile App"], label: "Mobile App", description: "A native habit tracking app concept for building routines and checking in on daily progress. Add the platform and key features here.", tech: ["Mobile App", "Habit Tracking"], image: habitTrackerImage, links: [{ label: "View on GitHub", url: "https://github.com/sounchanboramey/habit-tracker-native" }] },
  { title: "Vivoat", categories: ["Web Development", "UI/UX"], label: "Education / Web Development", description: "A digital learning project focused on creating an engaging and accessible learning experience. Add more details about your role and the learning features here.", tech: ["Web Development", "UI/UX Design"], image: vivoatImage, links: [{ label: "Figma Prototype", url: "https://www.figma.com/proto/0dPAwx41OdyQxZcdmVrLPU/Vivoat-Figma?node-id=1024-1692&p=f&viewport=691%2C125%2C0.1&t=fvzHWucACw0kmGO5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1024%3A1692&page-id=1024%3A1691" }, { label: "Live Demo", url: "https://vivoat-class-demo.leakproapeysam.workers.dev/#" }] },
  { title: "NearySpace", categories: ["Mobile App", "UI/UX"], label: "Women's Health / UI/UX", description: "A bilingual women's health app concept designed to make health information and support easier to access. Add details about the audience, languages, and design process here.", tech: ["Figma", "UI/UX Design", "Health App"], image: nearyspaceImage, links: [{ label: "View Figma Project", url: "https://www.figma.com/make/s9TWroBWTi8zw5PhoPYusD/Bilingual-Women-s-Health-App?p=f&t=jZgkWOWfC9Olwfzk-0" }] },
  { title: "Roommate Compatibility App", categories: ["Web Development"], label: "Techpreneur Bootcamp / Web Development", description: "A team project exploring how people can find compatible roommates based on lifestyle and shared preferences. Add your specific features and contribution here.", tech: ["Web Development", "Team Project"], image: roomiematchImage, links: [{ label: "View on GitHub", url: "https://github.com/Sor-Channorakpitou/Roommate_Compatibility_App-Techpreneur" }] },
  { title: "Looping", categories: ["Mobile App"], label: "Flutter App", description: "This is a Flutter mobile app for Cambodia where users can rent or borrow items from each other, and owners can earn extra income from things they rarely use", tech: ["Flutter", "Dart", "Mobile App"], image: loopingImage, links: [{ label: "View on GitHub", url: "https://github.com/SengHour2387/flutter_looping" }] },
];

const skillGroups = [
  { title: "Web Development", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Programming Languages", icon: Laptop, skills: ["C++", "Java", "PHP — Basic"] },
  { title: "Backend & Databases", icon: Database, skills: ["Laravel — Basic", "MySQL — Basic", "SQLite — Basic"] },
  { title: "Version Control & IT", icon: MonitorCog, skills: ["Git & GitHub — Basic", "Computer Troubleshooting"] },
  { title: "Design & Multimedia", icon: Palette, skills: ["Figma", "UX/UI Design", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Canva"] },
  { title: "Office & Productivity", icon: Presentation, skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Workspace"] },
  { title: "Professional Skills", icon: Users, skills: ["Problem Solving", "Communication & Teamwork", "Fast Learner & Adaptable", "Time Management"] },
  { title: "Languages", icon: Languages, skills: ["Khmer — Native", "English — Proficient", "Chinese — Intermediate"] },
];

const education = [
  { school: "Limkokwing University of Creative Technology", program: "Bachelor's Degree in Software Engineering and Multimedia", duration: "February 2024 – Present", facts: ["CGPA: 3.80"], description: "Currently pursuing a Bachelor's degree in Software Engineering and Multimedia, developing skills in software development, web technologies, databases, UI/UX design, and multimedia.", current: true },
  { school: "CamAsean Institute", program: "General Chinese Program", duration: "February 2023 – July 2025", facts: ["Graduated from the General Chinese Program."], current: false },
  { school: "Australia Centre for Education", program: "General English Program", duration: "April 2020 – December 2022", facts: ["Graduated from the General English Program.", "IELTS Band Score: 6.5", "Grade: B"], current: false },
  { school: "Chbar Ampov High School", program: "High School", duration: "August 2017 – December 2022", facts: [], current: false },
];

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary/70">{eyebrow}</p><h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">{title}</h2>{intro && <p className="mt-4 text-base leading-7 text-muted-foreground">{intro}</p>}</div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Category>("All");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors["name"] = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors["email"] = "Please enter a valid email address.";
    if (!message) nextErrors["message"] = "Please write a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSent(true);
    window.location.href = `mailto:chanborameysoun@gmail.com?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="section-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center" aria-label="Main navigation">
          <a href="#home" className="flex min-w-0 items-center gap-3 font-display text-lg font-bold" aria-label="Soun Chanboramey, home"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-sm text-primary-foreground">SC</span><span className="hidden truncate sm:inline">Soun Chanboramey</span></a>
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
            <Button asChild size="sm" className="ml-2 gap-2 shadow-sm">
              <a href="/Soun_Chanboramey_CV.pdf" download="Soun_Chanboramey_CV.pdf" target="_blank" rel="noreferrer">
                <Download className="size-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && (
          <div id="mobile-menu" className="border-t border-border bg-background px-5 py-5 lg:hidden">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 font-semibold last:border-0">{item}</a>)}
            <div className="pt-4">
              <Button asChild className="w-full gap-2" onClick={() => setMenuOpen(false)}>
                <a href="/Soun_Chanboramey_CV.pdf" download="Soun_Chanboramey_CV.pdf" target="_blank" rel="noreferrer">
                  <Download className="size-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-primary pt-28 text-primary-foreground">
          <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="reveal max-w-4xl"><p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"><span className="size-2 rounded-full bg-accent" />Based in Cambodia · Open to internships</p><h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl lg:text-8xl">Building digital experiences through code, creativity, and design.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/75">Passionate about web development, UI/UX design, graphic design, and technology. I enjoy turning ideas into meaningful digital experiences and continuously learning new skills.</p><div className="mt-9 flex flex-wrap items-center gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="#projects">View My Projects <ArrowDown /></a></Button><Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-md"><a href="/Soun_Chanboramey_CV.pdf" download="Soun_Chanboramey_CV.pdf" target="_blank" rel="noreferrer"><Download className="mr-1 size-4" /> Download CV</a></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#contact">Contact Me</a></Button></div></div>
             <div className="relative mx-auto w-full max-w-sm sm:max-w-md"><div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-primary-foreground/20" /><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary shadow-2xl"><img src={profileImage} alt="Soun Chanboramey" width={1024} height={1365} className="h-full w-full object-cover object-top" /></div><div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl bg-background px-5 py-4 text-foreground shadow-xl sm:flex"><Code2 className="text-primary" /><span className="text-sm font-bold">Creative developer</span></div></div>
          </div>
        </section>

        <section id="about" className="py-24 sm:py-32"><div className="section-shell"><SectionTitle eyebrow="About me" title="Engineering ideas with a creative point of view." /><div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]"><div><p className="text-xl leading-9 text-muted-foreground">I am a Software Engineering and Multimedia student at Limkokwing University of Creative Technology. I have experience in web development, digital design, administration, and collaborative projects. I enjoy combining technical knowledge with creativity to solve problems and create useful digital products.</p><div className="mt-8"><Button asChild variant="outline" className="gap-2 font-semibold"><a href="/Soun_Chanboramey_CV.pdf" download="Soun_Chanboramey_CV.pdf" target="_blank" rel="noreferrer"><Download className="size-4 text-primary" /> Download Full CV (PDF)</a></Button></div></div><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">{[["Student", "Software Engineering & Multimedia"], ["3.80", "CGPA"], ["6.5", "IELTS Band Score"], ["Cambodia", "Based in"], ["Available", "Open to Internship Opportunities"]].map(([value,label]) => <div key={label} className="bg-card p-7 last:sm:col-span-2"><p className="text-2xl font-bold text-primary">{value}</p><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}</div></div></div></section>

        <section id="education" className="bg-muted py-24 sm:py-32"><div className="section-shell"><SectionTitle eyebrow="Education" title="A foundation built across technology and languages." intro="My academic journey, from secondary education to my current multidisciplinary degree." /><div className="relative mx-auto max-w-4xl border-l-2 border-primary/20 pl-7 sm:pl-12">{education.map((item) => <article key={item.school} className={`relative mb-6 rounded-2xl border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${item.current ? "border-primary/40 bg-secondary" : "border-border bg-card"}`}><span className={`absolute -left-[2.28rem] top-8 grid size-7 place-items-center rounded-full border-4 border-muted sm:-left-[3.85rem] ${item.current ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}><GraduationCap className="size-3.5" /></span><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-bold sm:text-2xl">{item.school}</h3>{item.current && <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Current</span>}</div><p className="mt-2 font-semibold text-primary">{item.program}</p></div><p className="rounded-full bg-background px-3 py-1.5 text-sm font-semibold text-muted-foreground">{item.duration}</p></div>{item.description && <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">{item.description}</p>}{item.facts.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{item.facts.map((fact) => <span key={fact} className="rounded-lg border border-primary/15 bg-background px-3 py-2 text-sm font-semibold">{fact}</span>)}</div>}</article>)}</div></div></section>

        <section id="skills" className="py-24 sm:py-32"><div className="section-shell"><SectionTitle eyebrow="Capabilities" title="A multidisciplinary toolkit." intro="Technical foundations, visual craft, office fluency, and collaborative strengths—organized for quick scanning." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({title,icon:Icon,skills}, index) => <article key={title} className={`rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${index === 4 || index === 6 ? "lg:col-span-2" : ""}`}><div className="mb-6 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon /></span><h3 className="text-xl font-bold">{title}</h3></div><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-muted px-3 py-2 text-sm font-semibold">{skill}</span>)}</div></article>)}</div></div></section>

        <section id="projects" className="py-24 sm:py-32"><div className="section-shell"><SectionTitle eyebrow="Selected work" title="Projects shaped by curiosity." intro="A growing collection of product ideas, engineered systems, and visual explorations." /><div className="mb-10 flex flex-wrap gap-2" aria-label="Filter projects">{categories.map((category) => <Button key={category} variant={filter === category ? "default" : "outline"} size="sm" onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</Button>)}</div><div className="grid gap-7 md:grid-cols-2">{filteredProjects.map((project) => <article key={project.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="aspect-[3/2] overflow-hidden bg-background"><img src={project.image} alt={`${project.title} project preview`} loading="lazy" width={768} height={512} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="p-6 sm:p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary/65">{project.label}</p><h3 className="mt-2 text-2xl font-bold">{project.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold">{tech}</span>)}</div>{project.links.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{project.links.map((link) => <Button key={link.url} asChild variant="outline"><a href={link.url} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight /></a></Button>)}</div>}</div></article>)}</div></div></section>

        <section id="experience" className="bg-primary py-24 text-primary-foreground sm:py-32"><div className="section-shell"><div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Experience</p><h2 className="text-4xl font-bold sm:text-5xl">Professional experience, built step by step.</h2></div><div className="relative ml-3 max-w-4xl border-l border-primary-foreground/25 pl-8 sm:pl-12">{[
          ["Administrative Officer", "Admit Group", "January 2025 – March 2025", "Supported day-to-day administrative operations and team coordination."],
          ["Administrative Assistant", "Cambodia Pepper and Spices Federation Association", "February 2024 – December 2024", "Contributed to administrative workflows, documentation, and organizational support."],
          ["Sales Assistant", "Khmer Organic Cooperative Co., Ltd", "June 2023 – December 2023", "Assisted customers and supported daily sales operations."],
        ].map(([role,company,date,summary]) => <article key={role} className="relative pb-12 last:pb-0"><span className="absolute -left-[2.63rem] top-1 size-4 rounded-full border-4 border-primary bg-accent sm:-left-[3.63rem]" /><p className="text-sm font-semibold text-accent">{date}</p><h3 className="mt-2 text-2xl font-bold">{role}</h3><p className="mt-1 font-semibold text-primary-foreground/70">{company}</p><p className="mt-4 max-w-2xl leading-7 text-primary-foreground/65">{summary}</p></article>)}</div></div></section>

        <section id="achievements" className="py-24 sm:py-32" aria-labelledby="achievements-heading"><div className="section-shell"><SectionTitle eyebrow="Programs & achievements" title="Learning, leading, and showing up." /><h2 id="achievements-heading" className="sr-only">Programs and achievements</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
          [Rocket, "Techpreneur Bootcamp", "Selected from 1,100+ applicants", "Selected for a full-stack development and entrepreneurship program, building technology solutions from idea to business.", techpreneurImage],
          [GraduationCap, "Sister of Code", "Digital Entrepreneurship & Digital Marketing Scholarship", "A scholarship focused on developing digital skills, entrepreneurship, and practical business knowledge.", sisterOfCodeImage],
          [Sparkles, "Women Innovator Bootcamp", "Program participant", "Focused on innovation, entrepreneurship, and developing solutions to real-world challenges while strengthening leadership and communication skills.", womenInnovatorImage],
          [Trophy, "Environmental Debate Competition", "1st Winner · 2021", "Collaborated to research environmental issues, develop arguments, and present solutions through competitive debate.", environmentalDebateImage],
          [Award, "National Youth Debate Competition", "3rd Winner · 2021", "Led team research and preparation, and represented the team in a national-level debate competition.", nationalYouthDebateImage],
        ].map(([Icon,title,detail,description,image]) => { const AchievementIcon = Icon as typeof Award; return <article key={String(title)} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"><div className="aspect-[16/9] overflow-hidden border-b border-border bg-muted/50"><img src={String(image)} alt={`${String(title)} photo`} loading="lazy" className="h-full w-full object-cover" /></div><div className="p-6"><AchievementIcon className="mb-5 size-7 text-primary" /><h3 className="text-lg font-bold">{String(title)}</h3><p className="mt-2 text-sm font-semibold text-primary">{String(detail)}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(description)}</p></div></article>; })}</div>
          <div className="mt-16"><div className="mb-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Current & recent</p><h3 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Startup competitions</h3></div><div className="grid gap-5 md:grid-cols-2">{[
            [BookOpen, "University Venture Capital — Khmer Enterprise", "Final Program Participant", "Selected to compete in a university venture capital program, developing and pitching a technology solution to address real business challenges faced by baby outlet businesses.", universityVentureImage],
            [Rocket, "FirstWave Startup Competition", "Top 30 Participant", "Selected to participate in a startup competition focused on developing innovative business ideas, validating solutions, and pitching a startup concept.", firstWaveImage],
          ].map(([Icon,title,detail,description,image]) => { const CompetitionIcon = Icon as typeof Award; return <article key={String(title)} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"><div className="aspect-[16/9] overflow-hidden border-b border-border bg-muted/50"><img src={String(image)} alt={`${String(title)} photo`} loading="lazy" className="h-full w-full object-cover" /></div><div className="p-6"><CompetitionIcon className="mb-5 size-7 text-primary" /><h4 className="text-lg font-bold">{String(title)}</h4><p className="mt-2 text-sm font-semibold text-primary">{String(detail)}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(description)}</p></div></article>; })}</div></div></div></section>
        <section id="contact" className="bg-muted py-24 sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionTitle eyebrow="Get in touch" title="Let's create something meaningful together." /><div className="space-y-4"><a href="mailto:chanborameysoun@gmail.com" className="flex items-center gap-4 font-semibold hover:text-primary"><Mail className="text-primary" />chanborameysoun@gmail.com</a><a href="tel:+85592500770" className="flex items-center gap-4 font-semibold hover:text-primary"><Phone className="text-primary" />+855 92 500 770</a><p className="flex items-center gap-4 font-semibold"><MapPin className="text-primary" />Cambodia</p><a href="/Soun_Chanboramey_CV.pdf" download="Soun_Chanboramey_CV.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-semibold hover:text-primary"><Download className="text-primary" /><span>Download CV / Resume</span><ArrowUpRight className="size-4" /></a><a href="https://www.linkedin.com/in/chanboramey-soun-04b706367/" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-semibold hover:text-primary"><Linkedin className="text-primary" /><span>LinkedIn Profile</span><ArrowUpRight className="size-4" /></a><a href="https://github.com/sounchanboramey" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-semibold hover:text-primary"><Github className="text-primary" /><span>GitHub Profile</span><ArrowUpRight className="size-4" /></a></div><div className="mt-8 flex gap-2" aria-label="Social profiles"><Button asChild variant="outline" size="icon"><a href="https://github.com/sounchanboramey" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /><span className="sr-only">GitHub</span></a></Button><Button asChild variant="outline" size="icon"><a href="https://www.linkedin.com/in/chanboramey-soun-04b706367/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /><span className="sr-only">LinkedIn</span></a></Button><Button variant="outline" size="icon" disabled title="Add Behance profile link"><PenTool /><span className="sr-only">Behance</span></Button></div></div><form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-9"><div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-bold">Name<input name="name" maxLength={100} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20" aria-invalid={Boolean(errors["name"])} aria-describedby="name-error" />{errors["name"] && <span id="name-error" className="mt-2 block text-xs text-destructive">{errors["name"]}</span>}</label><label className="text-sm font-bold">Email<input name="email" type="email" maxLength={255} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20" aria-invalid={Boolean(errors["email"])} aria-describedby="email-error" />{errors["email"] && <span id="email-error" className="mt-2 block text-xs text-destructive">{errors["email"]}</span>}</label></div><label className="mt-6 block text-sm font-bold">Message<textarea name="message" rows={6} maxLength={1000} className="mt-2 w-full resize-none rounded-xl border border-input bg-background p-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20" aria-invalid={Boolean(errors["message"])} aria-describedby="message-error" />{errors["message"] && <span id="message-error" className="mt-2 block text-xs text-destructive">{errors["message"]}</span>}</label><Button type="submit" size="lg" className="mt-6">Send Message <Send /></Button>{sent && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary"><CheckCircle2 className="size-4" />Your email app is ready with the message.</p>}</form></div></section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground"><div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Soun Chanboramey</p><p className="text-primary-foreground/60">Designed with curiosity. Built with care.</p></div></footer>
    </div>
  );
}
