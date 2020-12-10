import React from "react";
import CardInfo from "./CardInfo";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="d-inline-block g-card" onClick={(e)=>props.click(props.item)}>
      <img
        className="p-card-img"
        src={props.item.imgSrc}
        alt={props.item.title + "screenshot"}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          desc={props.item.desc}
          githubLink={props.item.githubLink}
          deployedLink={props.item.deployedLink}
        />
      )}
    </div>
  );
};

export default Card;
