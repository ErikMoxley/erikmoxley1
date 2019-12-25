import React from "react";
// import Thumbnail from "./Thumbnail.js";
import "./About.css";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      {/* <Thumbnail link="/projects" image="" title="Projects" category="" /> */}

      <p>
        Reprehenderit ipsum ullamco non sit. Voluptate cillum non fugiat commodo
        sunt exercitation ipsum irure aute irure magna. Eiusmod sint anim
        voluptate in mollit est cillum adipisicing enim excepteur. Non do amet
        est aliquip do mollit aliquip aliquip. Ex eu duis dolore culpa voluptate
        aute. Excepteur consequat voluptate proident mollit cupidatat Lorem
        eiusmod voluptate duis duis voluptate ad reprehenderit tempor. Labore
        elit laborum culpa commodo laborum do do Lorem anim est ipsum deserunt.
        In ad minim ullamco id anim. Fugiat incididunt cupidatat dolor cillum
        occaecat cillum dolore. Cupidatat eu excepteur occaecat labore minim
        tempor aliqua sint enim exercitation esse sint. Consectetur nostrud
        Lorem Lorem ex reprehenderit occaecat minim ex. Laborum est dolore quis
        Lorem aute. Do eu adipisicing non id ut proident esse cupidatat.
      </p>

      <div>
        <div class="col-lg-4 col-sm-12">
          <div class="project-wrapper__text">
            <h3 class="project-wrapper__text-title">Github</h3>
            <div>
              <p class="mb-4">
                Check out my Github Page! I will be leaving this here until I
                start working on new personal projects. Some ideas are put into
                Progress repository under 'Thoughts.'
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
              <div data-tilt class="thumbnail rounded">
                <img class="img-fluid" src="./assets/banner.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
