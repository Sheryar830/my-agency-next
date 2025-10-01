"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Sheryar Waris",
    role: "Full Stack Developer",
    text: "Their service is top-notch. Extremely satisfied!",
    avatar: "/images/faceless.avif",
  },
  {
    id: 2,
    name: "Ayesha Noor",
    role: "UI/UX Designer",
    text: "Amazing experience with the team. Highly recommended!",
    avatar: "/images/faceless.avif",
  },
  {
    id: 3,
    name: "Ali Hamza",
    role: "Product Manager",
    text: "Professional and timely delivery every time.",
    avatar: "/images/faceless.avif",
  },
  // Add more if needed
];

export default function TestimonialsMarquee() {
  return (
    <section className="testimonial-wrap">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        onBeforeInit={(sw) => {
          sw.wrapperEl.style.transitionTimingFunction = "linear";
        }}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <SwiperSlide key={`${t.id}-${idx}`} style={{ width: "auto" }}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4>{t.name}</h4>
                  <small>{t.role}</small>
                </div>
              </div>
              <p className="testimonial-text">“{t.text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
