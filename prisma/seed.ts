import { prisma } from '@/lib/prisma';

async function main() {
    await prisma.project.deleteMany();

    await prisma.project.createMany({
        data: [
            {
                title: "ApnaRation",
                slug: "apnaration",
                shortDescription: "Production hyperlocal grocery delivery app with real-time tracking across 3 user roles.",
                fullDescription: `ApnaRation is a live hyperlocal grocery delivery platform connecting customers with nearby local shops — not warehouses. Built with React Native and Expo, it features real-time delivery tracking with map view and route polylines powered by WebSockets.

The app supports three fully separate role-based applications: customer, shop owner, and delivery partner — each with dedicated workflows and real-time one-to-one synchronization. Key features include discount threshold alerts in cart, lazy loading with off-screen card cleanup, 5-type address management, and a complete order status flow (pending → preparing → out for delivery → delivered).

Performance was a core focus — the app was migrated from Context API to Zustand, achieving an ~80% improvement in render performance. TanStack React Query handles caching, optimistic updates, background refetching, and network resilience.`,
                techStack: ["React Native", "Expo", "Zustand", "TanStack React Query", "Axios", "WebSocket.io"],
                githubUrl: "https://github.com/ejazahmedsiddiqui/Flashmart",
                liveUrl: null,
            },
            {
                title: "Flashmart",
                slug: "flashmart",
                shortDescription: "Full-stack grocery delivery platform with admin dashboard and order tracking.",
                fullDescription: `Flashmart is a production-style grocery delivery application built as a full-stack platform. It includes authentication, cart management, real-time order tracking, and an admin dashboard.

The project demonstrates production architecture with server-side rendering via Next.js, a PostgreSQL database managed through Prisma ORM, and performance optimization throughout. The admin panel provides complete oversight of orders, products, and delivery workflows.`,
                techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
                githubUrl: "https://github.com/ejazahmedsiddiqui/flashmart",
                liveUrl: null,
            },
            {
                title: "ApnaTechCalls",
                slug: "apnatechcalls",
                shortDescription: "Hyperlocal on-demand services marketplace with dual-role architecture and 5km expert matching.",
                fullDescription: `ApnaTechCalls is a dual-role on-demand service marketplace built from a single React Native codebase. It supports two fully isolated roles — User and Expert — each with separate authentication flows, registration journeys, and context layers (UserContext, ExpertContext, AppRoleContext).

Expert-side features include KYC onboarding (Aadhaar/PAN upload), an earnings dashboard with time-based filters (daily to yearly), schedule management (upcoming/completed/cancelled), and 365-day availability blocking. Location-based expert discovery uses Expo Location with a 5 km radius matching algorithm and advanced search by tags, slug, and title.

Booking flows use TanStack React Query for optimistic updates with instant UI feedback, automatic rollback on failure, and network reconnection handling. Additional features include PDF receipt generation with download/share, proof-of-payment uploads, an expert rating system, verification badge logic, and one-tap Google Maps navigation.`,
                techStack: ["React Native", "Expo", "TanStack React Query", "Expo Location", "Context API", "Axios", "JWT"],
                githubUrl: null,
                liveUrl: null,
            },
            {
                title: "react-native-zustand-theme",
                slug: "rn-zustand-theme",
                shortDescription: "Open-source reusable theming library for React Native with Zustand global state.",
                fullDescription: `react-native-zustand-theme is a reusable theming library built for the React Native ecosystem. It provides global state management for UI themes using Zustand, with a clean API for both Expo and React Native CLI apps.

The library implements dynamic light/dark mode switching with optimized selective subscriptions that prevent unnecessary re-renders. The architecture uses a scalable design-token system, making it easy to maintain consistent UI systems across large codebases. Released as an open-source package on GitHub.`,
                techStack: ["React Native", "TypeScript", "Zustand", "Expo", "React Hooks"],
                githubUrl: "https://github.com/ejazahmedsiddiqui/react-native-zustand-theme",
                liveUrl: null,
            },
            {
                title: "Traceboard",
                slug: "traceboard",
                shortDescription: "Jira-like issue and project management backend built with Java and Spring Boot.",
                fullDescription: `Traceboard is a backend-focused issue and project management system inspired by Jira. Built with Java and Spring Boot, it features JWT authentication, a carefully designed relational database schema, and RESTful APIs for complete issue tracking and project workflow management.

The system uses Hibernate/JPA for ORM, MySQL as the database, and follows clean architectural patterns for scalability. It demonstrates strong backend fundamentals including authentication flows, relational data modeling, and RESTful API design.`,
                techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "JWT"],
                githubUrl: "https://github.com/AbhishekGupta-developer/traceboard/tree/ejaz-dev",
                liveUrl: null,
            },
            {
                title: "Portfolio Platform",
                slug: "portfolio-platform",
                shortDescription: "This very site — SSR-based personal portfolio built with Next.js and Prisma.",
                fullDescription: `A server-side rendered portfolio platform built with Next.js 15, PostgreSQL, and Prisma ORM. Designed with production architecture in mind — dynamic routing, type-safe database queries, and a clean data layer.

The platform pulls project data from a PostgreSQL database via Prisma, making it easy to add and update projects without touching code. Built to demonstrate full-stack capability with modern Next.js App Router patterns.`,
                techStack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
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