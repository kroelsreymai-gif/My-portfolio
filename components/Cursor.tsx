"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function Cursor() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 300,
        damping: 30,
    });

    const springY = useSpring(mouseY, {
        stiffness: 300,
        damping: 30,
    });

    useEffect(() => {

        const moveCursor = (
            e: MouseEvent
        ) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
        };

        window.addEventListener(
            "mousemove",
            moveCursor
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                moveCursor
            );
        };

    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
            }}
            className="
        fixed
        top-0
        left-0
        w-5
        h-5
        rounded-full
        bg-blue-400
        blur-[2px]
        pointer-events-none
        z-[9999]
        mix-blend-screen
      "
        />
    );
}