
export interface Partner {
    name: string;
    description: string;
    logo: string; // Path to image in public folder (e.g., "/images/partners/logo.png")
    websiteUrl: string;
    category?: string;
}

// ==========================================
// GUIDE DE GESTION DES PARTENAIRES
// ==========================================
// 1. Pour AJOUTER un partenaire :
//    - Copiez le bloc d'exemple ci-dessous.
//    - Collez-le dans la liste `PARTNERS`.
//    - Assurez-vous d'avoir l'image du logo dans le dossier `public/images/partners/`.
//
// 2. Pour SUPPRIMER un partenaire :
//    - Supprimez simplement le bloc correspondant de la liste.
//
// 3. Pour MODIFIER :
//    - Changez simplement les textes ou le chemin de l'image.
// ==========================================

export const PARTNERS: Partner[] = [
    {
        name: "Qonto",
        description: "Avec Qonto, la création de votre entreprise devient ultra simple et rapide, et vous évitez les erreurs.",
        logo: "/images/projects/Partenaires/logo-qonto-nouveau-1.png",
        websiteUrl: "https://qonto.com/fr/creation?utm_source=affiliate&utm_medium=web&utm_campaign=The_Unicorn&partner_id=a0oW500000D3h8zIAB",
        category: "Tech",
    },
    {
        name: "French Mush",
        description: "Leader européen du champignon médicinal, ils aident l’organisme humain contre tous types de stress quotidiens.",
        logo: "/images/projects/Partenaires/french mush.webp",
        websiteUrl: "https://www.frenchmush.com/products/copy-of-le-pack-sante-mentale-et-energie-gelules?variant=47999091605839",
        category: "Santé",
    },
    {
        name: "Coinbase",
        description: "Faites tourner la roue Coinbase et tentez de gagner entre 1 et 150€",
        logo: "/images/projects/Partenaires/Coinbase_logo_color.webp",
        websiteUrl: "https://coinbase.com",
        category: "Tech",
    },
    // Ajoutez vos nouveaux partenaires ici
];
