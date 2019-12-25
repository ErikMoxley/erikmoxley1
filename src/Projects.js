import React from "react";
import Tilt from "react-tilt";
import "./style/Projects.css";
import ghprofile from "./ghprofile.png";

function Projects(props) {
  return (
    <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title dark-blue-text">Projects</h2>

          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">RoboFriends</h3>
                <div>
                  <p class="mb-4">
                    This project was created using ReactJS. Coded along from Web
                    Developer Zero to Mastery by Andrei on Udemy. This will
                    temporarily be here until I figure out what I'd like to
                    build.
                  </p>
                </div>
                <a
                  target="_blank"
                  class="cta-btn cta-btn--hero"
                  href="https://erikmoxley.github.io/robofriends/"
                  rel="noopener noreferrer"
                >
                  See Live
                </a>
                <a
                  target="_blank"
                  class="cta-btn text-color-main"
                  href="https://github.com/ErikMoxley/robofriends/"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a
                  href="https://erikmoxley.github.io/robofriends/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tilt
                    className="Tilt"
                    options={{ max: 20 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <div className="Tilt-inner">
                      <img src={ghprofile} width="400" height="200" alt="" />
                    </div>
                  </Tilt>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">Github</h3>
                <div>
                  <p class="mb-4">
                    Check out my Github Page! I will be leaving this here until
                    I start working on new personal projects. Some ideas are put
                    into Progress repository under 'Thoughts.'
                  </p>
                </div>
                <a
                  target="_blank"
                  class="cta-btn cta-btn--hero"
                  href="https://github.com/erikmoxley/"
                  rel="noopener noreferrer"
                >
                  ErikMoxley
                </a>
                <a
                  target="_blank"
                  class="cta-btn text-color-main"
                  href="https://github.com/ErikMoxley?tab=repositories"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a
                  href="https://github.com/erikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tilt
                    className="Tilt"
                    options={{ max: 20 }}
                    style={{ height: 250, width: 250 }}
                  >
                    <div className="Tilt-inner">
                      <img src={ghprofile} width="400" height="200" alt="" />
                    </div>
                  </Tilt>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
