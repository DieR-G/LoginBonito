import React from "react";
import SideContainer from "./SideContainer";
import Title from "./Title";
import ImageTile from "./ImageTile";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <SideContainer centered={false} color="#010048" side="left">
        <Title color="white">Debería estar trabajando en elementos.</Title>
        <ImageTile imageRef="code.png" height="100" width="100" alt="coding" />
      </SideContainer>
      <SideContainer centered={true} color="white" side="right">
        <LoginForm />
        <ImageTile imageRef="cute.png" height="100" width="100" alt="coding" />
      </SideContainer>
    </div>
  );
}

export default App;
