export default function CvBtn() {
    return (
        <div className="hidden md:block">
            <a
                href="/Erwin CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 font-[family-name:var(--font-noto-sans)] relative rounded-full duration-300 border-2 font-semibold active:text-lightFooter active:border-lightFooter border-baseLight dark:border-baseDark hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:active:border-darkFooter dark:active:text-darkFooter"
            >
                Get CV
            </a>
        </div>
    );
}