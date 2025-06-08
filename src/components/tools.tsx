"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const tools = [
    { name: "Power Automate", src: "/logos/automate.png" },
    { name: "Chakra UI", src: "/logos/chakra.png" },
    { name: "C#", src: "/logos/csharp.png" },
    { name: "Docker", src: "/logos/docker.png" },
    { name: ".NET", src: "/logos/dotnet.png" },
    { name: "Git", src: "/logos/git.png" },
    { name: "GSAP", src: "/logos/gsap.svg" },
    { name: "JavaScript", src: "/logos/js.png" },
    { name: "MS SQL", src: "/logos/mssql.png" },
    { name: "MySQL", src: "/logos/mysql.png" },
    { name: "Next.js", src: "/logos/next.png" },
    { name: "Node", src: "/logos/node.png" },
    { name: "MS Office", src: "/logos/office.png" },
    { name: "Prisma", src: "/logos/prisma.png" },
    { name: "React", src: "/logos/react.png" },
    { name: "SourceTree", src: "/logos/sourcetree.png" },
    { name: "Tailwind", src: "/logos/tailwind.png" },
    { name: "TypeScript", src: "/logos/ts.png" }
];

const DISPLAY_COUNT = 7;

export default function Tools() {
    const [visibleTools, setVisibleTools] = useState(tools.slice(0, DISPLAY_COUNT));
    const queueIndex = useRef(DISPLAY_COUNT); // tracks global index

    useGSAP(() => {
        let i = 0;

        const animateNext = () => {
            const nextTool = tools[queueIndex.current % tools.length];
            queueIndex.current++;

            setVisibleTools(prev => {
                const updated = [...prev];

                // Only animate if new tool is different
                if (prev[i].name !== nextTool.name) {
                    updated[i] = nextTool;

                    gsap.fromTo(
                        `.tool-${i}`,
                        { opacity: 0, x: -10, y: 20, rotateZ: 90 },
                        { opacity: 1, x: 0, y: -20, rotateZ: 360, duration: 1.2, ease: "power3.out" }
                    );
                }

                return updated;
            });

            i = (i + 1) % DISPLAY_COUNT;
            setTimeout(animateNext, 900); // delay per item
        };

        const timeout = setTimeout(animateNext, 1000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className="w-[90%] sm:w-[95%] mx-auto my-30 pb-20 flex flex-col items-center sm:items-baseline gap-10">
            <div className="flex items-center gap-2 text-baseLight dark:text-baseDark text-lg font-[family-name:var(--font-geist-sans)]">
                <span className="text-4xl sm:text-7xl font-light">{'{'}</span>
                <span className="font-semibold">Tech stack</span>
                <span className="text-4xl sm:text-7xl font-light">{'}'}</span>
            </div>

            <div className="w-full flex flex-wrap justify-center sm:justify-between gap-6 text-baseLight dark:text-baseDark text-center">
                {visibleTools.map((tool, index) => (
                    <div
                        key={index}
                        className={`tool-item tool-${index} text-sm font-mono flex items-center justify-center flex-col gap-3 w-[140px] sm:w-[160px] md:w-[180px] h-[140px] sm:h-[160px] md:h-[180px]`}
                    >
                        <div className="relative w-[60px] sm:w-[70px] md:w-[100px] aspect-square">
                            <Image
                                src={tool.src}
                                alt={tool.name}
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}