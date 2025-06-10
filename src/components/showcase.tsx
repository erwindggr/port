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

        gsap.from(".showcaseContent", {
            scrollTrigger: {
                trigger: ".latest-header",
                start: "bottom 40%",
            },
            opacity: 0,
            ease: "back.out(1.7)",
            transformOrigin: "top center",
            duration: 5
        });
    });

    return (
        <div id="projects" className="w-full min-h-screen mt-40 sm:mt-45">
            <div className="w-[90%] sm:w-[95%] mx-auto relative z-[-1] mb-0 xl:mb-[-50]">
                <h2 className="latest-header text-[clamp(3.5rem,7vw,10rem)] font-bold font-[family-name:var(--font-noto-sans)] text-lightFooter dark:text-darkLighter">Latest work</h2>
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
                            <h4 className="font-bold mt-5 font-[family-name:var(--font-noto-sans)] text-xl sm:text-5xl text-baseLight dark:text-baseDark">POS System</h4>

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
                            It was designed to simplify daily operations—making it easier to check product availability and review past transactions without digging through paper logs.
                        </p>

                    </div>

                    <div className="flex justify-end lg:justify-start mt-10 sm:ml-15 mb-10">
                        <PortButton text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    )
}