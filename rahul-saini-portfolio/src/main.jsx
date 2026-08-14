import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Code2, Database, ExternalLink,
  Github, Linkedin, Mail, MapPin, Menu, Moon, Send, Sparkles,
  Terminal, X, Zap, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import rahulPhoto from "./rahulPhoto.png";
import "./styles.css";

const profile = {
  name: "Rahul Saini",
  title: "Senior Full-Stack Developer",
  subtitle: "React · Next.js · Node.js · TypeScript · GenAI",
  email: "sainir30051@gmail.com",
  github: "https://github.com/",
  linkedin: "www.linkedin.com/in/rahul-saini-8a4a34161",
  resume: "/Rahul-Saini-Resume.pdf"
};

const projects = [
  {
    name: "AFL Global",
    category: "Enterprise Web",
    description: "Global, CMS-driven web experience focused on performance, SEO and scalable frontend architecture.",
    stack: ["Next.js", "React", "TypeScript", "Sitecore", "SCSS", "Claude"],
    url: "https://www.aflglobal.com/",
    accent: "purple"
  },
  {
    name: "Yatra",
    category: "High-Traffic Travel",
    description: "Responsive travel platform experience with reusable components, API integrations and SSR/SSG.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript"],
    url: "https://www.yatra.com/",
    accent: "blue"
  },
  {
    name: "Marketcube",
    category: "Full-Stack Marketplace",
    description: "Scalable multi-vendor marketplace with authentication, reusable layouts and commerce-focused workflows.",
    stack: ["React", "Redux", "Shopify Polaris", "Node.js", "Express", "MongoDB"],
    url: "https://www.marketcube.io/",
    accent: "green"
  },
  {
    name: "Xylem",
    category: "Enterprise Web",
    description: "Scalable frontend solution with reusable UI, dynamic content, SEO improvements and performance optimization.",
    stack: ["Next.js", "React", "TypeScript", "HTML5", "SCSS"],
    url: "https://www.xylem.com/en-us/",
    accent: "cyan"
  }
];

