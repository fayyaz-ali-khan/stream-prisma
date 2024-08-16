import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'
import sample from '../assets/images/blog1.png';

function BlogDetails() {

    const blog = {
        title: "Sample Blog Title",
        image: sample,
        short_description: "Stream Prisma is beneficial for everyone whether they are content creators, marketers, teachers, and students. Stream Prisma excels in the field of streaming with its powerful tools that are designed for the convenience of the audiences.",
        long_description: " Our website collects all possible data/information of a user, such as user preferences, viewing habits, and interactions with content so that our user will find his desired content/piece of interest easily on his next visit."
      };

    const latestBlogs = [
        {
          title: "Latest Blog 1",
          image: sample
        },
        {
          title: "Latest Blog 2",
          image: sample
        }
      ];
  return (

    <>
    <NavbarWebsite />

    <div className="back-color">
      <section>
        <div className="background-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 head-col">
                <h1 style={{ color: 'var(--primary-color)' }}>{blog.title}</h1>
              </div>
              <div className="col-lg-6">
                <div className="col-img">
                  <img
                    style={{ width: '100%', borderRadius: '20px' }}
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="box-contact">
                  <p>{blog.short_description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ marginBottom: '6%' }} className="col-lg-8 box-contact">
                <h2>How does stream Prisma work?</h2>
                <h4>1. Gathering Data</h4>
                <p>{blog.long_description}</p>
                <h4 className='mt-3'>2. Gathering Data</h4>
                <p>{blog.long_description}</p>
              </div>
              <div className="col-lg-4">
                <div className="box-contact2 mb-4">
                  <h3>LATEST NEWS</h3>
                  {latestBlogs.map((latest, index) => (
                    <div key={index}>
                      <img src={latest.image} alt="Latest Blog Image" />
                      <h4>{latest.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <FooterComponentWebsite />
    </>
  )
}

export default BlogDetails