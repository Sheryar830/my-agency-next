// components/projects/Projects.jsx
import React from "react";
import Link from "next/link";

const projects = [
  { id: 1,  title: "Laravel + React E-commerce Web App", slug: "laravel-react-ecommerce", category: "E-commerce", image: "/images/project-1.jpg",  delay: "0s"   },
  { id: 2,  title: "Laravel + React Point of Sale",      slug: "laravel-react-pos",       category: "POS System", image: "/images/project-2.jpg",  delay: "0.2s" },
  { id: 3,  title: "Laravel + Blade POS + Invoice",      slug: "laravel-blade-pos-invoice", category: "POS & Invoicing", image: "/images/project-3.jpg", delay: "0.4s" },
  { id: 4,  title: "React E-commerce Store",             slug: "react-ecommerce",         category: "E-commerce", image: "/images/ecomerce.png",   delay: "0.6s" },
  { id: 5,  title: "Laravel + Blade AI PhotoBooth Website", slug: "laravel-blade-ai-photobooth", category: "AI Website", image: "/images/ai.png", delay: "0.6s" },
  { id: 6,  title: "React Native iOS + Android Movie App", slug: "react-native-movie-app", category: "Mobile App", image: "/images/project-4.jpg", delay: "0.6s" },
  { id: 7,  title: "React Native iOS + Android Bar App", slug: "react-native-bar-app",    category: "Mobile App", image: "/images/bar.png",        delay: "0.6s" },
  { id: 8,  title: "Shopify E-commerce Store",           slug: "shopify-store-1",         category: "E-commerce", image: "/images/project-5.jpg",  delay: "0.6s" },
  { id: 9,  title: "Shopify E-commerce Store",           slug: "shopify-store-2",         category: "E-commerce", image: "/images/shopify.png",    delay: "0.6s" },
  { id: 10, title: "WordPress Sportswear Inquiry Website", slug: "wordpress-sportswear-inquiry", category: "WordPress", image: "/images/project-6.jpg", delay: "0.6s" },
  { id: 11, title: "WordPress Surgical Website",         slug: "wordpress-surgical-1",    category: "WordPress", image: "/images/project-7.jpg",  delay: "0.6s" },
  { id: 12, title: "WordPress General Surgical Site",    slug: "wordpress-surgical-2",    category: "WordPress", image: "/images/project-8.jpg",  delay: "0.6s" },
  { id: 13, title: "WordPress Beauty Surgical Site",     slug: "wordpress-surgical-3",    category: "WordPress", image: "/images/project-9.jpg",  delay: "0.6s" },
  { id: 14, title: "WordPress Leather Products Website", slug: "wordpress-leather",       category: "WordPress", image: "/images/project-10.jpg", delay: "0.6s" },
  { id: 15, title: "WordPress Event Organization Website", slug: "wordpress-event-org",   category: "WordPress", image: "/images/project-11.jpg", delay: "0.6s" },
  { id: 16, title: "WordPress Sportswear & Products Website", slug: "wordpress-sportswear", category: "WordPress", image: "/images/project-12.jpg", delay: "0.6s" },
];

export default function Projects({ limit }) {
  const shownProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="our-projects page-projects">
      <div className="container-fluid">
        <div className="row">
          {shownProjects.map((p) => (
            <div key={p.id} className="col-lg-3 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay={p.delay}>
                <div className="project-image">
                  <Link href={`/projectdetail/${p.slug}`} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={p.image} alt={p.title} />
                    </figure>
                  </Link>
                </div>

                <div className="project-content">
                  <h3>
                    <Link href={`/projectdetail/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p>{p.category}</p>
                </div>

                <div className="project-btn">
                  <Link href={`/projectdetail/${p.slug}`}>
                    <img src="/images/arrow-white.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
