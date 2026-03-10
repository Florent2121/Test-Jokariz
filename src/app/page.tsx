import { VideoHeader } from "@/components/home/VideoHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { Timeline } from "@/components/story/Timeline";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-background pb-32">
            <VideoHeader />
            <HeroSection />
            <EcosystemSection />
            <PartnersSection />

            <div className="py-24 md:py-32">
                <div className="w-full max-w-7xl mx-auto px-6 mb-12 lg:mb-20 text-center md:text-left">
                    <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-primary">
                        Mon Parcours
                    </h2>
                </div>

                <Timeline />

                {/* CTA to Story Page */}
                <div className="flex justify-center mt-16 md:mt-24 px-4 relative z-20">
                    <Button href="/story" variant="outline" className="gap-3">
                        <span>Découvrir l'histoire complète</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </div>
        </main>
    );
}
