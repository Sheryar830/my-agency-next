import React from "react";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { Howitwork } from "@/components/Howitwork";
import Whatwedo from "@/components/about/Whatwedo";
import Testimonials from "@/components/about/Testimonials";
import TestimonialsMarquee from "@/components/Testimonials1";

export default function Page() {
  return (
    <>
      <PageHeader title="Our services" />
      <Services />
      <Howitwork/>
      <Whatwedo/>
     <TestimonialsMarquee/>
    </>
  );
}