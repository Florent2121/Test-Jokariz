import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-16 pb-12 md:pt-24 md:pb-24">
            <SectionWrapper>
                <div className="mb-12 md:mb-16">
                    <h1 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
                        L'Écosystème
                    </h1>
                    <p className="text-secondary max-w-2xl text-lg">
                        Podcasts, formats vidéo, événements, outils : chaque initiative explore une facette différente du même sujet, comment peut-on accéder au succès aujourd’hui ?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
