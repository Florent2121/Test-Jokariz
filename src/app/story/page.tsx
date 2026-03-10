"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

import { Timeline } from "@/components/story/Timeline";

export default function StoryPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    return (
        <main ref={containerRef} className="bg-background min-h-screen pb-40">

            {/* HERO SECTION MATCHING REFERENCE */}
            <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-background">
                <img
                    src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
                    <h1
                        className="font-display text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tight text-accent uppercase mix-blend-screen text-center px-4 leading-none"
                    >
                        JOKARIZ
                    </h1>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
                    <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase mb-2">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="text-accent w-6 h-6 md:w-8 md:h-8" />
                    </motion.div>
                </div>
            </section>

            {/* INVESTOR, INNOVATOR, DISRUPTOR SECTION */}
            <section className="relative bg-black pt-12 md:pt-16 lg:pt-24 z-20">
                <SectionWrapper className="pb-0 md:pb-0 z-20 relative">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">

                        {/* Title on the Left -> OVERLAPS VIDEO */}
                        <div className="order-1 md:order-1 relative z-20 pb-2 md:pb-4 lg:pb-6">
                            <h2 className="font-display text-5xl md:text-6xl lg:text-[6rem] font-black text-[#0055FF] uppercase leading-[0.80] tracking-tighter drop-shadow-2xl">
                                INVESTOR.<br />INNOVATOR.<br />DISRUPTOR.
                            </h2>
                        </div>

                        {/* Text on the Right -> DOES NOT OVERLAP (Stays above) */}
                        <div className="order-2 md:order-2 relative z-20 pb-8 md:pb-16 lg:pb-20 lg:pl-16">
                            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-sm">
                                Jokariz est ancien trader chez Goldman Sachs devenu entrepreneur et créateur de contenu. Il anime Métiers de Rêve, un podcast qui décrypte les trajectoires de personnalités à fort impact pour rendre accessibles les carrières d’exception.
                            </p>
                        </div>

                    </div>
                </SectionWrapper>

                {/* Video with Margins and Negative Top Margin for Overlap of the LEFT title ONLY */}
                <div className="relative w-full px-4 md:px-8 lg:px-12 -mt-10 md:-mt-16 lg:-mt-20 z-10 pointer-events-none">
                    <div className="w-full aspect-video md:h-[65vh] relative overflow-hidden md:rounded-xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        >
                            <source src="/vid%C3%A9o/vide%CC%81o%20accueil.mov" />
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* BIO & ACHIEVEMENTS SECTION (Reference-based) */}
            <section className="relative bg-black pt-32 md:pt-48 lg:pt-64 pb-20 md:pb-32 z-10 w-full overflow-hidden">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-24 items-start relative">

                    {/* LEFT COLUMN: Image ONLY */}
                    <div className="flex flex-col h-full">
                        {/* Portrait Image - Without grayscale filter */}
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl xl:max-w-lg mx-auto md:mx-0">
                            <img
                                src="/images/hero-joka.png"
                                alt="Jokariz Portrait"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            {/* Fade out at the bottom to blend into the black background */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Bio Text & List */}
                    <div className="flex flex-col space-y-12 md:pt-4">
                        {/* Top Paragraphs */}
                        <div className="space-y-6">
                            <p className="text-secondary text-base md:text-lg leading-relaxed">
                                Jokariz s’intéresse aux projets entrepreneuriaux liés à l’éducation, aux médias et à la transmission des savoirs.
                            </p>
                            <p className="text-secondary text-base md:text-lg leading-relaxed">
                                À travers ses différentes activités, il accompagne ponctuellement des initiatives portées par de jeunes fondateurs et soutient des projets en lien avec l’orientation, la finance et l’employabilité des nouvelles générations.
                            </p>
                            <p className="text-secondary text-base md:text-lg leading-relaxed">
                                En parallèle du podcast Métiers de Rêve, il développe progressivement des projets à l’intersection du contenu, de la pédagogie et de l’entrepreneuriat.
                            </p>
                        </div>

                        {/* List of achievements */}
                        <div className="flex flex-col w-full border-t border-white/10 mt-12 md:mt-24">
                            {/* Achievement 1 */}
                            <div className="py-6 md:py-8 border-b border-white/10">
                                <p className="text-secondary text-base md:text-lg leading-relaxed">
                                    <span className="text-accent font-semibold">Jokariz a fondé Jokariz Corporation</span>, une structure dédiée au développement de projets médias et entrepreneuriaux autour de la transmission, de l’excellence et de l’orientation professionnelle.
                                </p>
                            </div>

                            {/* Achievement 2 */}
                            <div className="py-6 md:py-8 border-b border-white/10">
                                <p className="text-secondary text-base md:text-lg leading-relaxed">
                                    <span className="text-accent font-semibold">Il a créé Paris Creator Week</span>, un événement réunissant créateurs, entrepreneurs et acteurs de l’écosystème digital afin de favoriser les échanges, les opportunités et les collaborations.
                                </p>
                            </div>

                            {/* Achievement 3 */}
                            <div className="py-6 md:py-8 border-b border-white/10">
                                <p className="text-secondary text-base md:text-lg leading-relaxed">
                                    <span className="text-accent font-semibold">Il est également à l’origine de The Patch</span>, une initiative pensée pour accompagner les nouvelles générations dans leur compréhension des parcours professionnels et des environnements à haute exigence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCROLL-TELLING TIMELINE COMPONENT */}
            <Timeline />
        </main>
    );
}


