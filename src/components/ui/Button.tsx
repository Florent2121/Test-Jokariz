"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-accent text-black hover:bg-white border border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        secondary:
            "bg-surface text-primary border border-border hover:border-accent hover:text-accent",
        outline:
            "bg-transparent text-primary border border-border hover:bg-accent hover:text-black hover:border-accent",
        ghost: "bg-transparent text-secondary hover:text-accent",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-3 text-sm",
        lg: "px-10 py-4 text-base",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 rounded-full",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
