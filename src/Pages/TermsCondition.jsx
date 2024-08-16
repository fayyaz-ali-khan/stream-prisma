import React from "react";
import NavbarWebsite from "../Components/NavbarWebsite";
import FooterComponentWebsite from "../Components/FooterComponentWebsite";

function TermsCondition() {
  return (
    <>
      <NavbarWebsite />

      <div>
      <div className="container-fluid p-0 terms-bg-container">
        <div className="terms-bg-img d-flex align-items-center justify-content-center">
          <div className="terms-heading text-center">
            <h1 className="text-uppercase fw-bolder">Terms & Conditions</h1>
            <p className="fs-4 text-center">
              Clear Guidelines for Using Our Services Responsibly
            </p>
          </div>
        </div>
      </div>

      {/* Terms & Condition Section */}
      <div className="container my-5 py-5">
        <div>
          <div className="terms-header text-warning">
            <h2 className="terms-title text-center fw-bolder">Terms and Conditions</h2>
          </div>
          <div className="terms-body">
            <div className="terms-body">
              <p className="lead text-center text-secondary">
                These terms and conditions outline the rules and regulations for the use of Stream Prisma's website and services.
              </p>

              <h4 className="text-warning fw-bold">1. Introduction</h4>
              <p>
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Stream Prisma if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h4 className="text-warning fw-bold">2. License</h4>
              <p>
                Unless otherwise stated, Stream Prisma and/or its licensors own the intellectual property rights for all material on Stream Prisma. All intellectual property rights are reserved. You may access this from Stream Prisma for your own personal use subjected to restrictions set in these terms and conditions.
              </p>

              <h4 className="text-warning fw-bold">3. User Content</h4>
              <p>
                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Stream Prisma does not filter, edit, publish or review Comments prior to their presence on the website.
              </p>

              <h4 className="text-warning fw-bold">4. Content Liability</h4>
              <p>
                We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website.
              </p>

              <h4 className="text-warning fw-bold">5. Reservation of Rights</h4>
              <p>
                We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request.
              </p>

              <h4 className="text-warning fw-bold">6. Disclaimer</h4>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
              </p>

              <h4 className="text-warning fw-bold">7. Changes to Terms</h4>
              <p>
                Stream Prisma reserves the right to revise these terms at any time as it sees fit. By using this website, you are expected to review these terms on a regular basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <FooterComponentWebsite />
    </>
  );
}

export default TermsCondition;
