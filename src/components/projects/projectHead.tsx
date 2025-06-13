"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type ProjectHeadProps = {
    title: string;
    year: number;
    desc: string;
    shortDesc: string;
};

export default function ProjectHead({ title, year, desc, shortDesc }: ProjectHeadProps) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const detailRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: ".project-description",
                start: "top 90%",
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

        gsap.from(detailRef.current, {
            scrollTrigger: {
                trigger: ".project-description",
                start: "top 90%",
            },
            y: -100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            duration: 1.2,
        })
    });

    return (
        <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto">
            <div className="image-container flex justify-between flex-col font-[family-name:var(--font-noto-sans)]" >
                <div className="w-full min-h-screen flex flex-col justify-center gap-10">
                    <div className=" flex justify-center items-center">
                        <p ref={textRef} className="project-description text-justify font-light py-10 text-[clamp(1rem,2vw,1.8rem)]">
                            {desc}
                        </p>
                    </div>
                    <div ref={detailRef} className="w-full flex justify-between border-t-1 pt-5">
                        <div className="w-1/2 sm:w-4/6">
                            <p className="text-[clamp(0.9rem,2vw,1.35rem)]">{title}</p>
                        </div>
                        <div className="w-1/2 sm:w-2/6">
                            <p className="text-[clamp(0.9rem,2vw,1rem)]">{year}</p>
                            <p className="text-[clamp(0.8rem,2vw,1rem)]">{shortDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}