"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    href,
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-accent text-white border border-transparent shadow-[0_0_20px_rgba(0,85,255,0.4)] hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] hover:bg-white hover:text-black",
        secondary:
            "bg-surface text-primary border border-white/10 hover:border-accent hover:text-accent",
        outline:
            "bg-transparent text-primary border border-white/20 hover:bg-white hover:text-black hover:border-white",
        ghost: "bg-transparent text-secondary hover:text-accent",
    };

    const sizes = {
        sm: "px-6 py-3 text-xs md:text-sm",
        md: "px-8 py-4 text-sm md:text-base",
        lg: "px-10 py-5 text-base md:text-lg",
    };

    const commonClasses = cn(
        "group relative inline-flex items-center justify-center font-display font-bold uppercase tracking-widest transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 rounded-full cursor-pointer",
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={commonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={commonClasses}
            {...props}
        >
            {children}
        </motion.button>
    );
}
