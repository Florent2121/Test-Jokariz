"use client";

import { Project } from "@/lib/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProjectPageTemplate({ project }: { project: Project }) {
    if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            <SectionWrapper>
                <Link href="/ecosysteme" className="group inline-flex items-center text-sm font-mono uppercase tracking-wider text-secondary mb-12 hover:text-white transition-colors">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'écosystème
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Col: Title & Headers */}
                    <div>
                        <span className={`inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-mono uppercase mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.category} — {project.year}
                        </span>
                        <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-none">
                            {project.title}
                        </h1>
                    </div>

                    {/* Right Col: Description & Stats */}
                    <div className="pt-4">
                        <p className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed">
                            {project.longDescription}
                        </p>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            {project.stats.map((stat, i) => (
                                <div key={i}>
                                    <h3 className="text-sm font-mono uppercase text-secondary mb-2">{stat.label}</h3>
                                    <p className="text-3xl font-display font-medium">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* More content placeholder */}
                <div className={`w-full h-[50vh] rounded-3xl bg-gradient-to-br ${project.gradient} opacity-20 border border-white/10 flex items-center justify-center mb-12`}>
                    <p className="font-mono text-sm text-secondary uppercase">Project Visuals / Agency Realm</p>
                </div>

            </SectionWrapper>
        </main>
    );
}
