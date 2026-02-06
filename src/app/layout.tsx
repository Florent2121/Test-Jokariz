import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "JOKARIZ",
    description: "From Goldman Sachs to Creator Economy",
    icons: {
        icon: "/favicon-32x32.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-background">
            <body className={cn(inter.variable, "font-body min-h-screen relative overflow-x-hidden flex flex-col bg-background text-primary antialiased")}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
