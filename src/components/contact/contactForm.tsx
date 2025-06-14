"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("https://formspree.io/f/mjkrrbrk", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            toast.success("Message sent!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            toast.error("Oops, might be under maintenance.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border-b border-lightFooter dark:border-darkFooter bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border-b border-lightFooter dark:border-darkFooter bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 border-b border-lightFooter dark:border-darkFooter bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
            />
            <button
                type="submit"
                className="self-end px-5 py-3 sm:px-7 sm:py-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:text-darkFooter rounded-full font-bold relative border-2 border-baseLight dark:border-baseDark dark:active:border-darkFooter transition-colors duration-200"
            >
                Send
            </button>
        </form>
    );
}