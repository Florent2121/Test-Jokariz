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
        <section className="w-full bg-white flex flex-col items-center border-black/5 border-y pt-12 md:pt-20 pb-12 md:pb-16">
            <div className="w-full max-w-7xl mx-auto px-6 mb-8 md:mb-10 flex justify-between items-end text-left">
                <div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-black mb-3">
                        Ils nous font confiance
                    </h2>
                    <p className="text-gray-500 max-w-xl text-base md:text-lg">
                        Ces projets n’existeraient pas sans eux.
                    </p>
                </div>
                <Button
                    href="/partenaires"
                    variant="outline"
                    className="hidden md:flex gap-2 text-black !border-black/20 hover:!bg-black hover:!text-white"
                >
                    <span>Voir tous</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
            </div>

            {/* Grid Container - A compact banner format instead of giant squares */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full border-t border-[rgba(0,0,0,0.05)]">
                {featuredPartners.map((partner) => (
                    <Link
                        href={partner.websiteUrl || "#"}
                        key={partner.name}
                        target="_blank"
                        className="group relative flex items-center justify-center w-full py-8 md:py-10 overflow-hidden bg-white hover:bg-black/5 transition-colors border-[rgba(0,0,0,0.05)] border-r border-b lg:border-t-0 last:border-r-0"
                    >
                        <div className="relative w-28 h-24 md:w-32 md:h-24 lg:w-36 lg:h-28 pointer-events-none">
                            {partner.logo ? (
                                <Image
                                    src={partner.logoDark || partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs font-mono text-black/40">LOGO</div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-10 mb-2 flex justify-center w-full px-6">
                <Button href="/contact" variant="primary" className="gap-3 hover:scale-105">
                    <span>Devenir Partenaire</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <div className="mb-4 mt-8 flex justify-center md:hidden w-full px-6">
                <Button
                    href="/partenaires"
                    variant="outline"
                    className="flex gap-2 text-black !border-black/20 hover:!bg-black hover:!text-white"
                >
                    <span>Voir tous</span>
                    <ArrowUpRight className="w-4 h-4" />
                </Button>
            </div>
        </section>
    );
}
