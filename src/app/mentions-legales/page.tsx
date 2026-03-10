import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function MentionsLegales() {
    return (
        <main className="bg-background min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
            <SectionWrapper>
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary mb-12 tracking-tight">
                        Mentions Légales
                    </h1>

                    <div className="space-y-12 text-secondary text-base md:text-lg leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">1. Éditeur du site</h2>
                            <p>
                                Le présent site, accessible à l’URL [URL de votre site] (le « Site »), est édité par :
                            </p>
                            <p>
                                <strong>Jokariz Corp</strong><br />
                                [Statut juridique de la société, ex : Société par actions simplifiée (SAS)]<br />
                                Au capital de [Montant du capital social] euros<br />
                                Inscrite au R.C.S. de [Ville] sous le numéro [Numéro SIREN]<br />
                                Siège social : [Adresse complète du siège social]<br />
                                Numéro de TVA intracommunautaire : [Numéro de TVA]
                            </p>
                            <p>
                                Directeur de la publication : Jokariz.
                            </p>
                            <p>
                                Pour nous contacter, vous pouvez utiliser le formulaire de contact ou nous adresser un courriel à : [Adresse email de contact].
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">2. Hébergement</h2>
                            <p>
                                Le Site est hébergé par la société <strong>[Nom de l'hébergeur]</strong>,<br />
                                [Statut juridique de l'hébergeur]<br />
                                Siège social : [Adresse de l'hébergeur]<br />
                                Numéro de téléphone : [Numéro de téléphone de l'hébergeur]<br />
                                Numéro R.C.S : [Numéro R.C.S. de l'hébergeur, le cas échéant].
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">3. Propriété intellectuelle</h2>
                            <p>
                                L’ensemble des éléments figurant sur ce Site (textes, photographies, illustrations, vidéos, logos, maquettes, marques, etc.) est protégé par la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            </p>
                            <p>
                                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est formellement interdite sans une autorisation expresse et préalable de Jokariz Corp. Toute exploitation non autorisée sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions du Code de la Propriété Intellectuelle.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">4. Limitation de responsabilité</h2>
                            <p>
                                L'éditeur s’efforce d’assurer au mieux de ses possibilités l’exactitude et la mise à jour des informations diffusées sur ce Site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                            </p>
                            <p>
                                L’utilisation des informations et contenus disponibles sur l'ensemble du site ne saurait en aucun cas engager la responsabilité de l'éditeur. Il appartient à l'utilisateur de prendre toutes les mesures appropriées de façon à protéger ses propres données et logiciels de la contamination par d'éventuels virus circulant sur le réseau Internet. L'éditeur ne pourra être tenu responsable des dommages directs ou indirects, matériels ou immatériels, qui pourraient résulter de l'accès ou de l'utilisation du Site ou des informations qui y figurent.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-display text-2xl font-bold uppercase text-primary">5. Liens hypertextes</h2>
                            <p>
                                Le site peut contenir des liens hypertextes vers d’autres sites web édités par des tiers. La responsabilité de Jokariz Corp ne saurait être engagée quant au contenu de ces sites et à l'usage qui pourra en être fait par les utilisateurs.
                            </p>
                        </section>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
