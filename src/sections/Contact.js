import React from "react";
import "../style/Contact.css";
import Fade from "react-reveal/Fade";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faInbox
} from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <section id="contact">
      <div id="to-contact" class="container">
        <Fade left big>
          <h3 class="contact-title">Contact</h3>
        </Fade>
        <p class="contact-message">
          Feel free to contact me via information or social media in footer as
          the functions in the forms are still under construction.
        </p>
        <p class="contact-message">Sorry for the inconvenience.</p>
        <hr className="contact-hr" />
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12 testing123">
            <ul className="residingIn">
              &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="contact-icons"
                color="white"
                size="2x"
              />
              &nbsp; Currently residing in Lowell, MA.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Located ~35-40 mins from Boston,
              MA.)
            </ul>
            <ul className="phoneNum">
              &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="contact-icons"
                color="white"
                size="2x"
              />
              &nbsp;Call
            </ul>
            <ul>
              <FontAwesomeIcon
                icon={faInbox}
                className="contact-icons"
                color="white"
                size="2x"
              />
              &nbsp; VincentErikMoxley@gmail.com
            </ul>
            <hr className="contact-hr" />
          </div>
          <div class="col-md-6 col-sm-12">
            <Form>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="@"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Future site of a form that will work nodemailer."
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
