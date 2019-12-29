import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./style/Home.css";
import "./dist/Typist.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Typist from "react-typist";

const Home = props => {
  return (
    <div id="top">
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <Fade left>
            <div className="TypistExample">
              <div className="TypistExample-content">
                <Typist
                  className="TypistExample-message"
                  cursor={{ hideWhenDone: true }}
                >
                  * Easy to use backp
                  <Typist.Delay ms={500} />
                  sace
                  <Typist.Backspace count={5} delay={1000} />
                  <Typist.Delay ms={750} />
                  space
                  <Typist.Delay ms={1250} />
                </Typist>
              </div>
            </div>
          </Fade>
          <Fade right>
            <h1 className="hero">An Inspiring </h1>
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
                <Button color="primary">Know More</Button>
              </Link>
            </Fade>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
