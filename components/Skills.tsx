"use client";

import { motion } from "framer-motion";

import {
    FaReact,
    FaLaravel,
    FaFigma,
    FaGithub,
} from "react-icons/fa";

import {
    SiFlutter,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiPhp,
} from "react-icons/si";

export default function Skills() {

    const categories = [
        {
            title: "Frontend",

            icon: <FaReact />,

            color: "text-cyan-400",

            skills: [
                {
                    name: "React",
                    icon: <FaReact />,
                },

                {
                    name: "Next.js",
                    icon: <SiNextdotjs />,
                },

                {
                    name: "JavaScript",
                    icon: <SiJavascript />,
                },

                {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss />,
                },
            ],
        },

        {
            title: "Backend",

            icon: <FaLaravel />,

            color: "text-red-400",

            skills: [
                {
                    name: "Laravel",
                    icon: <FaLaravel />,
                },

                {
                    name: "REST APIs",
                    icon: <SiFirebase />,
                },

                {
                    name: "Firebase",
                    icon: <SiFirebase />,
                },

                {
                    name: "PHP",
                    icon: <SiPhp />,
                },
            ],
        },

        {
            title: "Database",

            icon: <SiMongodb />,

            color: "text-green-400",

            skills: [
                {
                    name: "MongoDB",
                    icon: <SiMongodb />,
                },

                {
                    name: "MySQL",
                    icon: <SiMysql />,
                },

                {
                    name: "Firebase",
                    icon: <SiFirebase />,
                },
            ],
        },

        {
            title: "Tools",

            icon: <FaFigma />,

            color: "text-pink-400",

            skills: [
                {
                    name: "Figma",
                    icon: <FaFigma />,
                },

                {
                    name: "GitHub",
                    icon: <FaGithub />,
                },

                {
                    name: "VS Code",
                    icon: <SiJavascript />,
                },

                {
                    name: "Flutter",
                    icon: <SiFlutter />,
                },
            ],
        },
    ];

    return (

        <section
            className="
        relative
        py-32
        px-6
        overflow-hidden
      "
        >

            {/* Background Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Title */}
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.7,
                    }}

                    viewport={{ once: true }}

                    className="
            text-5xl
            md:text-7xl
            font-black
            text-center
            mb-20
          "
                >
                    Skills & Technologies
                </motion.h2>

                {/* Grid */}
                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
                >

                    {categories.map((category, index) => (

                        <motion.div
                            key={index}

                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            whileHover={{
                                y: -8,
                                scale: 1.02,
                            }}

                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}

                            viewport={{ once: true }}

                            className="
                group
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                overflow-hidden
              "
                        >

                            {/* Glow Hover */}
                            <div
                                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-blue-500/10
                  blur-2xl
                "
                            />

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Header */}
                                <div
                                    className="
                    flex
                    items-center
                    gap-4
                    mb-8
                  "
                                >

                                    {/* Main Icon */}
                                    <div
                                        className={`
                      text-4xl
                      ${category.color}
                    `}
                                    >
                                        {category.icon}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                      text-2xl
                      font-bold
                    "
                                    >
                                        {category.title}
                                    </h3>

                                </div>

                                {/* Skills */}
                                <div
                                    className="
                    relative
                    flex
                    flex-wrap
                    gap-4
                  "
                                >

                                    {/* Connection Line */}
                                    <div
                                        className="
                      absolute
                      top-1/2
                      left-0
                      w-full
                      h-[1px]
                      bg-gradient-to-r
                      from-transparent
                      via-blue-500/20
                      to-transparent
                    "
                                    />

                                    {category.skills.map((skill, i) => (

                                        <motion.div
                                            key={i}

                                            whileHover={{
                                                scale: 1.08,
                                                y: -3,
                                            }}

                                            className="
                        relative
                        px-4
                        py-3
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        text-gray-300
                        backdrop-blur-xl
                        overflow-hidden
                        flex
                        items-center
                        gap-3
                      "
                                        >

                                            {/* Glow */}
                                            <div
                                                className="
                          absolute
                          inset-0
                          opacity-0
                          hover:opacity-100
                          transition
                          duration-500
                          bg-blue-500/10
                        "
                                            />

                                            {/* Icon */}
                                            <div
                                                className="
                          relative
                          z-10
                          text-lg
                        "
                                            >
                                                {skill.icon}
                                            </div>

                                            {/* Text */}
                                            <span className="relative z-10">
                                                {skill.name}
                                            </span>

                                        </motion.div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}