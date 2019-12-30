import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import About from "./About.js";
import Home from "./Home";
import Contacts from "./Contact";
import Footer from "./Footer";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Home />
        <About />
        <Projects />
        <Contacts />
        <Footer />
        <Route path="/about" component={About} />
      </main>
    </BrowserRouter>
  );
}

export default App;
