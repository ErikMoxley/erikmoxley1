import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "../style/Top.css";
import "../dist/Typist.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Typist from "react-typist";

const Top = props => {
  return (
    <div id="top">
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <Fade left>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                HELLO, I'm
                <Typist.Delay ms={100} />
                <span className="eMox">
                  Eric K.
                  <Typist.Backspace count={4} delay={1000} />
                  <Typist.Delay ms={750} />k Moxley.
                  <Typist.Delay ms={6590} />
                </span>
              </Typist>
            </div>
          </Fade>
          <Fade right>
            <div className="Typist">
              <Typist className="hero" cursor={{ hideWhenDone: true }}>
                Former Store Manager.
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={21} delay={500} />
                Aspiring Software Engineer.
                <Typist.Delay ms={500} />
                <Typist.Backspace count={18} delay={500} />
                <Typist.Delay ms={1000} />
                Web Developer.
              </Typist>
            </div>
          </Fade>
          <p className="lead">
            <Fade bottom big>
              <Link
                activeClass="active"
                to="to-about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                <Button color="secondary" size="md">
                  Find Out More
                </Button>
              </Link>
            </Fade>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Top;
