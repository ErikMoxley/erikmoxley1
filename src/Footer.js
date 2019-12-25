import React from "react";
import "./style/Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Content</h5>
            <p>Content will be written here.</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Info Content</h5>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Social Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Made With Content</h5>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>Content made with listed here.</MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: {"Erik Moxley"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
