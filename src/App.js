import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./components/pages/LandignPage";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import MyNavBar from "./components/layout/MyNavbar";
import MyFooter from "./components/layout/MyFooter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Eric D. Torres",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Front-End Development",
        subTitle: "If you can dream it, I can code it",
        memo: "",
      },
      about: {
        title: "More about me",
      },
      projects: {
        title: "Sample projects",
      },
      resume: {
        title: "EXPERIENCE",
      },
      contact: {
        title: "Be in touch...",
      },
    };
  }
  render() {
    return (
      <Router>
        <MyNavBar />
        <Container className="p-0" fluid={true}>
          <Switch>
            <Route
              exact
              path="/Portfolio"
              render={() => (
                <LandingPage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  memo={this.state.home.memo}
                />
              )}
            />
            <Route
              exact
              path="/projects"
              render={() => <Projects title={this.state.projects.title} />}
            />
            <Route
              exact
              path="/about"
              render={() => <About title={this.state.about.title} />}
            />
            <Route
              exact
              path="/resume"
              render={() => <Resume title={this.state.resume.title} />}
            />

            <Route
              exact
              path="/contact"
              render={() => <Contact title={this.state.contact.title} />}
            />
          </Switch>
          <MyFooter />
        </Container>
      </Router>
    );
  }
}

export default App;
