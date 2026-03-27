"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function EcosystemSection() {
    return (
        <section className="w-full bg-background pt-12 md:pt-20 pb-24 md:pb-32 flex flex-col items-center">

            {/* Grid Container - 3x3 for large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                {PROJECTS.slice(0, 9).map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <Link
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

                            {/* Text Content */}
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                <div className="flex flex-col items-start gap-3 md:gap-4">
                                    <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-white/80 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary leading-[0.9] transform-gpu transition-all duration-500 origin-bottom-left">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
