"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background pt-32 text-center text-white">Chargement...</div>}>
            <ContactForm />
        </Suspense>
    );
}

function ContactForm() {
    const searchParams = useSearchParams();
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
    const [subject, setSubject] = useState("");

    useEffect(() => {
        const sub = searchParams.get("subject");
        if (sub) {
            setSubject(sub);
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        // Simulate network request
        setTimeout(() => {
            setFormState("success");
            // Reset after showing success for a while
            setTimeout(() => setFormState("idle"), 3000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-background pt-20 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Context */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6">
                                Parlons <br />
                                <span className="text-accent">Projets</span>
                            </h1>
                            <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                                Vous souhaitez devenir partenaire, proposer une conférence ou simplement échanger ?
                                <br /><br />
                                Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-4 text-white">
                                <div className="p-3 bg-accent/10 rounded-full text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Direct</h3>
                                    <p className="text-white/50">contact@jokariz.fr</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md relative"
                    >
                        {formState === "success" ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/95 rounded-3xl z-10 transition-all">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="p-4 bg-green-500/20 rounded-full text-green-500 mb-4"
                                >
                                    <Send className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé !</h3>
                                <p className="text-white/50">Nous revenons vers vous très vite.</p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-mono uppercase text-white/50 ml-1">Nom</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            maxLength={80}
                                            pattern="^[a-zA-ZÀ-ÿ\s\\-']+$"
                                            autoComplete="name"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                                            placeholder="Votre Nom"
                                        />
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-mono uppercase text-white/50 ml-1">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            maxLength={255}
                                            autoComplete="email"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                                            placeholder="votre@email.com"
                                        />
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-mono uppercase text-white/50 ml-1">Sujet</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white/80 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-zinc-900 text-white">Choisir un sujet</option>
                                        <option value="Devis pour une conférence" className="bg-zinc-900 text-white">Devis pour une conférence</option>
                                        <option value="Faites découvrir votre entreprise" className="bg-zinc-900 text-white">Faites découvrir votre entreprise</option>
                                        <option value="Devenir Partenaire" className="bg-zinc-900 text-white">Devenir Partenaire</option>
                                        <option value="Proposer une Conférence" className="bg-zinc-900 text-white">Proposer une Conférence</option>
                                        <option value="Candidat saison 2 de THE UNICORN" className="bg-zinc-900 text-white">Candidat saison 2 de THE UNICORN</option>
                                        <option value="Autre" className="bg-zinc-900 text-white">Autre</option>
                                    </select>
                                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono uppercase text-white/50 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    maxLength={3000}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all resize-none"
                                    placeholder="Dites-nous en plus sur votre projet..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState === "submitting"}
                                className="w-full bg-white text-black font-bold text-lg uppercase py-4 rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {formState === "submitting" ? (
                                    "Envoi en cours..."
                                ) : (
                                    <>
                                        Envoyer le message
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </SectionWrapper>
        </main>
    );
}
