"use client";

import { useRef } from "react";
import { aboutMe, experience } from "@/data/all";

import MarqueeText from "@/components/contact/marquee";
import Footer from "@/components/footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function About() {
    const aboutHeader = useRef<HTMLHeadingElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const AboutHeadsplit = new SplitText(aboutHeader.current, { type: "chars, words" });
        gsap.from(AboutHeadsplit.chars, {
            scrollTrigger: {
                trigger: ".aboutHead",
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

        gsap.from(aboutMeRef.current, {
            scrollTrigger: {
                trigger: ".introCont",
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

        gsap.from(experienceRef.current, {
            scrollTrigger: {
                trigger: ".experienceCont",
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
    });

    return (
        <section className="w-full mt-30 font-[family-name:var(--font-geist-sans)]">
            <div className="w-[90%] sm:w-[95%] mx-auto">
                <div className="w-full py-10 mb-10">
                    <h1 ref={aboutHeader} className="aboutHead text-[clamp(3.2rem,10vw,10rem)] font-bold overflow-hidden break-words leading-tight">
                        Hello there.
                    </h1>
                </div>

                <div ref={aboutMeRef} className="introCont w-full flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2 flex justify-start gap-5 sm:gap-0 sm:justify-between">
                        <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>01</p></div>
                        <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Introduction</p></div>
                    </div>

                    <div className="w-full min-h-[35vh] sm:w-1/2 mt-2 sm:mt-0 flex flex-col gap-y-2">
                        {
                            aboutMe.map((about, idx) => (
                                <div key={idx} className="">
                                    <p className="text-justify text-[clamp(1rem,2vw,1.2rem)]">
                                        {about}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div ref={experienceRef} className="experienceCont w-full flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2 flex justify-start gap-5 sm:gap-0 sm:justify-between">
                        <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>02</p></div>
                        <div className="one sm:w-1/2 text-[clamp(1.2rem,2vw,2rem)]"><p>Experience</p></div>
                    </div>

                    <div className="w-full min-h-[35vh] sm:w-1/2 mt-4 sm:mt-0 flex flex-col gap-y-6">
                        {
                            experience.map((experience, idx) => (
                                <div key={idx} className="w-full flex justify-between">
                                    <div className="w-3/4 flex flex-col">
                                        <h5 className="text-[clamp(1rem,2vw,1.2rem)]">{experience.role} – {experience.company} </h5>
                                        <p className="text-[clamp(0.8rem,2vw,1rem)] font-light italic mt-1">—{experience.desc}</p>

                                        <p className="text-[clamp(0.9rem,2vw,1rem)] text-justify font-light mt-2">{experience.work}</p>
                                    </div>
                                    <div className="w-1/4 flex justify-end">
                                        <p className="text-[clamp(0.8rem,2vw,1rem)]">
                                            {experience.from} — {experience.to}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <MarqueeText />
            </div>
            <Footer />
        </section>
    )
}