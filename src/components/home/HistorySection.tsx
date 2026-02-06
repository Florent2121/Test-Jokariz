"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HistorySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper className="pt-32 pb-24 md:pt-48 md:pb-32">
            <div ref={ref} className="w-full relative flex flex-col items-center text-center">

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="font-mono text-accent text-sm md:text-base uppercase tracking-widest border border-accent/20 px-4 py-2 rounded-full bg-accent/5">
                        Ma Vision
                    </span>
                </motion.div>

                <div className="relative max-w-6xl mx-auto px-4">
                    {/* Quotes - Subtle and integrated */}
                    <Quote className="absolute -top-12 -left-4 w-12 h-12 text-accent/20 md:w-24 md:h-24 md:-top-16 md:-left-16" />

                    <h2 className="font-display font-bold leading-tight mb-12 relative z-10 text-white text-center max-w-5xl mx-auto text-3xl md:text-5xl lg:text-7xl">
                        Le problème n’est pas le manque de talent,
                        <br className="hidden md:block" />
                        mais <span className="text-accent">l’accès aux opportunités</span>.
                    </h2>

                    <Quote className="absolute -bottom-12 -right-4 w-12 h-12 text-accent/20 md:w-24 md:h-24 md:-bottom-16 md:-right-16 rotate-180" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12"
                >
                    <Link
                        href="/story"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-zinc-200 transition-all hover:scale-105"
                    >
                        DÉCOUVRIR MON PARCOURS
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
