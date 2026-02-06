"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PARTNERS } from "@/lib/partners";
import { BecomePartnerButton } from "@/components/ui/BecomePartnerButton";

export function PartnersSection() {
    // Show only the first 4 partners on the home page
    const featuredPartners = PARTNERS.slice(0, 4);

    // Dynamic grid layout based on number of partners
    const count = featuredPartners.length;

    let gridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"; // Default for 4+ items

    if (count === 1) {
        gridClassName = "grid grid-cols-1 max-w-md mx-auto";
    } else if (count === 2) {
        gridClassName = "grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto";
    } else if (count === 3) {
        gridClassName = "grid grid-cols-1 md:grid-cols-3"; // 3 columns on medium+ screens
    }

    return (
        <section className="py-24 border-t border-white/5 bg-zinc-950/30">
            <SectionWrapper>
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                            Partenaires
                        </h2>
                        <p className="text-secondary max-w-xl">
                            Ces projets n’existeraient pas sans eux.
                        </p>
                    </div>
                    <Link
                        href="/partenaires"
                        className="hidden md:flex items-center gap-2 text-sm font-mono uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
                    >
                        Voir tous
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className={`${gridClassName} gap-6 mb-16`}>
                    {featuredPartners.map((partner) => (
                        <Link
                            key={partner.name}
                            href={partner.websiteUrl}
                            target="_blank"
                            className="group relative aspect-[4/3] bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500 flex flex-col items-center justify-center p-6"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4">
                                <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white rounded-xl p-2 transition-all duration-500 group-hover:scale-110">
                                    {partner.logo ? (
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs font-mono text-white/20 border border-white/10 rounded-lg">LOGO</div>
                                    )}
                                </div>

                                <span className="font-display font-bold text-lg text-white/40 group-hover:text-white transition-colors">
                                    {partner.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <BecomePartnerButton />
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Link
                        href="/partenaires"
                        className="flex items-center gap-2 text-sm font-mono uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
                    >
                        Voir tous
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </SectionWrapper>
        </section>
    );
}
