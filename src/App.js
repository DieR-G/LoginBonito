import React from "react";
import SideContainer from "./SideContainer";
import Title from "./Title";
import ImageTile from "./ImageTile";
import LoginForm from "./LoginForm";
import Card from "./Card";
import Container from "./Container";

function App() {
  let color = "#DC6461";
  return (
    <div>
        <Container isSide={true} centered={false} color={color} side="left">
          <Title color="white">Debería estar haciendo tareas.</Title>
          <ImageTile
            imageRef="code.png"
            height="100"
            width="100"
            alt="coding"
          />
        </Container>
        <Container isSide={true} side="right" centered={true} color="white">
          <LoginForm title="Login" color={color} />
        </Container>
    </div>
  );
}

export default App;
