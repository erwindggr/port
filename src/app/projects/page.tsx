"use client";

import { projects } from "@/data/all";
import { useRef } from "react";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Projects() {
    const projectHeader = useRef<HTMLHeadingElement>(null);
    const projectList = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ProjectHeadsplit = new SplitText(projectHeader.current, { type: "chars, words" });
        gsap.from(ProjectHeadsplit.chars, {
            scrollTrigger: {
                trigger: ".projectHead",
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

        gsap.from(projectList.current, {
            scrollTrigger: {
                trigger: ".projectList",
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
        })
    });

    return (
        <section className="w-full mt-30 font-[family-name:var(--font-geist-sans)] mb-20">
            <div className="max-w-[2000px] mx-auto">
                <div className="w-[90%] sm:w-[95%] mx-auto">
                    <div className="w-full py-10 mb-10">
                        <h1 ref={projectHeader} className="projectHead text-[clamp(3.2rem,10vw,10rem)] font-[family-name:var(--font-noto-sans)] font-bold overflow-hidden break-words leading-tight">
                            Built with intent.
                        </h1>
                    </div>

                    <div ref={projectList} className="projectList w-full flex flex-col xl:flex-row">
                        <div className="w-full xl:w-1/2 flex justify-start gap-5 xl:gap-0 xl:justify-between">
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>01</p></div>
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Project Selection</p></div>
                        </div>

                        <div className="w-full xl:w-1/2 mt-10 sm:mt-0">
                            {projects.map((project, index) => (
                                <Link
                                    href={project.url}
                                    key={index}
                                    className="border-b text-xs sm:text-sm hover:text-lg hover:pl-2 hover:cursor-pointer hover:bg-black hover:text-white border-gray-400 py-6 xl:py-3 flex justify-between transition-all duration-150 ease-out"
                                >
                                    <h3 className="w-1/3">{project.title}</h3>
                                    <div className="w-2/3 flex justify-between mr-2 xl:mr-4">
                                        <p className="w-1/3">{project.description}</p>
                                        <p className="w-2/3 text-end">
                                            {project.tags}
                                            <span className="hidden sm:inline"> · {project.year}</span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}