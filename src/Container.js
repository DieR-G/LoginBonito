import React from "react";
import style from "./css/side.module.css";

function Container(props) {
  let selfStyle = style.container;
  let bgStyle = { backgroundColor: props.color };
  if (props.centered) {
    selfStyle += " " + style.centered;
  }
  if (props.isSide) {
    selfStyle += " " + style.half;
    if (props.side === "left") {
      selfStyle += " " + style.left;
    } else {
      selfStyle += " " + style.right;
    }
  }
  else if(props.isScreen){
      selfStyle += ' ' + style.screen;
  }
  return (
    <div style={bgStyle} className={selfStyle}>
      {props.children}
    </div>
  );
}

export default Container;
