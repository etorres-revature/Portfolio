import React from "react";
import CardInfo from "./CardInfo";

const Card = (props) => {
  return (
    <div>
      <img
        className=""
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
