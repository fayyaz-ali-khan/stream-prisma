import React from "react";
import NavbarWebsite from "../Components/NavbarWebsite";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "../assets/images/video.png";
import logo from "../assets/images/logoNewDark.png";
import PriceWebsite from "../Components/PriceWebsite";
import FooterComponentWebsite from "../Components/FooterComponentWebsite";

function HomeWebsite() {
  return (
    <>
    <header>
      <NavbarWebsite />

      {/* hero section */}
      <section>
        <div className="bg-image hero_section pt-5">
          <div className="container d-flex align-items-center h-100">
            <div className="row pt-5">
              <div className="col-lg-7 pt-5 pb-4">
                <h1
                  className="mb-5 text-light"
                  data-mdb-animation-init
                  data-mdb-toggle="animation"
                  data-mdb-animation="slide-in-left"
                  data-mdb-animation-start="onScroll"
                  data-mdb-animation-on-scroll="repeat"
                >
                  RUN 24/7 LIVE STREAM OF PRE-RECORDED VIDEOS
                </h1>
                <p className="fs-5 fw-bold">
                  Use to seamlessly stream pre-recorded videos around the clock
                  as live content on platforms like YouTube, Twitch, Instagram,
                  Facebook.
                </p>
                <div className="d-flex mt-5 gap-3">
                  <Link to="/get-for-free">
                    <Button className="btn btn_primary">Get for Free</Button>
                  </Link>
                  <Link to="/story">
                    <Button className="btn btn_primary">Success Stories</Button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 mb-3">
                <img style={{ width: "88%" }} src={video} alt="Video Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>

    {/* // second section */}
    <section className="section_2 py-lg-4 py-0" id="section_2">
      <div className="container my-lg-5 my-2">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center my-4">What is Stream Prisma</h1>
          </div>
          
          {/* First Card */}
          <div className="col-lg-6 cards_sec mt-4">
            <Card className="card_design" style={{ height: '245px' }}>
              <div className="card-front d-flex flex-column justify-content-around">
                <img
                  src={logo}
                  alt=""
                  style={{ width: '100px', height: 'auto' }}
                />
                <h5 className="py-3">
                  Stream Prisma is a tool that helps you play video files 24/7 in a continuous stream to leading social media platforms.
                </h5>
              </div>
              <div className="card-back d-flex flex-column justify-content-around">
                <img
                  src="/path-to-your-image/stream-prisma2-logo.png"
                  alt=""
                  style={{ width: '100px', height: 'auto' }}
                />
                <h5 className="py-3">
                  Stream Prisma empowers users to broadcast their videos live or on-demand, reaching their audience with professional-quality streaming.
                </h5>
              </div>
            </Card>
          </div>

          {/* Second Card */}
          <div className="col-lg-6 cards_sec mt-4">
            <Card className="card_design" style={{ height: '245px' }}>
              <div className="card-front d-flex flex-column justify-content-around">
                <img
                  src={logo}
                  alt=""
                  style={{ width: '100px', height: 'auto' }}
                />
                <h5 className="py-3">
                  Stream Prisma offers a robust solution for uninterrupted video streaming, enabling you to broadcast your media files continuously on leading social networks.
                </h5>
              </div>
              <div className="card-back d-flex flex-column justify-content-around">
                <img
                  src="/path-to-your-image/stream-prisma2-logo.png"
                  alt=""
                  style={{ width: '100px', height: 'auto' }}
                />
                <h5 className="py-3">
                  Stream Prisma empowers users to broadcast their videos live or on-demand, reaching their audience with professional-quality streaming.
                </h5>
              </div>
            </Card>
          </div>
        </div>

        {/* Read More Button */}
        <div className="about-btn d-flex justify-content-center mt-3">
          <Link to="/about">
            <Button className="btn btn_primary">Read More</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* third section */}
    <section className="section_3">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center my-4">How Does Stream Prisma Work</h1>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 cards_sec mt-4">
            <div className="card card_design h-100 m-0">
              <h1>1</h1>
              <h5 className="py-3">
                Stream Prisma gathers a vast amount of data on user preferences, viewing habits, and interactions with content.
              </h5>
              <div>
                <Link to="/signup" className="btn btn_primary">Try Free</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 cards_sec mt-4">
            <div className="card card_design h-100">
              <h1>2</h1>
              <h5 className="py-3">
                Through data analysis, Stream Prisma creates individual user profiles based on factors such as past viewing history, liked/disliked content, genre preferences, and demographic information.
              </h5>
              <div>
                <Link to="/signup" className="btn btn_primary">Try Free</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 cards_sec mt-4">
            <div className="card card_design h-100">
              <h1>3</h1>
              <h5 className="py-3">
                Each piece of content available on Stream Prisma is analyzed and categorized based on various attributes such as genre, themes, actors, directors, and more.
              </h5>
              <div>
                <Link to="/signup" className="btn btn_primary">Try Free</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 cards_sec mt-4">
            <div className="card card_design h-100">
              <h1>4</h1>
              <h5 className="py-3">
                Users are then presented with a personalized list of recommended content on their home screens or through specific recommendation sections.
              </h5>
              <div>
                <Link to="/signup" className="btn btn_primary">Try Free</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* price section */}
    <PriceWebsite />

    {/* faq */}
    <section>
      <div className="container">
        <div className="row topper">
          <div className="col-lg-6">
            <h1 className="mb-4" style={{ color: 'var(--primary-color)', fontSize:'42px', fontWeight:'900' }}>FAQ</h1>
            <p style={{ fontSize: '18px' }}>
              Our teams are here to help, feel free to contact us! Here are some frequently asked questions to get you started:
            </p>
          </div>
          <div className="col-lg-6">
            <div className="faqs-box">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      style={{ color: 'var(--primary-color)' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Is my content saved after the live broadcast is over?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, your content is typically saved after the live broadcast is over. Many streaming platforms offer the option to automatically save the recorded broadcast, allowing you to access, edit, and share it later. This feature ensures that your content remains available for future viewing, distribution, and archival purposes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      style={{ color: 'var(--primary-color)' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What are the limitations of live streaming?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Live streaming has several limitations, including the need for a stable and fast internet connection to prevent buffering and interruptions, potential technical issues such as equipment failures or software glitches, challenges in reaching and engaging a large audience, latency issues affecting real-time interaction, difficulty in controlling and editing live content, legal and copyright concerns, the challenge of managing viewer interactions in real-time, and the potential high cost of high-quality streaming equipment and services.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      style={{ color: 'var(--primary-color)' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What is the difference between live streaming and live broadcasting?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Live streaming and live broadcasting both involve transmitting live video and audio to an audience in real-time, but there are key differences between the two. Live streaming typically refers to content delivered over the internet using platforms like YouTube, Twitch, or social media, allowing for interactive features such as live chat and viewer feedback.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      style={{ color: 'var(--primary-color)' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Is streaming always live?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      No, streaming is not always live. While live streaming involves broadcasting content in real-time, there are also pre-recorded videos or audio files that can be streamed on demand. This means that users can access and play the content at their convenience, without it being live. Many streaming platforms offer both live and on-demand streaming options.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      style={{ color: 'var(--primary-color)' }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Can I connect Stream-Prisma to my Facebook business account?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can connect Stream-Prisma to your Facebook business account. This allows you to seamlessly broadcast your live streams to your Facebook audience, engage with your followers in real-time, and expand your reach on the platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponentWebsite />
    </>
  );
}

export default HomeWebsite;
