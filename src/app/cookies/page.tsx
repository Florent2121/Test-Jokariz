import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function Cookies() {
    return (
        <main className="bg-background min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary mb-12 tracking-tight">
                        Politique des Cookies
                    </h1>

                    <div className="space-y-12 text-secondary text-base md:text-lg leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">1. Qu'est-ce qu'un cookie ?</h2>
                            <p>
                                Un "cookie" est un petit fichier texte enregistré par le navigateur de votre ordinateur, tablette ou smartphone, qui permet de conserver des données utilisateur afin de faciliter la navigation et d'activer certaines fonctionnalités (ex: préférences d'affichage, statistiques de mesure d'audience).
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">2. Types de cookies utilisés</h2>
                            <p>
                                En navigant sur notre site web, les cookies suivants peuvent être déposés sur votre terminal :
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Cookies techniques (strictement nécessaires) :</strong> Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés. Ils vous permettent par exemple de naviguer de manière sécurisée ou de mémoriser vos choix concernant le consentement aux cookies.
                                </li>
                                <li>
                                    <strong>Cookies de mesure d'audience (Statistiques) :</strong> Ces cookies permettent d'obtenir des statistiques de fréquentation utiles à l’amélioration du site (pages les plus consultées, provenance géographique des visites, type d'appareil, etc.). Ils sont déposés que si vous y avez explicitement consenti.
                                </li>
                                <li>
                                    <strong>Cookies tiers (Réseaux Sociaux / Vidéos) :</strong> Le site peut intégrer des contenus provenant de plateformes tierces (comme des vidéos hébergées, des widgets de réseaux sociaux). Ces fonctionnalités utilisent des cookies déposés directement par ces tiers.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">3. Gestion et refus des cookies</h2>
                            <p>
                                Lors de votre première visite sur le Site, un bandeau d'information vous signale la présence de souches et vous invite à indiquer votre choix. Vous pouvez à tout moment modifier vos préférences quant au dépôt de cookies via notre gestionnaire [ajouter un lien ou bouton vers un gestionnaire de cookies] ou en configurant votre navigateur.
                            </p>
                            <p>
                                Voici comment configurer votre navigateur pour refuser ou limiter les cookies :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites.</li>
                                <li><strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies et données de sites.</li>
                                <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Bloquer tous les cookies.</li>
                                <li><strong>Edge :</strong> Paramètres &gt; Cookies et autorisations de site &gt; Gérer et supprimer les cookies.</li>
                            </ul>
                            <p>
                                Veuillez noter que le blocage complet des cookies fonctionnels peut impacter ou empêcher votre navigation ou l'utilisation de certaines fonctionnalités de ce site.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">4. Durée de conservation</h2>
                            <p>
                                Les cookies déposés sont conservés sur votre terminal pour une durée maximale de 13 mois à compter de votre premier consentement conformément aux recommandations de la CNIL française. En ce qui concerne les cookies de mesure d'audience, les informations récoltées seront conservées pendant 25 mois maximum.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
