import FeaturedCourses from "@/components/section/FeaturedCourses";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/HeroSection";
import OurMentors from "@/components/section/OurMentors";
import UpcomingSeminers from "@/components/section/UpcomingSeminers";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <UpcomingSeminers />
      <OurMentors />
      <WhyChooseUs />
    </main>
  );
}
