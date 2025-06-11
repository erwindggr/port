"use client";

import { experience } from "@/data/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function AboutExperience() {
    const expHeadingRef = useRef<HTMLHeadingElement>(null);
    const expTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(expHeadingRef.current, { type: "chars, words" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ".experienceHeader",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            delay: 0.3,
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        });

        gsap.from(expTextRef.current, {
            scrollTrigger: {
                trigger: ".expText",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            delay: 0.3,
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        })
    });

    return (
        <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto">
            <div className="w-full mx-auto flex items-center justify-center mt-15">
                <p
                    ref={expHeadingRef}
                    className="experienceHeader text-[clamp(2rem,5vw,13rem)] font-bold text-lightFooter dark:text-darkFooter font-[family-name:var(--font-playFair-display)]"
                >
                    EXPERIENCE
                </p>
            </div>

            <div ref={expTextRef} className="expText w-full mt-10 font-[family-name:var(--font-noto-sans)] text-[clamp(0.8rem,2vw,1.35rem)] flex flex-col gap-y-8">
                {
                    experience.map((experience, idx) => (
                        <div key={idx} className="w-full p-2 flex justify-between">
                            <div className="w-3/4 flex flex-col">
                                <h5 className="">{experience.role} – {experience.company} </h5>
                                <p className="text-[clamp(0.8rem,2vw,1rem)] font-light italic mt-1">{experience.desc}</p>

                                <p className="text-[clamp(0.8rem,2vw,1rem)] text-lightFooter dark:text-darkFooter">{experience.work}</p>
                            </div>
                            <div className="w-1/4 flex justify-end">
                                <p className="text-[clamp(0.8rem,2vw,1rem)]">
                                    {experience.from} — {experience.to}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}