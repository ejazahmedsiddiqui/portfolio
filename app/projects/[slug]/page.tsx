import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;

    const project = await prisma.project.findUnique({
        where: { slug },
    });

    if (!project) return notFound();

    const allProjects = await prisma.project.findMany({
        select: { id: true, slug: true, title: true },
        orderBy: { id: "asc" },
    });

    const currentIndex = allProjects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject =
        currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
    const projectNumber = currentIndex + 1;

    return (
        <>
            {/* NAV */}
            <nav className="nav">
                <Link href="/" className="nav-logo">
                    <span>EAS</span>.dev
                </Link>
                <ul className="nav-links">
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#experience">Experience</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                </ul>
            </nav>

            <main style={{ paddingTop: "6rem", minHeight: "100vh" }}>
                <div
                    className="container"
                    style={{ paddingTop: "3rem", paddingBottom: "6rem" }}
                >
                    {/* Back */}
                    <Link href="/#projects" className="back-link" style={{ marginBottom: "3rem", display: "inline-flex" }}>
                        ← Back to projects
                    </Link>

                    {/* Header */}
                    <div
                        style={{
                            borderBottom: "1px solid var(--border)",
                            paddingBottom: "2.5rem",
                            marginBottom: "2.5rem",
                            marginTop: "1.5rem",
                        }}
                    >
                        <span
                            className="label"
                            style={{
                                color: "var(--accent)",
                                fontSize: "0.65rem",
                                display: "block",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Project {String(projectNumber).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}
                        </span>

                        <h1
                            className="display-lg"
                            style={{ marginBottom: "1rem" }}
                        >
                            {project.title}
                        </h1>

                        <p
                            style={{
                                fontSize: "1rem",
                                color: "rgba(240,238,232,0.55)",
                                lineHeight: 1.65,
                                maxWidth: "600px",
                            }}
                        >
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Body grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 260px",
                            gap: "3rem",
                            alignItems: "start",
                        }}
                    >
                        {/* Left — description */}
                        <div>
                            <div className="section-label-line">
                                <span className="label">Overview</span>
                            </div>
                            <div
                                style={{
                                    fontSize: "0.95rem",
                                    lineHeight: 1.85,
                                    color: "rgba(240,238,232,0.7)",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {project.fullDescription}
                            </div>
                        </div>

                        {/* Right — sidebar */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                            {/* Tech stack */}
                            <div
                                style={{
                                    padding: "1.25rem",
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                }}
                            >
                                <p className="skill-category-label" style={{ marginBottom: "0.75rem" }}>
                                    Tech Stack
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {Array.isArray(project.techStack) &&
                                        (project.techStack as string[]).map((tech, i) => (
                                            <span key={i} className="tag">
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            {/* Links */}
                            {(project.githubUrl || project.liveUrl) && (
                                <div
                                    style={{
                                        padding: "1.25rem",
                                        background: "var(--bg-card)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <p className="skill-category-label" style={{ marginBottom: "0.75rem" }}>
                                        Links
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                                style={{ justifyContent: "space-between" }}
                                            >
                                                GitHub Repository ↗
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                                style={{
                                                    justifyContent: "space-between",
                                                    borderColor: "var(--accent)",
                                                    color: "var(--accent)",
                                                }}
                                            >
                                                Live Demo ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Prev / Next */}
                    <div
                        style={{
                            marginTop: "4rem",
                            paddingTop: "2rem",
                            borderTop: "1px solid var(--border)",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "1rem",
                        }}
                    >
                        {prevProject ? (
                            <Link href={`/projects/${prevProject.slug}`} className="back-link">
                                ← {prevProject.title}
                            </Link>
                        ) : (
                            <span />
                        )}
                        {nextProject ? (
                            <Link href={`/projects/${nextProject.slug}`} className="arrow-link">
                                {nextProject.title} →
                            </Link>
                        ) : (
                            <span />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}