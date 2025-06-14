"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen(!isOpen);

    // Disable scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Animation
    useGSAP(() => {
        if (!isOpen || !drawerRef.current) return;

        requestAnimationFrame(() => {
            // Animate drawer entrance
            gsap.fromTo(
                drawerRef.current,
                { opacity: 0, y: 50, transform: "translateY(50px)" },
                {
                    opacity: 1,
                    y: 0,
                    transform: "translateY(0)",
                    duration: 0.5,
                    ease: "power3.out",
                }
            );

            // Animate nav links
            gsap.fromTo(
                linkRefs.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.1,
                    delay: 0.2,
                }
            );

            // Animate Get CV button
            if (buttonRef.current) {
                gsap.fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        delay: 0.4,
                    }
                );
            }
        });
    }, [isOpen]);

    return (
        <>
            <button
                onClick={toggle}
                className="md:hidden p-2 z-[60] fixed top-4 right-4"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={45} /> : <Menu size={25} />}
            </button>

            {isOpen && (
                <div
                    ref={drawerRef}
                    className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col items-center justify-center px-8 py-20 text-center transition-opacity duration-300"
                >
                    <div ref={linkRefs} className="flex flex-col gap-6 text-4xl font-semibold font-[family-name:var(--font-geist-sans)] text-dark dark:text-white">
                        <Link href="/" onClick={toggle}>
                            <span className="inline-block">Home</span>
                        </Link>
                        <Link href="/projects" onClick={toggle}>
                            <span className="inline-block">Projects</span>
                        </Link>
                        <Link href="/about" onClick={toggle}>
                            <span className="inline-block">About</span>
                        </Link>
                        <Link href="/contact" onClick={toggle}>
                            <span className="inline-block">Contact</span>
                        </Link>
                    </div>

                    <div ref={buttonRef} className="mt-16">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 mt-10 rounded-full border-2 text-lg font-semibold border-black dark:border-white"
                        >
                            Get CV
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}