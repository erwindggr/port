"use client";

import { useRef } from "react";
import { aboutMe, experience } from "@/data/all";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function About() {
    const aboutHeader = useRef<HTMLHeadingElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const AboutHeadsplit = new SplitText(aboutHeader.current, { type: "chars, words" });
        gsap.from(AboutHeadsplit.chars, {
            scrollTrigger: {
                trigger: ".aboutHead",
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

        gsap.from(aboutMeRef.current, {
            scrollTrigger: {
                trigger: ".introCont",
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

        gsap.from(experienceRef.current, {
            scrollTrigger: {
                trigger: ".experienceCont",
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
                        <h1 ref={aboutHeader} className="aboutHead text-[clamp(3.2rem,10vw,10rem)] font-[family-name:var(--font-noto-sans)] font-bold overflow-hidden break-words leading-tight">
                            About me.
                        </h1>
                    </div>

                    <div ref={aboutMeRef} className="introCont w-full flex flex-col xl:flex-row mb-20">
                        <div className="w-full xl:w-1/2 flex justify-start gap-5 xl:gap-0 xl:justify-between">
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>01</p></div>
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Introduction</p></div>
                        </div>

                        <div className="w-full xl:w-1/2 mt-2 xl:mt-0 flex flex-col gap-y-2">
                            {
                                aboutMe.map((about, idx) => (
                                    <div key={idx} className="">
                                        <p className="text-justify text-[clamp(1rem,2vw,1.2rem)] font-light">
                                            {about}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div ref={experienceRef} className="experienceCont w-full flex flex-col xl:flex-row">
                        <div className="w-full xl:w-1/2 flex justify-start gap-5 xl:gap-0 xl:justify-between">
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>02</p></div>
                            <div className="one xl:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Experience</p></div>
                        </div>

                        <div className="w-ful xl:w-1/2 mt-4 sm:mt-0 flex flex-col">
                            {
                                experience.map((experience, idx) => (
                                    <div key={idx} className={`w-full font-light flex flex-col justify-between border-b-1 ${idx === 0 ? "pb-5" : "py-5"}`}>
                                        <div className="flex">
                                            <div className="w-3/4 flex flex-col">
                                                <h5 className="text-[clamp(1rem,2vw,1.2rem)] font-medium">{experience.role} ✦ {experience.company} </h5>
                                                <p className="text-[clamp(0.8rem,2vw,1rem)] font-light italic mt-1">— {experience.desc} —</p>
                                            </div>
                                            <div className="w-1/4 flex justify-end">
                                                <p className="text-[clamp(0.8rem,2vw,1rem)]">
                                                    {experience.from} — {experience.to}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-[clamp(0.9rem,2vw,1rem)] text-justify font-light mt-2">{experience.work}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}