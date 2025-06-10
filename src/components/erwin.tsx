"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, useGSAP);

export default function Erwin() {
    const scrambleRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!scrambleRef.current) return;

        gsap.to(scrambleRef.current, {
            scrambleText: {
                text: "ERWIN GUNAWAN",
                chars: "ERWINDGGR",
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
        <div className="w-full mx-auto flex items-center justify-center mt-15 sm:mt-30">
            <p
                ref={scrambleRef}
                className="text-[clamp(2rem,10vw,13rem)] font-bold text-lightFooter dark:text-darkFooter font-[family-name:var(--font-playFair-display)]"
            >
                ** **
            </p>
        </div>
    );
}