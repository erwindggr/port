"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Icon Button */}
            <button
                onClick={toggleDrawer}
                className="md:hidden p-2 z-50 relative"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Drawer */}
            <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white dark:bg-black z-80 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full justify-between flex flex-col">
                    <div className="flex flex-col gap-6 pt-20 pl-10">
                        <Link href="/" className="text-3xl text-baseLight dark:text-baseDark font-semibold font-[family-name:var(--font-geist-sans)]">Project</Link>
                        <Link href="/" className="text-3xl text-baseLight dark:text-baseDark font-semibold font-[family-name:var(--font-geist-sans)]">About</Link>
                        <Link href="/" className="text-3xl text-baseLight dark:text-baseDark font-semibold font-[family-name:var(--font-geist-sans)]">Contact</Link>
                    </div>

                    <div className="pb-20 flex justify-center">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 relative py-2 text-xl rounded-full duration-300 border-2 font-semibold border-baseLight dark:border-baseDark"
                        >
                            Get CV
                        </a>
                    </div>

                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleDrawer}
                    className="fixed inset-0 bg-black/80 z-30"
                />
            )}
        </>
    );
}