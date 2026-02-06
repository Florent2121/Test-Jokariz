"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function BecomePartnerButton({ className = "" }: { className?: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex justify-center ${className}`}
        >
            <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(0,85,255,0.5)] hover:shadow-[0_0_40px_rgba(0,85,255,0.7)] transition-all"
            >
                <span className="font-display uppercase tracking-wider">
                    Devenir Partenaire
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
