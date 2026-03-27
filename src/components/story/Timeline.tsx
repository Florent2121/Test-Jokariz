"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Timeline Data
export interface TimelineStep {
    year: string;
    title: string;
    description: string;
    image: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
    {
        year: "1991",
        title: "UNE ENFANCE ULTRA PRIVILÉGIÉE",
        description: `Entre Neuilly-sur-Seine et le 16ᵉ arrondissement de Paris, Marc va avoir une enfance ultra privilégiée. À Franklin (collège / lycée), il va côtoyer des fils et filles de milliardaires et de grands patrons du CAC 40. Mais il va aussi bénéficier de l’enseignement jésuite et c’est là qu'une graine se plante : faire quelque chose d’utile pour la société.`,
        image: "/images/Timeline/jokariz enfant.png",
    },
    {
        year: "2011",
        title: "UNE RENTRÉE À L’ESCP",
        description: `Ce parcours ultra privilégié le conduit logiquement à faire une classe préparatoire à Saint Jean de Passy puis à intégrer l’ESCP.`,

        image: "/images/projects/jokacorp.png",
    },
    {
        year: "2015",
        title: "LA RÉUSSITE COMME POINT DE BASCULE",
        description: `À 23 ans, après un stage en structuration (ingénieur en salle de marché) chez BNP Paribas, Marc décroche un job chez Goldman Sachs qu’il considère à l’époque comme le graal absolu. Il y gravit les échelons rapidement et devient Vice Président en seulement 5 ans.`,
        image: "/images/projects/un-stagiaire-presque-parfait.png",

    },
    {
        year: "2022",
        title: `UN NOUVEAU TERRAIN DE JEU`,
        description: `Après 7 ans chez Goldman Sachs, Marc va décider de quitter cet environnement vide de sens à ses yeux. Il veut construire quelque chose d’ambitieux, d’utile.
Son prochain challenge il le trouve dans la Creator Economy et plus particulièrement dans les jeux vidéo. Pendant un an, il s’entraîne dur et il finit par atteindre le rang de Master sur League of Legends (top 0.5% sur 125 millions de joueurs). Cette expérience dans les jeux vidéo est extrêmement structurante pour Marc, c’est la qu’il dit avoir le plus appris de sa vie. Ça n’est pas un hasard d’ailleurs s’il décide de conserver son nom de gamer : c’est la que Marc devient Jokariz.`,
        image: "/images/projects/paris-creator-week.png",
    },
    {
        year: "2023",
        title: "MÉTIERS DE RÊVES",
        description: `Un des grands facteurs d’inégalités des chances est l’asymétrie de l’accès à l’information. 

Dans Métiers de Rêve, Jokariz démystifie les métiers les plus élitistes pour que chacun(e) ait une chance d’y accéder.`,
        image: "/images/projects/jokacorp.png",

    },
    {
        year: "2024",
        title: "PARIS CREATOR WEEK",
        description: `La Creator Economy prend de plus en plus d’ampleur en France, mais aucun rendez-vous ne permet encore à cet écosystème de se structurer.
Moi-même au cœur de ces échanges, je réalise qu’un point de rencontre commun manque.
La Paris Creator Week naît de ce besoin :
rassembler les créateurs, les plateformes, les marques, et offrir un cadre pour se rencontrer, échanger et prendre du recul.`,
        image: "/images/Timeline/Paris%20creator%20week.png",

    },
    {
        year: "2025",
        title: "UN STAGIAIRE PRESQUE PARFAIT",
        description: `En échangeant avec les étudiants et les jeunes actifs, une frustration revient souvent : l’accès aux opportunités est flou, parfois décourageant, les critères rarement expliqués.
Je décide alors de rendre visibles les règles du jeu.
Analyser des CV, simuler des entretiens, et ouvrir l’accès à une première opportunité.`,
        image: "/images/projects/un-stagiaire-presque-parfait.png",

    },
    {
        year: "2025",
        title: "THE UNICORN",
        description: `Pour aller plus loin dans l’accompagnement vers la réussite, je voulais créer un espace où une idée peut être confrontée au réel.
The Unicorn devient un rendez-vous en live, puis un événement en présentiel, réunissant plus de 200 étudiants à l’Albert School.
Un lieu pour présenter un projet, recevoir un regard extérieur et transformer une intuition en opportunité réelle.`,
        image: "/images/projects/the-unicorn.png",

    },
    {
        year: "2026",
        title: "THE PATCH",
        description: `À force d’observer les recrutements et les opportunités manquées, un constat s’impose : les outils actuels évaluent mal les compétences réelles.
The Patch part de cette limite et propose
 une autre approche, inspirée des jeux vidéo : évaluer les compétences en conditions proches du réel,
et faire du mérite un signal lisible.`,
        image: "/images/projects/the-patch.png",

    },
];

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    return (
        <section ref={containerRef} className="relative w-full">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 hidden md:block" />
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white md:hidden" />

            {/* Progress Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute top-0 left-0 w-full bg-white origin-top h-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
            </div>
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] md:hidden">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute top-0 left-0 w-full bg-white origin-top h-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
            </div>

            <div className="space-y-8 py-6 relative">
                {TIMELINE_STEPS.map((step, index) => (
                    <TimelineItem key={step.year} step={step} index={index} />
                ))}
            </div>
        </section>
    );
}

function TimelineItem({ step, index }: { step: TimelineStep; index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Image moves vertically
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Shared Content Blocks to enforce DRY principle
    const ImageContent = (
        <motion.div style={{ y }} className="w-full space-y-4">
            <div className={`relative aspect-[4/3] w-full md:w-[80%] overflow-hidden border border-white/5 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                />
            </div>
        </motion.div>
    );

    const TextContent = (
        <div className={`space-y-4 md:pt-12 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary tracking-tighter">
                {step.title}
            </h2>
            <p className="text-secondary text-lg leading-relaxed whitespace-pre-line">
                {step.description}
            </p>
        </div>
    );

    return (
        <div ref={ref} className="relative container mx-auto px-6">
            {/* CENTER YEAR - The Anchor */}
            <div className="flex justify-center mb-2 relative z-10 pointer-events-none">
                <div className="relative">
                    {/* Line Mask: A narrow strip to cover the center line behind text on desktop without touching photos */}
                    <div className="absolute top-[-5px] bottom-[-5px] left-1/2 -translate-x-1/2 w-6 bg-background hidden md:block" />
                    <span className="font-display font-bold text-6xl md:text-9xl text-accent tracking-tighter leading-none relative z-10">
                        {step.year}
                    </span>
                </div>
            </div>

            <div className={`flex ${isEven ? 'flex-col' : 'flex-col-reverse'} md:flex-row items-center md:items-start gap-8 md:gap-12`}>
                {/* LEFT SIDE */}
                <div className="w-full md:w-[45%] flex flex-col items-center md:items-end text-center md:text-right">
                    {isEven ? ImageContent : TextContent}
                </div>

                {/* CENTER SPACER to cross the line */}
                <div className="hidden md:block w-[10%]" />

                {/* RIGHT SIDE */}
                <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left">
                    {isEven ? TextContent : ImageContent}
                </div>
            </div>
        </div>
    );
}
