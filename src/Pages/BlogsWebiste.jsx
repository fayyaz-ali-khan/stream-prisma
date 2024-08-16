import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'
import card from '../assets/images/card2.jpg';
import { Link } from 'react-router-dom';

function BlogsWebiste() {
    // Sample categories and blogs data
  const categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Health' },
    { id: 3, name: 'Lifestyle' },
    // Add more categories as needed
  ];

  const blogs = [
    {
      id: 1,
      image: card,
      created_at: '2024-08-11',
      category: { name: 'Technology' },
      title: 'The Future of AI',
    },
    {
      id: 2,
      image: card,
      created_at: '2024-08-10',
      category: { name: 'Health' },
      title: 'Benefits of a Balanced Diet',
    },
    // Add more blog objects as needed
  ];
  return (
    <>
      <NavbarWebsite />

      <div>
      <div className="container-fluid p-0 blog-bg-container">
        <div className="blog-bg-img">
          <div className="blog-heading">
            <h1 className="text-uppercase fw-bolder text-center">OUR BLOG</h1>
            <p className="fs-4 text-center">Stay Informed with Our Streaming Blog</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '50px' }} className="container">
        <div className="container">
          <ul style={{ display: 'flex', justifyContent: 'space-between' }} className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <div>
              <h2 className="fw-bolder" style={{ color: 'var(--secondary-color)' }}>ALL TOPICS</h2>
            </div>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              <li className="nav-item" role="presentation">
                <a className="active btn-new2" href="#all-topics" role="tab" aria-controls="pills-home" aria-selected="true">All TOPICS</a>
              </li>
              {categories.map((category) => (
                <li className="nav-item" role="presentation" key={category.id}>
                  <a className="active btn-new2" href={`#${category.name.toLowerCase()}`} role="tab" aria-controls={`pills-${category.name.toLowerCase()}`} aria-selected="false">
                    {category.name}
                  </a>
                </li>
              ))}
            </div>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-lg-3" key={blog.id}>
                    <div className="blog-card">
                      <Link to={'/blogdetails'}>
                        <img src={blog.image} alt="Blog Image" className="blog-image" />
                      </Link>
                      <div className="blog-content">
                        <p className="blog-date">{blog.created_at}</p>
                        <h3 className="blog-category">{blog.category.name}</h3>
                        <h2 className="blog-title">{blog.title}</h2>
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
  )
}

export default BlogsWebiste