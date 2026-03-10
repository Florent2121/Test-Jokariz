
export interface Partner {
    name: string;
    description: string;
    logo: string; // Path to image in public folder (e.g., "/images/partners/logo.png")
    logoDark?: string; // Very dark or black version for light backgrounds
    websiteUrl: string;
    category?: string;
}


export const PARTNERS: Partner[] = [
    {
        name: "Qonto",
        description: "Avec Qonto, la création de votre entreprise devient ultra simple et rapide, et vous évitez les erreurs.",
        logo: "/images/Partenaires/logo-qonto-nouveau-1.png",
        logoDark: "/images/Partenaires/logo-qonto-noir.png",
        websiteUrl: "https://qonto.com",
    },
    {
        name: "BNP Paribas",
        description: "",
        logo: "/images/Partenaires/BNP-Paribas-Logo.png",
        logoDark: "/images/Partenaires/BNP-Paribas-Logo-noir.png",
        websiteUrl: "https://mabanque.bnpparibas",
    },
    {
        name: "BoursoBank",
        description: "",
        logo: "/images/Partenaires/boursobank.png",
        websiteUrl: "https://www.boursobank.com",
    },
    {
        name: "Skema",
        description: "",
        logo: "/images/Partenaires/SKEMA_Business_School's_logo.png",
        websiteUrl: "https://www.skema-bs.fr",
    },
    {
        name: "Neoma",
        description: "",
        logo: "/images/Partenaires/Logo-NEOMA-2.png",
        websiteUrl: "https://neoma-bs.fr",
    },
    {
        name: "Havas",
        description: "",
        logo: "/images/Partenaires/HAVAS_LOGO_2023.png",
        websiteUrl: "https://www.havas.com",
    },
    {
        name: "Trade Republic",
        description: "",
        logo: "/images/Partenaires/Trade_Republic_logo_2021.svg.png",
        websiteUrl: "https://traderepublic.com",
    },
    {
        name: "Fundora",
        description: "",
        logo: "/images/Partenaires/fundora_logo.jpeg",
        websiteUrl: "https://fundora.com",
    },
    {
        name: "French Mush",
        description: "Leader européen du champignon médicinal, ils aident l’organisme humain contre tous types de stress quotidiens.",
        logo: "/images/Partenaires/french mush.webp",
        websiteUrl: "https://www.frenchmush.com",
    },
    {
        name: "KPMG",
        description: "",
        logo: "/images/Partenaires/KPMG_blue_logo.svg.png",
        websiteUrl: "https://kpmg.com/fr/fr/home.html",
    },
    {
        name: "Crédit Agricole",
        description: "",
        logo: "/images/Partenaires/Credit-Agricole-Embleme.jpg",
        websiteUrl: "https://www.credit-agricole.fr",
    },
    {
        name: "CIC",
        description: "",
        logo: "/images/Partenaires/Logo_CIC_2006.svg",
        websiteUrl: "https://www.cic.fr",
    },
    {
        name: "Mazar",
        description: "",
        logo: "/images/Partenaires/Mazars.jpg",
        websiteUrl: "https://www.mazars.fr",
    },
    {
        name: "Coinbase",
        description: "Faites tourner la roue Coinbase et tentez de gagner entre 1 et 150€",
        logo: "/images/Partenaires/coinbase.png",
        websiteUrl: "https://coinbase.com",
    },
    {
        name: "Claranet",
        description: "",
        logo: "/images/Partenaires/claranet.png",
        websiteUrl: "https://www.claranet.fr",
    },
    {
        name: "BSB",
        description: "",
        logo: "/images/Partenaires/BSB_logo_burgundy.jpg",
        websiteUrl: "https://www.bsb-education.com",
    },
    {
        name: "RSB",
        description: "",
        logo: "/images/Partenaires/Logo_ESC_Rennes.jpg",
        websiteUrl: "https://www.rennes-sb.fr",
    },
    {
        name: "Dift",
        description: "",
        logo: "/images/Partenaires/Logo de la startup Dift.jpg",
        websiteUrl: "https://dift.com",
    },
    {
        name: "Hostinger",
        description: "",
        logo: "/images/Partenaires/hostinger-logo-1.png",
        websiteUrl: "https://www.hostinger.fr",
    }
];
