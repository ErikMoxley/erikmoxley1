import React from "react";
import "../style/Projects.css";
import wk from "../assets/wk.png";
import gh from "../assets/gh.png";
import Tilt from "react-tilt";
import ghprofile from "../assets/ghprofile.png";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";

function Projects(props) {
  return (
    <section id="projects">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <Fade left big>
              <div class="projects text-center">
                <h3 class="section-title">Projects</h3>
              </div>
            </Fade>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-4">
            <div>
              <div>
                <Fade bottom>
                  <Tilt
                    className="Tilt"
                    options={{ max: 20 }}
                    style={{ height: 275, width: 275 }}
                  >
                    <div className="Tilt">
                      <img src={ghprofile} width="250" height="250" alt="" />
                    </div>
                  </Tilt>
                </Fade>
                <Fade left big>
                  <h3>Gatsby Blog</h3>
                  <div>
                    <div>
                      <p>Work in Progress.</p>
                      <Button
                        color="primary"
                        class="cta-btn cta-btn--hero"
                        href="https://distracted-raman-c9a6c1.netlify.com/"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div>
              <div>
                <Fade bottom>
                  <Tilt
                    className="Tilt"
                    options={{ max: 20 }}
                    style={{ height: 275, width: 275 }}
                  >
                    <div className="Tilt">
                      <img src={wk} width="250" height="250" alt="" />
                    </div>
                  </Tilt>
                </Fade>
                <Fade bottom>
                  <h3>Wakatime</h3>
                  <div>
                    <div>
                      <p>https://wakatime.com/@erikmoxley</p>
                      <Button
                        color="primary"
                        target="_blank"
                        class="cta-btn cta-btn--hero"
                        href="https://wakatime.com/@erikmoxley"
                        rel="noopener noreferrer"
                      >
                        Wakatime
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div>
              <div>
                <Fade bottom>
                  <Tilt
                    className="Tilt"
                    options={{ max: 20 }}
                    style={{ height: 275, width: 275 }}
                  >
                    <div className="Tilt">
                      <img src={gh} width="250" height="250" alt="" />
                    </div>
                  </Tilt>
                </Fade>
                <Fade right big>
                  <h3>Github</h3>
                  <div>
                    <div>
                      <p>testing testing testing</p>
                      <Button
                        color="primary"
                        target="_blank"
                        class="cta-btn cta-btn--hero"
                        href="https://github.com/ErikMoxley"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
