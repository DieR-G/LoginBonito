import React from "react";
import sideStyle from "./css/side.module.css";

function SideContainer(props) {
  let selfStyle = sideStyle.side;
  let bgStyle = {
    backgroundColor: props.color,
  };

  if (props.centered) {
    selfStyle += " " + sideStyle.centered;
  }

  if (props.side === "left") {
    selfStyle += " " + sideStyle.left;
  } else {
    selfStyle += " " + sideStyle.right;
  }

  return (
    <div style={bgStyle} className={selfStyle}>
      {props.children}
    </div>
  );
}

export default SideContainer;
