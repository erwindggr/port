import { detailedProjects } from "@/data/all";
import ProjectHead from "@/components/projects/projectHead";
import ProjectOverview from "@/components/projects/projectOverview";
import ProjectImage from "@/components/projects/projectImage";

export default function NetflixClone() {
    const title = "Netflix Clone";
    const project = detailedProjects.find((p) => p.title === title);

    return (
        <div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)] mb-20">
            {project ? (
                <div>
                    <ProjectHead
                        title={project.title}
                        year={project.year}
                        desc={project.description}
                        shortDesc={project.shortDescription}
                    />
                    <ProjectOverview
                        overview={project.overview}
                        projectGoals={project.projectGoals}
                        softSkill={project.softSkill}
                        tech={project.tech}
                    />
                    <ProjectImage src={project.src} featuredIndex={0} />
                </div>
            ) : (
                <p className="text-gray-500">Project not found.</p>
            )}
        </div>
    );
}