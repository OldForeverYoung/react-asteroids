import React from "react";
import "./App.css";
import { Asteroid } from "./Asteroid";

function App() {
  return (
    <div>
      <Asteroid x={45} y={5} />
      <Asteroid x={60} y={-20} />
      <Asteroid x={-1} y={20} />
    </div>
  );
}

export default App;
