"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Define route depth to determine animation direction
const getRouteDepth = (path: string) => {
    if (path === "/") return 0;
    if (path.startsWith("/pages/events-street")) return 1;
    return 0; // Default
};

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
    }),
};

// Hook to track previous path to calculate direction
import { useRef, useEffect } from 'react';

function usePrevious(value: string) {
    const ref = useRef(value);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const depth = getRouteDepth(pathname);
    const prevPath = usePrevious(pathname);
    const prevDepth = getRouteDepth(prevPath);

    // If moving deeper (1 > 0), slide from right (direction 1)
    // If moving shallower (0 < 1), slide from left (direction -1)
    const direction = depth - prevDepth;

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={pathname}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
