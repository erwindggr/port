"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrambleTextPlugin } from "gsap/all";
import HeroMsg from "./heroMsg";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin);

export default function Hero() {
    const arrowWrapperRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        const fullstack = new SplitText(".fullstack", { type: "chars" });

        // Animate 'F' (first character)
        const charF = fullstack.chars[0];
        gsap.set(charF, {
            rotationX: 180,
            transformOrigin: "top center",
        });

        tl.to(charF, {
            rotationX: 0,
            duration: 1,
            ease: "bounce.out",
        }, 0);

        // Animate (last character of FULLSTACK)
        const charK = fullstack.chars[fullstack.chars.length - 1];
        gsap.set(charK, {
            rotationX: 180,
            transformOrigin: "bottom center",
        });

        tl.to(charK, {
            rotationX: 0,
            duration: 1.5,
            ease: "bounce.out",
        }, 0.2); // slight delay after 'F'

        // Animate other chars (excluding F and K)
        fullstack.chars.forEach((char, i) => {
            if (char === charF || char === charK) return;

            const type = Math.random() < 0.5 ? "A" : "B";
            const delay = i * 0.04;

            if (type === "A") {
                tl.from(char, {
                    x: gsap.utils.random(-100, 100),
                    y: gsap.utils.random(-100, 100),
                    rotation: gsap.utils.random(-180, 180),
                    opacity: 0,
                    scale: gsap.utils.random(0.5, 1.2),
                    duration: 1,
                    ease: "power3.out",
                }, delay);
            } else {
                tl.from(char, {
                    y: gsap.utils.random(100, 200),
                    rotationX: gsap.utils.random(-90, 90),
                    opacity: 0,
                    skewX: gsap.utils.random(-45, 45),
                    scale: gsap.utils.random(0.8, 1.3),
                    duration: 1.2,
                    ease: "back.out(1.7)",
                }, delay);
            }
        });

        const delayAfterFullstack = fullstack.chars.length * 0.04 + 0.6;
        const developerSplit = new SplitText(".developer", { type: "words,chars" });

        developerSplit.words.forEach((word, i) => {
            const delay = delayAfterFullstack + i * 0.25;

            tl.fromTo(word,
                {
                    rotationY: 1080,
                    rotateZ: -5,
                    y: -50,
                    opacity: 0,
                    transformOrigin: "center center",
                },
                {
                    rotationY: 0,
                    rotateZ: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                },
                delay
            );
        });

        const rDropDelay = 1.4;
        const charR = developerSplit.chars[developerSplit.chars.length - 1];
        const charD = developerSplit.chars[0];

        gsap.to(charD, {
            rotationZ: 0,
            skewY: 0,
            y: 0,
            x: -15,
            transformOrigin: "left top",
            duration: 0.6,
            ease: "power2.out",
            delay: rDropDelay,
            onComplete: () => {
                gsap.to(charD, {
                    rotationZ: 0,
                    y: 0,
                    x: 0,
                    skewY: 0,
                    duration: 0.25,
                    ease: "power2.inOut",
                });
            },
        });

        gsap.to(charR, {
            rotationZ: 0,
            skewY: 0,
            y: 0,
            x: 15,
            transformOrigin: "left top",
            duration: 0.6,
            ease: "power2.out",
            delay: rDropDelay,
            onComplete: () => {
                gsap.to(charR, {
                    rotationZ: 0,
                    y: 0,
                    x: 0,
                    skewY: 0,
                    duration: 0.25,
                    ease: "power2.inOut",
                });
            },
        });

        gsap.fromTo(
            arrowWrapperRef.current,
            { opacity: 0, y: -5 },
            {
                opacity: 1,
                y: -5,
                duration: 0.8,
                delay: 1.8,
                ease: "power1.out",
            }
        );

        gsap.to(arrowWrapperRef.current, {
            y: -15,
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.9,
        });
    });

    return (
        <div className="relative w-[90%] mx-auto min-h-[100vh] flex items-center flex-col justify-around gap-y-5 sm:gap-y-30 font-[family-name:var(--font-noto-sans)]">
            <div className="py-10 w-full" />
            <div className="w-full">
                <div className="flex flex-wrap flex-col gap-x-4 ">
                    <p className="fullstack text-[clamp(3.2rem,10vw,10rem)] font-bold overflow-hidden break-words leading-tight mb-[-20] lg:mb-[-50]">
                        FULLSTACK<span className="text-purple-600 dark:text-pink-800">✦</span>
                    </p>

                    <p className="developer text-[#31363F] text-end text-[clamp(3.2rem,10vw,10rem)] font-bold overflow-hidden break-words leading-tight">
                        DEVELOPER
                    </p>
                </div>
            </div>
            <HeroMsg />
            <div className="w-full flex flex-col items-center pb-5">
                <a ref={arrowWrapperRef} href="#projects" className="text-sm font-semibold flex flex-col items-center gap-2 hover:text-darkFooter font-[family-name:var(--font-geist-mono)]">
                    Explore my work 👇
                </a>
            </div>
        </div>
    );
}
