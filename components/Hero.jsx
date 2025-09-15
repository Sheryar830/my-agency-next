"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import { heroData } from "@/data/hero";

export default function Hero() {
  const { title, subtitle, ctas, logos } = heroData;

  return (
    <div className="hero">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/robot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-content">
              <div className="section-title">
                <h1 className="wow fadeInUp hero-title" data-cursor="-opaque">
                  {title.pre}
                  <span>{title.highlight}</span>
                  {title.post}
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {subtitle}
                </p>
              </div>

              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                {ctas.map((btn) => (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className={`btn-default${
                      btn.highlighted ? " btn-highlighted" : ""
                    }`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>

              <div className="hero-company-slider">
                <p>Already chosen by the leaders</p>

                <Swiper
                  modules={[Autoplay, FreeMode]}
                  slidesPerView={4}
                  spaceBetween={24}
                  freeMode
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  speed={3000}
                  loop
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    992: { slidesPerView: 5 },
                  }}
                >
                  {logos.map((n, i) => (
                    <SwiperSlide key={`${n}-${i}`}>
                      <div className="company-logo">
                        <img
                          src={`/images/company-logo-${n}.svg`}
                          alt={`Company ${n}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS suggestion */}
      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
        }
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          color: white;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55); /* adjust opacity */
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
