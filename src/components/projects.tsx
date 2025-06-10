"use client";

import { projects } from "@/data/all";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Projects() {
    const leftRefs = useRef<HTMLDivElement[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    leftRefs.current = [];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX - 200, y: e.clientY - 110 });
        };

        if (hoveredIndex !== null) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hoveredIndex]);

    const handleEnter = (index: number) => {
        setHoveredIndex(index);
        gsap.to(leftRefs.current[index], {
            x: 20,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const handleLeave = (index: number) => {
        setHoveredIndex(null);
        gsap.to(leftRefs.current[index], {
            x: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    useGSAP(() => {
        const split = new SplitText(".other-header", { type: "chars" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ".other-header",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            stagger: {
                amount: 0.6,
                from: "start",
            },
            duration: 1.2,
        });

        gsap.from(".content", {
            scrollTrigger: {
                trigger: ".other-header",
                start: "bottom 30%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            stagger: {
                amount: 0.6,
                from: "start",
            },
            duration: 1.2,
        });
    });


    return (
        <section className="w-[90%] sm:w-[95%] mx-auto">
            <div className="w-full relative z-[-1] mb-0 xl:mb-[-50]">
                <h2 className="other-header text-center my-30 text-[clamp(3.5rem,7vw,10rem)] font-bold font-[family-name:var(--font-noto-sans)] text-lightFooter dark:text-darkLighter">Others</h2>
            </div>
            {projects.map((project, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                    className="content flex flex-col md:flex-row justify-between border-b border-[rgba(150,150,136,0.5)] py-10 sm:py-20 hover:cursor-pointer hover:text-darkLighter dark:hover:text-lightDarker "
                >
                    <div
                        ref={(el: HTMLDivElement | null) => {
                            leftRefs.current[index] = el!;
                        }} className=""
                    >
                        <h3 className="text-[clamp(2rem,3vw,6rem)] font-semibold  font-[family-name:var(--font-noto-sans)]">
                            {project.title}
                        </h3>
                        <p className="text-[clamp(0.8rem,1vw,1rem)]  font-[family-name:var(--font-noto-sans)]">
                            {project.tags}
                        </p>
                    </div>
                </div>
            ))}

            {hoveredIndex !== null && (
                <div
                    className="fixed z-50 pointer-events-none transition-opacity duration-200"
                    style={{ left: position.x + 20, top: position.y + 20 }}
                >
                    <div className="w-96 h-60 relative overflow-hidden rounded-md bg-white dark:bg-zinc-900">
                        {/* Media */}
                        {projects[hoveredIndex].video ? (
                            <video
                                src={projects[hoveredIndex].video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={projects[hoveredIndex].image}
                                alt={projects[hoveredIndex].title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}

                        {/* Overlay info */}
                        <div className="absolute font-[family-name:var(--font-noto-sans)] bottom-0 left-0 w-full bg-baseDark dark:bg-baseLight  text-xs sm:text-sm px-3 py-2">
                            <p>{projects[hoveredIndex].description}</p>
                            <p className="font-semibold">{projects[hoveredIndex].year}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}