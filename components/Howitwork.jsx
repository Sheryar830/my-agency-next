"use client";
import React, { useEffect, useRef } from "react";
import { howItWorks } from "@/data/howItWorks";

export const Howitwork = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const { headingSmall, headingBig, steps, video, footer } = howItWorks;

  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row">
          {/* Left: content */}
          <div className="col-lg-6">
            <div className="how-work-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{headingSmall}</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                  dangerouslySetInnerHTML={{ __html: headingBig }}
                />
              </div>

              <div className="how-work-steps">
                {steps.map((s) => (
                  <div
                    key={s.stepNo}
                    className="how-work-item wow fadeInUp"
                    data-wow-delay={s.delay}
                  >
                    <div className="how-work-header">
                      <div className="icon-box">
                        <img src={s.icon} alt="" />
                      </div>
                      <div className="how-work-step-no">
                        <p>{s.stepNo}</p>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: video */}
          <div className="col-lg-6">
            <div className="how-work-video-content">
              <div className="how-work-video">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  poster={video.poster}
                  suppressHydrationWarning
                >
                  {video.sources.map((src) => (
                    <source key={src.src} src={src.src} type={src.type} />
                  ))}
                </video>
              </div>

              <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  {footer.text} <a href={footer.cta.href}>{footer.cta.label}</a>
                </p>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </div>
  );
};