const experience = [
  {
    period: "12/2025 — 05/2026",
    role: "Senior Associate Engineer",
    company: "Altudo",
    location: "Noida",
    bullets: [
      "Built responsive, user-friendly UI components using React, Next.js and CMS-driven architectures.",
      "Developed and integrated Sitecore CMS solutions for dynamic, scalable digital experiences.",
      "Integrated AI-powered features using LLM APIs and used GenAI to accelerate development workflows.",
      "Improved performance through load-time, bundle-size and rendering optimizations, including SEO and geo-related enhancements."
    ]
  },
  {
    period: "08/2021 — 12/2025",
    role: "Senior Associate Engineer",
    company: "Successive Digital",
    location: "Noida, India",
    bullets: [
      "Developed responsive web applications and integrated frontend experiences with backend APIs.",
      "Designed and integrated RESTful APIs using Node.js and Express.js.",
      "Improved performance through code optimization, lazy loading, reusable components and efficient API calls.",
      "Reduced bugs by 25% with thorough test coverage and automated Husky checks."
    ]
  },
  {
    period: "01/2020 — 11/2020",
    role: "Software Trainee",
    company: "Risersoft Private Limited",
    location: "Meerut, India",
    bullets: [
      "Built reusable and modular React.js components with scalable component structures.",
      "Integrated RESTful APIs and GraphQL endpoints into frontend applications.",
      "Implemented robust data fetching, response handling, error handling and asynchronous workflows."
    ]
  }
];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SCSS", "Redux", "React Query"] },
  { title: "Backend & APIs", icon: Terminal, items: ["Node.js", "Express.js", "REST", "GraphQL", "Axios", "Apollo Client"] },
  { title: "AI / GenAI", icon: Sparkles, items: ["LLM Integration", "Prompt Engineering", "Claude", "ChatGPT", "RAG", "AI-assisted Development"] },
  { title: "Data & Tools", icon: Database, items: ["MongoDB", "Firebase", "Git", "GitHub", "GitLab", "Bitbucket", "Docker", "Jest", "React Testing Library", "Postman"] }
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow"><span className="dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const nav = ["home", "about", "skills", "experience", "projects", "contact"];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <header className="header">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <span>&lt;RS</span> /&gt;
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {nav.map((item) => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Theme"><Moon size={18} /></button>
          <a className="cv-btn" href={profile.resume} download>Download CV <ArrowDownRight size={16} /></a>
          <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="availability">
              <span className="pulse" /> Available for selected opportunities
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>
              Senior <span>Full-Stack</span><br />Developer
            </motion.h1>
            <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .16 }}>
              React · Next.js · Node.js · TypeScript · GenAI
            </motion.p>
            <motion.p className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .22 }}>
              5.7+ years building scalable, high-performance web applications and AI-powered experiences with a strong focus on clean architecture, performance and maintainability.
            </motion.p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go("projects")}>View Projects <ArrowUpRight size={18} /></button>
              <button className="secondary-btn" onClick={() => go("contact")}>Let's Connect <Send size={16} /></button>
            </div>
            <div className="social-row">
              <span>Connect</span>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={19} /></a>
            </div>
          </div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="glow" />

            <div
              className="profile-photo"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(255,255,255,.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,.35)",
                position: "relative",
                zIndex: 2
              }}
            >
              <img
                src={rahulPhoto}
                alt="Rahul Saini"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            <div className="code-card">
              <div className="window-dots"><i /><i /><i /></div>
              <pre>{`const developer = {
  experience: "5.7+ years",
  stack: ["React", "Next.js",
    "Node", "MongoDB"],
  focus: ["Performance",
    "AI / LLM", "UX"]
};

developer.build();`}</pre>
            </div>
            <div className="float-card react-card"><Code2 size={26} /><small>REACT</small></div>
            <div className="float-card node-card"><Terminal size={24} /><small>NODE</small></div>
            <div className="float-card ai-card"><Sparkles size={24} /><small>GENAI</small></div>
          </motion.div>
        </section>

        <section id="about" className="section">
          <SectionTitle eyebrow="About Me" title="Engineering with a product mindset." text="I combine frontend craftsmanship with backend experience to build reliable, scalable digital products." />
          <div className="about-grid">
            <div className="glass about-copy">
              <p>I'm a <strong>Senior Full-Stack / MERN Developer</strong> with 7+ years of professional experience across enterprise web, high-traffic travel, marketplaces and CMS-driven platforms.</p>
              <p>My core strength is building responsive React and Next.js applications, designing RESTful APIs with Node.js and Express, and improving real-world performance through reusable architecture, SSR/SSG, lazy loading and SEO optimization.</p>
              <p>More recently, I've worked with <strong>Generative AI, LLM APIs and prompt engineering</strong> to bring AI-powered capabilities into modern development workflows and products.</p>
            </div>
            <div className="glass code-panel">
              <div className="code-head"><span /><span /><span /><label>rahul.config.js</label></div>
              <pre><span className="pink">export const</span> <span className="blue">rahul</span> = {'{'}
{"\n  "}role: <span className="green">"Senior Full-Stack Developer"</span>,
{"\n  "}experience: <span className="orange">5.7</span>,
{"\n  "}specialties: [
{"\n    "}<span className="green">"React / Next.js"</span>,
{"\n    "}<span className="green">"Node / Express / MongoDB"</span>,
{"\n    "}<span className="green">"GenAI / LLM Integration"</span>
{"\n  "}],
{"\n  "}mindset: <span className="green">"Build. Measure. Improve."</span>
{"\n"}{'}'}</pre>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle eyebrow="Tech Stack" title="Tools I use to ship." text="A practical stack built around modern frontend, full-stack and AI development." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <motion.div className="glass skill-card" key={title} whileHover={{ y: -5 }}>
                <div className="skill-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <section id="experience" className="section">
          <SectionTitle eyebrow="Experience" title="5.7+ years of building." text="Production experience across enterprise, travel, marketplace and CMS-driven applications." />
          <div className="timeline">
            {experience.map((job, i) => (
              <motion.article className="timeline-item" key={job.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="timeline-dot" />
                <div className="timeline-meta">{job.period}</div>
                <div className="glass job-card">
                  <div className="job-top">
                    <div><h3>{job.role}</h3><h4>{job.company}</h4></div>
                    <span><MapPin size={14} /> {job.location}</span>
                  </div>
                  <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section> */}

        <section id="projects" className="section">
          <SectionTitle eyebrow="Featured Projects" title="Selected work." text="A few projects that showcase my frontend, full-stack, performance and enterprise experience." />
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.article className={`glass project-card ${p.accent}`} key={p.name} whileHover={{ y: -7 }}>
                <div className="project-preview">
                  <div className="preview-grid" />
                  <div className="preview-window">
                    <div className="window-dots"><i /><i /><i /></div>
                    <div className="preview-lines"><b /><b /><b /><b /></div>
                  </div>
                  <span className="project-number">0{i + 1}</span>
                </div>
                <div className="project-body">
                  <div className="project-category">{p.category}</div>
                  <h3>{p.name} <ExternalLink size={17} /></h3>
                  <p>{p.description}</p>
                  <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <a className="project-link" href={p.url} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="stats section">
          <div className="glass stats-inner">
            <div><strong>5.7+</strong><span>Years Experience</span></div>
            <div><strong>4</strong><span>Featured Projects</span></div>
            <div><strong>25%</strong><span>Bug Reduction</span></div>
            <div><strong>AI</strong><span>LLM / GenAI</span></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle eyebrow="Get In Touch" title="Let's build something useful." text="Have a project, product idea or opportunity? Send a message and I'll get back to you." />
          <div className="contact-grid">
            <div className="glass contact-card">
              <div className="contact-line"><Mail /><div><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
              <div className="contact-line"><MapPin /><div><small>Location</small><span>India</span></div></div>
              <div className="contact-line"><Zap /><div><small>Focus</small><span>Full-Stack · GenAI · Performance</span></div></div>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
                <a href={`mailto:${profile.email}`}><Mail /></a>
              </div>
            </div>
            <form className="glass contact-form" onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
            }}>
              <div className="form-row"><input name="name" placeholder="Your name" required /><input type="email" name="email" placeholder="Your email" required /></div>
              <input name="subject" placeholder="Subject" required />
              <textarea name="message" rows="6" placeholder="Tell me about your project..." required />
              <button className="primary-btn" type="submit">Send Message <Send size={16} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Rahul Saini. All rights reserved.</span>
        <span>Built with React · Framer Motion</span>
        <button onClick={() => go("home")} aria-label="Back to top"><ChevronRight size={18} style={{ transform: "rotate(-90deg)" }} /></button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
