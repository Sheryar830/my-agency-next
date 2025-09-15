// data/howItWorks.js
export const howItWorks = {
  headingSmall: "How It Works",
  headingBig: "Our process for building <span>successful projects</span>",

  steps: [
    {
      stepNo: "Step 01",
      title: "Discovery & Planning",
      text:
        "We start by understanding your goals, target audience, and project scope to craft a clear strategy and roadmap.",
      icon: "/images/icon-how-work-step-1.svg",
      delay: "0.4s",
    },
    {
      stepNo: "Step 02",
      title: "Design & Architecture",
      text:
        "We design user-friendly interfaces and plan robust architecture to ensure your website, app, or software is scalable and secure.",
      icon: "/images/icon-how-work-step-2.svg",
      delay: "0.6s",
    },
    {
      stepNo: "Step 03",
      title: "Development & Integration",
      text:
        "Our team builds responsive websites, native-level apps, and software solutions while integrating APIs, payments, and third-party services.",
      icon: "/images/icon-how-work-step-3.svg",
      delay: "0.8s",
    },
    {
      stepNo: "Step 04",
      title: "Launch & Ongoing Support",
      text:
        "We deploy your project, monitor performance, and provide ongoing SEO, marketing, and technical support to drive growth.",
      icon: "/images/icon-how-work-step-4.svg",
      delay: "1s",
    },
  ],

  video: {
    poster: "/images/video-poster.jpg",
    sources: [
      { src: "/images/nextmind-how-work-video.mp4", type: "video/mp4" },
      {
        src: "https://demo.awaikenthemes.com/assets/videos/nextmind-how-work-video.mp4",
        type: "video/mp4",
      },
    ],
  },

  footer: {
    text:
      "We help businesses design, develop, and grow with digital solutions that deliver measurable results.",
    cta: { label: "Contact Now", href: "/contact" },
  },
};
