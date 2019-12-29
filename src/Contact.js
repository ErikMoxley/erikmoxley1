import React from "react";
import "./style/Contact.css";
import Fade from "react-reveal/Fade";

function Contact(props) {
  return (
    <section id="contact">
      <div id="to-contact" class="container">
        <Fade left big>
          <h3 class="contact-title">Contact</h3>
        </Fade>
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
