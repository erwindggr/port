export default function CvBtn() {
    return (
        <div className="hidden md:block">
            <a
                href="/Erwin CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 relative py-1 rounded-full duration-300 border-2 font-semibold border-baseLight dark:border-baseDark"
            >
                Get CV
            </a>
        </div>
    );
}