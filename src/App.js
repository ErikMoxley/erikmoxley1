import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import "./App.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

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
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>About</NavText>
                </NavItem>
                <NavItem eventKey="projects">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-device"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Projects</NavText>
                </NavItem>
                <NavItem eventKey="articles">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-device"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Articles</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main className="content">
              <Route exact path="/" component={About} />
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
