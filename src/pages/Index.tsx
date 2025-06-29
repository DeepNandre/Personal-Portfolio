
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ValuesSection from "@/components/portfolio/ValuesSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CurrentProjectsSection from "@/components/portfolio/CurrentProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SpeakingSection from "@/components/portfolio/SpeakingSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <SkillsSection />
      <ProjectsSection />
      <CurrentProjectsSection />
      <ExperienceSection />
      <SpeakingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
