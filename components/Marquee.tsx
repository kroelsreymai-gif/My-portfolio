"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <section className="relative overflow-hidden py-6">

            {/* Small Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-blue-500/10 blur-3xl rounded-full" />

            {/* Small Moving Text */}
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
          whitespace-nowrap
          flex
          gap-10
          text-sm
          md:text-lg
          font-medium
          uppercase
          tracking-[0.3em]
          text-white/20
        "
            >
                <span>Frontend Developer</span>
                <span>UI/UX Designer</span>
                <span>React</span>
                <span>Flutter</span>
                <span>Laravel</span>

                {/* Duplicate */}
                <span>Frontend Developer</span>
                <span>UI/UX Designer</span>
                <span>React</span>
                <span>Flutter</span>
                <span>Laravel</span>
            </motion.div>

        </section>
    );
}