import React from 'react'
import NavbarWebsite from '../Components/NavbarWebsite'
import FooterComponentWebsite from '../Components/FooterComponentWebsite'
import PriceWebsite from '../Components/PriceWebsite'

function PricingWebsite() {
  return (
    <>
    <NavbarWebsite />

    {/* Pricing Background Section */}
    <div className="container-fluid p-0 pricing-bg-container">
        <div className="pricing-bg-img d-flex align-items-center justify-content-center">
          <div className="pricing-heading text-center">
            <h1 className="text-uppercase fw-bolder">Purchase Plan</h1>
            <p className="fs-4 text-center">
              Find the Right Plan to Elevate Your Streaming Experience
            </p>
          </div>
        </div>
      </div>

      {/* pricing */}
      <PriceWebsite />

    <FooterComponentWebsite />
    </>
  )
}

export default PricingWebsite