import Solutions from "@/components/about/Solutions";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import Whatwedo from "@/components/about/Whatwedo";
import AboutStats from "@/components/AboutStats";
import Facts from "@/components/Facts";
import PageHeader from "@/components/PageHeader";
import TestimonialsMarquee from "@/components/Testimonials1";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader />  
      <AboutStats/>
      <Facts/>
      <Solutions/>
      <Team/>
      <Whatwedo/>
      <TestimonialsMarquee/>
    </>
  );
}
