import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'

function PrivacyPolicy() {
  return (
    <>
      <NavbarWebsite />

      <div>
      <div className="container-fluid p-0 privacy-bg-container">
        <div className="privacy-bg-img d-flex align-items-center justify-content-center">
          <div className="privacy-heading text-center">
            <h1 className="text-uppercase fw-bolder">Privacy Policy</h1>
            <p className="fs-4 text-center">Our Commitment to a Safe Online Experience!</p>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="privacy-content">
          <div className="text-warning text-center">
            <h2 className="privacy-title fw-bolder" style={{ color: '#e69811' }}>Our Terms & Conditions</h2>
          </div>
          <div className="privacy-body">
            <p className="lead text-center text-secondary">
              Your Privacy, Our Priority: Committed to Protecting Your Personal Data and Ensuring a Safe Online Experience
            </p>

            <h4 className="text-warning fw-bold">1. Introduction</h4>
            <p>
              Your privacy is critically important to us. This Privacy Policy outlines the types of information we collect, how we use and safeguard that information, and your rights regarding your personal data. We are committed to protecting your privacy and ensuring a safe online experience for all our users.
            </p>

            <h4 className="text-warning fw-bold">2. Information We Collect</h4>
            <p>We collect various types of information in connection with the services we provide, including:</p>
            <ul style={{ color: 'var(--link-color-dark-mode)' }}>
              <li>Personal Information: Information that can be used to identify you, such as your name, email address, and payment information.</li>
              <li>Usage Data: Information about how you use our website, such as your IP address, browser type, and browsing history.</li>
            </ul>

            <h4 className="text-warning fw-bold">3. How We Use Your Information</h4>
            <p>We use your information to provide, maintain, and improve our services, including:</p>
            <ul style={{ color: 'var(--link-color-dark-mode)' }}>
              <li>Processing transactions and managing your account.</li>
              <li>Communicating with you about your account, our services, and promotional offers.</li>
              <li>Improving our website and customizing your user experience.</li>
            </ul>

            <h4 className="text-warning fw-bold">4. Data Security</h4>
            <p>
              We implement a variety of security measures to ensure the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h4 className="text-warning fw-bold">5. Your Rights</h4>
            <p>
              You have the right to access, update, and delete your personal information. If you have any questions or concerns about your privacy, please contact us.
            </p>

            <h4 className="text-warning fw-bold">6. Changes to This Privacy Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
            </p>

            <h4 className="text-warning fw-bold">7. Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="/contact-us">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </div>

      <FooterComponentWebsite />
    </>
  )
}

export default PrivacyPolicy