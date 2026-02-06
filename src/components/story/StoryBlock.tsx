"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StoryBlockProps {
    year: string;
    title: string;
    description: string;
    className?: string;
    variant?: "default" | "glitch" | "bold";
}

export function StoryBlock({
    year,
    title,
    description,
    className,
    variant = "default",
}: StoryBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={cn("mb-24 md:mb-32 relative pl-8 md:pl-0", className)}
        >
            <div className="md:hidden font-display text-4xl mb-4 text-secondary/50 font-bold">{year}</div>
            <h3
                className={cn(
                    "font-display text-4xl md:text-6xl font-bold uppercase mb-6 leading-none",
                    variant === "glitch" && "line-through decoration-accent decoration-4",
                    variant === "bold" && "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                )}
            >
                {title}
            </h3>
            <p className="text-xl text-secondary max-w-xl leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
