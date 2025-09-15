import React from 'react'

const Solutions = () => {
  return (
    <div className="our-solution">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* Our Solution Content Start */}
            <div className="our-solution-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">all in one solution</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Delivering digital solutions that <span>grow businesses</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  From custom websites to mobile apps, SEO, social media, and
                  API integrations — we provide everything your business needs
                  to stand out, scale, and succeed online.
                </p>
              </div>
            </div>
            {/* Our Solution Content End */}
          </div>

          <div className="col-lg-7">
            {/* Solution Item List Start */}
            <div className="solution-item-list">
              {/* Website Development */}
              <div className="solution-item wow fadeInUp">
                <div className="icon-box">
                  <img src="images/icon-solution-1.svg" alt="Website Development" />
                </div>
                <div className="solution-item-content">
                  <h3>Website Development</h3>
                  <p>
                    High-performance, responsive, and SEO-ready websites built
                    to engage users and convert customers.
                  </p>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="solution-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="images/icon-solution-2.svg" alt="Mobile Apps" />
                </div>
                <div className="solution-item-content">
                  <h3>Mobile App Development</h3>
                  <p>
                    Native-quality iOS & Android apps with seamless performance,
                    ready for App Store and Play Store launch.
                  </p>
                </div>
              </div>

              {/* Custom Software */}
              <div className="solution-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="images/icon-solution-3.svg" alt="Software Development" />
                </div>
                <div className="solution-item-content">
                  <h3>Custom Software</h3>
                  <p>
                    Tailored software solutions and admin panels designed to
                    simplify operations and drive efficiency.
                  </p>
                </div>
              </div>

              {/* SEO & Marketing */}
              <div className="solution-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="images/icon-solution-4.svg" alt="SEO & Marketing" />
                </div>
                <div className="solution-item-content">
                  <h3>SEO & Marketing</h3>
                  <p>
                    Proven SEO and social media strategies to boost visibility,
                    attract leads, and grow your brand online.
                  </p>
                </div>
              </div>

              {/* API Integrations */}
              <div className="solution-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="icon-box">
                  <img src="images/icon-solution-4.svg" alt="API Integration" />
                </div>
                <div className="solution-item-content">
                  <h3>API Integration</h3>
                  <p>
                    Connect payment gateways, CRMs, and third-party services
                    securely for a seamless digital experience.
                  </p>
                </div>
              </div>
            </div>
            {/* Solution Item List End */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
