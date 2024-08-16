import { createBrowserRouter } from "react-router-dom";

import UserHome from "./../Pages/UserHome";
import UseSidebar from "./../utility/UseSidebar";
import Livestream from "./../Pages/Livestream";
import Storage from "./../Pages/Storage";
import Knowledge from "./../Pages/Knowledge";
import Setting from "./../Pages/Setting";
import PlanPage from "./../Pages/PlanPage";
import SendMessage from "./../Pages/SendMessage";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Subscription from "./../Pages/Subscription";
import Streamschedule from "./../Pages/Streamschedule";
import CreateStream from "./../Pages/CreateStream";
import ConfirmPassword from "./../Pages/ConfirmPassword";
import SechedulePage from "./../Pages/SechedulePage";
import HomeWebsite from "./../Pages/HomeWebsite";
import AboutWebsite from "./../Pages/AboutWebsite";
import PricingWebsite from "./../Pages/PricingWebsite";
import ContactUsWebsite from "./../Pages/ContactUsWebsite";
import HowItWorksWebsite from "./../Pages/HowItWorksWebsite";
import TermsCondition from "./../Pages/TermsCondition";
import PrivacyPolicy from "./../Pages/PrivacyPolicy";
import BlogsWebiste from "./../Pages/BlogsWebiste";
import SuccessStories from "./../Pages/SuccessStories";
import Disclaimer from "./../Pages/Disclaimer";
import BlogDetails from "./../Pages/BlogDetails";
import ScrollToTop from "./../ScrollToTop";
import Logout from "./../Pages/Logout";
const {
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
} = UseSidebar();
// const routes = ;

const router = createBrowserRouter([
  // {
  //   Path: "/dashboard",
  //   element:
  //     <UserHome
  //       mainContentRef={mainContentRef}
  //       sidebarRef={sidebarRef}
  //       handleToggle={handleToggle}
  //       removeSmRef={removeSmRef}
  //       SmallhandleToggle={SmallhandleToggle}
  //       SmallhandleToggleRemove={SmallhandleToggleRemove}
  //     />

  // },
  { path: "/logout", element: <Logout /> },
  {
    Path: "/livestream",
    element: (
      <Livestream
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    Path: "/sreamschedule",
    element: (
      <Streamschedule
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/storage",
    element: (
      <Storage
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/knowledgebase",
    element: (
      <Knowledge
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/setting",
    element: (
      <Setting
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/newplan",
    element: (
      <PlanPage
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/subscription",
    element: (
      <Subscription
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/message",
    element: (
      <SendMessage
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/createstream",
    element: (
      <SechedulePage
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/schdulestreams",
    element: (
      <CreateStream
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  { path: "/confirmpassword", element: <ConfirmPassword /> },
  {
    path: "/login",
    element: (
      <Login
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },
  {
    path: "/register",
    element: (
      <Register
        mainContentRef={mainContentRef}
        sidebarRef={sidebarRef}
        handleToggle={handleToggle}
        removeSmRef={removeSmRef}
        SmallhandleToggle={SmallhandleToggle}
        SmallhandleToggleRemove={SmallhandleToggleRemove}
      />
    ),
  },

  { path: "/", element: HomeWebsite },
  { path: "/about", element: <AboutWebsite /> },
  { path: "/pricing", element: <PricingWebsite /> },
  { path: "/contactus", element: <ContactUsWebsite /> },
  { path: "/howitworks", element: <HowItWorksWebsite /> },
  { path: "/termsconditions", element: <TermsCondition /> },
  { path: "/privacypolicy", element: <PrivacyPolicy /> },
  { path: "blogs", element: <BlogsWebiste /> },
  { path: "/successtories", element: <SuccessStories /> },
  { path: "/disclaimer", element: <Disclaimer /> },
  { path: "/blogdetails", element: <BlogDetails /> },
]);
export default router;
