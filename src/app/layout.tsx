import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import type { RootLayuotProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Eureka Talent",
    description: "Eureka Talent",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: Readonly<RootLayuotProps>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
