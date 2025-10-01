import React from 'react';

const Contact = () => {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">get in touch</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Let’s Collaborate and Create Powerful <span>Digital Solutions</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Contact Us Form Start */}
            <div className="conatct-us-form">
              {/* Contact Form Start */}
              <div className="contact-form">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-cursor="-opaque">
                    Have any questions?
                  </h2>
                </div>

                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone No."
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Write Message..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">
                          <span>submit now</span>
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>

                    {/* WhatsApp Button Below Form */}
                    <div className="col-lg-12 mt-4">
                      <a
                        href="https://wa.me/923094726782"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-default"
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#25D366',
                          color: 'white',
                          padding: '12px 24px',
                          borderRadius: '5px',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                        }}
                      >
                        <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              </div>

              {/* Google Map Iframe Start */}
              <div className="google-map-iframe mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1483162957446!2d74.535!3d32.494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eeaf5c5c2b7f7%3A0x123456789!2sSialkot%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703158537552!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: '100%', height: '600px', border: '0' }}
                ></iframe>
              </div>
              {/* Google Map Iframe End */}
            </div>
          </div>

          <div className="col-lg-12">
            {/* Contact Info List Start */}
            <div className="contact-info-list mt-5">
              {/* Phone */}
              <div className="contact-info-item wow fadeInUp">
                <div className="icon-box">
                  <img src="images/icon-phone.svg" alt="Phone" />
                </div>
                <div className="contact-info-content">
                  <h3>contact us</h3>
                  <p>
                    <a href="tel:+923094726782">+92 309 4726782</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-box">
                  <img src="images/icon-mail.svg" alt="Email" />
                </div>
                <div className="contact-info-content">
                  <h3>email us</h3>
                  <p>
                    <a href="mailto:shehryarwaris836@gmail.com">
                      shehryarwaris836@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="images/icon-clock.svg" alt="Hours" />
                </div>
                <div className="contact-info-content">
                  <h3>Working hours</h3>
                  <p>Mon - Fri : 08AM - 10PM</p>
                  <p>Sat - Sun : Closed</p>
                </div>
              </div>

              {/* Location */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="images/icon-location.svg" alt="Location" />
                </div>
                <div className="contact-info-content">
                  <h3>location</h3>
                  <p>Sialkot, Pakistan</p>
                </div>
              </div>

              {/* WhatsApp */}
              
            </div>
            {/* Contact Info List End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
