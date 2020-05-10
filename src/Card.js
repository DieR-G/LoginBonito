import React from "react";
import cardStyle from "./css/card.module.css";

function Card(props) {
  let header;
  if (typeof props.cardTitle != "undefined") {
    header = (
      <div className={cardStyle.header}>
        <span style={{marginLeft:'0.5em',color:props.color}}>{props.cardTitle}</span>
      </div>
    );
  }
  return (
    <div className={cardStyle.card}>
      {header}
      <div className={cardStyle.cardBody}>{props.children}</div>
    </div>
  );
}

export default Card;
