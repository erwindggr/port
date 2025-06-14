import Link from "next/link";

export default function PortButton({ text, href }: { text: string, href: string }) {

    return (
        <div>
            <Link
                href={href}
                className="px-5 py-3 font-[family-name:var(--font-noto-sans)] relative rounded-full duration-300 border-2 font-semibold active:text-lightFooter active:border-lightFooter border-baseLight dark:border-baseDark hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:border-darkFooter dark:active:text-darkFooter"
                style={{ display: "inline-block" }}
            >
                {text}
            </Link>
        </div>
    );
}