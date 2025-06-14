import Hero from "@/components/hero";
// import Tools from "@/components/tools";
import Intro from "@/components/intro";
import Showcase from "@/components/showcase";
import ProjectsMobile from "@/components/projectsMobile";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
// import Erwin from "@/components/erwin";
import MarqueeText from "@/components/contact/marquee";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-full overflow-hidden">
        <Intro />
      </div>
      <Showcase />
      {/* <Tools /> */}
      <ProjectsMobile />
      <Projects />
      <div className="mt-20">
        <MarqueeText />
      </div>
      {/* <Erwin /> */}
      <Footer />
      {/* <div className="w-full min-h-screen"></div> */}
      {/* Add more components as needed */}
    </div>
  );
}
