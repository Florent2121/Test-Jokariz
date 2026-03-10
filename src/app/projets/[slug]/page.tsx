"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Next Project Logic
    const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-20 pb-4 md:pt-32 md:pb-8 flex flex-col items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

                <SectionWrapper>
                    <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-3 mb-4"
                        >
                            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-surface text-sm font-mono uppercase tracking-widest text-secondary">
                                {project.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-sm font-mono text-secondary">
                                {project.year}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-primary"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
                        >
                            {project.description}
                        </motion.p>
                    </div>
                </SectionWrapper>
            </section>

            {/* Content Section */}
            <SectionWrapper className="pb-24">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-start">
                    {/* Left: Description & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div className="prose prose-invert prose-lg">
                            <p className="text-primary text-xl md:text-2xl leading-relaxed mb-8 font-medium whitespace-pre-line">
                                {project.longDescription}
                            </p>

                            {project.bullets && (
                                <div className="text-secondary text-base md:text-lg mb-8 bg-surface p-6 border border-white/5 whitespace-pre-line leading-relaxed">
                                    {project.bullets}
                                </div>
                            )}

                            {project.subText && (
                                <p className="text-secondary text-base md:text-lg border-l-2 border-accent pl-4 whitespace-pre-line">
                                    {project.subText}
                                </p>
                            )}
                        </div>

                        {/* Stats Grid */}
                        {project.stats && project.stats.length > 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                {project.stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 border border-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                    >
                                        <div className="text-accent mb-2">
                                            <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <div className="text-3xl font-bold font-display text-primary mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-mono text-secondary uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pt-8">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center font-display font-bold uppercase tracking-widest transition-all duration-500 rounded-full bg-accent text-white border border-transparent shadow-[0_0_20px_rgba(0,85,255,0.4)] hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] hover:bg-white hover:text-black px-6 py-3 text-sm md:text-base gap-2"
                            >
                                En savoir plus
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative aspect-square md:aspect-[4/5] bg-zinc-900 overflow-hidden"
                    >
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`} />
                        )}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Navigation Footer */}
            <div className="border-t border-white/10 bg-white/5">
                <SectionWrapper className="py-12">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/projets"
                            className="group inline-flex items-center justify-center font-display font-bold uppercase tracking-widest transition-all duration-500 rounded-full bg-transparent text-primary border border-white/20 hover:bg-white hover:text-black hover:border-white px-6 py-3 text-xs md:text-sm gap-2"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden md:inline">Retour</span>
                        </Link>

                        <Link
                            href={`/projets/${nextProject.slug}`}
                            className="group text-right"
                        >
                            <span className="block text-xs font-mono text-secondary mb-1 uppercase tracking-widest">Projet Suivant</span>
                            <div className="flex items-center justify-end gap-3 text-xl md:text-2xl font-bold font-display text-primary group-hover:text-accent transition-colors">
                                {nextProject.title}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </SectionWrapper>
            </div>
        </main>
    );
}
