// app/projectdetail/[slug]/page.js
import PageHeader from "@/components/PageHeader";
// If your @ alias isn't configured, switch to: import projects from "../../../data/projects";
import projects from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) return { title: "Project not found" };
  return {
    title: `${proj.title} — Project details`,
    description: proj.overview || proj.title,
  };
}

export default function ProjectDetailPage({ params }) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) return notFound();

  return (
    <>
      <PageHeader title={proj.title} />

      <div className="page-project-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="project-category">
                  <div className="project-category-list">
                    <ul>
                      <li>
                        Project name : <span>{proj.title}</span>
                      </li>
                      <li>
                        Company : <span>{proj.company || "—"}</span>
                      </li>
                      
                      <li>
                        Date : <span>{proj.date || "—"}</span>
                      </li>
                      <li>
                        Duration : <span>{proj.duration || "—"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="category-social-link">
                    <h3>Share:</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-cta-box">
                  <div className="sidebar-cta-logo">
                    <img src="/images/sidebar-cta-logo.svg" alt="logo" />
                  </div>
                  <div className="sidebar-cta-content">
                    <h3>We're here help!</h3>
                    <p>
                      Need assistance? We're here to help with support,
                      guidance, and resources. Reach out to us anytime.
                    </p>
                  </div>
                  <div className="sidebar-cta-contact">
                    <ul>
                      <li>
                        <a href="tel:+92 309 4726782">
                          <img
                            src="/images/icon-phone-gradiant.svg"
                            alt="phone"
                          />
                        +92 309 4726782
                        </a>
                      </li>
                      <li>
                        <a href="mailto:shehryarwaris836@gmail.com">
                          <img
                            src="/images/icon-mail-gradiant.svg"
                            alt="mail"
                          />
                          shehryarwaris836@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="col-lg-8">
              <div className="project-single-contemt">
                {/* Screenshot (or fallback image) */}

                <div className="ss-frame">
                  <img
                    src={proj.screenshot || proj.image} 
                    className="ss-img"
                  />
                </div>
                {/* Overview */}
                <div className="project-entry">
                  <h2 className="wow fadeInUp">
                    Project <span>overview</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {proj.overview || "—"}
                  </p>

                  {/* Key Features */}
                  {proj.features?.length ? (
                    <div className="project-challenge-box">
                      <h2 className="wow fadeInUp">
                        Key <span>features</span>
                      </h2>
                      <div
                        className="project-challenge-list wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <ul>
                          {proj.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}

                  {/* Tech Used */}
                  {proj.tech?.length ? (
                    <div className="project-solution-box">
                      <h2 className="wow fadeInUp">
                        Tech <span>used</span>
                      </h2>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                      >
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="badge bg-light text-dark"
                            style={{ border: "1px solid #e5e7eb" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* /Main content */}
          </div>
        </div>
      </div>
    </>
  );
}
