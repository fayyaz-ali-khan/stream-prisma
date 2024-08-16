// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./Pages/UserHome";
import UseSidebar from "./utility/UseSidebar";
import Livestream from "./Pages/Livestream";
import Storage from "./Pages/Storage";
import Knowledge from "./Pages/Knowledge";
import Setting from "./Pages/Setting";
import PlanPage from "./Pages/PlanPage";
import SendMessage from "./Pages/SendMessage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Subscription from "./Pages/Subscription";
import Streamschedule from "./Pages/Streamschedule";
import CreateStream from "./Pages/CreateStream";
import ConfirmPassword from "./Pages/ConfirmPassword";
import SechedulePage from "./Pages/SechedulePage";
import HomeWebsite from "./Pages/HomeWebsite";
import AboutWebsite from "./Pages/AboutWebsite";
import PricingWebsite from "./Pages/PricingWebsite";
import ContactUsWebsite from "./Pages/ContactUsWebsite";
import HowItWorksWebsite from "./Pages/HowItWorksWebsite";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import BlogsWebiste from "./Pages/BlogsWebiste";
import SuccessStories from "./Pages/SuccessStories";
import Disclaimer from "./Pages/Disclaimer";
import BlogDetails from "./Pages/BlogDetails";
import ScrollToTop from "./ScrollToTop";
import Logout from "./Pages/Logout";
import PaymentSuccess from "./Pages/PaymentSuccess";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import axios from "axios";

import {loader as subscriptionDetailsLoader} from './Pages/PlanPage'

function App() {
  const loading = useSelector((state) => state.loading.loading);
  const {
    mainContentRef,
    sidebarRef,
    handleToggle,
    removeSmRef,
    SmallhandleToggle,
    SmallhandleToggleRemove,
  } = UseSidebar();

  let token = localStorage.getItem("stram_prisma_access_token");
  if (token) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + JSON.parse(token);
  }
  let x = 0;

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <UserHome
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route
            path="/livestream"
            element={
              <Livestream
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/sreamschedule"
            element={
              <Streamschedule
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/storage"
            element={
              <Storage
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/knowledgebase"
            element={
              <Knowledge
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/setting"
            element={
              <Setting
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/newplan/:id"
            element={
              <PlanPage
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
            loader={subscriptionDetailsLoader}
          ></Route>
          <Route
            path="/subscription"
            element={
              <Subscription
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/message"
            element={
              <SendMessage
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/createstream"
            element={
              <SechedulePage
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/schdulestreams"
            element={
              <CreateStream
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route path="/confirmpassword" element={<ConfirmPassword />}></Route>
          <Route
            path="/login"
            element={
              <Login
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Register
                mainContentRef={mainContentRef}
                sidebarRef={sidebarRef}
                handleToggle={handleToggle}
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}
              />
            }
          ></Route>

          {/* website Routes */}

          <Route path="/" element={<HomeWebsite />}></Route>
          <Route path="/about" element={<AboutWebsite />}></Route>
          <Route path="/pricing" element={<PricingWebsite />}></Route>
          <Route path="/contactus" element={<ContactUsWebsite />}></Route>
          <Route path="/howitworks" element={<HowItWorksWebsite />}></Route>
          <Route path="/termsconditions" element={<TermsCondition />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/blogs" element={<BlogsWebiste />}></Route>
          <Route path="/successtories" element={<SuccessStories />}></Route>
          <Route path="/disclaimer" element={<Disclaimer />}></Route>
          <Route path="/blogdetails" element={<BlogDetails />}></Route>
          <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
