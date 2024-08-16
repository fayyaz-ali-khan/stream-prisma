import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logoNewDark.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function FooterComponentWebsite() {
    const socialLinks = {
        twitter: 'https://twitter.com/streamprisma',
        facebook: 'https://facebook.com/streamprisma',
        instagram: 'https://instagram.com/streamprisma',
        linkedin: 'https://linkedin.com/company/streamprisma'
      };
    
  return (
    <>
    <footer className="Footer_landing">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-sm-12 mb-5">
            <div className="h-75">
              <a href="/" className="ms-md-5 d-flex justify-content-md-start justify-content-center">
                <img
                  style={{ width: '150px' }}
                  src={logo}
                  alt="Stream Prisma Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <form>
              <div className="form-group footer-form my-5">
                <label htmlFor="exampleInputEmail1"></label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your email"
                />
                <div className="footer-form-button">
                  <button type="submit" className="btn btn-warning rounded-pill">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <ul>
              <li>
                <h2 style={{ fontWeight: 700 }}>Stream Prisma</h2>
              </li>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/privacypolicy" className="nav-link">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="nav-link">Disclaimer</Link></li>
              <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <ul>
              <li>
                <h2 style={{ fontWeight: 700 }}>Learn More</h2>
              </li>
              <li><Link to="/blogs" className="nav-link">Blog</Link></li>
              <li><Link to="/successtories" className="nav-link">Success Stories</Link></li>
              <li><Link to="/termsconditions" className="nav-link">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h2 style={{ fontWeight: 700, marginLeft: '35px' }}>Follow Us</h2>
            <ul className="nav">
              {socialLinks.twitter && (
                <li>
                  <a href={socialLinks.twitter} className="nav-link" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter fs-2 me-3"></i>
                    <FaXTwitter />
                  </a>
                </li>
              )}
              {socialLinks.facebook && (
                <li>
                  <a href={socialLinks.facebook} className="nav-link" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook fs-2 me-3"></i>
                    <FaFacebook />
                  </a>
                </li>
              )}
              {socialLinks.instagram && (
                <li>
                  <a href={socialLinks.instagram} className="nav-link" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram fs-2 me-3"></i>
                    <FaInstagramSquare />
                  </a>
                </li>
              )}
              {socialLinks.linkedin && (
                <li>
                  <a href={socialLinks.linkedin} className="nav-link" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fs-2 me-3"></i>
                    <FaLinkedin />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="copyright d-flex justify-content-center" style={{ color: '#999999' }}>
          &copy; Copyright <strong style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '18px', color: '#ffff', margin: '0 4px' }}>Stream Prisma</span></strong> All Rights Reserved
        </div>
      </div>
    </footer>
    </>
  )
}

export default FooterComponentWebsite