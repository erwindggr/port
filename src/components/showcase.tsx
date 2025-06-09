export default function Showcase() {
    return (
        <div className="w-full min-h-screen mt-5 sm:mt-30">
            <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto relative z-5">
                <h2 className="text-4xl sm:text-7xl font-bold font-[family-name:var(--font-geist-sans)]]] text-lightFooter dark:text-darkLighter">Latest work</h2>
            </div>
            <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto aspect-[16/9]">
                <video
                    src="/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
            </div>
            <div className="w-[90%] sm:w-[85%] md:w-[60%] mx-auto">
                <div className="flex flex-col">
                    <h4 className="mt-10 font-bold text-xl text-baseLight dark:text-baseDark">POS System</h4>

                    <div className="text-sm font-[family-name:var(--font-geist-mono)] mt-2 leading-relaxed text-lightDarker dark:text-darkLighter">
                        <p>
                            Built for small local business (UMKM).
                        </p>
                    </div>
                </div>
            </div>
            {/* Feature List */}
            <div className="mt-1 font-[family-name:var(--font-geist-mono)] text-sm text-justify text-lightDarker dark:text-darkLighter w-[90%] sm:w-[85%] md:w-[60%] mx-auto">
                <p>
                    This system simplifies product searches — even with size and color variations. It keeps stock levels in check, makes price updates quick, and ensures every sale is tracked with reprintable receipts.

                    At the end of the day, owners get a clean, filtered sales report right from the dashboard. Designed for small laptops and tight spaces.
                </p>

            </div>
            <div className="flex flex-wrap gap-2 mt-10 w-[90%] sm:w-[85%] md:w-[60%] mx-auto">
                {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "MySQL",
                    "Prisma",
                    "Docker",
                    "CI/CD",
                    "@react-pdf/renderer",
                    "exceljs",
                    "framer-motion",
                    "lucide-react",
                    "react-icons",
                    "recharts"
                ].map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-baseLight/10 dark:bg-baseDark/10 border border-baseLight/30 dark:border-baseDark/30 text-baseLight dark:text-baseDark font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )
}