"use client";

import Link from "next/link";

interface ProjectCardProps {
    id: number | string;
    slug: string;
    title: string;
    shortDescription: string;
    techStack: unknown;
    index: number;
}

export default function ProjectCard({
                                        slug,
                                        title,
                                        shortDescription,
                                        techStack,
                                        index,
                                    }: ProjectCardProps) {
    const stack = Array.isArray(techStack) ? (techStack as string[]) : [];

    return (
        <Link
            href={`/projects/${slug}`}
            style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                background: "var(--bg-card)",
            }}
        >
            <div
                className="project-card-inner"
                style={{
                    padding: "1.75rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "background 0.2s ease",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "var(--bg-elevated)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
            >
                <span
                    className="label"
                    style={{
                        fontSize: "0.6rem",
                        color: "var(--accent)",
                        marginBottom: "0.75rem",
                        display: "block",
                    }}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                    style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        marginBottom: "0.5rem",
                    }}
                >
                    {title}
                </h2>

                <p
                    style={{
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: "rgba(240,238,232,0.5)",
                        marginBottom: "1.25rem",
                        flex: 1,
                    }}
                >
                    {shortDescription}
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.35rem",
                        marginBottom: "1.25rem",
                    }}
                >
                    {stack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="tag tag-neutral"
                            style={{ fontSize: "0.62rem" }}
                        >
                            {tech}
                        </span>
                    ))}
                    {stack.length > 4 && (
                        <span className="tag tag-neutral" style={{ fontSize: "0.62rem" }}>
                            +{stack.length - 4}
                        </span>
                    )}
                </div>

                <span
                    className="arrow-link"
                    style={{ fontSize: "0.65rem", pointerEvents: "none" }}
                >
                    View project →
                </span>
            </div>
        </Link>
    );
}