"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HoverPreview() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (show) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [show]);

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-start pl-20 space-y-10">
            {/* Hover targets */}
            <div
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="text-4xl font-bold hover:text-gray-500 transition"
            >
                TWICE
            </div>

            {/* Hover image preview */}
            <div
                className="fixed z-50 pointer-events-none transition-opacity duration-300"
                style={{
                    left: position.x - 80,
                    top: position.y - 80 ,
                    opacity: show ? 1 : 0,
                }}
            >
                <div className="w-64 h-40 relative rounded-lg overflow-hidden shadow-lg border bg-white">
                    <Image
                        src="/projects/othello-1.png"
                        alt="Preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}