"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {

    const [selectedProject, setSelectedProject] =
        useState<any>(null);

    const projects = [
        {
            title: "Car Rental System",
            description:
                "A full stack car rental platform with booking management and responsive modern UI.",
            tech: "Laravel • MySQL • PHP",
            demo: "https://your-demo-link.com",
            github:
                "https://github.com/kroelsreymai-gif/cam-car-rental",
            image: "/images/cam-car-Rental.png",
        },

        {
            title: "Clothing Shop Website",
            description:
                "Modern fashion e-commerce frontend with responsive React components.",
            tech: "React • javascrip",
            demo: "https://vercel.com/kroelsreymai-gifs-projects/zuru-shop/HimZY19UsmDH2yfofqrCNJBHn1vz",
            github:
                "https://github.com/kroelsreymai-gif/Zuru-shop",
            image: "/images/zuru-shop.png",
        },

        {
            title: "Cambodia Framer Website",
            description:
                "Animated landing page inspired by Framer and Apple-style UI.",
            tech: "HTML • CSS • Animation",
            demo: "https://vercel.com/kroelsreymai-gifs-projects/web-assignment/9Vq18m21obnLbEoATisu9xAW5mse",
            github:
                "https://github.com/kroelsreymai-gif/web-assignment ",
            image: "/images/cambodian-Fram.png",
        },

        {
            title: "Fix My City App",
            description:
                "Mobile app for reporting city problems with modern UI/UX.",
            tech: "Flutter • Firebase • Figma",
            demo: "https://vercel.com/kroelsreymai-gifs-projects/fix-my-city/9qnT7yyetupJnmnbagJj59yDGbSs",
            github:
                "https://github.com/kroelsreymai-gif/fix_my_city",
            image: "/images/fix-my-city.jpg",
        },
    ];

    return (
        <section
            id="projects"
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
          top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            <div
                className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
            >

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="
            text-5xl
            md:text-6xl
            font-bold
            text-center
            mb-20
          "
                >
                    Featured Projects
                </motion.h2>

                {/* Grid */}
                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
                >

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="
                group
                relative
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                overflow-hidden
              "
                        >

                            {/* Image */}
                            <div
                                onClick={() =>
                                    setSelectedProject(project)
                                }
                                className="cursor-pointer"
                            >

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                    w-full
                    h-64
                    object-cover
                    rounded-2xl
                    mb-6
                    hover:scale-[1.02]
                    transition
                    duration-500
                  "
                                />

                            </div>

                            {/* Hover Glow */}
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

                                <h3
                                    className="
                    text-3xl
                    font-semibold
                    mb-4
                  "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                    text-gray-400
                    leading-7
                    mb-6
                  "
                                >
                                    {project.description}
                                </p>

                                <p
                                    className="
                    text-blue-400
                    mb-6
                  "
                                >
                                    {project.tech}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-4">

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="
                      px-6
                      py-3
                      rounded-full
                      bg-blue-500
                    "
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="
                      px-6
                      py-3
                      rounded-full
                      border
                      border-white/20
                    "
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* Modal */}
            {selectedProject && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-md
            z-[999]
            flex
            items-center
            justify-center
            p-6
          "
                    onClick={() =>
                        setSelectedProject(null)
                    }
                >

                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        className="
              bg-[#111]
              border
              border-white/10
              rounded-3xl
              max-w-3xl
              w-full
              overflow-hidden
            "
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="
                w-full
                h-[400px]
                object-cover
              "
                        />

                        <div className="p-8">

                            <h2
                                className="
                  text-4xl
                  font-bold
                  mb-4
                "
                            >
                                {selectedProject.title}
                            </h2>

                            <p
                                className="
                  text-gray-400
                  leading-7
                  mb-6
                "
                            >
                                {selectedProject.description}
                            </p>

                            <p
                                className="
                  text-blue-400
                  mb-8
                "
                            >
                                {selectedProject.tech}
                            </p>

                            <div className="flex gap-4">

                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    className="
                    px-6
                    py-3
                    rounded-full
                    bg-blue-500
                  "
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-white/20
                  "
                                >
                                    GitHub
                                </a>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </section>
    );
}