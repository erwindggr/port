"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin);

export default function Hero() {
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
            rotationX: -180,
            transformOrigin: "bottom center",
        });

        tl.to(charK, {
            rotationX: 0,
            duration: 1,
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
                    y: -50,
                    opacity: 0,
                    transformOrigin: "center center",
                },
                {
                    rotationY: 0,
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

        gsap.fromTo(".react-line",
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, duration: 0.55, ease: "power2.out", delay: 2.2 }
        );

        gsap.fromTo(".dotnet-line",
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: "power2.out", delay: 3 }
        );

        gsap.fromTo(".description",
            {
                text: "",
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1.8,
                ease: "rough({ clamp: true, points: 20, template: none.out })",
                delay: 3,
                scrambleText: {
                    text: '"I build & develop websites, front to back"',
                    chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    revealDelay: 1,
                },
            }
        );
    });

    return (
        <div className="w-full min-h-[95vh] flex items-center flex-col justify-center">
            <div>
                <div className="flex flex-wrap flex-col sm:flex-row gap-x-4">
                    <p className="fullstack text-[clamp(2rem,7vw,10rem)] font-bold overflow-hidden break-words leading-tight">
                        FULLSTACK<span className="text-purple-600 dark:text-pink-800">✦</span>
                    </p>
                    <p className="developer text-[clamp(2rem,7vw,10rem)] font-bold overflow-hidden break-words leading-tight">
                        DEVELOPER
                    </p>
                </div>
                <div className="flex gap-x-5">
                    <h2 className="react-line text-[clamp(0.7rem,3vw,7rem)]"><span style={{color: "#f29900"}}>•</span> <span style={{color: "#58c4dc"}}>REACT</span> / NEXT.JS</h2>
                    <p className="dotnet-line text-[clamp(0.7rem,3vw,7rem)]">& <span style={{color: "#5632d5"}}>.NET</span></p>
                </div>
            </div>

            <div className="mt-10 mb-10 md:mt-35 px-4 leading-relaxed">
                <p className="description font-[family-name:var(--font-geist-mono)] text-[clamp(0.65rem,2.5vw,1.2rem)] text-muted italic text-lightDarker dark:text-darkLighter">
                    *************
                </p>
            </div>
        </div>
    );
}
