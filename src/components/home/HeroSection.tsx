"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    const { scrollY } = useScroll();
    // Parallax effect: moves left by 100px as you scroll 500px down (Increased intensity)
    const x = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background">

            {/* Background Gradient/Mesh */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-background z-0" />

            <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between px-6 h-full pt-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start text-left md:w-3/5 space-y-6 z-20 max-w-full"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                        <span className="block">JE VEUX</span>
                        <span className="block">RENDRE</span>
                        <span className="block">LE SUCCÈS</span>
                        <span className="block text-accent">ACCESSIBLE</span>
                        <span className="block text-accent">À TOUS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-lg">
                        De Goldman Sachs à la Creator Economy.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-8 py-4 bg-accent text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(0,85,255,0.5)] hover:shadow-[0_0_40px_rgba(0,85,255,0.7)] transition-shadow"
                    >
                        REJOINDRE L'AVENTURE
                    </motion.button>
                </motion.div>


                {/* Hero Image */}
                <div
                    className="relative md:w-1/2 h-[50vh] md:h-full flex items-end justify-center"
                >
                    {/* Parallax Animation Wrapper */}
                    <motion.div
                        style={{ x }}
                        className="relative w-full h-full flex items-end justify-center"
                    >
                        {/* Glow Effect behind the image (Intensified) */}
                        <div className="absolute bottom-0 w-[400px] h-[400px] bg-accent/35 blur-[140px] rounded-full" />

                        <Image
                            src="/images/photo-joka-french-touch.png"
                            alt="Joka French Touch"
                            width={800}
                            height={1000}
                            className="object-contain max-h-full drop-shadow-2xl relative z-10"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
