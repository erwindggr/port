import Hero from "@/components/hero";
import Tools from "@/components/tools";
import Intro from "@/components/intro";
import Showcase from "@/components/showcase";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Erwin from "@/components/erwin";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Intro />
      <Showcase />
      <Tools />
      <Projects />
      <Erwin />
      <Footer />
      {/* <div className="w-full min-h-screen"></div> */}
      {/* Add more components as needed */}
    </div>
  );
}
