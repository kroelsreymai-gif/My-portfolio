"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main
            className="
        min-h-screen
        bg-[#0B0B0B]
        text-white
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        relative
        px-6
      "
        >

            {/* Glow */}
            <div
                className="
          absolute
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            {/* 404 */}
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="
          text-[120px]
          md:text-[200px]
          font-black
          leading-none
          bg-gradient-to-r
          from-blue-400
          to-white
          bg-clip-text
          text-transparent
          z-10
        "
            >
                404
            </motion.h1>

            {/* Text */}
            <motion.h2
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.3,
                }}
                className="
          text-3xl
          md:text-5xl
          font-bold
          text-center
          z-10
        "
            >
                Lost in Space
            </motion.h2>

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.5,
                }}
                className="
          text-gray-400
          mt-6
          max-w-xl
          text-center
          leading-8
          z-10
        "
            >
                The page you’re looking for doesn’t exist
                or has been moved somewhere else.
            </motion.p>

            {/* Button */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.8,
                }}
                className="mt-10 z-10"
            >

                <Link
                    href="/"
                    className="
            px-8
            py-3
            rounded-full
            bg-blue-500
            hover:scale-105
            transition
            inline-block
          "
                >
                    Back Home
                </Link>

            </motion.div>

        </main>
    );
}