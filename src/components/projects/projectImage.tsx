"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

type ProjectImageProps = {
    src: string[];
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectImage({ src }: ProjectImageProps) {
    const imgRefs = useRef<HTMLDivElement[]>([]);
    const setRef = (el: HTMLDivElement | null, index: number) => {
        if (el) imgRefs.current[index] = el;
    };

    useGSAP(() => {
        imgRefs.current.forEach((el, i) => {
            const variant = i % 3;

            const base = {
                opacity: 0,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 65%",
                },
            };

            let anim: gsap.TweenVars = {};

            if (variant === 0) {
                anim = { ...base, y: -20, scale: 0.9 };
            } else {
                anim = { ...base, y: -10, scale: 0.95 };
            }

            gsap.from(el, anim);
        });
    }, []);

    return (
        <div className="grid grid-cols-2 sm:w-full w-[90%] mx-auto mt-30 mb-10">
            {src.map((path, i) => {
                const isFullWidth =
                    i % 3 === 0 ||
                    (i % 3 !== 0 && i === src.length - 1 && src.length % 3 !== 0);

                return (
                    <div
                        key={i}
                        ref={(el) => setRef(el, i)}
                        className={`relative ${isFullWidth ? "col-span-2" : "col-span-1"
                            } aspect-[16/9] overflow-hidden`}
                    >
                        <Image
                            src={path}
                            alt={`project image ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </div>
                );
            })}
        </div>
    );
}