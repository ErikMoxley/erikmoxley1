import React from "react";
import { Button } from "reactstrap";
import "./style/About.css";

function About(props) {
  return (
    <section id="about">
      <div class="container">
        <h3 class="section-title">About</h3>
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__image">
              <img
                class="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src="https://www.erikmoxley.me/assets/profile.bbefa953ef4744a3efed85090e2aa86d.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__info">
              <p class="about-wrapper__info-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
                earum dolor voluptatum consequatur blanditiis inventore debitis
                fuga numquam voluptate architecto itaque molestiae.
              </p>
              <p class="about-wrapper__info-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
                earum dolor voluptatum consequatur blanditiis inventore debitis
                fuga numquam voluptate architecto itaque molestiae.
              </p>
              <span class="d-flex mt-3">
                <Button
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/erikmoxley/"
                >
                  View Resume
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button color="primary" href="#contact">
                  Social Media
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
