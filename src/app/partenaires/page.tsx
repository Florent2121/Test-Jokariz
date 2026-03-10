"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PARTNERS } from "@/lib/partners";
import { Button } from "@/components/ui/Button";

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background pt-20 pb-12 md:pt-32 md:pb-20">
            <SectionWrapper>
                <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-primary"
                    >
                        Nos <span className="text-accent">Partenaires</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl"
                    >
                        Ces projets n’existeraient pas sans eux.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 + 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-full aspect-[4/3] bg-white relative rounded-xl p-4 md:p-6 mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex justify-center items-center">
                                {partner.logo ? (
                                    <Image
                                        src={partner.logoDark || partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain p-4 md:p-6"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs font-mono text-black/50">LOGO</div>
                                )}
                            </div>
                            <h3 className="font-display font-bold text-sm md:text-base text-secondary group-hover:text-primary transition-colors text-center uppercase tracking-wider">
                                {partner.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Button href="/contact" variant="primary" className="gap-3">
                        <span>Devenir Partenaire</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </SectionWrapper>
        </main>
    );
}
