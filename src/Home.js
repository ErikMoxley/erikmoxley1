import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import About from "./About.js";
import Top from "./Top";
import Contacts from "./Contact";
import Footer from "./Footer";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Top} />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default Home;
