"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Spotlight() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {

        const handleMouseMove = (
            e: MouseEvent
        ) => {

            setPosition({
                x: e.clientX,
                y: e.clientY,
            });

        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

        };

    }, []);

    return (

        <motion.div
            animate={{
                x: position.x - 200,
                y: position.y - 200,
            }}

            transition={{
                type: "spring",
                damping: 30,
                stiffness: 120,
            }}

            className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[1]
        w-[400px]
        h-[400px]
        rounded-full
        bg-blue-500/10
        blur-3xl
      "
        />

    );
}