"use client";

import { projects } from "@/data/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Projects() {
    const leftRefs = useRef<HTMLDivElement[]>([]);
    const rightRefs = useRef<HTMLDivElement[]>([]);

    // clear refs before render (to avoid duplicates)
    leftRefs.current = [];
    rightRefs.current = [];

    const handleEnter = (index: number) => {
        gsap.to(leftRefs.current[index], {
            x: 20,
            duration: 0.25,
            ease: "power2.out",
        });
        gsap.to(rightRefs.current[index], {
            x: -20,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const handleLeave = (index: number) => {
        gsap.to([leftRefs.current[index], rightRefs.current[index]], {
            x: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    return (
        <section className="space-y-10 w-[90%] sm:w-[85%] md:w-[60%] mx-auto pt-6 border-t border-[rgba(150,150,136,0.5)]">
            {projects.map((project, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                    className="flex flex-col md:flex-row justify-between border-b border-[rgba(150,150,136,0.5)] pb-6 hover:cursor-pointer"
                >
                    {/* Left side */}
                    <div
                        ref={(el) => {
                            if (el) leftRefs.current[index] = el;
                        }}
                    >
                        <h3 className="text-xl font-semibold text-baseLight dark:text-baseDark ">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-mono)]">{project.year}</p>
                    </div>

                    {/* Right side */}
                    <div
                        ref={(el) => {
                            if (el) rightRefs.current[index] = el;
                        }}
                        className="text-right mt-2 md:mt-0"
                    >
                        <p className="text-sm font-medium text-baseLight dark:text-baseDark font-[family-name:var(--font-geist-mono)]">
                            {project.tags}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-[family-name:var(--font-geist-mono)]">{project.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}