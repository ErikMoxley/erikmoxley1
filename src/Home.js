import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./style/Home.css";

const Home = props => {
  return (
    <div>
      <Jumbotron className="jumbotron" fluid>
        <Container className="container" fluid>
          <h1 className="hero">
            Hello, my name is <span className="eMox">Erik Moxley,</span>
          </h1>
          <h1 className="hero">An Inspiring Developer.</h1>
          <p className="lead">
            <Button color="primary" href="#about">
              Know More
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
