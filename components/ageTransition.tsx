"use client";

import { motion } from "framer-motion";

export default function PageTransition() {

    return (

        <motion.div
            initial={{
                opacity: 1,
            }}

            animate={{
                opacity: 0,
            }}

            transition={{
                duration: 1,
            }}

            className="
        fixed
        inset-0
        bg-black
        z-[99999]
        pointer-events-none
      "
        />

    );
}