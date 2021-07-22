import React, { useState } from "react";
import "./App.css";
import { Asteroid } from "./Asteroid";
interface Coor {
  x: number;
  y: number;
}
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [coors, setCoors] = useState<Coor[]>([]);

  return (
    <div>
      <label>
        coor X:
        <input
          type="number"
          value={x}
          onChange={(event) => {
            setX(event.target.valueAsNumber);
          }}
        />
      </label>
      <label>
        coor Y:
        <input
          type="number"
          value={y}
          onChange={(event) => {
            setY(event.target.valueAsNumber);
          }}
        />
      </label>
      <button
        onClick={() => {
          setCoors([...coors, { x: x, y: y }]);
        }}
      >
        add
      </button>

      {coors.map((c) => (
        <Asteroid x={c.x} y={c.y} />
      ))}
    </div>
  );
}

export default App;
