"use client";

import { projects } from "@/data/all";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Projects() {
    const leftRefs = useRef<HTMLDivElement[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // const videoRef = useRef<HTMLVideoElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null); // for <Image>

    leftRefs.current = [];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX - 210, y: e.clientY - 150 });
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
            duration: 0.5,
            ease: "back.out(1.7)",
        });

        requestAnimationFrame(() => {
            if (imageWrapperRef.current) {
                gsap.fromTo(
                    imageWrapperRef.current,
                    { opacity: 0.5, scale: 0.01 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power3.out",
                    }
                );
            }
        });
    };

    const handleLeave = (index: number) => {
        setHoveredIndex(null);
        gsap.to(leftRefs.current[index], {
            x: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
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

        // 🔥 Add scroll shrink effect
        // gsap.to(".other-header", {
        //     scrollTrigger: {
        //         trigger: ".other-header",
        //         start: "center center",
        //         end: "bottom top",
        //         scrub: true,
        //     },
        //     scale: 0.4,
        //     y: 30,
        //     transformOrigin: "bottom left",
        //     ease: "none",
        // });

        gsap.from(".content", {
            scrollTrigger: {
                trigger: ".other-header",
                start: "center center",
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
        <section className="w-[90%] sm:w-[95%] mx-auto hidden lg:block font-[family-name:var(--font-noto-sans)]">
            <div className="w-full relative z-[-1]">
                <h2 className="other-header text-[clamp(3.5rem,7vw,10rem)] font-bold ">Projects &#x2935;</h2>
            </div>
            {projects.slice(1, 5).map((project, index) => (
                <Link href={project.url} key={index}>
                    <div
                        onMouseEnter={() => handleEnter(index + 1)}
                        onMouseLeave={() => handleLeave(index + 1)}
                        className="content flex flex-col md:flex-row justify-between border-b hover:border-lightFooter dark:hover:border-darkFooter py-15 hover:cursor-pointer hover:text-lightFooter dark:hover:text-darkFooter"
                    >
                        <div
                            ref={(el: HTMLDivElement | null) => {
                                leftRefs.current[index] = el!;
                            }}
                            className="flex flex-row w-full items-center justify-between flex-wrap sm:flex-nowrap"
                        >
                            <h3 className="w-3/6 text-base sm:text-4xl font-semibold font-[family-name:var(--font-noto-sans)] min-w-[8rem]">
                                {project.title}
                            </h3>
                            <div className="flex w-3/6 mr-8">
                                <p className="text-sm sm:text-base font-[family-name:var(--font-noto-sans)] flex-1">
                                    {project.description}
                                </p>
                                <p className="text-sm sm:text-base font-[family-name:var(--font-noto-sans)] flex-1">
                                    {project.tags}
                                </p>
                                <p className="text-sm sm:text-base font-[family-name:var(--font-noto-sans)] flex-1 text-right">
                                    {project.year}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <div className="mt-20 flex justify-center">
                <Link
                    href="/projects"
                    className="px-5 py-3 font-[family-name:var(--font-noto-sans)] relative rounded-full duration-300 border-2 font-semibold active:text-lightFooter active:border-lightFooter border-baseLight dark:border-baseDark hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:border-darkFooter dark:active:text-darkFooter"
                >
                    See more
                </Link>
            </div>

            {hoveredIndex !== null && (
                <div
                    className="fixed z-50 pointer-events-none font-[family-name:var(--font-noto-sans)]"
                    style={{ left: position.x + 20, top: position.y + 20 }}
                >
                    <div className="w-100 rounded-md p-2 relative overflow-hidden bg-baseLight dark:bg-baseDark">
                        {/* Media */}
                        <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                            {projects[hoveredIndex].video ? (
                                <div
                                    ref={imageWrapperRef}
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
                                >
                                    <video
                                        src={projects[hoveredIndex].video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inline-block top-0 left-0 w-full h-full object-cover rounded-sm"
                                    />
                                </div>
                            ) : (
                                <div
                                    ref={imageWrapperRef}
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
                                >
                                    {/* <Image
                                        src={projects[hoveredIndex].image}
                                        alt={projects[hoveredIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    /> */}
                                    <Image
                                        src={projects[hoveredIndex].image}
                                        alt={projects[hoveredIndex].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />

                                </div>
                            )}
                            {/* "View" badge in the center */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                <div className="bg-black/70 text-white text-sm px-4 py-2 rounded-full font-semibold">
                                    View
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}