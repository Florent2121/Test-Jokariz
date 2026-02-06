"use client";

import { Card } from "@/components/ui/Card";
import { Project } from "@/lib/projects";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projets/${project.slug}`}>
            <Card className="h-full min-h-[350px] md:min-h-[450px] p-8 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300 relative overflow-hidden group">
                {/* Background Image */}
                {project.image && (
                    <div className="absolute inset-0">
                        <div className="relative w-full h-full">
                            {/* We use a wrapper div because next/image with 'fill' requires parent to be relative/absolute. 
                                The Card container is relative. But let's be safe and put it in a container 
                                or just apply classes directly to Image if compatible. 
                                Actually, the existing code used a div with background image. 
                                Let's replace that div with the Image component. */}
                            <NextImage
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                            />
                        </div>
                    </div>
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
                    <motion.h3 layoutId={`title-${project.slug}`} className="font-display text-3xl font-bold uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300 break-words text-white">
                        {project.title}
                    </motion.h3>
                    <p className="text-white/70 text-sm line-clamp-3 mb-6 group-hover:text-white transition-colors">
                        {project.description}
                    </p>


                </div>
            </Card>
        </Link>
    );
}
