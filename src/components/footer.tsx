"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Jakarta",
            };
            setTime(now.toLocaleTimeString("en-US", options));
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-[90%] sm:w-[95%] mx-auto border-b-5 border-lightFooter dark:border-darkFooter mb-10">
            <div className="flex items-center justify-between gap-6 text-lightFooter dark:text-darkFooter text-xl sm:text-2xl py-5">
                <div className="text-center sm:text-start text-lightFooter dark:text-darkFooter">
                    <p className="text-xs sm:text-lg uppercase tracking-widest font-bold font-mono">{`// Batam, Indonesia`}</p>
                </div>
                <div className="flex gap-1 sm:gap-5 items-center flex-col sm:flex-row">
                    <p className="text-xs sm:text-lg hidden sm:flex font-mono font-bold">[ CONTACT ] :</p>
                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com/in/erwindggr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="hover:text-blue-500 transition-colors duration-200" />
                        </a>
                        <a
                            href="mailto:erwin.dg8ts@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope className="hover:text-yellow-600 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
                <div className="text-xs sm:text-lg font-bold font-mono">[ GMT+7 ] {time}</div>
            </div>

        </footer>
    );
}