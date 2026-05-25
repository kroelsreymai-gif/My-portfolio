"use client";

import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaEnvelope,
} from "react-icons/fa";

export default function Contact() {

    const contacts = [
        {
            title: "Email",
            value: "kroelsreymai@email.com",
            icon: <FaEnvelope />,
            link: "mailto:kroelsreymai@email.com",
            color: "text-blue-400",
        },

        {
            title: "GitHub",
            value: "github.com/kroelsreymai-gif",
            icon: <FaGithub />,
            link: "https://github.com//kroelsreymai-gif",
            color: "text-white",
        },

        {
            title: "LinkedIn",
            value: "linkedin.com/in/sreymai kroel",
            icon: <FaLinkedin />,
            link: "https://linkedin.com/sreymai-kroel-79a32b3b3?",
            color: "text-blue-500",
        },

        {
            title: "Telegram",
            value: "@Kroel Sreymai",
            icon: <FaTelegram />,
            link: "https://t.me//kroel_sreymai",
            color: "text-cyan-400",
        },
    ];

    return (

        <main
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
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
            />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Heading */}
                <motion.div
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
                    className="text-center"
                >

                    <p
                        className="
              uppercase
              tracking-[0.5em]
              text-blue-400
              text-sm
              mb-6
            "
                    >
                        Contact
                    </p>

                    <h2
                        className="
              text-5xl
              md:text-7xl
              font-black
            "
                    >
                        Let’s Connect
                    </h2>

                    <p
                        className="
              mt-8
              max-w-2xl
              mx-auto
              text-gray-400
              leading-8
            "
                    >
                        Feel free to contact me for
                        internships, collaborations,
                        freelance work, or creative ideas.
                    </p>

                </motion.div>

                {/* Cards */}
                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            mt-24
          "
                >

                    {contacts.map((contact, index) => (

                        <motion.a
                            key={index}
                            href={contact.link}
                            target="_blank"

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
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
              "
                        >

                            {/* Glow */}
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

                            {/* Shine */}
                            <div
                                className="
                  absolute
                  inset-0
                  overflow-hidden
                "
                            >

                                <div
                                    className="
                    absolute
                    top-0
                    left-[-100%]
                    w-full
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    group-hover:left-[100%]
                    transition-all
                    duration-1000
                  "
                                />

                            </div>

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Icon */}
                                <div
                                    className={`
                    text-5xl
                    mb-6
                    ${contact.color}
                    group-hover:scale-110
                    transition
                    duration-500
                  `}
                                >
                                    {contact.icon}
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                    text-3xl
                    font-bold
                    mb-3
                  "
                                >
                                    {contact.title}
                                </h3>

                                {/* Value */}
                                <p
                                    className="
                    text-gray-400
                  "
                                >
                                    {contact.value}
                                </p>

                            </div>

                        </motion.a>

                    ))}

                </div>

            </div>

        </main>
    );
}