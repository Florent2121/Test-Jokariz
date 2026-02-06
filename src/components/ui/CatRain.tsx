"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const CAT_IMAGES = [
    "/images/chat/chat 1.png",
    "/images/chat/chat 2.png",
    "/images/chat/chat 3.png",
    "/images/chat/chat 4.png",
    "/images/chat/chat 5.png",
];

interface CatInstance {
    id: number;
    x: number; // Percentage
    image: string;
    delay: number;
    duration: number;
    rotation: number;
    scale: number;
}

export function CatRain({ onClose }: { onClose: () => void }) {
    const [cats, setCats] = useState<CatInstance[]>([]);

    useEffect(() => {
        // Generate a lot of cats
        const newCats: CatInstance[] = [];
        for (let i = 0; i < 50; i++) {
            newCats.push({
                id: i,
                x: Math.random() * 100, // Random horizontal position
                image: CAT_IMAGES[Math.floor(Math.random() * CAT_IMAGES.length)],
                delay: Math.random() * 3, // Reduced from 5s to 3s for faster start
                duration: 1.5 + Math.random() * 2, // Reduced from 3-7s to 1.5-3.5s for faster fall
                rotation: Math.random() * 360, // Random rotation
                scale: 0.5 + Math.random() * 1.5, // Random size
            });
        }
        setCats(newCats);

        // Auto close after the longest possible animation (delay + duration)
        const maxDuration = Math.max(...newCats.map(c => c.delay + c.duration));
        const timer = setTimeout(onClose, maxDuration * 1000 + 500);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
            {cats.map((cat) => (
                <motion.div
                    key={cat.id}
                    initial={{ y: -200, rotate: 0, opacity: 1 }}
                    animate={{ y: "120vh", rotate: cat.rotation + 720 }}
                    transition={{
                        duration: cat.duration,
                        delay: cat.delay,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        left: `${cat.x}%`,
                        width: `${cat.scale * 150}px`,
                    }}
                >
                    <Image
                        src={cat.image}
                        alt="Flying Cat"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </motion.div>
            ))}
        </div>
    );
}
