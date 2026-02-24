import {prisma} from './lib/prisma';

async function main() {
    //create a new project
    const project = await prisma.project.create(
        {
            data: {
                fullDescription: 'Flashmart Project',
                shortDescription: 'Flashmart',
                slug: 'flashmart',
                techStack: [
                    'react',
                    'axios'
                ],
                title: 'Flashmart',
            }
        }
    );
    console.log("Created Project : ", project);

    //Fetch project
    const allProjects = await prisma.project.findMany();
    console.log("All Projects : ", JSON.stringify(allProjects));
    await prisma.project.delete({ where: { id: project.id } });
}

main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    })