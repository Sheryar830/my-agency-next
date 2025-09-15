// components/AboutStats.jsx
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { aboutStats } from "@/data/aboutStats";

const Stat = ({ title, end, suffix = "", icon, img }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <div className="about-us-box">
        <div className="about-us-item">
          <div className="about-item-content">
            <h3>{title}</h3>
            <h2>
              <CountUp start={0} end={inView ? end : 0} duration={1.8} separator="," />
              {suffix}
            </h2>
          </div>
          <div className="icon-box">
            <img src={`/images/${icon}`} alt="" aria-hidden="true" loading="lazy" />
          </div>
        </div>

        <div className="about-item-image">
          <img src={`/images/${img}`} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default function AboutStats() {
  const { headingSmall, headingLarge, items } = aboutStats;

  return (
    <div className="about-us">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">{headingSmall}</h3>
              <h2 className="text-effect" data-cursor="-opaque">
                {headingLarge}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((it) => (
            <Stat
              key={it.title}
              title={it.title}
              end={it.end}
              suffix={it.suffix}
              icon={it.icon}
              img={it.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
