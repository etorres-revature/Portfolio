import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/Layout/MyNavbar";

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
        title: "If you can dream it, I can code it",
        subTitle: "",
        memo: "Check out my Projects",
      },
      about: {
        title: "More about me",
      },
      projects: {
        title: "A few sample projects",
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
          <h1>HELLO WORLD!!</h1>
        </Container>
      </Router>
    );
  }
}

export default App;
