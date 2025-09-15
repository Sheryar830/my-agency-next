import React from 'react'

const Whatwedo = () => {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="what-we-box">
              <h3 className="text-effect">
                We build websites, apps, and digital strategies that help brands
                stand out, attract customers, and grow faster.
              </h3>

              <div
                className="what-we-img wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src="images/what-we-do-img.png" alt="services" />
              </div>

              <div
                className="what-we-img-list wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul>
                  <li>Website Development</li>
                  <li>Mobile App Development</li>
                  <li>Custom Software</li>
                  <li>SEO Optimization</li>
                  <li>Social Media Marketing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">what we do</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Digital services that deliver real <span>results</span>
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  From high-performing websites to native mobile apps, powerful
                  software, and growth-driven SEO & marketing — we turn your
                  ideas into results-driven digital experiences.
                </p>
              </div>

              <div
                className="what-we-do-body wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <ul>
                  <li>Custom Website Design & Development</li>
                  <li>iOS & Android App Development</li>
                  <li>API Integration & Payment Gateways</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Content & Campaigns</li>
                </ul>
              </div>

              <div
                className="what-we-do-button wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <a href="/contact" className="btn-default">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo
