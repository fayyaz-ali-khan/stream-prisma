import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { MdCalendarMonth } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

function ScheduleComponent() {
  const [isScheduled, setIsScheduled] = useState(false);
  const [announcementEnabled, setAnnouncementEnabled] = useState(false);
  const [date, setDate] = useState("2024-08-09");
  const [time, setTime] = useState("09:56");
  const [meridiem, setMeridiem] = useState("AM");
  const [timezone, setTimezone] = useState("Asia/Karachi");
  const [saveSettings, setSaveSettings] = useState(true);


  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4 schedule">
        <div className="d-flex gap-3 align-tems-center">
        <h6 className="mt-2">Ready to Go Live Now?</h6>
        <Form.Check
          type="checkbox"
          label="Schedule for later"
          checked={isScheduled}
          className="btn btn-new2" style={{display:'inline-block', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'}}
          onChange={() => setIsScheduled(!isScheduled)}
        />
        </div>
      </div>

      {isScheduled && (
        <div className="p-3  mt-3 card_gray">
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="date">
                  <Form.Label style={{fontSize:'14px'}}><MdCalendarMonth style={{marginRight:'5px'}}/> Date & Time</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Select
                        value={meridiem}
                        onChange={(e) => setMeridiem(e.target.value)}
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="timezone">
                  <Form.Label style={{fontSize:'14px'}}><FaGlobe style={{marginRight:'5px'}}/> Timezone</Form.Label>
                  <Form.Select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    <option value="Asia/Karachi">
                      Islamabad, Karachi - Pakistan
                    </option>
                    {/* Add more timezones as needed */}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-3">
              <Col>
                <Form.Check
                  type="switch"
                  label="Event Announcement"
                  checked={announcementEnabled}
                  onChange={() => setAnnouncementEnabled(!announcementEnabled)}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Save these announcement settings as default for further events"
                  checked={saveSettings}
                  onChange={() => setSaveSettings(!saveSettings)}
                />
              </Col>
            </div>
          </Form>
        </div>
      )}
    </>
  );
}

export default ScheduleComponent;
