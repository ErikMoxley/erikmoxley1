// second layer
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./sections/Projects.js";
import About from "./sections/About.js";
import Top from "./sections/Top";
import Contacts from "./sections/Contact";
import Footer from "./components/Footer";
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
