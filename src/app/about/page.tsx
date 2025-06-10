import AboutIntro from "@/components/aboutIntro";
import Footer from "@/components/footer";
import Erwin from "@/components/erwin";
import AboutExperience from "@/components/aboutExp";

export default function About() {
    return (
        <div className="w-full">
            <AboutIntro />
            <AboutExperience />
            <Erwin />
            <Footer />
        </div>
    )
}