"use client";

import { useEffect, useState, useRef } from "react";
import { messages } from "@/data/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

export default function HeroMsg() {
    const [message, setMessage] = useState("");
    const msgRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessage(messages[randomIndex]);
    }, []);

    useGSAP(() => {
        if (!msgRef.current) return;

        const split = new SplitText(msgRef.current, { type: "words, chars", });
        // const words = split.words;

        const randomEffect = Math.random() < 0.5 ? "rise" : "drop";
        // const randomEffect = true ? "rise" : "drop";

        if (randomEffect === "rise") {
            gsap.from(split.words, {
                opacity: 0,
                rotationX: -120,
                y: 20,
                stagger: 0.05,
                delay: 3,
                duration: 0.5,
                ease: "power2.out",
            });
        } else {
            gsap.fromTo(
                split.words,
                { y: -60, x: 110, rotateZ: -160, opacity: 0 },
                {
                    y: 0,
                    x: 0,
                    rotateZ: 0,
                    opacity: 1,
                    ease: "bounce.out",
                    stagger: 0.02,
                    delay: 3,
                    duration: 1.2,
                }
            );
        }
    }, { dependencies: [message] });

    return (
        <div className="mt-10 mb-10 md:mt-35 px-4 leading-relaxed">
            <p
                ref={msgRef}
                className="description text-center font-[family-name:var(--font-geist-mono)] text-[clamp(0.65rem,2.5vw,1.2rem)] text-muted italic text-lightDarker dark:text-darkLighter"
            >
                {message}
            </p>
        </div>
    );
}