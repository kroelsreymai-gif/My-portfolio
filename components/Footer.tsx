"use client";

import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer
            className="
        relative
        px-6
        py-16
        overflow-hidden
      "
        >

            {/* Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            <div
                className="
          max-w-6xl
          mx-auto
          relative
          z-10
        "
            >

                {/* Top */}
                <div
                    className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-10
            border-b
            border-white/10
            pb-10
          "
                >

                    {/* Logo */}
                    <motion.h2
                        whileHover={{
                            scale: 1.05,
                        }}
                        className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-blue-400
              via-white
              to-blue-300
              bg-clip-text
              text-transparent
            "
                    >
                        MAI
                    </motion.h2>

                    {/* Links */}
                    <div
                        className="
              flex
              items-center
              gap-6
            "
                    >

                        <a
                            href="/"
                            className="
                text-gray-400
                hover:text-white
                transition
              "
                        >
                            Home
                        </a>

                        <a
                            href="/about"
                            className="
                text-gray-400
                hover:text-white
                transition
              "
                        >
                            About
                        </a>

                        <a
                            href="/projects"
                            className="
                text-gray-400
                hover:text-white
                transition
              "
                        >
                            Projects
                        </a>

                        <a
                            href="/contact"
                            className="
                text-gray-400
                hover:text-white
                transition
              "
                        >
                            Contact
                        </a>

                    </div>

                </div>

                {/* Bottom */}
                <div
                    className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
            pt-10
          "
                >

                    {/* Text */}
                    <p
                        className="
              text-gray-500
              text-sm
              tracking-[0.2em]
              uppercase
            "
                    >
                        Crafting Modern Digital Experiences
                    </p>

                    {/* Socials */}
                    <div
                        className="
              flex
              items-center
              gap-5
            "
                    >

                        <motion.a
                            whileHover={{
                                y: -4,
                            }}
                            href="https://github.com/"
                            target="_blank"
                            className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-white/10
                transition
              "
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            whileHover={{
                                y: -4,
                            }}
                            href="https://linkedin.com/"
                            target="_blank"
                            className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-white/10
                transition
              "
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            whileHover={{
                                y: -4,
                            }}
                            href="https://t.me/"
                            target="_blank"
                            className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-white/10
                transition
              "
                        >
                            <FaTelegram />
                        </motion.a>

                    </div>

                </div>

            </div>

        </footer>
    );
}