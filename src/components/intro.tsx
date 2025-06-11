"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Intro() {
    const sectionRef = useRef(null);
    const splitRef = useRef(null); // Ref for reliable span

    useGSAP(() => {
        const split = new SplitText(splitRef.current, { type: "chars" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo("#yes", { scale: 1 }, { scale: 1.5, duration: 0.4, ease: "power2.out" })
            .to("#yes", { scale: 1, duration: 0.2, color: "#a3004c", ease: "bounce.out" })

            .fromTo(
                split.chars,
                { rotationY: 180 },
                {
                    rotationY: 0,
                    color: "#9810fa",
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    stagger: 0.03
                },
                "<+=0.2"
            )

        gsap.to(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "center center",
                end: "bottom top",
                scrub: true,
            },
            scale: 2,
            transformOrigin: "center",
            ease: "none",
        });

        return () => split.revert(); // Clean up on unmount
    }, []);

    return (
        <section ref={sectionRef} className="w-[90%] sm:w-[95%] mx-auto py-10 sm:py-15 sm:px-10 lg:px-20 border-b-1 border-t-1" style={{ borderColor: 'rgba(150, 150, 136, 0.3)' }}>
            <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center leading-snug font-[family-name:var(--font-noto-sans)]">
                <span id="yes" className="inline-block mr-2">Crafting</span>
                <span className="inline-block">, ideas into&nbsp;</span>
                <span
                    id="reliable"
                    ref={splitRef}
                    className="inline-block mt-2 text-lightFooter dark:text-darkFooter"
                >
                    reliable digital products
                </span>
            </h2>
        </section>
    );
}