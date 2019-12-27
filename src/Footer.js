import React from "react";
import "./style/Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faFontAwesome,
  faReact,
  faInstagram,
  faTwitch,
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MDBFooter color="black" className="footer-bot pt-4 mt-4">
      <MDBContainer fluid className="footer-container text-center text-md-left">
        <MDBRow>
          <MDBCol className="footer-quote" md="3">
            <h2 className="footer-brand" md="3">
              Erik Moxley
            </h2>
            <p>
              "In the expression of grief lies recovery from grief itself." -
              Christopher Priest
            </p>
          </MDBCol>
          <MDBCol className="footer-content1" md="3">
            <h5 className="title">Content</h5>
            <ul>
              <ul>
                <a href="/">Home</a>
              </ul>
              <ul>
                <a href="#about">About</a>
              </ul>
              <ul>
                <a href="#projects">Projects</a>
              </ul>
              <ul>Blog (Coming Soon!)</ul>
            </ul>
          </MDBCol>
          <MDBCol className="footer-social" md="3">
            <h5 className="title">Social</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://github.com/erikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  Github
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.linkedin.com/in/erikmoxley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://discordapp.com/invite/58SevRg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDiscord} size="2x" />
                  &nbsp; Discord
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="footer-social" md="3">
            <h5 className="title">Follow</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://www.facebook.com/vincenterikmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  acebook
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.instagram.com/erik.moxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.twitch.tv/erickmoxley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitch} size="2x" />
                  Twitch.tv
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-content text-center py-3">
        <MDBContainer className="made-with" fluid>
          Content made possible with:<br></br>
          <FontAwesomeIcon icon={faHtml5} size="6x" />
          <FontAwesomeIcon icon={faCss3} size="6x" />
          <FontAwesomeIcon icon={faJs} size="6x" />
          <FontAwesomeIcon icon={faBootstrap} size="6x" />
          <FontAwesomeIcon icon={faFontAwesome} size="6x" />
          <FontAwesomeIcon icon={faReact} size="6x" />
        </MDBContainer>
      </div>
      <div className="footer-copyright text-left py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: {"Erik Moxley"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
