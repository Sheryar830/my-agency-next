"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// required styles
import "swiper/css";
import "swiper/css/free-mode";

import { testimonialsIntro, testimonials } from "@/data/testimonials";

function Row({ items, reverse = false, speed = 9000 }) {
  const loopItems = [...items, ...items];
  const count = Math.max(items.length, 1);

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      className="tms-row"
      slidesPerView="auto"
      spaceBetween={18}
      loop
      loopAdditionalSlides={count * 2}
      freeMode={{ enabled: true, momentum: false }}
      allowTouchMove={false}
      watchSlidesProgress
      speed={speed}
      autoplay={{
        delay: 1,                         // use 1ms (0 can stall on some setups)
        reverseDirection: reverse,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false,
      }}
      observer
      observeParents
      resizeObserver
      onBeforeInit={(sw) => {
        sw.wrapperEl.style.transitionTimingFunction = "linear";
      }}
      onResize={(sw) => {
        sw.wrapperEl.style.transitionTimingFunction = "linear";
      }}
      onSlideChangeTransitionStart={(sw) => {
        sw.wrapperEl.style.transitionTimingFunction = "linear";
      }}
    >
      {loopItems.map((t, idx) => (
        <SwiperSlide key={`${t.id}-${idx}`}>
          <article className="tms-card">
            <header className="tms-head">
              <div className="tms-avatar">
                <img
                  src={t.avatar.startsWith("/") ? t.avatar : `/${t.avatar}`}
                  alt={t.name}
                />
              </div>
              <div className="tms-meta">
                <h4>{t.name}</h4>
                <small>{t.role}</small>
              </div>
            </header>
            <p className="tms-text">“{t.text}”</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function TestimonialsMarquee() {
  const mid = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, mid);
  const rowB = testimonials.slice(mid);

  return (
    <section className="tms-wrap">
      <div className="container">
        <div className="tms-headline text-center">
          <span>{testimonialsIntro.badge}</span>
          <h2 className="tms-title">{testimonialsIntro.title}</h2>
          <p className="tms-blurb">{testimonialsIntro.blurb}</p>
        </div>

        {/* optional soft fades */}
        <div className="tms-mask tms-mask-left" />
        <div className="tms-mask tms-mask-right" />

        <div className="tms-rows">
          <Row items={rowA} speed={9000} />
          <Row items={rowB.length ? rowB : rowA} reverse speed={9000} />
        </div>
      </div>
    </section>
  );
}
