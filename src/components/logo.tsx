"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

export default function Logo() {
    const logoRef = useRef<HTMLHeadingElement>(null);
    const lastAnimationIndex = useRef<number | null>(null);

    const rotateX = () => {
        gsap.fromTo(
            logoRef.current,
            { rotationX: 0 },
            {
                rotationX: 360,
                duration: 0.85,
                ease: "power2.out",
            }
        );
    };

    const rotateY = () => {
        gsap.fromTo(
            logoRef.current,
            { rotationY: 0 },
            {
                rotationY: 360,
                duration: 0.85,
                ease: "power2.out",
            }
        );
    };

    const animations = [rotateX, rotateY];

    const handleHover = () => {
        let nextIndex: number;

        do {
            nextIndex = Math.floor(Math.random() * animations.length);
        } while (nextIndex === lastAnimationIndex.current);

        lastAnimationIndex.current = nextIndex;
        animations[nextIndex]();
    };

    return (
        <div>
            <Link href={'/'} >
                <h1 onMouseEnter={handleHover} className="border-2 border-baseLight dark:border-baseDark rounded-sm px-1 text-xl md:text-2xl font-semibold tracking-wider shadow-2xl font-[family-name:var(--font-geist-sans)]">ERW<span ref={logoRef} className="inline-block" >I</span>N</h1>
            </Link>
        </div>
    )
}