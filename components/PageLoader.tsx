"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);

    }, []);

    if (!loading) return null;

    return (

        <motion.div
            initial={{
                opacity: 1,
            }}

            exit={{
                opacity: 0,
            }}

            className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
        >

            {/* Background Glow */}
            <div
                className="
          absolute
          w-[500px]
          h-[500px]
          bg-blue-500/20
          blur-3xl
          rounded-full
        "
            />

            {/* Anime Rings */}
            <motion.div
                animate={{
                    rotate: 360,
                }}

                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}

                className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full
          border
          border-blue-500/20
        "
            />

            <motion.div
                animate={{
                    rotate: -360,
                }}

                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}

                className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          border
          border-white/10
          border-dashed
        "
            />

            {/* Main Content */}
            <div
                className="
          relative
          z-10
          text-center
        "
            >

                {/* Main Text */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(10px)",
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                    }}

                    transition={{
                        duration: 1.2,
                    }}

                    className="
            text-6xl
            md:text-8xl
            font-black
            tracking-[0.2em]
            uppercase
            bg-gradient-to-r
            from-blue-500
            via-white
            to-blue-400
            bg-clip-text
            text-transparent
          "
                >
                    MAI
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: 0.5,
                    }}

                    className="
            mt-6
            text-sm
            tracking-[0.6em]
            uppercase
            text-blue-300
          "
                >
                    Initializing System
                </motion.p>

                {/* Loading Bar */}
                <div
                    className="
            mt-10
            w-[260px]
            h-[3px]
            bg-white/10
            rounded-full
            overflow-hidden
            mx-auto
          "
                >

                    <motion.div
                        initial={{
                            width: 0,
                        }}

                        animate={{
                            width: "100%",
                        }}

                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                        }}

                        className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-white
            "
                    />

                </div>

            </div>

            {Array.from({ length: 20 }).map((_, i) => {

                const randomX = (i * 37) % 100;
                const randomDelay = i * 0.2;

                return (

                    <motion.div
                        key={i}

                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        animate={{
                            opacity: [0, 1, 0],
                            y: [-100, 100],
                        }}

                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: randomDelay,
                        }}

                        className="
        absolute
        w-1
        h-1
        rounded-full
        bg-blue-400
      "

                        style={{
                            left: `${randomX}%`,
                            top: `${(i * 13) % 100}%`,
                        }}
                    />

                );

            })}


        </motion.div>
    );
}