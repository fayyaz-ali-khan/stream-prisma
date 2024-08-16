import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import UserSidebar from "../Components/UserSidebar";
import UserNavbar from "../Components/UserNavbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const options = [
  "test Video", "mp4"
]

function Streamschedule({
  mainContentRef,
  sidebarRef,
  handleToggle,
  removeSmRef,
  SmallhandleToggle,
  SmallhandleToggleRemove,
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const calendarRef = useRef(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
    setShowModal(true);
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventTitle) {
      setErrors(["Event title is required"]);
      return;
    }

    const calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent({
      title: eventTitle,
      start: selectedDate,
      allDay: true,
    });

    setSuccess("Event added successfully!");
    setShowModal(false);
    setEventTitle("");
    setErrors([]);
  };

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
          <div className="container px-lg-4" style={{ marginBottom: "20px" }}>
            <div className="card card_design">
              <div className="card-body">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  ref={calendarRef}
                  select={handleDateSelect}
                  eventClick={handleEventClick}
                />
              </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title className="fs-5">Setting up a Schedule Stream</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {errors.length > 0 && (
                  <Alert variant="danger">
                    <ul>
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </Alert>
                )}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit} className="form_modal">
                  <Form.Group>
                    <Form.Label className="">
                      Select a pre-created stream from the suggested list:
                    </Form.Label>
                    <Form.Control className="input"
                      as="select"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      placeholder="Select a title"
                    >
                      <option value="">Select a title</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Time Zone
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={eventTitle}
                    >
                      <option value="">UTC</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="eventTitle">
                    <Form.Label>The Title of the Schedule Event:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event title"
                      
                    />
                  </Form.Group>
                  <Form.Group controlId="selectedDate">
                    <Form.Label>Selected Time:</Form.Label>
                    <Form.Control type="time" value="" />
                  </Form.Group>
                  <Form.Group controlId="selectedDate">
                    <Form.Label>Selected Date:</Form.Label>
                    <Form.Control type="text" value={selectedDate} readOnly />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3 btn btn-new2">
                    Save
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
}

Streamschedule.propTypes = {
  mainContentRef: PropTypes.object,
  sidebarRef: PropTypes.object,
  handleToggle: PropTypes.func,
  removeSmRef: PropTypes.func,
  SmallhandleToggle: PropTypes.func,
  SmallhandleToggleRemove: PropTypes.func,
};

export default Streamschedule;
