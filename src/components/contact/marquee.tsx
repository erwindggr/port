"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeText() {
    const items = Array(6).fill("Get in Touch! 📩");
    return (
        <Marquee speed={150} gradient={false}>
            {items.map((text, i) => (
                <p key={i} className="text-[clamp(3.2rem,10vw,10rem)] mr-10">
                    {text}
                </p>
            ))}
        </Marquee>
    );
}
