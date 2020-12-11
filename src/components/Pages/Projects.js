import React from "react";
import Hero from "../Hero";
import Carousel from "../projects/Carousel";

const Projects = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Carousel />
    </div>
  );
};

export default Projects;
