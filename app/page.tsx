import {prisma} from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";

const skills = {
    "Mobile & Frontend": ["React Native", "Expo", "React.js", "JavaScript", "TypeScript", "HTML", "CSS"],
    "State & Data": ["Zustand", "TanStack React Query", "Context API", "Axios", "REST APIs", "WebSockets"],
    "Backend": ["Java", "Spring Boot", "Node.js", "JWT Auth", "Hibernate/JPA"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "Tools & Practices": ["Git", "GitHub", "Postman", "Figma", "Agile/Scrum", "Performance Optimization"],
};

const experience = [
    {
        role: "React Native Developer",
        company: "Acme Web Technology",
        location: "New Delhi, India",
        period: "Jan 2025 — Present",
        active: true,
        points: [
            "Led development of ApnaRation & Flashmart — production hyperlocal delivery apps with real-time order tracking, cart workflows, and WebSocket sync across 3 user roles.",
            "Improved performance by ~80% migrating from Context API to Zustand and optimizing render cycles.",
            "Built ApnaTechCalls — dual-role marketplace with JWT auth, 5km geolocation matching, and real-time state updates.",
            "Implemented TanStack React Query for caching, optimistic updates, and network resilience.",
            "Developed PDF invoice generation and advanced search with debouncing to reduce API overhead.",
        ],
    },
    {
        role: "Scholar Trainee",
        company: "Wipro Technologies",
        location: "Coimbatore, Tamil Nadu",
        period: "Apr 2022 — Dec 2023",
        active: false,
        points: [
            "Enterprise training in cloud (Azure), security, and software development — Azure Fundamentals certified.",
            "Developed working knowledge of MySQL administration, query optimization, and relational database design.",
            "Certified in Agile & Scrum; participated in sprint planning and iterative delivery.",
        ],
    },
    {
        role: "ReactJS Intern",
        company: "Maxval",
        location: "Navi Mumbai, Maharashtra",
        period: "Jan 2022 — Mar 2022",
        active: false,
        points: [
            "Contributed to a web-based email template generator with drag-and-drop UI, auth flows, and reusable components.",
            "Applied React best practices in code reviews to improve performance and maintainability.",
        ],
    },
];

export default async function Home() {
    const projects = await prisma.project.findMany({
        orderBy: {id: "asc"},
    });

    return (
        <>
            {/* NAV */}
            <nav className="nav">
                <a href="#" className="nav-logo">
                    <span>EJAZAHMEDSIDDIQUI</span>.com
                </a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <main>
                {/* HERO */}
                <section
                    id="about"
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "6rem",
                        paddingBottom: "4rem",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Background orbs */}
                    <div
                        className="hero-orb"
                        style={{
                            width: "500px",
                            height: "500px",
                            background: "rgba(232, 100, 44, 0.07)",
                            top: "-100px",
                            right: "-150px",
                        }}
                    />
                    <div
                        className="hero-orb"
                        style={{
                            width: "300px",
                            height: "300px",
                            background: "rgba(74, 222, 128, 0.04)",
                            bottom: "100px",
                            left: "-80px",
                        }}
                    />

                    <div className="container">
                        {/* Status */}
                        <div
                            className="status-badge animate-fade-up"
                            style={{marginBottom: "2rem"}}
                        >
                            <span className="status-dot"/>
                            Available for opportunities
                        </div>

                        {/* Name */}
                        <h1
                            className="display-xl animate-fade-up delay-1"
                            style={{marginBottom: "0.75rem"}}
                        >
                            Ejaz Ahmed
                            <br/>
                            <span className="accent glow-accent">Siddiqui</span>
                        </h1>

                        {/* Title */}
                        <p
                            className="label animate-fade-up delay-2"
                            style={{
                                marginBottom: "2rem",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                                color: "var(--fg-muted)",
                            }}
                        >
                            React Native Developer · Full Stack (Java + Node.js)
                        </p>

                        {/* Summary */}
                        <p
                            className="animate-fade-up delay-3"
                            style={{
                                maxWidth: "560px",
                                fontSize: "1.05rem",
                                lineHeight: 1.7,
                                color: "rgba(240,238,232,0.65)",
                                marginBottom: "2.5rem",
                            }}
                        >
                            React Native Developer with hands-on experience shipping production mobile apps including a
                            live hyperlocal
                            grocery delivery platform and an on-demand services marketplace.
                        </p>
                        <p
                            className="animate-fade-up delay-3"
                            style={{
                                maxWidth: "560px",
                                fontSize: "1.05rem",
                                lineHeight: 1.7,
                                color: "rgba(240,238,232,0.65)",
                                marginBottom: "2.5rem",
                            }}
                        >
                            Proficient in modern state management {" "}
                            <span style={{color: "var(--fg)"}}>(Zustand, TanStack React Query)</span>, real-time
                            features (WebSockets), and location-based services. Proven
                            experience with RESTful API management using Axios.
                        </p>
                        <p
                            className="animate-fade-up delay-3"
                            style={{
                                maxWidth: "560px",
                                fontSize: "1.05rem",
                                lineHeight: 1.7,
                                color: "rgba(240,238,232,0.65)",
                                marginBottom: "2.5rem",
                            }}
                        >
                            Backend experience in Java/Spring Boot
                            with growing expertise in Node.js. {" "}
                            <span style={{color: "var(--fg)"}}>9.52 SGPA graduate</span>, with a track record of
                            performance optimization and
                            clean, scalable
                            architecture
                            based in India.
                        </p>

                        {/* CTA links */}
                        <div
                            className="animate-fade-up delay-4"
                            style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}
                        >
                            <a
                                href="mailto:eahmed.official.2001@gmail.com"
                                className="contact-link"
                                style={{
                                    background: "var(--accent)",
                                    border: "1px solid var(--accent)",
                                    color: "white",
                                }}
                            >
                                Get in touch →
                            </a>
                            <a
                                href="https://github.com/ejazahmedsiddiqui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ejaz-ahmed-siddiqui-333514221?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section style={{paddingBottom: "5rem"}}>
                    <div className="container">
                        <div className="section-label-line">
                            <span className="label">Skills</span>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                                gap: "1.5rem",
                            }}
                        >
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <p className="skill-category-label">{category}</p>
                                    <div style={{display: "flex", flexWrap: "wrap", gap: "0.4rem"}}>
                                        {items.map((skill) => (
                                            <span key={skill} className="tag tag-neutral">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" style={{paddingBottom: "5rem"}}>
                    <div className="container">
                        <div className="section-label-line">
                            <span className="label">Experience</span>
                        </div>

                        <div>
                            {experience.map((exp, i) => (
                                <div
                                    key={i}
                                    className={`exp-item ${exp.active ? "exp-dot-active" : ""}`}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            flexWrap: "wrap",
                                            gap: "0.5rem",
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        <div>
                                            <h3
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: 600,
                                                    letterSpacing: "-0.01em",
                                                    marginBottom: "0.15rem",
                                                }}
                                            >
                                                {exp.role}
                                            </h3>
                                            <p
                                                className="label"
                                                style={{fontSize: "0.68rem"}}
                                            >
                                                {exp.company} · {exp.location}
                                            </p>
                                        </div>
                                        <span
                                            className="label"
                                            style={{
                                                fontSize: "0.68rem",
                                                color: exp.active ? "var(--green)" : "var(--fg-muted)",
                                            }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul
                                        style={{
                                            marginTop: "0.75rem",
                                            paddingLeft: "1rem",
                                            listStyleType: "none",
                                        }}
                                    >
                                        {exp.points.map((pt, j) => (
                                            <li
                                                key={j}
                                                style={{
                                                    fontSize: "0.88rem",
                                                    lineHeight: 1.65,
                                                    color: "rgba(240,238,232,0.6)",
                                                    marginBottom: "0.4rem",
                                                    position: "relative",
                                                    paddingLeft: "1rem",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        color: "var(--accent)",
                                                    }}
                                                >
                                                    ›
                                                </span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div
                            style={{
                                marginTop: "3rem",
                                padding: "1.5rem",
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "4px",
                            }}
                        >
                            <p className="label" style={{marginBottom: "1rem"}}>
                                Education
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                }}
                            >
                                <div>
                                    <p style={{fontWeight: 600, fontSize: "0.95rem"}}>
                                        B.Sc. Computer Science
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--fg-muted)",
                                            fontFamily: "var(--font-mono)",
                                        }}
                                    >
                                        Mumbai University, Navi Mumbai
                                    </p>
                                </div>
                                <div style={{textAlign: "right"}}>
                                    <span
                                        className="tag"
                                        style={{fontSize: "0.8rem", padding: "0.4rem 0.9rem"}}
                                    >
                                        9.52 / 10 SGPA
                                    </span>
                                    <p
                                        className="label"
                                        style={{
                                            marginTop: "0.4rem",
                                            fontSize: "0.65rem",
                                        }}
                                    >
                                        Jun 2019 — Mar 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" style={{paddingBottom: "6rem"}}>
                    <div className="container">
                        <div className="section-label-line">
                            <span className="label">Projects</span>
                        </div>

                        {!projects || projects.length === 0 ? (
                            <div
                                style={{
                                    padding: "3rem",
                                    textAlign: "center",
                                    border: "1px dashed var(--border)",
                                    borderRadius: "4px",
                                    color: "var(--fg-muted)",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.8rem",
                                }}
                            >
                                No projects found. Run `npx prisma db seed` to populate the database.
                            </div>
                        ) : (
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                                    gap: "1px",
                                    background: "var(--border)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    overflow: "hidden",
                                }}
                            >
                                {projects.map((project, i) => (
                                    <ProjectCard
                                        key={project.id}
                                        id={project.id}
                                        slug={project.slug}
                                        title={project.title}
                                        shortDescription={project.shortDescription}
                                        techStack={project.techStack}
                                        index={i}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CONTACT */}
                <section
                    id="contact"
                    style={{
                        paddingBottom: "6rem",
                        borderTop: "1px solid var(--border)",
                        paddingTop: "4rem",
                    }}
                >
                    <div className="container" style={{textAlign: "center"}}>
                        <p className="label" style={{marginBottom: "1rem"}}>
                            Get in touch
                        </p>
                        <h2
                            className="display-lg"
                            style={{marginBottom: "1rem"}}
                        >
                            Let&#39;s build something
                            <br/>
                            <span className="accent">worth using.</span>
                        </h2>
                        <p
                            style={{
                                color: "var(--fg-muted)",
                                marginBottom: "2.5rem",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.82rem",
                            }}
                        >
                            eahmed.official.2001@gmail.com · +91-9867733176 · India
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <a
                                href="mailto:eahmed.official.2001@gmail.com"
                                className="contact-link"
                                style={{
                                    background: "var(--accent)",
                                    border: "1px solid var(--accent)",
                                    color: "white",
                                }}
                            >
                                Send Email →
                            </a>
                            <a
                                href="https://github.com/ejazahmedsiddiqui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ejaz-ahmed-siddiqui-333514221/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer
                    style={{
                        borderTop: "1px solid var(--border)",
                        padding: "1.5rem 2rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <span
                        className="label"
                        style={{fontSize: "0.65rem"}}
                    >
                        © {new Date().getFullYear()} Ejaz Ahmed Siddiqui
                    </span>
                    <span
                        className="label"
                        style={{fontSize: "0.65rem"}}
                    >
                        Built with Next.js · Prisma · PostgreSQL
                    </span>
                </footer>
            </main>
        </>
    );
}