export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    subText?: string;
    longDescription: string;
    bullets?: string; // New field for bullet points content
    year: string;
    gradient: string;
    image?: string; // Optional image path
    stats: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
    {
        slug: "metiers-de-reve",
        title: "Métiers de rêve",
        category: "Podcasts",
        year: "2023",
        gradient: "from-blue-500 to-cyan-500",
        image: "/images/projects/jokacorp.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        stats: [
            { label: "Invités", value: "41" },
        ],
    },
    {
        slug: "the-patch",
        title: "The Patch",
        category: "Tool",
        year: "2026",
        gradient: "from-green-500 to-emerald-500",
        image: "/images/projects/the-patch.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        stats: [],
    },
    {
        slug: "paris-creator-week",
        title: "Paris Creator Week",
        category: "Event",
        year: "2024",
        gradient: "from-purple-500 to-pink-500",
        image: "/images/projects/Paris%20creator%20week.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        stats: [
            { label: "Professionnels", value: "4000+" },
            { label: "Speakers", value: "200+" },
            { label: "Partenaires", value: "100" },
        ],
    },
    {
        slug: "conferences",
        title: "Conférences",
        category: "Talks",
        year: "2023",
        gradient: "from-pink-500 to-rose-500",
        image: "/images/projects/conferences.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        bullets: "• Lorem ipsum dolor sit amet\n• Consectetur adipiscing elit\n• Sed do eiusmod tempor incididunt\n• Ut labore et dolore magna aliqua",
        stats: [],
    },
    {
        slug: "un-stagiaire-presque-parfait",
        title: "Un Stagiaire presque parfait",
        category: "Live",
        year: "2025",
        gradient: "from-yellow-400 to-orange-500",
        image: "/images/projects/un-stagiaire-presque-parfait.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        stats: [
            { label: "CV REÇUS", value: "1000" },
            { label: "Épisodes", value: "17" },
        ],
    },
    {
        slug: "the-unicorn",
        title: "The Unicorn",
        category: "Live",
        year: "2025",
        gradient: "from-amber-500 to-orange-500",
        image: "/images/projects/the-unicorn.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        stats: [
            { label: "Candidats", value: "+100" },
            { label: "Saison", value: "1" },
        ],
    },
    {
        slug: "faites-decouvrir-votre-entreprise",
        title: "Faites découvrir votre entreprise",
        category: "Corporate",
        year: "2025",
        gradient: "from-blue-600 to-indigo-600",
        image: "/images/projects/minia-entreprise.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stats: [],
    },
    {
        slug: "break-poverty",
        title: "Break Poverty",
        category: "Association",
        year: "2024",
        gradient: "from-red-500 to-rose-600",
        image: "/images/projects/break%20poverty.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stats: [],
    },
    {
        slug: "tournee-des-ecoles",
        title: "Tournée des écoles",
        category: "Education",
        year: "2025",
        gradient: "from-yellow-500 to-amber-600",
        image: "/images/projects/tournee-des-ecoles.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stats: [],
    }
];
