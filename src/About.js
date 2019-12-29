import React from "react";
import { Button } from "reactstrap";
import "./style/About.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";

function About(props) {
  return (
    <section id="about">
      <div class="container">
        <Fade left big>
          <h3 id="to-about" class="section-title">
            About
          </h3>
        </Fade>
        <div class="row about-wrapper">
          <Flip bottom>
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
          </Flip>
          <div class="col-md-6 col-sm-12">
            <Flip top>
              <div class="about-wrapper__info">
                <p class="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
                </p>
                <p class="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
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
                  <Link
                    activeClass="active"
                    to="to-contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                  >
                    <Button color="primary">Social Media</Button>
                  </Link>
                </span>
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
