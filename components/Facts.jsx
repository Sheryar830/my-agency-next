import React from "react";
import Link from "next/link";

const Facts = () => {
  return (
    <div className="our-facts">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our facts</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Why leading brands trust us to deliver smart{" "}
                <span>AI solutions</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="facts-item wow fadeInUp">
              <div className="facts-item-title">
                <h3>Proven Technical Expertise</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">15</span>+
                </h2>
                <p>Years of AI-Driven Design</p>
              </div>
              <div className="facts-item-content">
                <p>
                  Our team brings deep experience in machine learning, data
                  engineering, and full-stack development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="facts-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="facts-item-title">
                <h3>Highly customizable solutions</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">200</span>+
                </h2>
                <p>Projects Successfully Delivered</p>
              </div>
              <div className="facts-item-content">
                <p>
                  We don't believe in one size fits all. Every solution is
                  tailored to your business needs and workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="facts-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="facts-item-title">
                <h3>Focus on real results</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">95</span>%
                </h2>
                <p>Client Satisfaction Rate</p>
              </div>
              <div className="facts-item-content">
                <p>
                  We build AI that's safe, transparent, and responsible
                  designed with security & compliance from day one.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <p>
                <span>Free</span> Let's make something great work together.{" "}
                <Link href="/contact">Get Free Quote</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
