"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { aboutMe } from "@/data/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function AboutIntro() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(headingRef.current, { type: "chars, words" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ".aboutHeader",
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

        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: ".aboutText",
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
        <div className="w-[90%] sm:w-[85%] md:w-[60%] mt-30 sm:mt-40 mx-auto">

            <div className="w-full mx-auto flex items-center justify-center mt-15">
                <p
                    ref={headingRef}
                    className="aboutHeader text-[clamp(2rem,5vw,13rem)] font-light font-[family-name:var(--font-geist-sans)]"
                >
                    ABOUT ME
                </p>
            </div>

            <div ref={textRef} className="aboutText mt-10 flex justify-between gap-y-3 sm:gap-y-6 flex-col font-[family-name:var(--font-noto-sans)]" >
                {
                    aboutMe.map((about, idx) => (
                        <div key={idx}>
                            <p className="1st flex-1 text-justify font-light text-[clamp(0.8rem,2vw,1.35rem)]">
                                {about}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}