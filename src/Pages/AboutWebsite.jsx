import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'
import about from '../assets/images/about-team.png';
import logo from '../assets/images/logoNew.png';
import lets from '../assets/images/about-team.png';

function AboutWebsite() {
  return (
    <>
    <NavbarWebsite />

    {/* section */}
    <div className="container-fluid p-0 about-bg-container">
      <div className="about-bg-img d-flex align-items-center justify-content-center">
        <div className="about-heading text-center">
          <h1 className="text-uppercase fw-bolder">About Us</h1>
          <p className="fs-4 text-center text-light">Connecting Creators and Audiences Worldwide!</p>
        </div>
      </div>
    </div>

    {/* section */}
    <section className="section_2 py-lg-4 py-0" id="section_2">
        <div className="container my-lg-5 my-2">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center my-4">What is Stream Prisma</h1>
            </div>
            <div className="col-lg-5 cards_sec mt-4">
              <div className="card card_design" style={{ height: '245px' }}>
                <div className="card-front d-flex flex-column justify-content-around">
                  <img
                    src={logo}
                    alt="Stream Prisma"
                    style={{ width: '100px', height: 'auto' }}
                  />
                  <h5 className="py-3">
                    Stream Prisma is a tool that helps you play video files 24/7 in a continuous stream to leading social media platforms.
                  </h5>
                </div>
                <div className="card-back d-flex flex-column justify-content-around">
                  <img
                    src={logo}
                    alt="Stream Prisma"
                    style={{ width: '100px', height: 'auto' }}
                  />
                  <h5 className="py-3">
                    Stream Prisma empowers users to broadcast their videos live or on-demand, reaching their audience with professional-quality streaming.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-4">
              <div className="card card_design h-100 p-4 d-flex justify-content-center align-items-center">
                <h1 className="py-3 w-75 text-center">Explore Video</h1>
                <span
                  className="play-btn video-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  data-bs-src="https://www.youtube.com/embed/EzDC8aAJln0"
                >
                  <svg
                    style={{ cursor: 'pointer' }}
                    width="95"
                    height="95"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="47.9258"
                      cy="47.0742"
                      r="46.0742"
                      fill="#FF0049"
                      stroke="#FF0049"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M61.4219 47.0732L41.1767 58.7618L41.1767 35.3846L61.4219 47.0732Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="about-team">
          <div className="container">
            <h2 className="text-center text-uppercase fw-bolder fs-1 pt-5">How we work</h2>
            <p className="text-center text-light text-capitalize my-2">
              We prioritize user experience by providing seamless streaming
            </p>
            <div className="row py-5">
              <div className="col-lg-4 col-12 my-4 d-flex align-items-center justify-content-center">
                <h5 className="text-light fw-bolder fs-2">Proficient Team</h5>
              </div>
              <div className="col-lg-4 col-12 my-4 team-img">
                <img
                  src={about}
                  alt="Team"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-4 col-12 my-4 team-qualities d-flex justify-content-center align-items-center">
                <ul>
                  <li>Interdisciplinary teams with big ideas</li>
                  <li>Highly efficient and exceptional team</li>
                  <li>Brings unmatched expertise to every project.</li>
                  <li>Innovative minds ensuring seamless streaming</li>
                  <li>Committed to superior streaming experiences.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Grow Section */}
      <section className="about-grow">
        <div className="container">
          <div className="row mx-lg-5 mt-5">
            <div className="col-lg-6 about-grow-text">
              <h2 className="text-uppercase fs-1 fw-bolder text-lg-start text-center text-nowrap">
                Let’s grow together
              </h2>
              <p className="mt-4">
                At Stream Prisma, we believe in the power of collaboration and community. Join us on a journey to elevate your creativity, reach wider audiences, and inspire others. Together, we can achieve greatness and transform the world of streaming. Our service empowers users to broadcast their content live or on-demand, reaching a global audience with ease. We provide a seamless streaming experience, backed by innovative technology and a dedicated team. Whether you're a content creator, educator, or entertainer, Stream Prisma offers the tools and support you need to engage and grow your audience. Join us today and elevate your streaming journey.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-grow-img d-flex align-items-center justify-content-center">
                <img
                  src={lets}
                  alt="Let Grow Together"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponentWebsite />
    </>
  )
}

export default AboutWebsite