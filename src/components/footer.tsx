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
        <footer className="w-[90%] sm:w-[95%] mx-auto">
            <div className="flex items-center justify-between gap-6 text-lightDarker dark:text-darkLighter text-xl sm:text-2xl mt-10 sm:mt-0 mb-18 sm:mb-8">
                <div className="text-center sm:text-start text-lightDarker dark:text-darkLighter">
                    <p className="text-xs sm:text-lg uppercase tracking-widest font-bold font-mono">{`// Batam, Indonesia`}</p>
                </div>
                <div className="flex gap-1 sm:gap-5 items-center flex-col sm:flex-row">
                    <p className="text-xs sm:text-lg hidden sm:flex font-mono font-bold">[ CONTACT ] :</p>
                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="hover:text-blue-500 transition-colors duration-200" />
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            aria-label="Email"
                        >
                            <FaEnvelope className="hover:text-rose-400 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
                <div className="text-xs sm:text-lg font-bold font-mono">[ GMT+7 ] {time}</div>
            </div>

        </footer>
    );
}