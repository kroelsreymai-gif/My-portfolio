"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [active, setActive] =
        useState("home");

    useEffect(() => {
        const handleScroll = () => {

            const sections = [
                "home",
                "skills",
                "projects",
                "contact",
            ];

            sections.forEach((section) => {
                const element =
                    document.getElementById(section);

                if (element) {
                    const rect =
                        element.getBoundingClientRect();

                    if (
                        rect.top <= 150 &&
                        rect.bottom >= 150
                    ) {
                        setActive(section);
                    }
                }
            });
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    const navItems = [
        "home",
        "skills",
        "projects",
        "contact",
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
      "
        >

            <div
                className="
          flex
          items-center
          gap-8
          px-8
          py-4
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        "
            >

                {/* Logo */}
                <a
                    href="#home"
                    className="
            font-semibold
            text-lg
            text-white
          "
                >
                    Mai.dev
                </a>

                {/* Nav Links */}
                <div
                    className="
            hidden
            md:flex
            items-center
            gap-6
          "
                >

                    {navItems.map((item) => (

                        <motion.a
                            key={item}
                            href={`#${item}`}
                            whileHover={{
                                scale: 1.08,
                            }}
                            className={`
                capitalize
                transition
                ${active === item
                                    ? "text-white"
                                    : "text-gray-400"
                                }
              `}
                        >
                            {item}
                        </motion.a>

                    ))}

                </div>

            </div>

        </motion.nav>
    );
}