import React, { useState } from 'react'
import UserSidebar from '../Components/UserSidebar'
import UserNavbar from '../Components/UserNavbar'
import AccordianItem from '../Components/AccordianItem';

function Knowledge({ mainContentRef, sidebarRef, handleToggle, removeSmRef, SmallhandleToggle, SmallhandleToggleRemove }) {
    const [activeTab, setActiveTab] = useState('link1');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleAccordionClick = (accordion) =>
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  return (
    <>
      
    <main>
        
    <UserSidebar sidebarRef={sidebarRef} 
                handleToggle={handleToggle} 
                removeSmRef={removeSmRef}
                SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}/>
        {/* <!-- main_content --> */}
      <div
            id="sm_main_content"
        ref={ mainContentRef }
        className="main_content_section p-lg-2">
        <div className="container p-0">
            <UserNavbar SmallhandleToggle={SmallhandleToggle}
            SmallhandleToggleRemove={SmallhandleToggleRemove}/>
        </div>

      {/* Middle Content */}
      <div className="container px-lg-4"  style={{ marginBottom: "20px" }}>
      <div className="row cards_sec mt-lg-2">
        <div className="col-lg-12 col_space">
          <div className="card card_design" style={{ height: 'auto' }}>
            <h2 className="my-2">Welcome to the Knowledge Base!</h2>
            <p className="my-2">
              Here, you'll discover everything you need about the tool and how to launch successful 24/7 continuous
              streaming. Please pay attention to the Lessons section, which comprises 5 blocks covering Stream Prisma's
              functions and optimal usage.
            </p>
            <p className="my-2">
              Completing the tutorial will take approximately <strong>30 minutes</strong>. It will enable you to rapidly
              grasp Stream Prisma and utilize it effectively for your channel.
            </p>

            <div className="row mt-4 mb-2">
              <div className="col-lg-3">
                <h5>Category</h5>
                <div
                  className="nav flex-column nav-pills text-center mt-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className={`nav-link ${activeTab === 'link1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('link1')}
                    role="tab"
                    aria-controls="v-pills-link1"
                    aria-selected={activeTab === 'link1'}
                  >
                    Payments and Subscriptions
                  </a>
                  <a
                    className={`nav-link ${activeTab === 'link2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('link2')}
                    role="tab"
                    aria-controls="v-pills-link2"
                    aria-selected={activeTab === 'link2'}
                  >
                    Storage
                  </a>
                  <a
                    className={`nav-link ${activeTab === 'link3' ? 'active' : ''}`}
                    onClick={() => handleTabClick('link3')}
                    role="tab"
                    aria-controls="v-pills-link3"
                    aria-selected={activeTab === 'link3'}
                  >
                    Issues
                  </a>
                  <a
                    className={`nav-link ${activeTab === 'link4' ? 'active' : ''}`}
                    onClick={() => handleTabClick('link4')}
                    role="tab"
                    aria-controls="v-pills-link4"
                    aria-selected={activeTab === 'link4'}
                  >
                    Stream Scheduler
                  </a>
                  <a
                    className={`nav-link ${activeTab === 'link5' ? 'active' : ''}`}
                    onClick={() => handleTabClick('link5')}
                    role="tab"
                    aria-controls="v-pills-link5"
                    aria-selected={activeTab === 'link5'}
                  >
                    Balance
                  </a>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 'link1' ? 'show active' : ''}`}
                    id="v-pills-link1"
                    role="tabpanel"
                    aria-labelledby="v-pills-link1-tab"
                  >
                    <h5>Balance</h5>
                    <div className="accordion accordion-borderless mt-3" id="accordionFlushExampleX">
                      <AccordianItem
                        id="one"
                        title="How to get another subscription?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        Or on the main page of your account (Control Panel). Pay attention to the right sidebar. Here
                        you can find useful information for service users (links to new articles, video tutorials). At
                        the very bottom you will see a window with information about the additional server. By clicking
                        on this box, you will immediately be able to issue another subscription.
                      </AccordianItem>
                      <AccordianItem
                        id="two"
                        title="I replenished the Balance via cryptocurrency, but the subscription was not renewed; what should I do?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        The average time for crediting funds to the Balance is 1–5 hours. If it’s been more than 5 hours
                        since you transferred funds to the Balance, and the subscription has not been renewed, write to
                        the support chat, our employees will individually advise you on how to solve the problem.

                        Important!

                        Don't forget to take into account the fee of the exchange you use for the transaction. After
                        replenishing funds on the Balance, pay attention to the entered amount. Perhaps the amount
                        entered was less than the subscription cost due to the fee. For example, you replenished the
                        Balance for the exact amount of the package cost $79, and $78.60 was credited to the Balance
                        ($0.40 was withheld by the platform when transferring cryptocurrency). In this case, if your
                        payment methods do not have a bank card from which you can withdraw the remaining $0.40, the
                        withdrawal of funds from the Balance and the renewal of the subscription will not occur.
                      </AccordianItem>
                      <AccordianItem
                        id="three"
                        title="I signed up for the Trial, but want to sign up for a paid subscription without waiting for the end of the trial period. What should I do?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        We’re glad that you liked the service and decided to stay with us 🙂

                        Let's launch as many profitable streams as possible!

                        You can sign up for a new subscription in 3 ways:

                        On the StreamPrisma lending page. In Account Settings in the Subscriptions section.
                      </AccordianItem>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'link2' ? 'show active' : ''}`}
                    id="v-pills-link2"
                    role="tabpanel"
                    aria-labelledby="v-pills-link2-tab"
                  >
                    <h4>Storage</h4>
                    <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                      <AccordianItem
                        id="one"
                        title="How to expand Storage for files?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        If you need to expand the Storage - write to the support chat. Our specialists will individually
                        evaluate the server and suggest further actions.
                      </AccordianItem>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'link3' ? 'show active' : ''}`}
                    id="v-pills-link3"
                    role="tabpanel"
                    aria-labelledby="v-pills-link3-tab"
                  >
                    <h4>Issues</h4>
                    <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                      <AccordianItem
                        id="one"
                        title="I lost monetization on streams, what should I do?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        StreamPrisma service cannot be subject to any sanctions since you are simply streaming content
                        using the service.

                        Disconnecting from monetization depends on what content the user adds to start looped streams.
                        As a reminder, creating videos for broadcasts is subject to the rules of the platforms where you
                        plan to send the stream.

                        We strongly recommend that you follow the advice on the length of the video file for broadcast.
                        Do not use short videos for 5-10 minutes and loop them. It is better if the duration of the
                        content for the broadcast is at least 30 minutes, optimally - an hour and a half.

                        There was a case when a user was banned from monetization for repeating too short a video
                        segment in a looped stream.
                        You can read more about the reasons for disabling monetization and how to solve this problem in
                        Google.
                      </AccordianItem>
                      <AccordianItem
                        id="two"
                        title="The broadcast has stopped or was interrupted, what should I do?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        Most often, the broadcast stops or is interrupted for 2 reasons:

                        The video file for the looped broadcast does not meet the platform requirements on which you
                        started the stream. We advise you to pay attention to video optimization. We wrote about
                        optimization in more detail above. Temporary disruptions on the platforms. We recommend you
                        double-check whether your video meets the platform requirements and whether the video file is
                        optimized. Try restarting the stream, and also check the broadcast settings and broadcast key
                        settings (whether the specified video file resolution and frame rate match the platform
                        settings). If, after all the checks, the problem with the broadcast has not been resolved - write
                        to the support chat, we will help you 🙂
                      </AccordianItem>
                      <AccordianItem
                        id="three"
                        title="I want to stream live streams or add my own live video. How do I do this?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        It’s currently impossible to launch live streams or add your own live video to
                        StreamPrisma. We work on this functionality and will notify our users of new updates.

                        The good news is that we have a simple option for those who want to switch from the StreamPrisma
                        service to launch live streams.

                        You need to choose a tariff with your provider that includes the largest number of additional
                        streams and independently launch live broadcasts with OBS, OneStream or any other software for
                        streaming to a large number of sites.

                        If necessary, we can give recommendations and provide guidance for the OBS settings.
                      </AccordianItem>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'link4' ? 'show active' : ''}`}
                    id="v-pills-link4"
                    role="tabpanel"
                    aria-labelledby="v-pills-link4-tab"
                  >
                    <h4>Stream Scheduler</h4>
                    <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                      <AccordianItem
                        id="one"
                        title="What is the Stream Scheduler for?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        We created Stream Scheduler to make streaming easier for our users.

                        Let's take a closer look at the main features:

                        The scheduling tool is designed to allow users to set up and manage their streams effortlessly.
                        You can plan your streams and configure them to start at specific times, making it easier to
                        maintain a consistent streaming schedule.
                      </AccordianItem>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'link5' ? 'show active' : ''}`}
                    id="v-pills-link5"
                    role="tabpanel"
                    aria-labelledby="v-pills-link5-tab"
                  >
                    <h4>Balance</h4>
                    <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                      <AccordianItem
                        id="one"
                        title="How to view the balance?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        To view your current balance, you can navigate to the Account Settings in your control panel.
                        There, under the Balance section, you can see the amount you have available.
                      </AccordianItem>
                      <AccordianItem
                        id="two"
                        title="How to top up the balance?"
                        active={activeAccordion}
                        onClick={handleAccordionClick}
                      >
                        You can top up your balance via various payment methods. To do this, go to the Account Settings
                        and navigate to the Balance section. There, you can choose your preferred payment method and
                        follow the instructions to complete the transaction.
                      </AccordianItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='my-4' >
            <h5 className="mb-3">If you have any questions</h5>
            <p className="my-3">
              contact us via chat or social networks. Our managers are always in touch and will be happy to help you!
            </p>
            <p className="my-2">Please note that our support service responds in English.</p>
            </div>
          </div>
        </div>
      </div>
    </div>



      
      </div>
    </main>
    </>
  )
}

export default Knowledge