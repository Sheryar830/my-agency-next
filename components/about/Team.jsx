import React from 'react'

const Team = () => {
  return (
    <div className="our-team">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">our team</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                The people behind your <span>digital success</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Member 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="team-item wow fadeInUp">
              <div className="team-image">
                <a href="/team/sheryar-waris" className="image-anime" data-cursor-text="View">
                  <figure>
                    <img src="images/team-2.jpg" alt="Sheryar Waris" />
                  </figure>
                </a>
              </div>
              <div className="team-body">
                <div className="team-content">
                  <h3><a href="/team/sheryar-waris">Sheryar Waris</a></h3>
                  <p>Founder & CEO</p>
                </div>
                <div className="team-social-list">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-image">
                <a href="/team/adeel-khan" className="image-anime" data-cursor-text="View">
                  <figure>
                    <img src="images/team-2.jpg" alt="Adeel Khan" />
                  </figure>
                </a>
              </div>
              <div className="team-body">
                <div className="team-content">
                  <h3><a href="/team/adeel-khan">Adeel Khan</a></h3>
                  <p>Project Manager</p>
                </div>
                <div className="team-social-list">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-image">
                <a href="/team/ava-mitchell" className="image-anime" data-cursor-text="View">
                  <figure>
                    <img src="images/team-3.jpg" alt="Ava Mitchell" />
                  </figure>
                </a>
              </div>
              <div className="team-body">
                <div className="team-content">
                  <h3><a href="/team/ava-mitchell">Ava Mitchell</a></h3>
                  <p>Creative Director</p>
                </div>
                <div className="team-social-list">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="team-image">
                <a href="/team/ethan-carter" className="image-anime" data-cursor-text="View">
                  <figure>
                    <img src="images/team-4.jpg" alt="Ethan Carter" />
                  </figure>
                </a>
              </div>
              <div className="team-body">
                <div className="team-content">
                  <h3><a href="/team/ethan-carter">Ethan Carter</a></h3>
                  <p>Marketing Head</p>
                </div>
                <div className="team-social-list">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team
