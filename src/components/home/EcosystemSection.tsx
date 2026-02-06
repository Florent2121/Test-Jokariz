"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function EcosystemSection() {
    return (
        <section className="py-24 border-t border-white/5">
            <SectionWrapper>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                            L'Écosystème
                        </h2>
                        <p className="text-secondary max-w-xl">
                            Podcasts, formats vidéo, événements, outils : chaque initiative explore une facette différente du même sujet, comment peut-on accéder au succès aujourd’hui ?
                        </p>
                    </div>
                </div>

                {/* Grid Container - Changed to 2 columns on large screens for wider cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projets/${project.slug}`}
                            className="group h-full"
                        >
                            <Card className="h-full min-h-[450px] p-8 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300 relative overflow-hidden">
                                {/* Background Image */}
                                {project.image && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                )}

                                {/* Gradient Overlay - Reduced opacity to see image better */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${project.image ? 'opacity-20 group-hover:opacity-30 mix-blend-overlay' : 'opacity-10 group-hover:opacity-20'} transition-opacity duration-500`} />

                                {/* Dark Gradient Overlay - Stronger at bottom for text, clear at top */}
                                {project.image && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 transition-opacity duration-500" />
                                )}

                                <div className="relative z-10 flex justify-between items-start mb-8">
                                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                    <div className="p-2 rounded-full border border-white/10 bg-black/50 group-hover:bg-white group-hover:text-black transition-colors backdrop-blur-sm">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <div className="font-mono text-white/60 text-xs mb-2">{project.year}</div>
                                    <h3 className="font-display text-3xl font-bold uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300 break-words text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 text-sm line-clamp-3 mb-6 group-hover:text-white transition-colors">
                                        {project.description}
                                    </p>


                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}
