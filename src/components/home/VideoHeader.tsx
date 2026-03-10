"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function VideoHeader() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                {/* Fallback to mp4 type even though it's mov, sometimes browsers handle it better, or omit type */}
                <source src="/vid%C3%A9o/vide%CC%81o%20accueil.mov" />
                Votre navigateur ne supporte pas la balise vidéo.
            </video>

            {/* Overlay to ensure contrast */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            {/* Centered Text */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
                <h1
                    className="font-display text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tight text-accent uppercase mix-blend-screen"
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
    );
}
