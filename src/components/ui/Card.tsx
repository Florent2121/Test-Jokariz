"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string; // Kept for API compatibility but not used in V2
}

export function Card({
    children,
    className,
}: CardProps) {
    return (
        <div
            className={cn(
                "group relative border border-border bg-surface overflow-hidden hover:border-accent transition-colors duration-300 rounded-3xl",
                className
            )}
        >
            {children}
        </div>
    );
}
