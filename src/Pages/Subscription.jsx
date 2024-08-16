import React,{useState,useEffect} from 'react'
import UserSidebar from '../Components/UserSidebar';
import UserNavbar from '../Components/UserNavbar';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SUBSCRIPTION_PLANS } from './../utility/api.js';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


const packages = [
  {
    id: 1,
    name: 'Basic Plan',
    price: 100,
    discountprice: 80,
    description: 'Basic streaming package with essential features.',
    total_streams: 5,
    total_storage: '50GB',
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: 200,
    discountprice: 150,
    description: 'Pro features for professional streaming.',
    total_streams: 10,
    total_storage: '100GB',
  },
  {
    id: 2,
    name: 'Professional',
    price: 200,
    discountprice: 150,
    description: 'Advanced features for professional streaming.',
    total_streams: 10,
    total_storage: '100GB',
  },
  // Add more mock packages as needed
];
function Subscription({ mainContentRef, sidebarRef, handleToggle, removeSmRef, SmallhandleToggle, SmallhandleToggleRemove }) {

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans=async()=>{
      try {
        let response = await axios.get(SUBSCRIPTION_PLANS);
        if (response.data.status == 'success') {
          setPlans(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        
      }
    }

    fetchPlans();
  }, []);


  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <main>
        <UserSidebar
          sidebarRef={sidebarRef}
          handleToggle={handleToggle}
          removeSmRef={removeSmRef}
          SmallhandleToggle={SmallhandleToggle}
          SmallhandleToggleRemove={SmallhandleToggleRemove}
        />
        {/* <!-- main_content --> */}
        <div
          id="sm_main_content"
          ref={mainContentRef}
          className="main_content_section p-lg-2"
        >
          <div className="container p-0">
            <UserNavbar
              SmallhandleToggle={SmallhandleToggle}
              SmallhandleToggleRemove={SmallhandleToggleRemove}
            />
          </div>
          {/* Middle Content */}
          <div className="container px-lg-4" style={{ marginBottom: "20px" }}>
            <div className="card card_design pb-4 ">
              <div className="mt-3 row justify-content-center align-items-center">
                <div className="mb-2">
                  <h4 className="mb-3">Subscription Plans:</h4>
                  <h6>Select your plan</h6>
                  <p>
                    Update your subscription. You are currently a Free user.
                  </p>
                </div>
                {plans.map((plan) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-3"
                    style={{ display: "flex", flexDirection: "column" }}
                    key={plan.id}
                  >
                    <div
                      className="card card_payment_plan text-start p-4"
                      style={{ flex: 1 }}
                    >
                      <h5>{plan.name}</h5>
                      <h1 className="my-3 fw-900" style={{ color: "#AA0062" }}>
                        {plan.discountprice > 0 &&
                        plan.discountprice !== plan.price ? (
                          <>
                            ${plan.price}
                            <small style={{ fontSize: "16px" }}>
                              {" "}
                              ${plan.discountprice}
                            </small>
                          </>
                        ) : (
                          <>{`$${plan.price}`}</>
                        )}
                      </h1>
                      <div
                        className="item-body"
                        style={{ marginBottom: "60px" }}
                      >
                        {plan.description && (
                          <p className="perc-title ">
                            <span
                              className="perc-title-tooltip d-flex gap-2"
                              title="Package description"
                            >
                              <p>
                                <TiTick />
                              </p>{" "}
                              <span>{plan.description}</span>
                            </span>
                          </p>
                        )}
                        <p className="perc-title">
                          <span
                            className="perc-title-tooltip d-flex gap-2 "
                            title="Platforms available"
                          >
                            <TiTick /> Platforms
                          </span>
                        </p>
                        <p className="perc-title">
                          <span
                            className="perc-title-tooltip d-flex gap-2 "
                            title="Platforms available"
                          >
                            <TiTick />
                            <span className="perc-value">
                              YouTube, Facebook
                            </span>
                          </span>
                        </p>

                        <p className="perc-title">
                          <span
                            className="perc-title-tooltip"
                            title="Total Streams"
                          >
                            <TiTick /> Total Stream: {plan.total_streams} videos
                          </span>
                        </p>

                        <p className="perc-title">
                          <span className="perc-title-tooltip" title="Storage">
                            <TiTick /> Storage {plan.total_storage}
                          </span>
                        </p>
                      </div>
                      <div
                        className="mt-4"
                        style={{ position: "absolute", bottom: "20px" }}
                      >
                        {/* Replace this with appropriate logic for authentication */}
                        <Link
                          to={`/newplan/${plan.id}`}
                          className="btn btn-new2"
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
      </main>
    </>
  );
}


export default Subscription