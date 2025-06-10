export default function PortButton({ text }: { text: string }) {
    return (
        <div>
            <a
                className="px-5 py-3  sm:px-7 sm:py-5 rounded-full font-[family-name:var(--font-noto-sans)] font-bold relative border-2 border-baseLight dark:border-baseDark duration-300 cursor-pointer
                           hover:bg-baseLight dark:hover:bg-baseDark
                           hover:text-baseDark dark:hover:text-baseLight 
                           active:bg-darkLighter dark:active:bg-lightDarker
                           active:text-baseLight active:dark:text-baseDark"
            >
                {text}
            </a>
        </div>
    );
}
