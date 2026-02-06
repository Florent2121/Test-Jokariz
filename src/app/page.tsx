import { HeroSection } from "@/components/home/HeroSection";
import { HistorySection } from "@/components/home/HistorySection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { PartnersSection } from "@/components/home/PartnersSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <HistorySection />
            <EcosystemSection />
            <PartnersSection />
        </main>
    );
}
