import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./card/Card";
//TODO import images/screenshots for carousel cards...

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github Finder",
          desc: "An app built with React.js for finding github user profiles",
          imgSrc:
            "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
          githubLink: "https://github.com/etorres-revature/Github_Finder",
          deployedLink: "https://enigmatic-ocean-42815.herokuapp.com/",
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
