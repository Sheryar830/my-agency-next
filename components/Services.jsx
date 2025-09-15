import React from "react";
import Link from "next/link";
import { servicesHero, servicesCards, servicesList } from "@/data/services";

const Services = () => {
  return (
    <div className="our-services">
      <div className="container">
        {/* Header */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">{servicesHero.smallTitle}</h3>
              {/* keep the <span> markup that your CSS expects */}
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
                dangerouslySetInnerHTML={{ __html: servicesHero.bigTitle }}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          {servicesCards.map((s, i) => (
            <div key={s.slug} className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay={`${i * 0.2}s`}>
                <div className="service-item-content">
                  <h3>
                    {/* if you have a detail page, this will go to /services/[slug] */}
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </h3>
                  <p>{s.blurb}</p>
                </div>
                <div className="service-item-image">
                  <figure>
                    <img src={s.image} alt={s.title} />
                  </figure>
                </div>
              </div>
            </div>
          ))}

          {/* Bulleted list */}
          <div className="col-lg-12">
            <div className="service-list wow fadeInUp" data-wow-delay="0.6s">
              <ul>
                {servicesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
