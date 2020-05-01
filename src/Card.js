import React from "react";
import cardStyle from "./css/card.module.css";

function Card(props) {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>
        <span>{props.cardTitle}</span>
        <hr></hr>
      </div>
      <div className={cardStyle.cardBody}>{props.children}</div>
    </div>
  );
}

export default Card;
