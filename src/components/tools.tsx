"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { tools } from "@/data/all";

const DISPLAY_COUNT = 6;

gsap.registerPlugin(useGSAP);

export default function Tools() {
    const [startIndex, setStartIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const getVisibleTools = () => {
        const end = startIndex + DISPLAY_COUNT;
        if (end <= tools.length) return tools.slice(startIndex, end);
        return [...tools.slice(startIndex), ...tools.slice(0, end - tools.length)];
    };

    const visibleTools = getVisibleTools();

    useGSAP(() => {
        const directions = ["top", "bottom", "left", "right"] as const;
        type Direction = typeof directions[number];

        const fromValues: Record<Direction, { x: number; y: number }> = {
            top: { y: -40, x: 0 },
            bottom: { y: 40, x: 0 },
            left: { x: -40, y: 0 },
            right: { x: 40, y: 0 }
        };

        const animate = () => {
            const elements = containerRef.current?.querySelectorAll(".tools") || [];

            elements.forEach((el, index) => {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const animFrom = fromValues[dir];

                gsap.from(el, {
                    ...animFrom,
                    opacity: 0,
                    duration: 1,
                    delay: index * 0.1,
                    ease: "power4.out"
                });
            });

            // Update visible toolset after animation
            setTimeout(() => {
                setStartIndex(prev => (prev + DISPLAY_COUNT) % tools.length);
            }, 3000);
        };

        animate();
    }, [startIndex]);

    return (
        <>
            <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto mt-2 sm:mt-20 flex items-center justify-baselin gap-2 text-baseLight dark:text-baseDark text-lg font-[family-name:var(--font-geist-sans)]">
                {/* <span className="text-4xl sm:text-7xl font-light">{'{'}</span> */}
                {/* <span className="font-semibold text-sm sm:text-xl">I'm working with</span> */}
                <span className="font-semibold text-sm sm:text-xl">Tools & Side Projects</span>
                {/* <span className="text-4xl sm:text-7xl font-light">{'}'}</span> */}
            </div>

            <div
                ref={containerRef}
                className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto py-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center"
            >
                {visibleTools.map((name, idx) => (
                    <div
                        key={`${startIndex}-${idx}`}
                        className="text-xs font-[family-name:var(--font-geist-mono)] font-bold px-4 py-2 shadow-sm bg-baseLight/50 dark:bg-baseDark/50 text-baseDark dark:text-baseLight w-full text-center"
                    >
                        <p className="tools">{name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}