"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProjectOverviewProps = {
    overview: string;
    projectGoals: string;
    softSkill: string[];
    tech: string[];
};

export default function ProjectOverview({ overview, projectGoals, softSkill, tech }: ProjectOverviewProps) {

    useGSAP(() => {
        gsap.from(".one", {
            scrollTrigger: {
                trigger: ".one",
                start: "top 60%",
            },
            opacity: 0,
            y: -20,
            duration: 3
        });

        gsap.from(".goals", {
            scrollTrigger: {
                trigger: ".goals",
                start: "top 60%",
            },
            opacity: 0,
            y: -20,
            duration: 3
        });

        gsap.from(".softskill", {
            scrollTrigger: {
                trigger: ".softskill",
                start: "top 60%",
            },
            opacity: 0,
            y: -20,
            duration: 3
        });

        gsap.from(".tech", {
            scrollTrigger: {
                trigger: ".tech",
                start: "top 60%",
            },
            opacity: 0,
            y: -20,
            duration: 3
        });
    })
    return (
        <div className="w-[90%] sm:w-[95%] mx-auto">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 flex justify-start gap-5 sm:gap-0 sm:justify-between">
                    <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>01</p></div>
                    <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Project Overview</p></div>
                </div>

                <div className="w-full sm:w-1/2">
                    <div className="flex flex-col">
                        <div className="one mb-5 sm:mb-10">
                            <p className="text-[clamp(1rem,2vw,1.35rem)]">
                                {overview}
                            </p>
                        </div>

                        <div className="goals flex border-b-1 pt-5 pb-10">
                            <div className=" w-1/2 text-[clamp(1.2rem,2vw,2rem)]">
                                <p>GOALS</p>
                            </div>
                            <div className=" w-1/2 text-[clamp(1rem,2vw,1.35rem)]">
                                {projectGoals}
                            </div>
                        </div>

                        <div className="softskill flex border-b-1 pt-5 pb-10">
                            <div className=" w-1/2 text-[clamp(1.2rem,2vw,2rem)]">
                                <p>SOFT SKILL</p>
                            </div>
                            <div className=" w-1/2">
                                {
                                    softSkill.map((skill, idx) => (
                                        <div key={idx}>
                                            <p className="text-[clamp(1rem,2vw,1.35rem)]">{skill}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="tech flex border-b-1 pt-5 pb-10">
                            <div className=" w-1/2 text-[clamp(1.2rem,2vw,2rem)]">
                                <p>TECHNOLOGIES</p>
                            </div>
                            <div className=" w-1/2">
                                {
                                    tech.map((tool, idx) => (
                                        <div key={idx}>
                                            <p className="text-[clamp(1rem,2vw,1.35rem)]">{tool}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}