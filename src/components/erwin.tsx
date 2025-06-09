"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, useGSAP);

export default function Hero() {
    const scrambleRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!scrambleRef.current) return;

        gsap.to(scrambleRef.current, {
            scrambleText: {
                text: "ERWIN GUNAWAN",
                chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                revealDelay: 0.5,
            },
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: scrambleRef.current,
                start: "top 80%", // More reliable
                once: true,
            },
        });
    });

    return (
        <div className="w-[90%] sm:w-[95%] mx-auto flex items-center justify-center">
            <p
                ref={scrambleRef}
                className="text-[clamp(3.5rem,10vw,13rem)] font-bold font-sans text-center"
            >
                ***************
            </p>
        </div>
    );
}