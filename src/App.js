import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path="/" component={Home} />
        <About />
        <Projects />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
      </main>
    </BrowserRouter>
  );
}

export default App;
