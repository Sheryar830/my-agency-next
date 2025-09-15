import React from "react";
import Link from "next/link";
import Projects from "./projects/Projects";

const OurProject = () => {
  return (
    <div className="our-projects">
      <div className="container-fluid">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our project</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Real projects real impact real <span>intelligence</span>
              </h2>
            </div>
          </div>
        </div>

        {/* 👇 Show only 4 on homepage */}
        <Projects limit={4} />

        {/* <div className="text-center mt-4">
          <Link href="/ourproject" className="btn btn-primary">
            View All Projects
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default OurProject;
