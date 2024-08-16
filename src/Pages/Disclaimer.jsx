import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'

function Disclaimer() {
  return (
    <>
      <NavbarWebsite />

      <div>
      <div className="container-fluid p-0 disclaimer-bg-container">
        <div className="disclaimer-bg-img d-flex align-items-center justify-content-center">
          <div className="disclaimer-heading text-center">
            <h1 className="text-uppercase fw-bolder">Disclaimer</h1>
            <p className="fs-4 text-center">Limiting Liability and Setting Clear Expectations for Users!</p>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="container my-5 py-5">
        <div>
          <div className="disclaimer-header text-warning">
            <h2 className="disclaimer-title text-center fw-bolder">Disclaimer</h2>
          </div>
          <div className="disclaimer-body">
            <p className="lead text-secondary text-center">
              This disclaimer is designed to clarify the limitations of our liability and set clear expectations for users of Stream Prisma.
            </p>

            <h4 className="text-warning fw-bold">1. General Information</h4>
            <p>
              The information provided on this website is intended for general informational purposes only. It should not be considered as professional advice or a substitute for seeking professional guidance.
            </p>

            <h4 className="text-warning fw-bold">2. No Warranty</h4>
            <p>
              Stream Prisma makes no representation or warranty, express or implied, regarding the accuracy, completeness, reliability, or availability of the content on this site. The use of the information is at the user’s own risk.
            </p>

            <h4 className="text-warning fw-bold">3. Not Financial, Legal, or Medical Advice</h4>
            <p>
              The content on this website does not constitute financial, legal, medical, or any other professional advice. Users should consult with the relevant professionals for specific advice related to their situation.
            </p>

            <h4 className="text-warning fw-bold">4. Third-Party Links</h4>
            <p>
              This website may contain links to third-party websites or content. These links are provided for convenience only, and Stream Prisma does not endorse, warrant, or assume liability for the content or practices of these third-party sites.
            </p>

            <h4 className="text-warning fw-bold">5. No Endorsement</h4>
            <p>
              The presence of any link or reference to a third-party website, product, or service does not imply an endorsement or recommendation by Stream Prisma.
            </p>

            <h4 className="text-warning fw-bold">6. No Guarantee of Results</h4>
            <p>
              Stream Prisma does not guarantee any specific results or outcomes based on the use of its products, services, or information provided on this website.
            </p>

            <h4 className="text-warning fw-bold">7. Copyright and Intellectual Property</h4>
            <p>
              All content, including text, images, logos, and graphics, on this website is the property of Stream Prisma and is protected by applicable copyright and intellectual property laws.
            </p>

            <h4 className="text-warning fw-bold">8. Changes and Updates</h4>
            <p>
              Stream Prisma may update, modify, or remove any information on this website without prior notice. It is the user’s responsibility to stay informed of any changes.
            </p>

            <h4 className="text-warning fw-bold">9. Indemnification</h4>
            <p>
              By using this website, users agree to indemnify and hold harmless Stream Prisma from any claims, damages, or expenses arising out of their use of the site.
            </p>
          </div>
        </div>
      </div>
    </div>

      <FooterComponentWebsite />
    </>
  )
}

export default Disclaimer