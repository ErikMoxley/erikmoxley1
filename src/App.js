import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import Home from "./Home";
import Contacts from "./Contact";
import Footer from "./Footer";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Home} />
        <About />
        <Projects />
        <Contacts />
        <Footer />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
      </main>
    </BrowserRouter>
  );
}

export default App;
