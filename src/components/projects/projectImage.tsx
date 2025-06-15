"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

type ProjectImageProps = {
    src: string[];
    featuredIndex?: number; // optionally pass index you want full-width
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectImage({ src, featuredIndex = -1 }: ProjectImageProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.utils.toArray<HTMLDivElement>(".gallery-img").forEach((el, i) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    delay: i * 0.05,
                }
            );
        });
    }, []);

    return (
        <div className="max-w-[2000px] mx-auto">
            <div
                ref={wrapperRef}
                className="w-[90%] sm:w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20"
            >
                {src.map((path, i) => {
                    const isFeatured = i === featuredIndex;

                    return (
                        <div
                            key={i}
                            className={`gallery-img relative aspect-[16/9] overflow-hidden ${isFeatured ? "sm:col-span-2" : ""
                                }`}
                        >
                            <Image
                                src={path}
                                alt={`project screenshot ${i + 1}`}
                                fill
                                className="object-contain"
                                priority={i === 0}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}