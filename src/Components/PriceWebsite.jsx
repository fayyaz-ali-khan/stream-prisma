import React from 'react'
import { Link } from 'react-router-dom';

function PriceWebsite() {
    const packages = [
        {
          id: 1,
          name: 'Basic Plan',
          price: 200,
          discountprice: 150,
          description: 'Up to 8 simultaneous streams on one or more YouTube channels.',
          total_streams: 1,
          total_storage: '10 GB',
        },
        {
          id: 2,
          name: 'Standard Plan',
          price: 400,
          discountprice: 350,
          description: 'Combine video files into playlists. Set the sequence and duration of playback.',
          total_streams: 5,
          total_storage: '50 GB',
        },
        {
          id: 3,
          name: 'Premium Plan',
          price: 600,
          discountprice: 500,
          description: 'The storage limit for video files and more features.',
          total_streams: 10,
          total_storage: '100 GB',
        },
        {
          id: 4,
          name: 'Ultimate Plan',
          price: 800,
          discountprice: 700,
          description: 'Advanced features with unlimited streams.',
          total_streams: 20,
          total_storage: '200 GB',
        },
      ];
  return (
    <>
    <section className="section_4 my-5" id="section_4">
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Pricing</h1>
          </div>
        </div>
        <div className="col-lg-12 my-3">
          <div className="tab-content py-5" id="tab-contents">
            {/* Tab1 */}
            <div className="tab-pane active" id="simple-tabpanel-1-1" role="tabpanel" aria-labelledby="simple-tab-0">
              <div className="mt-4 row">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="col-lg-3 col-md-4 col-sm-6" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="card card_payment_plan" style={{ flex: 1 }}>
                      <h6 className='text-white'>{pkg.name}</h6>
                      <h1 className="my-3 text-white">
                        {pkg.discountprice > 0 && pkg.discountprice !== pkg.price ? (
                          <>
                            <s>${pkg.price}</s>
                            <br />
                            ${pkg.discountprice}
                          </>
                        ) : (
                          <>
                            ${pkg.price}
                            <br />
                            {/* Example conversion rate */}
                            ₹{(pkg.price * 80).toFixed(2)}
                          </>
                        )}
                      </h1>
                      <div className="item-body" style={{ marginBottom: '60px' }}>
                        <p className="perc-title">
                          <span className="perc-title-tooltip" data-bs-toggle="tooltip" data-bs-original-title="Up to 8 simultaneous streams on one or more YouTube channels. For Twitch, FB, and IG – only 1 stream at the same time (platform limits).">
                            {pkg.description}
                          </span>
                        </p>
                        <p className="perc-value">YouTube, Facebook</p>
                        <p className="perc-title">
                          <span className="perc-title-tooltip" data-bs-toggle="tooltip" data-bs-original-title="Combine video files into playlists. Set the sequence and duration of the playlist playback.">
                            Total Stream: {pkg.total_streams} videos
                          </span>
                        </p>
                        <p className="perc-title">
                          <span className="perc-title-tooltip" data-bs-toggle="tooltip" data-bs-original-title="The storage limit for video files.">
                            Storage {pkg.total_storage}
                          </span>
                        </p>
                      </div>
                      <div className="mt-4" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translate(-50%)' }}>
                        
                          <Link
                            to={'/'}
                            className="btn btn_primary"
                          >
                            Buy Now
                          </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PriceWebsite