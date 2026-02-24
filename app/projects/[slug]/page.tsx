import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = await prisma.project.findUnique({
        where: { slug },
    });

    if (!project) return notFound();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <p className="mb-6 text-gray-700">{project.fullDescription}</p>

            <div className="mb-4">
                <h2 className="font-semibold mb-2">Tech Stack:</h2>
                <ul className="flex gap-2 flex-wrap">
                    {Array.isArray(project.techStack) &&
                        (project.techStack as string[]).map((tech, index) => (
                            <li
                                key={index}
                                className="bg-gray-200 px-3 py-1 rounded text-sm"
                            >
                                {tech}
                            </li>
                        ))}
                </ul>
            </div>

            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-blue-600 underline"
                >
                    View GitHub
                </a>
            )}
        </div>
    );
}