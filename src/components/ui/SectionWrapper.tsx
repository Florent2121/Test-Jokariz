import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    id?: string;
}

export function SectionWrapper({
    children,
    className,
    fullWidth = false,
    id,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full px-6 py-12 md:py-24",
                fullWidth ? "max-w-none" : "max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </section>
    );
}
