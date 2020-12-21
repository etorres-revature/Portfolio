import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../card/Card";

import githubFinder from "./screenshots/github-finder.png";
import googleBooks from "./screenshots/google-books-search.png";
import docketMaster from "./screenshots/docketmaster.png";
import burger from "./screenshots/eat-dat-burger-home.png";
import portfolioEdge from "./screenshots/stock-app.png";
import jsQuiz from "./screenshots/quiz-active.png";
import numGuess from "./screenshots/number-guess.png";
import passwordGen from "./screenshots/password-generator.png";
import webSpeech from "./screenshots/web-speech.png";
import weatherDashboard from "./screenshots/weather-dashboard.png";
import relaxer from "./screenshots/relaxer.png";
import lyricSearch from "./screenshots/lyric-search.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github Finder",
          desc: "An app built with React.js for finding github user profiles",
          imgSrc: githubFinder,
          githubLink: "https://github.com/etorres-revature/Github_Finder",
          deployedLink: "https://enigmatic-ocean-42815.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Google Books API Search",
          desc:
            "Search and save information about books of interest from the Google Books API",
          imgSrc: googleBooks,
          githubLink: "https://github.com/etorres-revature/React-Google_Books",
          deployedLink: "https://lit-citadel-69293.herokuapp.com",
          selected: false,
        },
        {
          id: 2,
          title: "Docket Master",
          desc:
            "Create, track, and update the docket of a fictional court system",
          imgSrc: docketMaster,
          githubLink: "https://github.com/etorres-revature/Docket_Master",
          deployedLink: "https://pure-atoll-36836.herokuapp.com/",
          selected: false,
        },
        {
          id: 3,
          title: "Eat Dat Burger",
          desc: "Make, eat, and re-cook your favorite burgers",
          imgSrc: burger,
          githubLink: "https://github.com/etorres-revature/Eat_Dat_Burger",
          deployedLink: "https://hidden-garden-02467.herokuapp.com/",
          selected: false,
        },
        {
          id: 4,
          title: "Portfolio Edge",
          desc: "A dashboard that provides up-to-the-minute stock information",
          imgSrc: portfolioEdge,
          githubLink: "https://github.com/etorres-revature/Lucky_Mountaineers",
          deployedLink:
            "https://etorres-revature.github.io/Lucky_Mountaineers/",
          selected: false,
        },
        {
          id: 5,
          title: "JavaScript Code Quiz",
          desc:
            "Challenge yourself to learn more about JavaScript and its capabilities",
          imgSrc: jsQuiz,
          githubLink:
            "https://github.com/etorres-revature/JavaScript_Code_Quiz_Challenge",
          deployedLink:
            "https://etorres-revature.github.io/JavaScript_Code_Quiz_Challenge/",
          selected: false,
        },
        {
          id: 6,
          title: "Number Guess",
          desc: "Traditional number guessing game with a modern twist",
          imgSrc: numGuess,
          githubLink: "https://github.com/etorres-revature/Number_Guess",
          deployedLink: "https://etorres-revature.github.io/Number_Guess/",
          selected: false,
        },
        {
          id: 7,
          title: "Password Generator",
          desc: "Generate unique passwords.",
          imgSrc: passwordGen,
          githubLink: "https://github.com/etorres-revature/Password_Generator",
          deployedLink:
            "https://etorres-revature.github.io/Password_Generator/",
          selected: false,
        },
        {
          id: 8,
          title: "Web Speech",
          desc: "Use your computer's Speech Synthesis to turn text to speech",
          imgSrc: webSpeech,
          githubLink: "https://github.com/etorres-revature/Web_Speech",
          deployedLink: "https://etorres-revature.github.io/Web_Speech/",
          selected: false,
        },
        {
          id: 9,
          title: "Weather Dashboard",
          desc: "Search for weather conditions around the globe.",
          imgSrc: weatherDashboard,
          githubLink: "https://github.com/etorres-revature/Weather_Dashboard",
          deployedLink: "https://etorres-revature.github.io/Weather_Dashboard/",
          selected: false,
        },
        {
          id: 10,
          title: "Relaxer",
          desc:
            "Moderate your breathing and listen to soothing tones with this relaxing app",
          imgSrc: relaxer,
          githubLink: "https://github.com/etorres-revature/Relaxer",
          deployedLink: "https://etorres-revature.github.io/Relaxer/",
          selected: false,
        },
        {
          id: 11,
          title: "Lyric Search",
          desc: "Search for lyrics to your favorite songs",
          imgSrc: lyricSearch,
          githubLink: "https://github.com/etorres-revature/Lyric_Search",
          deployedLink: "https://etorres-revature.github.io/Lyric_Search/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({ items });
  };

  makeCards = (items) => {
    return items.map((item) => {
      return (
        <Card
          key={item.id}
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={false}>
        <Row className="justify-content-around">
          {this.makeCards(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
