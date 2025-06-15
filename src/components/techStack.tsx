"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type Category = "Front-end" | "Back-end" | "Software" | "Etc";

type TechStackMap = {
    [key in Category]: string[];
};

const techStacks: TechStackMap = {
    "Front-end": ["react", "next", "tailwind", "chakra", "gsap", "js", "ts"],
    "Back-end": ["node", "mysql", "mssql", "prisma", "dotnet", "csharp"],
    "Software": ["git", "sourcetree", "docker", "github", "postman", "office", "vs-code", "visualstudio"],
    "Etc": ["automate", "notion"],
};

const categories = Object.keys(techStacks) as Category[];

export default function TechStackSection() {
    const [active, setActive] = useState<Category>("Front-end");
    const itemsRef = useRef<HTMLDivElement[]>([]);

    // Animate on category change
    useEffect(() => {
        if (!itemsRef.current) return;

        gsap.fromTo(
            itemsRef.current,
            {
                opacity: 0,
                y: 20,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05,
            }
        );
    }, [active]);

    return (
        <section className="w-[90%] sm:w-[95%] mx-auto mt-40 font-[family-name:var(--font-noto-sans)] mb-20 sm:mb-0">
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-15 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-5 py-3 rounded-full border-2 font-semibold transition-colors duration-300 text-sm sm:text-base font-[family-name:var(--font-noto-sans)] relative hover:cursor-pointer ${active === cat
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black dark:text-white border-neutral-500"
                            } border-baseLight dark:border-baseDark hover:bg-zinc-200 dark:hover:bg-zinc-800 active:text-lightFooter active:border-lightFooter dark:active:border-darkFooter dark:active:text-darkFooter`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Stack Items */}
            <div className="flex flex-wrap justify-center gap-6">
                {techStacks[active].map((tech, index) => (
                    <div
                        key={tech}
                        ref={(el) => {
                            if (el) itemsRef.current[index] = el;
                        }}
                        className="tech-item flex flex-col items-center w-24"
                    >
                        <div className="relative w-16 h-16 mb-2">
                            <Image
                                src={`/logos/${tech}.${["gsap", "next"].includes(tech) ? "svg" : "png"}`}
                                alt={tech}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-xs capitalize">{tech}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}