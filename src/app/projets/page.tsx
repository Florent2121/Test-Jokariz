import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { EcosystemSection } from "@/components/home/EcosystemSection";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-16 pb-12 md:pt-24 md:pb-24">
            <SectionWrapper>
                <div className="mb-12 md:mb-16">
                    <h1 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-primary">
                        Nos initiatives
                    </h1>
                    <p className="text-secondary max-w-2xl text-lg">
                        Podcasts, formats vidéo, événements, outils : chaque initiative explore une facette différente du même sujet, comment peut-on accéder au succès aujourd’hui ?
                    </p>
                </div>
            </SectionWrapper>

            {/* Replace standard grid with the Homepage Ecosystem 3x3 layout */}
            <div className="-mt-12 md:-mt-20">
                <EcosystemSection />
            </div>
        </main>
    );
}
