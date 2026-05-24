"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
    return (
        <Particles
            options={{
                fullScreen: {
                    enable: false,
                },

                background: {
                    color: "transparent",
                },

                particles: {
                    number: {
                        value: 40,
                    },

                    color: {
                        value: "#60A5FA",
                    },

                    opacity: {
                        value: 0.3,
                    },

                    size: {
                        value: 2,
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },

                    links: {
                        enable: true,
                        color: "#60A5FA",
                        opacity: 0.2,
                    },
                },
            }}
            className="absolute inset-0 z-0"
        />
    );
}