import { prisma } from '@/lib/prisma';

async function main() {
    await prisma.project.deleteMany(); // clean slate (optional)

    await prisma.project.createMany({
        data: [
            {
                title: "Flashmart",
                slug: "flashmart",
                shortDescription: "Full-stack grocery delivery platform.",
                fullDescription: `
Flashmart is a production-style grocery delivery application.
It includes authentication, cart management, order tracking,
admin dashboard, and performance optimization.
        `,
                techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
                githubUrl: "https://github.com/yourusername/flashmart",
                liveUrl: null,
            },
            {
                title: "Portfolio Platform",
                slug: "portfolio-platform",
                shortDescription: "SSR-based personal portfolio website.",
                fullDescription: `
A server-side rendered portfolio built with Next.js and Prisma.
Designed with scalability and production architecture in mind.
        `,
                techStack: ["Next.js", "Prisma", "PostgreSQL"],
                githubUrl: null,
                liveUrl: null,
            },
        ],
    });

    console.log("Database seeded successfully.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });