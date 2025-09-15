"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonials-box">
              {/* Content */}
              <div className="testimonials-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">testimonials</h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Real clients, real <span>results</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Websites, mobile apps, software, SEO, social media, and API
                    integrations—delivered with speed, quality, and measurable growth.
                  </p>
                </div>

                <div className="testimonials-body">
                  <div className="testimonials-counter-item">
                    <h2>
                      <span className="counter">120</span>+
                    </h2>
                    <p>web projects delivered</p>
                  </div>
                  <div className="testimonials-counter-item">
                    <h2>
                      <span className="counter">35</span>+
                    </h2>
                    <p>mobile apps launched</p>
                  </div>
                  <div className="testimonials-counter-item">
                    <h2>
                      <span className="counter">180</span>%
                    </h2>
                    <p>avg. SEO traffic lift</p>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="testimonial-slider">
                <Swiper
                  className="t-slider"
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  loop
                  speed={800}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-author">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-1.jpg" alt="Jenny W" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Jenny W</h3>
                            <p>Founder, Fintech Startup</p>
                          </div>
                        </div>
                        <div className="testimonial-quotes-img">
                          <img src="/images/testimonials-quotes-img.svg" alt="" />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          “They rebuilt our site in Next.js and integrated Stripe.
                          Conversion jumped 32% in the first month and page speed is A+.”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-author">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-2.jpg" alt="Jason M" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Jason M</h3>
                            <p>Ops Lead, Retail Brand</p>
                          </div>
                        </div>
                        <div className="testimonial-quotes-img">
                          <img src="/images/testimonials-quotes-img.svg" alt="" />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          “Our React Native app shipped to both stores smoothly.
                          Push notifications and in-app payments work flawlessly.”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-author">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-3.jpg" alt="Lauren M" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Lauren M</h3>
                            <p>Marketing Manager, SaaS</p>
                          </div>
                        </div>
                        <div className="testimonial-quotes-img">
                          <img src="/images/testimonials-quotes-img.svg" alt="" />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          “Their SEO and content plan lifted organic traffic 170% in 90 days.
                          Weekly reports made it easy to track wins.”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* /Slider */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
