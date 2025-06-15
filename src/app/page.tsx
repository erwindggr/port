import Hero from "@/components/hero";
// import Tools from "@/components/tools";
import Intro from "@/components/intro";
import Showcase from "@/components/showcase";
import TechStackSection from "@/components/techStack";
import ProjectsMobile from "@/components/projectsMobile";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-[2000px] mx-auto">
        <TechStackSection />
      </div>
      <div className="max-w-full overflow-hidden">
        <Intro />
      </div>
      <div className="max-w-[2000px] mx-auto mb-20">
        <Showcase />
        <ProjectsMobile />
        <Projects />
      </div>
    </div>
  );
}
