import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                surface: "#0A0A0A",
                border: "#333333",
                primary: "#FFFFFF",
                secondary: "#888888",
                accent: "#0055FF", // French Touch Blue
            },
            fontFamily: {
                display: ["var(--font-inter)"], // Reverted to Inter
                body: ["var(--font-inter)"],
            },
            keyframes: {
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            animation: {
                gradient: "gradient 3s ease infinite",
            },
        },
    },
    plugins: [],
};
export default config;
