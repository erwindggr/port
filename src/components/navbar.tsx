"use client";

import Link from "next/link";
import CvBtn from "./cvBtn";
import Logo from "./logo";
import SideBar from "./sideBar";
import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > window.innerHeight) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    gsap.to(navRef.current, {
                        y: "-100%",
                        duration: 0.1,
                        ease: "expo.out"
                    });
                } else {
                    // Scrolling up
                    gsap.to(navRef.current, {
                        y: "0%",
                        duration: 0.1,
                        ease: "expo.out"
                    });
                }
            } else {
                // Show if near top
                gsap.to(navRef.current, {
                    y: "0%",
                    duration: 0.1,
                    ease: "expo.out"
                });
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const route = [
        {
            name: 'Project',
            route: '/#projects',
        },
        {
            name: 'About',
            route: '/about',
        },
        {
            name: 'Contact',
            route: '/',
        },
    ];

    useGSAP(() => {

    })

    return (
        <div ref={navRef} className={`w-full fixed top-0 left-0 z-50 transition-all duration-100 ease-in-out ${scrolled ? 'bg-white/30 dark:bg-black/60 backdrop-blur-lg shadow-sm' : ''}`}>
            <div className="w-[90%] sm:w-[95%] mx-auto flex items-center justify-between py-4 border-b-1" style={{ borderColor: 'rgba(150, 150, 136, 0.3)' }}>

                <Logo />

                <div className="hidden md:flex md:gap-5">
                    {
                        route.map((item, index) => (
                            <Link key={index} href={item.route}>
                                <p className="text-lg px-4 py-2 text-lightDarker dark:text-darkLighter hover:text-baseLight hover:dark:text-baseDark font-semibold font-[family-name:var(--font-geist-sans)]">{item.name}</p>
                            </Link>
                        ))
                    }
                </div>

                <CvBtn />

                <SideBar />

            </div>
        </div>
    )
}