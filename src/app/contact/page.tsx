"use client";

import MarqueeText from "@/components/contact/marquee"
import ContactMsg from "@/components/contact/contactMsg"
import ContactForm from "@/components/contact/contactForm"
import { toast } from "react-hot-toast";
import Footer from "@/components/footer"

export default function Contact() {
    return (
        <div className="w-full mt-30 flex flex-col items-center">


            <div className="w-[90%] sm:w-[95%]">
                <h1 className="mb-5 font-[family-name:var(--font-geist-sans)] text-[clamp(1rem,10vw,8rem)] overflow-hidden break-words leading-tight">
                    Let&apos;s work together
                </h1>
                <h2
                    onClick={() => {
                        navigator.clipboard.writeText("erwin.dg8ts@gmail.com");
                        toast.success("Email copied!");
                    }}
                    className="relative inline-block w-fit font-[family-name:var(--font-geist-sans)] text-[clamp(1rem,6vw,5rem)] overflow-hidden break-words leading-tight mb-5 sm:mb-20 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-current after:scale-x-100 after:origin-left"
                >
                    erwin.dg8ts@gmail.com
                </h2>

                <div className="flex flex-col lg:flex-row gap-y-5 sm:gap-x-20">
                    <div className="lg:w-1/2">
                        <ContactMsg />
                    </div>
                    <div className="lg:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="mt-20 w-full">
                <MarqueeText />
            </div>
            {/* <Erwin /> */}
            <Footer />
        </div>
    )
}