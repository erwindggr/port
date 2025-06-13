import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center font-[family-name:var(--font-noto-sans)] space-y-6">
            <h1 className="text-[clamp(5rem,15vw,10rem)] font-bold animate-bounce">404</h1>
            <p className="text-2xl sm:text-3xl font-light">Oops... you seem lost.</p>
            
            <Link
                href="/"
                className="mt-6 px-6 py-2 border-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300"
            >
                Go Back
            </Link>
        </div>
    );
}
