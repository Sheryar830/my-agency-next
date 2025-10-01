import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-7">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-cursor="-opaque">
                Let's start work <span>together!</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Partner with us to create intelligent, impactful, and
                future-ready AI solutions together.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
              <Link href="/contact" className="btn-default">
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="about-footer">
              <div className="footer-logo">
                <img src="/images/Untitled design (1).png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <div className="footer-contact-box">
              <div className="footer-links">
                <h3>Get In Touch</h3>
                <p>
                  <a href="tel:+923094726782">+92 309 4726782</a>
                </p>
                <p>
                  <a href="mailto:shehryarwaris836@gmail.com">
                    shehryarwaris836@gmail.com
                  </a>
                </p>
              </div>

              <div className="footer-links">
                <h3>Our Location</h3>
                <p>Sialkot, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-links footer-privacy-policy">
              <h3>Subscribe Newsletter's</h3>
              <div className="footer-newsletter-form">
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="mail"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      subscribe
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
