import Link from "next/link";

export default function PortButton({ text, href }: { text: string, href: string }) {

    return (
        <div>
            <Link
                href={href}
                className="px-5 py-3 sm:px-7 sm:py-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:text-darkFooter rounded-full font-bold relative border-2 border-baseLight dark:border-baseDark dark:active:border-darkFooter transition-colors duration-200"
                style={{ display: "inline-block" }}
            >
                {text}
            </Link>
        </div>
    );
}