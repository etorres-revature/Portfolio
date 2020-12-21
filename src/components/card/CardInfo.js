import React from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";

const CardInfo = (props) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="p-card-info text-wrap mb-5" style={style}>
      <p className="p-card-title mb-1">
        <strong>PROJECT TITLE:</strong> {props.title}
      </p>
      <p className="p-card-desc text-wrap">
        <strong>Project Description:</strong> {props.desc}
      </p>
      <a
        className="alignright mt-1"
        href={props.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
      <a
        className="alignleft mt-1"
        href={props.deployedLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Deployed App
      </a>
    </animated.div>
  );
};

export default CardInfo;
