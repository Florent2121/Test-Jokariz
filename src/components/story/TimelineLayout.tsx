"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TimelineLayoutProps {
    children: React.ReactNode;
}

export function TimelineLayout({ children }: TimelineLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeYear, setActiveYear] = useState("2015");
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // This is a simplified way to track sections. 
    // Ideally we'd use intersection observers or specific scroll ranges for each block.
    // For now, we'll map scroll progress to years for the visual effect.

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.33) setActiveYear("2015");
            else if (latest < 0.66) setActiveYear("2022");
            else setActiveYear("2024");
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative min-h-[200vh] w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-hidden">

            {/* Sticky Sidebar (Left) */}
            <div className="hidden md:block md:col-span-4 relative">
                <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-start">
                    <motion.div
                        key={activeYear}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="font-display text-[120px] font-bold leading-none text-secondary/20 select-none"
                    >
                        {activeYear}
                    </motion.div>
                    {/* Progress Line */}
                    <div className="absolute left-0 top-full mt-8 h-32 w-1 bg-gradient-to-b from-accent to-transparent opacity-50" />
                </div>
            </div>

            {/* Scrolling Content (Right) */}
            <div className="md:col-span-8 py-12 md:py-32">
                {children}
            </div>

        </div>
    );
}
