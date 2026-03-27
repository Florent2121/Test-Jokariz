"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function VideoHeader() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force playback parameters securely
        video.muted = true;
        video.defaultMuted = true;
        video.play().catch(() => {});

        let animationFrameId: number;

        // Optimized Loop: requestAnimationFrame checks the time 60x/second.
        // It skips the last 0.05s of the video to avoid the classic black flash frame at the end of MP4s.
        const checkLoop = () => {
            if (video.duration && video.currentTime >= video.duration - 0.05) {
                video.currentTime = 0;
            }
            animationFrameId = requestAnimationFrame(checkLoop);
        };

        animationFrameId = requestAnimationFrame(checkLoop);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
            >
                {/* Correctly mapped to the real file name */}
                <source src="/vid%C3%A9o/Vid%C3%A9o%20site2.mp4.mov" type="video/mp4" />
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
