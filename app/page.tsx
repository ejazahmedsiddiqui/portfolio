import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
    const projects = await prisma.project.findMany();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>

            <div className="grid gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="border p-4 rounded hover:shadow transition"
                    >
                        <h2 className="text-xl font-semibold">
                            {project.title}
                        </h2>
                        <p className="text-gray-600">
                            {project.shortDescription}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}