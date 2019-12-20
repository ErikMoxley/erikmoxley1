import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import Home from "./Home";
import "./App.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="/">
                <NavItem eventKey="">
                  <NavIcon></NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="about">
                  <NavIcon>
                    <FontAwesomeIcon icon="stroopwafel" size="2x" />
                  </NavIcon>
                  <NavText>About</NavText>
                </NavItem>
                <NavItem eventKey="projects">
                  <NavIcon></NavIcon>
                  <NavText>Projects</NavText>
                </NavItem>
                <NavItem eventKey="articles">
                  <NavIcon></NavIcon>
                  <NavText>Articles</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/articles" component={Articles} />
              <Route path="/projects" component={Projects} />
            </main>
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
