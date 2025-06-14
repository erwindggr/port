"use client";

import PortButton from "./portButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Showcase() {
    useGSAP(() => {
        const split = new SplitText(".latest-header", {
            type: "words,chars",
        });

        const highlight = new SplitText(".highlight-text", {
            type: "words, chars"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ".latest-header",
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

        // Advanced: Scale header on scroll
        gsap.to(".latest-header", {
            scrollTrigger: {
                trigger: ".latest-header",
                start: "center center",      // when header hits top of viewport
                end: "bottom top",     // until it's out of view
                scrub: true,
            },
            scale: 0.35,
            paddingBottom: -30,
            y: -60,
            transformOrigin: "bottom left",
            ease: "none",
        });

        gsap.from(".showcaseContent", {
            scrollTrigger: {
                trigger: ".latest-header",
                start: "center center",
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

        gsap.fromTo(
            highlight.chars,
            {
                opacity: 0,
                rotationX: -360,
                rotationZ: 180,
                rotationY: 90,
                scale: 0.55,
                filter: "brightness(1.4)",
            },
            {
                scrollTrigger: {
                    trigger: ".highlight-text",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                rotationX: 0,
                rotationZ: 0,
                rotationY: 0,
                scale: 1,
                stagger: 0.025,
                delay: 0.5,
                filter: "brightness(1)",
                duration: 0.8,
                ease: "power3.out",
            }
        );
    });

    return (
        <div id="projects" className="w-full min-h-screen mt-40 sm:mt-50">
            <div className="w-[90%] sm:w-[95%] mx-auto relative z-5 mb-0 sm:mb-[-20]">
                <h2 className="latest-header text-[clamp(2.5rem,7vw,10rem)] font-bold font-[family-name:var(--font-noto-sans)]">Recent work &#x2198;</h2>
            </div>

            <div className="showcaseContent w-[90%] sm:w-[95%] mx-auto flex flex-col lg:flex-row justify-between">

                <div className="aspect-[16/9] lg:w-2/3">
                    <video
                        src="/demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/3 flex flex-col justify-end">
                    <div className="lg:ml-15">
                        <div className="flex flex-col">
                            <h4 className="font-bold mt-5 font-[family-name:var(--font-noto-sans)] text-xl sm:text-5xl text-baseLight dark:text-baseDark">POS System 🏪</h4>

                            <div className="text-sm mt-2 lg:mt-5 font-[family-name:var(--font-noto-sans)] leading-relaxed text-lightDarker dark:text-darkLighter">
                                <p className="text-[clamp(0.95rem,2.5vw,1.2rem)]">
                                    A basic POS system to help small business digitalize their transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Feature List */}
                    <div className="mt-2 lg:ml-15 font-[family-name:var(--font-noto-sans)] text-sm text-justify text-lightDarker dark:text-darkLighter">
                        <p className="text-[clamp(0.95rem,2.5vw,1.2rem)]">
                            Originally built for my father&rsquo;s shop, which relied on handwritten records and had no inventory tracking in place.
                            It was <span className="highlight-text text-baseLight dark:text-baseDark">designed to simplify daily operations—</span>making it easier to check product availability and review past transactions without digging through paper logs.
                        </p>

                    </div>

                    <div className="flex justify-end lg:justify-start mt-10 sm:ml-15 mb-10">
                        <PortButton text="Learn More" href="/projects/basicpos" />
                    </div>
                </div>
            </div>
        </div>
    )
}