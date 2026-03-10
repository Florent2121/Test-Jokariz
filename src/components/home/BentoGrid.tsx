"use client";

import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";
import NextLink from "next/link";

export function BentoGrid() {
    return (
        <section className="w-full px-6 py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

                {/* L'Histoire - Large Card */}
                <NextLink href="/story" className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 group">
                    <Card className="h-full min-h-[300px] w-full p-8 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-mono text-secondary uppercase tracking-widest">01. Narrative</span>
                            <ArrowUpRight className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">L'Histoire</h2>
                            <p className="text-secondary max-w-md">
                                From Finance to Freedom. The complete timeline of the journey.
                            </p>
                        </div>
                    </Card>
                </NextLink>

                {/* L'Ecosystème - Medium Card used to be row-spam-1, now row-span-2 to fill space */}
                <NextLink href="/projects" className="col-span-1 row-span-1 md:row-span-2 group">
                    <Card className="h-full min-h-[300px] w-full p-8 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-mono text-secondary uppercase tracking-widest">02. Initiatives</span>
                            <ArrowUpRight className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-2">Nos initiatives</h2>
                            <p className="text-secondary text-sm">
                                Jokariz Corp, PCW, The Unicorn.
                            </p>
                        </div>
                    </Card>
                </NextLink>

            </div>
        </section>
    );
}
