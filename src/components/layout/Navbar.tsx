"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, Menu } from "lucide-react";

const MENU_ITEMS = [
    { label: "Home", href: "/" },
    { label: "MON PARCOURS", href: "/story" },
    {
        label: "Nos initiatives",
        href: "/projets",
        children: [
            { label: "Métiers de rêves", href: "/projets/metiers-de-reves" },
            { label: "The Patch", href: "/projets/the-patch" },
            { label: "Paris Creator Week", href: "/projets/paris-creator-week" },
            { label: "Conférences", href: "/projets/conferences" },
            { label: "Un Stagiaire presque parfait", href: "/projets/un-stagiaire-presque-parfait" },
            { label: "The Unicorn", href: "/projets/the-unicorn" },
            { label: "Faites découvrir votre entreprise", href: "/projets/faites-decouvrir-votre-entreprise" },
            { label: "Break Poverty", href: "/projets/break-poverty" },
            { label: "Tournée des écoles", href: "/projets/tournee-des-ecoles" },
        ],
    },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>("Nos initiatives"); // Open by default or null

    return (
        <>
            <nav className="fixed top-0 left-0 w-full max-w-[100vw] p-4 md:p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent text-white overflow-hidden">
                <Link href="/" className="font-display font-bold text-3xl uppercase tracking-tighter">
                    Jokariz
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center p-2 text-white hover:text-accent transition-colors cursor-pointer"
                    aria-label="Ouvrir le menu"
                >
                    <Menu className="w-7 h-7 md:w-8 md:h-8" />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-black z-[60] flex flex-col p-8 md:p-12 border-l border-white/10"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="font-display font-bold text-2xl uppercase tracking-tighter text-white/50">
                                Menu
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 overflow-y-auto h-full">
                            {MENU_ITEMS.map((item) => (
                                <div key={item.label}>
                                    {item.children ? (
                                        <div
                                            className="flex flex-col"
                                            onMouseEnter={() => setOpenSubmenu(item.label)}
                                        >
                                            <div className="flex items-center justify-between w-full group">
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter hover:text-accent transition-colors text-left flex-grow"
                                                >
                                                    {item.label}
                                                </Link>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                                                    }}
                                                    className="p-2"
                                                >
                                                    <ChevronDown
                                                        className={`w-6 h-6 text-white/50 transition-transform duration-300 ${openSubmenu === item.label ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                            </div>

                                            <AnimatePresence>
                                                {openSubmenu === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col gap-2 mt-2"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-2xl md:text-3xl font-display font-medium uppercase text-white/60 hover:text-white transition-colors pl-4 border-l-2 border-white/10 hover:border-accent"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter hover:text-accent transition-colors block"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/10 flex justify-between text-xs font-mono text-secondary uppercase">
                            <div>© 2026 Jokariz</div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
