import React from "react";
import NavbarWebsite from "../Components/NavbarWebsite";
import FooterComponentWebsite from "../Components/FooterComponentWebsite";
import image1 from "../assets/images/card1.jpg";
import profile from "../assets/images/profile.webp";

function SuccessStories() {
  const blogs = [
    {
      id: 1,
      image: image1,
      logo: profile,
      username: "User1",
      watch_time: "10",
      views: "1.5",
      duration: "5 mins",
    },
    {
      id: 2,
      image: image1,
      logo: profile,
      username: "User2",
      watch_time: "20",
      views: "2.3",
      duration: "10 mins",
    },
    // Add more blog objects as needed
  ];
  return (
    <>
      <NavbarWebsite />

      <div>
        <div className="container-fluid p-0 blog-bg-container">
          <div className="blogs-bg-img">
            <div className="blog-heading">
              <h1 className="text-uppercase fw-bolder text-center">
                Success Stories
              </h1>
              <p className="fs-4 text-center">
                Stories of our Streaming Success!
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div style={{ marginBottom: "60px" }}>
            {/* Placeholder for topics */}
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="col-lg-4">
                      <div className="blog-card">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="blog-image"
                        />
                        <div className="blog-content">
                          <div className="row p-3">
                            <div className="row mb-3">
                              <div className="col-lg-6 d-flex gap-3">
                                {blog.logo ? (
                                  <img 
                                  width={"25px"}
                                  height={"25px"} style={{borderRadius:'50px'}}
                                    src={blog.logo}
                                    alt="User Logo"
                                    className="user-logo"
                                  />
                                ) : (
                                  <p>No Logo</p>
                                )}
                                
                                <p className="username">{blog.username}</p>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <p className="time">Watch time</p>
                              <p className="number">{blog.watch_time} hours</p>
                            </div>
                            <div className="col-lg-6">
                              <p className="time">Total VIEWS</p>
                              <p className="number">{blog.views} M</p>
                            </div>
                            <div>
                              <p className="time">VIEW DURATION</p>
                              <p className="number">{blog.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponentWebsite />
    </>
  );
}

export default SuccessStories;
