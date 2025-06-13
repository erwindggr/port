import { detailedProjects } from "@/data/all";
import Image from "next/image";

export default function BasicPOS() {
    const project = detailedProjects.find((p) => p.title === "SmartVision");

    return (
        <div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)] px-6 sm:px-10">
            {project ? (
                <div className="max-w-xl mx-auto pt-30">
                    {/* Title Overlay */}
                    <div className="relative mb-4">
                        <div className="aspect-[16/9] relative">
                            <Image
                                alt={project.title}
                                src="/projects/othello-1.png"
                                fill
                                priority
                                className="object-cover rounded-sm"
                            />
                            <div className="absolute inset-0 bg-black/30 rounded-sm" />
                            <h1 className="absolute z-[-1] inset-0 flex justify-center items-center text-[clamp(2.5rem,8vw,9rem)] font-bold">
                                {project.title.toUpperCase()}
                            </h1>
                        </div>
                    </div>

                    {/* Metadata (e.g. role, year, client) */}
                    <div className="flex justify-between text-sm mb-6">
                        <span>Mentorship Developer</span>
                        <span>2025</span>
                        <span>{project.title}</span>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed ">
                        {project.description}
                    </p>
                </div>
            ) : (
                <p className="text-gray-500">Project not found.</p>
            )}
        </div>
    );
}