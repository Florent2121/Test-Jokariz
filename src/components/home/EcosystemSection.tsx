"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export function EcosystemSection() {
    return (
        <section className="w-full bg-background py-24 md:py-32 flex flex-col items-center">

            {/* Grid Container - 3x3 for large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                {PROJECTS.slice(0, 9).map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projets/${project.slug}`}
                        className="group relative block w-full aspect-square overflow-hidden bg-black"
                    >
                        {/* Background Image */}
                        {project.image && (
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                        )}

                        {/* Dark Gradient Overlay - Stronger at bottom for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70" />

                        {/* Text Content - Only Title */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                            <h3 className="font-display text-2xl font-bold uppercase text-primary leading-[0.9] group-hover:scale-[1.02] transition-transform duration-300 origin-bottom-left">
                                {project.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
