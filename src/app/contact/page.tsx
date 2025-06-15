"use client";

import ContactMsg from "@/components/contact/contactMsg"
import ContactForm from "@/components/contact/contactForm"
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Contact() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const contactHeader = useRef<HTMLHeadingElement>(null);
    const emailHeader = useRef<HTMLHeadingElement>(null);
    const contactContent = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ContactHeadsplit = new SplitText(contactHeader.current, { type: "chars, words" });
        const EmailHeadsplit = new SplitText(emailHeader.current, { type: "chars, words" });

        gsap.from(ContactHeadsplit.chars, {
            scrollTrigger: {
                trigger: ".contactHead",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        });

        gsap.from(EmailHeadsplit.chars, {
            scrollTrigger: {
                trigger: ".emailHead",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            delay: 0.15,
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        });

        gsap.to("#email-underline", {
            scrollTrigger: {
                trigger: ".emailHead",
                start: "top 80%",
            },
            scaleX: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
        });


        gsap.from(contactContent.current, {
            scrollTrigger: {
                trigger: ".contactContent",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "top center",
            ease: "back.out(1.7)",
            stagger: {
                each: 0.03,
                from: "start",
            },
            duration: 1.2,
        })
    })

    return (
        <div className="w-full mt-30 mb-20">
            <div className="max-w-[2000px] mx-auto">
                <div className="w-[90%] sm:w-[95%] mx-auto">
                    <div className="w-full py-10 mb-10">
                        <h1 ref={contactHeader} className="contactHead text-[clamp(3.2rem,10vw,10rem)] font-[family-name:var(--font-noto-sans)] font-bold overflow-hidden break-words leading-tight">
                            Let&apos;s work together.
                        </h1>
                    </div>
                    <h2
                        ref={emailHeader}
                        onClick={() => {
                            navigator.clipboard.writeText("erwin.dg8ts@gmail.com");
                            toast.success("Email copied!");
                        }}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        onMouseMove={(e) => setTooltipPos({ x: e.clientX + 20, y: e.clientY + 20 })}
                        className="emailHead relative inline-block w-fit font-[family-name:var(--font-geist-mono)] text-[clamp(1.5rem,3vw,5rem)] mb-5 sm:mb-0 overflow-hidden break-words leading-tight cursor-pointer"
                    >
                        erwin.dg8ts@gmail.com
                        <span className="block h-[4px] w-full bg-current origin-left scale-x-0" id="email-underline" />
                    </h2>
                    {showTooltip && (
                        <div
                            className="fixed z-50 bg-black text-white dark:bg-white dark:text-black text-xs px-4 py-2 pointer-events-none"
                            style={{ top: tooltipPos.y, left: tooltipPos.x }}
                        >
                            <p className="text-xl font-[family-name:var(--font-geist-sans)]">
                                Click to copy
                            </p>
                        </div>
                    )}

                    <div ref={contactContent} className="contactContent flex flex-col lg:flex-row gap-y-5 sm:gap-x-20">
                        <div className="lg:w-1/2">
                            <ContactMsg />
                        </div>
                        <div className="lg:w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}