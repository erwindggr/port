import Hero from "@/components/hero";
// import Tools from "@/components/tools";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Intro />
      {/* <Tools /> */}
      <div className="w-full min-h-screen"></div>
      {/* Add more components as needed */}
    </div>
  );
}
