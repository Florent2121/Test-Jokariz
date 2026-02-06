// ==========================================
// GUIDE DE GESTION DES PROJETS
// ==========================================
// C'est ici que vous pouvez ajouter, modifier ou supprimer des projets.
//
// 1. POUR MODIFIER UN PROJET EXISTANT :
//    - Trouvez l'objet correspondant dans la liste `PROJECTS`.
//    - Modifiez les valeurs (title, description, stats, etc.).
//
// 2. POUR AJOUTER UN NOUVEAU PROJET :
//    - Copiez un bloc de projet existant (de l'accolade ouvrante { à fermante }).
//    - Collez-le à la fin de la liste, avant le crochet fermant ].
//    - Changez le `slug` (doit être unique, ex: "nouveau-projet").
//    - Changez l'image : Mettez votre image dans `public/images/projects/votre-image.jpg` 
//      et mettez le chemin "/images/projects/votre-image.jpg" ici.
//
// ==========================================

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
        slug: "metier-de-reve",
        title: "Métier de rêve",
        category: "Podcasts",
        year: "2023",
        gradient: "from-blue-500 to-cyan-500",
        image: "/images/projects/jokacorp.png",
        description: "Rendre les carrières prestigieuses accessibles.",
        subText: "⁠Une série de conversations authentiques et sans filtres pour casser les stéréotypes de la réussite, rendre leurs trajectoires plus accessibles et inspirantes, et aider chacun à envisager son avenir professionnel avec plus de confiance et de perspectives.",
        longDescription:
            "Dans Métiers de Rêve, Jokariz part à la rencontre de personnalités fascinantes : créateurs de contenus, entrepreneurs, experts et professionnels de tous horizons, pour comprendre comment ils ont construit leur carrière, quelles décisions les ont menés là où ils sont, et ce que leur parcours peut apprendre à chacun.",
        stats: [
            { label: "Invités", value: "41" },
        ],
    },
    {
        slug: "the-unicorn",
        title: "The Unicorn",
        category: "Live",
        year: "2025",
        gradient: "from-amber-500 to-orange-500",
        image: "/images/projects/the-unicorn.png",
        description: "Entreprendre en live.",
        subText: "Un format en live, sans filtre et sans mise en scène, pour comprendre ce que signifie réellement entreprendre aujourd’hui : les arbitrages, les doutes, les contraintes et les décisions qui façonnent un projet. Une manière de rendre l’entrepreneuriat plus lisible, plus concret et moins fantasmé.",
        longDescription:
            "The Unicorn, est un format diffusé sur Twitch, co-animé par Jokariz et Anthony Munoz Cifuentes, qui met en lumière des porteurs de projets et des entrepreneurs en devenir. Chacun est invité à présenter son idée en conditions réelles, à exposer sa vision, ses choix stratégiques et les défis qu’il rencontre pour transformer une intuition en entreprise viable.",
        stats: [
            { label: "Candidats", value: "+100" },
            { label: "Saison", value: "1" },
        ],
    },
    {
        slug: "un-stagiaire-presque-parfait",
        title: "Un Stagiaire presque parfait",
        category: "Live",
        year: "2025",
        gradient: "from-yellow-400 to-orange-500",
        image: "/images/projects/un-stagiaire-presque-parfait.jpg",
        description: "Une chance pour le stage de tes rêves.",
        subText: "En rendant ce processus visible, le format permet aussi de se projeter, de s’identifier, et de mieux comprendre comment se préparer. Une manière concrète d’apprendre les règles du jeu du recrutement, au-delà des intentions individuelles et des discours théoriques.",
        longDescription:
            "Dans Un Stagiaire Presque Parfait, des offres de stage très sélectives sont rendues accessibles au plus grand nombre. Les candidatures sont ensuite analysées publiquement, étape par étape, on y découvre comment s’opère dans la réalité le tri des CV, le déroulé d’un entretien et le principe de sélection.",
        stats: [
            { label: "CV REÇUS", value: "1000" },
            { label: "Épisodes", value: "17" },
        ],
    },
    {
        slug: "conferences",
        title: "Conférences",
        category: "Talks",
        year: "2023",
        gradient: "from-pink-500 to-rose-500",
        image: "/images/projects/conferences.jpg",
        description: "Partager un parcours pour ouvrir la discussion.",
        subText: "Chaque intervention est pensée comme un temps d’échange, adapté au public et au contexte, avec l’objectif de susciter la réflexion, d’apporter des clés concrètes et d’ouvrir de nouvelles perspectives.",
        longDescription: `Jokariz intervient régulièrement dans les écoles, les entreprises et lors d’événements pour partager son histoire singulière, de la finance de haut niveau à la création de contenu, et surtout les questions et apprentissages qui l’ont accompagné.`,
        bullets: `Ces échanges ouvrent la discussion sur :

• la reconversion professionnelle et la prise de risque,
• l’entrepreneuriat et la création de contenu,
• le rapport au sens, au bien-être et à l’équilibre de vie,
• les stratégies pour évoluer dans un monde du travail en mutation.`,
        stats: [

        ],
    },
    {
        slug: "the-patch",
        title: "The Patch",
        category: "Tool",
        year: "2026",
        gradient: "from-green-500 to-emerald-500",
        image: "/images/projects/the-patch.png",
        description: "Rendre le marché du travail plus méritocratique.",
        longDescription:
            `Le marché du travail repose encore largement sur des signaux imparfaits.
Face à des volumes de candidatures toujours plus importants, les entreprises utilisent des raccourcis, diplômes, écoles, parcours, pour évaluer des candidats qu’elles n’ont pas le temps de connaître.
C’est de ce constat que The Patch est né.

Sa mission : recentrer le recrutement sur les compétences réelles. Inspirée des systèmes de classement du jeu vidéo, la plateforme évalue les candidats en conditions proches du réel, à partir de critères clairs, mesurables et comparables.
Une tentative pragmatique de rendre le marché du travail plus méritocratique : faire du mérite un signal de recrutement, et donner à chacun les moyens de progresser, de se situer et de révéler ce qui compte vraiment`,

        stats: [],
    },
    {
        slug: "paris-creator-week",
        title: "Paris Creator Week",
        category: "Event",
        year: "2024",
        gradient: "from-purple-500 to-pink-500",
        image: "/images/projects/paris-creator-week.JPG",
        description: "L'événement incontournable de la Creator Economy en Europe.",
        subText: `Plus qu’un événement, la Paris Creator Week est un point de rencontre. Un espace pour comprendre les dynamiques de la Creator Economy, partager des expériences concrètes et créer des passerelles entre ses différents acteurs.`,
        longDescription:
            `Un événement pensé pour rassembler au même endroit, l’ensemble des acteurs qui structurent l’écosystème de la Creator Economy : créateurs de contenu, plateformes, marques, agences, entrepreneurs, investisseurs et médias.
`,
        stats: [
            { label: "Professionnels", value: "4000+" },
            { label: "Speakers", value: "200+" },
            { label: "Partenaires", value: "100" },
        ],
    },
];
