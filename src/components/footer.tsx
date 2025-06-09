"use client";

import { useEffect, useState } from "react";

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
        <footer className="w-[90%] sm:w-[95%] mx-auto mt-15 sm:mt-30">
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-15">
                {/* Interact Section */}
                <div className="flex justify-between sm:justify-start w-full gap-5 sm:gap-80">
                    <div>
                        <p className="font-[family-name:var(--font-geist-mono)] text-xs sm:text-base uppercase tracking-widest mb-2">
                            [LOCATION]
                        </p>
                        <p className="text-xs sm:text-base">
                            Batam, Indonesia
                        </p>
                    </div>

                    <div>
                        <p className="font-[family-name:var(--font-geist-mono)] uppercase tracking-widest mb-2 text-xs sm:text-base">
                            [FIND ME HERE]
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/your-profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline text-xs sm:text-base"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/your-handle"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline text-xs sm:text-base"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://glints.com/id/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline text-xs sm:text-base"
                                >
                                    Glints
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:erwin.lcz@gmail.com"
                                    className="hover:underline text-xs sm:text-base"
                                >
                                    erwin.lcz@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-[family-name:var(--font-geist-mono)] uppercase tracking-widest mb-2 text-xs sm:text-base">
                            [EXPLORE]
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <a href="#projects" className="hover:underline text-xs sm:text-base">Projects</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:underline text-xs sm:text-base">About</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline text-xs sm:text-base">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center sm:text-end">
                    <p className="text-xs uppercase tracking-widest sm:mb-[-30]">[ GMT+7 ]</p>
                    <div className="text-[clamp(2rem,6vw,7rem)] font-bold font-mono">{time}</div>
                </div>
            </div>
        </footer>
    );
}