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

        gsap.from(split.words, {
            opacity: 0,
            rotationX: -120,
            y: 20,
            stagger: 0.05,
            delay: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    }, { dependencies: [message] });

    return (
        <div className="mt-10 md:mt-30 px-4 leading-relaxed w-[60%] sm:w-[95%] mx-auto">
            <p
                ref={msgRef}
                className="description text-center font-[family-name:var(--font-noto-sans)] text-[clamp(0.95rem,2.5vw,1.2rem)] text-muted italic text-lightDarker dark:text-darkLighter"
            >
                {message}
            </p>
        </div>
    );
}