import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("whiskas");
  const [opened, setOpened] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      {String(opened)}
      <label>
        <input
          type="checkbox"
          checked={opened}
          onChange={() => {
            setOpened(!opened);
          }}
        />
        Показать
      </label>
      {opened ? (
        <div>
          content 2
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            count: {count}{" "}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
