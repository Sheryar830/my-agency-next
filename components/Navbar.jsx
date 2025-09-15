"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    // <!-- Header Start -->
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <!-- Logo Start --> */}
            <Link className="navbar-brand" href="/">
              {/* <img src="/images/logo.svg" alt="Logo" /> */}
            </Link>
            {/* <!-- Logo End --> */}

            {/* <!-- Mobile Toggler --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Main Menu Start --> */}
            <div className="collapse navbar-collapse main-menu" id="mainNavbar">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li>
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/services">
                      Services
                    </Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" href="/project">
                      Our Projects
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Header Btn Start --> */}
              <div className="header-btn">
                <Link href="/contact" className="btn-default">
                  Get Started
                </Link>
              </div>
              {/* <!-- Header Btn End --> */}
            </div>
            {/* <!-- Main Menu End --> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
