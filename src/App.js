import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/projects" component={Projects} />
      </main>
    </BrowserRouter>
  );
}

export default App;
