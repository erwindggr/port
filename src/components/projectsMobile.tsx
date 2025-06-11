"use client";

import { projects } from "@/data/all";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function ProjectsMobile() {
    useGSAP(() => {
        const split = new SplitText(".mobile-project-header", {
            type: "words,chars",
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ".mobile-project-header",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        });

        // Advanced: Scale header on scroll
        gsap.to(".mobile-project-header", {
            scrollTrigger: {
                trigger: ".mobile-project-header",
                start: "center center",      // when header hits top of viewport
                end: "bottom top",     // until it's out of view
                scrub: true,
            },
            scale: 0.6,
            paddingBottom: -30,
            y: -120,
            transformOrigin: "bottom left",
            ease: "none",
        });

        gsap.utils.toArray(".project-card").forEach((card: any) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 40,
                duration: 0.6,
                ease: "power2.out",
            });
        });

    });

    return (
        <section className="w-full min-h-screen mt-40 sm:mt-45 lg:hidden">
            <div className="w-[90%] sm:w-[95%] mx-auto relative z-5 mb-5">
                <h2 className="mobile-project-header text-[clamp(3rem,7vw,10rem)] font-bold font-[family-name:var(--font-noto-sans)]">Projects &#x2935;</h2>
            </div>

            <div className="flex flex-col gap-16 w-[90%] sm:w-[95%] mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="project-card flex flex-col gap-4">
                        {/* Image/Video Preview */}
                        <div className="w-full overflow-hidden rounded-md aspect-[16/10]">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col gap-1 px-1">
                            <h3 className="text-lg font-semibold font-[family-name:var(--font-noto-sans)]">
                                {project.title}
                            </h3>

                            <div className="flex justify-between text-sm font-[family-name:var(--font-noto-sans)]">
                                <p>{project.tags}</p>
                                <p>{project.year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}