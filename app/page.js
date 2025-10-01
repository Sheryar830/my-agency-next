import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Services from "@/components/Services";
import { Howitwork } from "@/components/Howitwork";
import Facts from "@/components/Facts";
import OurProject from "@/components/OurProject";
import Testimonials from "@/components/Testimonials1";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutStats />
        <OurProject />
        <Howitwork />
        <Testimonials />
      </main>
    </>
  );
}
