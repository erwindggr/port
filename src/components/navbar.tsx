"use client";

import Link from "next/link";
import CvBtn from "./cvBtn";
import Logo from "./logo";
import SideBar from "./sideBar";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const route = [
        {
            name: 'Project',
            route: '/',
        },
        {
            name: 'About',
            route: '/',
        },
        {
            name: 'Contact',
            route: '/',
        },
    ];

    return (
        <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-100 ease-in-out ${scrolled ? 'bg-white/30 dark:bg-black/20 backdrop-blur-md shadow-sm' : ''}`}>
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