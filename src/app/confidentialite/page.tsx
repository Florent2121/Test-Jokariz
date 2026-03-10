import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function Confidentialite() {
    return (
        <main className="bg-background min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary mb-12 tracking-tight">
                        Politique de Confidentialité
                    </h1>

                    <div className="space-y-12 text-secondary text-base md:text-lg leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">1. Collecte des données personnelles</h2>
                            <p>
                                Jokariz Corp, responsable du traitement, collecte des données à caractère personnel vous concernant lorsque vous utilisez notre site internet, notamment au travers des formulaires de contact ou de l'inscription à notre newsletter.
                            </p>
                            <p>Les données que nous pouvons collecter incluent notamment :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nom et prénom</li>
                                <li>Adresse e-mail</li>
                                <li>Numéro de téléphone (optionnel)</li>
                                <li>Toute autre information que vous choisissez de nous communiquer volontairement.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">2. Finalités du traitement</h2>
                            <p>
                                Les données personnelles collectées sont utilisées pour les finalités suivantes :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Traiter vos demandes de contact et y répondre.</li>
                                <li>Gérer votre inscription à la newsletter (envoi d'actualités, informations sur nos projets).</li>
                                <li>Améliorer l'expérience utilisateur sur notre site.</li>
                                <li>Assurer le respect de nos obligations légales et réglementaires.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">3. Conservation des données</h2>
                            <p>
                                Vos données personnelles sont conservées pendant la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément à la réglementation en vigueur. En particulier :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Les données relatives aux contacts : jusqu'à 3 ans à compter du dernier contact émanant de votre part.</li>
                                <li>Les données destinées à la newsletter : jusqu'à votre désinscription via le lien intégré dans nos e-mails.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">4. Destinataires des données</h2>
                            <p>
                                Vos données personnelles sont destinées exclusivement à Jokariz Corp. Elles ne sont en aucun cas vendues, cédées, ou louées à des tiers à des fins de prospection commerciale.
                            </p>
                            <p>
                                Des prestataires externes techniques agissant en tant que sous-traitants (par exemple, pour l'hébergement du site ou l'outil d'envoi d'emails) peuvent avoir accès à ces données pour l'exécution de leurs prestations, dans le strict respect de la réglementation (RGPD).
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">5. Vos droits (RGPD)</h2>
                            <p>
                                Conformément à la Loi et au Règlement Général sur la Protection des Données (RGPD), vous disposez :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>d'un droit d’accès, de rectification et d’effacement de vos données ;</li>
                                <li>d'un droit à la limitation du traitement de vos données ;</li>
                                <li>d'un droit de vous opposer, pour des motifs légitimes, au traitement ;</li>
                                <li>d'un droit à la portabilité de vos données.</li>
                            </ul>
                            <p>
                                Vous pouvez exercer vos droits à tout moment en nous contactant à l'adresse suivante : [Adresse email de contact]. Vous avez également la possibilité d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
