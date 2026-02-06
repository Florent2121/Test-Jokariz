"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PARTNERS } from "@/lib/partners";
import { BecomePartnerButton } from "@/components/ui/BecomePartnerButton";

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background pt-20 pb-12 md:pt-32 md:pb-20">
            <SectionWrapper>
                <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white"
                    >
                        Nos <span className="text-accent">Partenaires</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl"
                    >
                        Ces projets n’existeraient pas sans eux.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <Link
                                href={partner.websiteUrl}
                                target="_blank"
                                className="group relative block h-full bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-accent/50 transition-colors duration-500"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-20 h-20 md:w-28 md:h-28 relative bg-white rounded-xl p-2 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                            {/* Logo Placeholder if image fails or generic icon */}
                                            {partner.logo ? (
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    fill
                                                    className="object-contain p-2 transition-all duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs font-mono text-white/50">LOGO</div>
                                            )}
                                        </div>
                                        <div className="p-2 bg-white/5 rounded-full text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-display text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                                {partner.name}
                                            </h3>
                                            {partner.category && (
                                                <span className="text-xs font-mono py-1 px-2 rounded-full border border-white/10 text-white/50 bg-white/5">
                                                    {partner.category}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <BecomePartnerButton />
                </div>
            </SectionWrapper>
        </main>
    );
}
