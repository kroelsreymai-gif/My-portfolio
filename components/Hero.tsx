"use client";

import { motion } from "framer-motion";

import {
    FaReact,
    FaLaravel,
} from "react-icons/fa";

import { SiFlutter } from "react-icons/si";

export default function Hero() {

    return (

        <section
            className="
        relative
        min-h-screen
        overflow-hidden
        px-8
        md:px-20
        pt-40
        flex
        items-center
        justify-between
        bg-[#0B0B0B]
      "
        >

            {/* Background Glow */}
            <div
                className="
          absolute
          right-[-200px]
          top-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            {/* LEFT CONTENT */}
            <div
                className="
          relative
          z-10
          flex-1
          max-w-3xl
        "
            >

                {/* Small Label */}
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
                        duration: 0.6,
                    }}
                    className="
            flex
            items-center
            gap-6
            mb-10
          "
                >

                    <p
                        className="
              uppercase
              tracking-[0.5em]
              text-blue-400
              text-sm
            "
                    >
                        Full Stack Developer
                    </p>

                    <div
                        className="
              w-24
              h-[1px]
              bg-blue-400
            "
                    />

                </motion.div>

                {/* BIG TITLE */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
            text-[90px]
            md:text-[180px]
            font-black
            leading-[0.9]
            tracking-[-0.08em]
            text-white
          "
                >
                    {/* Hi, I'm */}
                    <motion.span
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 100,
                                filter: "blur(10px)",
                            },

                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
      block
      text-white
    "
                    >
                        Hi, I’m
                    </motion.span>

                    {/* Mai */}
                    <motion.span
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 120,
                                scale: 1.2,
                                filter: "blur(12px)",
                            },

                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
      block
      bg-gradient-to-r
      from-blue-500
      via-white
      to-blue-300
      bg-[length:200%_200%]
      bg-clip-text
      text-transparent
      animate-gradient
    "
                    >
                        Mai
                    </motion.span>


                </motion.h1>

                {/* Subtitle */}
                <motion.p
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
            mt-10
            uppercase
            tracking-[0.7em]
            text-gray-500
            text-sm
          "
                >
                    Crafting Modern Digital Experiences
                </motion.p>

                {/* Description */}
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
            mt-10
            max-w-xl
            text-lg
            leading-9
            text-gray-400
          "
                >
                    Building modern web and mobile
                    applications with premium UI/UX
                    experiences, smooth animations,
                    and scalable frontend architecture.
                </motion.p>

                {/* Buttons */}
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
                    className="
            flex
            gap-6
            mt-14
            flex-wrap
          "
                >

                    <a
                        href="/Mai-CV.pdf"
                        target="_blank"
                        className="
    px-10
    py-4
    rounded-full
    border
    border-white/10
    bg-white/5
    hover:bg-white/10
    transition
  "
                    >
                        View CV
                    </a>
                </motion.div>

            </div>

            {/* Right Side Visual */}
            <div
                className="
    hidden
    lg:flex
    flex-1
    items-center
    justify-center
    relative
    h-screen
  "
            >

                {/* Blue Beam */}
                <div
                    className="
      absolute
      w-[700px]
      h-[700px]
      rounded-full
      bg-blue-500/20
      blur-3xl
      right-[-200px]
      top-1/2
      -translate-y-1/2
    "
                />

                {/* Curved Orbit Path */}
                <svg
                    className="
      absolute
      w-[500px]
      h-[700px]
    "
                    viewBox="0 0 500 700"
                    fill="none"
                >

                    <path
                        d="
        M250 50
        C450 150,
        450 550,
        250 650
      "
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />

                </svg>

                {/* React */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                    className="
      absolute
      top-[120px]
      left-[180px]
      w-24
      h-24
      rounded-full
      bg-blue-500/10
      border
      border-blue-400/20
      backdrop-blur-xl
      flex
      items-center
      justify-center
      text-blue-400
      text-5xl
      shadow-[0_0_40px_rgba(59,130,246,0.4)]
    "
                >
                    <FaReact />
                </motion.div>

                {/* Laravel */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}
                    className="
      absolute
      top-[320px]
      right-[80px]
      w-24
      h-24
      rounded-full
      bg-red-500/10
      border
      border-red-400/20
      backdrop-blur-xl
      flex
      items-center
      justify-center
      text-red-400
      text-5xl
      shadow-[0_0_40px_rgba(248,113,113,0.3)]
    "
                >
                    <FaLaravel />
                </motion.div>

                {/* Flutter */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="
      absolute
      bottom-[120px]
      left-[220px]
      w-24
      h-24
      rounded-full
      bg-blue-500/10
      border
      border-blue-300/20
      backdrop-blur-xl
      flex
      items-center
      justify-center
      text-blue-300
      text-5xl
      shadow-[0_0_40px_rgba(96,165,250,0.3)]
    "
                >
                    <SiFlutter />
                </motion.div>

                {/* Floating Particles */}
                <div
                    className="
      absolute
      top-[80px]
      right-[200px]
      w-2
      h-2
      rounded-full
      bg-blue-400
      shadow-[0_0_20px_rgba(59,130,246,1)]
    "
                />

                <div
                    className="
      absolute
      top-[250px]
      left-[250px]
      w-1.5
      h-1.5
      rounded-full
      bg-white
    "
                />

                <div
                    className="
      absolute
      bottom-[200px]
      right-[250px]
      w-2
      h-2
      rounded-full
      bg-blue-300
    "
                />

            </div>





        </section>
    );
}