"use client";

import gsap from "gsap";
import { useRef } from "react";

export default function PortButton({ text }: { text: string }) {
    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleEnter = () => {
        gsap.to(btnRef.current, {
            scale: 1.05,
            y: -3,
            duration: 0.1,
            ease: "power2.out",
        });
    };

    const handleLeave = () => {
        gsap.to(btnRef.current, {
            scale: 1,
            y: 0,
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div>
            <a
                ref={btnRef}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                href="#"
                className="px-5 py-3 sm:px-7 sm:py-4 dark:active:text-darkFooter rounded-full font-bold relative border-2 border-baseLight dark:border-baseDark dark:active:border-darkFooter transition-colors duration-200"
                style={{ display: "inline-block" }}
            >
                {text}
            </a>
        </div>
    );
}