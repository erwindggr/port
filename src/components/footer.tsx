"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
        <footer className="w-[90%] sm:w-[95%] mx-auto mb-10 font-[family-name:var(--font-noto-sans)]">
            <div className="flex flex-col gap-2 sm:gap-4 text-xl sm:text-2xl py-5">
                {/* [ social / contact ] */}
                <div className="flex flex-col mb-5">
                    <p className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold mb-1 sm:mb-0">CONTACT / SOCIAL</p>
                    <div className="flex flex-col items-start gap-2 pt-5 text-[clamp(1rem,2vw,1.35rem)]">
                        <a
                            onClick={() => {
                                navigator.clipboard.writeText("erwin.dg8ts@gmail.com");
                                toast.success("Email copied!");
                            }}
                            className="cursor-pointer hover:underline"
                            aria-label="Copy Email"
                        >
                            Email
                        </a>
                        <a
                            href="https://linkedin.com/in/erwindggr"
                            className="cursor-pointer hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/erwindggr/"
                            className="cursor-pointer hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://x.com/erwindggr"
                            className="cursor-pointer hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            Twitter
                        </a>
                    </div>
                </div>

                {/* [ // Batam ] [ Time ] */}
                <div className="flex flex-col sm:flex-row justify-between text-[clamp(1.2rem,2vw,1.5rem)] font-bold">
                    <p>BATAM, INDONESIA</p>
                    <p>[ GMT+7 ] {time}</p>
                </div>
            </div>
        </footer>
    );
}