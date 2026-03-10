"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PARTNERS } from "@/lib/partners";
import { Button } from "@/components/ui/Button";

export function PartnersSection() {
    // Show only the requested partners on the home page
    const homePagePartners = ["Qonto", "BNP Paribas", "BoursoBank", "Skema", "Neoma", "Havas"];
    const featuredPartners = PARTNERS.filter(partner => homePagePartners.includes(partner.name));



    return (
        <section className="w-full bg-background flex flex-col items-center border-[rgba(255,255,255,0.05)] border-t pt-24 md:pt-32 pb-24 md:pb-32">
            <div className="w-full max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end text-left">
                <div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-primary mb-4">
                        Ils nous font confiance
                    </h2>
                    <p className="text-secondary max-w-xl">
                        Ces projets n’existeraient pas sans eux.
                    </p>
                </div>
                <Button
                    href="/partenaires"
                    variant="outline"
                    className="hidden md:flex gap-2"
                >
                    <span>Voir tous</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
            </div>

            {/* Grid Container - edge to edge square grid similar to Ecosystem */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full border-b border-[rgba(255,255,255,0.05)]">
                {featuredPartners.map((partner) => (
                    <div
                        key={partner.name}
                        className="group relative block w-full aspect-square overflow-hidden bg-black border-[rgba(255,255,255,0.05)] border-r border-t lg:border-t-0 last:border-r-0"
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 pointer-events-none">
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                                {partner.logo ? (
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs font-mono text-white/40">LOGO</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 mb-16 flex justify-center w-full px-6">
                <Button href="/contact" variant="primary" className="gap-3">
                    <span>Devenir Partenaire</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <div className="mb-24 flex justify-center md:hidden w-full px-6">
                <Button
                    href="/partenaires"
                    variant="outline"
                    className="flex gap-2"
                >
                    <span>Voir tous</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
            </div>
        </section>
    );
}
