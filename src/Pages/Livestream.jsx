import React, { useState } from 'react'
import UserSidebar from '../Components/UserSidebar';
import UserNavbar from '../Components/UserNavbar';


const videos = [
  { id: 1, video: 'video1.mp4', title: 'Video 1', date: '2023-08-01' },
  { id: 2, video: 'video2.mp4', title: 'Video 2', date: '2023-08-02' },
  // Add more videos as needed
];

function Livestream({ mainContentRef, sidebarRef, handleToggle, removeSmRef, SmallhandleToggle, SmallhandleToggleRemove }) {
  // const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedTab, setSelectedTab] = useState('live');
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    streamKey: '',
    streamUrl: '',
    videoLink: '',
  });
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
            className="main_content_section">
            <div className="container p-0">
                <UserNavbar SmallhandleToggle={SmallhandleToggle}
                SmallhandleToggleRemove={SmallhandleToggleRemove}/>
            </div>
          <hr />
    
          {/* Middle Content */}
          <div className="container">
      

      <div className="alert-section">
        {/* Success or Error Alerts */}
        {/* Example: <div className="alert alert-success">Success message</div> */}
      </div>

      <div className="live-stream mt-4 pb-4">
        <div className="text-center">
          <h4 className="text-uppercase fw-bolder fs-md-2" style={{ color: '#595958', fontSize: '24px' }}>
            Welcome to the streaming
          </h4>
        </div>

        <div className="row my-4 px-2">
          <div className="col-lg-3 col-md-6 d-flex align-items-center">
            <h5 style={{ fontSize: '22px', color: '#e79911' }} className="text-uppercase">
              Youtube/ Facebook
            </h5>
          </div>
          <div className="col-lg-9 col-md-6 text-end">
            <a href="#add_stream" className="btn btn-primary">Add Stream</a>
          </div>
        </div>

        <div className="row my-4">
          {videos.map(video => (
            <div className="col-lg-4 col-md-6 video-card" key={video.id}>
              <div className="card mb-3" style={{ borderRadius: '10px' }}>
                <video controls style={{ borderRadius: '10px' }}>
                  <source src={video.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <p>{video.title}</p>
                  <p>{video.date}</p>
                  <button className="btn btn-danger" >Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="add-stream-section" id="add_stream">
          <div className="card p-3">
            <ul className="nav nav-tabs border-0 gap-2 mt-3 d-flex justify-content-start" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${selectedTab === 'live' ? 'active' : ''}`}
                  onClick={() => handleTabChange('live')}
                  role="tab"
                >
                  Live
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${selectedTab === 'video' ? 'active' : ''}`}
                  onClick={() => handleTabChange('video')}
                  role="tab"
                >
                  Video
                </a>
              </li>
            </ul>

            <form >
              <div className="tab-content mt-3">
                {selectedTab === 'live' && (
                  <div className="tab-pane active">
                    <div className="row">
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          className="mt-2 form-control"
                          id="title"
                          name="title"
                          value={formData.title}
                          placeholder="Title"
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="platform">Select Group</label>
                        <select
                          name="platform"
                          className="mt-2 form-control"
                          id="platform"
                          value={formData.platform}
                          required
                        >
                          <option value="">Select Group</option>
                          <option value="youtube">YouTube</option>
                          <option value="facebook">Facebook</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="streamKey">Stream Key</label>
                        <input
                          type="text"
                          className="mt-2 form-control"
                          id="streamKey"
                          name="streamKey"
                          value={formData.streamKey}
                          placeholder="Stream Key"
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="streamUrl">Stream URL</label>
                        <input
                          type="text"
                          className="mt-2 form-control"
                          id="streamUrl"
                          name="streamUrl"
                          value={formData.streamUrl}
                          placeholder="Stream URL"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'video' && (
                  <div className="tab-pane">
                    <label htmlFor="videoLink">Select a file from Storage?</label>
                    <select
                      name="videoLink"
                      className="mt-2 form-control"
                      id="videoLink"
                      value={formData.videoLink}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Video</option>
                      {videos.map(video => (
                        <option key={video.id} value={video.video}>{video.video}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <button type="submit" className="btn btn-primary">SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
          
          </div>
        </main>
    </>
  )
}

export default Livestream