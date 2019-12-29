import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./style/Home.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const Home = props => {
  return (
    <div id="top">
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <Fade left>
            <h1 className="hero">
              Hello, my name is <span className="eMox">Erik Moxley,</span>
            </h1>
          </Fade>
          <Fade right>
            <h1 className="hero">An Inspiring Developer.</h1>
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
