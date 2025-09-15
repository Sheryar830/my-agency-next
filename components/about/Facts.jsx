import React from 'react'

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
                Why leading brands choose us for <span>digital growth</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Expertise */}
          <div className="col-lg-4 col-md-6">
            <div className="facts-item wow fadeInUp">
              <div className="facts-item-title">
                <h3>Proven Delivery</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">120</span>+
                </h2>
                <p>Web Projects Shipped</p>
              </div>
              <div className="facts-item-content">
                <p>
                  High-performance websites and platforms delivered with clean code,
                  clear communication, and on-time launches.
                </p>
              </div>
            </div>
          </div>

          {/* Customization */}
          <div className="col-lg-4 col-md-6">
            <div className="facts-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="facts-item-title">
                <h3>Built Around You</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">35</span>+
                </h2>
                <p>Mobile Apps Launched</p>
              </div>
              <div className="facts-item-content">
                <p>
                  Websites, apps, software, SEO/SMM, and API integrations—tailored to
                  your goals, workflows, and budget.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="col-lg-4 col-md-6">
            <div className="facts-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="facts-item-title">
                <h3>Focused on Results</h3>
              </div>
              <div className="facts-item-counter">
                <h2>
                  <span className="counter">180</span>%
                </h2>
                <p>Avg. SEO Traffic Lift</p>
              </div>
              <div className="facts-item-content">
                <p>
                  We optimize for speed, conversions, and retention—then report
                  transparently on what’s moving the needle.
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <p>
                <span>Free</span> project estimate in 24 hours.{' '}
                <a href="/contact">Get a Free Quote</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
