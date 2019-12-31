import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";
import "../style/Modal.css";

const ModalExample = props => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={e => e.preventDefault()}></Form>
      <Button color="secondary" onClick={toggle}>
        Work History
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
      >
        <ModalHeader toggle={toggle}>Work Experience</ModalHeader>
        <ModalBody>
          <div class="exp-container">
            <div class="timeline-block timeline-block-left">
              <div class="timeline-content work-name">
                <h3>Walgreens Boots Alliance</h3>
                <span>2012-2019</span>
              </div>
            </div>
            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Store Manager</h3>
                <span>2018-2019</span>
                <p>
                  Sales, Profitability, Asset Protection, Training & development
                  of all team members. Customer/Patient Experience. Compliance
                  with State and Employment Laws/Regulations. Scheduling
                  (Workforce), Hiring, Promotion and Termination Decisions,
                  Payroll (Kronos) Management. Managed ~20 team members
                  (Pharmacy Manager, ASMs and SFLs. Developed employee
                  performance plans w/ deadlines.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Assistant Store Manager</h3>
                <span>2015-2018</span>
                <p>
                  Managed ~10-15 team members DHs, CSAs. Communication of
                  corporate initiatives in one on ones or group meetings daily.
                  Store Inventory Management, supervised all control of store
                  money. Participated in company and on-the-job training to
                  improve skills and productivity and attends training requested
                  by District Management and corporate. Completed Drug Store
                  Management training program during specified timeframe(May
                  2016.)
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Shift Leader</h3>
                <span>2014-2015</span>
                <p>
                  Opened and closed stores, systems start-ups, cash handling,
                  floor/stockroom cleanliness. Ensured staff trained in all
                  computer,tech systems and software (e.g. Nextgen registers,
                  StoreNet, Intercom+, etc.) Ensured response to all systems
                  problems.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>CSA</h3>
                <span>2012-2014</span>
                <p>
                  Modeled and delivered a distinctive and delightful customer
                  experience. Performed basic store operations ranging from cash
                  handling, working stock, resets/revisions, using tools,
                  applications, and devices to assist and meet all customers
                  needs.
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
