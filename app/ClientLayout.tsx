"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Script from "next/script";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        if (typeof window !== "undefined" && "registerProperty" in CSS) {
            try {
                (CSS as any).registerProperty({
                    name: "--wipe-angle",
                    syntax: "<angle>",
                    inherits: false,
                    initialValue: "0deg",
                });
            } catch (e) { }
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="relative w-full min-h-screen mt-16 lg:mt-20">
                <PageTransition>{children}</PageTransition>
            </div>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-7NWN813T9Y"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7NWN813T9Y');
          `}
            </Script>
        </>
    );
}
