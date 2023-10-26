import Image from 'next/image';
import HeroSection from '@/components/girl/HeroSection';
import Navbar from '@/components/girl/Navbar';
import AboutSection from '@/components/girl/AboutSection';
import ProjectsSection from '@/components/girl/ProjectsSection';
import EmailSection from '@/components/girl/EmailSection';
import Footer from '@/components/girl/Footer';
import AchievementsSection from '@/components/girl/AchievementsSection';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
