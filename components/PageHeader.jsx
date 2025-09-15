import React from "react";
import Link from "next/link";

/**
 * Drop-in header that keeps your design.
 * Usage: <PageHeader title="About us" />
 */
export default function PageHeader({ title = "About us" }) {
  return (
    // Page Header Start
    <div className="page-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* Page Header Box Start */}
            <div className="page-header-box">
              <h1 className="wow fadeInUp" data-cursor="-opaque">
                {title.split(" ")[0]} <span>{title.split(" ").slice(1).join(" ")}</span>
              </h1>

              <nav className="wow fadeInUp" data-wow-delay="0.2s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title.toLowerCase()}
                  </li>
                </ol>
              </nav>
            </div>
            {/* Page Header Box End */}
          </div>
        </div>
      </div>
    </div>
    // Page Header End
  );
}
