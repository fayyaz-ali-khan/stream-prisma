import React, { useState } from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'

function ContactUsWebsite() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      const [formErrors, setFormErrors] = useState({});
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform validation here and set errors if any
        const errors = {};
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Email address is required';
        if (!formData.message) errors.message = 'Message is required';
    
        if (Object.keys(errors).length > 0) {
          setFormErrors(errors);
          setErrorMessage('Whoops! There were some problems with your input.');
        } else {
          setFormErrors({});
          setSuccessMessage('Your message has been sent successfully!');
          // Clear form fields after submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        }
      };
  return (
    <>
    <NavbarWebsite />

    {/* Contact Background Section */}
    <div className="container-fluid p-0 contact-bg-container">
        <div className="contact-bg-img">
          <div className="contact-heading">
            <h1 className="text-uppercase fw-bolder text-center">Get in Touch</h1>
            <p className="fs-4 text-center">
              Our teams are here to help, Feel free to contact us!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container contact-us-form">
          {successMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMessage}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setSuccessMessage('')}
              ></button>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Whoops!</strong> {errorMessage}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setErrorMessage('')}
              ></button>
            </div>
          )}
          {Object.keys(formErrors).length > 0 && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <ul>
                {Object.values(formErrors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setFormErrors({})}
              ></button>
            </div>
          )}

          <div className="row justify-content-center text-center mb-3">
            <div className="col-lg-8 col-xxl-7">
              <span className="text-muted">Let's Talk</span>
              <h2 className="display-5 fw-bold mb-3 text-uppercase">Contact Us</h2>
              <p className="lead">
                We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out to us.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h5 className="fw-semibold mb-3">Send us a message</h5>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        className="form-control bg-light"
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {formErrors.firstName && (
                        <div style={{ color: 'red' }}>{formErrors.firstName}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        className="form-control bg-light"
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {formErrors.lastName && (
                        <div style={{ color: 'red' }}>{formErrors.lastName}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <input
                        className="form-control bg-light"
                        placeholder="Email address"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <div style={{ color: 'red' }}>{formErrors.email}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control bg-light"
                    placeholder="Your message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.message && (
                    <div style={{ color: 'red' }}>{formErrors.message}</div>
                  )}
                </div>
                <div className="col-md-4 ms-auto" style={{ width: '150px' }}>
                  <div className="d-grid">
                    <button className="active btn_primary" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center">
              <div>
                <div className="mb-4">
                  <h5>Address</h5>
                  <p>Al Manara Tower, 16th Floor- Business Bay-Dubai.</p>
                </div>
                {/* Uncomment and update the phone section if needed */}
                {/* <div className="mb-4">
                  <h5>Phone</h5>
                  <p>+1 123-456-7890</p>
                </div> */}
                <div className="mb-4">
                  <h5>Email</h5>
                  <p style={{ marginBottom: 'auto' }}>Vipin Kumar Singh</p>
                  <p>info@streamprisma.com</p>
                </div>
                <div className="mb-4">
                  <h5>Socials</h5>
                  <div className="d-flex align-items-center">
                    <a className="me-2" href="https://www.twitter.com">
                      <i className="fa-brands fa-square-x-twitter" style={{ fontSize: '16px', color: '#6A727A' }}></i>
                    </a>
                    <a className="me-2" href="https://www.facebook.com/profile.php?id=61561903647573">
                      <i className="fa-brands fa-square-facebook" style={{ fontSize: '16px', color: 'rgb(106, 114, 122)' }}></i>
                    </a>
                    <a className="me-2" href="https://www.instagram.com/bitenexus/?utm_source=qr&igsh=MTZvcnJsdDRqa2gzcQ%3D%3D">
                      <i className="fa-brands fa-square-instagram" style={{ fontSize: '16px', color: 'rgb(106, 114, 122)' }}></i>
                    </a>
                    <a className="me-2" href="https://www.linkedin.com/in/yourprofile">
                      <i className="fa-brands fa-linkedin" style={{ fontSize: '16px', color: 'rgb(106, 114, 122)' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <FooterComponentWebsite />
    </>
  )
}

export default ContactUsWebsite