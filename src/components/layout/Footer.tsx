"use client";

import { CatRain } from "@/components/ui/CatRain";
import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // Ensure AnimatePresence is used if we want exit animations, though CatRain handles itself mostly.
import { Youtube, Twitch, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const [clickCount, setClickCount] = useState(0);
    const [showCats, setShowCats] = useState(false);

    const handleSecretClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 3) {
            setShowCats(true);
            setClickCount(0); // Reset for next time
        }
    };

    return (
        <footer className="w-full flex flex-col mt-auto relative">
            {showCats && <CatRain onClose={() => setShowCats(false)} />}

            {/* Newsletter Section - Blue */}
            <div id="newsletter" className="w-full bg-accent py-12 md:py-20 px-6">
                <div className="container mx-auto flex flex-col items-center text-center space-y-8">
                    <h2
                        onClick={handleSecretClick}
                        className="font-display text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-white cursor-pointer select-none active:scale-95 transition-transform"
                    >
                        RESTONS CONNECTÉS
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Inscrivez-vous pour recevoir les dernières actualités, insights et projets de Jokariz.
                    </p>

                    <div className="w-full max-w-xl flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="flex-1 bg-white p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 bg-white p-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform uppercase tracking-widest shadow-xl">
                        S'INSCRIRE À LA NEWSLETTER
                    </button>
                </div>
            </div>

            {/* Social Media Section - Black - Full Width */}
            <div className="w-full bg-black border-t border-white/10">
                {/* Social Icons Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-white/10">
                    {/* YouTube */}
                    <a href="https://www.youtube.com/@jokariz6803" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 lg:last:border-r-0">
                        <Youtube className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
                    </a>

                    {/* Twitch */}
                    <a href="https://www.twitch.tv/jokariz" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 lg:last:border-r-0">
                        <Twitch className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/jokariz/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 lg:last:border-r-0">
                        <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/jokarizz/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 lg:last:border-r-0">
                        <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform" />
                    </a>

                    {/* TikTok (Custom SVG) */}
                    <a href="https://www.tiktok.com/@jokariztiktok" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 lg:last:border-r-0">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform"
                        >
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>

                    {/* Spotify (Custom SVG) */}
                    <a href="https://open.spotify.com/show/4vOqhcW35peD8i83p6dMVn" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center py-10 md:py-16 border-r border-white/10 hover:bg-white/5 transition-colors last:border-r-0 md:border-r-0 lg:border-r-0">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform"
                        >
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.96 1.74.539.3.66 1.02.359 1.56-.24.48-.899.6-1.56.24z" />
                        </svg>
                    </a>
                </div>

                <div className="container mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <span>Jokariz Corp &copy; 2026. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">Confidientialité</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                    <span className="opacity-50">Site par Enosis Studio</span>
                </div>
            </div>
        </footer>
    );
}
