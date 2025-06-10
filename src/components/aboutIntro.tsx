"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { aboutMe } from "@/data/all";

gsap.registerPlugin(useGSAP, SplitText);

export default function AboutIntro() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = new SplitText(headingRef.current, { type: "chars, words" });

        gsap.from(split.chars, {
            y: -20,
            rotateY: 90,
            opacity: 0,
            rotateX: -120,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.out",
        });

        gsap.from(textRef.current, {
            opacity: 0,
            duration: 5,
        })
    });

    return (
        <div className="w-[90%] sm:w-[85%] md:w-[60%] mt-30 sm:mt-40 mx-auto">
            <div className="border-b-1" style={{ borderColor: 'rgba(150, 150, 136, 0.3)' }}>
                <h4 ref={headingRef} className="aboutHeading font-bold font-sans text-[clamp(1.9rem,4vw,5rem)] text-lightFooter dark:text-darkFooter">
                    Hello, I'm Erwin Gunawan ✌️
                </h4>
            </div>

            <div ref={textRef} className="mt-10 flex justify-between gap-y-5 flex-col font-[family-name:var(--font-geist-mono)]" >
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