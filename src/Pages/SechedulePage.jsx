import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserSidebar from '../Components/UserSidebar'
import UserNavbar from '../Components/UserNavbar'
import ModalSchedule from '../Components/ModalSchedule'

function SechedulePage({handleShow, mainContentRef,
    sidebarRef,
    handleToggle,
    removeSmRef,
    SmallhandleToggle,
    SmallhandleToggleRemove,}) {

        const [showModal, setShowModal] = useState(false);

        const handleShowModal = () => setShowModal(true);
        const handleCloseModal = () => setShowModal(false);
  return (
    <>
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
            <div className="row cards_sec mt-lg-2">
              

              <div className="col-lg-12 col-md-6 col-sm-12 col_space">
                <div
                  className="card card_design p-3"
                  style={{ height: "605px" }}
                >
                  <div className="row justify-content-center align-items-center" >
                    <h6>Ongoing & Scheduled Streams</h6>
            <div className="col-lg-10">
            <div className="card_gray d-flex justify-content-center align-items-center flex-column gap-4" style={{ height: "500px" }}>
            <Link className="btn btn-new2" onClick={handleShowModal}>
              <FaPlus className="me-1" /> Create Stream
            </Link>
            <p>Go Live now or Schedule a stream for later. 
            </p>
            </div>
        </div>
    </div>
                </div>

                
            </div>
          </div>

        </div>
        </div>

        <ModalSchedule show={showModal} onClose={handleCloseModal}/>
      </main>
    </>
  )
}

export default SechedulePage