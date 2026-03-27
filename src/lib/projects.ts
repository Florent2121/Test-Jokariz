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
    externalLink?: string; // New field for external links
    externalLinkLabel?: string; // New field for custom CTA labels
    videoUrl?: string; // Optional link to a video
}

export const PROJECTS: Project[] = [
    {
        slug: "metiers-de-reves",
        title: "Métiers de rêves",
        category: "Podcasts",
        year: "2023",
        gradient: "from-blue-500 to-cyan-500",
        image: "/images/projects/jokacorp.png",
        description: "",
        subText: "",
        longDescription: "Un des grands facteurs d’inégalités des chances est l’asymétrie de l’accès à l’information. Dans Métiers de Rêve, Jokariz démystifie les métiers les plus élitistes pour que chacun(e) ait une chance d’y accéder.",
        stats: [],
    },
    {
        slug: "the-patch",
        title: "The Patch",
        category: "Tool",
        year: "2026",
        gradient: "from-green-500 to-emerald-500",
        image: "/images/projects/the-patch.png",
        description: "",
        longDescription: "Aujourd’hui les grands groupes du CAC40 reçoivent plusieurs centaines de milliers de candidatures par an. Elles n’ont pas d’autres choix que de filtrer ces candidatures par les CVs et en particulier les diplômes. Hors le diplôme est un indicateur assez mauvais de la compétence réelle et Jokariz est bien placé pour le savoir. C’est pourquoi il a cofondé The Patch : la solution pour permettre à tous les jeunes d’avoir une chance quelque soit leur diplôme. Grâce à une technologie IA, The Patch permet aux entreprises de screener et de sourcer les candidatures non plus sur le CV ou le diplôme mais sur un entretien d’embauche en conditions réelles.",
        stats: [],
        externalLink: "https://thepatch.ai",
    },
    {
        slug: "paris-creator-week",
        title: "Paris Creator Week",
        category: "Event",
        year: "2024",
        gradient: "from-purple-500 to-pink-500",
        image: "/images/Timeline/Paris%20creator%20week.png",
        description: "",
        subText: "",
        longDescription: "Dés 2022 quand il s’est lancé dans le stream sur les jeux vidéo, Jokariz avait annoncé son pari fou de federer la Creator Economy et de faire de Paris un hub mondial de cet écosystème. En 2025 pour sa deuxième édition, la Paris Creator Week a réuni plus de 5000 professionnels de la Creator Economy. Créateurs, annonceurs, producteurs, plateformes, agences, entrepreneurs, investisseurs… ils sont venus du monde entier à Paris pour se rencontrer et bénéficier des insights des leaders d’opinion sur le sujet.",
        stats: [
            { label: "Professionnels", value: "5000+" },
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
        description: "",
        subText: "",
        longDescription: "Jokariz propose des conférences en école et en entreprise sur les sujets qui le passionnent : entrepreneuriat, creator economy, gestion de carrière, finance.",
        bullets: "",
        stats: [],
        externalLink: "/contact?subject=Devis pour une conférence",
    },
    {
        slug: "un-stagiaire-presque-parfait",
        title: "Un Stagiaire presque parfait",
        category: "Live",
        year: "2025",
        gradient: "from-yellow-400 to-orange-500",
        image: "/images/projects/un-stagiaire-presque-parfait.png",
        description: "",
        subText: "",
        longDescription: "Quand Métiers de Rêve donne accès à l’information, Un Stagiaire Presque Parfait (USPP) change des trajectoires de vie en live. Dans USPP, Jokariz et son frère Jean font le recrutement pour des entreprises en live devant des milliers de personnes sur Twitch, et permettent à des jeunes qui ne passaient pas les screens d’obtenir le stage de leurs rêves.",
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
        description: "",
        subText: "",
        longDescription: "L’entrepreneuriat c’est la nouvelle vie de Jokariz depuis 2023. En 3 ans seulement, il a cofondé 3 boîtes et monté une structure qui génère plusieurs millions d’euros de ÇA. Co hosté avec son associé Anthony Munoz, ce show a pour but de donner les clés de l’entrepreneuriat pour toutes celles et ceux qui veulent construire quelque chose d’utile en France.",
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
        description: "",
        subText: "",
        longDescription: "Dans ce documentaire réalisé en partenariat avec BNP Paribas, nous avons filmé les coulisses d’une salle de marché. Toujours avec l’angle carrière, nous nous sommes intéressés à qui sont les hommes et les femmes qui occupent these métiers tant fantasmés. N’hésitez pas à nous contacter si vous voulez faire découvrir votre entreprise ou votre école.",
        stats: [],
        externalLink: "/contact?subject=Faites découvrir votre entreprise",
        videoUrl: "https://youtu.be/bjdCiEXDNC4?si=LCAJH0gzW60rxVFg",
    },
    {
        slug: "break-poverty",
        title: "Break Poverty",
        category: "Association",
        year: "2024",
        gradient: "from-red-500 to-rose-600",
        image: "/images/projects/break%20poverty.png",
        description: "",
        subText: "",
        longDescription: "La France est un des pays les moins méritocratiques de toute l’OCDE (source : l’OCDE). Depuis 2024, Jokariz est ambassadeur de Break Poverty Foundation, une association qui a pour but d’aider les enfants et les jeunes en situation de pauvreté.",
        stats: [],
        externalLink: "https://breakpoverty.com/nous-soutenir-2/faire-un-don/",
        externalLinkLabel: "Soutenir l'association",
    },
    {
        slug: "tournee-des-ecoles",
        title: "Tournée des écoles",
        category: "Education",
        year: "2025",
        gradient: "from-yellow-500 to-amber-600",
        image: "/images/projects/tournee-des-ecoles.jpg",
        description: "",
        subText: "",
        longDescription: "Exceptionnellement au printemps 2026, Jokariz fait une tournée de conférences gratuite dans une cinquantaine d’écoles en Europe pour présenter The Patch.",
        stats: [],
        externalLink: "https://lu.ma/calendar/cal-izpi2WC9fGDbFlU",
        externalLinkLabel: "Venir voir une conférence",
    }
];
