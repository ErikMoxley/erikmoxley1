import React from "react";
import { Button } from "reactstrap";
import "../style/About.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";
import er from "../assets/er.jpg";
import ModalExample from "../components/Modal";

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
                  className="er"
                  height="auto"
                  width="250px"
                  src={er}
                  alt=""
                />
              </div>
            </div>
          </Flip>
          <div class="col-md-6 col-sm-12 about-wrapper">
            <Flip top>
              <div class="about-wrapper__info">
                <p class="about-wrapper__info-text">
                  Hello! My name is Erik and I'm from Massachusetts. Thank you
                  for joining me as I learn and work towards becoming a
                  developer in the near future and hopefully an engineer later
                  on. My resume is filled with years of Management/Leadership
                  experience. I've always been highly passionate in technology,
                  gaming, fantasy sports and helping people. In my free time, I
                  enjoy watching MLB and NFL as well as some E-sports and gaming
                  on Twitch. I have a subscription with AMC's A-List and enjoy
                  watching a lot of movies that come out in theaters with my
                  girlfriend. We also enjoy going to theme parks and plan to
                  travel overseas more as we started with visiting Japan in
                  2019.
                </p>
                <p class="about-wrapper__info-text">
                  Growing up, I've always been good with troubleshooting, IT, PC
                  building and problem solving and have decided to finally
                  pursue something I have been most interested in. I enjoy
                  helping, fixing and creating things for people and strongly
                  believe that this path will lead me towards doing just that
                  hopefully as a career. One of my main end goals is to be able
                  to find a way to combine my operations, leadership and
                  business work experience with the skills in technology I have
                  spent a lot of time learning as a career somewhere down the
                  road.
                </p>
                <p class="about-wrapper__info-text">
                  I plan to continue to learn all aspects of full stack web
                  developing and branch out towards whichever direction
                  intrigues me most. Some of the
                  technologies/languages/frameworks/websites I've worked with so
                  far include HTML5, CSS3, Sass, JS, Jquery, Bootstrap4,
                  Netlify, Github as well as React and all it's different tools
                  provided with NPM. I've touched a bit upon backend basics, but
                  have been exposed to Mongodb, Nodejs, and PostgreSQL. Feel
                  free to ask any questions as I'm very open to sharing almost
                  everything about myself and what I'm doing. Thank you, and
                  enjoy.
                </p>
                <span class="d-flex mt-3">
                  <ModalExample />
                  &nbsp; &nbsp; &nbsp;
                  <Button
                    color="secondary"
                    size="small"
                    target="_blank"
                    href="https://www.linkedin.com/in/erikmoxley/"
                  >
                    View LinkedIn
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
                    <Button color="secondary" size="small">
                      Contact
                    </Button>
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
