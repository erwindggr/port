"use client";

import { projects } from "@/data/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Projects() {
    return (
        <section className="space-y-10 w-[90%] sm:w-[85%] md:w-[60%] mx-auto pt-6 border-t border-[rgba(150,150,136,0.5)]">

            {projects.map((project, index) => {
                const leftRef = useRef<HTMLDivElement>(null);
                const rightRef = useRef<HTMLDivElement>(null);

                const handleEnter = () => {
                    gsap.to(leftRef.current, {
                        x: 25,
                        duration: 0.25,
                        ease: "power2.out",
                    });
                    gsap.to(rightRef.current, {
                        x: -25,
                        duration: 0.25,
                        ease: "power2.out",
                    });
                };

                const handleLeave = () => {
                    gsap.to([leftRef.current, rightRef.current], {
                        x: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                    });
                };

                return (
                    <div
                        key={index}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        className="flex flex-col md:flex-row justify-between border-b border-[rgba(150,150,136,0.5)] pb-6"
                    >
                        {/* Left side: Title + Year */}
                        <div ref={leftRef}>
                            <h3 className="text-xl font-semibold text-baseLight dark:text-baseDark">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-400">{project.year}</p>
                        </div>

                        {/* Right side: Description + Tags */}
                        <div ref={rightRef} className="text-right mt-2 md:mt-0">
                            <p className="text-sm font-medium text-baseLight dark:text-baseDark">
                                {project.tags}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}